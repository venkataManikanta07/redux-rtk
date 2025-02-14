import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
    reducerPath: "products", 
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}), 
    endpoints: (builder) => ({
        // Get all products  (reading)
        getAllProducts: builder.query({
            query: ()=> "/products", 
        }), 
        // if we want to change something or update something we need to write mutation instead of query
        getProductById: builder.query({
            query: (id) => `/products/${id}`
        }), 
        addNewProducts: builder.mutation({
            query: (newProduct) => ({
                url: `/products/add`, 
                method: 'POST', 
                headers: {"Content-Type" : "application/json"}, 
                body: newProduct
            })
        }), 
        updateProduct:builder.mutation({
            query: ({id, newUpdateProduct}) => ({
                url: `/products/${id}`, 
                method: 'PUT', 
                headers: {"Content-Type": "application/json"}, 
                body: newUpdateProduct, 
            })
        }), 
        deleteProduct: builder.mutation({
            query:(id) => ({
                url:  `/products/${id}`, 
                method: 'DELETE'
            })
        })
    })
})

export const {useGetAllProductsQuery, useGetProductByIdQuery, useAddNewProductsMutation, useUpdateProductMutation, useDeleteProductMutation} = productApi; 