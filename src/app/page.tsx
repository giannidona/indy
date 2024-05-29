import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 text-white text-center">
      <div className="mb-5">
        <h1 className="font-semibold text-5xl mb-2">INDY</h1>
        <h2 className="text-eGray font-semibold mb-4">
          A unique UI component library{" "}
          <span className="block">crafted for indie hackers.</span>
        </h2>
        <div className="flex flex-col gap-y-3 md:flex md:flex-row md:gap-x-3 md:justify-center">
          <Link
            href="/lib"
            className="bg-white text-black rounded px-3 py-1 font-semibold hover:bg-white/80 transition duration-300 ease-in-out md:w-fit"
          >
            view components
          </Link>
          <Link
            href="https://github.com/giannidona/indy"
            target="_blank"
            className="border rounded border-eGray text-eGray px-3 py-1 font-semibold flex items-center justify-center md:w-fit"
          >
            <Image src="/github.svg" alt="github logo" width={15} height={15} />
            <span className="ml-2">github</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-center gap-x-5 text-eGray">
        <span className="flex items-center">
          <Image
            className="mr-2"
            src="./nextjs.svg"
            alt="nextjs icon"
            width={20}
            height={20}
          />
          Next.js
        </span>
        <span className="flex items-center ">
          <Image
            className="mr-2"
            src="./tailwindcss.svg"
            alt="tailwindcss icon"
            width={20}
            height={20}
          />
          Tailwindcss
        </span>
      </div>
    </main>
  );
}
