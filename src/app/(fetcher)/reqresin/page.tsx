"use client";
// "use client" = Client Side Rendering
// Can use the normal hooks
import { use } from "react";
import type { Color } from "@/app/api/reqresin/route";

const getColors = fetch("/api/reqresin").then((data) => data.json());

const ReqresinPage = () => {
  const colors = use<Color[]>(getColors);

  return (
    <main className="p-4">
      <p className="text-xl font-semibold">Reqresin Page</p>
      <pre>{colors && JSON.stringify(colors, null, 2)}</pre>
    </main>
  );
};

export default ReqresinPage;
