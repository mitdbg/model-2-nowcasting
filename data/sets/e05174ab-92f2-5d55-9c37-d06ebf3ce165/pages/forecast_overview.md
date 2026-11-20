<!-- Model and Forecast › Introduction, for forecast e05174ab-92f2-5d55-9c37-d06ebf3ce165; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_overview.html?set=e05174ab-92f2-5d55-9c37-d06ebf3ce165; inputs 45c08db35b57acec -->

# Overview of Forecast Bundle 38a0cf1a-8b2f-579f-8d7b-c391036e3a7f

A forecast bundle is one model's forecasts on every world of a world bundle: for each world, a parameter fit and a forecast at each as-of date, all made with the same model (the same code and configuration). Comparing the worlds shows which results hold across worlds and which come from one world's random draws; a new version of the model makes a new forecast bundle on the same worlds, so the two compare world by world.

Each forecast is made in two steps. First a parameter fit sets the model's parameters (such as how fast each entity's capacity drifts, or how strongly its prices follow its costs) from the observations known on the as-of date. Then the filter runs every entity forward month by month with those parameters, correcting its hidden states with each month's observations, to the last observed month (history), the months since (nowcast) and a year ahead (forecast).

Each forecast runs 100 copies of its world at once, each with its own random shocks and its own draw of the uncertain parameters; their spread gives the 90% band.

## This forecast bundle

Forecast bundle38a0cf1a-8b2f-579f-8d7b-c391036e3a7fWorld bundle2ca91773-e0b9-5d10-a633-37dd1d165a3a (5 worlds)Model14c87df2-0003-5af7-807f-94cad8198845 (code version ea4e0f3; the same for every world)As-of dates2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30 (each forecast uses only what was published by its date)Completeyes: every world has a forecast at every as-of dateMonths coveredhistory 2018-10 to 2026-08; nowcast to the as-of date; forecast to 2027-09 (12 months past the last observed month, at the last as-of date)Copies of each world100 in each forecast, each run with its own shocks and parameter drawBand wideningthe published sector bands are widened 2.55× in history, 2.31× in the nowcast and 1.86× in the forecast, because the model's own 90% bands held too little of the truth in backtests (see Evaluation, Against ground truth). Entity bands are not widened.

## Its forecasts

One row per world of the bundle: its forecast at the last as-of date, and the parameter fit that forecast uses. The links show that world's fitted parameters and forecasts.

world | seed | forecast | computed  | time | observations used | fit | fitted | fit time | show

164b4da3  | 2026111701  | e05174ab  | 2026-11-17 at 15:05 UTC | 2.7 min  | 19,958  | 67c7d1ef  | 2026-11-17 at 15:05 UTC |   | parameters · forecasts

443daf3f  | 2026111702  | 9913b093  | 2026-11-17 at 15:57 UTC | 2.3 min  | 19,945  | 7691f907  | 2026-11-17 at 15:49 UTC |   | parameters · forecasts

96dceaa9  | 2026111703  | c288b02e  | 2026-11-17 at 15:57 UTC | 2.2 min  | 19,949  | f1171ddb  | 2026-11-17 at 15:53 UTC |   | parameters · forecasts

e8b09131  | 2026111704  | c2b0f986  | 2026-11-17 at 16:33 UTC | 2.2 min  | 19,947  | 4fbee7bb  | 2026-11-17 at 16:07 UTC |   | parameters · forecasts

e072b86c  | 2026111705  | 95b8660e  | 2026-11-17 at 16:11 UTC | 2.2 min  | 19,942  | 32d5e9e9  | 2026-11-17 at 15:59 UTC |   | parameters · forecasts

## The fit, sector by sector: Forecast e05174ab, world seed 2026111701

Each sector is fitted on its own. The fit works in rounds: first every entity's parameters, holding the sector's numbers fixed, then the sector's numbers, holding the entities fixed. After each round it scores the fit as a whole (the marginal likelihood: how probable the data are under the fitted model, allowing for what remains uncertain), and it keeps the best round, not the last. The small chart traces that score round by round; the dot is the round kept. This table shows one forecast's fit; another row's links above show another forecast.

sector | template | entities | groups  | rounds | round kept | score by round | sector numbers | made (UTC)

Steel  | make to order | 25 | 12  | 10 | 10 |   | 19  | 2026-11-17 14:55

Airlines  | perishable service | 17 | 12  | 10 | 10 |   | 14  | 2026-11-17 14:23

Data centers  | contracted capacity | 20 | 12  | 10 | 10 |   | 15  | 2026-11-17 14:38

Oil and gas  | pipeline producer | 20 | 12  | 17 | 12 |   | 23  | 2026-11-17 15:05

Autos  | make to stock | 19 | 12  | 9 | 7 |   | 19  | 2026-11-17 14:37

Housing  | make to order | 20 | 12  | 10 | 9 |   | 19  | 2026-11-17 14:35

Retail  | distribution | 19 | 12  | 6 | 4 |   | 15  | 2026-11-17 14:27

Semiconductors  | pipeline producer | 18 | 12  | 6 | 4 |   | 23  | 2026-11-17 14:24

Chemicals  | make to stock | 19 | 12  | 4 | 2 |   | 19  | 2026-11-17 14:23

Food  | make to stock | 20 | 12  | 6 | 4 |   | 19  | 2026-11-17 14:26

Hospitals  | perishable service | 20 | 12  | 6 | 4 |   | 14  | 2026-11-17 14:25

Hotels  | perishable service | 20 | 12  | 5 | 3 |   | 14  | 2026-11-17 14:25

Machinery  | make to order | 20 | 12  | 7 | 5 |   | 19  | 2026-11-17 14:29

Wholesale  | distribution | 19 | 12  | 5 | 3 |   | 15  | 2026-11-17 14:33
