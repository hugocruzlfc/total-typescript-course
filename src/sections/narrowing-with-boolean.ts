const myFunc = (input: string | null) => {
  if (!!input) {
    // Narrows to string. Nice.
    console.log(input);
    //              ^^^^^ 🚁
  }

  if (Boolean(input)) {
    // Doesn't narrow. WHYYYYYYYYYYYYYYYYY
    console.log(input);
    //              ^^^^^ 🚁
  }

  //other ways to check for null

  if (input !== null) {
    console.log(input);
    //            ^^^^^ 🚁
  }

  // Heh, stupid JavaScript.
  if (typeof input !== "object") {
    console.log(input);
    //            ^^^^^ 🚁
  }

  // our function
  if (isString(input)) {
    console.log(input); // ^^^^^ 🚁
  } // 🚁 Hovering over `input` shows... const input : string | null
};
// 🚁 Hovering over `input` shows...
// (parameter) input: string

// 🚁 Hovering over `input` shows...
// (parameter) input: string | null

// Boolean work

console.log(Boolean);
//          ^^^^^^^ 🚁

type WhatBooleanReturns = ReturnType<BooleanConstructor>;
//   ^^^^^^^^^^^^^^^^^^ 🚁

// 🚁 Hovering over `Boolean` shows...
var Boolean: BooleanConstructor;

// 🚁 Hovering over `WhatBooleanReturns` shows...
type WhatBooleanReturns2 = boolean;

///

const isString = (value: unknown) => {
  return typeof value === "string";
};

// Esto significa que el legendario .filter(Boolean) simplemente funcionaría, sin necesidad de usar ts-reset :

const arr = [1, 2, 3, null, undefined]; // Doesn't narrow to number[], sad times.
const result = arr.filter(Boolean);
// ^^^^^^ 🚁 // 🚁 Hovering over `result` shows... const result : ( number | null | undefined )[]
