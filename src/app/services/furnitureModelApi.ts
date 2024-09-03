import { FurnitureModel } from "../types";
import { api } from "./api";

export const furnitureModelApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createModel: builder.mutation<
            FurnitureModel, 
            { 
                furnitureName: string; 
                furnitureType: string; 
                Property: string; 
                Price: string;
                count: string;
                img: File | null  
            }
        >({
            query: ({ furnitureName, furnitureType, Property, Price, img, count }) => {
                const formData = new FormData();
                formData.append('furnitureName', furnitureName);
                formData.append('furnitureType', furnitureType);
                formData.append('Property', Property);
                formData.append('Price', Price);
                formData.append('count', count)
                if (img) {
                    formData.append('img', img);
                }
                return {
                    url: '/furnitureModels',
                    method: 'POST',
                    body: formData,
                };
            }
        }),
        deleteModel: builder.mutation<void, number>({
            query: (id) => ({
                url: `/furnitureModels/${id}`,
                method: 'DELETE',
            }),
        }),
        searchModels: builder.query<FurnitureModel[], string>({
            query: (search) => ({
                url: `/furnitureModels?search=${search}`,
                method: 'GET',
            }),
        }),
        updateModelCount: builder.mutation<
            void, 
            {
                id: number,
                count: string,
            }
            >({
                query: ({ id, count }) => ({
                url: `/furnitureModels/${id}`,
                method: 'PUT',
                body: { count },
            })
        })

    }),
});

export const {
    useCreateModelMutation,
    useDeleteModelMutation,
    useSearchModelsQuery,
    useUpdateModelCountMutation,
} = furnitureModelApi;

export const {
    endpoints: { createModel, deleteModel },
} = furnitureModelApi;
