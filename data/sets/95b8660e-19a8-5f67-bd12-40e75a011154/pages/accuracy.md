<!-- Evaluation › Against ground truth, for forecast 95b8660e-19a8-5f67-bd12-40e75a011154; the page: https://mitdbg.github.io/model-2-nowcasting/accuracy.html?set=95b8660e-19a8-5f67-bd12-40e75a011154; inputs 11993001f63cfc8c -->

World shown  5 of 5 worlds in this bundle

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Against ground truth

No ground truth is available for real worlds.

The backtest runs Model 2 at each as-of date on the synthetic world, using only observations published by then and re-estimating each time, and scores every sector total against the truth. The backtest's runs widen their bands by 2.55× (history), 2.31× (nowcast), 1.86× (forecast), as the site's run does. Backtest workspace: /Users/michjc/lincoln/work/2026/10/m2-site-ws/w36-margin--5-worlds--seeds-2026111701-2026111702-2026111703-2026111704-2026111705/seed2026111705. As-of dates: 2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30.

- Error of the member median, in one of three units: for most quantities, the absolute log error, shown as a percentage; for utilization and load factor, the absolute difference in percentage points; for overdue orders, phantom orders and lost demand, which are often near zero, the absolute difference in months of the sector's output ("mo"). None where the truth or the median is zero.

- Mean error by horizon averages these over all sectors and quantities.

- Coverage: share of months with the truth inside the 90% band, for the bands as published (widened, see Band widening below) and for the model's own bands before widening ("unwidened"). Green: consistent with 90% or above given the number of values scored (within two binomial standard errors); amber: within four; red: further below. Coverage near 100% is not marked: it means the bands are wide, not wrong. Cells with fewer than 8 values are not colored.

## Errors by horizon

horizon | mean error | coverage, published | coverage, unwidened | values

history (last 12 months) | 0.060 | 93% | 74% | 7,876

nowcast | 0.065 | 93% | 76% | 716

forecast, 3 months ahead | 0.069 | 92% | 81% | 716

forecast, 6 months ahead | 0.075 | 93% | 84% | 716

forecast, 12 months ahead | 0.086 | 96% | 87% | 716

## Errors by sector and quantity

Error at each horizon, then coverage pooled over the horizons, since each horizon has only one value per as-of date: history (the last 12 months before each as-of date) and ahead (the nowcast and the 3-, 6- and 12-month forecasts). Coverage cells show published bands, then unwidened in gray; most rest on 44 values (history) and 16 (ahead), and hovering a cell gives its count.

sector | quantity | history (last 12 months) | nowcast | forecast, 3 months ahead | forecast, 6 months ahead | forecast, 12 months ahead | coverage, history | coverage, ahead

Oil and gas | Order book | 6.0% | 8.3% | 4.4% | 7.3% | 10.6% | 100% 93% | 100% 88%

Oil and gas | Overdue orders | 0.08 mo | 0.07 mo | 0.06 mo | 0.07 mo | 0.05 mo | 100% 95% | 100% 81%

Oil and gas | Capacity | 0.6% | 0.8% | 1.4% | 1.7% | 2.4% | 100% 86% | 100% 75%

Oil and gas | Capacity announced | 8.0% | 9.0% | 7.0% | 15.6% | 9.2% | 100% 100% | 100% 100%

Oil and gas | Capacity under construction | 6.1% | 6.1% | 5.1% | 6.6% | 6.3% | 100% 75% | 100% 94%

Oil and gas | Finished inventory | 0.12 mo | 0.09 mo | 0.08 mo | 0.08 mo | 0.11 mo | 100% 93% | 100% 100%

Oil and gas | Input inventory | 6.3% | 6.5% | 6.2% | 5.8% | 5.4% | 100% 100% | 100% 100%

Oil and gas | Lead time | 18.8% | 19.0% | 21.5% | 23.6% | 28.0% | 100% 100% | 100% 100%

Oil and gas | New orders | 2.1% | 3.1% | 2.7% | 5.3% | 4.9% | 100% 93% | 100% 94%

Oil and gas | Output | 0.7% | 0.5% | 0.8% | 1.7% | 2.9% | 100% 91% | 100% 100%

Oil and gas | Phantom orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.00 mo | 0.00 mo | 100% 98% | 100% 94%

Oil and gas | Price | 5.4% | 5.4% | 7.1% | 8.9% | 7.9% | 100% 66% | 100% 94%

Oil and gas | Shipments | 1.9% | 1.2% | 2.6% | 2.8% | 4.1% | 100% 84% | 100% 100%

Oil and gas | Unit cost | 5.9% | 5.6% | 5.2% | 5.5% | 6.0% | 75% 50% | 75% 50%

Oil and gas | Utilization | 0.4 pt | 0.4 pt | 0.8 pt | 1.5 pt | 1.9 pt | 100% 98% | 100% 100%

Housing | Order book | 25.1% | 25.8% | 27.7% | 29.9% | 35.4% | 100% 50% | 100% 75%

