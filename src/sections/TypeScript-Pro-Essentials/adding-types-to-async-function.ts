import { Equal, Expect } from "@/utils/type-utils";

// async function fetchData(){
//   const response = await fetch("https://api.example.com/data");
//   const data = await response.json();
//   return data;
// }

async function fetchData(): Promise<number> {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

const example = async () => {
  const data = await fetchData();

  type test = Expect<Equal<typeof data, number>>;
};
