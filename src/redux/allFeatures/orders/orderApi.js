import apiSlice from "../apiSlice/apiSlice";


const orderApi= apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        orders: builder.query({
            query:(id)=>({
                url:`/orders`,
            }),
        }),
    })
})

export const {useOrdersQuery}= orderApi