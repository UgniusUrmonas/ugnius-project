import type { NextApiRequest, NextApiResponse} from "next"
import connect from "../../../lib/mongoose"
import {GetCitiesService, PostCityService} from "../../../services/api/city"
import bcrypt from "bcryptjs"

export default async function Cities(
    req:NextApiRequest,
    res: NextApiResponse
) {
/*
    const myPlaintextPassword = '1234'

    bcrypt.genSalt(Number(process.env.SALT_ROUNDS), function(err, salt){
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash){
            console.log(hash)
        });
    });
    */
    //const session=await getServerSession (req,res, authOptions)
    // if(!session) return res.status(401).json({error:"Reikia prisijungti"})
    await connect()
    switch (req.method) {
        case "POST": {
            await PostCityService(req.body)
            break
        }
    }
    
    const cities = await GetCitiesService()
    res.json(cities)
}