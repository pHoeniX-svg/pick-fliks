export type TSalt = 7 | 11 | 15;

export function uuid(salt: TSalt) {
  const str2 = Math.random().toString(36).substring(2, salt).toUpperCase();
  const str1 = Math.random().toString(36).substring(4, salt);
  const str4 = Math.random().toString(36).substring(4, salt).toUpperCase();
  const str3 = Math.random().toString(36).substring(2, salt);

  return `${str1}${str2}${str3}${str4}`;
}
