import { expect, it } from "vitest";

function validateUsername(username: string | null): boolean {
  // Rewrite this function to make the error go away
  if (username) {
    return username.length > 5;
  }

  return false;
}

it("should return true for valid usernames", () => {
  expect(validateUsername("Matt1234")).toBe(true);

  expect(validateUsername("Alice")).toBe(false);
  expect(validateUsername("Bob")).toBe(false);
});

it("Should return false for null", () => {
  expect(validateUsername(null)).toBe(false);
});

// option 2
// function validateUsername(username: string | null): boolean {
//   if (typeof username === "string") {
//     return username.length > 5;
//   }

//   return false;
// }

// option 3
// function validateUsername(username: string | null | undefined): boolean {
//   if (typeof name !== "string") {
//     return false;
//   }
//   return username.length > 5;
// }

// option 4
// function validateUsername(username: string | null): boolean {
//   if (typeof username === "object") {
//     return false;
//   }

//   return username.length > 5;
// }

// option 5
// function validateUsername(username: string | null): boolean {
//   const isUsernameOK = typeof username === "string";

//   if (isUsernameOK) {
//     return username.length > 5;
//   }

//   return false;
// }
