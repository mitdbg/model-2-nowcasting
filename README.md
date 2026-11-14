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
`index.html` (introduction), `howitworks.html` (the four stages, a static page), `datamodel.html` (below) and `forecast_model.html?s=CODE` (Model Structure: the equations, drawn per template, and the parameters); under Inputs, `world_overview.html` (the world's identity from the workspace's
`world.json`, written when the world is built, and its counts), `world_entities.html?e=ID`
(what the world contains), `world_observations.html?type=…&entity=…&open=ID` (every
observation, filterable, from `data/observations.json`, and the kinds of observation) and `world_bundle.html?s=CODE`
(the input bundle's drivers and sector statistics, from `data/bundle.json`) and `forecast_config.html?s=CODE` (Model Configuration: every value chosen before the fit or the forecast, from `data/config.json`); under Model and Forecasts,
`forecast_overview.html` (the run and the fit it uses, from `data/forecast.json`), `forecast_fit.html?s=CODE` (each sector's fitted sector parameters) and, as the Forecasts sub-tab with a
faceted search panel on the left (`M2.forecastNav`; facets q, fs, fk, fz, fr, fc in the address), `sector.html?s=CODE` and `entity.html?e=ID`; then
under Evaluation, `eval_revisions.html` (each backtest run's nowcast and forecasts against the next run's estimates, with an example chart from `data/revisions.json`), `eval_observations.html` (each observation against the model's prediction), `eval_official.html` (sector totals against the bundle's official statistics), `evaluation.html` (what the data pin down; all four from `data/quality.json`) and `accuracy.html` (against the synthetic truth; on a real world it says none is available); and out of the navigation but kept: `groupings.html?g=ID` (shown under Inputs, World Entities; entity pages link to it) and `evidence.html`.
`datamodel.html?t=TABLE` is the data model,
drawn from `docs/datamodel.json` by `assets/datamodel.js`; edit that file and rebuild to change it. Not part of the Model 1 (KEYNES) site.

The site holds several sets, each a world with a forecast made on it, under `data/sets/<world>__<run>/`,
listed in `data/sets.json`. Each build adds one (`--no-default` keeps the current default); the picker at the
top right of every page switches between them, remembered in the browser, or `?set=ID` in the address.

Under Next Version, `next_problems.html` shows the chosen set's problem summary (`data/problems.json`), written by
an evaluator that saw only that set's four Evaluation pages that need no ground truth, and kept in
`docs/next_version/<set id>.md`; `scripts/problems_page.py` (also run by each build) turns it into the set's data.
A set without one says so. `next_improvements.html` (Possible Improvements) shows possible fixes for those problems
(`data/improvements.json`, from `docs/next_version/<set id>.improvements.json`), each linking to its problem at
`next_problems.html#problem-N`, labeled 1A, 1B, 2A, ... (`#fix-1A` links to a row), sortable by problem, likelihood of success, time to test or cost to test (`?sort=`, `&dir=desc`).
`next_testing.html` (Improvement Testing) lists every possible fix with what became of it (`data/testing.json`): its
place in the testing plan (`docs/next_version/<set id>.testplan.json`, a list of fix labels in order; fixes not on it
are "Not tried"), a short summary of the fix (its `title` in the improvements file), and its latest test result from
the catalog (recorded with `scripts/record_test.py`): verdict, runtime, cost and what happened. Each result's agent
transcript stays in the catalog and is never published. Sortable by order, fix, problem, status, time and cost
(`?sort=`, `&dir=desc`); `#fix-1A` links to a row. `next_plan.html` and `next_results.html`, its two former halves,
now forward to it.

`scripts/deploy_site.sh` pushes `site/` with its data to the private repository
`mitdbg/model-2-nowcasting`, which serves it with GitHub Pages so it can be viewed from other
devices.
