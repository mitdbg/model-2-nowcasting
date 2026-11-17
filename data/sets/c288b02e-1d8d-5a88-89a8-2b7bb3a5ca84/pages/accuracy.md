<!-- Evaluation › Against ground truth, for forecast c288b02e-1d8d-5a88-89a8-2b7bb3a5ca84; the page: https://mitdbg.github.io/model-2-nowcasting/accuracy.html?set=c288b02e-1d8d-5a88-89a8-2b7bb3a5ca84; inputs 5ce3dabcb3a83479 -->

World shown  5 of 5 worlds in this bundle

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Against ground truth

No ground truth is available for real worlds.

The backtest runs Model 2 at each as-of date on the synthetic world, using only observations published by then and re-estimating each time, and scores every sector total against the truth. The backtest's runs widen their bands by 2.55× (history), 2.31× (nowcast), 1.86× (forecast), as the site's run does. Backtest workspace: /Users/michjc/lincoln/work/2026/10/m2-site-ws/w36-margin--5-worlds--seeds-2026111701-2026111702-2026111703-2026111704-2026111705/seed2026111703. As-of dates: 2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30.

- Error of the member median, in one of three units: for most quantities, the absolute log error, shown as a percentage; for utilization and load factor, the absolute difference in percentage points; for overdue orders, phantom orders and lost demand, which are often near zero, the absolute difference in months of the sector's output ("mo"). None where the truth or the median is zero.

- Mean error by horizon averages these over all sectors and quantities.

- Coverage: share of months with the truth inside the 90% band, for the bands as published (widened, see Band widening below) and for the model's own bands before widening ("unwidened"). Green: consistent with 90% or above given the number of values scored (within two binomial standard errors); amber: within four; red: further below. Coverage near 100% is not marked: it means the bands are wide, not wrong. Cells with fewer than 8 values are not colored.

## Errors by horizon

horizon | mean error | coverage, published | coverage, unwidened | values

history (last 12 months) | 0.254 | 93% | 73% | 7,876

nowcast | 0.279 | 94% | 75% | 716

forecast, 3 months ahead | 0.289 | 92% | 79% | 716

forecast, 6 months ahead | 0.299 | 93% | 82% | 716

forecast, 12 months ahead | 0.319 | 94% | 86% | 716

## Errors by sector and quantity

Error at each horizon, then coverage pooled over the horizons, since each horizon has only one value per as-of date: history (the last 12 months before each as-of date) and ahead (the nowcast and the 3-, 6- and 12-month forecasts). Coverage cells show published bands, then unwidened in gray; most rest on 44 values (history) and 16 (ahead), and hovering a cell gives its count.

sector | quantity | history (last 12 months) | nowcast | forecast, 3 months ahead | forecast, 6 months ahead | forecast, 12 months ahead | coverage, history | coverage, ahead

Oil and gas | Order book | 8.6% | 11.1% | 11.8% | 13.4% | 12.4% | 100% 73% | 100% 81%

Oil and gas | Overdue orders | 0.09 mo | 0.10 mo | 0.12 mo | 0.14 mo | 0.12 mo | 100% 57% | 100% 81%

Oil and gas | Capacity | 1.2% | 0.4% | 0.7% | 1.6% | 3.4% | 100% 80% | 94% 88%

Oil and gas | Capacity announced | 8.5% | 10.1% | 14.4% | 10.5% | 16.6% | 100% 82% | 100% 88%

Oil and gas | Capacity under construction | 12.2% | 5.4% | 8.2% | 9.5% | 12.4% | 89% 84% | 100% 88%

Oil and gas | Finished inventory | 0.15 mo | 0.18 mo | 0.18 mo | 0.13 mo | 0.06 mo | 100% 50% | 100% 81%

Oil and gas | Input inventory | 5.4% | 4.2% | 3.6% | 5.9% | 7.6% | 100% 100% | 100% 100%

Oil and gas | Lead time | 15.5% | 24.3% | 26.1% | 27.9% | 23.3% | 100% 95% | 100% 94%

Oil and gas | New orders | 2.9% | 4.1% | 5.7% | 4.9% | 4.8% | 98% 75% | 100% 94%

Oil and gas | Output | 1.8% | 1.5% | 4.7% | 5.9% | 5.1% | 91% 80% | 100% 75%

Oil and gas | Phantom orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.02 mo | 0.01 mo | 100% 77% | 100% 75%

Oil and gas | Price | 7.2% | 6.9% | 5.6% | 6.0% | 7.9% | 100% 80% | 100% 100%

Oil and gas | Shipments | 2.5% | 3.5% | 2.9% | 4.5% | 5.6% | 100% 59% | 100% 75%

Oil and gas | Unit cost | 5.6% | 5.7% | 5.8% | 6.1% | 5.7% | 75% 41% | 75% 50%

Oil and gas | Utilization | 0.5 pt | 1.4 pt | 3.8 pt | 4.1 pt | 2.1 pt | 100% 98% | 100% 75%

