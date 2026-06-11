const AutoCompleteTrie = require("../src/autoCompleteTrie");

test("should add first letter as child", () => {
    const root = new AutoCompleteTrie();
    expect(root.children).toEqual({});
    root.addWord("hi");
    expect(root.children).toHaveProperty("h");

})
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
    expect(root.findWord("hello")).toBeTruthy();
    expect(root.findWord("bye")).toBeFalsy();
    expect(root.findWord("hell")).toBeFalsy();

})
test("should predict words - car, cat, care and not cell for 'ca' ", () => {
    const root = new AutoCompleteTrie();
    root.addWord("car");
    root.addWord("cat");
    root.addWord("care");
    root.addWord("cell");
    const arr = root.predictWords('ca');
    expect(arr).toContain('car');
    expect(arr).toContain('cat');
    expect(arr).toContain('care');
    expect(arr).not.toContain('cell');
    expect(arr).toHaveLength(3);
})
test("should return empty array when prefix does not exist", () => {
  const root = new AutoCompleteTrie();

  root.addWord("car");
  root.addWord("cat");

  expect(root.predictWords("z")).toEqual([]);
});