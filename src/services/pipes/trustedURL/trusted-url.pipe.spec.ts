import { TrustedURLPipe } from './trusted-url.pipe';

describe('TrustedURLPipe', () => {
  it('create an instance', () => {
    const pipe = new TrustedURLPipe();
    expect(pipe).toBeTruthy();
  });
});
