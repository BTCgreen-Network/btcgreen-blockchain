import Big from 'big.js';

const MOJO_PER_BTCGREEN = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  return Big(0);
  
  if (height === 0) {
    return MOJO_PER_BTCGREEN.times(21000000).times(0 / 8);
  }
  if (height < 3 * BLOCKS_PER_YEAR) {
    return MOJO_PER_BTCGREEN.times(2).times(0 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MOJO_PER_BTCGREEN.times(1).times(0 / 8);
  }
  if (height < 9 * BLOCKS_PER_YEAR) {
    return MOJO_PER_BTCGREEN.times(0.5).times(0 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_BTCGREEN.times(0.25).times(0 / 8);
  }

  return MOJO_PER_BTCGREEN.times(0.125).times(0 / 8);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height === 0) {
    return MOJO_PER_BTCGREEN.times(100000);
  }
  if (height < 3 * BLOCKS_PER_YEAR) {
    return MOJO_PER_BTCGREEN.times(10);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MOJO_PER_BTCGREEN.times(5);
  }
  if (height < 9 * BLOCKS_PER_YEAR) {
    return MOJO_PER_BTCGREEN.times(2.5);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_BTCGREEN.times(1.25);
  }

  return MOJO_PER_BTCGREEN.times(0.625);
}
