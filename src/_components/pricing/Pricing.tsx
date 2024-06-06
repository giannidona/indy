import Link from "next/link";

export const Pricing = () => {
  return (
    <section className="flex flex-wrap gap-4 justify-center">
      <div className="my-2 w-[250px] h-[300px] bg-[#232323] rounded px-2 py-3 flex flex-col justify-between gap-3">
        <div className="text-white">
          <p className="">NAME PACK</p>
        </div>
        <div>
          <p className="font-semibold text-2xl text-white">
            $200 <span className="text-sm text-eGray">usd</span>
          </p>
        </div>
        <div className="text-eGray font-semibold">
          <ul>
            <li>✅ Feature</li>
            <li>✅ Feature</li>
            <li>❌ Feature</li>
            <li>❌ Feature</li>
            <li>❌ Feature</li>
          </ul>
        </div>
        <div className="text-center">
          <Link
            href="#"
            className="text-black flex justify-center bg-white rounded px-3 py-1 font-semibold hover:bg-white/80 transition ease-in-out duration-300"
          >
            Get Pack
          </Link>
          <p className="text-eGray text-sm mt-1">optional text here</p>
        </div>
      </div>
      <div className="my-2 w-[250px] h-[300px] bg-[#232323] rounded px-2 py-3 flex flex-col justify-between gap-3 border border-yellow-400">
        <div className="text-white">
          <p>NAME PACK</p>
        </div>
        <div>
          <p className="font-semibold  text-2xl text-white">
            $200 <span className="text-sm text-eGray">usd</span>
          </p>
        </div>
        <div className="text-eGray font-semibold">
          <ul>
            <li>✅ Feature</li>
            <li>✅ Feature</li>
            <li>❌ Feature</li>
            <li>❌ Feature</li>
            <li>❌ Feature</li>
          </ul>
        </div>
        <div className="text-center">
          <Link
            href="#"
            className="text-black flex justify-center bg-yellow-400 rounded px-3 py-1 font-semibold hover:bg-yellow-400/80 transition ease-in-out duration-300"
          >
            Get Pack
          </Link>
          <p className="text-eGray text-sm mt-1">optional text here</p>
        </div>
      </div>
      <div className="my-2 w-[250px] h-[300px] bg-[#232323] rounded px-2 py-3 flex flex-col justify-between gap-3">
        <div className="text-white">
          <p className="">NAME PACK</p>
        </div>
        <div>
          <p className="font-semibold text-2xl text-white">
            $200 <span className="text-sm text-eGray">usd</span>
          </p>
        </div>
        <div className="text-eGray font-semibold">
          <ul>
            <li>✅ Feature</li>
            <li>✅ Feature</li>
            <li>❌ Feature</li>
            <li>❌ Feature</li>
            <li>❌ Feature</li>
          </ul>
        </div>
        <div className="text-center">
          <Link
            href="#"
            className="text-black flex justify-center bg-white rounded px-3 py-1 font-semibold hover:bg-white/80 transition ease-in-out duration-300"
          >
            Get Pack
          </Link>
          <p className="text-eGray text-sm mt-1">optional text here</p>
        </div>
      </div>
    </section>
  );
};
