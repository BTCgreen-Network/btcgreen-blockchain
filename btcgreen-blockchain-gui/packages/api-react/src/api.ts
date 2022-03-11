import { createApi } from '@reduxjs/toolkit/query/react';
import btcgreenLazyBaseQuery from './btcgreenLazyBaseQuery';

export const baseQuery = btcgreenLazyBaseQuery({});

export default createApi({
  reducerPath: 'btcgreenApi',
  baseQuery,
  endpoints: () => ({}),
});
