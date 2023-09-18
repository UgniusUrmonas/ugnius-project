import {CityDto} from "../../../dto/city.dto"
import {City} from "../../../schemas/city.schema"
import { ObjectId } from "mongodb"

export async function DeleteCityService(city:CityDto): Promise<void> {
    await City.findOneAndDelete({_id: city._id})
  
}
