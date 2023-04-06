// This Component is the fallback's Component for <Suspense>
const LoaderComponent = () => {
  return (
    <>
      <p className="animate-pulse text-blue-600">
        This is a suspense fallback (loader) for University fetcher ...
      </p>
    </>
  );
};

export default LoaderComponent;
