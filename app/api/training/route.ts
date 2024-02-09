import { NextResponse,NextRequest } from "next/server";

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

export async function POST(request: NextRequest) {
  try {
    const { activityKind, unit, value } = await request.json();
    const newActivity = {
      activityKind,
      unit,
      value,
    };
    return NextResponse.json(
      // message: 'Data received and processed successfully',
     newActivity
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({
       error: 'Internal Server Error',
    });
  }
}


export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    return NextResponse.json({
      message: `Successfully deleted item with id ${id}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
        error: 'Internal Server Error',
    });
  }
}



export async function PUT(request: NextRequest) {
  try { 
    const data = await request.json();
    return NextResponse.json({
      message: 'Successfully updated or created the resource',
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json('Internal Server Error');
  }
}
