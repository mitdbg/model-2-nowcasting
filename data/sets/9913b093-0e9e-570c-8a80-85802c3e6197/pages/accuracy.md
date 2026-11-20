<!-- Evaluation › Against ground truth, for forecast 9913b093-0e9e-570c-8a80-85802c3e6197; the page: https://mitdbg.github.io/model-2-nowcasting/accuracy.html?set=9913b093-0e9e-570c-8a80-85802c3e6197; inputs c14600d8b51df894 -->

World shown  5 of 5 worlds in this bundle

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Against ground truth

No ground truth is available for real worlds.

The backtest runs Model 2 at each as-of date on the synthetic world, using only observations published by then and re-estimating each time, and scores every sector total against the truth. The backtest's runs widen their bands by 2.55× (history), 2.31× (nowcast), 1.86× (forecast), as the site's run does. Backtest workspace: /Users/michjc/lincoln/work/2026/10/m2-site-ws/w36-margin--5-worlds--seeds-2026111701-2026111702-2026111703-2026111704-2026111705/seed2026111702. As-of dates: 2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30.

- Error of the member median, in one of three units: for most quantities, the absolute log error, shown as a percentage; for utilization and load factor, the absolute difference in percentage points; for overdue orders, phantom orders and lost demand, which are often near zero, the absolute difference in months of the sector's output ("mo"). None where the truth or the median is zero.

- Mean error by horizon averages these over all sectors and quantities.

- Coverage: share of months with the truth inside the 90% band, for the bands as published (widened, see Band widening below) and for the model's own bands before widening ("unwidened"). Green: consistent with 90% or above given the number of values scored (within two binomial standard errors); amber: within four; red: further below. Coverage near 100% is not marked: it means the bands are wide, not wrong. Cells with fewer than 8 values are not colored.

## Errors by horizon

horizon | mean error | coverage, published | coverage, unwidened | values

history (last 12 months) | 0.039 | 94% | 74% | 7,876

nowcast | 0.043 | 94% | 78% | 716

forecast, 3 months ahead | 0.047 | 93% | 83% | 716

forecast, 6 months ahead | 0.051 | 95% | 86% | 716

forecast, 12 months ahead | 0.058 | 98% | 91% | 716

## Errors by sector and quantity

Error at each horizon, then coverage pooled over the horizons, since each horizon has only one value per as-of date: history (the last 12 months before each as-of date) and ahead (the nowcast and the 3-, 6- and 12-month forecasts). Coverage cells show published bands, then unwidened in gray; most rest on 44 values (history) and 16 (ahead), and hovering a cell gives its count.

sector | quantity | history (last 12 months) | nowcast | forecast, 3 months ahead | forecast, 6 months ahead | forecast, 12 months ahead | coverage, history | coverage, ahead

Oil and gas | Order book | 17.0% | 20.5% | 23.0% | 27.0% | 25.9% | 100% 45% | 100% 63%

Oil and gas | Overdue orders | 0.19 mo | 0.24 mo | 0.26 mo | 0.29 mo | 0.29 mo | 100% 41% | 88% 38%

Oil and gas | Capacity | 0.5% | 0.5% | 0.4% | 1.1% | 4.2% | 100% 95% | 100% 94%

Oil and gas | Capacity announced | 15.4% | 20.2% | 23.7% | 20.0% | 14.9% | 100% 75% | 100% 81%

Oil and gas | Capacity under construction | 4.8% | 3.1% | 6.9% | 13.2% | 17.4% | 100% 100% | 100% 88%

Oil and gas | Finished inventory | 0.08 mo | 0.10 mo | 0.13 mo | 0.15 mo | 0.09 mo | 100% 98% | 100% 75%

Oil and gas | Input inventory | 3.8% | 4.1% | 3.9% | 3.9% | 6.5% | 100% 100% | 100% 100%

Oil and gas | Lead time | 33.9% | 39.5% | 48.0% | 55.1% | 58.0% | 100% 52% | 88% 56%

Oil and gas | New orders | 3.1% | 4.4% | 5.7% | 7.3% | 6.8% | 98% 66% | 100% 94%

Oil and gas | Output | 1.1% | 1.1% | 2.9% | 4.5% | 7.4% | 100% 70% | 88% 75%

Oil and gas | Phantom orders | 0.02 mo | 0.03 mo | 0.04 mo | 0.05 mo | 0.06 mo | 93% 36% | 81% 44%

Oil and gas | Price | 4.9% | 2.6% | 3.8% | 6.1% | 7.9% | 100% 77% | 100% 100%

Oil and gas | Shipments | 2.4% | 1.5% | 3.7% | 6.1% | 5.4% | 98% 64% | 94% 75%

Oil and gas | Unit cost | 3.7% | 4.0% | 4.0% | 4.0% | 4.1% | 75% 27% | 81% 38%

Oil and gas | Utilization | 0.8 pt | 1.3 pt | 2.8 pt | 3.4 pt | 3.5 pt | 100% 70% | 88% 75%

