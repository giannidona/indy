import Image from "next/image";

export const UsersList = () => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <Image
          src={"/icon.png"}
          alt="alt"
          width={30}
          height={30}
          className="rounded-full border-2 border-black"
        />
      </div>
      <div className="relative -ml-[8px]">
        <Image
          src={"/icon.png"}
          alt="alt"
          width={30}
          height={30}
          className="rounded-full border-2 border-black"
        />
      </div>
      <div className="relative -ml-[8px]">
        <Image
          src={"/icon.png"}
          alt="alt"
          width={30}
          height={30}
          className="rounded-full border-2 border-black"
        />
      </div>
      <div className="relative -ml-[8px]">
        <Image
          src={"/icon.png"}
          alt="alt"
          width={30}
          height={30}
          className="rounded-full border-2 border-black"
        />
      </div>
      <div className="relative -ml-[8px]">
        <Image
          src={"/icon.png"}
          alt="alt"
          width={30}
          height={30}
          className="rounded-full border-2 border-black"
        />
      </div>
      <div>
        <div className="text-white ml-2 ">
          <p className="text-sm">+20.000 developers shipping faster</p>
        </div>
      </div>
    </div>
  );
};
