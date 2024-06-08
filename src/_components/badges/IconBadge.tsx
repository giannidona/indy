import Image from "next/image";

export const IconBadge = () => {
  return (
    <span className="bg-black text-white border border-white text-sm flex items-center w-fit px-3 py-1 rounded-md">
      <Image
        className="mr-2"
        src="/icon.png"
        alt="logo"
        width={15}
        height={15}
      />
      Badge with icon
    </span>
  );
};