Housing | Order book | 8.6% | 8.7% | 8.9% | 8.8% | 7.3% | 100% 100% | 100% 100%

Housing | Overdue orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 100% 100% | 100% 100%

Housing | Capacity | 1.6% | 1.6% | 1.6% | 1.5% | 1.4% | 100% 100% | 100% 100%

Housing | Finished inventory | 0.11 mo | 0.10 mo | 0.09 mo | 0.08 mo | 0.09 mo | 100% 100% | 100% 100%

Housing | Input inventory | 3.2% | 3.0% | 3.3% | 3.1% | 3.2% | 100% 100% | 100% 100%

Housing | Lead time | 5.5% | 6.2% | 6.8% | 6.4% | 4.6% | 100% 100% | 100% 100%

Housing | New orders | 1.6% | 1.0% | 1.9% | 1.6% | 1.6% | 100% 100% | 100% 100%

Housing | Output | 0.5% | 0.4% | 0.8% | 1.4% | 1.0% | 100% 100% | 100% 100%

Housing | Phantom orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.02 mo | 100% 100% | 100% 100%

Housing | Price | 4.3% | 4.2% | 4.0% | 4.2% | 4.4% | 100% 100% | 100% 100%

Housing | Shipments | 0.4% | 0.5% | 0.6% | 1.0% | 1.1% | 100% 100% | 100% 100%

Housing | Unit cost | 5.7% | 5.7% | 5.7% | 5.6% | 6.0% | 64% 25% | 75% 56%

Housing | Utilization | 1.2 pt | 1.0 pt | 1.0 pt | 1.3 pt | 1.6 pt | 100% 100% | 100% 100%

Food | Order book | 5.9% | 7.4% | 7.1% | 9.5% | 11.3% | 100% 100% | 100% 100%

Food | Overdue orders | 0.06 mo | 0.07 mo | 0.07 mo | 0.08 mo | 0.11 mo | 100% 100% | 100% 100%

Food | Capacity | 0.3% | 0.4% | 0.5% | 0.5% | 0.7% | 100% 80% | 100% 88%

Food | Finished inventory | 0.08 mo | 0.09 mo | 0.08 mo | 0.05 mo | 0.07 mo | 100% 91% | 100% 94%

Food | Input inventory | 1.2% | 1.1% | 1.3% | 1.5% | 1.4% | 100% 100% | 100% 100%

Food | Lead time | 18.0% | 20.3% | 21.4% | 25.6% | 31.2% | 100% 100% | 100% 100%

Food | New orders | 1.0% | 1.9% | 0.8% | 1.7% | 1.6% | 100% 93% | 100% 100%

Food | Output | 0.4% | 1.0% | 1.7% | 1.5% | 1.2% | 100% 100% | 100% 100%

Food | Phantom orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.02 mo | 100% 59% | 100% 56%

Food | Price | 6.7% | 5.9% | 5.7% | 5.9% | 5.0% | 91% 34% | 100% 69%

Food | Shipments | 0.8% | 1.2% | 0.6% | 0.2% | 2.6% | 100% 100% | 100% 94%

Food | Unit cost | 10.3% | 9.9% | 10.3% | 10.3% | 10.4% | 2% 0% | 69% 6%

Food | Utilization | 0.4 pt | 0.9 pt | 1.6 pt | 1.3 pt | 0.9 pt | 100% 77% | 100% 94%

Chemicals | Order book | 1.2% | 1.7% | 2.2% | 1.9% | 3.7% | 100% 98% | 100% 100%

Chemicals | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% 100%

Chemicals | Capacity | 0.7% | 0.9% | 1.2% | 1.4% | 1.4% | 100% 73% | 100% 75%

Chemicals | Finished inventory | 0.05 mo | 0.05 mo | 0.06 mo | 0.07 mo | 0.11 mo | 100% 100% | 100% 100%

Chemicals | Input inventory | 1.0% | 1.3% | 1.2% | 1.8% | 1.9% | 100% 100% | 100% 100%

Chemicals | Lead time | 3.5% | 3.8% | 6.3% | 10.7% | 19.8% | 100% 100% | 100% 100%

Chemicals | New orders | 1.3% | 1.3% | 2.1% | 1.7% | 3.3% | 100% 98% | 100% 100%

Chemicals | Output | 0.5% | 0.7% | 1.2% | 1.0% | 1.5% | 100% 91% | 100% 100%

Chemicals | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 0.01 mo | 89% 59% | 94% 81%

Chemicals | Price | 2.3% | 2.6% | 2.7% | 2.5% | 1.5% | 100% 61% | 100% 94%

Chemicals | Shipments | 1.0% | 0.9% | 0.8% | 1.8% | 1.5% | 100% 98% | 100% 100%

Chemicals | Unit cost | 1.6% | 1.3% | 1.1% | 0.9% | 1.3% | 100% 75% | 100% 100%

Chemicals | Utilization | 0.2 pt | 0.4 pt | 0.9 pt | 1.2 pt | 2.3 pt | 100% 98% | 100% 100%

