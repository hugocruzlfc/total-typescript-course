import { Router, useRouter } from "../../lib/fake-external-lib";

// export const withRouter = (Component: any) => {
//   const NewComponent = (props: any) => {
//     const router = useRouter();
//     return (
//       <Component
//         {...props}
//         router={router}
//       />
//     );
//   };

//   NewComponent.displayName = `withRouter(${Component.displayName})`;

//   return NewComponent;
// };

// solution :

export const withRouter = <TProps,>(Component: React.ComponentType<TProps>) => {
  const NewComponent = (props: Omit<TProps, "router">) => {
    const router = useRouter();
    return (
      <Component
        {...(props as TProps)}
        router={router}
      />
    );
  };

  NewComponent.displayName = `withRouter(${Component.displayName})`;

  return NewComponent;
};

const UnwrappedComponent = (props: { router: Router; id: string }) => {
  return null;
};

const WrappedComponent = withRouter(UnwrappedComponent);

<>
  {/* @ts-expect-error needs a router! */}
  <UnwrappedComponent id="123" />

  {/* Doesn't need a router passed in! */}
  <WrappedComponent id="123" />

  <WrappedComponent
    // @ts-expect-error id must be the correct property
    id={123}
  />
</>;
