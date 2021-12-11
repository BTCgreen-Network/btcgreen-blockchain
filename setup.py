from setuptools import setup

dependencies = [
    "multidict==5.1.0",  # Avoid 5.2.0 due to Avast
    "blspy==1.0.6",  # Signature library
    "chiavdf==1.0.3",  # timelord and vdf verification
    "chiabip158==1.0",  # bip158-style wallet filters
    "chiapos==1.0.6",  # proof of space
    "clvm==0.9.7",
    "clvm_rs==0.1.15",
    "clvm_tools==0.4.3",
    "aiohttp==3.7.4",  # HTTP server for full node rpc
    "aiosqlite==0.17.0",  # asyncio wrapper for sqlite, to store blocks
    "bitstring==3.1.9",  # Binary data management library
    "colorama==0.4.4",  # Colorizes terminal output
    "colorlog==5.0.1",  # Adds color to logs
    "concurrent-log-handler==0.9.19",  # Concurrently log and rotate logs
    "cryptography==3.4.7",  # Python cryptography library for TLS - keyring conflict
    "fasteners==0.16.3",  # For interprocess file locking
    "keyring==23.0.1",  # Store keys in MacOS Keychain, Windows Credential Locker
    "keyrings.cryptfile==1.3.4",  # Secure storage for keys on Linux (Will be replaced)
    #  "keyrings.cryptfile==1.3.8",  # Secure storage for keys on Linux (Will be replaced)
    #  See https://github.com/frispete/keyrings.cryptfile/issues/15
    "PyYAML==5.4.1",  # Used for config file format
    "setproctitle==1.2.2",  # Gives the btcgreen processes readable names
    "sortedcontainers==2.4.0",  # For maintaining sorted mempools
    "websockets==8.1.0",  # For use in wallet RPC and electron UI
    "click==7.1.2",  # For the CLI
    "dnspythonchia==2.2.0",  # Query DNS seeds
    "watchdog==2.1.6",  # Filesystem event watching - watches keyring.yaml
    "wget==3.2", # Only for downloading peer node list
]

upnp_dependencies = [
    "miniupnpc==2.2.2",  # Allows users to open ports on their router
]

dev_dependencies = [
    "pytest",
    "pytest-asyncio",
    "flake8",
    "mypy",
    "black",
    "aiohttp_cors",  # For blackd
    "ipython",  # For asyncio debugging
    "types-setuptools",
]

kwargs = dict(
    name="btcgreen-blockchain",
    description="BTCgreen blockchain full node, farmer, timelord, and wallet.",
    url="https://btcgreen.us/",
    license="Apache License",
    python_requires=">=3.7, <4",
    keywords="btcgreen blockchain node",
    install_requires=dependencies,
    setup_requires=["setuptools_scm"],
    extras_require=dict(
        uvloop=["uvloop"],
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
        "btcgreen.full_node",
        "btcgreen.timelord",
        "btcgreen.farmer",
        "btcgreen.harvester",
        "btcgreen.introducer",
        "btcgreen.plotters",
        "btcgreen.plotting",
        "btcgreen.pools",
        "btcgreen.protocols",
        "btcgreen.rpc",
        "btcgreen.server",
        "btcgreen.simulator",
        "btcgreen.types.blockchain_format",
        "btcgreen.types",
        "btcgreen.util",
        "btcgreen.wallet",
        "btcgreen.wallet.puzzles",
        "btcgreen.wallet.rl_wallet",
        "btcgreen.wallet.cc_wallet",
        "btcgreen.wallet.did_wallet",
        "btcgreen.wallet.settings",
        "btcgreen.wallet.trading",
        "btcgreen.wallet.util",
        "btcgreen.ssl",
        "mozilla-ca",
    ],
    entry_points={
        "console_scripts": [
            "btcgreen = btcgreen.cmds.btcgreen:main",
            "btcgreen_wallet = btcgreen.server.start_wallet:main",
            "btcgreen_full_node = btcgreen.server.start_full_node:main",
            "btcgreen_harvester = btcgreen.server.start_harvester:main",
            "btcgreen_farmer = btcgreen.server.start_farmer:main",
            "btcgreen_introducer = btcgreen.server.start_introducer:main",
            "btcgreen_timelord = btcgreen.server.start_timelord:main",
            "btcgreen_timelord_launcher = btcgreen.timelord.timelord_launcher:main",
            "btcgreen_full_node_simulator = btcgreen.simulator.start_simulator:main",
        ]
    },
    package_data={
        "btcgreen": ["pyinstaller.spec"],
        "": ["*.clvm", "*.clvm.hex", "*.clib", "*.clinc", "*.clsp", "py.typed"],
        "btcgreen.util": ["initial-*.yaml", "english.txt"],
        "btcgreen.ssl": ["btcgreen_ca.crt", "btcgreen_ca.key", "dst_root_ca.pem"],
        "mozilla-ca": ["xbtcert.pem"],
    },
    use_scm_version={"fallback_version": "unknown-no-.git-directory"},
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    zip_safe=False,
)


if __name__ == "__main__":
    setup(**kwargs)  # type: ignore
