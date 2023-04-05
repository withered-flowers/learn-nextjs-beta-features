import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    statusCode: 200,
    message: "Hello World",
  });
}
