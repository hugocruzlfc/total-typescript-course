import { ComponentProps } from "react";
import { Equal, Expect } from "../../utils/type-utils";

// const buttonProps = {
//   type: "button",
//   // @ts-expect-error
//   illegalProperty: "I AM ILLEGAL",
// };

const buttonProps = {
  type: "button",
  // @ts-expect-error
  illegalProperty: "I AM ILLEGAL",
} satisfies ComponentProps<"button">; // ✅

<>
  <button {...buttonProps}>Click Me!</button>
</>;

const buttonPropType = buttonProps.type;

export type test = Expect<Equal<typeof buttonPropType, "button">>;
