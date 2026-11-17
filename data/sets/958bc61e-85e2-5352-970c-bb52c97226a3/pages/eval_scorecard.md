<!-- Evaluation › Scorecard, for forecast 958bc61e-85e2-5352-970c-bb52c97226a3; the page: https://mitdbg.github.io/model-2-nowcasting/eval_scorecard.html?set=958bc61e-85e2-5352-970c-bb52c97226a3; inputs 393c7f3e40217e33 -->

# Scorecard

No ground truth is available for real worlds, so a real bundle has no scorecard; the other Evaluation pages check it without the truth.

How close the forecasts came to the truth, on every world of the bundle. The backtest runs the model at each as-of date using only what was published by then and scores every sector total against the world's truth. Each number below is computed for each world, then averaged over the worlds; the range shows whether a result holds across worlds or comes from one world's random draws. Every sector and quantity counts equally.

- A sector and quantity fails when its error is above 25% (or 25 points), or above one month of output for the quantities scored in months.

## The bundle's scores

measure | bundle mean | range over worlds

Core quantities, nowcast error | 2.3%  | –

Orders, nowcast error | 6.5%  | –

Inputs and pipeline, nowcast error | 5.2%  | –

Quantities near zero, nowcast error | 0.05 mo  | –

Core quantities, error 12 months ahead | 3.1%  | –

Coverage of the 90% bands | 94%  | –

Failures | 2 of 179  | –

## By sector

Each cell is the sector's error for that group of quantities, averaged over the worlds; "fails in k of N" counts the worlds where it is above the failure line. A failure in most worlds is a tendency of the model; a failure in one world may be that world's luck.

sector | Core quantities | Orders | Inputs and pipeline | Quantities near zero

Airlines | 2.5% | 6.1% | – | 0.00 mo

Autos | 3.1% | 3.9% | 3.3% | 0.02 mo

Chemicals | 2.7% | 3.8% | 0.8% | 0.02 mo

Data centers | 1.8% | 7.0% | 2.6% | 0.00 mo

Food | 2.9% | 5.3% | 0.7% | 0.07 mo

Hospitals | 0.7% | 1.3% | – | 0.00 mo

Hotels | 2.4% | 8.2% | – | 0.00 mo

Housing | 2.5% | 6.7% | 5.3% | 0.06 mo

Machinery | 3.3% | 4.2% | 1.9% | 0.05 mo

Oil and gas | 2.5% | 21.4% | 9.6% | 0.18 mo

Retail | 1.5% | 7.7% | – | 0.11 mo

Semiconductors | 2.3% | 7.4% | 8.2% | 0.07 mo

Steel | 1.2% | 1.5% | 4.6% | 0.03 mo

Wholesale | 3.4% | 6.1% | – | 0.04 mo

## By sector and quantity

The same, quantity by quantity. Only cells that fail in at least one world are listed, worst first.

sector | quantity | mean error | 20261117

Oil and gas | Lead time | 34.2%fails in 1 of 1 | 34.2%

Oil and gas | Order book | 27.8%fails in 1 of 1 | 27.8%

Definitions behind the page's (i) marks:
- Typical error of the nowcast for output, capacity, utilization, shipments, price, unit cost and load factor: a percentage error, except utilization and load factor in percentage points; averaged over the sectors and the four as-of dates.
- Typical percentage error of the nowcast for new orders, the order book and lead time, averaged over the sectors and the four as-of dates.
- Typical percentage error of the nowcast for input inventory and for capacity announced, under construction and in use, averaged over the sectors and the four as-of dates.
- Finished inventory, overdue orders, phantom orders and lost demand. These are often zero or close to it: a sector may hold almost no finished goods, or have no orders past their due date. A percentage error means little there (missing a true value of 1 by 2 is a 200% error), so these are scored by the gap between the nowcast and the truth in months of the sector's output: 0.5 means the gap equals half a month of what the sector produces. The value is that gap, averaged over the sectors and the four as-of dates.
- Typical error for the core quantities forecast a year past the last observed month, averaged over the sectors and the four as-of dates.
- Share of nowcast values with the truth inside the published 90% band. About 90% is right; much less means the model is overconfident, much more that its bands are wider than they need to be.
- Sectors and quantities whose nowcast error is above the failure line, out of the 179 combinations of sector and quantity scored. The failure line is an error above 25% for quantities scored as a percentage, above 25 points for utilization and load factor, and above one month of output for the quantities near zero.
