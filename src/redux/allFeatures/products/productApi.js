import apiSlice from "../apiSlice/apiSlice";


const productApi= apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        products: builder.query({
            query:()=>({
                url:"/products",
            }),
        }),
        productsById: builder.query({
            query:(id)=>({
                url:`/products/${id}`,
            }),
        }),

    })
})

export const {useProductsQuery, useProductsByIdQuery}= productApi;