Steel | Order book | 1.6% | 2.6% | 2.3% | 1.4% | 2.0% | 100% 89% | 100% 94%

Steel | Overdue orders | 0.01 mo | 0.00 mo | 0.01 mo | 0.01 mo | 0.01 mo | 100% 100% | 100% 94%

Steel | Capacity | 0.5% | 0.5% | 0.9% | 1.0% | 1.2% | 100% 95% | 100% 88%

Steel | Finished inventory | 0.05 mo | 0.06 mo | 0.06 mo | 0.06 mo | 0.05 mo | 100% 98% | 100% 100%

Steel | Input inventory | 4.0% | 4.1% | 3.8% | 3.6% | 2.6% | 100% 100% | 100% 100%

Steel | Lead time | 2.7% | 3.4% | 3.6% | 3.6% | 3.0% | 100% 98% | 100% 88%

Steel | New orders | 1.7% | 2.7% | 1.7% | 0.9% | 1.5% | 100% 89% | 100% 94%

Steel | Output | 0.4% | 0.4% | 0.4% | 0.8% | 1.1% | 100% 100% | 100% 100%

Steel | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 64% 11% | 94% 63%

Steel | Price | 1.6% | 1.3% | 1.6% | 1.9% | 1.7% | 100% 100% | 100% 100%

Steel | Shipments | 1.0% | 1.2% | 1.0% | 1.2% | 0.9% | 100% 95% | 100% 100%

Steel | Unit cost | 2.0% | 1.4% | 1.6% | 1.1% | 1.4% | 100% 66% | 100% 100%

Steel | Utilization | 0.3 pt | 0.4 pt | 0.6 pt | 1.0 pt | 0.5 pt | 100% 91% | 100% 100%

Machinery | Order book | 3.3% | 4.1% | 3.7% | 3.6% | 4.7% | 93% 75% | 88% 94%

Machinery | Overdue orders | 0.07 mo | 0.10 mo | 0.09 mo | 0.09 mo | 0.09 mo | 55% 100% | 63% 100%

Machinery | Capacity | 0.9% | 0.6% | 0.9% | 1.2% | 1.3% | 100% 82% | 100% 88%

Machinery | Finished inventory | 0.11 mo | 0.10 mo | 0.10 mo | 0.09 mo | 0.10 mo | 100% 100% | 100% 100%

Machinery | Input inventory | 4.3% | 4.4% | 4.0% | 3.5% | 3.7% | 100% 100% | 100% 100%

Machinery | Lead time | 4.7% | 4.9% | 5.6% | 5.5% | 5.7% | 100% 100% | 100% 100%

Machinery | New orders | 3.2% | 3.5% | 3.2% | 2.6% | 3.9% | 100% 84% | 100% 94%

Machinery | Output | 1.6% | 1.8% | 2.7% | 2.7% | 3.2% | 100% 70% | 100% 81%

Machinery | Phantom orders | 0.04 mo | 0.04 mo | 0.04 mo | 0.03 mo | 0.04 mo | 20% 0% | 31% 6%

Machinery | Price | 3.2% | 3.2% | 2.2% | 2.1% | 1.8% | 100% 93% | 100% 100%

Machinery | Shipments | 2.0% | 2.2% | 2.7% | 2.5% | 2.9% | 100% 64% | 100% 81%

Machinery | Unit cost | 4.4% | 4.7% | 4.5% | 4.2% | 4.1% | 100% 27% | 100% 63%

Machinery | Utilization | 0.7 pt | 1.0 pt | 1.5 pt | 1.7 pt | 2.1 pt | 100% 93% | 100% 88%

Semiconductors | Order book | 1.2% | 2.4% | 2.0% | 1.9% | 3.2% | 100% 100% | 100% 100%

Semiconductors | Overdue orders | 0.01 mo | 0.03 mo | 0.04 mo | 0.04 mo | 0.06 mo | 100% 100% | 100% 100%

Semiconductors | Capacity | 0.5% | 0.5% | 0.6% | 0.9% | 1.5% | 100% 93% | 100% 94%

Semiconductors | Capacity announced | 8.0% | 12.0% | 9.6% | 13.2% | 10.9% | 100% 100% | 100% 100%

Semiconductors | Capacity under construction | 11.5% | 13.1% | 14.6% | 15.6% | 17.2% | 100% 100% | 100% 100%

Semiconductors | Finished inventory | 0.15 mo | 0.09 mo | 0.08 mo | 0.07 mo | 0.04 mo | 100% 100% | 100% 100%

Semiconductors | Input inventory | 2.6% | 2.4% | 2.6% | 2.9% | 2.5% | 100% 100% | 100% 100%

Semiconductors | Lead time | 5.1% | 7.0% | 8.0% | 8.7% | 12.0% | 100% 100% | 100% 100%

Semiconductors | New orders | 1.8% | 2.1% | 2.2% | 2.8% | 2.1% | 100% 100% | 100% 100%

