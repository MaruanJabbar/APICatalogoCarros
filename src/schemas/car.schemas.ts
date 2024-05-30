/*{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}

*/

import { z } from "zod";

export const carSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    brand: z.string().min(1),
    year: z.number(),
    km: z.number(),
});

export const carCreateSchema = carSchema.omit({ id: true });

export type TCar = z.infer<typeof carSchema>;
export type TCarCreate = z.infer<typeof carCreateSchema>;
