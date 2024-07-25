// const Component = (props: { config: {} }) => { ❌
//   return <div />;
// };
const Component = (props: { config: Record<string, never> }) => {
  return <div />;
};

{
  /* <Component
  config={{
    foo: "bar",
    whatever: {},
    awdawd: 123,
  }}
/>; */
}

// Errors!
<>
  {/* <Component config={null} />
  <Component config={undefined} /> */}
  <Component config={{}} />;
</>;
