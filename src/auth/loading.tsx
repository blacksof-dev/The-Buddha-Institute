import { LuLoader } from "react-icons/lu";

export default function Loading() {
  const Loader = LuLoader as unknown as (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

  return (
    <div className="flex justify-center items-center h-full">
      <Loader className="h-8 w-8 animate-spin text-black" />
    </div>
  );
}
