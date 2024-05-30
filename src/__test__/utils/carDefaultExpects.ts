import { TCar, TCarCreate } from "../../schemas/car.schemas";

export const carDefaultExpects = (data: TCar, expectData: TCarCreate) =>{
    expect(data.name).toBe(expectData.name);
    expect(data.brand).toBe(expectData.brand);
    expect(data.year).toBe(expectData.year);
    expect(data.km).toBe(expectData.km);
    
}