Semiconductors | Output | 0.6% | 0.4% | 0.8% | 0.8% | 1.1% | 100% 100% | 100% 100%

Semiconductors | Phantom orders | 0.17 mo | 0.12 mo | 0.07 mo | 0.07 mo | 0.09 mo | 5% 0% | 31% 19%

Semiconductors | Price | 1.5% | 1.2% | 1.5% | 1.6% | 1.5% | 100% 100% | 100% 100%

Semiconductors | Shipments | 0.9% | 1.1% | 0.8% | 0.9% | 0.8% | 100% 100% | 100% 100%

Semiconductors | Unit cost | 5.5% | 5.4% | 5.1% | 5.4% | 4.8% | 75% 9% | 75% 31%

Semiconductors | Utilization | 0.5 pt | 0.2 pt | 0.4 pt | 0.9 pt | 0.9 pt | 100% 100% | 100% 100%

Autos | Order book | 1.9% | 2.7% | 2.6% | 3.0% | 6.3% | 100% 77% | 100% 100%

Autos | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.05 mo | 100% 100% | 100% 100%

Autos | Capacity | 1.5% | 1.7% | 2.0% | 2.3% | 3.3% | 80% 30% | 69% 44%

Autos | Finished inventory | 0.06 mo | 0.10 mo | 0.11 mo | 0.11 mo | 0.13 mo | 100% 100% | 100% 100%

Autos | Input inventory | 5.7% | 5.3% | 6.3% | 4.7% | 5.6% | 100% 100% | 100% 100%

Autos | Lead time | 11.1% | 13.9% | 19.6% | 26.9% | 41.9% | 100% 100% | 100% 94%

Autos | New orders | 1.5% | 2.0% | 2.3% | 3.2% | 3.5% | 100% 89% | 100% 100%

Autos | Output | 0.5% | 0.4% | 1.1% | 1.4% | 1.8% | 100% 93% | 100% 100%

Autos | Phantom orders | 0.00 mo | 0.00 mo | 0.01 mo | 0.01 mo | 0.03 mo | 55% 30% | 75% 38%

Autos | Price | 4.1% | 3.5% | 4.8% | 6.1% | 7.5% | 100% 55% | 100% 81%

Autos | Shipments | 1.1% | 0.8% | 1.0% | 1.7% | 2.1% | 100% 93% | 100% 100%

Autos | Unit cost | 6.0% | 6.0% | 6.1% | 6.5% | 5.7% | 75% 20% | 75% 63%

Autos | Utilization | 0.9 pt | 1.3 pt | 2.4 pt | 3.0 pt | 4.0 pt | 100% 45% | 100% 69%

Wholesale | Order book | 9.5% | 10.5% | 12.2% | 11.7% | 11.4% | 52% 27% | 81% 50%

Wholesale | Capacity | 6.1% | 6.1% | 6.4% | 6.3% | 6.4% | 75% 75% | 75% 75%

Wholesale | Finished inventory | 0.24 mo | 0.23 mo | 0.28 mo | 0.33 mo | 0.40 mo | 100% 57% | 81% 75%

Wholesale | Lead time | 16.8% | 17.4% | 19.5% | 18.6% | 17.4% | 100% 100% | 100% 100%

Wholesale | Load factor | 1.9 pt | 1.5 pt | 2.0 pt | 2.1 pt | 2.1 pt | 100% 89% | 94% 88%

Wholesale | Lost demand | 0.01 mo | 0.03 mo | 0.02 mo | 0.04 mo | 0.03 mo | 95% 73% | 81% 69%

Wholesale | New orders | 9.1% | 9.2% | 11.3% | 9.7% | 9.2% | 77% 18% | 94% 56%

Wholesale | Output | 7.5% | 7.2% | 8.1% | 7.8% | 7.3% | 61% 0% | 63% 19%

Wholesale | Price | 8.2% | 8.0% | 7.3% | 8.3% | 7.7% | 73% 2% | 81% 63%

Wholesale | Shipments | 9.1% | 8.2% | 9.8% | 9.9% | 8.9% | 55% 9% | 88% 38%

Wholesale | Unit cost | 8.9% | 8.7% | 8.2% | 8.9% | 8.0% | 64% 0% | 88% 56%

Wholesale | Utilization | 1.6 pt | 1.5 pt | 1.4 pt | 1.3 pt | 1.0 pt | 100% 89% | 100% 100%

Retail | Order book | 3.9% | 3.0% | 5.3% | 2.0% | 4.3% | 100% 91% | 100% 100%

Retail | Capacity | 5.3% | 7.0% | 7.2% | 8.0% | 10.5% | 95% 23% | 75% 13%

Retail | Finished inventory | 0.28 mo | 0.41 mo | 0.49 mo | 0.58 mo | 0.73 mo | 100% 61% | 100% 69%

Retail | Lead time | 8.2% | 14.6% | 14.6% | 14.9% | 23.2% | 100% 100% | 100% 100%

Retail | Load factor | 4.2 pt | 4.6 pt | 2.9 pt | 3.3 pt | 4.7 pt | 100% 86% | 100% 100%

