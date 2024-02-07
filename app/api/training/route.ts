import { request } from "http";
import { NextResponse,NextRequest } from "next/server";

export async function GET(request:NextRequest){
try{
  const activityData=[
       {
      activityKind: "running",
      unit: "miles",
      value: "10",
    },
    {
      activityKind: "swimming",
      unit: "miles",
      value: "5",
    },
    {
      activityKind: "axe throwing",
      unit: "miles",
      value: "2",
    },
    {
      activityKind: "jogging",
      unit: "miles",
      value: "5",
    },

  ]
 return NextResponse.json(activityData)
} catch(error){
 console.error("This is an error message")
}
 
}

export async function POST(request:NextRequest){
   try{
   const{activityKind,unit,value} = await request.json();
   const newActivity={
    activityKind,
    unit,
    value
   }
    return NextResponse.json({
      message:"Data Received Successfully",
      data: newActivity,
    })
}catch(error){
  console.error(error)
   }
}

export async function DELETE(request:NextRequest){
  try{
  const {id} = await request.json()
  return 
  }catch(error){
   console.error(error)
  }
  
}


export async function PUT(){
  try{
 return 
  }catch{

  }

}

