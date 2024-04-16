type ModalProps =
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    };

// export const Modal = ({ variant, title }: ModalProps) => {  ❌
//   if (variant === "no-title") {
//     return <div>No title</div>;
//   } else {
//     return <div>Title: {title}</div>;
//   }
// };

export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return <div>No title</div>;
  } else {
    const { title } = props; // destructuring here
    return <div>Title: {title}</div>;
  }
};
