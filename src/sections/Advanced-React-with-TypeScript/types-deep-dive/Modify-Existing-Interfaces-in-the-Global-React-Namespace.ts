import { Expect, Equal } from "../../utils/type-utils";

declare global {
  namespace React {
    interface MyAwesomeSolutionInterface {
      foo: string;
    }
  }
}

/**
 * We can use a feature called declaration merging in TypeScript to
 * CHANGE interfaces in the global namespace.
 *
 * WITHOUT changing the code above, change MyAwesomeInterface to add
 * a property called 'bar' that is a string.
 *
 * Clue: you'll need to use declare global, namespace, and interface
 * again.
 *
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
 */

//✅
declare global {
  namespace React {
    interface MyAwesomeSolutionInterface {
      bar: string;
    }
  }
}

type test = Expect<
  Equal<React.MyAwesomeSolutionInterface, { foo: string; bar: string }>
>;

export {};
