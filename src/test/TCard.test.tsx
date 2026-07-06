import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

export function TCard({ className, ...props }: React.ComponentProps<"div">) {
  const style = cn("min-w-fit w-full h-full", className);
  return <Card className={style} {...props} />;
}
