# Model 2 development site

A local, unpublished site for watching Model 2: sector totals, each entity's hidden states
against its observations, the evidence inventory, and backtest accuracy. Static pages that read
JSON from `site/data/` (not tracked: it is rebuilt from a workspace).

```sh
# 1. a run with the entity export on (config: run.export_entity_detail: true)
m2 --workspace WS run --as-of 2026-09-30
# 2. site data from that workspace's latest such run (and, optionally, a backtest workspace)
python scripts/build_site_data.py WS [--backtest BACKTEST_WS]
# 3. serve locally only
python3 -m http.server 8765 --bind 127.0.0.1 --directory site
```

A Modal backtest pulled with `python scripts/modal_app.py pull RUN_ID WS` serves as both WS and the
backtest (its runs export entity detail). Build with the model code that ran it, e.g.
`PYTHONPATH=../model-2-compute/src python scripts/build_site_data.py WS`, so the observation types match.

Then open http://127.0.0.1:8765/. Pages: `index.html` (overview), `sector.html?s=CODE`,
`entity.html?e=ID`, `evidence.html`, `accuracy.html`. Not part of the Model 1 (KEYNES) site.

`scripts/deploy_site.sh` pushes `site/` with its data to the private repository
`mitdbg/model-2-nowcasting`, which serves it with GitHub Pages so it can be viewed from other
devices.
