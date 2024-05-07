// Partial<T> : Crea un tipo con todas las propiedades de otro tipo configuradas como opcionales;
// Pick<T, K>  : Crea un nuevo tipo seleccionando un conjunto de propiedades Kde otro tipo;
// Required<T> : Crea un tipo con todas las propiedades de otro tipo configuradas como obligatorias;
// Readonly<T> : Crea un tipo con todas las propiedades de otro tipo configuradas en solo lectura;

// Example 1
type Maybe<T> = T | null | undefined;

interface User {
  id: string;
  name: string;
  phoneNumber: Maybe<string>;
}