Housing | Overdue orders | 1.50 mo | 1.60 mo | 1.70 mo | 1.85 mo | 2.19 mo | 100% 75% | 100% 69%

Housing | Capacity | 8.8% | 9.1% | 9.4% | 9.7% | 10.4% | 75% 11% | 63% 0%

Housing | Finished inventory | 0.13 mo | 0.14 mo | 0.15 mo | 0.15 mo | 0.15 mo | 100% 75% | 94% 75%

Housing | Input inventory | 3.3% | 2.8% | 2.3% | 3.1% | 3.5% | 100% 100% | 100% 100%

Housing | Lead time | 46.5% | 48.3% | 51.6% | 55.9% | 64.3% | 100% 73% | 94% 63%

Housing | New orders | 3.5% | 3.7% | 5.6% | 7.3% | 9.9% | 100% 100% | 100% 100%

Housing | Output | 0.5% | 0.7% | 1.2% | 1.2% | 1.6% | 100% 95% | 100% 88%

Housing | Phantom orders | 0.76 mo | 0.77 mo | 0.89 mo | 1.00 mo | 1.34 mo | 100% 98% | 100% 88%

Housing | Price | 10.0% | 9.9% | 11.3% | 12.8% | 14.9% | 100% 100% | 100% 100%

Housing | Shipments | 0.2% | 0.2% | 0.7% | 1.2% | 1.4% | 100% 100% | 100% 100%

Housing | Unit cost | 1.7% | 1.7% | 2.2% | 2.5% | 2.1% | 100% 77% | 100% 100%

Housing | Utilization | 7.1 pt | 7.0 pt | 7.2 pt | 7.6 pt | 8.6 pt | 82% 23% | 81% 38%

Food | Order book | 5.3% | 6.6% | 7.3% | 8.6% | 11.3% | 100% 100% | 100% 100%

Food | Overdue orders | 0.05 mo | 0.05 mo | 0.06 mo | 0.06 mo | 0.08 mo | 100% 100% | 100% 100%

Food | Capacity | 1.3% | 1.3% | 1.8% | 2.1% | 2.7% | 80% 25% | 50% 25%

Food | Finished inventory | 0.10 mo | 0.12 mo | 0.11 mo | 0.10 mo | 0.09 mo | 100% 95% | 100% 100%

Food | Input inventory | 0.7% | 0.7% | 1.0% | 1.1% | 1.6% | 100% 100% | 100% 100%

Food | Lead time | 27.7% | 29.7% | 34.2% | 39.2% | 44.8% | 100% 82% | 100% 75%

Food | New orders | 1.0% | 1.9% | 2.2% | 2.6% | 3.5% | 100% 95% | 100% 100%

Food | Output | 0.6% | 0.6% | 1.6% | 2.1% | 2.3% | 100% 100% | 100% 100%

Food | Phantom orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.02 mo | 61% 23% | 56% 56%

Food | Price | 16.2% | 16.7% | 17.7% | 18.1% | 19.5% | 50% 25% | 69% 38%

Food | Shipments | 0.8% | 1.3% | 1.6% | 2.2% | 2.6% | 100% 100% | 100% 100%

Food | Unit cost | 16.2% | 16.0% | 16.1% | 16.2% | 16.7% | 0% 0% | 25% 0%

Food | Utilization | 0.9 pt | 1.2 pt | 1.9 pt | 2.2 pt | 2.7 pt | 100% 50% | 100% 81%

Chemicals | Order book | 1.6% | 2.2% | 1.8% | 2.1% | 1.9% | 100% 100% | 100% 100%

Chemicals | Overdue orders | 0.02 mo | 0.02 mo | 0.02 mo | 0.02 mo | 0.02 mo | 100% 100% | 100% 100%

Chemicals | Capacity | 0.8% | 0.8% | 1.0% | 1.1% | 1.8% | 100% 73% | 100% 75%

Chemicals | Finished inventory | 0.08 mo | 0.10 mo | 0.08 mo | 0.08 mo | 0.13 mo | 100% 100% | 100% 100%

Chemicals | Input inventory | 1.0% | 1.2% | 1.0% | 1.6% | 1.4% | 100% 100% | 100% 100%

Chemicals | Lead time | 8.7% | 9.7% | 11.2% | 12.8% | 23.4% | 100% 100% | 100% 100%

Chemicals | New orders | 1.2% | 1.7% | 1.4% | 2.0% | 1.3% | 100% 98% | 100% 100%

Chemicals | Output | 0.6% | 0.7% | 1.3% | 1.4% | 1.1% | 100% 93% | 100% 100%

Chemicals | Phantom orders | 0.00 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 100% 100% | 100% 100%

Chemicals | Price | 4.2% | 5.7% | 5.5% | 5.6% | 6.5% | 100% 100% | 100% 100%

Chemicals | Shipments | 1.1% | 1.1% | 1.5% | 1.0% | 2.1% | 100% 95% | 100% 94%

Chemicals | Unit cost | 4.5% | 4.5% | 4.8% | 4.9% | 4.8% | 75% 45% | 94% 69%

