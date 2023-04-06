// This is the layout for the LoaderExamplePage
// Layout won't be affected by the Suspense's fallback (loading.tsx)
// Only it's children (page.tsx) will
const LoaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-4">
      <p className="text-3xl font-semibold">Loader Example Page</p>

      <div className="mt-4">{children}</div>
    </main>
  );
};

export default LoaderLayout;
