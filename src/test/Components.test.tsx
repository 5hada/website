import {
  Button,
  Card,
  Flex,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { TCard } from "./TCard.test";

export function ComponentsTest() {
  return (
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
  );
}
