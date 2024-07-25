import React from "react";

type types = [React.ElementType, React.ComponentType];

export type Example = React.ElementType<{
  autoPlay?: boolean;
}>;

// hovering over Example shows:
// type Example =
//   | "audio"
//   | "video"
//   | React.ComponentType<{
//       autoPlay?: boolean | undefined;
//     }>;

const FuncComponent = (props: { prop1: string }) => {
  return null;
};

class ClassComponent extends React.Component<{
  prop1: string;
}> {
  render(): React.ReactNode {
    this.props.prop1;
    return null;
  }
}

const tests2: Array<React.ComponentType<{ prop1: string }>> = [
  FuncComponent,
  ClassComponent,
];

// class ClassComponent extends React.Component<{
//   prop2: string;
// }> {
//   render(): React.ReactNode {
//     this.props.prop2;
//     return null;
//   }
// }

// const tests2: Array<React.ComponentType<{ prop1: string }>> = [
//   FuncComponent,
//   ClassComponent, // Error!
// ];

// Error message on ClassComponent:
// Type 'ComponentType<{ prop2: string; }>' is not assignable to type 'ComponentType<{ prop1: string; }>'.
