import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  code: string;
  fileName?: string;
}

export const ShowCode = ({ code, fileName }: Props) => {
  return (
    <>
      <div className="py-2 px-4 border border-eWhite/50 rounded-t-xl h-auto">
        {fileName}
      </div>
      <div className="mb-12 py-2 px-4 border border-eWhite/50 rounded-b-xl h-auto">
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          wrapLines={true}
          lineProps={{ style: { whiteSpace: "pre-wrap" } }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};
