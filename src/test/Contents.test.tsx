import { TCard } from "./TCard.test";
import { Flex } from "@/components/ui";

export function ContentsTest() {
  return (
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
  );
}
