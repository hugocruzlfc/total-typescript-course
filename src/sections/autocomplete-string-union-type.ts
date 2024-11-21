type IColor = "primary" | "secondary" | string;

type IconProps = {
  color: IColor;
};

const Icon = ({ color }: IconProps) => {
  // ...
};

// We aren't getting color suggestions
// <Icon color="primary" />

type IColor2 = "primary" | "secondary" | (string & {});

// <Icon color="primary" />;
// <Icon color="secondary" />;
// <Icon color="#fff" />;
