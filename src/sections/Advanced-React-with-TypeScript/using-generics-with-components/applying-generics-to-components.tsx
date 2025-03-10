import { ReactNode } from "react";
import { Expect, Equal } from "@/utils/type-utils";

/**
 * 1. Here, we have a table component. It takes an array of data and a function
 * to render each row. The problem is that the type of the data is not
 * generic. It's just `any`. We want to make it generic so that the type of
 * the data is inferred from the `rows` prop.
 */

// interface TableProps {
//   rows: any[];
//   renderRow: (row: any) => ReactNode;
// }

// export const Table = (props: TableProps) => {
//   return (
//     <table>
//       <tbody>
//         {props.rows.map((row) => (
//           <tr>{props.renderRow(row)}</tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// solution
interface TableProps<TRow> {
  rows: TRow[];
  renderRow: (row: TRow) => ReactNode;
}

export const Table = <TRow,>(props: TableProps<TRow>) => {
  return (
    <table>
      <tbody>
        {props.rows.map((row) => (
          <tr>{props.renderRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};

///////

const data = [
  {
    id: 1,
    name: "John",
  },
];

export const Parent = () => {
  return (
    <div>
      <Table
        rows={data}
        renderRow={(row) => <td>{row.name}</td>}
      />
      <Table
        rows={data}
        renderRow={(row) => {
          type test = Expect<Equal<typeof row, { id: number; name: string }>>;
          return (
            <td>
              {
                // @ts-expect-error
                row.doesNotExist
              }
            </td>
          );
        }}
      ></Table>
    </div>
  );
};
