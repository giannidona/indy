import { Navbar } from "./_components/Navbar";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[70%] mx-auto flex h-min-screen">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
}
