import { Equal, Expect } from "../utils/type-utils";

// interface TableProps {   ❌
//   renderRow: React.ReactNode;
// }

interface TableProps {
  renderRow: (index: number) => React.ReactNode;

  // renderRow: React.FC<number>   Other way to define the renderRow prop
}

const Table = (props: TableProps) => {
  return <div>{[0, 1, 3].map(props.renderRow)}</div>;
};

export const Parent = () => {
  return (
    <>
      <Table
        renderRow={(index) => {
          type test = Expect<Equal<typeof index, number>>;
          return <div key={index}>{index}</div>;
        }}
      />
      <Table
        renderRow={(index) => {
          return null;
        }}
      />
      <Table
        // @ts-expect-error
        renderRow={<div></div>}
      />
      <Table
        renderRow={(index) => {
          return index;
        }}
      />
    </>
  );
};
