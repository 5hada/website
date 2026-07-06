import {
  Button,
  Card,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";

function TCard({ className, ...props }: React.ComponentProps<"div">) {
  const style = cn("min-w-fit w-full h-full", className);
  return <Card className={style} {...props} />;
}

export function Flex({
  className,
  r,
  ...props
}: React.ComponentProps<"div"> & { r?: number }) {
  const style = cn("size-full", r ? "flex-" + r : "flex-1", className);
  return <div data-slot="flex" className={style} {...props} />;
}

export function TestPage() {
  return (
    <div className="w-full h-screen flex flex-col gap-2">
      <Flex>
        <div className="size-full flex flex-row justify-center gap-2">
          <TCard>
            <span>title</span>
          </TCard>
          <TCard>
            <span>desc</span>
          </TCard>
          <TCard>
            <span>text</span>
          </TCard>
          <TCard>
            <span>icon</span>
          </TCard>
        </div>
      </Flex>
      <Flex>
        <div className="size-full flex flex-row justify-center gap-2">
          <TCard>
            <Button>initial</Button>
            <Button>initial</Button>
            <Button>initial</Button>
            <Button>initial</Button>
          </TCard>
          <TCard>
            <Tabs orientation="horizontal">
              <TabsList>
                <TabsTrigger value="test1">test1</TabsTrigger>
                <TabsTrigger value="test2">test2</TabsTrigger>
                <TabsTrigger value="test3">test3</TabsTrigger>
                <TabsTrigger value="test4">test4</TabsTrigger>
              </TabsList>
              <TabsContent value="test1">test1</TabsContent>
              <TabsContent value="test2">test2</TabsContent>
              <TabsContent value="test3">test3</TabsContent>
              <TabsContent value="test4">test4</TabsContent>
            </Tabs>
          </TCard>
          <TCard>
            <Card>small</Card>
            <Card>big</Card>
            <Card>row</Card>
            <Card>col</Card>
          </TCard>
        </div>
      </Flex>
      <Flex>
        <div className="size-full flex flex-row justify-center gap-2">
          <TCard>
            <span>light</span>
          </TCard>
          <TCard>
            <span>dark</span>
          </TCard>
          <TCard>
            <span>acrylic</span>
          </TCard>
          <TCard>
            <span>mica</span>
          </TCard>
          <TCard>
            <span>glass</span>
          </TCard>
        </div>
      </Flex>
    </div>
  );
}
