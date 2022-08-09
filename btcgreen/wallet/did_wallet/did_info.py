from dataclasses import dataclass
from typing import List, Optional, Tuple

from btcgreen.types.blockchain_format.sized_bytes import bytes32
from btcgreen.util.ints import uint64
from btcgreen.util.streamable import streamable, Streamable
from btcgreen.wallet.lineage_proof import LineageProof
from btcgreen.types.blockchain_format.program import Program
from btcgreen.types.blockchain_format.coin import Coin

DID_HRP = "did:btcgreen:"


@streamable
@dataclass(frozen=True)
class DIDInfo(Streamable):
    origin_coin: Optional[Coin]  # Coin ID of this coin is our DID
    backup_ids: List[bytes32]
    num_of_backup_ids_needed: uint64
    parent_info: List[Tuple[bytes32, Optional[LineageProof]]]  # {coin.name(): LineageProof}
    current_inner: Optional[Program]  # represents a Program as bytes
    temp_coin: Optional[Coin]  # partially recovered wallet uses these to hold info
    temp_puzhash: Optional[bytes32]
    temp_pubkey: Optional[bytes]
    sent_recovery_transaction: bool
    metadata: str  # JSON of the user defined metadata
