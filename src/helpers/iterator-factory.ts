const iteratorFactory = (
  start: number,
  count: number,
  step: number,
  stepFunc: Function,
  extras?: Array<unknown>
) => {
  let nextIndex = start;
  const end = start + count * step;

  const iterator = {
    next() {
      if (nextIndex <= end) {
        const result = stepFunc(nextIndex, ...extras);
        nextIndex += step;
        return result;
      }

      return undefined;
    },
  };

  return iterator;
};

export default iteratorFactory;
