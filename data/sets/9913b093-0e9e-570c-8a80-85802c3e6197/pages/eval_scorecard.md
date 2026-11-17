<!-- Evaluation › Scorecard, for forecast 9913b093-0e9e-570c-8a80-85802c3e6197; the page: https://mitdbg.github.io/model-2-nowcasting/eval_scorecard.html?set=9913b093-0e9e-570c-8a80-85802c3e6197; inputs 5d322c86714d5db2 -->

# Scorecard

No ground truth is available for real worlds, so a real bundle has no scorecard; the other Evaluation pages check it without the truth.

How close the forecasts came to the truth, on every world of the bundle. The backtest runs the model at each as-of date using only what was published by then and scores every sector total against the world's truth. Each number below is computed for each world, then averaged over the worlds; the range shows whether a result holds across worlds or comes from one world's random draws. Every sector and quantity counts equally.

- A sector and quantity fails when its error is above 25% (or 25 points), or above one month of output for the quantities scored in months.

## The bundle's scores

measure | bundle mean | range over worlds

Core quantities, nowcast error | 3.2%  | 2.3% to 4.4%

Orders, nowcast error | 9.1%  | 6.7% to 13.5%

Inputs and pipeline, nowcast error | 5.9%  | 3.9% to 9.6%

Quantities near zero, nowcast error | 0.41 mo  | 0.06 mo to 1.19 mo

Core quantities, error 12 months ahead | 4.3%  | 3.0% to 5.6%

Coverage of the 90% bands | 94%  | 92% to 95%

Failures | 7 of 179  | 1 of 179 to 12 of 179

## By sector

Each cell is the sector's error for that group of quantities, averaged over the worlds; "fails in k of N" counts the worlds where it is above the failure line. A failure in most worlds is a tendency of the model; a failure in one world may be that world's luck.

sector | Core quantities | Orders | Inputs and pipeline | Quantities near zero

Airlines | 2.1% | 5.4% | – | 0.00 mo

Autos | 5.4% | 16.5%fails in 2 of 5 | 5.3% | 0.24 mo

Chemicals | 1.6% | 4.0% | 1.1% | 0.04 mo

Data centers | 2.0% | 3.6% | 3.3% | 0.00 mo

Food | 3.0% | 7.0% | 0.9% | 0.04 mo

Hospitals | 1.2% | 3.0% | – | 0.00 mo

Hotels | 1.6% | 5.8% | – | 0.00 mo

Housing | 7.3% | 26.3%fails in 3 of 5 | 3.2% | 2.87 mofails in 2 of 5

Machinery | 6.5% | 7.8% | 5.2% | 0.69 mofails in 1 of 5

Oil and gas | 3.0% | 18.4%fails in 1 of 5 | 12.0%fails in 1 of 5 | 0.14 mo

Retail | 3.6% | 8.1% | – | 0.33 mo

Semiconductors | 1.9% | 8.1% | 8.0% | 0.24 mo

Steel | 1.4% | 3.0% | 3.1% | 0.04 mo

Wholesale | 4.8% | 10.9% | – | 0.06 mo

## By sector and quantity

The same, quantity by quantity. Only cells that fail in at least one world are listed, worst first.

sector | quantity | mean error | 2026111701 | 2026111702 | 2026111703 | 2026111704 | 2026111705

Housing | Overdue orders | 5.65 mofails in 3 of 5 | 9.56 mo | 0.01 mo | 17.05 mo | 0.00 mo | 1.60 mo

Housing | Lead time | 36.2%fails in 3 of 5 | 41.2% | 6.2% | 82.3% | 3.1% | 48.3%

Housing | Order book | 34.7%fails in 3 of 5 | 56.2% | 8.7% | 77.1% | 5.9% | 25.8%

Housing | Phantom orders | 2.79 mofails in 2 of 5 | 2.31 mo | 0.01 mo | 10.87 mo | 0.00 mo | 0.77 mo

Oil and gas | Lead time | 32.0%fails in 2 of 5 | 15.9% | 39.5% | 24.3% | 61.1% | 19.0%

Autos | Lead time | 30.8%fails in 2 of 5 | 50.0% | 13.9% | 63.3% | 7.5% | 19.4%

