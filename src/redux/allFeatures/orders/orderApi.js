


const orderApi= apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        orders: builder.query({
            query:()=>({
                url:"/orders",
            }),
        }),

    })
})