import { Equal, Expect } from "@/utils/type-utils";

/**
 * There's a problem with our AllOrNothing type. It's letting
 * us pass ANYTHING as T. We want to constrain it so that it
 * only works with objects.
 */

// type ToUndefinedObject<T> = Partial<Record<keyof T, undefined>>;
// type AllOrNothing<T> = T | ToUndefinedObject<T>;

// solution 1
// type ToUndefinedObject<T extends object> = Partial<Record<keyof T, undefined>>;
// type AllOrNothing<T extends object> = T | ToUndefinedObject<T>;

// solution 2 (better)
type ToUndefinedObject<T extends Record<string, any>> = Partial<
  Record<keyof T, undefined>
>;
type AllOrNothing<T extends Record<string, any>> = T | ToUndefinedObject<T>;

type tests = [
  // @ts-expect-error
  AllOrNothing<string>,
  // @ts-expect-error
  AllOrNothing<number>,
  // @ts-expect-error
  AllOrNothing<undefined>,
  Expect<Equal<AllOrNothing<{ a: string }>, { a: string } | { a?: undefined }>>
];
