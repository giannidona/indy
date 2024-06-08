"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy } from "react-icons/fa";

interface Props {
  code: string;
  fileName?: string;
}

const onCopyToClipboard = (code: string) => {
  const copyCode = navigator.clipboard.writeText(code);
  return copyCode;
};

export const ShowCode = ({ code, fileName }: Props) => {
  return (
    <>
      <div className="py-2 px-4 border border-eWhite/50 rounded-t-xl h-auto flex justify-between items-center">
        {fileName}
        <p onClick={() => onCopyToClipboard(code)} className="cursor-pointer">
          <FaRegCopy />
        </p>
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
