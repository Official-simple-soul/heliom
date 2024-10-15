import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { callApi } from '@/hooks/api';
import {
  getAccountProfile,
  updateAccountProfile,
} from '@/services/account.service';
import { getFromLocalStorage, saveToLocalStorage } from './helper';

interface Credentials {
  email?: string;
  username?: string;
  password: string;
}

interface AccountProfile {
  id: string;
  username: string;
  email: string;
  token: string;
}

interface CurrentUser {
  type: string;
}

interface AuthState {
  accountProfile: AccountProfile | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  currentUser: CurrentUser | null;
}

const currentUser = getFromLocalStorage('currentUser');

const encodeFormData = (data: Credentials) => {
  return Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent((data as never)[key])}`
    )
    .join('&');
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeFormData(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed');
      }

      const data: AccountProfile = await response.json();
      saveToLocalStorage('accountProfile', data);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (formData: Credentials, { dispatch, rejectWithValue }) => {
    try {
      await callApi(
        'POST',
        '/register',
        formData as unknown as null,
        null,
        {},
        true
      );

      const credentials = {
        username: formData.email,
        password: formData.password,
      };

      const loginResponse = await dispatch(loginUser(credentials)).unwrap();
      return loginResponse;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

export const fetchAccountProfile = createAsyncThunk(
  'auth/fetchAccountProfile',
  async (_, { rejectWithValue }) => {
    try {
      return await getAccountProfile();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

export const updateAccountProfileThunk = createAsyncThunk(
  'auth/updateAccountProfile',
  async (profileData: AccountProfile, { rejectWithValue }) => {
    try {
      return await updateAccountProfile(profileData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

const initialState: AuthState = {
  accountProfile: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  currentUser: currentUser,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccountProfile: (state, action: PayloadAction<AccountProfile>) => {
      state.accountProfile = action.payload;
      state.isAuthenticated = true;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      saveToLocalStorage('currentUser', action.payload);
    },
    logout: (state) => {
      state.accountProfile = null;
      state.isAuthenticated = false;
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('accountProfile');
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        signUpUser.fulfilled,
        (state, action: PayloadAction<AccountProfile>) => {
          state.loading = false;
          state.accountProfile = action.payload;
          state.isAuthenticated = true;
        }
      )
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AccountProfile>) => {
          state.loading = false;
          state.accountProfile = action.payload;
          state.isAuthenticated = true;
          saveToLocalStorage('accountProfile', action.payload);
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(fetchAccountProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAccountProfile.fulfilled,
        (state, action: PayloadAction<AccountProfile>) => {
          state.loading = false;
          state.accountProfile = action.payload;
        }
      )
      .addCase(fetchAccountProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(updateAccountProfileThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateAccountProfileThunk.fulfilled,
        (state, action: PayloadAction<AccountProfile>) => {
          state.loading = false;
          state.accountProfile = action.payload;
        }
      )
      .addCase(updateAccountProfileThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setAccountProfile, setCurrentUser, logout } = authSlice.actions;
export default authSlice.reducer;