Chemicals | Utilization | 0.3 pt | 0.7 pt | 1.3 pt | 1.1 pt | 2.0 pt | 100% 93% | 100% 100%

Steel | Order book | 1.5% | 1.7% | 0.8% | 1.0% | 1.7% | 100% 91% | 100% 94%

Steel | Overdue orders | 0.01 mo | 0.00 mo | 0.01 mo | 0.01 mo | 0.01 mo | 100% 91% | 100% 100%

Steel | Capacity | 0.6% | 0.8% | 1.4% | 1.2% | 2.4% | 100% 91% | 100% 75%

Steel | Finished inventory | 0.12 mo | 0.14 mo | 0.12 mo | 0.11 mo | 0.08 mo | 93% 36% | 94% 19%

Steel | Input inventory | 3.6% | 2.7% | 4.1% | 4.3% | 3.8% | 100% 100% | 100% 100%

Steel | Lead time | 3.9% | 3.9% | 4.2% | 4.3% | 3.9% | 100% 84% | 100% 100%

Steel | New orders | 1.6% | 1.4% | 1.4% | 1.4% | 3.2% | 100% 93% | 100% 100%

Steel | Output | 0.5% | 0.8% | 0.6% | 0.6% | 1.7% | 100% 98% | 100% 100%

Steel | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 82% | 100% 94%

Steel | Price | 1.3% | 1.8% | 1.9% | 1.9% | 3.2% | 100% 95% | 100% 100%

Steel | Shipments | 0.8% | 0.7% | 0.9% | 1.2% | 0.8% | 100% 100% | 100% 100%

Steel | Unit cost | 4.6% | 4.9% | 5.1% | 4.8% | 4.6% | 100% 25% | 100% 63%

Steel | Utilization | 0.3 pt | 0.6 pt | 1.2 pt | 1.0 pt | 1.9 pt | 100% 100% | 100% 100%

Machinery | Order book | 2.9% | 4.4% | 4.8% | 5.5% | 6.1% | 100% 100% | 100% 100%

Machinery | Overdue orders | 0.23 mo | 0.29 mo | 0.28 mo | 0.29 mo | 0.29 mo | 50% 73% | 50% 56%

Machinery | Capacity | 0.8% | 0.8% | 0.9% | 1.2% | 1.4% | 100% 86% | 100% 75%

Machinery | Finished inventory | 0.34 mo | 0.32 mo | 0.24 mo | 0.16 mo | 0.12 mo | 100% 100% | 100% 100%

Machinery | Input inventory | 4.0% | 3.9% | 3.8% | 3.4% | 2.7% | 100% 100% | 100% 100%

Machinery | Lead time | 5.5% | 5.5% | 5.6% | 6.2% | 7.3% | 100% 100% | 100% 100%

Machinery | New orders | 2.5% | 2.1% | 1.7% | 2.1% | 0.7% | 100% 93% | 100% 100%

Machinery | Output | 2.5% | 2.2% | 3.8% | 3.2% | 2.2% | 100% 80% | 100% 100%

Machinery | Phantom orders | 0.04 mo | 0.05 mo | 0.04 mo | 0.04 mo | 0.04 mo | 77% 34% | 81% 63%

Machinery | Price | 5.7% | 6.4% | 5.0% | 5.1% | 4.0% | 100% 100% | 100% 100%

Machinery | Shipments | 2.5% | 1.6% | 1.7% | 1.6% | 2.2% | 100% 82% | 100% 100%

Machinery | Unit cost | 2.8% | 2.9% | 3.0% | 3.3% | 3.1% | 100% 50% | 100% 88%

Machinery | Utilization | 1.6 pt | 1.2 pt | 2.4 pt | 2.0 pt | 1.3 pt | 100% 86% | 100% 100%

Semiconductors | Order book | 1.5% | 1.9% | 2.7% | 3.0% | 5.8% | 100% 100% | 100% 100%

Semiconductors | Overdue orders | 0.00 mo | 0.00 mo | 0.01 mo | 0.02 mo | 0.05 mo | 100% 100% | 100% 100%

Semiconductors | Capacity | 0.5% | 0.5% | 0.7% | 0.8% | 1.1% | 100% 100% | 100% 100%

Semiconductors | Capacity announced | 6.4% | 9.8% | 8.4% | 11.1% | 9.5% | 100% 100% | 100% 100%

Semiconductors | Capacity under construction | 4.3% | 4.1% | 5.4% | 6.0% | 6.3% | 100% 100% | 100% 100%

Semiconductors | Finished inventory | 0.18 mo | 0.16 mo | 0.13 mo | 0.08 mo | 0.06 mo | 100% 100% | 100% 100%

Semiconductors | Input inventory | 3.6% | 4.1% | 4.0% | 3.9% | 4.0% | 100% 100% | 100% 100%

Semiconductors | Lead time | 3.3% | 4.4% | 7.3% | 7.9% | 14.2% | 100% 100% | 100% 100%

Semiconductors | New orders | 1.9% | 1.9% | 3.1% | 2.2% | 4.2% | 100% 100% | 100% 100%

