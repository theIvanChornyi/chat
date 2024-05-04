

export const decreaseByHalf = (num: number): number => {
  return Math.ceil(num / 2);
}

export const increaseByHalf = (num: number) => {
  return num + decreaseByHalf(num)
}