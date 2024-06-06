import Image from "next/image";

export const IconBadge = () => {
  return (
    <span className="bg-black text-white border border-white text-sm flex items-center w-fit px-3 rounded-md transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">
      <Image
        className="mr-2"
        src="/favicon.png"
        alt="logo"
        width={15}
        height={15}
      />
      Badge with icon
    </span>
  );
};
