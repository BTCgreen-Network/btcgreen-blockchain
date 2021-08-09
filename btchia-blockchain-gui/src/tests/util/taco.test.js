const btchia = require('../../util/btchia');

describe('btchia', () => {
  it('converts number mojo to btchia', () => {
    const result = btchia.mojo_to_btchia(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to btchia', () => {
    const result = btchia.mojo_to_btchia('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to btchia string', () => {
    const result = btchia.mojo_to_btchia_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to btchia string', () => {
    const result = btchia.mojo_to_btchia_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number btchia to mojo', () => {
    const result = btchia.btchia_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string btchia to mojo', () => {
    const result = btchia.btchia_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = btchia.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = btchia.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = btchia.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = btchia.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = btchia.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = btchia.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
