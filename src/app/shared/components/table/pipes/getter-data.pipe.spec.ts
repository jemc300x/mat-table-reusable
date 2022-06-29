import { GetterDataPipe } from './getter-data.pipe';

describe('GetterDataPipe', () => {
  it('create an instance', () => {
    const pipe = new GetterDataPipe();
    expect(pipe).toBeTruthy();
  });
});
