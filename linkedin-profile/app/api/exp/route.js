import { NextResponse } from "next/server";
import experience from "@/app/model/experience";

export function GET (){
    experience.find({}, (err, data)=> {
        if(err){
            console.log(err)
            return NextResponse.json({
                message: "Error"
            })
        }
        return NextResponse.json({
            data: data
        })
    })
}

export async function POST (req, res){
    const {newExp} = req.body;
    
    const createExp = new experience({
        id: newExp.id,
        position: newExp.position,
        company: newExp.company,
        positionType: newExp.positionType,
        startDate: newExp.startDate,
        endDate: newExp.endDate,
        duration: newExp.duration,
        location: newExp.location,
        type: newExp.type,
        description: newExp.description
    })

    await createExp.save();
    return NextResponse({
        msg:"Success!"
    })
}