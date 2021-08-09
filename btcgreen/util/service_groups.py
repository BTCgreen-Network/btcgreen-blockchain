from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "btchia_harvester btchia_timelord_launcher btchia_timelord btchia_farmer btchia_full_node btchia_wallet".split(),
    "node": "btchia_full_node".split(),
    "harvester": "btchia_harvester".split(),
    "farmer": "btchia_harvester btchia_farmer btchia_full_node btchia_wallet".split(),
    "farmer-no-wallet": "btchia_harvester btchia_farmer btchia_full_node".split(),
    "farmer-only": "btchia_farmer".split(),
    "timelord": "btchia_timelord_launcher btchia_timelord btchia_full_node".split(),
    "timelord-only": "btchia_timelord".split(),
    "timelord-launcher-only": "btchia_timelord_launcher".split(),
    "wallet": "btchia_wallet btchia_full_node".split(),
    "wallet-only": "btchia_wallet".split(),
    "introducer": "btchia_introducer".split(),
    "simulator": "btchia_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
