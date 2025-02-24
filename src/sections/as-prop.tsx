function Example() {
  const Component = "h1";
  return <Component>This will render a h1</Component>;
}

// type PolymorphicProps<E extends React.ElementType> = {
//   as?: E;
// };

type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & {
    as?: E;
  }
>;

type TypographyProps<T extends React.ElementType> = PolymorphicProps<T> & {
  color?: string;
};
export function Typography<T extends React.ElementType = "p">({
  as,
  color,
  ...props
}: TypographyProps<T>) {
  const Component = as || "p";
  console.log(color);
  return <Component {...props} />;
}

export function Social() {
  return (
    <section>
      <Typography
        as="h1"
        className="mb-4"
      >
        Connect
      </Typography>
      <Typography
        as="a"
        className="mb-4"
        href="https://www.christianvm.dev/"
        target="_blank"
      >
        Link to my website
      </Typography>
    </section>
  );
}
