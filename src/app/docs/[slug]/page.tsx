import { COMPONENTS } from "@/data/components";
import { ShowCode } from "../_components/ShowCode";

import fs from "fs";
import path from "path";
import { promisify } from "util";

import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const component = COMPONENTS.map((component) => ({
    slug: component.slug,
  }));

  return component;
}

export const dynamicParams = false;

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
