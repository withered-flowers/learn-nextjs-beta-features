type Album = {
  userId: number;
  id: number;
  title: string;
};

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums", {
    // SSG
    // Not using the options at all

    // Dynamic (never cache) / SSR
    cache: "no-store",

    // Incremental (ISR)
    // next: {
    //   revalidate: 10,
    // },
  });

  if (!res.ok) {
    throw new Error("something wicked happened");
  }

  return res.json() as Promise<Album[]>;
};

const JsonplaceholderPage = async () => {
  const albums: Album[] = await getData();

  return (
    <main className="p-4">
      <p className="text-xl font-semibold">Jsonplaceholder Page</p>

      {albums.length > 0 && (
        <table className="table-auto">
          <thead>
            <tr className="border border-separate border-gray-400">
              <th className="border border-gray-400">Id</th>
              <th className="border border-gray-400">User Id</th>
              <th className="border border-gray-400">Title</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album: Album) => (
              <tr
                key={album.id}
                className="border border-separate border-gray-400"
              >
                <td className="border border-gray-400">{album.id}</td>
                <td className="border border-gray-400">{album.userId}</td>
                <td className="border border-gray-400">{album.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default JsonplaceholderPage;
