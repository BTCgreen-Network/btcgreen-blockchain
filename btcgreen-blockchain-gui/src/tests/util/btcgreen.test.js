const btcgreen = require('../../util/btcgreen');

describe('btcgreen', () => {
  it('converts number byte to btcgreen', () => {
    const result = btcgreen.byte_to_btcgreen(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string byte to btcgreen', () => {
    const result = btcgreen.byte_to_btcgreen('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number byte to btcgreen string', () => {
    const result = btcgreen.byte_to_btcgreen_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string byte to btcgreen string', () => {
    const result = btcgreen.byte_to_btcgreen_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number btcgreen to byte', () => {
    const result = btcgreen.btcgreen_to_byte(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string btcgreen to byte', () => {
    const result = btcgreen.btcgreen_to_byte('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number byte to colouredcoin', () => {
    const result = btcgreen.byte_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string byte to colouredcoin', () => {
    const result = btcgreen.byte_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number byte to colouredcoin string', () => {
    const result = btcgreen.byte_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string byte to colouredcoin string', () => {
    const result = btcgreen.byte_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to byte', () => {
    const result = btcgreen.colouredcoin_to_byte(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to byte', () => {
    const result = btcgreen.colouredcoin_to_byte('1000');

    expect(result).toBe(1000000);
  });
});
