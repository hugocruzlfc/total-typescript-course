type Album = {
  id: string; // same per type
  title: string; // same per type
  genre: string; // different
};

type CollectorEdition = {
  id: string; // same per type
  title: string; // same per type
  limitedEditionFeatures: string[]; // different
};

type DigitalRelease = {
  id: string; // same per type
  title: string; // same per type
  digitalFormat: string; // different
};

type MusicProduct = Album | CollectorEdition | DigitalRelease;

type DistributiveOmit<T, K extends PropertyKey> = T extends any
  ? Omit<T, K>
  : never;

type MusicProductWithoutId = DistributiveOmit<MusicProduct, "id">;

// equal to:

type MusicProductWithoutId2 =
  | {
      title: string;
      genre: string;
    }
  | {
      title: string;
      limitedEditionFeatures: string[];
    }
  | {
      title: string;
      digitalFormat: string;
    };

type DistributivePick<T, K extends keyof T> = T extends any
  ? Pick<T, K>
  : never;
