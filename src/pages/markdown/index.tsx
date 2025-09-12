import { useMakrDown } from "hooks/markDown";
import React from "react";
import Markdown from "react-markdown";

export default function MarkDown() {
  const { caseStudy } = useMakrDown();
  return (
    <section className="">
      <div className="w-container-sm pt-2 sm:pt-5 xl:pt-[10rem] 2xl:pt-[15rem] ">
        <Markdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="font-lato-regular text-teal" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="font-lato-regular" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="font-lato-regular text-darkGreen blade-top-margin-sm"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="font-lato-regular text-md sm:text-lg text-black/80 mt-2"
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <li className="font-lato-regular text-lg" {...props} />
            ),
          }}
        >
          {caseStudy}
        </Markdown>
      </div>
      <div className="w-container-sm blade-top-margin-sm blade-bottom-margin-sm">
        <button
          className="flex px-12 py-3 gap-4 bg-pear text-base 2xl:text-2xl font-lato-bold"
          onClick={() => window.history.back()}
        >
          <svg
            className="h-7 2xl:h-9 rotate-180"
            width="8"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
              fill="black"
            />
          </svg>
          Back
        </button>
      </div>
    </section>
  );
}
