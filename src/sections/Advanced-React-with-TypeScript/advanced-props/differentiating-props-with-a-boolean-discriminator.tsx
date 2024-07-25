// type EmbeddedPlaygroundProps = {  ❌
//   useStackblitz?: boolean;
//   stackblitzId?: string;
//   codeSandboxId?: string;
// };

type EmbeddedPlaygroundProps =
  | {
      useStackBlitz: true;
      stackBlitzId: string;
    }
  | {
      useStackBlitz?: false;
      codeSandboxId: string;
    };

const EmbeddedPlayground = (props: EmbeddedPlaygroundProps) => {
  if (props.useStackBlitz) {
    return (
      <iframe
        src={`https://stackblitz.com/edit/${props.stackBlitzId}?embed=1`}
      />
    );
  }

  return <iframe src={`https://codesandbox.io/embed/${props.codeSandboxId}`} />;
};

<>
  <EmbeddedPlayground
    useStackBlitz
    stackBlitzId="my-stackblitz-id"
  />
  <EmbeddedPlayground codeSandboxId="my-codesandbox-id" />
</>;
