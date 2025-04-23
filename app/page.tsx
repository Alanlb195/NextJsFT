import Link from "next/link";

export default function Home() {
  return (

    <div className="flex flex-col items-center p-24">
      <span className="text-lg">Hello world from NextJS</span>
      <Link href={'/about'} className=" text-2xl">About page</Link>
    </div>

  );
}