Housing | Order book | 74.3% | 77.1% | 76.8% | 77.0% | 78.5% | 100% 50% | 94% 50%

Housing | Overdue orders | 15.39 mo | 17.05 mo | 17.77 mo | 18.57 mo | 20.22 mo | 100% 50% | 100% 50%

Housing | Capacity | 6.5% | 5.9% | 6.2% | 6.5% | 6.7% | 89% 50% | 81% 50%

Housing | Finished inventory | 0.08 mo | 0.09 mo | 0.10 mo | 0.10 mo | 0.11 mo | 100% 75% | 100% 75%

Housing | Input inventory | 2.9% | 2.6% | 1.7% | 2.2% | 1.7% | 100% 100% | 100% 100%

Housing | Lead time | 81.3% | 82.3% | 81.7% | 81.3% | 81.9% | 100% 50% | 100% 50%

Housing | New orders | 19.5% | 18.3% | 19.6% | 19.9% | 22.4% | 100% 93% | 81% 81%

Housing | Output | 0.9% | 0.8% | 0.7% | 0.2% | 0.4% | 100% 100% | 100% 100%

Housing | Phantom orders | 9.99 mo | 10.87 mo | 11.20 mo | 11.50 mo | 12.43 mo | 100% 50% | 100% 50%

Housing | Price | 17.0% | 16.4% | 16.3% | 17.2% | 18.8% | 100% 75% | 100% 81%

Housing | Shipments | 0.6% | 0.5% | 0.7% | 0.4% | 0.5% | 100% 100% | 100% 100%

Housing | Unit cost | 12.9% | 13.0% | 12.9% | 12.8% | 12.9% | 25% 0% | 50% 6%

Housing | Utilization | 5.3 pt | 5.4 pt | 5.5 pt | 5.8 pt | 6.3 pt | 98% 48% | 100% 63%

Food | Order book | 1.1% | 1.6% | 1.4% | 0.3% | 1.7% | 100% 100% | 100% 100%

Food | Overdue orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 100% 100% | 100% 100%

Food | Capacity | 0.2% | 0.3% | 0.5% | 0.6% | 0.7% | 100% 100% | 100% 75%

Food | Finished inventory | 0.04 mo | 0.05 mo | 0.05 mo | 0.05 mo | 0.03 mo | 100% 100% | 100% 100%

Food | Input inventory | 0.5% | 0.5% | 0.7% | 1.1% | 2.0% | 100% 100% | 100% 100%

Food | Lead time | 10.2% | 10.1% | 7.8% | 8.4% | 10.7% | 100% 100% | 100% 100%

Food | New orders | 0.6% | 1.0% | 1.3% | 2.3% | 1.4% | 100% 100% | 100% 100%

Food | Output | 0.3% | 0.3% | 0.9% | 1.7% | 2.0% | 100% 100% | 100% 100%

Food | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 77% | 100% 88%

Food | Price | 5.4% | 4.8% | 5.0% | 5.1% | 5.3% | 100% 98% | 100% 100%

Food | Shipments | 0.6% | 0.5% | 1.6% | 1.1% | 2.0% | 100% 100% | 100% 100%

Food | Unit cost | 3.9% | 3.5% | 4.1% | 4.6% | 4.1% | 75% 50% | 88% 69%

Food | Utilization | 0.2 pt | 0.4 pt | 1.0 pt | 1.3 pt | 1.9 pt | 100% 100% | 100% 100%

Chemicals | Order book | 1.7% | 0.7% | 2.6% | 1.8% | 5.4% | 100% 100% | 100% 100%

Chemicals | Overdue orders | 0.02 mo | 0.02 mo | 0.02 mo | 0.02 mo | 0.01 mo | 100% 100% | 100% 100%

Chemicals | Capacity | 1.2% | 1.0% | 1.1% | 1.4% | 1.7% | 100% 43% | 100% 63%

Chemicals | Finished inventory | 0.17 mo | 0.18 mo | 0.18 mo | 0.19 mo | 0.20 mo | 100% 100% | 100% 100%

Chemicals | Input inventory | 0.9% | 1.1% | 0.5% | 0.9% | 1.8% | 100% 100% | 100% 100%

Chemicals | Lead time | 10.1% | 11.4% | 16.4% | 20.3% | 25.2% | 100% 100% | 100% 100%

Chemicals | New orders | 1.4% | 0.8% | 2.6% | 2.1% | 5.1% | 100% 98% | 100% 100%

Chemicals | Output | 0.7% | 0.4% | 1.2% | 1.6% | 2.3% | 100% 93% | 100% 100%

Chemicals | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 0.01 mo | 100% 100% | 100% 100%

Chemicals | Price | 3.4% | 4.5% | 5.2% | 5.9% | 8.5% | 100% 86% | 100% 94%

Chemicals | Shipments | 1.0% | 1.2% | 1.3% | 2.1% | 3.3% | 100% 98% | 100% 100%

Chemicals | Unit cost | 5.3% | 5.9% | 6.2% | 5.8% | 6.6% | 75% 50% | 81% 69%

