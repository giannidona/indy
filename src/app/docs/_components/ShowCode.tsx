"use client";

import { useState } from "react";
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
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    await onCopyToClipboard(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <div className="py-2 px-4 border border-eWhite/50 rounded-t-xl h-auto flex justify-between items-center">
        {fileName}
        <div className="flex items-center gap-x-2">
          <p
            className={`text-green-500 text-sm animate-pulse ${
              isCopied ? "block" : "hidden"
            }`}
          >
            code has been copied!
          </p>
          <p onClick={handleCopyClick} className="cursor-pointer">
            <FaRegCopy />
          </p>
        </div>
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
