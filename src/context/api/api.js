import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  // Asosiy API URL
  baseUrl: "https://6645c029b8925626f89301d2.mockapi.io/nusratilloh",
  // bu kalit
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      // Har so'rovda mana shu token headersda qo'shib jo'natiladi
      headers.set("authentication", `Bearer ${token}`);
    }
    return headers;
  },
});

// Qayta urinish soni
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
  reducerPath: 'mainApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Products'], // O'zgarish bo'lganda qayta fetch qilish uchun Tag Typelar
  endpoints: () => ({}),
})