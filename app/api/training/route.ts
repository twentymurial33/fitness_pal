import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const activityData = [
      {
        activityKind: 'running',
        unit: 'miles',
        value: '10',
      },
      {
        activityKind: 'swimming',
        unit: 'miles',
        value: '5',
      },
      {
        activityKind: 'axe throwing',
        unit: 'miles',
        value: '2',
      },
      {
        activityKind: 'jogging',
        unit: 'miles',
        value: '5',
      },
    ];

    return NextResponse.json(activityData);
  } catch (error) {
    console.error('This is an error message', error);
    return NextResponse.json({
      error: 'Internal Server Error',
    });
  }
}

//endpoint to get many
export async function GETActivity(request: NextRequest) {
  const newActivities = await prisma.user.findMany({
    where: {  },
  });
  return {
    props: { newActivities },
    revalidate: 10,
  };
}

export async function POST(request: NextRequest) {
  try {
   const newActivity = {
    id:1,
    activityKind: "someActivity",
    unit: "someUnit",
     value: 42,
     timeStamp:10-24-2016,
     
   };
    return NextResponse.json(newActivity);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: 'Internal Server Error',
    });
  }
}


export async function DELETE(request: NextRequest) {
  let mockData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];
  try {
    const { id } = await request.json();
    const deletedItem = mockData.filter(item => item.id !== id);
      return NextResponse.json({
        message: `Successfully deleted item with id ${id}`,
        deletedItem
      });
    }  catch (error) {
    console.error(error);
    return NextResponse.json({
      error: 'Internal Server Error',
    });
  }
}



//Put method
export async function PUT(request: NextRequest){
  const newActivity = await prisma.workouts.update({
    where: { id:"1" }, // Specify the 'where' condition to identify the row to update
    data: {
      name: "someActivity",
    },
  });

  return NextResponse.json(newActivity);
  //   // for (var [key,value]of Object.entries()){
//   //   //generate a SQL statement for the key/value formation
//   //   // var sql={
//   //   //   UPDATE newActivity,SET(), WHERE id=$id 
//   //   // }

//   // }
}

