<!-- Model and Forecast › Introduction, for forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_overview.html?set=0c0a014b-d739-5e72-95a6-0b4ec4f3753e -->

# Overview of Forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e

A forecast is made in two steps.

First a parameter fit sets the model's parameters (such as how fast each entity's capacity drifts, or how strongly its prices follow its costs) from the observations known on the as-of date. Then the filter runs every entity forward month by month with those parameters, correcting its hidden states with each month's observations, to the last observed month (history), the months since (nowcast) and a year ahead (forecast).

It runs 100 copies of the world at once, each with its own random shocks and its own draw of the uncertain parameters; their spread gives the 90% band.

## This forecast

Forecast0c0a014b-d739-5e72-95a6-0b4ec4f3753eAs-of date2026-09-30 (uses only what was published by then)World2d7f80cf-c24e-5124-9dcb-12c1a33de767 (synthetic, w35-ppi-seed20261115)Computed2026-11-16 at 02:31 UTC, in 2.4 minutesMonths coveredhistory 2018-10 to 2026-09; nowcast to the as-of date; forecast to 2027-09 (12 months past the last observed month)Copies of the world100, each run with its own shocks and parameter drawObservations used19,948, inside the 8-year window (22,887 older ones fall outside it; 48 could not be tied to any entity or grouping)Band wideningthe published sector bands are widened 2.55× in history, 2.31× in the nowcast and 1.86× in the forecast, because the model's own 90% bands held too little of the truth in backtests (see Evaluation, Against ground truth). Entity bands are not widened.Random seed12345

## The parameter fit it uses

Fit1f5f88f2-eccb-5b05-929e-cbfab7ac5081Computed2026-11-16 at 02:22 UTCData up to2026-09-30 (the fit, too, uses only what was published by the as-of date)What it covers274 entities in 168 groups (sector × size class × region), across 14 sectorsNumbers fitted1,408 for single entities (each with an uncertainty, which the filter's copies draw from) and 247 shared by a whole sector; plus each group's average entityCopies of the world24 while fitting (fewer than the forecast's 100, to save time)

## The fit, sector by sector

Each sector is fitted on its own. The fit works in rounds: first every entity's parameters, holding the sector's numbers fixed, then the sector's numbers, holding the entities fixed. After each round it scores the fit as a whole (the marginal likelihood: how probable the data are under the fitted model, allowing for what remains uncertain), and it keeps the best round, not the last. The small chart traces that score round by round; the dot is the round kept.

sector | template | entities | groups  | rounds | round kept | score by round | sector numbers | made (UTC)

Steel  | make to order | 25 | 12  | 10 | 9 |   | 19  | 2026-11-16 02:20

Airlines  | perishable service | 17 | 12  | 10 | 10 |   | 14  | 2026-11-16 01:49

Data centers  | contracted capacity | 20 | 12  | 10 | 10 |   | 15  | 2026-11-16 01:58

Oil and gas  | pipeline producer | 19 | 12  | 16 | 11 |   | 23  | 2026-11-16 02:22

Autos  | make to stock | 19 | 12  | 7 | 5 |   | 19  | 2026-11-16 01:58

Housing  | make to order | 19 | 12  | 4 | 2 |   | 19  | 2026-11-16 01:48

Retail  | distribution | 19 | 12  | 6 | 4 |   | 15  | 2026-11-16 01:51

Semiconductors  | pipeline producer | 18 | 12  | 8 | 6 |   | 23  | 2026-11-16 01:55

Chemicals  | make to stock | 19 | 12  | 10 | 9 |   | 19  | 2026-11-16 01:54

Food  | make to stock | 20 | 12  | 4 | 2 |   | 19  | 2026-11-16 01:49

Hospitals  | perishable service | 20 | 12  | 7 | 5 |   | 14  | 2026-11-16 01:50

Hotels  | perishable service | 20 | 12  | 5 | 3 |   | 14  | 2026-11-16 01:49

Machinery  | make to order | 20 | 12  | 4 | 2 |   | 19  | 2026-11-16 01:48

Wholesale  | distribution | 19 | 12  | 7 | 5 |   | 15  | 2026-11-16 02:01