Retail | Lost demand | 0.01 mo | 0.02 mo | 0.01 mo | 0.01 mo | 0.01 mo | 82% 48% | 94% 81%

Retail | New orders | 4.0% | 2.4% | 5.5% | 2.0% | 4.7% | 100% 86% | 100% 94%

Retail | Output | 3.5% | 5.1% | 6.8% | 6.0% | 8.2% | 95% 50% | 81% 31%

Retail | Price | 0.7% | 0.9% | 0.6% | 1.6% | 2.1% | 100% 93% | 100% 100%

Retail | Shipments | 3.6% | 2.5% | 5.5% | 5.4% | 6.1% | 100% 89% | 100% 94%

Retail | Unit cost | 2.3% | 2.4% | 2.4% | 2.7% | 3.6% | 100% 52% | 100% 94%

Retail | Utilization | 1.8 pt | 2.2 pt | 3.2 pt | 4.0 pt | 4.8 pt | 98% 61% | 100% 75%

Airlines | Order book | 3.1% | 3.8% | 4.6% | 5.8% | 3.5% | 100% 89% | 100% 94%

Airlines | Capacity | 4.6% | 5.0% | 5.7% | 5.7% | 5.5% | 95% 32% | 69% 50%

Airlines | Lead time | 6.1% | 5.9% | 6.4% | 6.6% | 6.9% | 100% 100% | 100% 100%

Airlines | Load factor | 1.0 pt | 1.2 pt | 1.8 pt | 1.1 pt | 1.7 pt | 100% 91% | 100% 100%

Airlines | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% –

Airlines | New orders | 2.7% | 4.0% | 1.5% | 3.4% | 3.6% | 100% 91% | 100% 100%

Airlines | Output | 1.0% | 0.7% | 2.3% | 2.5% | 1.2% | 100% 64% | 100% 94%

Airlines | Price | 1.2% | 1.0% | 1.3% | 1.3% | 1.6% | 100% 64% | 100% 88%

Airlines | Shipments | 1.2% | 0.8% | 1.3% | 2.3% | 1.4% | 100% 93% | 100% 100%

Airlines | Unit cost | 1.2% | 1.3% | 1.8% | 1.9% | 2.0% | 100% 95% | 100% 100%

Airlines | Utilization | 3.0 pt | 3.6 pt | 2.8 pt | 2.7 pt | 3.4 pt | 100% 39% | 100% 56%

Data centers | Order book | 4.2% | 3.6% | 3.2% | 2.8% | 1.8% | 100% 75% | 100% 100%

Data centers | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Capacity | 1.6% | 1.4% | 1.5% | 1.5% | 1.2% | 66% 25% | 56% 31%

Data centers | Capacity announced | 5.9% | 4.7% | 4.8% | 5.5% | 4.2% | 100% 82% | 100% 100%

Data centers | Capacity in use | 1.2% | 1.0% | 0.9% | 0.8% | 0.9% | 75% 36% | 81% 69%

Data centers | Capacity under construction | 1.0% | 1.1% | 1.2% | 1.2% | 0.9% | 100% 75% | 100% 88%

Data centers | Lead time | 6.8% | 6.8% | 6.7% | 6.6% | 6.7% | 100% 27% | 100% 38%

Data centers | New orders | 3.0% | 5.6% | 3.7% | 3.3% | 7.6% | 100% 86% | 100% 94%

Data centers | Output | 1.2% | 1.0% | 0.9% | 0.8% | 0.9% | 75% 36% | 81% 69%

Data centers | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Price | 3.2% | 3.0% | 2.9% | 3.2% | 3.7% | 100% 100% | 100% 100%

Data centers | Shipments | 2.5% | 2.9% | 3.1% | 3.3% | 4.4% | 100% 30% | 100% 75%

Data centers | Unit cost | 2.5% | 2.9% | 2.3% | 2.1% | 1.6% | 100% 100% | 100% 100%

Data centers | Utilization | 0.3 pt | 0.4 pt | 0.5 pt | 0.6 pt | 0.6 pt | 100% 100% | 100% 100%

Hospitals | Order book | 1.7% | 1.5% | 1.5% | 1.0% | 1.9% | 98% 73% | 100% 100%

Hospitals | Capacity | 1.8% | 1.9% | 2.0% | 1.9% | 2.2% | 100% 25% | 81% 31%

Hospitals | Lead time | 5.9% | 5.7% | 6.0% | 5.3% | 6.6% | 100% 100% | 100% 100%

Hospitals | Load factor | 1.6 pt | 1.4 pt | 1.3 pt | 1.6 pt | 2.1 pt | 100% 55% | 100% 94%

Hospitals | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Hospitals | New orders | 1.9% | 1.8% | 1.9% | 1.3% | 1.7% | 100% 68% | 100% 100%

Hospitals | Output | 0.3% | 0.3% | 0.4% | 0.5% | 0.6% | 100% 93% | 100% 100%

