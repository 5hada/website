import type { ReactNode } from "react";
import { IconLink as IconLinkIcon, IconLinkOff } from "@tabler/icons-react";

export type LinkProps = {
  href?: string;
  text?: string;
  icon?: ReactNode;
  target?: string;
};

export function TextLink({ href, target, text }: LinkProps) {
  return (
    <a href={href ? href : ""} target={target ? target : "_blank"}>
      {text ? text : "text not provided"}
    </a>
  );
}

export function IconLink({ href, target, icon }: LinkProps) {
  const isDisable = href ? false : true;
  return (
    <a href={href ? href : ""} target={target ? target : "_blank"}>
      {isDisable ? <IconLinkOff /> : icon ? icon : <IconLinkIcon />}
    </a>
  );
}
