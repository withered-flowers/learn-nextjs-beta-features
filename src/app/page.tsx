import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 text-slate-700">
      <h1 className="text-3xl mb-4">Welcome to Simple NextJS Apps</h1>

      <section>
        <h2 className="text-2xl">Url provided in this apps:</h2>

        <ul className="ml-4 list-disc text-lg">
          <li>
            <Link
              href={"/main"}
              className="underline text-blue-400 hover:text-blue-700 transition-colors duration-300"
            >
              Main Page
            </Link>
          </li>
          <li>
            <Link
              href={"/jsonplaceholder"}
              className="underline text-blue-400 hover:text-blue-700 transition-colors duration-300"
            >
              Jsonplaceholder Page - (Server Fetch)
            </Link>
          </li>
          <li>
            <Link
              href={"/reqresin"}
              className="underline text-blue-400 hover:text-blue-700 transition-colors duration-300"
            >
              Reqresin Page - (Client Fetch)
            </Link>
          </li>
          <li>
            <Link
              href={"/formulir"}
              className="underline text-blue-400 hover:text-blue-700 transition-colors duration-300"
            >
              Formulir Page
            </Link>
          </li>
          <li>
            <Link
              href={"/loader-example"}
              className="underline text-blue-400 hover:text-blue-700 transition-colors duration-300"
            >
              Loader Example Page
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
