import { COMPONENTS } from "@/data/components";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="text-white my-10">
      <h1 className="text-3xl font-bold mb-10">Getting started</h1>
      <div className="mb-5">
        <p className="text-xl font-semibold mb-2">Welcome to INDY</p>
        <p className="text-white/50">
          INDY is a free and customizable component library designed to help you
          build web applications quickly and efficiently. Ideal for indie
          hackers, our goal is to simplify your development process so you can
          focus on what really matters: creating and launching your product.
        </p>
      </div>
      <div className="mb-10">
        <p className="text-xl font-semibold mb-2">Key features</p>
        <ul className="text-white/50">
          <li>
            <span className="font-semibold text-white">Free: </span>Use our
            components at no cost.
          </li>
          <li>
            <span className="font-semibold text-white">Easy to use: </span>Copy
            and paste the code directly into your project.
          </li>
          <li>
            <span className="font-semibold text-white">
              Highly Customizable:{" "}
            </span>
            Adjust the components to your style and needs.
          </li>
          <li>
            <span className="font-semibold text-white">Modern Design:</span>{" "}
            Components with a professional and attractive look & feel.
          </li>
        </ul>
      </div>
      <div className="mb-10">
        <Link
          className="underline"
          href={"https://x.com/giannidona_dev"}
          target="_blank"
        >
          Request a component
        </Link>
        <p className="mt-2 text-white/50">
          Feel free to send me a direct message on X to request a component.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-10">Components</h2>

        {COMPONENTS.map((component) => (
          <Link key={component.slug} href={`/docs/${component.slug}`}>
            <div className="mb-12 py-2 border border-eWhite/50 rounded-xl h-auto flex justify-center items-center hover:bg-white/15 duration-300 transition ease-in-out">
              {component.component}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
