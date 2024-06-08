import { Navbar } from "./_components/Navbar";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[90%] lg:w-[70%] mx-auto flex min-h-screen">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
}
