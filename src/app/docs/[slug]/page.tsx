import { COMPONENTS } from "@/data/components";
import { notFound } from "next/navigation";

import fs from "fs";
import path from "path";
import { promisify } from "util";
import { ShowCode } from "../_components/ShowCode";

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);

  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8"
  );

  return fileContent;
}

export default async function ComponentDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const component = COMPONENTS.find(
    (component) => component.slug === params.slug
  );

  if (!component) {
    notFound();
  }

  const filePath = `./src/_components/${
    component.type
  }/${component.name.replace(/\s+/g, "")}.tsx`;

  const code = await readFilePath(filePath);

  return (
    <section className="my-10 text-white w-full">
      <h1 className="text-3xl font-bold mb-10">{component?.name}</h1>

      <div className="mb-12 py-2 border border-eWhite/50 rounded-xl h-auto flex justify-center items-center">
        {component?.component}
      </div>

      <ShowCode
        code={code}
        fileName={`${component.name.replace(/\s+/g, "")}.tsx`}
      />
    </section>
  );
}