Semiconductors | Output | 0.6% | 0.7% | 1.8% | 1.8% | 2.2% | 100% 100% | 100% 100%

Semiconductors | Phantom orders | 0.09 mo | 0.07 mo | 0.05 mo | 0.05 mo | 0.08 mo | 86% 32% | 100% 88%

Semiconductors | Price | 2.2% | 1.7% | 3.0% | 3.3% | 4.4% | 100% 100% | 100% 100%

Semiconductors | Shipments | 0.9% | 1.0% | 1.1% | 1.0% | 1.5% | 100% 98% | 100% 100%

Semiconductors | Unit cost | 2.5% | 2.6% | 2.6% | 2.5% | 2.7% | 100% 25% | 100% 50%

Semiconductors | Utilization | 0.5 pt | 0.4 pt | 1.0 pt | 0.8 pt | 1.1 pt | 100% 100% | 100% 100%

Autos | Order book | 2.2% | 1.6% | 3.7% | 5.2% | 6.6% | 100% 86% | 100% 100%

Autos | Overdue orders | 0.00 mo | 0.01 mo | 0.01 mo | 0.03 mo | 0.05 mo | 100% 100% | 100% 100%

Autos | Capacity | 2.0% | 2.0% | 2.7% | 3.3% | 4.9% | 75% 18% | 63% 19%

Autos | Finished inventory | 0.10 mo | 0.10 mo | 0.09 mo | 0.11 mo | 0.13 mo | 100% 91% | 100% 100%

Autos | Input inventory | 7.9% | 8.2% | 7.3% | 5.8% | 5.3% | 100% 100% | 100% 100%

Autos | Lead time | 16.3% | 19.4% | 27.7% | 33.0% | 51.2% | 100% 100% | 100% 94%

Autos | New orders | 1.7% | 2.3% | 3.9% | 4.6% | 3.8% | 100% 86% | 100% 100%

Autos | Output | 0.5% | 1.2% | 2.6% | 2.7% | 2.8% | 100% 95% | 100% 88%

Autos | Phantom orders | 0.01 mo | 0.01 mo | 0.02 mo | 0.02 mo | 0.03 mo | 55% 14% | 56% 38%

Autos | Price | 4.4% | 5.4% | 6.4% | 7.6% | 8.4% | 93% 36% | 88% 56%

Autos | Shipments | 1.4% | 0.5% | 3.0% | 3.3% | 2.6% | 100% 89% | 100% 100%

Autos | Unit cost | 4.8% | 5.0% | 4.9% | 5.1% | 4.6% | 75% 25% | 75% 50%

Autos | Utilization | 1.4 pt | 2.3 pt | 4.2 pt | 4.7 pt | 6.2 pt | 86% 23% | 88% 56%

Wholesale | Order book | 3.1% | 2.9% | 3.5% | 3.9% | 5.2% | 100% 68% | 100% 94%

Wholesale | Capacity | 2.6% | 3.1% | 3.5% | 3.5% | 4.5% | 100% 84% | 100% 69%

Wholesale | Finished inventory | 0.03 mo | 0.05 mo | 0.07 mo | 0.08 mo | 0.17 mo | 100% 98% | 100% 94%

Wholesale | Lead time | 9.4% | 10.5% | 12.2% | 13.5% | 14.8% | 100% 100% | 100% 100%

Wholesale | Load factor | 1.6 pt | 2.8 pt | 1.1 pt | 0.9 pt | 3.1 pt | 100% 89% | 100% 88%

Wholesale | Lost demand | 0.01 mo | 0.02 mo | 0.03 mo | 0.03 mo | 0.03 mo | 86% 82% | 69% 75%

Wholesale | New orders | 3.7% | 4.7% | 4.1% | 4.6% | 5.3% | 98% 59% | 100% 94%

Wholesale | Output | 3.8% | 4.3% | 4.4% | 4.2% | 4.4% | 75% 45% | 88% 63%

Wholesale | Price | 3.1% | 4.1% | 3.8% | 3.6% | 3.1% | 100% 34% | 100% 81%

Wholesale | Shipments | 3.6% | 4.5% | 4.4% | 4.2% | 6.5% | 98% 61% | 94% 69%

Wholesale | Unit cost | 2.3% | 2.6% | 2.9% | 2.9% | 3.2% | 100% 70% | 100% 94%

Wholesale | Utilization | 1.8 pt | 1.9 pt | 2.4 pt | 2.5 pt | 2.8 pt | 100% 77% | 100% 88%

Retail | Order book | 7.5% | 7.9% | 14.6% | 13.1% | 10.4% | 100% 48% | 69% 50%

Retail | Capacity | 5.9% | 5.8% | 5.8% | 6.2% | 5.2% | 82% 50% | 75% 50%

Retail | Finished inventory | 0.88 mo | 1.01 mo | 1.11 mo | 1.26 mo | 1.47 mo | 75% 25% | 75% 19%

Retail | Lead time | 22.6% | 19.6% | 21.9% | 23.8% | 21.0% | 100% 100% | 100% 100%

