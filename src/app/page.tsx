import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen text-black w-full items-center justify-center">
      <Link  className="border px-20 py-2 rounded hover:bg-pri hover:text-white" href={'/login'}>Login</Link>
    </div>
  );
}
