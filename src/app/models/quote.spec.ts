import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote(
      'test quote',
      'test author',
    )).toBeTruthy();
  });
});
