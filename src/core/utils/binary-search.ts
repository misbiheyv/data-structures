export function binarySearch(target: any, arr: any[], left?: number, right?: number): CanUndef<number> {
  const
    r = right ?? arr.length,
    l = left ?? 0,
    pivot = Math.floor((r + l) / 2),
    el = arr[pivot];

  if (target === el) return pivot;

  if (l === r) return undefined;

  if (target < el) {
    return binarySearch(target, arr, l, pivot);
  }

  return binarySearch(target, arr, pivot + 1, r);
}
