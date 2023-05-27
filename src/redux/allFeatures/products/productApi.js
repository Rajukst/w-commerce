import { setUser } from "../Auth/authSlice";
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
        fetchBlogs: builder.query({
            query:(id)=>({
                url:`/blogs`,
            }),
        }),
        singleBlog: builder.query({
            query:(id)=>({
                url:`/blogs/${id}`,
            }),
        }),
        comments: builder.query({
            query:(id)=>({
                url:`/comments`,
            }),
        }),
    })
})

export const {useProductsQuery, useProductsByIdQuery, useFetchBlogsQuery, useSingleBlogQuery, useCommentsQuery}= productApi;