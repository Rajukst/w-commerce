import apiSlice from "../apiSlice/apiSlice";
import { setUser } from "./authSlice";


const authApi= apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        register: builder.mutation({
            query:(data)=>({
                method: "POST",
                url:"/user",
                body: data,
            }),
            async onQueryStarted(data, {dispatch, queryFulfilled}){
                try{
                    const res= await queryFulfilled;
                    dispatch(setUser(data.email))
                }catch{
                    //okarone
                }
            }
        }),
        cityApi: builder.query({
            query:()=>({
                url:"/cityApi",
            }),
        }),

    })
})
export const {useRegisterMutation, useCityApiQuery }= authApi;