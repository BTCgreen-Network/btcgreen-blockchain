from __future__ import annotations

from typing import Generator, KeysView

SERVICES_FOR_GROUP = {
    "all": (
        "btcgreen_harvester btcgreen_timelord_launcher btcgreen_timelord btcgreen_farmer "
        "btcgreen_full_node btcgreen_wallet btcgreen_data_layer btcgreen_data_layer_http"
    ).split(),
    # TODO: should this be `data_layer`?
    "data": "btcgreen_wallet btcgreen_data_layer".split(),
    "data_layer_http": "btcgreen_data_layer_http".split(),
    "node": "btcgreen_full_node".split(),
    "harvester": "btcgreen_harvester".split(),
    "farmer": "btcgreen_harvester btcgreen_farmer btcgreen_full_node btcgreen_wallet".split(),
    "farmer-no-wallet": "btcgreen_harvester btcgreen_farmer btcgreen_full_node".split(),
    "farmer-only": "btcgreen_farmer".split(),
    "timelord": "btcgreen_timelord_launcher btcgreen_timelord btcgreen_full_node".split(),
    "timelord-only": "btcgreen_timelord".split(),
    "timelord-launcher-only": "btcgreen_timelord_launcher".split(),
    "wallet": "btcgreen_wallet".split(),
    "introducer": "btcgreen_introducer".split(),
    "simulator": "btcgreen_full_node_simulator".split(),
    "crawler": "btcgreen_crawler".split(),
    "seeder": "btcgreen_crawler btcgreen_seeder".split(),
    "seeder-only": "btcgreen_seeder".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
