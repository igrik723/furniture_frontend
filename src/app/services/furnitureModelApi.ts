import { FurnitureModel } from "../types";
import { api } from "./api";

export const furnitureModelApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createModel: builder.mutation<
            FurnitureModel, { furnitureName: string; furnitureType: string; Property: string, Price: number }
        >({
            query: (modelData) => ({
                url: '/furnitureModels',
                method: 'POST',
                body: modelData
            })
        }),
          deleteModel: builder.mutation<void, string>({
              query: (id) => ({
                  url: `/furnitureModels/${id}`,
                  method: 'DELETE'
              })
          })  
    })
})

export const {
    useCreateModelMutation,
    useDeleteModelMutation
} = furnitureModelApi

export const {
    endpoints: {createModel, deleteModel}
} = furnitureModelApi