Chemicals | Utilization | 0.5 pt | 0.7 pt | 1.4 pt | 1.8 pt | 2.8 pt | 100% 82% | 100% 100%

Steel | Order book | 3.0% | 3.7% | 3.6% | 4.7% | 5.0% | 98% 61% | 100% 81%

Steel | Overdue orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 100% 82% | 100% 81%

Steel | Capacity | 0.5% | 0.9% | 1.1% | 1.4% | 2.3% | 100% 100% | 94% 75%

Steel | Finished inventory | 0.06 mo | 0.10 mo | 0.08 mo | 0.04 mo | 0.07 mo | 100% 100% | 100% 94%

Steel | Input inventory | 2.3% | 2.2% | 2.6% | 4.3% | 1.6% | 100% 100% | 100% 100%

Steel | Lead time | 3.5% | 4.6% | 4.0% | 4.5% | 6.2% | 100% 80% | 100% 81%

Steel | New orders | 1.8% | 0.8% | 3.2% | 2.7% | 1.2% | 100% 91% | 100% 100%

Steel | Output | 0.5% | 0.4% | 1.5% | 1.2% | 1.6% | 100% 100% | 100% 100%

Steel | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 98% 59% | 100% 81%

Steel | Price | 2.0% | 2.0% | 3.0% | 2.8% | 2.2% | 100% 91% | 100% 100%

Steel | Shipments | 1.0% | 1.7% | 1.2% | 1.4% | 3.2% | 100% 95% | 100% 88%

Steel | Unit cost | 3.9% | 3.9% | 4.3% | 4.0% | 4.5% | 100% 50% | 100% 75%

Steel | Utilization | 0.2 pt | 0.3 pt | 1.6 pt | 1.7 pt | 2.0 pt | 100% 100% | 100% 94%

Machinery | Order book | 20.6% | 25.6% | 25.7% | 27.9% | 32.6% | 75% 27% | 75% 25%

Machinery | Overdue orders | 2.58 mo | 3.41 mo | 3.44 mo | 3.57 mo | 3.95 mo | 30% 25% | 25% 25%

Machinery | Capacity | 5.9% | 5.5% | 5.5% | 5.9% | 5.6% | 50% 34% | 50% 50%

Machinery | Finished inventory | 3.80 mo | 4.03 mo | 3.83 mo | 3.53 mo | 3.08 mo | 57% 48% | 44% 50%

Machinery | Input inventory | 7.7% | 8.1% | 9.8% | 15.9% | 21.7% | 100% 100% | 100% 94%

Machinery | Lead time | 19.2% | 22.9% | 30.5% | 39.4% | 50.8% | 91% 70% | 75% 75%

Machinery | New orders | 33.3% | 16.3% | 15.2% | 14.8% | 17.0% | 86% 66% | 75% 75%

Machinery | Output | 10.0% | 11.0% | 25.9% | 29.2% | 27.2% | 77% 48% | 81% 50%

Machinery | Phantom orders | 0.75 mo | 0.87 mo | 0.89 mo | 0.87 mo | 0.82 mo | 68% 36% | 69% 38%

Machinery | Price | 66.9% | 61.4% | 55.6% | 55.8% | 58.4% | 100% 25% | 50% 63%

Machinery | Shipments | 16.6% | 15.1% | 14.5% | 14.4% | 14.3% | 50% 50% | 56% 50%

Machinery | Unit cost | 39.9% | 40.5% | 40.7% | 41.0% | 41.4% | 0% 0% | 0% 0%

Machinery | Utilization | 3.3 pt | 4.3 pt | 13.0 pt | 14.7 pt | 13.5 pt | 98% 57% | 94% 50%

Semiconductors | Order book | 7.3% | 9.7% | 10.4% | 11.3% | 12.0% | 100% 100% | 100% 100%

Semiconductors | Overdue orders | 0.55 mo | 0.66 mo | 0.80 mo | 0.85 mo | 1.04 mo | 100% 100% | 100% 100%

Semiconductors | Capacity | 0.5% | 0.4% | 0.7% | 1.2% | 2.1% | 100% 100% | 100% 100%

Semiconductors | Capacity announced | 21.0% | 20.4% | 20.8% | 32.0% | 24.6% | 100% 100% | 100% 100%

Semiconductors | Capacity under construction | 6.0% | 9.7% | 13.4% | 14.9% | 20.9% | 100% 100% | 100% 100%

Semiconductors | Finished inventory | 0.06 mo | 0.05 mo | 0.08 mo | 0.11 mo | 0.13 mo | 100% 100% | 100% 100%

Semiconductors | Input inventory | 3.8% | 3.4% | 3.8% | 3.1% | 3.5% | 100% 100% | 100% 100%

Semiconductors | Lead time | 35.1% | 38.0% | 35.7% | 35.3% | 34.5% | 100% 100% | 100% 100%

Semiconductors | New orders | 12.6% | 4.3% | 4.9% | 5.7% | 6.6% | 100% 98% | 100% 100%

