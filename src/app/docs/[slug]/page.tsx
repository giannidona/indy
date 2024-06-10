import { COMPONENTS } from "@/data/components";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import { ShowCode } from "../_components/ShowCode";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const component = COMPONENTS.find((component) => component.slug === slug);

  return {
    title: `Indy - ${component?.name}`,
    description: component?.description,
  };
}

async function readFilePath(filePath: string): Promise<string> {
  const readFile = promisify(fs.readFile);

  try {
    const fileContent = await readFile(filePath, "utf8");
    return fileContent;
  } catch (error) {
    console.error(`Error reading file at ${filePath}:`, error);
    throw error;
  }
}

export default async function ComponentDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const component = COMPONENTS.find(
      (component) => component.slug === params.slug
    );

    if (!component) {
      notFound();
    }

    if (!component.type || !component.name) {
      throw new Error("Component type or name is missing.");
    }

    const filePath = path.join(
      process.cwd(),
      "src",
      "_components",
      component.type,
      `${component.name.replace(/\s+/g, "")}.tsx`
    );

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
  } catch (error) {
    console.error("Error in ComponentDetailPage:", error);
    return <p>An error occurred while loading the component details.</p>;
  }
}
