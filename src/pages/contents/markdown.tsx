import React from "react";
import ReactMarkdown from "react-markdown";
export default function MarkDown() {
  return (
    <>
      <div>
        <ReactMarkdown>This is my *first* markdown **text**</ReactMarkdown>
      </div>
    </>
  );
}
