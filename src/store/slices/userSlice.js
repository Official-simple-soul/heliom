import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createSellerAccount,
  updateSellerAccount,
  deleteSellerAccount,
  createBuyerAccount,
  getBuyerAccounts,
  updateBuyerAccount,
  deleteBuyerAccount,
  getSellerAccounts,
} from '@/services/account.service';
import { saveToLocalStorage, getFromLocalStorage } from './helper';

const initialSellers = getFromLocalStorage('sellers');
const initialBuyers = getFromLocalStorage('buyers');

export const createSeller = createAsyncThunk(
  'user/createSeller',
  async (sellerData, { rejectWithValue }) => {
    try {
      await createSellerAccount(sellerData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSellers = createAsyncThunk(
  'user/fetchSellers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getSellerAccounts();
      saveToLocalStorage('sellers', response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateSeller = createAsyncThunk(
  'user/updateSeller',
  async (sellerData, { rejectWithValue }) => {
    try {
      await updateSellerAccount(sellerData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteSeller = createAsyncThunk(
  'user/deleteSeller',
  async (sellerId, { rejectWithValue }) => {
    try {
      const response = await deleteSellerAccount(sellerId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createBuyer = createAsyncThunk(
  'user/createBuyer',
  async (buyerData, { rejectWithValue }) => {
    try {
      const response = await createBuyerAccount(buyerData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBuyers = createAsyncThunk(
  'user/fetchBuyers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBuyerAccounts();
      saveToLocalStorage('buyers', response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateBuyer = createAsyncThunk(
  'user/updateBuyer',
  async (buyerData, { rejectWithValue }) => {
    try {
      return await updateBuyerAccount(buyerData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBuyer = createAsyncThunk(
  'user/deleteBuyer',
  async (buyerId, { rejectWithValue }) => {
    try {
      return await deleteBuyerAccount(buyerId);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  sellers: initialSellers,
  buyers: initialBuyers,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSeller.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSeller.fulfilled, (state, action) => {
        state.loading = false;
        state.sellerProfile = action.payload;
      })
      .addCase(createSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSellers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellers.fulfilled, (state, action) => {
        state.loading = false;
        state.sellers = action.payload;
      })
      .addCase(fetchSellers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateSeller.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSeller.fulfilled, (state, action) => {
        state.loading = false;
        state.sellerProfile = action.payload;
      })
      .addCase(updateSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteSeller.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteSeller.fulfilled, (state) => {
        state.loading = false;
        state.sellerProfile = null;
      })
      .addCase(deleteSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle buyer actions
    builder
      .addCase(createBuyer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBuyer.fulfilled, (state, action) => {
        state.loading = false;
        state.buyerProfile = action.payload;
      })
      .addCase(createBuyer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBuyers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBuyers.fulfilled, (state, action) => {
        state.loading = false;
        state.buyers = action.payload;
      })
      .addCase(fetchBuyers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateBuyer.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBuyer.fulfilled, (state, action) => {
        state.loading = false;
        state.buyerProfile = action.payload;
      })
      .addCase(updateBuyer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteBuyer.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBuyer.fulfilled, (state) => {
        state.loading = false;
        state.buyerProfile = null;
      })
      .addCase(deleteBuyer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
