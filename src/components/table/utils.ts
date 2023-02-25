export const compareValues = <T>(
  key: keyof T,
  order: 'asc' | 'desc' = 'asc'
) => {
  return (a: T, b: T) => {
    const aValue = a[key];
    const bValue = b[key];

    if (order === 'asc') {
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
    } else {
      if (aValue < bValue) return 1;
      if (aValue > bValue) return -1;
    }

    return 0;
  };
};
