import sum from './sum';

describe('Math', () => {
  it('should be able to sum A and B', () => {
    expect(sum(2, 2)).toBe(4);
  });
  it('should be fail', () => {
    expect(sum(2, 2)).toBe(5);
  });
});
