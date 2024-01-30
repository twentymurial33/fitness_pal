import { NextResponse,NextRequest } from "next/server";


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

export async function POST(){

  return NextResponse.json()
}