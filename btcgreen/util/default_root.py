import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("BTCGREEN_ROOT", "~/.btcgreen/mainnet"))).resolve()
STANDALONE_ROOT_PATH = Path(
    os.path.expanduser(os.getenv("BTCGREEN_STANDALONE_WALLET_ROOT", "~/.btcgreen/standalone_wallet"))
).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("BTCGREEN_KEYS_ROOT", "~/.btcgreen_keys"))).resolve()
