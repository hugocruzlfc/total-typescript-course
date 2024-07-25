import { ReactNode } from "react";

/**
 * In this example we have a Select component. Through some magic, we're
 * attempting to strongly type the children of the Select component so
 * that you can only pass 'Option' elements to it.
 *
 * 1. Try to understand the type of OptionType. What's the __brand property
 * for?
 *
 * 2. There's an error happening at <Option /> below. Why is that?
 *
 * 3. Try changing <Option /> to {Option()}. This appears to work. Why?
 * And why is this NOT a good idea?
 *
 * 4. Is what we're attempting to do even possible?
 */

type OptionType = {
  __brand: "OPTION_TYPE";
} & ReactNode;

const Option = () => {
  return (<option></option>) as OptionType;
};

const Select = (props: { children: OptionType }) => {
  return <select>{props.children}</select>;
};

<Select>
  <Option />
</Select>;

//✅

// Strongly Typing Children Isn't Possible
// Unfortunately, strongly typing children in React is not possible right now, as they are inferred as JSX.Element.

// This means we can't get any more information about the thing that we're rendering on the type level without a change inside of React or TypeScript themselves.

// While it isn't possible, it's not really that big of an issue. In a way, strongly typing children in React ruins the compositional model. You should be able to pass anything to anything and have React figure it out.

// Unless React and TypeScript make changes to make this possible, we'll have to live with this limitation.
