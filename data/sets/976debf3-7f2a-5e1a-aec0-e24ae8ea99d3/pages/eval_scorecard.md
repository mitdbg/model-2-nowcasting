<!-- Evaluation › Scorecard, for forecast 976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; the page: https://mitdbg.github.io/model-2-nowcasting/eval_scorecard.html?set=976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; inputs 96fe75309658b816 -->

# Scorecard

No ground truth is available for real worlds, so a real bundle has no scorecard; the other Evaluation pages check it without the truth.

How close the forecasts came to the truth, on every world of the bundle. The backtest runs the model at each as-of date using only what was published by then and scores every sector total against the world's truth. Each number below is computed for each world, then averaged over the worlds; the range and each world's own value show whether a result holds across worlds or comes from one world's random draws. Every sector and quantity counts equally.

- Errors are the typical distance between the forecast's median and the truth, at the nowcast (the as-of date's own months) unless the row says otherwise, averaged over the four as-of dates. Most quantities are scored as a percentage error; utilization and load factor in percentage points; quantities often near zero (finished inventory, overdue orders, phantom orders, lost demand) in months of the sector's output, since a percentage of a number near zero says little.

- A sector and quantity fails when its error is above 25% (or 25 points), or above one month of output for the quantities scored in months.

## The bundle's scores

measure | bundle mean | range over worlds  | each world | what it measures

Core quantities, nowcast error | 2.7%  | –  | 20261112: 2.7%  | output, capacity, utilization, shipments, price, unit cost, load factor

Orders, nowcast error | 6.1%  | –  | 20261112: 6.1%  | new orders, order book, lead time

Inputs and pipeline, nowcast error | 4.0%  | –  | 20261112: 4.0%  | input inventory, capacity announced, under construction and in use

Quantities near zero, nowcast error | 0.09 mo  | –  | 20261112: 0.09 mo  | finished inventory, overdue orders, phantom orders, lost demand (months of output)

Core quantities, error 12 months ahead | 3.4%  | –  | 20261112: 3.4%  | the core quantities forecast a year past the last observed month

Coverage of the 90% bands | 92%  | –  | 20261112: 92%  | share of nowcast values with the truth inside the published 90% band; about 90% is right, much less is overconfident

Failures | 0 of 179  | –  | 20261112: 0 of 179  | sectors and quantities above the failure line, at the nowcast

## By sector

Each cell is the sector's error for that group of quantities, averaged over the worlds; "fails in k of N" counts the worlds where it is above the failure line. A failure in most worlds is a tendency of the model; a failure in one world may be that world's luck.

sector | Core quantities | Orders | Inputs and pipeline | Quantities near zero

Airlines | 1.7% | 3.7% | – | 0.00 mo

Autos | 1.5% | 5.1% | 4.0% | 0.03 mo

Chemicals | 1.0% | 4.1% | 1.4% | 0.01 mo

Data centers | 2.2% | 2.7% | 3.8% | 0.00 mo

Food | 1.8% | 6.5% | 1.1% | 0.06 mo

Hospitals | 1.4% | 4.2% | – | 0.00 mo

Hotels | 2.9% | 11.8% | – | 0.00 mo

Housing | 4.9% | 2.8% | 2.7% | 0.07 mo

Machinery | 4.3% | 4.7% | 8.8% | 0.08 mo

Oil and gas | 2.0% | 8.9% | 3.9% | 0.06 mo

Retail | 3.7% | 8.0% | – | 0.17 mo

Semiconductors | 1.5% | 10.5% | 5.6% | 0.48 mo

Steel | 1.8% | 2.2% | 2.5% | 0.03 mo

Wholesale | 6.2% | 9.8% | – | 0.04 mo

## By sector and quantity

The same, quantity by quantity. Only cells that fail in at least one world are listed, worst first.

No sector and quantity fails in any world.
