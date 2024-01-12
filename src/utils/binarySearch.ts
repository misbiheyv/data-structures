export function binarySearch(target: any, arr: any[], left?: number, right?: number): CanUndef<number> {
  const r = right ?? arr.length;
  const l = left ?? 0;

  const pivot = Math.floor((r + l) / 2);
  const el = arr[pivot];

  if (target === el) return pivot;

  if (l === r) return undefined;

  if (target < el) {
    return binarySearch(target, arr, l, pivot);
  } else {
    return binarySearch(target, arr, pivot + 1, r);
  }
}