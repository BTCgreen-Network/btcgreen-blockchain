from __future__ import annotations

from typing import Any

from btcgreen.types.blockchain_format.program import Program


def json_to_btcgreenlisp(json_data: Any) -> Any:
    list_for_btcgreenlisp = []
    if isinstance(json_data, list):
        for value in json_data:
            list_for_btcgreenlisp.append(json_to_btcgreenlisp(value))
    else:
        if isinstance(json_data, dict):
            for key, value in json_data:
                list_for_btcgreenlisp.append((key, json_to_btcgreenlisp(value)))
        else:
            list_for_btcgreenlisp = json_data
    return Program.to(list_for_btcgreenlisp)
