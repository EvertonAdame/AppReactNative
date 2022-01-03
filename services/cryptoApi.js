
import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {

    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f04ede0054mshd860f57af13bae0p1fced7jsnfe064d47de5e'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({url, headers: cryptoApiHeaders})


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins`)      
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`)      
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
          getCryptoHistory: builder.query({
         query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history/${timePeriod}`),
    }),
    })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery
} = cryptoApi;