Wholesale | Lead time | 22.5%fails in 2 of 5 | 16.3% | 17.4% | 32.9% | 35.6% | 10.5%

Machinery | Finished inventory | 1.02 mofails in 1 of 5 | 0.34 mo | 0.10 mo | 4.03 mo | 0.33 mo | 0.32 mo

Machinery | Overdue orders | 0.83 mofails in 1 of 5 | 0.35 mo | 0.10 mo | 3.41 mo | 0.00 mo | 0.29 mo

Oil and gas | Order book | 19.2%fails in 1 of 5 | 8.3% | 20.5% | 11.1% | 47.6% | 8.3%

Oil and gas | Capacity announced | 18.1%fails in 1 of 5 | 7.0% | 20.2% | 10.1% | 44.2% | 9.0%

Autos | Unit cost | 16.8%fails in 1 of 5 | 51.9% | 6.0% | 15.4% | 5.6% | 5.0%

Autos | Order book | 16.7%fails in 1 of 5 | 55.2% | 2.7% | 21.7% | 2.1% | 1.6%

Food | Lead time | 15.9%fails in 1 of 5 | 10.1% | 20.3% | 10.1% | 9.4% | 29.7%

Retail | Finished inventory | 0.63 mofails in 1 of 5 | 0.74 mo | 0.41 mo | 0.25 mo | 0.74 mo | 1.01 mo

Machinery | Price | 15.5%fails in 1 of 5 | 2.8% | 3.2% | 61.4% | 4.0% | 6.4%

Semiconductors | Lead time | 14.8%fails in 1 of 5 | 22.6% | 7.0% | 38.0% | 1.9% | 4.4%

Oil and gas | Capacity under construction | 13.3%fails in 1 of 5 | 1.7% | 3.1% | 5.4% | 50.0% | 6.1%

Housing | Price | 12.7%fails in 1 of 5 | 30.8% | 4.2% | 16.4% | 2.0% | 9.9%

Housing | Capacity | 12.4%fails in 1 of 5 | 41.6% | 1.6% | 5.9% | 3.6% | 9.1%

Autos | Overdue orders | 0.48 mofails in 1 of 5 | 1.88 mo | 0.00 mo | 0.51 mo | 0.00 mo | 0.01 mo

Machinery | Unit cost | 11.1%fails in 1 of 5 | 4.5% | 4.7% | 40.5% | 3.1% | 2.9%

Autos | Price | 11.0%fails in 1 of 5 | 35.2% | 3.5% | 7.9% | 3.1% | 5.4%

Housing | Utilization | 8.6 ptsfails in 1 of 5 | 26.9 pts | 1.0 pts | 5.4 pts | 2.5 pts | 7.0 pts

Machinery | Order book | 8.5%fails in 1 of 5 | 6.2% | 4.1% | 25.6% | 2.3% | 4.4%

Definitions behind the page's (i) marks:
- Typical error of the nowcast for output, capacity, utilization, shipments, price, unit cost and load factor: a percentage error, except utilization and load factor in percentage points; averaged over the sectors and the four as-of dates.
- Typical percentage error of the nowcast for new orders, the order book and lead time, averaged over the sectors and the four as-of dates.
- Typical percentage error of the nowcast for input inventory and for capacity announced, under construction and in use, averaged over the sectors and the four as-of dates.
- Finished inventory, overdue orders, phantom orders and lost demand. These are often zero or close to it: a sector may hold almost no finished goods, or have no orders past their due date. A percentage error means little there (missing a true value of 1 by 2 is a 200% error), so these are scored by the gap between the nowcast and the truth in months of the sector's output: 0.5 means the gap equals half a month of what the sector produces. The value is that gap, averaged over the sectors and the four as-of dates.
- Typical error for the core quantities forecast a year past the last observed month, averaged over the sectors and the four as-of dates.
- Share of nowcast values with the truth inside the published 90% band. About 90% is right; much less means the model is overconfident, much more that its bands are wider than they need to be.
- Sectors and quantities whose nowcast error is above the failure line, out of the 179 combinations of sector and quantity scored. The failure line is an error above 25% for quantities scored as a percentage, above 25 points for utilization and load factor, and above one month of output for the quantities near zero.
