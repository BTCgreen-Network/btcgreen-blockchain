import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("BTCGREEN_ROOT", "~/.btcgreen/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("BTCGREEN_KEYS_ROOT", "~/.btcgreen_keys"))).resolve()
