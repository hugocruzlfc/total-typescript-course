import React, { forwardRef, ForwardedRef, useRef } from "react";
import { Equal, Expect } from "../../utils/type-utils";

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode
  ): (props: P & React.RefAttributes<T>) => React.ReactNode;
}

type Props<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

export const Table = <T,>(
  props: Props<T>,
  ref: ForwardedRef<HTMLTableElement>
) => {
  return <table ref={ref} />;
};

const ForwardReffedTable = forwardRef(Table);

const Parent = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const wrongRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ForwardReffedTable
        ref={tableRef}
        data={["123"]}
        renderRow={(row) => {
          type test = Expect<Equal<typeof row, string>>; // Error!
          return <div>123</div>;
        }}
      />
    </>
  );
};
