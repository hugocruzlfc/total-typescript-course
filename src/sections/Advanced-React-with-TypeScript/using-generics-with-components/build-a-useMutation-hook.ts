import { useState } from "react";
import { createUser } from "@/lib/fake-external-lib";
import { Equal, Expect } from "@/utils/type-utils";

// type Mutation = (...args: any[]) => Promise<any>;

// interface UseMutationReturn {
//   mutate: Mutation;
//   isLoading: boolean;
// }

// interface UseMutationOptions {
//   mutation: Mutation;
// }

// export const useMutation = (opts: UseMutationOptions): UseMutationReturn => {
//   const [isLoading, setIsLoading] = useState(false);

//   return {
//     mutate: async (...args) => {
//       setIsLoading(true);

//       try {
//         const result = await opts.mutation(...args);
//         return result;
//       } catch (e) {
//         throw e;
//       } finally {
//         setIsLoading(false);
//       }
//     },
//     isLoading,
//   };
// };

type Mutation<TArgs extends any[], TReturn> = (
  ...args: TArgs
) => Promise<TReturn>;

interface UseMutationReturn<TArgs extends any[], TReturn> {
  mutate: Mutation<TArgs, TReturn>;
  isLoading: boolean;
}

interface UseMutationOptions<TArgs extends any[], TReturn> {
  mutation: Mutation<TArgs, TReturn>;
}

export const useMutation = <TArgs extends any[], TReturn>(
  opts: UseMutationOptions<TArgs, TReturn>
): UseMutationReturn<TArgs, TReturn> => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    mutate: async (...args) => {
      setIsLoading(true);

      try {
        const result = await opts.mutation(...args);
        return result;
      } catch (e) {
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    isLoading,
  };
};

const mutation = useMutation({
  mutation: createUser,
});

mutation.mutate({ name: "John Doe", email: "john@doe.com" });

// @ts-expect-error email missing!
mutation.mutate({ name: "John Doe" });

mutation.mutate(
  {
    name: "John Doe",
    email: "john@doe.com",
  },
  {
    throwOnError: true,
    // @ts-expect-error extra prop
    extra: "oh dear",
  }
);

type test = [
  Expect<Equal<typeof mutation.isLoading, boolean>>,
  Expect<
    Equal<
      typeof mutation.mutate,
      (
        user: { name: string; email: string },
        opts?: {
          throwOnError?: boolean;
        }
      ) => Promise<{
        id: string;
        name: string;
        email: string;
      }>
    >
  >
];
