from __future__ import annotations

from dataclasses import dataclass
from typing import Optional

from btcgreen.types.blockchain_format.sized_bytes import bytes32
from btcgreen.util.ints import uint32
from btcgreen.util.streamable import Streamable, streamable


@streamable
@dataclass(frozen=True)
class FarmNewBlockProtocol(Streamable):
    puzzle_hash: bytes32


@streamable
@dataclass(frozen=True)
class ReorgProtocol(Streamable):
    old_index: uint32
    new_index: uint32
    puzzle_hash: bytes32
    seed: Optional[bytes32]


@streamable
@dataclass(frozen=True)
class GetAllCoinsProtocol(Streamable):
    include_spent_coins: bool
