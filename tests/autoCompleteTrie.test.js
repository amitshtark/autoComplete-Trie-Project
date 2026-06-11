const AutoCompleteTrie = require("../src/autoCompleteTrie");

test("should add first letter as child", () => {
  const root = new AutoCompleteTrie();

  expect(root.children).toEqual({});

  root.addWord("hi");

  expect(root.children).toHaveProperty("h");
});

test("should add full word path with endOfWord to be true", () => {
  const root = new AutoCompleteTrie();

  root.addWord("hi");

  expect(root.children).toHaveProperty("h");
  expect(root.children.h.children).toHaveProperty("i");
  expect(root.children.h.children.i.endOfWord).toBe(true);
});

test("should find existing word and not find non existing word or prefix", () => {
  const root = new AutoCompleteTrie();

  root.addWord("hello");

  expect(root.findWord("hello")).toBe(true);
  expect(root.findWord("bye")).toBe(false);
  expect(root.findWord("hell")).toBe(false);
});

test("should predict words - car, cat, care and not cell for 'ca'", () => {
  const root = new AutoCompleteTrie();

  root.addWord("car");
  root.addWord("cat");
  root.addWord("care");
  root.addWord("cell");

  const arr = root.predictWords("ca");
  const words = arr.map(item => item.word);

  expect(words).toContain("car");
  expect(words).toContain("cat");
  expect(words).toContain("care");
  expect(words).not.toContain("cell");
  expect(words).toHaveLength(3);
});

test("should return empty array when prefix does not exist", () => {
  const root = new AutoCompleteTrie();

  root.addWord("car");
  root.addWord("cat");

  expect(root.predictWords("z")).toEqual([]);
});

test("should initialize frequency to 0 when word is added", () => {
  const root = new AutoCompleteTrie();

  root.addWord("cat");

  const arr = root.predictWords("cat");

  expect(arr[0]).toEqual({
    word: "cat",
    frequency: 0
  });
});

test("should increment frequency when using an existing word", () => {
  const root = new AutoCompleteTrie();

  root.addWord("cat");

  expect(root.useWord("cat")).toBe(1);
  expect(root.useWord("cat")).toBe(2);
});

test("should return null when using a word that does not exist", () => {
  const root = new AutoCompleteTrie();

  root.addWord("cat");

  expect(root.useWord("dog")).toBe(null);
});

test("should return null when using a prefix that is not a complete word", () => {
  const root = new AutoCompleteTrie();

  root.addWord("care");

  expect(root.useWord("car")).toBe(null);
});

test("should sort predicted words by frequency", () => {
  const root = new AutoCompleteTrie();

  root.addWord("car");
  root.addWord("cat");
  root.addWord("care");

  root.useWord("care");
  root.useWord("care");
  root.useWord("cat");

  const arr = root.predictWords("ca");

  expect(arr[0].word).toBe("care");
  expect(arr[0].frequency).toBe(2);

  expect(arr[1].word).toBe("cat");
  expect(arr[1].frequency).toBe(1);

  expect(arr[2].word).toBe("car");
  expect(arr[2].frequency).toBe(0);
});