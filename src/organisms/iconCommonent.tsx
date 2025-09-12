// src/components/Icon.tsx
import React from "react";
import { IconType } from "react-icons";

type IconProps = {
  icon: IconType;
  className?: string;
};

export function Icon({ icon: IconComp, className }: IconProps) {
  // Call the icon as a function and cast it into JSX.Element
  return IconComp({ className }) as JSX.Element;
}
