import React, { ReactNode } from "react";
import { Equal, Expect } from "../../utils/type-utils";

// interface TableProps {
//   rows: any[];
//   renderRow: (row: any) => ReactNode;
// }

// export class Table extends React.Component<TableProps> {
//   render(): ReactNode {
//     return (
//       <table>
//         <tbody>
//           {this.props.rows.map((row) => (
//             <tr>{this.props.renderRow(row)}</tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
// }

// solution
interface TableProps<TRow> {
  rows: TRow[];
  renderRow: (row: TRow) => ReactNode;
}

export class Table<TRow> extends React.Component<TableProps<TRow>> {
  render(): ReactNode {
    return (
      <table>
        <tbody>
          {this.props.rows.map((row) => (
            <tr>{this.props.renderRow(row)}</tr>
          ))}
        </tbody>
      </table>
    );
  }
}

//////

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
