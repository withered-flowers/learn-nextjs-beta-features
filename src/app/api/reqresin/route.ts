import { NextResponse } from "next/server";

export type Color = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

type ColorResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Color[];
};

export const GET = async (request: Request) => {
  const responseFetch = await fetch("https://reqres.in/api/unknown");
  const responseFetchJson: ColorResponse = await responseFetch.json();

  return NextResponse.json(responseFetchJson.data);
};
