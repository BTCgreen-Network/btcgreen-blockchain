from __future__ import annotations

import os

from setuptools import setup

dependencies = [
    "aiofiles==22.1.0",  # Async IO for files
    "blspy==1.0.16",  # Signature library
    "chiavdf==1.0.8",  # timelord and vdf verification
    "chiabip158==1.1",  # bip158-style wallet filters
    "chiapos==1.0.11",  # proof of space
    "clvm==0.9.7",
    "clvm_tools==0.4.6",  # Currying, Program.to, other conveniences
    "chia_rs==0.1.14",
    "clvm-tools-rs==0.1.25",  # Rust implementation of clvm_tools' compiler
    "aiohttp==3.8.3",  # HTTP server for full node rpc
    "aiosqlite==0.17.0",  # asyncio wrapper for sqlite, to store blocks
    "bitstring==3.1.9",  # Binary data management library
    "colorama==0.4.5",  # Colorizes terminal output
    "colorlog==6.7.0",  # Adds color to logs
    "concurrent-log-handler==0.9.20",  # Concurrently log and rotate logs
    "cryptography==38.0.3",  # Python cryptography library for TLS - keyring conflict
    "filelock==3.8.0",  # For reading and writing config multiprocess and multithread safely  (non-reentrant locks)
    "keyring==23.9.3",  # Store keys in MacOS Keychain, Windows Credential Locker
    "keyrings.cryptfile==1.3.4",  # Secure storage for keys on Linux (Will be replaced)
    #  "keyrings.cryptfile==1.3.8",  # Secure storage for keys on Linux (Will be replaced)
    #  See https://github.com/frispete/keyrings.cryptfile/issues/15
    "PyYAML==6.0",  # Used for config file format
    "setproctitle==1.2.3",  # Gives the btcgreen processes readable names
    "sortedcontainers==2.4.0",  # For maintaining sorted mempools
    "click==8.1.3",  # For the CLI
    "dnspython==2.2.1",  # Query DNS seeds
    "watchdog==2.1.9",  # Filesystem event watching - watches keyring.yaml
    "dnslib==0.9.23",  # dns lib
    "typing-extensions==4.4.0",  # typing backports like Protocol and TypedDict
    "zstd==1.5.2.6",
    "packaging==21.3",
    "psutil==5.9.1",
]

upnp_dependencies = [
    "miniupnpc==2.2.2",  # Allows users to open ports on their router
]

dev_dependencies = [
    "build",
    "coverage",
    "diff-cover",
    "pre-commit",
    "py3createtorrent",
    "pylint",
    "pytest",
    "pytest-asyncio>=0.18.1",  # require attribute 'fixture'
    "pytest-cov",
    "pytest-monitor; sys_platform == 'linux'",
    "pytest-xdist",
    "twine",
    "isort",
    "flake8",
    "mypy",
    "black==22.10.0",
    "aiohttp_cors",  # For blackd
    "ipython",  # For asyncio debugging
    "pyinstaller==5.3",
    "types-aiofiles",
    "types-cryptography",
    "types-pkg_resources",
    "types-pyyaml",
    "types-setuptools",
]

kwargs = dict(
    name="btcgreen-blockchain",
    author="Mariano Sorgente",
    author_email="mariano@btcgreen.us",
    description="BTCgreen blockchain full node, farmer, timelord, and wallet.",
    url="https://btcgreen.us/",
    license="Apache License",
    python_requires=">=3.7, <4",
    keywords="btcgreen blockchain node",
    install_requires=dependencies,
    extras_require=dict(
        dev=dev_dependencies,
        upnp=upnp_dependencies,
    ),
    packages=[
        "build_scripts",
        "btcgreen",
        "btcgreen.cmds",
        "btcgreen.clvm",
        "btcgreen.consensus",
        "btcgreen.daemon",
        "btcgreen.data_layer",
        "btcgreen.full_node",
        "btcgreen.timelord",
        "btcgreen.farmer",
        "btcgreen.harvester",
        "btcgreen.introducer",
        "btcgreen.plot_sync",
        "btcgreen.plotters",
        "btcgreen.plotting",
        "btcgreen.pools",
        "btcgreen.protocols",
        "btcgreen.rpc",
        "btcgreen.seeder",
        "btcgreen.server",
        "btcgreen.simulator",
        "btcgreen.types.blockchain_format",
        "btcgreen.types",
        "btcgreen.util",
        "btcgreen.wallet",
        "btcgreen.wallet.db_wallet",
        "btcgreen.wallet.puzzles",
        "btcgreen.wallet.cat_wallet",
        "btcgreen.wallet.did_wallet",
        "btcgreen.wallet.nft_wallet",
        "btcgreen.wallet.settings",
        "btcgreen.wallet.trading",
        "btcgreen.wallet.util",
        "btcgreen.ssl",
        "mozilla-ca",
    ],
    entry_points={
        "console_scripts": [
            "btcgreen = btcgreen.cmds.btcgreen:main",
            "btcgreen_daemon = btcgreen.daemon.server:main",
            "btcgreen_wallet = btcgreen.server.start_wallet:main",
            "btcgreen_full_node = btcgreen.server.start_full_node:main",
            "btcgreen_harvester = btcgreen.server.start_harvester:main",
            "btcgreen_farmer = btcgreen.server.start_farmer:main",
            "btcgreen_introducer = btcgreen.server.start_introducer:main",
            "btcgreen_crawler = btcgreen.seeder.start_crawler:main",
            "btcgreen_seeder = btcgreen.seeder.dns_server:main",
            "btcgreen_timelord = btcgreen.server.start_timelord:main",
            "btcgreen_timelord_launcher = btcgreen.timelord.timelord_launcher:main",
            "btcgreen_full_node_simulator = btcgreen.simulator.start_simulator:main",
            "btcgreen_data_layer = btcgreen.server.start_data_layer:main",
            "btcgreen_data_layer_http = btcgreen.data_layer.data_layer_server:main",
        ]
    },
    package_data={
        "btcgreen": ["pyinstaller.spec"],
        "": ["*.clvm", "*.clvm.hex", "*.clib", "*.clinc", "*.clsp", "py.typed"],
        "btcgreen.util": ["initial-*.yaml", "english.txt"],
        "btcgreen.ssl": ["btcgreen_ca.crt", "btcgreen_ca.key", "dst_root_ca.pem"],
        "mozilla-ca": ["cacert.pem"],
    },
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    zip_safe=False,
    project_urls={
        "Source": "https://github.com/BTCgreen-Network/btcgreen-blockchain/",
        "Changelog": "https://github.com/BTCgreen-Network/btcgreen-blockchain/blob/main/CHANGELOG.md",
    },
)


if len(os.environ.get("BTCGREEN_SKIP_SETUP", "")) < 1:
    setup(**kwargs)  # type: ignore
