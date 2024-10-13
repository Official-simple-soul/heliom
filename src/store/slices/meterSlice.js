import { createSlice } from '@reduxjs/toolkit';
import { fetchfluxDBData } from '@/services/fluxdata.service';

const initialState = {
  dataPipe: {},
  consumers: [],
};

let intervalId = null;

const meterSlice = createSlice({
  name: 'meter',
  initialState,
  reducers: {
    setDataPipe: (state, action) => {
      state.dataPipe = { ...state.dataPipe, ...action.payload };
    },
    registerDataConsumer: (state, action) => {
      const { key, query, interval } = action.payload;

      state.consumers.push({ key, query, interval, last_update: 0 });
    },
    updateConsumer: (state, action) => {
      const { key, currentTime } = action.payload;
      const consumerIndex = state.consumers.findIndex((c) => c.key === key);
      if (consumerIndex >= 0) {
        state.consumers[consumerIndex].last_update = currentTime;
      }
    },
    clearConsumers: (state) => {
      state.consumers = [];
    },
  },
});

export const startPolling = () => (dispatch, getState) => {
  if (intervalId) return;

  intervalId = setInterval(() => {
    const { consumers } = getState().meter;
    const currentTime = Date.now();

    consumers.forEach(({ key, query, last_update, interval }) => {
      if (currentTime - last_update > interval) {
        fetchfluxDBData(query)
          .then((response) => {
            dispatch(setDataPipe({ [key]: response }));
            dispatch(updateConsumer({ key, currentTime }));
          })
          .catch((err) =>
            console.error(`Error fetching data for ${key}:`, err)
          );
      }
    });
  }, 1000);
};

export const stopPolling = () => () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

export const {
  setDataPipe,
  registerDataConsumer,
  updateConsumer,
  clearConsumers,
} = meterSlice.actions;

export default meterSlice.reducer;