Retail | Load factor | 4.4 pt | 7.5 pt | 5.3 pt | 5.4 pt | 5.0 pt | 98% 86% | 100% 63%

Retail | Lost demand | 0.04 mo | 0.04 mo | 0.06 mo | 0.04 mo | 0.05 mo | 25% 5% | 31% 0%

Retail | New orders | 5.9% | 6.1% | 9.5% | 12.0% | 9.1% | 100% 68% | 75% 63%

Retail | Output | 2.8% | 3.6% | 4.3% | 5.1% | 4.1% | 100% 68% | 94% 63%

Retail | Price | 1.1% | 0.8% | 1.0% | 0.8% | 0.6% | 100% 82% | 100% 100%

Retail | Shipments | 5.3% | 8.8% | 8.4% | 10.6% | 8.5% | 98% 66% | 88% 56%

Retail | Unit cost | 5.0% | 5.4% | 5.4% | 5.0% | 5.1% | 98% 18% | 100% 75%

Retail | Utilization | 2.5 pt | 1.5 pt | 1.5 pt | 2.5 pt | 2.4 pt | 77% 64% | 100% 69%

Airlines | Order book | 3.3% | 3.5% | 3.4% | 4.2% | 4.1% | 100% 80% | 100% 100%

Airlines | Capacity | 2.0% | 2.5% | 2.7% | 2.0% | 2.1% | 100% 73% | 100% 88%

Airlines | Lead time | 9.1% | 8.0% | 8.1% | 6.7% | 5.2% | 100% 100% | 100% 100%

Airlines | Load factor | 1.0 pt | 0.6 pt | 1.3 pt | 1.6 pt | 0.7 pt | 100% 93% | 100% 100%

Airlines | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Airlines | New orders | 2.8% | 2.5% | 1.2% | 3.1% | 3.9% | 100% 98% | 100% 100%

Airlines | Output | 0.8% | 0.7% | 1.3% | 0.6% | 1.9% | 100% 73% | 100% 94%

Airlines | Price | 0.9% | 0.6% | 1.5% | 2.0% | 2.0% | 98% 84% | 100% 100%

Airlines | Shipments | 1.0% | 1.2% | 0.8% | 2.1% | 2.3% | 100% 89% | 100% 100%

Airlines | Unit cost | 0.9% | 1.2% | 1.8% | 1.8% | 1.5% | 100% 86% | 100% 81%

Airlines | Utilization | 1.7 pt | 1.5 pt | 1.4 pt | 1.5 pt | 1.2 pt | 100% 64% | 94% 94%

Data centers | Order book | 5.2% | 5.3% | 5.2% | 4.9% | 4.7% | 100% 59% | 100% 88%

Data centers | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Capacity | 2.3% | 2.4% | 2.4% | 2.5% | 2.5% | 39% 0% | 25% 0%

Data centers | Capacity announced | 7.9% | 8.4% | 8.1% | 4.6% | 7.8% | 100% 84% | 100% 94%

Data centers | Capacity in use | 2.5% | 2.5% | 2.5% | 2.5% | 2.5% | 25% 0% | 31% 13%

Data centers | Capacity under construction | 4.5% | 4.6% | 4.6% | 4.8% | 4.6% | 82% 0% | 75% 13%

Data centers | Lead time | 4.2% | 4.2% | 4.2% | 4.3% | 4.4% | 100% 100% | 100% 100%

Data centers | New orders | 2.9% | 2.1% | 3.7% | 2.7% | 3.8% | 100% 93% | 100% 100%

Data centers | Output | 2.5% | 2.5% | 2.5% | 2.5% | 2.5% | 25% 0% | 31% 13%

Data centers | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Price | 1.6% | 1.4% | 2.1% | 2.7% | 2.0% | 100% 100% | 100% 100%

Data centers | Shipments | 2.3% | 2.3% | 2.4% | 2.6% | 2.3% | 100% 57% | 100% 88%

Data centers | Unit cost | 4.0% | 4.0% | 3.7% | 3.4% | 3.3% | 100% 100% | 100% 100%

Data centers | Utilization | 0.6 pt | 0.7 pt | 0.8 pt | 1.0 pt | 1.2 pt | 100% 55% | 94% 50%

Hospitals | Order book | 1.7% | 2.1% | 1.6% | 2.3% | 2.4% | 100% 80% | 100% 94%

Hospitals | Capacity | 1.6% | 1.6% | 1.7% | 1.7% | 1.8% | 100% 30% | 100% 50%

Hospitals | Lead time | 2.9% | 2.7% | 2.7% | 2.1% | 2.1% | 100% 100% | 100% 100%

Hospitals | Load factor | 1.0 pt | 1.3 pt | 0.8 pt | 1.2 pt | 1.7 pt | 100% 86% | 100% 94%

Hospitals | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 98% 95% | 88% 73%

Hospitals | New orders | 1.4% | 1.9% | 2.0% | 2.3% | 2.7% | 100% 82% | 100% 94%

