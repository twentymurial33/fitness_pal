import { NextResponse,NextRequest } from "next/server";

//GET Request
export async function GET(request:NextRequest){
  const activityData = [
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
  ];
 return NextResponse.json(activityData)
}

//Post Request
export async function POST(request:NextRequest,NextResponse){
  const data= await request.json()
    console.log(data)
  return NextResponse.json()

}

//Delete Request





//Update Request