"use client";
// "use client" = Client Side Rendering
// Can use the normal hooks

// Experimental "use" hooks from react
import { use } from "react";
import type { Color } from "@/app/api/reqresin/route";

// We will create the fetch api response here (expect the Promise<json>)
const getColors = fetch("/api/reqresin").then((data) => data.json());

const ReqresinPage = () => {
  // Using the "use" experimental hooks here

  // Similar to useEffect
  const colors = use<Color[]>(getColors);

  return (
    <main className="p-4">
      <p className="text-xl font-semibold">Reqresin Page</p>
      <pre>{colors && JSON.stringify(colors, null, 2)}</pre>
    </main>
  );
};

export default ReqresinPage;
