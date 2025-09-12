import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Faq({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [accordionContents, setAccordionContents] = useState<any>({});

  const handleOpen = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Function to handle content change for individual accordion
  const handleContentChange = (index: number, newContent: any) => {
    setAccordionContents((prev: any) => ({ ...prev, [index]: newContent }));
  };

  return (
    <div className={``}>
      <div className="mt-4 md:mt-8 lg:mt-16 px-3">
        <div className="flex flex-col gap-2 text-4xl md:gap-6 lg:gap-7 max-w-5xl md:w-full mx-auto">
          {data.map((accordion: any, index: number) => {
            const key = index;
            const content =
              accordionContents[index]?.content || accordion.content;

            return (
              <Accordion
                key={key}
                title={accordion.title}
                content={content}
                isOpen={openIndex === key}
                index={key}
                handleOpen={handleOpen}
                onContentChange={handleContentChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  index: number;
  handleOpen: (index: number) => void;
  onContentChange: (index: number, newContent: any) => void;
}

function Accordion({
  title,
  content,
  handleOpen,
  index,
  isOpen,
  onContentChange,
}: AccordionProps) {
  const accordionRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    handleOpen(index);
  };

  useLayoutEffect(() => {
    const accordionContent = accordionRef.current as HTMLElement;

    if (accordionContent) {
      if (isOpen) {
        gsap.fromTo(
          accordionContent,
          { height: 0, overflow: "hidden" },
          {
            height: accordionContent.scrollHeight,
            duration: 0.5,
            ease: "power1.out",
            onComplete: () => {
              accordionContent.style.height = "auto";
            },
          }
        );
      } else {
        gsap.fromTo(
          accordionContent,
          { height: accordionContent.scrollHeight, overflow: "hidden" },
          {
            height: 0,
            duration: 0.5,
            ease: "power1.in",
          }
        );
      }
    }
  }, [isOpen]);

  const handleContentUpdate = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onContentChange(index, { title, content: event.target.value });
  };

  return (
    <div className="bg-[#FAF9F5] md:py-6 py-2 justify-center accordion-item overflow-hidden border-b border-[#7F7F7F]">
      <button
        type="button"
        className="accordion-header flex transition-colors duration-300 ease-in-out items-center gap-3 group outline-none rounded-md pr-2 w-full"
        onClick={toggleAccordion}
      >
        <h4 className=" flex-1  2xl:text-2xl font-lato-bold leading-tight text-left">
          {title}
        </h4>
        <div className="  grid relative place-content-start 2xl:ml-40 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`md:w-5 h-4 md:h-5 ${
              isOpen ? "rotate-180 opacity-0" : "opacity-100"
            } duration-300 ease-in-out transition-all`}
            viewBox="0 0 19 20"
            fill={isOpen ? "#22574d" : "#1a8482"}
          >
            <g clipPath="url(#clip0_3302_257)">
              <path
                d="M11.6113 0.0449219L11.6113 19.3347H7.39514L7.39514 0.0449219L11.6113 0.0449219ZM18.7377 7.73098V11.6113L0.231445 11.6113L0.231445 7.73098L18.7377 7.73098Z"
                fill="#1a8482"
              />
            </g>
            <defs>
              <clipPath id="clip0_3302_257">
                <rect
                  width="18.5062"
                  height="19.2898"
                  fill="white"
                  transform="translate(0.231445 0.0449219)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            className={` absolute inset-0 fill-[#1a8482] md:w-5  h-4 md:h-5 ${
              isOpen ? "opacity-100" : "-rotate-180 opacity-0"
            } duration-300 ease-in-out transition-all`}
            viewBox="0 0 448 512"
            // height="1em"
            // width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </div>
      </button>

      <div className={`accordion-content overflow-hidden`} ref={accordionRef}>
        <div
          className="font-lato-regular mt-2 md:mt-0 block leading-tight md:leading-normal text-base md:text-base xl:text-xl lg:text-lg 2xl:text-xl  md:py-7 py-2"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
