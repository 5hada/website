import { Flex } from "@/components/ui";
import { TCard } from "./TCard.test";

export function StylesTest() {
  return (
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
  );
}
