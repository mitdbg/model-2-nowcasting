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

Then open http://127.0.0.1:8765/. Pages: under the Overview tab, as sub-tabs (`M2.SUBPAGES` in site.js),
`index.html` (introduction), `howitworks.html` (the three stages, a static page), `datamodel.html` (below) and `forecast_model.html?s=CODE` (Model Structure: the equations, drawn per template, and the parameters); under Current World, `world_overview.html` (the world's identity from the workspace's
`world.json`, written when the world is built, and its counts), `world_entities.html?e=ID`
(what the world contains), `world_observations.html?type=…&entity=…&open=ID` (every
observation, filterable, from `data/observations.json`, and the kinds of observation) and `world_bundle.html?s=CODE`
(the input bundle's drivers and sector statistics, from `data/bundle.json`); under Current Forecast,
`forecast_overview.html` (the run and the fit it uses, from `data/forecast.json`), `forecast_config.html?s=CODE` (every value chosen before the fit or the forecast, from `data/config.json`), `forecast_fit.html?s=CODE` (each sector's fitted sector parameters) and, as the Forecasts sub-tab with a
faceted search panel on the left (`M2.forecastNav`; facets q, fs, fk, fz, fr, fc in the address), `sector.html?s=CODE` and `entity.html?e=ID`; then
under Evaluation, `eval_revisions.html` (each backtest run's nowcast and forecasts against the next run's estimates, with an example chart from `data/revisions.json`), `eval_observations.html` (each observation against the model's prediction), `eval_official.html` (sector totals against the bundle's official statistics), `evaluation.html` (what the data pin down; all four from `data/quality.json`) and `accuracy.html` (against the synthetic truth; on a real world it says none is available); and out of the navigation but kept: `groupings.html?g=ID` (shown under Current World, Entities; entity pages link to it) and `evidence.html`.
`datamodel.html?t=TABLE` is the data model,
drawn from `docs/datamodel.json` by `assets/datamodel.js`; edit that file and rebuild to change it. Not part of the Model 1 (KEYNES) site.

`scripts/deploy_site.sh` pushes `site/` with its data to the private repository
`mitdbg/model-2-nowcasting`, which serves it with GitHub Pages so it can be viewed from other
devices.
