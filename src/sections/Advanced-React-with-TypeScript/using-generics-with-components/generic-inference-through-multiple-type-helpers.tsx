import { Expect, Equal } from "@/utils/type-utils";

/**
 * In this exercise, we have a component called ButtonGroup. It takes an array
 * of buttons and a function to call when a button is clicked.
 *
 * We want to improve the type of the onClick function so that the value passed
 * to it is inferred from the buttons array.
 *
 * 1. Try to solve this problem using generics.
 */

// interface Button {
//   value: string;
//   label: string;
// }

// interface ButtonGroupProps {
//   buttons: Button[];
//   onClick: (value: string) => void;
// }

// const ButtonGroup = (props: ButtonGroupProps) => {
//   return (
//     <div>
//       {props.buttons.map((button) => {
//         return (
//           <button
//             key={button.value}
//             onClick={() => {
//               props.onClick(button.value);
//             }}
//           >
//             {button.label}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// solution
interface Button<TValue> {
  value: TValue;
  label: string;
}

interface ButtonGroupProps<TValue> {
  buttons: Button<TValue>[];
  onClick: (value: TValue) => void;
}

const ButtonGroup = <TValue extends string>(
  props: ButtonGroupProps<TValue>
) => {
  return (
    <div>
      {props.buttons.map((button) => {
        return (
          <button
            key={button.value}
            onClick={() => {
              props.onClick(button.value);
            }}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
};

/////////////

<>
  <ButtonGroup
    onClick={(value) => {
      type test = Expect<Equal<typeof value, "add" | "delete">>;
    }}
    buttons={[
      {
        value: "add",
        label: "Add",
      },
      {
        value: "delete",
        label: "Delete",
      },
    ]}
  ></ButtonGroup>
</>;
