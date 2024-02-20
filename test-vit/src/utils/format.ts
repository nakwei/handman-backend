const formatPhoneNumber = (phoneNumber: number) => {
  const strPhoneNumber = `${phoneNumber}`;
  return `(${strPhoneNumber.slice(0, 3)}) ${strPhoneNumber.slice(
    3,
    6
  )}-${strPhoneNumber.slice(6, 10)}`;
};

enum ColorEnum {
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Purple,
  White,
}

type Color =
  | "Red"
  | "Orange"
  | "Yellow"
  | "Green"
  | "Blue"
  | "Purple"
  | "White";

type StringEndsWithA<T extends string> = T extends `${infer _}a` ? T : never;

const formatColor = <T extends string>(color: StringEndsWithA<T>) => {
  return color.toLowerCase() as Lowercase<T>;
};

const formatted = formatColor("Bluea");

// const cleaned = ('' + phoneNumber).replace(/\D/g, '');
// const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
// if (match) {
//     return '(' + match[1] + ') ' + match[2] + '-' + match[3];
// }
// return null;
console.log(formatPhoneNumber(1234567890));
