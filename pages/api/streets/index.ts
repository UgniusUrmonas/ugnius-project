import type { NextApiRequest, NextApiResponse} from "next"
import connect from "../../../lib/mongoose"
import { GetAllStreetsService } from "../../../services/api/street/GetAllStreetsServices"


export default async function Streets(
    req:NextApiRequest,
    res: NextApiResponse
) {
    await connect()
    switch (req.method) {
        case "GET": {
           const streets = await GetAllStreetsService()
            res.json(streets)
            break
        }
    }
    
    res.end()
}