type Icon = "home" | "settings" | "about";
type ButtonVariant = "primary" | "secondary" | "tertiary";

// How do we refactor this to make it DRY?
// type LooseIcon = Icon | (string & {});
// type LooseButtonVariant = ButtonVariant | (string & {});

// ✅
type LooseAutoComplete<T> = T | (string & {});
type LooseIcon = LooseAutoComplete<Icon>;

type LooseButtonVariant = LooseAutoComplete<ButtonVariant>;

export const icons: LooseIcon[] = [
  "home",
  "settings",
  "about",
  "any-other-string",

  // I should get autocomplete if I add a new item here!
];

export const buttonVariants: LooseButtonVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "any-other-string",

  // I should get autocomplete if I add a new item here!
];
