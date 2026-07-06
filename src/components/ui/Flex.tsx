import { cn } from "@/lib/utils";

export function Flex({
  className,
  r,
  ...props
}: React.ComponentProps<"div"> & { r?: number }) {
  const style = cn("size-full", r ? "flex-" + r : "flex-1", className);
  return <div data-slot="flex" className={style} {...props} />;
}