Hospitals | Price | 0.2% | 0.5% | 0.6% | 0.8% | 1.1% | 100% 100% | 100% 100%

Hospitals | Shipments | 1.9% | 1.5% | 1.2% | 1.5% | 2.0% | 100% 61% | 100% 94%

Hospitals | Unit cost | 1.5% | 1.3% | 1.3% | 0.7% | 0.6% | 100% 45% | 100% 100%

Hospitals | Utilization | 1.4 pt | 1.4 pt | 1.5 pt | 1.5 pt | 1.5 pt | 95% 41% | 88% 69%

Hotels | Order book | 6.3% | 6.6% | 7.2% | 7.8% | 7.5% | 59% 0% | 94% 50%

Hotels | Capacity | 2.6% | 2.7% | 3.0% | 3.1% | 3.3% | 68% 18% | 63% 0%

Hotels | Lead time | 10.4% | 10.2% | 10.8% | 10.9% | 11.2% | 100% 100% | 100% 100%

Hotels | Load factor | 0.8 pt | 0.9 pt | 0.6 pt | 1.3 pt | 1.6 pt | 100% 93% | 100% 100%

Hotels | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% –

Hotels | New orders | 1.4% | 1.6% | 1.1% | 1.6% | 1.0% | 100% 86% | 100% 100%

Hotels | Output | 0.6% | 0.7% | 0.8% | 1.0% | 1.2% | 100% 57% | 100% 81%

Hotels | Price | 0.4% | 0.3% | 0.5% | 1.0% | 0.9% | 100% 98% | 100% 100%

Hotels | Shipments | 1.3% | 1.3% | 1.0% | 1.4% | 1.6% | 100% 77% | 100% 100%

Hotels | Unit cost | 1.8% | 1.5% | 1.4% | 1.1% | 0.9% | 93% 20% | 100% 94%

Hotels | Utilization | 1.8 pt | 1.8 pt | 1.8 pt | 1.8 pt | 1.8 pt | 66% 50% | 69% 56%

## Band widening

The members omit some uncertainty: weakly identified group means and sector parameters, and model error. The site's run therefore widens each published sector band around its median by a factor per status (PLAN decision 17). This run uses 2.55× history, 2.31× nowcast, 1.86× forecast. Recorded reason: The model's own 90% bands held 68% of the truth (all sector variables) in the 2023-2026 backtest on this world (sector fits on Modal, decision 31); factors from scripts/calibrate_bands.py (PLAN decision 17); held-out dates 0.886-0.909.

### Factors from the backtest

Fitted to the model's own bands in this backtest: what this world would call for now.

coverage, unwidened80% factor, forecast1.28×factor, nowcast1.84×factor, history1.92×

### Coverage on held-out dates

Each row: coverage at one as-of date, with factors fitted to the other dates.

2023-09-3090%2024-09-3093%2025-09-3088%2026-09-3088%

### Factors by sector

Oil and gasforecast1.8×Oil and gasnowcast1.98×Oil and gashistory1.87×Housingforecast0.52×Housingnowcast0.664×Housinghistory0.786×Foodforecast1.2×Foodnowcast1.56×Foodhistory2.1×Chemicalsforecast0.683×Chemicalsnowcast0.896×Chemicalshistory1.07×Steelforecast0.697×Steelnowcast1.28×Steelhistory1.08×Machineryforecast1.22×Machinerynowcast1.64×Machineryhistory1.84×Semiconductorsforecast1.01×Semiconductorsnowcast1.84×Semiconductorshistory1.97×Autosforecast1.33×Autosnowcast2.18×Autoshistory1.98×Wholesaleforecast1.92×Wholesalenowcast2.79×Wholesalehistory3.07×Retailforecast1.67×Retailnowcast2.06×Retailhistory1.84×Airlinesforecast1.16×Airlinesnowcast1.08×Airlineshistory1.44×Data centersforecast1.42×Data centersnowcast1.54×Data centershistory2.11×Hospitalsforecast0.846×Hospitalsnowcast1.34×Hospitalshistory1.62×Hotelsforecast1.65×Hotelsnowcast2.27×Hotelshistory2.56×

## Parameter recovery

Each row compares fitted with true parameters of the tracked entities in this run's fit, in prior sds.

- Bias: mean of fit minus truth.

- RMSE: root mean square of fit minus truth.

- Correlation: correlation of fit and truth across entities, which shows whether the fit recovers differences between entities.

sector | parameter | definition | bias (prior sd) | RMSE (prior sd) | correlation

Oil and gas | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.48 | 0.61  | 0.49

Oil and gas | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.10 | 1.14  | -0.32

Oil and gas | w w | pass-through of input cost to unit cost (L4)  | -0.75 | 1.16  | 0.44

Oil and gas | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.87 | 1.01  | 0.45

Oil and gas | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.39 | 0.43  | 0.29

Oil and gas | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.26 | 0.61  | 0.45

Oil and gas | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.18 | 0.39  | 0.33

Oil and gas | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -0.29 | 0.40  | 0.34