Semiconductors | Output | 0.5% | 0.3% | 0.5% | 1.4% | 3.0% | 100% 100% | 100% 100%

Semiconductors | Phantom orders | 0.38 mo | 0.60 mo | 0.63 mo | 0.63 mo | 0.69 mo | 100% 100% | 100% 100%

Semiconductors | Price | 8.6% | 11.5% | 12.5% | 13.3% | 16.3% | 100% 100% | 100% 100%

Semiconductors | Shipments | 1.4% | 1.1% | 1.7% | 1.9% | 3.4% | 100% 100% | 100% 100%

Semiconductors | Unit cost | 5.5% | 5.2% | 5.0% | 4.9% | 4.5% | 77% 0% | 100% 13%

Semiconductors | Utilization | 0.3 pt | 0.3 pt | 0.7 pt | 0.9 pt | 1.0 pt | 100% 100% | 100% 100%

Autos | Order book | 20.4% | 21.7% | 20.3% | 19.4% | 16.5% | 100% 75% | 100% 81%

Autos | Overdue orders | 0.45 mo | 0.51 mo | 0.52 mo | 0.50 mo | 0.45 mo | 100% 75% | 100% 75%

Autos | Capacity | 1.0% | 0.9% | 1.0% | 1.3% | 2.0% | 100% 66% | 100% 69%

Autos | Finished inventory | 0.08 mo | 0.10 mo | 0.09 mo | 0.10 mo | 0.09 mo | 100% 100% | 100% 100%

Autos | Input inventory | 3.2% | 3.1% | 3.2% | 3.5% | 2.9% | 100% 100% | 100% 100%

Autos | Lead time | 62.1% | 63.3% | 56.4% | 55.0% | 52.0% | 100% 100% | 100% 100%

Autos | New orders | 1.5% | 1.9% | 2.5% | 0.9% | 3.1% | 100% 98% | 100% 100%

Autos | Output | 0.9% | 1.0% | 1.2% | 1.1% | 2.6% | 100% 82% | 100% 100%

Autos | Phantom orders | 0.16 mo | 0.17 mo | 0.16 mo | 0.16 mo | 0.14 mo | 100% 93% | 100% 100%

Autos | Price | 7.9% | 7.9% | 8.6% | 8.2% | 9.9% | 100% 100% | 100% 100%

Autos | Shipments | 1.4% | 0.9% | 0.9% | 1.8% | 2.1% | 100% 89% | 100% 100%

Autos | Unit cost | 15.2% | 15.4% | 15.3% | 15.4% | 15.5% | 0% 0% | 19% 0%

Autos | Utilization | 0.3 pt | 0.2 pt | 0.8 pt | 1.3 pt | 2.1 pt | 100% 100% | 100% 100%

Wholesale | Order book | 5.8% | 5.9% | 4.8% | 6.8% | 5.8% | 86% 34% | 100% 88%

Wholesale | Capacity | 13.6% | 14.1% | 14.4% | 14.0% | 14.2% | 27% 25% | 25% 25%

Wholesale | Finished inventory | 0.05 mo | 0.06 mo | 0.10 mo | 0.15 mo | 0.23 mo | 100% 86% | 100% 88%

Wholesale | Lead time | 30.8% | 32.9% | 36.4% | 37.1% | 38.3% | 100% 75% | 100% 75%

Wholesale | Load factor | 1.8 pt | 2.2 pt | 1.6 pt | 1.9 pt | 2.4 pt | 100% 80% | 100% 94%

Wholesale | Lost demand | 0.01 mo | 0.02 mo | 0.01 mo | 0.02 mo | 0.02 mo | 86% 55% | 100% 69%

Wholesale | New orders | 6.5% | 5.4% | 5.3% | 6.5% | 6.0% | 80% 34% | 100% 81%

Wholesale | Output | 6.4% | 7.0% | 7.5% | 6.5% | 6.3% | 61% 34% | 63% 31%

Wholesale | Price | 5.3% | 5.2% | 5.5% | 5.8% | 5.8% | 75% 36% | 88% 63%

Wholesale | Shipments | 6.4% | 6.8% | 7.5% | 6.4% | 4.8% | 70% 32% | 88% 56%

Wholesale | Unit cost | 3.1% | 3.2% | 3.5% | 3.8% | 3.3% | 75% 75% | 94% 81%

Wholesale | Utilization | 6.6 pt | 6.7 pt | 7.0 pt | 7.2 pt | 7.0 pt | 95% 25% | 81% 38%

Retail | Order book | 3.4% | 4.8% | 5.2% | 6.9% | 5.1% | 100% 95% | 100% 100%

Retail | Capacity | 3.9% | 5.1% | 5.2% | 5.2% | 4.8% | 82% 41% | 63% 50%

Retail | Finished inventory | 0.25 mo | 0.25 mo | 0.34 mo | 0.44 mo | 0.54 mo | 100% 73% | 100% 38%

