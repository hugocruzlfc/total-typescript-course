/**
 * It's actually possible to change things in the global namespace
 * in TypeScript.
 *
 * 1. Add a declaration for React.MyInterface to the global React
 * namespace below.
 */

import { Equal, Expect } from "@/utils/type-utils";

// declare global {
//   namespace React {}
// }

//✅
declare global {
  namespace React {
    interface MySolutionInterface {
      foo: string;
    }
  }
}

type test = Expect<Equal<React.MySolutionInterface, { foo: string }>>;

export {};
