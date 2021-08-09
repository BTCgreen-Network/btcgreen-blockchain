from btchia.util.ints import uint32, uint64

# 1 Taco coin = 1,000,000,000,000 = 1 trillion mojo.
_mojo_per_btchia = 1000000000000
_blocks_per_year = 1681920  # 32 * 6 * 24 * 365


def calculate_pool_reward(height: uint32) -> uint64:
    """
    Returns the pool reward at a certain block height. The pool earns 0/8 of the reward in each block. If the farmer
    is solo farming, they act as the pool, and therefore earn the entire block reward.
    These halving events will not be hit at the exact times
    (3 years, etc), due to fluctuations in difficulty. They will likely come early, if the network space and VDF
    rates increase continuously.
    """
    return uint64(int(0))

    if height == 0:
        return uint64(int((7 / 8) * 30000 * _mojo_per_btchia))
    elif height < 3 * _blocks_per_year:
        return uint64(int((7 / 8) * 1 * _mojo_per_btchia))
    elif height < 6 * _blocks_per_year:
        return uint64(int((7 / 8) * 0.5 * _mojo_per_btchia))
    elif height < 9 * _blocks_per_year:
        return uint64(int((7 / 8) * 0.25 * _mojo_per_btchia))
    elif height < 12 * _blocks_per_year:
        return uint64(int((7 / 8) * 0.125 * _mojo_per_btchia))
    else:
        return uint64(int((7 / 8) * 0.0625 * _mojo_per_btchia))


def calculate_base_farmer_reward(height: uint32) -> uint64:
    """
    Returns the base farmer reward at a certain block height.
    The base fee reward is 8/8 of total block reward
    Returns the coinbase reward at a certain block height. These halving events will not be hit at the exact times
    (3 years, etc), due to fluctuations in difficulty. They will likely come early, if the network space and VDF
    rates increase continuously.
    """
    if height == 0:
        return uint64(30000 * _mojo_per_btchia)
    elif height < 3 * _blocks_per_year:
        return uint64(1 * _mojo_per_btchia)
    elif height < 6 * _blocks_per_year:
        return uint64(0.5 * _mojo_per_btchia)
    elif height < 9 * _blocks_per_year:
        return uint64(0.25 * _mojo_per_btchia)
    elif height < 12 * _blocks_per_year:
        return uint64(0.125 * _mojo_per_btchia)
    else:
        return uint64(0.0625 * _mojo_per_btchia)
