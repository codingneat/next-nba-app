export function serialize<T>(arg: T): T {
  return JSON.parse(JSON.stringify(arg));
}
