import { axiosApi } from "@/axiosApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axiosApi.get("/api/products");
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (productData) => {
    const response = await axiosApi.post("/api/products", productData);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (productData) => {
    const response = await axiosApi.put(
      `/api/products/${productData.id}`,
      productData
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId) => {
    await axiosApi.delete(`/api/products/${productId}`);
    return productId;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    cart: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
