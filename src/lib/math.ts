export const calculatePercentage = (a: number, b: number) => {
  if (a <= 0) {
    return 0;
  }
  if (b < 0) {
    return 1;
  }
  const percentage = (a - b) / a;
  return percentage < 0 ? 0 : percentage;
};
