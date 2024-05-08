export type PossibleVariants = "with-button" | "without-button";

// export type ModalProps<TVariant extends PossibleVariants> = {
//   isOpen: boolean;
//   variant: TVariant;
// } & (TVariant extends "with-button"
//   ? {
//       buttonLabel: string;
//       onButtonClick: () => void;
//     }
//   : {});

// export const Modal = <TVariant extends PossibleVariants>(
//   props: ModalProps<TVariant>
// ) => {
//   // ...
//   return null;
// };

// solution
export type ModalProps = {
  isOpen: boolean;
} & (
  | {
      variant: "with-button";
      buttonLabel: string;
      onButtonClick: () => void;
    }
  | {
      variant: "without-button";
    }
);

export const Modal = (props: ModalProps) => {
  // ...
  return null;
};

////

export const Parent = () => {
  return (
    <>
      <Modal
        isOpen
        variant="with-button"
        buttonLabel="Click me"
        onButtonClick={() => {}}
      />
      <Modal
        isOpen
        variant="without-button"
      />

      {/* @ts-expect-error */}
      <Modal
        isOpen
        variant="with-button"
      />

      <Modal
        isOpen
        variant="without-button"
        /* @ts-expect-error */
        onButtonClick={() => {}}
      />
    </>
  );
};