Hospitals | Output | 0.3% | 0.2% | 0.2% | 0.5% | 0.5% | 100% 100% | 100% 100%

Hospitals | Price | 0.5% | 0.6% | 0.8% | 0.8% | 1.2% | 100% 80% | 100% 100%

Hospitals | Shipments | 1.4% | 1.9% | 1.3% | 2.1% | 2.7% | 100% 82% | 100% 88%

Hospitals | Unit cost | 0.8% | 0.8% | 1.0% | 1.0% | 1.7% | 100% 75% | 100% 100%

Hospitals | Utilization | 1.2 pt | 1.3 pt | 1.3 pt | 1.2 pt | 1.4 pt | 100% 30% | 100% 75%

Hotels | Order book | 5.6% | 6.2% | 7.2% | 7.4% | 6.1% | 66% 7% | 94% 63%

Hotels | Capacity | 2.7% | 2.9% | 3.4% | 3.9% | 4.9% | 27% 20% | 25% 6%

Hotels | Lead time | 7.8% | 8.7% | 9.3% | 10.0% | 10.5% | 100% 100% | 100% 100%

Hotels | Load factor | 3.3 pt | 3.7 pt | 4.5 pt | 4.9 pt | 5.5 pt | 66% 18% | 94% 50%

Hotels | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% 100%

Hotels | New orders | 2.7% | 3.3% | 4.4% | 4.4% | 3.8% | 95% 41% | 100% 88%

Hotels | Output | 2.1% | 2.3% | 2.7% | 3.0% | 4.1% | 25% 0% | 31% 0%

Hotels | Price | 1.1% | 1.1% | 1.4% | 1.9% | 2.5% | 98% 50% | 100% 88%

Hotels | Shipments | 2.6% | 2.9% | 3.5% | 4.0% | 3.7% | 93% 36% | 100% 81%

Hotels | Unit cost | 1.5% | 1.4% | 1.3% | 1.7% | 1.7% | 100% 32% | 100% 88%

Hotels | Utilization | 0.6 pt | 0.7 pt | 0.7 pt | 0.8 pt | 0.9 pt | 100% 50% | 100% 75%

## Band widening

The members omit some uncertainty: weakly identified group means and sector parameters, and model error. The site's run therefore widens each published sector band around its median by a factor per status (PLAN decision 17). This run uses 2.55× history, 2.31× nowcast, 1.86× forecast. Recorded reason: The model's own 90% bands held 68% of the truth (all sector variables) in the 2023-2026 backtest on this world (sector fits on Modal, decision 31); factors from scripts/calibrate_bands.py (PLAN decision 17); held-out dates 0.886-0.909.

### Factors from the backtest

Fitted to the model's own bands in this backtest: what this world would call for now.

coverage, unwidened79% factor, forecast1.41×factor, nowcast1.89×factor, history1.84×

### Coverage on held-out dates

Each row: coverage at one as-of date, with factors fitted to the other dates.

2023-09-3085%2024-09-3092%2025-09-3092%2026-09-3091%

### Factors by sector

Oil and gasforecast0.751×Oil and gasnowcast1.01×Oil and gashistory1.07×Housingforecast1.54×Housingnowcast1.52×Housinghistory1.69×Foodforecast2.16×Foodnowcast2.49×Foodhistory3.25×Chemicalsforecast0.535×Chemicalsnowcast0.827×Chemicalshistory0.907×Steelforecast0.996×Steelnowcast1.4×Steelhistory1.34×Machineryforecast0.949×Machinerynowcast1.21×Machineryhistory1.27×Semiconductorsforecast0.518×Semiconductorsnowcast0.894×Semiconductorshistory0.96×Autosforecast1.69×Autosnowcast1.99×Autoshistory2.23×Wholesaleforecast1.03×Wholesalenowcast1.47×Wholesalehistory1.66×Retailforecast2.87×Retailnowcast2.97×Retailhistory3.11×Airlinesforecast0.731×Airlinesnowcast0.784×Airlineshistory1.23×Data centersforecast2.8×Data centersnowcast3.13×Data centershistory3.24×Hospitalsforecast0.86×Hospitalsnowcast1.44×Hospitalshistory1.42×Hotelsforecast2.87×Hotelsnowcast3.33×Hotelshistory3.57×

## Parameter recovery

Each row compares fitted with true parameters of the tracked entities in this run's fit, in prior sds.

- Bias: mean of fit minus truth.

- RMSE: root mean square of fit minus truth.

- Correlation: correlation of fit and truth across entities, which shows whether the fit recovers differences between entities.

sector | parameter | definition | bias (prior sd) | RMSE (prior sd) | correlation

Oil and gas | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.37 | 0.55  | 0.78

Oil and gas | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.07 | 0.27  | 0.33

Oil and gas | w w | pass-through of input cost to unit cost (L4)  | 0.10 | 0.38  | 0.61

Oil and gas | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.36 | 0.64  | -0.48

Oil and gas | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.19 | 0.26  | 0.40

Oil and gas | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.32 | 0.66  | 0.61