Retail | Lead time | 12.4% | 15.0% | 12.2% | 14.0% | 21.0% | 100% 100% | 100% 94%

Retail | Load factor | 2.7 pt | 3.2 pt | 6.9 pt | 4.6 pt | 3.1 pt | 100% 98% | 94% 56%

Retail | Lost demand | 0.01 mo | 0.01 mo | 0.02 mo | 0.01 mo | 0.02 mo | 100% 89% | 100% 100%

Retail | New orders | 4.8% | 5.9% | 6.9% | 8.7% | 7.9% | 100% 86% | 100% 81%

Retail | Output | 3.6% | 4.3% | 5.1% | 5.6% | 6.4% | 91% 36% | 94% 38%

Retail | Price | 0.6% | 0.4% | 1.0% | 1.1% | 1.7% | 100% 100% | 100% 100%

Retail | Shipments | 4.1% | 5.5% | 12.2% | 9.4% | 9.4% | 100% 84% | 81% 44%

Retail | Unit cost | 2.1% | 1.9% | 1.4% | 1.9% | 2.5% | 100% 89% | 100% 100%

Retail | Utilization | 1.1 pt | 1.6 pt | 2.2 pt | 1.9 pt | 2.6 pt | 100% 84% | 100% 88%

Airlines | Order book | 2.3% | 2.3% | 2.2% | 1.6% | 2.3% | 100% 95% | 100% 100%

Airlines | Capacity | 4.2% | 4.3% | 4.0% | 4.1% | 3.6% | 98% 34% | 94% 56%

Airlines | Lead time | 7.5% | 7.4% | 5.5% | 8.5% | 6.7% | 100% 100% | 100% 100%

Airlines | Load factor | 1.0 pt | 1.7 pt | 0.9 pt | 2.0 pt | 2.4 pt | 100% 89% | 100% 94%

Airlines | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Airlines | New orders | 2.7% | 2.1% | 3.7% | 2.8% | 2.8% | 100% 93% | 100% 100%

Airlines | Output | 1.0% | 0.5% | 0.8% | 1.6% | 2.9% | 98% 73% | 100% 100%

Airlines | Price | 0.5% | 1.0% | 0.9% | 1.5% | 1.0% | 100% 100% | 100% 100%

Airlines | Shipments | 1.3% | 2.0% | 1.5% | 1.4% | 2.1% | 100% 89% | 100% 100%

Airlines | Unit cost | 1.3% | 1.0% | 1.1% | 1.4% | 2.0% | 100% 100% | 100% 100%

Airlines | Utilization | 2.8 pt | 3.1 pt | 2.4 pt | 3.3 pt | 3.0 pt | 100% 36% | 100% 56%

Data centers | Order book | 2.3% | 2.4% | 2.4% | 2.7% | 3.1% | 100% 98% | 100% 100%

Data centers | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Capacity | 2.0% | 1.9% | 2.0% | 2.1% | 1.9% | 75% 0% | 63% 0%

Data centers | Capacity announced | 6.3% | 7.8% | 7.7% | 3.4% | 2.7% | 100% 73% | 100% 94%

Data centers | Capacity in use | 1.8% | 1.8% | 1.7% | 1.7% | 1.6% | 50% 16% | 56% 31%

Data centers | Capacity under construction | 3.5% | 3.7% | 3.6% | 3.5% | 3.1% | 93% 18% | 81% 38%

Data centers | Lead time | 1.6% | 1.6% | 1.6% | 1.6% | 1.6% | 100% 100% | 100% 100%

Data centers | New orders | 2.7% | 1.3% | 0.6% | 2.2% | 3.8% | 100% 89% | 100% 100%

Data centers | Output | 1.8% | 1.8% | 1.7% | 1.7% | 1.6% | 50% 16% | 56% 31%

Data centers | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Price | 7.3% | 7.5% | 8.0% | 8.6% | 9.1% | 100% 32% | 100% 50%

Data centers | Shipments | 1.5% | 1.9% | 1.7% | 1.6% | 1.7% | 100% 86% | 100% 88%

Data centers | Unit cost | 4.4% | 4.5% | 5.0% | 5.5% | 5.9% | 100% 95% | 100% 100%

Data centers | Utilization | 0.3 pt | 0.3 pt | 0.4 pt | 0.5 pt | 0.5 pt | 100% 100% | 100% 100%

Hospitals | Order book | 1.9% | 2.3% | 1.9% | 2.7% | 1.9% | 100% 55% | 100% 94%

Hospitals | Capacity | 3.2% | 3.3% | 3.8% | 4.2% | 4.6% | 100% 0% | 56% 0%

Hospitals | Lead time | 7.8% | 8.8% | 9.4% | 10.4% | 10.7% | 100% 100% | 100% 100%

Hospitals | Load factor | 1.9 pt | 1.9 pt | 2.0 pt | 3.1 pt | 2.5 pt | 95% 50% | 100% 88%

