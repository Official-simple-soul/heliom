import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  listDevices,
  createDevice,
  updateDevice,
  deleteDevice,
  activateDevice,
  getDevice,
} from '@/services/device.service';
import { setLoading } from '@/store/slices/generalSlice';

interface Device {
  id: string;
  name: string;
  status: string;
  [key: string]: unknown;
}

interface DeviceState {
  devices: Device[];
  deviceProfile: Device | null;
  loading: boolean;
  error: string | null;
}

const initialState: DeviceState = {
  devices: [],
  deviceProfile: null,
  loading: false,
  error: null,
};

// Async Thunks
export const fetchDevices = createAsyncThunk<
  Device[],
  { orgType: string; orgId: string },
  { rejectValue: string }
>(
  'device/fetchDevices',
  async ({ orgType, orgId }, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true)); // Set global loading to true
    try {
      const response = await listDevices(orgType, orgId);
      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    } finally {
      dispatch(setLoading(false)); // Set global loading to false
    }
  }
);

export const createNewDevice = createAsyncThunk<
  void,
  { orgType: string; orgId: string; deviceData: Device },
  { rejectValue: string }
>(
  'device/createDevice',
  async ({ orgType, orgId, deviceData }, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    try {
      await createDevice(orgType, orgId, deviceData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const updateExistingDevice = createAsyncThunk<
  void,
  { orgType: string; orgId: string; deviceId: string; deviceData: Device },
  { rejectValue: string }
>(
  'device/updateDevice',
  async (
    { orgType, orgId, deviceId, deviceData },
    { dispatch, rejectWithValue }
  ) => {
    dispatch(setLoading(true));
    try {
      await updateDevice(orgType, orgId, deviceId, deviceData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const deleteExistingDevice = createAsyncThunk<
  void,
  { orgType: string; orgId: string; deviceId: string },
  { rejectValue: string }
>(
  'device/deleteDevice',
  async ({ orgType, orgId, deviceId }, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    try {
      await deleteDevice(orgType, orgId, deviceId);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const activateExistingDevice = createAsyncThunk<
  void,
  { orgType: string; orgId: string; deviceId: string },
  { rejectValue: string }
>(
  'device/activateDevice',
  async ({ orgType, orgId, deviceId }, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    try {
      await activateDevice(orgType, orgId, deviceId);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const fetchDevice = createAsyncThunk<
  Device,
  { orgType: string; orgId: string; deviceId: string },
  { rejectValue: string }
>(
  'device/fetchDevice',
  async ({ orgType, orgId, deviceId }, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    try {
      return await getDevice(orgType, orgId, deviceId);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

// Slice
const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchDevices.fulfilled,
        (state, action: PayloadAction<Device[]>) => {
          state.loading = false;
          state.devices = action.payload;
        }
      )
      .addCase(
        fetchDevices.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Failed to fetch devices';
        }
      )

      .addCase(createNewDevice.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewDevice.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(
        createNewDevice.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Failed to create device';
        }
      )

      .addCase(updateExistingDevice.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateExistingDevice.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(
        updateExistingDevice.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Failed to update device';
        }
      )

      .addCase(deleteExistingDevice.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteExistingDevice.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(
        deleteExistingDevice.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Failed to delete device';
        }
      )

      .addCase(activateExistingDevice.pending, (state) => {
        state.loading = true;
      })
      .addCase(activateExistingDevice.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(
        activateExistingDevice.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Failed to activate device';
        }
      )

      .addCase(fetchDevice.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchDevice.fulfilled,
        (state, action: PayloadAction<Device>) => {
          state.loading = false;
          state.deviceProfile = action.payload;
        }
      )
      .addCase(
        fetchDevice.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Failed to fetch device';
        }
      );
  },
});

export default deviceSlice.reducer;
