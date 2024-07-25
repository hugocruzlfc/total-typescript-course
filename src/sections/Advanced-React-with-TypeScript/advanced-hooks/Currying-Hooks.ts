import { DependencyList, useMemo, useState } from "react";
import { Equal, Expect } from "../../utils/type-utils";

// const useCustomState = <TValue>(initial: TValue) => {
//   const [value, set] = useState<TValue>(initial);

//   return {
//     value,
//     set,
//     /**
//      * Here, we're returning a hook from our initial hook!
//      * This is a great way to compose behaviour.
//      *
//      * BUT - useComputed takes in a function which can return
//      * any type. We want to make sure that the type of the
//      * thing returned is inferred properly.
//      */
//     useComputed: (factory: (value: any) => any, deps?: DependencyList) => {
//       return useMemo(() => {
//         return factory(value);
//       }, [value, ...(deps || [])]);
//     },
//   };
// };

// solution

const useCustomState = <TValue>(initial: TValue) => {
  const [value, set] = useState<TValue>(initial);

  return {
    value,
    set,
    useComputed: <TComputed>(
      factory: (value: TValue) => TComputed,
      deps?: DependencyList
    ) => {
      return useMemo(() => {
        return factory(value);
      }, [value, ...(deps || [1])]);
    },
  };
};
///////

export const Component = () => {
  const arrayOfNums = useCustomState([1, 2, 3, 4, 5, 6, 7, 8]);

  /**
   * Currently, this is typed as any. How do we type it
   * based on the return type of the function passed to
   * useComputed?
   */
  const reversedAsString = arrayOfNums.useComputed((nums) =>
    Array.from(nums).reverse().map(String)
  );

  type test = Expect<Equal<typeof reversedAsString, string[]>>;
};
