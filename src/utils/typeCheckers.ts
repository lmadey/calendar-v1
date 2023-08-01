export function checkIsKeyInObject(
  value: any,
  object: object
): value is keyof typeof object {
  return value in object;
}
