import Link from "next/link";
export default function ComponentNotFound() {
  return (
    <div>
      <h1>Component Not Found</h1>
      <Link href={"/docs"}>Back to docs</Link>
    </div>
  );
}
