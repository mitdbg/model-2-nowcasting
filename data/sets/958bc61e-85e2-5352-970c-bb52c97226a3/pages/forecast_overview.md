<!-- Model and Forecast › Introduction, for forecast 958bc61e-85e2-5352-970c-bb52c97226a3; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_overview.html?set=958bc61e-85e2-5352-970c-bb52c97226a3; inputs 8b14717b99741d70 -->

# Overview of Forecast Set 569b458e-ce80-51a1-8156-09d83bb60353

A forecast set is one model's forecasts on every world of a world bundle: for each world, a parameter fit and a forecast at each as-of date, all made with the same model (the same code and configuration). Comparing the worlds shows which results hold across worlds and which come from one world's random draws; a new version of the model makes a new forecast set on the same worlds, so the two compare world by world.

Each forecast is made in two steps. First a parameter fit sets the model's parameters (such as how fast each entity's capacity drifts, or how strongly its prices follow its costs) from the observations known on the as-of date. Then the filter runs every entity forward month by month with those parameters, correcting its hidden states with each month's observations, to the last observed month (history), the months since (nowcast) and a year ahead (forecast).

Each forecast runs 100 copies of its world at once, each with its own random shocks and its own draw of the uncertain parameters; their spread gives the 90% band.

## This forecast set

Forecast set569b458e-ce80-51a1-8156-09d83bb60353World bundleaeb4cd78-4fb6-589b-9470-b34b169d8539 (one world)Model9c358ba9-79b3-57c0-bea1-ccbf572f2b00 (code version 9d8600c; the same for every world)As-of dates2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30 (each forecast uses only what was published by its date)Completeyes: every world has a forecast at every as-of dateMonths coveredhistory 2018-10 to 2026-09; nowcast to the as-of date; forecast to 2027-09 (12 months past the last observed month, at the last as-of date)Copies of each world100 in each forecast, each run with its own shocks and parameter drawBand wideningthe published sector bands are widened 2.55× in history, 2.31× in the nowcast and 1.86× in the forecast, because the model's own 90% bands held too little of the truth in backtests (see Evaluation, Against ground truth). Entity bands are not widened.

## Its forecasts

One row per world of the bundle: its forecast at the last as-of date, and the parameter fit that forecast uses. The links show that world's fitted parameters and forecasts.

world | seed | forecast | computed  | time | observations used | fit | fitted | fit time | show

2edf3773  | 20261117  | 958bc61e  | 2026-11-17 at 06:02 UTC | 2.2 min  | 19,962  | 6a4c7649  | 2026-11-17 at 06:02 UTC |   | parameters · forecasts

## The fit, sector by sector

Each sector is fitted on its own. The fit works in rounds: first every entity's parameters, holding the sector's numbers fixed, then the sector's numbers, holding the entities fixed. After each round it scores the fit as a whole (the marginal likelihood: how probable the data are under the fitted model, allowing for what remains uncertain), and it keeps the best round, not the last. The small chart traces that score round by round; the dot is the round kept.

sector | template | entities | groups  | rounds | round kept | score by round | sector numbers | made (UTC)

Steel  | make to order | 26 | 12  | 10 | 9 |   | 19  | 2026-11-17 05:13

Airlines  | perishable service | 17 | 12  | 10 | 10 |   | 14  | 2026-11-17 04:54

Data centers  | contracted capacity | 20 | 12  | 10 | 10 |   | 15  | 2026-11-17 05:04

Oil and gas  | pipeline producer | 19 | 12  | 30 | 28 |   | 23  | 2026-11-17 06:02

Autos  | make to stock | 19 | 12  | 9 | 7 |   | 19  | 2026-11-17 05:06

Housing  | make to order | 20 | 12  | 5 | 3 |   | 19  | 2026-11-17 04:54

Retail  | distribution | 19 | 12  | 7 | 5 |   | 15  | 2026-11-17 04:58

Semiconductors  | pipeline producer | 18 | 12  | 10 | 8 |   | 23  | 2026-11-17 05:03

Chemicals  | make to stock | 19 | 12  | 8 | 6 |   | 19  | 2026-11-17 04:55

Food  | make to stock | 20 | 12  | 4 | 2 |   | 19  | 2026-11-17 04:54

Hospitals  | perishable service | 20 | 12  | 6 | 4 |   | 14  | 2026-11-17 04:55

Hotels  | perishable service | 20 | 12  | 6 | 4 |   | 14  | 2026-11-17 04:55

Machinery  | make to order | 20 | 12  | 8 | 6 |   | 19  | 2026-11-17 05:00

Wholesale  | distribution | 19 | 12  | 12 | 10 |   | 15  | 2026-11-17 05:16