Oil and gas | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.04 | 0.27  | 0.45

Oil and gas | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | 0.07 | 0.25  | 0.09

Oil and gas | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.35 | 0.59  | 0.36

Oil and gas | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.19 | 0.40  | -0.35

Oil and gas | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.06 | 0.08  | 1.00

Oil and gas | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.00 | 0.33  | 0.47

Oil and gas | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.15 | 0.72  | 0.18

Housing | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.02 | 0.69  | 0.28

Housing | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.02 | 0.40  | 0.56

Housing | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.05 | 0.56  | 0.57

Housing | w w | pass-through of input cost to unit cost (L4)  | -0.06 | 0.37  | 0.62

Housing | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.04 | 0.64  | -0.59

Housing | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.26 | 0.33  | 0.49

Housing | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.11 | 0.35  | 0.87

Housing | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.18 | 0.46  | 0.40

Housing | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.16 | 0.45  | 0.67

Housing | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.08 | 0.43  | 0.32

Housing | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.79 | 1.70  | 0.33

Food | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.82 | 0.99  | 0.55

Food | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.43 | 0.53  | 0.78

Food | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.70 | 0.83  | 0.06

Food | w w | pass-through of input cost to unit cost (L4)  | 0.05 | 0.28  | 0.08

Food | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.63 | 0.73  | 0.72

Food | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.11 | 0.46  | -0.19

Food | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.38 | 0.61  | 0.11

Food | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.15 | 0.38  | -0.04

Food | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | -0.01 | 0.01  | 1.00

Food | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.36 | 0.48  | 0.27

Food | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.03 | 0.10  | 0.98

Food | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.48 | 0.63  | 0.65

Food | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.01 | 0.60  | -0.59

Chemicals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.37 | 0.60  | 0.49

Chemicals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.04 | 0.26  | 0.73

Chemicals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.42 | 0.61  | -0.06

Chemicals | w w | pass-through of input cost to unit cost (L4)  | 0.41 | 0.47  | 0.23

Chemicals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.09 | 0.31  | 0.30

Chemicals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.09 | 0.19  | 0.58

Chemicals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.66 | 1.04  | 0.44

Chemicals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.11 | 0.46  | 0.26

Chemicals | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | -0.00 | 0.02  | 1.00

Chemicals | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.05 | 0.42  | 0.19

Chemicals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.03  | 1.00

Chemicals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.15 | 0.39  | 0.47

Chemicals | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.39 | 0.88  | 0.20

Steel | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.33 | 0.76  | 0.44

Steel | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.09 | 0.28  | 0.45

Steel | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.04 | 0.44  | 0.29

Steel | w w | pass-through of input cost to unit cost (L4)  | 0.04 | 0.29  | 0.39

Steel | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.04 | 0.48  | -0.01

Steel | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.26 | 0.29  | 0.69

Steel | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.53 | 0.84  | 0.21

Steel | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.06 | 0.33  | 0.19

Steel | export share export_share | Export share: share of shipments exported.  | 0.16 | 0.38  | 0.42

Steel | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.09 | 0.29  | 0.77

Steel | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.15 | 0.31  | -0.11

Steel | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.04 | 0.26  | 0.13

Steel | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.08 | 0.36  | 0.77

Steel | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.03 | 0.05  | 1.00

Steel | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.26 | 0.42  | 0.66

Steel | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.01 | 0.36  | 0.30

Machinery | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.35 | 0.38  | 0.53

Machinery | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.29 | 0.50  | -0.50

Machinery | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.02 | 0.37  | 0.21

Machinery | w w | pass-through of input cost to unit cost (L4)  | -0.20 | 0.49  | -0.10

Machinery | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.20 | 0.31  | -0.80

Machinery | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.01 | 0.09  | 0.12

Machinery | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.05 | 0.62  | -0.37

Machinery | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.19 | 0.69  | 0.10

Machinery | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.34 | 0.58  | 0.33

Machinery | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.01 | 0.15  | -0.29

Machinery | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.02 | 0.16  | -0.32

Machinery | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.24 | 0.49  | 0.67

Machinery | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.03 | 0.15  | 0.99

Machinery | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.22 | 0.40  | 0.69

Machinery | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.06 | 0.36  | -0.23

Semiconductors | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.33 | 0.51  | -0.63

Semiconductors | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.04 | 0.53  | 0.67

Semiconductors | w w | pass-through of input cost to unit cost (L4)  | 0.06 | 0.21  | -0.30

Semiconductors | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.06 | 0.37  | 0.29

Semiconductors | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.01 | 0.17  | -0.37

Semiconductors | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.10 | 0.34  | -0.28

Semiconductors | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.03 | 0.49  | -0.09

Semiconductors | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | 0.47 | 0.52  | 0.61

Semiconductors | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.22 | 0.61  | 0.16

Semiconductors | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.10 | 0.29  | 0.10

Semiconductors | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.25 | 0.47  | 0.15

Semiconductors | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.03 | 0.04  | 1.00

Semiconductors | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.02 | 0.27  | 0.04

