<!-- Overview › How It Works, for forecast 976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; the page: https://mitdbg.github.io/model-2-nowcasting/howitworks.html?set=976debf3-7f2a-5e1a-aec0-e24ae8ea99d3 -->

# How It Works

Model 2 works in several stages:

- Manage worlds and forecasts: record every world, model version, fit and forecast with an id that never changes.

- Build a world, either a version of the real world or a wholly-synthetic one.

- Run the world forward, both running forecasts and fitting parameters to past data.

- Score the results as best it can. When the world is synthetic, more detailed scores are possible.

- Improve the system: record what the scores show is wrong and the possible fixes, test the most promising fixes, and record what each test found, so that the next version of the model can be run on a world again.

Click a box to see its tables in the Data Model.

## 0 · Manage Worlds and Forecasts

The catalog records every world, every model version, every fit, and every forecast.

## 1 · Build a world

A world is everything the model can see:

- The entity registry lists the entities, their sites, the companies that own or operate them, and the groupings that observations are about. Every fact carries dates, so the set changes over time: an entity can be planned, built, go idle or close, and a company can sell a plant. Each run uses the entities active on its date, as the registry knew them then.

- Observations are published readings about an entity or a grouping, each with the date it became public.

- The sector input delivery arrives once per as-of date with each sector's drivers (demand, price, input cost) and statistics, as ensemble draws.

A synthetic world is generated from known parameters, so it comes with the true values of every hidden state; the model never sees them. A real world is built from public sources and has no such truth. The current synthetic world keeps the same entities throughout, with one change of ownership in 2019.

## 2 · Run the world forward

A run is self-contained and uses only what was known at its date T:

- Gather the registry as recorded by T, the observations published by T, and the input delivery for T.

- Fit the parameters from the history up to T, once a quarter for each sector, starting from the priors and settings in the configuration. Later runs in the same quarter reuse those parameters.

- Filter and forecast with the parameters fixed: re-estimate the months before T (history), estimate month T (nowcast), and project 12 months ahead (forecast). Forecasts follow the sector drivers alone, since no observations exist yet for those months. The ensemble of 100 draws gives every quantity a 90% band.

The next as-of date sees the new observations and starts again, so the history, nowcast and forecast all move as information arrives.

## 3 · Score the results

- In a synthetic world, every output can be scored against the true values: sector totals, entity states and the parameters themselves. Evaluation, Against ground truth shows these scores.

- In the real world, hidden states such as a plant's capacity or order book are never observed, so they cannot be scored. Anything published later can be: a forecast of a sector statistic, a company filing or a census count can be compared with the value once it appears. This scoring is not built yet.

## 4 · Improving the system

- Problems are found in a forecast by an evaluator that sees only the Evaluation pages that need no ground truth (Next Version, Current Problems). Possible fixes for each are written by a reviewer who knows the model but not the world's truth, with odds of success and the time and cost to test (Possible Improvements). Each problem and fix has a lasting id and names the world, fit and forecast it is about.

- Tests: the fixes chosen to be tested make up the testing plan. Each test makes the change and runs the checks its fix describes; Improvement Testing shows every possible fix, whether it was tried, and what each test found, how long it took and what it cost. Each planned test and each result has a lasting id and names its fix, problem, world, fit and forecast.

- Later, the fixes good enough to deploy will be recorded too, and go into the next version of the model, which starts again from stage 1.

## Backtests

A backtest repeats stages 2 and 3 at a series of past dates. Each run sees only what was known on its date, as if it had run then, so its errors show how the model would have done in real time. The scores cover the last 12 months of history, the nowcast, and forecasts 3, 6 and 12 months ahead.
