import Link from "next/link";

const links = [
  {
    name: "Icon Badge",
    slug: "/docs/icon-badge",
  },
  {
    name: "Dropdown",
    slug: "/docs/dropdown",
  },
  {
    name: "Pricing",
    slug: "/docs/pricing",
  },
  {
    name: "Gradient Word",
    slug: "/docs/gradient-word",
  },
  {
    name: "Stars",
    slug: "/docs/stars",
  },
  {
    name: "Users List",
    slug: "/docs/users-list",
  },
];

export const Navbar = () => {
  return (
    <nav className="hidden lg:block w-[180px] px-5 mr-24 border-r">
      <div className="my-10">
        <Link href="/" className="text-white font-bold text-3xl">
          INDY
        </Link>
      </div>

      <div className="grid grid-col-1">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.slug}
            className="text-white/50 pb-4 transition ease-in-out duration-150 hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
