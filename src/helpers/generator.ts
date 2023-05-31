function* generator(
  start: number,
  count: number,
  step: number,
  stepFunc: Function,
  extras?: Array<unknown>
) {
  const end = start + count * step;
  for (let i = start; i <= end; i += step) {
    const result = stepFunc(i, ...extras);
    yield result;
  }
}

export default generator;
