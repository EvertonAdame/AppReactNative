
import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {

    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f04ede0054mshd860f57af13bae0p1fced7jsnfe064d47de5e',

}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})



export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
      baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptosStats: builder.query({
            query: () => createRequest('/stats')      
        }),
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)      
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`)      
        }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`)
        }),
          getCryptoHistory: builder.query({
            query: ({ uuid, timePeriod }) => createRequest(`coin/${uuid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`),
 
        
       }),
       
    })
  
});

  
export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery, useGetCryptosStatsQuery
} = cryptoApi;