Semiconductors | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.01 | 0.38  | -0.41

Autos | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.52 | 0.87  | 0.63

Autos | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.66 | 0.92  | 0.23

Autos | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.35 | 0.48  | 0.37

Autos | w w | pass-through of input cost to unit cost (L4)  | -0.23 | 0.44  | 0.47

Autos | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.00 | 0.44  | -0.46

Autos | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.34 | 0.46  | 0.17

Autos | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.12 | 0.63  | -0.14

Autos | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.54 | 0.60  | 0.34

Autos | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.17 | 0.40  | 0.49

Autos | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.01 | 0.18  | 0.53

Autos | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.31 | 0.37  | 0.70

Autos | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.05  | 0.99

Autos | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.07 | 0.30  | 0.48

Autos | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.02 | 0.48  | 0.19

Wholesale | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.28 | 0.96  | 0.69

Wholesale | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.40 | 0.48  | 0.73

Wholesale | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.08 | 0.43  | 0.42

Wholesale | w w | pass-through of input cost to unit cost (L4)  | -0.19 | 0.50  | -0.10

Wholesale | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.26 | 0.51  | -0.10

Wholesale | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.12 | 0.25  | 0.34

Wholesale | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.62 | 0.94  | -0.38

Wholesale | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.30 | 0.65  | -0.88

Wholesale | export share export_share | Export share: share of shipments exported.  | -0.05 | 0.40  | 0.31

Wholesale | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.03 | 0.16  | 0.97

Wholesale | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.21 | 0.63  | -0.59

Wholesale | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.05 | 0.44  | 0.33

Retail | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.39 | 0.57  | 0.61

Retail | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.92 | 0.94  | 0.93

Retail | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -1.38 | 1.59  | -0.58

Retail | w w | pass-through of input cost to unit cost (L4)  | 0.29 | 0.48  | 0.00

Retail | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.31 | 0.51  | -0.27

Retail | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.35 | 0.39  | 0.01

Retail | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.49 | 0.90  | 0.32

Retail | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.21 | 0.42  | -0.07

Retail | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.05 | 0.22  | 0.95

Retail | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.39 | 0.59  | 0.65

Retail | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.23 | 0.51  | 0.07

Airlines | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.57 | 0.84  | 0.10

Airlines | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.21 | 0.66  | 0.04

Airlines | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.15 | 0.44  | 0.79

Airlines | w w | pass-through of input cost to unit cost (L4)  | -0.26 | 0.40  | 0.40

Airlines | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.15 | 0.39  | -0.26

Airlines | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.38 | 0.40  | 0.71

Airlines | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.23 | 0.40  | 0.85

Airlines | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.00 | 0.14  | 0.89

Airlines | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.08 | 0.39  | 0.12

Airlines | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.03  | 1.00

Airlines | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.04 | 0.18  | 0.92

Airlines | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.20 | 0.43  | 0.38

Data centers | w w | pass-through of input cost to unit cost (L4)  | 0.17 | 0.35  | -0.12

Data centers | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.08 | 0.33  | 0.51

Data centers | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 1.09 | 1.15  | -0.11

Data centers | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.17 | 0.35  | 0.71

Data centers | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.05 | 0.38  | -0.20

Data centers | u^norm u_norm | Normal occupancy: share of capacity leased in a normal month (L18).  | -1.41 | 1.47  | 0.89

Data centers | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -1.22 | 1.25  | 0.90

Data centers | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.01  | 1.00

Data centers | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.26 | 0.58  | 0.04

Data centers | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.35 | 0.39  | 0.33

Data centers | z_0 z0 | Starting utilization: utilization in the first month relative to normal, logit scale.  | 1.55 | 1.64  | -0.63

Hospitals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.08 | 0.91  | 0.33

Hospitals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.16 | 0.75  | -0.62

Hospitals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.65 | 0.94  | -0.36

Hospitals | w w | pass-through of input cost to unit cost (L4)  | -0.70 | 0.73  | 0.17

Hospitals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.13 | 0.26  | 0.45

Hospitals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.12 | 0.21  | 0.69

Hospitals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.24 | 0.48  | 0.25

Hospitals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.14 | 0.61  | -0.09

Hospitals | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.07 | 0.36  | 0.80

Hospitals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.03 | 0.09  | 0.98

Hospitals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.11 | 0.51  | -0.27

Hospitals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.09 | 0.23  | -0.11

Hotels | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.73 | 0.84  | 0.68

Hotels | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -1.61 | 2.05  | -0.18

Hotels | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.03 | 0.61  | 0.02

Hotels | w w | pass-through of input cost to unit cost (L4)  | -0.15 | 0.27  | 0.61

Hotels | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.18 | 0.26  | 0.57

Hotels | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.55 | 0.56  | 0.37

Hotels | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.09 | 0.33  | 0.76

Hotels | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.32 | 0.70  | -0.03

Hotels | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.05 | 0.17  | 0.02

Hotels | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.05  | 1.00

Hotels | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.09 | 0.25  | 0.88

Hotels | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.22 | 0.57  | -0.63