Hospitals | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Hospitals | New orders | 1.9% | 2.2% | 1.8% | 2.7% | 2.1% | 100% 57% | 100% 100%

Hospitals | Output | 0.8% | 0.8% | 1.3% | 1.7% | 1.8% | 100% 50% | 100% 75%

Hospitals | Price | 0.2% | 0.4% | 0.5% | 0.3% | 0.7% | 100% 100% | 100% 100%

Hospitals | Shipments | 1.8% | 1.6% | 2.0% | 2.4% | 1.7% | 98% 55% | 100% 88%

Hospitals | Unit cost | 0.8% | 0.6% | 0.8% | 0.9% | 1.2% | 100% 77% | 100% 100%

Hospitals | Utilization | 2.0 pt | 2.2 pt | 2.2 pt | 2.3 pt | 2.5 pt | 100% 2% | 100% 56%

Hotels | Order book | 3.2% | 3.8% | 4.3% | 3.4% | 4.1% | 100% 18% | 100% 88%

Hotels | Capacity | 1.6% | 1.6% | 1.7% | 2.0% | 2.4% | 75% 75% | 75% 75%

Hotels | Lead time | 6.5% | 7.1% | 6.6% | 7.2% | 6.8% | 100% 100% | 100% 100%

Hotels | Load factor | 1.2 pt | 1.2 pt | 1.2 pt | 1.7 pt | 2.2 pt | 100% 70% | 100% 88%

Hotels | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Hotels | New orders | 1.8% | 1.5% | 1.1% | 1.7% | 1.0% | 100% 61% | 100% 100%

Hotels | Output | 1.4% | 1.5% | 1.8% | 2.0% | 2.5% | 75% 11% | 75% 63%

Hotels | Price | 0.6% | 0.6% | 0.7% | 1.0% | 1.4% | 100% 80% | 100% 100%

Hotels | Shipments | 1.8% | 1.3% | 0.7% | 1.2% | 2.1% | 100% 59% | 100% 94%

Hotels | Unit cost | 1.2% | 1.3% | 0.8% | 1.1% | 1.1% | 100% 57% | 100% 100%

Hotels | Utilization | 1.0 pt | 1.0 pt | 0.9 pt | 0.9 pt | 0.9 pt | 100% 50% | 100% 81%

## Band widening

The members omit some uncertainty: weakly identified group means and sector parameters, and model error. The site's run therefore widens each published sector band around its median by a factor per status (PLAN decision 17). This run uses 2.55× history, 2.31× nowcast, 1.86× forecast. Recorded reason: The model's own 90% bands held 68% of the truth (all sector variables) in the 2023-2026 backtest on this world (sector fits on Modal, decision 31); factors from scripts/calibrate_bands.py (PLAN decision 17); held-out dates 0.886-0.909.

### Factors from the backtest

Fitted to the model's own bands in this backtest: what this world would call for now.

coverage, unwidened78% factor, forecast1.54×factor, nowcast1.93×factor, history1.97×

### Coverage on held-out dates

Each row: coverage at one as-of date, with factors fitted to the other dates.

2023-09-3092%2024-09-3093%2025-09-3089%2026-09-3087%

### Factors by sector

Oil and gasforecast1.25×Oil and gasnowcast1.45×Oil and gashistory1.63×Housingforecast2.12×Housingnowcast2.68×Housinghistory2.74×Foodforecast0.507×Foodnowcast0.587×Foodhistory0.807×Chemicalsforecast0.619×Chemicalsnowcast0.929×Chemicalshistory1.08×Steelforecast0.847×Steelnowcast1.15×Steelhistory1.25×Machineryforecast5.89×Machinerynowcast6.81×Machineryhistory6.91×Semiconductorsforecast0.542×Semiconductorsnowcast0.526×Semiconductorshistory0.676×Autosforecast1.44×Autosnowcast1.37×Autoshistory1.86×Wholesaleforecast2.05×Wholesalenowcast3.06×Wholesalehistory3.58×Retailforecast1.46×Retailnowcast1.67×Retailhistory1.32×Airlinesforecast0.846×Airlinesnowcast1.14×Airlineshistory1.38×Data centersforecast1.95×Data centersnowcast2.73×Data centershistory2.94×Hospitalsforecast1.38×Hospitalsnowcast1.74×Hospitalshistory1.83×Hotelsforecast0.896×Hotelsnowcast1.33×Hotelshistory1.73×

## Parameter recovery

Each row compares fitted with true parameters of the tracked entities in this run's fit, in prior sds.

- Bias: mean of fit minus truth.

- RMSE: root mean square of fit minus truth.

- Correlation: correlation of fit and truth across entities, which shows whether the fit recovers differences between entities.

sector | parameter | definition | bias (prior sd) | RMSE (prior sd) | correlation

Oil and gas | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.07 | 0.47  | -0.17

Oil and gas | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.24 | 0.59  | 0.30

Oil and gas | w w | pass-through of input cost to unit cost (L4)  | -0.54 | 0.94  | -0.05

Oil and gas | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.58 | 0.86  | 0.59