Oil and gas | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.14 | 0.27  | 0.91

Oil and gas | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.09 | 0.28  | 0.62

Oil and gas | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.02 | 0.03  | 1.00

Oil and gas | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.10 | 0.27  | 0.81

Oil and gas | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.29 | 0.67  | -0.41

Housing | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.12 | 0.84  | 0.31

Housing | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.26 | 0.39  | 0.47

Housing | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.08 | 0.50  | 0.34

Housing | w w | pass-through of input cost to unit cost (L4)  | -0.13 | 0.33  | 0.47

Housing | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.25 | 0.41  | 0.42

Housing | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.08 | 0.19  | 0.34

Housing | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.17 | 0.42  | 0.81

Housing | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.02 | 0.29  | -0.04

Housing | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.20 | 0.42  | 0.69

Housing | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.14 | 0.33  | 0.58

Housing | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.06 | 0.46  | 0.28

Food | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.07 | 0.47  | -0.52

Food | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.24 | 0.76  | 0.63

Food | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.27 | 0.49  | 0.15

Food | w w | pass-through of input cost to unit cost (L4)  | -0.06 | 0.52  | -0.76

Food | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.13 | 0.33  | -0.03

Food | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.05 | 0.38  | 0.16

Food | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.05 | 0.41  | 0.74

Food | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.23 | 0.33  | -0.11

Food | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.00 | 0.02  | 1.00

Food | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.04 | 0.43  | -0.00

Food | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.02 | 0.07  | 0.99

Food | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.28 | 0.40  | 0.53

Food | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.05 | 0.33  | 0.84

Chemicals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.43 | 0.74  | 0.37

Chemicals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.25 | 0.36  | 0.67

Chemicals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.47 | 0.61  | 0.10

Chemicals | w w | pass-through of input cost to unit cost (L4)  | 0.31 | 0.51  | -0.44

Chemicals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.00 | 0.29  | 0.65

Chemicals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.10 | 0.16  | 0.71

Chemicals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.56 | 0.73  | -0.13

Chemicals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.01 | 0.40  | -0.11

Chemicals | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.01 | 0.02  | 1.00

Chemicals | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.01 | 0.23  | 0.03

Chemicals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.00 | 0.03  | 1.00

Chemicals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.09 | 0.32  | 0.76

Chemicals | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.14 | 0.51  | -0.26

Steel | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.41 | 0.81  | 0.22

Steel | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.20 | 0.36  | 0.79

Steel | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.27 | 0.50  | 0.35

Steel | w w | pass-through of input cost to unit cost (L4)  | -0.12 | 0.43  | 0.16

Steel | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.03 | 0.47  | -0.13

Steel | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.17 | 0.23  | 0.55

Steel | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.14 | 0.41  | 0.27

Steel | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.13 | 0.46  | 0.34

Steel | export share export_share | Export share: share of shipments exported.  | -0.17 | 0.27  | 0.49

Steel | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.10 | 0.20  | 0.80

Steel | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.11 | 0.40  | -0.31

Steel | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.04 | 0.35  | -0.20

Steel | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.17 | 0.41  | 0.28

Steel | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.05  | 1.00

Steel | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.06 | 0.36  | 0.02

Steel | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.10 | 0.37  | 0.18

Machinery | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.26 | 0.32  | 0.41

Machinery | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.22 | 0.53  | 0.10

Machinery | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.20 | 0.48  | 0.06

Machinery | w w | pass-through of input cost to unit cost (L4)  | -0.10 | 0.26  | -0.16

Machinery | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.30 | 0.47  | -0.72

Machinery | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.10 | 0.35  | 0.20

Machinery | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.30 | 0.59  | -0.58

Machinery | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.01 | 0.58  | 0.41

Machinery | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.12 | 0.26  | 0.76

Machinery | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.12 | 0.28  | -0.38

Machinery | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.04 | 0.18  | -0.06

Machinery | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.08 | 0.36  | 0.79

Machinery | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.08 | 0.26  | 0.98

Machinery | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.05 | 0.40  | 0.49

Machinery | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.16 | 0.59  | -0.09

Semiconductors | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.24 | 0.46  | -0.65

Semiconductors | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.09 | 0.18  | 0.40

Semiconductors | w w | pass-through of input cost to unit cost (L4)  | 0.09 | 0.24  | 0.77

Semiconductors | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.02 | 0.28  | -0.65

Semiconductors | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.02 | 0.13  | 0.89

Semiconductors | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.26 | 0.38  | 0.01

Semiconductors | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.14 | 0.46  | -0.51

Semiconductors | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | 0.18 | 0.28  | 0.06

Semiconductors | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.08 | 0.26  | 0.74

Semiconductors | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.01 | 0.15  | 0.05

Semiconductors | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.13 | 0.58  | -0.84

Semiconductors | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.03  | 1.00

Semiconductors | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.26 | 0.44  | 0.42

Semiconductors | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.36 | 0.46  | -0.14

Autos | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -1.32 | 1.46  | -0.03

