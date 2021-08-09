const btcgreen = require('../../util/btcgreen');

describe('btcgreen', () => {
  it('converts number mojo to btcgreen', () => {
    const result = btcgreen.mojo_to_btcgreen(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to btcgreen', () => {
    const result = btcgreen.mojo_to_btcgreen('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to btcgreen string', () => {
    const result = btcgreen.mojo_to_btcgreen_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to btcgreen string', () => {
    const result = btcgreen.mojo_to_btcgreen_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number btcgreen to mojo', () => {
    const result = btcgreen.btcgreen_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string btcgreen to mojo', () => {
    const result = btcgreen.btcgreen_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = btcgreen.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = btcgreen.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = btcgreen.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = btcgreen.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = btcgreen.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = btcgreen.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
