import iteratorFactory from "./helpers/iterator-factory";
import generator from "./helpers/generator";

const manualIterator = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const item of manualIterator) {
  console.log(item);
}

const func = (stepIndex: number, ...extras: Array<unknown>) => {
  console.log({
    stepIndex,
    ...extras,
  });

  return {
    stepIndex,
    ...extras,
  };
};

const iterator = iteratorFactory(0, 10, 2, func, ["a", "b", "c"]);

while (iterator.next()) {}

const generatorIterator = generator(0, 10, 2, func, ["d", "e", "f"]);

for (const item of generatorIterator) {
}
