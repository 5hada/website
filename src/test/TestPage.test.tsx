import { ContentsTest } from "./Contents.test";
import { ComponentsTest } from "./Components.test";
import { StylesTest } from "./Styles.test";

export function TestPage() {
  return (
    <div className="w-full h-screen flex flex-col gap-2 p-2">
      <ContentsTest />
      <ComponentsTest />
      <StylesTest />
    </div>
  );
}
