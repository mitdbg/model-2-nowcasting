<!-- Overview › Data Model, for forecast 976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; the page: https://mitdbg.github.io/model-2-nowcasting/datamodel.html?set=976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; inputs b8f9b2b30f74df60 -->

# Data Model

This diagram shows Model 2's data as related tables, grouped into families and arranged by the phase that uses them. Click a table to see its columns, its key and how it joins to the others.

Show allZoom in Zoom outZoom to selection  Other joins

Box: a table (a set of rows) Shaded area: a family of related tables Line: a join. Each row at the forked end points to one row at the barred end.

Click a table to see its columns and joins here. Click a family name to zoom to it; drag the map to move it, and pinch or Ctrl-scroll to zoom.

Entity registry What exists and who owns what, on any date. Facts are never overwritten: a change adds a new version and closes the old one.

Observations Every published reading, one row per value, plus the catalog of reading types and the census counts.

Sector input bundle Each sector's drivers and statistics as ensemble draws, delivered by an outside source once per as-of date and never changed afterwards.

Configuration The settings people choose to steer the model: run and estimation settings, observation noise and calibrations, sector settings, priors and series mappings.

Parameter fitting The parameters estimated for each sector and quarter, with a record of each fit.

Synthetic truth The true values behind a synthetic world: hidden states, parameters and drivers. Present only in synthetic worlds; the model never sees them.

Run outputs What each run produces for its as-of date. Tables marked published are delivered to users; the rest are kept for diagnosis.

Scores How close each run came: errors and band coverage for every scored value, a record of each backtest, and one summary per backtest.

Catalog A lasting record of every world, model version, fit and forecast, spanning all the other phases: worlds are recorded as they are built, fits and forecasts as they are made, and problems and fixes name the ones they are about. One record per item; records point to each other by id and say where the files they describe are. Every id is a UUID that says nothing about the record; readable names are separate fields.

Problems, fixes and tests What the evaluation of a forecast found wrong, the possible fixes for it, the fixes chosen to be tested and what each test found. Each record has an id that never changes and names the world, fit and forecast it is about. Later: the fixes good enough to deploy.
