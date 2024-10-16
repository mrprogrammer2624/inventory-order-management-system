import { axiosApi } from "@/axiosApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await axiosApi({
    method: "POST",
    url: "/api/login",
    data: credentials,
  });
  return response.data;
});

export const signUp = createAsyncThunk("auth/signUp", async (userData) => {
  const response = await axiosApi.post("/api/signup", userData);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