Autos | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.50 | 0.76  | -0.13

Autos | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.02 | 0.61  | 0.31

Autos | w w | pass-through of input cost to unit cost (L4)  | 0.34 | 0.50  | 0.15

Autos | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.36 | 0.48  | -0.58

Autos | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.68 | 0.74  | 0.15

Autos | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.27 | 0.36  | 0.82

Autos | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.17 | 0.49  | -0.26

Autos | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.16 | 0.40  | 0.46

Autos | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.06 | 0.43  | -0.42

Autos | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.24 | 0.39  | 0.04

Autos | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.09 | 0.10  | 1.00

Autos | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.28 | 0.43  | 0.58

Autos | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.08 | 0.20  | 0.91

Wholesale | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.64 | 1.06  | 0.30

Wholesale | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.26 | 0.48  | -0.34

Wholesale | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.13 | 0.58  | -0.11

Wholesale | w w | pass-through of input cost to unit cost (L4)  | 0.11 | 0.24  | -0.05

Wholesale | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.20 | 0.44  | -0.39

Wholesale | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.07 | 0.47  | 0.45

Wholesale | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.53 | 0.72  | 0.25

Wholesale | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.06 | 0.37  | 0.45

Wholesale | export share export_share | Export share: share of shipments exported.  | -0.14 | 0.58  | 0.01

Wholesale | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.10 | 0.38  | 0.92

Wholesale | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.36 | 0.98  | 0.66

Wholesale | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.31 | 0.54  | -0.03

Retail | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.15 | 1.39  | 0.50

Retail | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.35 | 0.44  | 0.61

Retail | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.26 | 0.59  | 0.10

Retail | w w | pass-through of input cost to unit cost (L4)  | 0.22 | 0.39  | 0.13

Retail | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.29 | 0.40  | 0.55

Retail | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.06 | 0.21  | -0.14

Retail | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.62 | 0.82  | 0.42

Retail | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.41 | 0.59  | 0.00

Retail | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.09 | 0.18  | 0.97

Retail | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.23 | 0.52  | 0.51

Retail | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.01 | 0.49  | -0.25

Airlines | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.14 | 0.42  | 0.45

Airlines | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -1.05 | 1.16  | 0.28

Airlines | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.10 | 0.36  | 0.75

Airlines | w w | pass-through of input cost to unit cost (L4)  | -0.16 | 0.47  | 0.07

Airlines | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.17 | 0.41  | -0.11

Airlines | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.57 | 0.58  | 0.94

Airlines | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.03 | 0.19  | 0.96

Airlines | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.21 | 0.33  | 0.88

Airlines | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.31 | 0.44  | 0.26

Airlines | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.05 | 0.07  | 1.00

Airlines | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.07 | 0.20  | 0.84

Airlines | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.07 | 0.39  | 0.41

Data centers | w w | pass-through of input cost to unit cost (L4)  | 0.46 | 0.57  | -0.09

Data centers | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.22 | 0.47  | 0.62

Data centers | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 1.48 | 1.56  | 0.00

Data centers | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.40 | 0.48  | 0.85

Data centers | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.10 | 0.41  | 0.71

Data centers | u^norm u_norm | Normal occupancy: share of capacity leased in a normal month (L18).  | -1.43 | 1.48  | 0.89

Data centers | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -1.22 | 1.23  | 0.92

Data centers | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.01  | 1.00

Data centers | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.20 | 0.37  | -0.06

Data centers | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.31 | 0.37  | 0.33

Data centers | z_0 z0 | Starting utilization: utilization in the first month relative to normal, logit scale.  | 1.45 | 1.56  | -0.62

Hospitals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.12 | 0.42  | 0.21

Hospitals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.05 | 0.38  | 0.59

Hospitals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.13 | 0.51  | -0.06

Hospitals | w w | pass-through of input cost to unit cost (L4)  | -0.04 | 0.27  | 0.13

Hospitals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.30 | 0.45  | 0.41

Hospitals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.15 | 0.22  | 0.66

Hospitals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.04 | 0.44  | 0.31

Hospitals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.10 | 0.48  | 0.09

Hospitals | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.01 | 0.22  | 0.89

Hospitals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.02 | 0.07  | 0.99

Hospitals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.02 | 0.37  | 0.23

Hospitals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.09 | 0.21  | 0.39

Hotels | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.20 | 0.83  | 0.21

Hotels | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.49 | 0.63  | 0.46

Hotels | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.30 | 0.72  | -0.05

Hotels | w w | pass-through of input cost to unit cost (L4)  | 0.03 | 0.28  | 0.29

Hotels | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.06 | 0.49  | 0.61

Hotels | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.42 | 0.47  | 0.46

Hotels | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.12 | 0.41  | 0.72

Hotels | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.70 | 0.92  | -0.06

Hotels | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.02 | 0.17  | 0.75

Hotels | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.05  | 1.00

Hotels | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.11 | 0.37  | 0.50

Hotels | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.13 | 0.62  | -0.68