Oil and gas | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.43 | 0.47  | 0.52

Oil and gas | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.22 | 0.66  | 0.20

Oil and gas | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.22 | 0.39  | 0.44

Oil and gas | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | 0.09 | 0.36  | 0.38

Oil and gas | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.33 | 0.50  | 0.50

Oil and gas | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.12 | 0.45  | 0.49

Oil and gas | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.06 | 0.07  | 1.00

Oil and gas | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.18 | 0.40  | 0.77

Oil and gas | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.27 | 0.54  | 0.52

Housing | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.20 | 0.62  | 0.68

Housing | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.36 | 0.50  | 0.66

Housing | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.06 | 0.30  | 0.55

Housing | w w | pass-through of input cost to unit cost (L4)  | 0.05 | 0.30  | 0.47

Housing | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.04 | 0.52  | -0.33

Housing | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.34 | 0.72  | 0.23

Housing | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.19 | 0.75  | -0.85

Housing | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.05 | 0.34  | 0.30

Housing | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.28 | 0.41  | 0.88

Housing | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 1.04 | 1.60  | 0.69

Housing | m_0 m0 | Starting markup: markup in the first month, log scale.  | -1.04 | 1.97  | 0.12

Food | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.05 | 0.36  | 0.52

Food | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.01 | 0.35  | 0.59

Food | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.22 | 0.42  | 0.66

Food | w w | pass-through of input cost to unit cost (L4)  | -0.04 | 0.25  | 0.52

Food | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.07 | 0.39  | 0.00

Food | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.10 | 0.16  | 0.84

Food | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.21 | 0.81  | -0.33

Food | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.16 | 0.44  | 0.23

Food | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.00 | 0.03  | 1.00

Food | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.22 | 0.41  | -0.12

Food | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.07  | 0.99

Food | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.15 | 0.53  | 0.38

Food | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.22 | 0.60  | 0.11

Chemicals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.69 | 1.02  | 0.18

Chemicals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.21 | 0.35  | 0.68

Chemicals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.17 | 0.68  | 0.15

Chemicals | w w | pass-through of input cost to unit cost (L4)  | -0.07 | 0.21  | -0.14

Chemicals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.79 | 0.85  | 0.52

Chemicals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.10 | 0.18  | 0.67

Chemicals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.49 | 0.60  | 0.52

Chemicals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.06 | 0.31  | -0.30

Chemicals | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.01 | 0.02  | 1.00

Chemicals | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.01 | 0.25  | 0.66

Chemicals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.03  | 1.00

Chemicals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.45 | 0.61  | 0.80

Chemicals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.04 | 1.10  | -0.13

Steel | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.03 | 0.86  | 0.23

Steel | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.28 | 0.47  | 0.77

Steel | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.82 | 0.92  | 0.35

Steel | w w | pass-through of input cost to unit cost (L4)  | 0.04 | 0.36  | -0.03

Steel | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.05 | 0.34  | 0.10

Steel | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.01 | 0.24  | 0.25

Steel | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.08 | 0.56  | -0.46

Steel | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.22 | 0.41  | 0.19

Steel | export share export_share | Export share: share of shipments exported.  | -0.05 | 0.36  | 0.37

Steel | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.14 | 0.39  | 0.50

Steel | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.07 | 0.42  | -0.26

Steel | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.11 | 0.30  | 0.04

Steel | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.01 | 0.34  | 0.64

Steel | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.02 | 0.05  | 1.00

Steel | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.04 | 0.25  | 0.22

Steel | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.11 | 0.39  | 0.06

Machinery | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.23 | 0.39  | -0.15

Machinery | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.06 | 0.38  | 0.55

Machinery | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.24 | 0.32  | 0.47

Machinery | w w | pass-through of input cost to unit cost (L4)  | -0.06 | 0.21  | 0.63

Machinery | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.14 | 0.31  | 0.06

Machinery | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.04 | 0.15  | 0.53

Machinery | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.31 | 0.55  | 0.03

Machinery | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.07 | 0.30  | -0.68

Machinery | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.16 | 0.53  | 0.55

Machinery | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.09 | 0.21  | -0.05

Machinery | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.00 | 0.30  | -0.57

Machinery | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.24 | 0.71  | -0.53

Machinery | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.06 | 0.24  | 0.98

Machinery | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 1.75 | 1.92  | -0.53

Machinery | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.54 | 1.72  | 0.64

Semiconductors | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.02 | 0.62  | –

Semiconductors | w w | pass-through of input cost to unit cost (L4)  | 0.05 | 0.16  | –

Semiconductors | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.34 | 0.45  | –

Semiconductors | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.22 | 0.40  | –

Semiconductors | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -0.22 | 0.38  | –

Semiconductors | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.08 | 0.20  | 0.93

Semiconductors | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.01 | 0.02  | 1.00

Semiconductors | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.17 | 0.28  | –

Semiconductors | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.18 | 0.61  | –

Autos | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.46 | 0.79  | 0.26

