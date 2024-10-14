import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  getAccountProfile,
  updateAccountProfile,
} from '@/services/account.service';
import { callApi, createData } from '@/hooks/api';

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
  // Add any other fields that are part of the account profile
}

interface AuthState {
  accountProfile: AccountProfile | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const saveToLocalStorage = (key: string, value: unknown) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

const encodeFormData = (data: Credentials) => {
  return Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent((data as never)[key])}`
    )
    .join('&');
};

// Thunk for logging in a user
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
        throw new Error(errorData.message || 'Login failed');
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

// Thunk for signing up a user and automatically logging in
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (formData: Credentials, { dispatch, rejectWithValue }) => {
    try {
      // await createData('/register', formData);
      await callApi('POST', '/register', formData, null, {}, true);

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

// Thunk for fetching account profile
export const fetchAccountProfile = createAsyncThunk(
  'auth/fetchAccountProfile',
  async (userId: string, { rejectWithValue }) => {
    try {
      return await getAccountProfile(userId);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

// Thunk for updating account profile
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
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccountProfile: (state, action: PayloadAction<AccountProfile>) => {
      state.accountProfile = action.payload;
      state.isAuthenticated = true;
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

export const { setAccountProfile, logout } = authSlice.actions;
export default authSlice.reducer;
