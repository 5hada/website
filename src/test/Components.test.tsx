import {
  Button,
  Card,
  Flex,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toggle,
} from "@/components/ui";
import { TCard } from "./TCard.test";

export function ComponentsTest() {
  return (
    <Flex r="2">
      <div className="size-full flex flex-row justify-center gap-2">
        <TCard>
          <Flex>
            <div className="flex flex-col gap-2 h-fit">
              <div className="flex flex-row gap-2 justify-between">
                <Button size="xs" className="--primary">
                  Press
                </Button>
                <Button size="xs" variant="outline">
                  Press
                </Button>
                <Button size="xs" variant="secondary">
                  Press
                </Button>
                <Button size="xs" variant="ghost">
                  Press
                </Button>
                <Button size="xs" variant="destructive">
                  Press
                </Button>
                <Button size="xs" variant="link">
                  Press
                </Button>
              </div>
              <div className="flex flex-row gap-2 justify-between">
                <Button size="sm" className="--primary">
                  Press
                </Button>
                <Button size="sm" variant="outline">
                  Press
                </Button>
                <Button size="sm" variant="secondary">
                  Press
                </Button>
                <Button size="sm" variant="ghost">
                  Press
                </Button>
                <Button size="sm" variant="destructive">
                  Press
                </Button>
                <Button size="sm" variant="link">
                  Press
                </Button>
              </div>
              <div className="flex flex-row gap-2 justify-between">
                <Button className="--primary">Press</Button>
                <Button variant="outline">Press</Button>
                <Button variant="secondary">Press</Button>
                <Button variant="ghost">Press</Button>
                <Button variant="destructive">Press</Button>
                <Button variant="link">Press</Button>
              </div>
              <div className="flex flex-row gap-2 justify-between">
                <Button size="lg" className="--primary">
                  Press
                </Button>
                <Button size="lg" variant="outline">
                  Press
                </Button>
                <Button size="lg" variant="secondary">
                  Press
                </Button>
                <Button size="lg" variant="ghost">
                  Press
                </Button>
                <Button size="lg" variant="destructive">
                  Press
                </Button>
                <Button size="lg" variant="link">
                  Press
                </Button>
              </div>
              <div className="flex flex-row gap-2 justify-between">
                <Button size="icon" className="--primary">
                  P
                </Button>
                <Button size="icon" variant="outline">
                  P
                </Button>
                <Button size="icon" variant="secondary">
                  P
                </Button>
                <Button size="icon" variant="ghost">
                  P
                </Button>
                <Button size="icon" variant="destructive">
                  P
                </Button>
                <Button size="icon" variant="link">
                  P
                </Button>
              </div>
            </div>
          </Flex>
          <Flex>
            <div className="flex flex-row gap-2 justify-center items-center">
              <Switch>switch</Switch>
              <Switch defaultChecked>switch</Switch>
              <Switch size="lg">switch</Switch>
              <Switch defaultChecked size="lg">
                switch
              </Switch>
              <Switch size="sm">switch</Switch>
              <Switch defaultChecked size="sm">
                switch
              </Switch>
            </div>
          </Flex>
          <Flex>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <Toggle size="sm">toggle</Toggle>
                <Toggle size="sm" variant={"outline"}>
                  toggle
                </Toggle>
                <Toggle>toggle</Toggle>
                <Toggle variant={"outline"}>toggle</Toggle>
                <Toggle size="lg">toggle</Toggle>
                <Toggle size="lg" variant={"outline"}>
                  toggle
                </Toggle>
              </div>
              <div className="flex flex-row gap-2">
                <Toggle size="sm" defaultPressed>
                  toggle
                </Toggle>
                <Toggle defaultPressed size="sm" variant={"outline"}>
                  toggle
                </Toggle>
                <Toggle defaultPressed>toggle</Toggle>
                <Toggle defaultPressed variant={"outline"}>
                  toggle
                </Toggle>
                <Toggle defaultPressed size="lg">
                  toggle
                </Toggle>
                <Toggle defaultPressed size="lg" variant={"outline"}>
                  toggle
                </Toggle>
              </div>
            </div>
          </Flex>
        </TCard>
        <TCard>
          <Tabs orientation="horizontal" defaultValue="test1">
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
  );
}