Autos | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.19 | 0.53  | -0.26

Autos | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.11 | 0.64  | 0.11

Autos | w w | pass-through of input cost to unit cost (L4)  | 0.18 | 0.46  | 0.23

Autos | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.54 | 0.73  | 0.15

Autos | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.15 | 0.24  | 0.45

Autos | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.03 | 0.31  | 0.70

Autos | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.32 | 0.78  | -0.21

Autos | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.02 | 0.16  | 0.96

Autos | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.01 | 0.76  | 0.51

Autos | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.18 | 0.85  | -0.16

Autos | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.05 | 0.13  | 0.97

Autos | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.39 | 0.60  | -0.12

Autos | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.53 | 0.99  | -0.43

Wholesale | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -1.26 | 1.67  | 0.29

Wholesale | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.21 | 0.34  | 0.63

Wholesale | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.86 | 1.17  | -0.76

Wholesale | w w | pass-through of input cost to unit cost (L4)  | -0.52 | 0.64  | -0.46

Wholesale | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.35 | 0.40  | 0.14

Wholesale | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.30 | 0.57  | -0.32

Wholesale | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.59 | 0.84  | -0.82

Wholesale | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.03 | 0.46  | 0.13

Wholesale | export share export_share | Export share: share of shipments exported.  | -0.22 | 0.33  | 0.86

Wholesale | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.08 | 0.38  | 0.87

Wholesale | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.03 | 0.76  | -0.24

Wholesale | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.01 | 0.30  | 0.30

Retail | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.13 | 0.88  | 0.68

Retail | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.08 | 0.42  | 0.78

Retail | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.43 | 0.64  | 0.25

Retail | w w | pass-through of input cost to unit cost (L4)  | 0.37 | 0.55  | 0.40

Retail | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.19 | 0.32  | 0.13

Retail | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.08 | 0.24  | 0.23

Retail | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.03 | 0.28  | 0.83

Retail | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.09 | 0.24  | 0.61

Retail | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.23  | 0.94

Retail | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.10 | 0.35  | 0.60

Retail | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.10 | 0.89  | -0.56

Airlines | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 1.24 | 1.42  | 0.51

Airlines | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.61 | 0.76  | -0.04

Airlines | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.04 | 0.19  | 0.86

Airlines | w w | pass-through of input cost to unit cost (L4)  | 0.42 | 0.61  | 0.38

Airlines | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.17 | 0.22  | 0.72

Airlines | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.45 | 0.47  | 0.83

Airlines | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.25 | 0.39  | 0.88

Airlines | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.03 | 0.40  | 0.26

Airlines | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.13 | 0.36  | 0.50

Airlines | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.00 | 0.02  | 1.00

Airlines | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.05 | 0.22  | 0.88

Airlines | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.19 | 0.49  | -0.21

Data centers | w w | pass-through of input cost to unit cost (L4)  | 0.43 | 0.53  | 0.30

Data centers | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.17 | 0.47  | -0.34

Data centers | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 1.65 | 1.76  | -0.12

Data centers | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.09 | 0.42  | 0.64

Data centers | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.01 | 0.38  | 0.22

Data centers | u^norm u_norm | Normal occupancy: share of capacity leased in a normal month (L18).  | -1.25 | 1.29  | 0.86

Data centers | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -1.12 | 1.14  | 0.91

Data centers | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.00 | 0.01  | 1.00

Data centers | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.01 | 0.45  | 0.11

Data centers | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.27 | 0.34  | 0.36

Data centers | z_0 z0 | Starting utilization: utilization in the first month relative to normal, logit scale.  | 1.28 | 1.33  | -0.05

Hospitals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.88 | 1.29  | -0.07

Hospitals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.66 | 0.83  | 0.45

Hospitals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.56 | 0.69  | 0.54

Hospitals | w w | pass-through of input cost to unit cost (L4)  | 0.22 | 0.36  | -0.05

Hospitals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.08 | 0.27  | -0.51

Hospitals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.10 | 0.23  | 0.30

Hospitals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.91 | 1.09  | 0.55

Hospitals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.07 | 0.23  | -0.26

Hospitals | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.07 | 0.25  | 0.73

Hospitals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.03 | 0.08  | 0.99

Hospitals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.03 | 0.38  | 0.14

Hospitals | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.05 | 0.26  | -0.21

Hotels | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.79 | 0.91  | -0.35

Hotels | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.72 | 0.96  | -0.50

Hotels | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.10 | 0.50  | 0.21

Hotels | w w | pass-through of input cost to unit cost (L4)  | 0.06 | 0.50  | 0.03

Hotels | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.40 | 0.61  | 0.69

Hotels | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.49 | 0.54  | 0.46

Hotels | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.34 | 0.64  | 0.54

Hotels | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.28 | 0.71  | 0.42

Hotels | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.03 | 0.26  | 0.90

Hotels | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.02 | 0.03  | 1.00

Hotels | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.24 | 0.32  | 0.80

Hotels | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.35 | 0.47  | -0.46
