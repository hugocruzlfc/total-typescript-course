//T[number].

const roles = ["admin", "editor", "contributor"] as const;

type RolesAsType = typeof roles;

type Role = RolesAsType[number];
//   ^^^^ 🚁

///////////////
const possibleResponses = [
  {
    status: 200,
    body: "Hello, world!",
  },
  {
    status: 404,
    body: "Not found",
  },
  {
    status: 500,
    body: "Internal server error",
  },
];

type PossibleResponses = typeof possibleResponses;

type PossibleResponse = PossibleResponses[number];

///////

type NavbarProps = {
  onChange: () => void;
};

type OnChangeType = NavbarProps["onChange"];
//   ^^^^^^^^^^^^ 🚁

/////
type ExampleObj = {
  // String keys
  stringKey1: "string-key";
  stringKey2: "string-key";

  // Numeric index signature
  [key: number]: "number-key";
};

type NumericValuesOnly = ExampleObj[number];
