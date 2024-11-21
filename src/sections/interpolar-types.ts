// For example, let's create a PngFile type that represents a string that ends with ".png":

type PngFile = `${string}.png`;

let myImage: PngFile = "my-image.png"; // ✅

//@ts-expect-error
let myImage2: PngFile = "my-image.jpg"; // 🚨

///

type Route = `/${string}`;

const myRoute: Route = "/home";

//@ts-expect-error
const badRoute: Route = "home";

////

type QueryString = `${string}?${string}`;

const myQueryString: QueryString = "search?query=hello";

//@ts-expect-error
const badQueryString: QueryString = "search";

// Combining Template Literal Types with Union Types

type ColorShade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type Color = "red" | "blue" | "green";

type ColorPalette = `${Color}-${ColorShade}`;

let color: ColorPalette = "red-500"; // ✅

//@ts-expect-error
let badColor: ColorPalette = "red";

/// transforming String Types

type UppercaseHello = Uppercase<"hello">;
//   ^^^^^^^^^^^^^^ 🚁
type LowercaseHELLO = Lowercase<"HELLO">;

type CapitalizeMatt = Capitalize<"matt">;

type UncapitalizePHD = Uncapitalize<"PHD">;
