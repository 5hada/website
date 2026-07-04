import type { ReactNode } from "react";

export type LinkProps = {
  href: string;
  text?: string;
  icon?: ReactNode;
  target?: string;
};

export function TextLink({ href, target, text }: LinkProps) {
  return (
    <a href={href} target={target ? target : "_blank"}>
      {text}
    </a>
  );
}

export function IconLink({ href, target, icon }: LinkProps) {
  return (
    <a href={href} target={target ? target : "_blank"}>
      {icon}
    </a>
  );
}
