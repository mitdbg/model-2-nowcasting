<!-- Model and Forecast › Introduction, for forecast 976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_overview.html?set=976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; inputs 71add97a74a6fc48 -->

# Overview of Forecast Bundle 8591882c-e0d7-55cd-b5a2-eb213df5b688

A forecast bundle is one model's forecasts on every world of a world bundle: for each world, a parameter fit and a forecast at each as-of date, all made with the same model (the same code and configuration). Comparing the worlds shows which results hold across worlds and which come from one world's random draws; a new version of the model makes a new forecast bundle on the same worlds, so the two compare world by world.

Each forecast is made in two steps. First a parameter fit sets the model's parameters (such as how fast each entity's capacity drifts, or how strongly its prices follow its costs) from the observations known on the as-of date. Then the filter runs every entity forward month by month with those parameters, correcting its hidden states with each month's observations, to the last observed month (history), the months since (nowcast) and a year ahead (forecast).

Each forecast runs 100 copies of its world at once, each with its own random shocks and its own draw of the uncertain parameters; their spread gives the 90% band.

## This forecast bundle

Forecast bundle8591882c-e0d7-55cd-b5a2-eb213df5b688World bundle58d75cf9-db7f-531f-8cca-48df96cbaf08 (one world)Modelf9fc9a9b-a8c5-5b55-ad69-2e9a0f746b52 (code version 4659a39; the same for every world)As-of dates2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30 (each forecast uses only what was published by its date)Completeyes: every world has a forecast at every as-of dateMonths coveredhistory 2018-10 to 2026-08; nowcast to the as-of date; forecast to 2027-09 (12 months past the last observed month, at the last as-of date)Copies of each world100 in each forecast, each run with its own shocks and parameter drawBand wideningthe published sector bands are widened 2.55× in history, 2.31× in the nowcast and 1.86× in the forecast, because the model's own 90% bands held too little of the truth in backtests (see Evaluation, Against ground truth). Entity bands are not widened.

## Its forecasts

One row per world of the bundle: its forecast at the last as-of date, and the parameter fit that forecast uses. The links show that world's fitted parameters and forecasts.

world | seed | forecast | computed  | time | observations used | fit | fitted | fit time | show

fa0bb576  | 20261112  | 976debf3  | 2026-11-13 at 13:29 UTC | 2.2 min  | 19,859  | 686d981a  | 2026-11-13 at 13:29 UTC | 39.3 min  | parameters · forecasts

## The fit, sector by sector

Each sector is fitted on its own. The fit works in rounds: first every entity's parameters, holding the sector's numbers fixed, then the sector's numbers, holding the entities fixed. After each round it scores the fit as a whole (the marginal likelihood: how probable the data are under the fitted model, allowing for what remains uncertain), and it keeps the best round, not the last. The small chart traces that score round by round; the dot is the round kept.

sector | template | entities | groups  | rounds | round kept | score by round | sector numbers | made (UTC)

Steel  | make to order | 25 | 12  | 10 | 10 |   | 19  | 2026-11-13 13:25

Airlines  | perishable service | 17 | 12  | 10 | 10 |   | 14  | 2026-11-13 12:55

Data centers  | contracted capacity | 20 | 12  | 10 | 10 |   | 15  | 2026-11-13 13:06

Oil and gas  | pipeline producer | 20 | 12  | 15 | 10 |   | 23  | 2026-11-13 13:29

Autos  | make to stock | 19 | 12  | 7 | 5 |   | 19  | 2026-11-13 13:03

Housing  | make to order | 19 | 12  | 6 | 4 |   | 19  | 2026-11-13 12:57

Retail  | distribution | 19 | 12  | 10 | 8 |   | 15  | 2026-11-13 13:02

Semiconductors  | pipeline producer | 18 | 12  | 8 | 6 |   | 23  | 2026-11-13 13:02

Chemicals  | make to stock | 19 | 12  | 9 | 7 |   | 19  | 2026-11-13 12:59

Food  | make to stock | 20 | 12  | 4 | 2 |   | 19  | 2026-11-13 12:57

Hospitals  | perishable service | 20 | 12  | 8 | 6 |   | 14  | 2026-11-13 12:58

Hotels  | perishable service | 20 | 12  | 6 | 4 |   | 14  | 2026-11-13 12:57

Machinery  | make to order | 20 | 12  | 5 | 3 |   | 19  | 2026-11-13 13:00

Wholesale  | distribution | 19 | 12  | 20 | 18 |   | 15  | 2026-11-13 13:42
