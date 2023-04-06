// In this example we will try to use Suspense
// But we're not using <Suspense> Component at all !
// (Since this will be wrapped in loading.tsx in App Router)
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

// While this Component is waiting for fetching completed
// Suspense (loding.tsx) will replace this Component
// After fetching done,
// (if success) - Suspense (loading.tsx) will be replaced with this component
// (if error) - Suspense (loading.tsx) will be replaced with ErrorBoundary (error.tsx), if exists
const LoaderExamplePage = async () => {
  const universities = await getData();

  return (
    <>
      <p>Success fetch, Total Univerisity: {universities.length}</p>
    </>
  );
};

export default LoaderExamplePage;
