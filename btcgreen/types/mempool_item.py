from dataclasses import dataclass
from typing import List

from btchia.consensus.cost_calculator import NPCResult
from btchia.types.blockchain_format.coin import Coin
from btchia.types.blockchain_format.program import SerializedProgram
from btchia.types.blockchain_format.sized_bytes import bytes32
from btchia.types.spend_bundle import SpendBundle
from btchia.util.ints import uint64
from btchia.util.streamable import Streamable, streamable


@dataclass(frozen=True)
@streamable
class MempoolItem(Streamable):
    spend_bundle: SpendBundle
    fee: uint64
    npc_result: NPCResult
    cost: uint64
    spend_bundle_name: bytes32
    additions: List[Coin]
    removals: List[Coin]
    program: SerializedProgram

    def __lt__(self, other):
        return self.fee_per_cost < other.fee_per_cost

    @property
    def fee_per_cost(self) -> float:
        return int(self.fee) / int(self.cost)

    @property
    def name(self) -> bytes32:
        return self.spend_bundle_name
