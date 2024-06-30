import { Search } from "@mui/icons-material";
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
          }),
          searchModels: builder.query<FurnitureModel[], string>({
              query: (search) => ({
                url: `/furnitureModels?search=${search}`,
                  method: 'GET'
              })
          })
    })
})

export const {
    useCreateModelMutation,
    useDeleteModelMutation,
    useSearchModelsQuery
} = furnitureModelApi

export const {
    endpoints: {createModel, deleteModel}
} = furnitureModelApi