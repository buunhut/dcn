import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProducts: [
    {
      productId: 1,
      caterogy: "cloud-platform",
      productName: "Bộ phát wifi",
      price: 5000000,
      img: "sp1.jpeg",
      detail: "mô tả chi tiết NW5678",
    },
    {
      productId: 2,
      caterogy: "cloud-platform",
      productName: "Thiết bị chuyển mạch hiệu DCN NW9978",
      price: 7000000,
      img: "",
      detail: "mô tả chi tiết NW9978",
    },
    {
      productId: 3,
      caterogy: "cloud-platform",
      productName: "Thiết bị chuyển mạch hiệu DCN NW5678",
      price: 5000000,
      img: "",
      detail: "mô tả chi tiết NW5678",
    },
    {
      productId: 4,
      caterogy: "cloud-platform",
      productName: "Thiết bị chuyển mạch hiệu DCN NW9978",
      price: 9000000,
      img: "",
      detail: "mô tả chi tiết NW9978",
    },
    {
      productId: 5,
      caterogy: "cloud-platform",
      productName: "Thiết bị chuyển mạch hiệu DCN NW5678",
      price: 5000000,
      img: "",
      detail: "mô tả chi tiết NW5678",
    },
    {
      productId: 6,
      caterogy: "cloud-platform",
      productName: "SWITCH KHÔNG QUẢN LÝ 8 CỔNG 10/100M DCN ES1008D",
      price: 324000,
      img: "sp2.jpeg",
      detail: "mô tả chi tiết NW9978",
    },
    {
      productId: 7,
      caterogy: "cloud-platform",
      productName: "SWITCH KHÔNG QUẢN LÝ 8 CỔNG 10/100M DCN ES1008D",
      price: 324000,
      img: "sp2.jpeg",
      detail: "mô tả chi tiết NW9978",
    },
    {
      productId: 8,
      caterogy: "cloud-platform",
      productName: "SWITCH KHÔNG QUẢN LÝ 8 CỔNG 10/100M DCN ES1008D",
      price: 324000,
      img: "sp2.jpeg",
      detail: "mô tả chi tiết NW9978",
    },
    {
      productId: 9,
      caterogy: "cloud-platform",
      productName: "SWITCH KHÔNG QUẢN LÝ 8 CỔNG 10/100M DCN ES1008D",
      price: 324000,
      img: "sp2.jpeg",
      detail: "mô tả chi tiết NW9978",
    },
    {
      productId: 10,
      caterogy: "cloud-platform",
      productName: "SWITCH KHÔNG QUẢN LÝ 8 CỔNG 10/100M DCN ES1008D",
      price: 324000,
      img: "sp2.jpeg",
      detail: "mô tả chi tiết NW9978",
    },
    {
      productId: 11,
      caterogy: "cloud-platform",
      productName: "SWITCH KHÔNG QUẢN LÝ 8 CỔNG 10/100M DCN ES1008D",
      price: 324000,
      img: "sp2.jpeg",
      detail: "mô tả chi tiết NW9978",
    },
    {
      productId: 12,
      caterogy: "cloud-platform",
      productName: "SWITCH KHÔNG QUẢN LÝ 8 CỔNG 10/100M DCN ES1008D",
      price: 324000,
      img: "sp2.jpeg",
      detail: "mô tả chi tiết NW9978",
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateListProducts(state, action) {
      state.listProducts = action.payload;
    },
  },
});

export const { updateListProducts } = dataSlice.actions;
export default dataSlice.reducer;
