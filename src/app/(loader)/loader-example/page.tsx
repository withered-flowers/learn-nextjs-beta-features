// In this example we will try to use Suspense for loader
type University = {
  country: string;
  name: string;
  web_pages: Array<string>;
};

const getData = async () => {
  const url = new URL("http://universities.hipolabs.com/search");
  url.searchParams.append("country", "United States");

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    // If an error happened error.tsx will triggered (ErrorBoundary)
    throw new Error("Something wicked happened");
  }

  return res.json() as Promise<University[]>;
};

const LoaderExamplePage = async () => {
  const universities = await getData();

  return (
    <>
      <p>Success fetch, Total Univerisity: {universities.length}</p>
    </>
  );
};

export default LoaderExamplePage;
