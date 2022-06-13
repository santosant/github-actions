import sum from './sum';

describe('Math', () => {
  it('should be able to sum A and B', () => {
    expect(sum(2, 2)).toBe(4);
  });
  it('should be able to get result 5', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
