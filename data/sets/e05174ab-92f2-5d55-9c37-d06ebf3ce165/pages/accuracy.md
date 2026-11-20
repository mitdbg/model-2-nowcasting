<!-- Evaluation › Against ground truth, for forecast e05174ab-92f2-5d55-9c37-d06ebf3ce165; the page: https://mitdbg.github.io/model-2-nowcasting/accuracy.html?set=e05174ab-92f2-5d55-9c37-d06ebf3ce165; inputs bddd3ddfca7047c7 -->

World shown  5 of 5 worlds in this bundle

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Against ground truth

No ground truth is available for real worlds.

The backtest runs Model 2 at each as-of date on the synthetic world, using only observations published by then and re-estimating each time, and scores every sector total against the truth. The backtest's runs widen their bands by 2.55× (history), 2.31× (nowcast), 1.86× (forecast), as the site's run does. Backtest workspace: /Users/michjc/lincoln/work/2026/10/m2-site-ws/w36-margin--5-worlds--seeds-2026111701-2026111702-2026111703-2026111704-2026111705/seed2026111701. As-of dates: 2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30.

- Error of the member median, in one of three units: for most quantities, the absolute log error, shown as a percentage; for utilization and load factor, the absolute difference in percentage points; for overdue orders, phantom orders and lost demand, which are often near zero, the absolute difference in months of the sector's output ("mo"). None where the truth or the median is zero.

- Mean error by horizon averages these over all sectors and quantities.

- Coverage: share of months with the truth inside the 90% band, for the bands as published (widened, see Band widening below) and for the model's own bands before widening ("unwidened"). Green: consistent with 90% or above given the number of values scored (within two binomial standard errors); amber: within four; red: further below. Coverage near 100% is not marked: it means the bands are wide, not wrong. Cells with fewer than 8 values are not colored.

## Errors by horizon

horizon | mean error | coverage, published | coverage, unwidened | values

history (last 12 months) | 0.139 | 96% | 79% | 7,876

nowcast | 0.153 | 95% | 79% | 716

forecast, 3 months ahead | 0.162 | 94% | 82% | 716

forecast, 6 months ahead | 0.169 | 94% | 85% | 716

forecast, 12 months ahead | 0.192 | 96% | 88% | 716

## Errors by sector and quantity

Error at each horizon, then coverage pooled over the horizons, since each horizon has only one value per as-of date: history (the last 12 months before each as-of date) and ahead (the nowcast and the 3-, 6- and 12-month forecasts). Coverage cells show published bands, then unwidened in gray; most rest on 44 values (history) and 16 (ahead), and hovering a cell gives its count.

sector | quantity | history (last 12 months) | nowcast | forecast, 3 months ahead | forecast, 6 months ahead | forecast, 12 months ahead | coverage, history | coverage, ahead

Oil and gas | Order book | 6.8% | 8.3% | 9.8% | 13.2% | 10.2% | 100% 73% | 100% 88%

Oil and gas | Overdue orders | 0.06 mo | 0.06 mo | 0.07 mo | 0.08 mo | 0.06 mo | 86% 48% | 100% 69%

Oil and gas | Capacity | 0.3% | 0.2% | 0.2% | 0.4% | 1.1% | 100% 100% | 100% 100%

Oil and gas | Capacity announced | 4.6% | 7.0% | 9.4% | 9.1% | 8.6% | 100% 95% | 100% 88%

Oil and gas | Capacity under construction | 1.7% | 1.7% | 2.8% | 3.8% | 6.4% | 100% 100% | 100% 94%

Oil and gas | Finished inventory | 0.04 mo | 0.08 mo | 0.11 mo | 0.12 mo | 0.13 mo | 100% 100% | 100% 100%

Oil and gas | Input inventory | 4.5% | 4.5% | 4.4% | 3.9% | 4.3% | 100% 100% | 100% 100%

Oil and gas | Lead time | 12.3% | 15.9% | 21.2% | 24.5% | 29.4% | 100% 100% | 100% 100%

Oil and gas | New orders | 1.5% | 3.1% | 3.7% | 5.4% | 4.0% | 100% 89% | 100% 94%

Oil and gas | Output | 0.5% | 0.7% | 2.1% | 2.8% | 4.8% | 100% 98% | 100% 81%

Oil and gas | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 0.01 mo | 98% 80% | 88% 75%

Oil and gas | Price | 2.6% | 2.9% | 2.7% | 3.5% | 6.0% | 100% 100% | 100% 100%

Oil and gas | Shipments | 1.2% | 1.7% | 2.3% | 3.3% | 5.6% | 100% 89% | 100% 94%

Oil and gas | Unit cost | 2.9% | 2.7% | 2.2% | 1.9% | 1.7% | 100% 43% | 100% 75%

Oil and gas | Utilization | 0.3 pt | 0.6 pt | 1.8 pt | 2.4 pt | 3.3 pt | 100% 95% | 100% 88%

Housing | Order book | 53.3% | 56.2% | 59.6% | 62.8% | 68.2% | 100% 25% | 100% 25%

Housing | Overdue orders | 8.49 mo | 9.56 mo | 10.01 mo | 10.62 mo | 13.02 mo | 100% 50% | 94% 31%

Housing | Capacity | 36.7% | 41.6% | 44.5% | 47.2% | 53.7% | 68% 25% | 25% 25%

Housing | Finished inventory | 0.41 mo | 0.44 mo | 0.39 mo | 0.36 mo | 0.32 mo | 75% 48% | 75% 75%

Housing | Input inventory | 3.1% | 2.3% | 2.5% | 4.2% | 7.2% | 100% 100% | 100% 100%

Housing | Lead time | 37.7% | 41.2% | 44.9% | 47.6% | 64.5% | 100% 100% | 100% 100%

Housing | New orders | 14.5% | 15.6% | 17.8% | 20.0% | 26.2% | 100% 86% | 100% 81%

Housing | Output | 1.2% | 1.1% | 5.6% | 8.9% | 15.2% | 100% 100% | 100% 100%

Housing | Phantom orders | 2.05 mo | 2.31 mo | 2.47 mo | 2.61 mo | 3.33 mo | 100% 98% | 100% 100%

Housing | Price | 27.9% | 30.8% | 30.3% | 30.2% | 30.2% | 100% 100% | 100% 100%

Housing | Shipments | 1.8% | 2.0% | 4.5% | 8.2% | 15.6% | 100% 89% | 100% 100%

Housing | Unit cost | 21.3% | 21.0% | 21.5% | 21.6% | 22.3% | 0% 0% | 13% 0%

Housing | Utilization | 24.6 pt | 26.9 pt | 30.3 pt | 32.8 pt | 34.7 pt | 48% 25% | 25% 25%

Food | Order book | 1.0% | 1.4% | 1.6% | 1.1% | 1.4% | 100% 100% | 100% 100%

Food | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Food | Capacity | 0.5% | 0.6% | 0.8% | 0.8% | 1.1% | 100% 75% | 81% 75%

Food | Finished inventory | 0.11 mo | 0.12 mo | 0.12 mo | 0.10 mo | 0.05 mo | 100% 75% | 100% 88%

Food | Input inventory | 0.4% | 0.5% | 0.5% | 1.0% | 1.7% | 100% 100% | 100% 100%

Food | Lead time | 9.0% | 10.1% | 13.2% | 12.0% | 12.9% | 100% 100% | 100% 100%

Food | New orders | 0.7% | 1.5% | 1.0% | 0.8% | 2.2% | 100% 95% | 100% 100%

Food | Output | 0.3% | 0.4% | 1.3% | 1.7% | 1.3% | 100% 100% | 100% 100%

Food | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 91% | 100% 88%

Food | Price | 2.0% | 2.2% | 3.3% | 3.9% | 4.1% | 100% 100% | 100% 100%

Food | Shipments | 0.7% | 0.5% | 1.6% | 1.5% | 1.5% | 100% 95% | 100% 100%

Food | Unit cost | 1.9% | 2.2% | 2.0% | 2.6% | 2.7% | 77% 75% | 100% 81%

Food | Utilization | 0.5 pt | 0.8 pt | 1.6 pt | 2.1 pt | 2.0 pt | 100% 73% | 100% 94%

Chemicals | Order book | 3.5% | 4.3% | 2.5% | 2.4% | 3.2% | 100% 95% | 100% 100%

Chemicals | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Chemicals | Capacity | 0.3% | 0.2% | 0.2% | 0.5% | 1.0% | 100% 100% | 100% 100%

Chemicals | Finished inventory | 0.06 mo | 0.08 mo | 0.08 mo | 0.04 mo | 0.04 mo | 100% 100% | 100% 100%

Chemicals | Input inventory | 0.9% | 0.9% | 0.9% | 0.7% | 1.1% | 100% 100% | 100% 100%

Chemicals | Lead time | 4.0% | 5.6% | 6.2% | 3.7% | 9.0% | 100% 100% | 100% 100%

Chemicals | New orders | 1.5% | 1.3% | 1.1% | 1.6% | 3.0% | 100% 95% | 100% 100%

Chemicals | Output | 0.3% | 0.1% | 0.5% | 0.6% | 1.9% | 100% 100% | 100% 100%

Chemicals | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 98% | 100% 100%

Chemicals | Price | 2.9% | 2.9% | 3.7% | 2.8% | 2.7% | 100% 100% | 100% 100%

Chemicals | Shipments | 1.1% | 1.3% | 0.5% | 2.0% | 1.4% | 100% 98% | 100% 100%

Chemicals | Unit cost | 2.1% | 2.5% | 2.6% | 1.8% | 2.7% | 100% 64% | 100% 94%

Chemicals | Utilization | 0.2 pt | 0.1 pt | 0.4 pt | 0.4 pt | 1.5 pt | 100% 100% | 100% 100%

Steel | Order book | 7.2% | 6.0% | 6.8% | 6.5% | 5.5% | 100% 82% | 100% 100%

Steel | Overdue orders | 0.16 mo | 0.15 mo | 0.16 mo | 0.18 mo | 0.15 mo | 100% 93% | 100% 100%

Steel | Capacity | 0.5% | 0.4% | 0.5% | 0.7% | 1.1% | 100% 95% | 100% 94%

Steel | Finished inventory | 0.05 mo | 0.04 mo | 0.04 mo | 0.04 mo | 0.03 mo | 100% 55% | 100% 88%

Steel | Input inventory | 3.5% | 3.8% | 4.1% | 3.9% | 5.0% | 100% 100% | 100% 100%

Steel | Lead time | 1.9% | 1.8% | 2.2% | 2.5% | 2.2% | 100% 100% | 100% 100%

Steel | New orders | 1.6% | 3.0% | 3.5% | 1.5% | 3.3% | 100% 93% | 100% 94%

Steel | Output | 0.5% | 0.2% | 1.1% | 1.3% | 1.4% | 100% 100% | 100% 100%

Steel | Phantom orders | 0.06 mo | 0.06 mo | 0.06 mo | 0.06 mo | 0.06 mo | 100% 100% | 100% 100%

Steel | Price | 1.9% | 1.5% | 1.3% | 0.9% | 1.5% | 100% 91% | 100% 100%

Steel | Shipments | 0.7% | 0.6% | 1.9% | 1.4% | 1.8% | 100% 98% | 100% 94%

Steel | Unit cost | 4.5% | 4.2% | 4.4% | 4.3% | 4.9% | 80% 25% | 100% 75%

Steel | Utilization | 0.3 pt | 0.4 pt | 0.7 pt | 1.2 pt | 1.2 pt | 100% 100% | 100% 100%

Machinery | Order book | 4.8% | 6.2% | 8.0% | 9.5% | 11.3% | 100% 55% | 100% 38%

Machinery | Overdue orders | 0.30 mo | 0.35 mo | 0.36 mo | 0.39 mo | 0.47 mo | 75% 75% | 75% 75%

Machinery | Capacity | 1.4% | 1.7% | 2.2% | 2.2% | 2.6% | 100% 45% | 94% 31%

Machinery | Finished inventory | 0.34 mo | 0.34 mo | 0.23 mo | 0.14 mo | 0.09 mo | 75% 48% | 81% 88%

Machinery | Input inventory | 3.6% | 3.7% | 4.9% | 6.9% | 6.2% | 100% 100% | 100% 100%

Machinery | Lead time | 5.3% | 6.2% | 15.7% | 23.1% | 28.6% | 100% 100% | 100% 88%

Machinery | New orders | 3.7% | 3.5% | 4.8% | 2.9% | 3.5% | 100% 82% | 100% 88%

Machinery | Output | 2.7% | 3.1% | 5.8% | 5.4% | 4.2% | 100% 61% | 94% 75%

Machinery | Phantom orders | 0.07 mo | 0.08 mo | 0.09 mo | 0.12 mo | 0.19 mo | 64% 25% | 50% 13%

Machinery | Price | 3.0% | 2.8% | 2.9% | 4.5% | 7.3% | 100% 100% | 100% 100%

Machinery | Shipments | 3.3% | 3.3% | 3.5% | 3.9% | 3.7% | 75% 68% | 81% 75%

Machinery | Unit cost | 4.7% | 4.5% | 4.3% | 4.2% | 4.1% | 75% 50% | 88% 69%

Machinery | Utilization | 1.5 pt | 1.7 pt | 4.2 pt | 4.6 pt | 4.0 pt | 100% 70% | 94% 81%

Semiconductors | Order book | 8.2% | 12.9% | 14.7% | 14.7% | 16.1% | 100% 100% | 100% 100%

Semiconductors | Overdue orders | 0.58 mo | 0.84 mo | 0.94 mo | 0.98 mo | 1.02 mo | 100% 100% | 100% 100%

Semiconductors | Capacity | 0.4% | 0.5% | 0.6% | 0.7% | 1.2% | 100% 100% | 100% 100%

Semiconductors | Capacity announced | 12.3% | 10.2% | 16.7% | 14.9% | 15.6% | 100% 100% | 100% 100%

Semiconductors | Capacity under construction | 8.7% | 9.9% | 9.7% | 10.6% | 10.3% | 100% 100% | 100% 100%

Semiconductors | Finished inventory | 0.28 mo | 0.23 mo | 0.17 mo | 0.11 mo | 0.09 mo | 100% 100% | 100% 100%

Semiconductors | Input inventory | 2.5% | 2.9% | 3.1% | 5.3% | 4.7% | 100% 100% | 100% 100%

Semiconductors | Lead time | 14.6% | 22.6% | 21.6% | 21.0% | 26.9% | 100% 100% | 100% 100%

Semiconductors | New orders | 7.2% | 4.8% | 7.5% | 5.7% | 9.0% | 100% 100% | 100% 100%

Semiconductors | Output | 1.9% | 2.3% | 4.6% | 3.8% | 3.0% | 100% 100% | 100% 94%

Semiconductors | Phantom orders | 0.45 mo | 0.65 mo | 0.67 mo | 0.68 mo | 0.70 mo | 100% 100% | 100% 100%

Semiconductors | Price | 4.9% | 5.7% | 7.8% | 9.6% | 10.8% | 100% 100% | 100% 100%

Semiconductors | Shipments | 1.9% | 1.9% | 2.6% | 2.6% | 2.4% | 100% 80% | 100% 88%

Semiconductors | Unit cost | 2.6% | 2.8% | 2.9% | 3.0% | 3.3% | 100% 50% | 100% 56%

Semiconductors | Utilization | 1.3 pt | 1.5 pt | 3.2 pt | 2.7 pt | 2.1 pt | 100% 100% | 100% 94%

Autos | Order book | 56.6% | 55.2% | 54.7% | 53.5% | 47.2% | 100% 50% | 100% 63%

Autos | Overdue orders | 1.88 mo | 1.88 mo | 1.93 mo | 1.92 mo | 1.80 mo | 100% 70% | 100% 69%

Autos | Capacity | 1.9% | 2.2% | 2.4% | 2.8% | 3.8% | 75% 34% | 56% 25%

Autos | Finished inventory | 0.20 mo | 0.22 mo | 0.19 mo | 0.16 mo | 0.17 mo | 100% 89% | 100% 94%

Autos | Input inventory | 3.2% | 4.2% | 2.7% | 2.8% | 3.5% | 100% 100% | 100% 100%

Autos | Lead time | 48.9% | 50.0% | 28.5% | 25.3% | 28.6% | 100% 95% | 100% 94%

Autos | New orders | 2.1% | 1.3% | 2.3% | 3.7% | 4.4% | 100% 100% | 100% 100%

Autos | Output | 2.2% | 1.2% | 2.3% | 2.5% | 1.9% | 98% 66% | 100% 94%

Autos | Phantom orders | 0.46 mo | 0.47 mo | 0.45 mo | 0.41 mo | 0.35 mo | 100% 100% | 100% 100%

Autos | Price | 34.7% | 35.2% | 36.7% | 36.8% | 36.5% | 100% 75% | 81% 75%

Autos | Shipments | 2.0% | 2.2% | 2.2% | 1.7% | 2.9% | 100% 82% | 100% 94%

Autos | Unit cost | 52.2% | 51.9% | 52.3% | 52.2% | 52.3% | 0% 0% | 0% 0%

Autos | Utilization | 0.6 pt | 0.9 pt | 4.0 pt | 4.5 pt | 4.3 pt | 100% 98% | 100% 81%

Wholesale | Order book | 3.9% | 3.9% | 5.0% | 6.0% | 5.3% | 100% 43% | 100% 94%

Wholesale | Capacity | 5.5% | 5.6% | 5.9% | 7.3% | 7.6% | 86% 50% | 88% 38%

Wholesale | Finished inventory | 0.08 mo | 0.04 mo | 0.04 mo | 0.08 mo | 0.19 mo | 100% 68% | 100% 100%

Wholesale | Lead time | 14.7% | 16.3% | 16.5% | 19.0% | 24.6% | 100% 100% | 100% 100%

Wholesale | Load factor | 1.8 pt | 0.9 pt | 0.8 pt | 2.2 pt | 2.1 pt | 100% 84% | 100% 100%

Wholesale | Lost demand | 0.01 mo | 0.01 mo | 0.02 mo | 0.03 mo | 0.03 mo | 82% 57% | 69% 69%

Wholesale | New orders | 2.9% | 2.7% | 3.3% | 3.6% | 4.4% | 100% 68% | 100% 94%

Wholesale | Output | 2.7% | 2.3% | 2.1% | 3.0% | 2.9% | 84% 70% | 94% 75%

Wholesale | Price | 3.2% | 2.9% | 2.9% | 2.7% | 2.3% | 95% 68% | 100% 88%

Wholesale | Shipments | 2.8% | 2.3% | 2.6% | 3.3% | 3.5% | 100% 66% | 100% 94%

Wholesale | Unit cost | 4.6% | 4.1% | 4.3% | 3.8% | 3.3% | 95% 45% | 100% 69%

Wholesale | Utilization | 2.8 pt | 3.5 pt | 3.2 pt | 3.6 pt | 4.0 pt | 100% 43% | 100% 56%

Retail | Order book | 5.0% | 6.7% | 9.2% | 7.6% | 10.4% | 100% 55% | 100% 56%

Retail | Capacity | 2.1% | 2.9% | 3.1% | 3.7% | 4.7% | 100% 68% | 100% 50%

Retail | Finished inventory | 0.70 mo | 0.74 mo | 0.82 mo | 0.90 mo | 0.96 mo | 68% 14% | 31% 6%

Retail | Lead time | 9.5% | 7.9% | 9.6% | 11.1% | 13.4% | 100% 100% | 100% 100%

Retail | Load factor | 2.0 pt | 3.1 pt | 4.2 pt | 1.9 pt | 1.4 pt | 100% 95% | 100% 88%

Retail | Lost demand | 0.02 mo | 0.02 mo | 0.02 mo | 0.02 mo | 0.02 mo | 100% 73% | 100% 81%

Retail | New orders | 4.7% | 7.7% | 9.3% | 7.5% | 10.0% | 100% 77% | 100% 44%

Retail | Output | 3.4% | 4.1% | 4.6% | 6.5% | 7.4% | 100% 23% | 75% 31%

Retail | Price | 0.9% | 1.0% | 1.6% | 1.4% | 1.1% | 100% 89% | 100% 100%

Retail | Shipments | 4.5% | 4.3% | 9.0% | 8.3% | 7.4% | 100% 45% | 100% 44%

Retail | Unit cost | 1.1% | 1.4% | 1.3% | 1.7% | 1.3% | 100% 75% | 100% 94%

Retail | Utilization | 1.3 pt | 1.3 pt | 1.4 pt | 1.8 pt | 2.1 pt | 100% 61% | 100% 69%

Airlines | Order book | 2.4% | 2.8% | 3.2% | 1.6% | 1.1% | 100% 93% | 100% 100%

Airlines | Capacity | 4.6% | 5.9% | 6.5% | 7.4% | 7.9% | 55% 50% | 50% 38%

Airlines | Lead time | 16.0% | 15.0% | 16.0% | 18.8% | 16.2% | 100% 93% | 100% 88%

Airlines | Load factor | 1.3 pt | 2.2 pt | 2.5 pt | 3.6 pt | 2.5 pt | 100% 89% | 100% 94%

Airlines | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Airlines | New orders | 3.6% | 3.6% | 2.0% | 1.7% | 2.5% | 100% 84% | 100% 100%

Airlines | Output | 0.8% | 2.4% | 2.5% | 3.0% | 3.5% | 100% 91% | 100% 88%

Airlines | Price | 1.3% | 2.0% | 2.5% | 2.4% | 1.9% | 100% 64% | 100% 81%

Airlines | Shipments | 1.4% | 1.6% | 1.0% | 1.0% | 1.4% | 100% 86% | 100% 100%

Airlines | Unit cost | 2.0% | 1.5% | 2.4% | 2.4% | 2.2% | 100% 80% | 100% 100%

Airlines | Utilization | 3.6 pt | 3.7 pt | 3.6 pt | 4.1 pt | 3.9 pt | 50% 50% | 50% 50%

Data centers | Order book | 2.9% | 3.0% | 2.4% | 2.4% | 2.8% | 100% 100% | 100% 100%

Data centers | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Capacity | 0.7% | 0.7% | 0.7% | 0.7% | 0.7% | 100% 50% | 100% 50%

Data centers | Capacity announced | 5.1% | 5.1% | 4.6% | 7.1% | 5.3% | 100% 86% | 100% 94%

Data centers | Capacity in use | 0.7% | 0.6% | 0.7% | 0.7% | 0.8% | 100% 68% | 100% 81%

Data centers | Capacity under construction | 1.5% | 1.4% | 1.2% | 1.0% | 1.0% | 100% 84% | 100% 100%

Data centers | Lead time | 4.4% | 4.4% | 4.4% | 4.4% | 4.4% | 100% 75% | 100% 75%

Data centers | New orders | 3.4% | 3.2% | 4.0% | 3.7% | 3.8% | 100% 75% | 100% 100%

Data centers | Output | 0.7% | 0.6% | 0.7% | 0.7% | 0.8% | 100% 68% | 100% 81%

Data centers | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Price | 3.9% | 3.7% | 3.9% | 3.6% | 4.3% | 100% 100% | 100% 100%

Data centers | Shipments | 2.4% | 2.4% | 2.6% | 3.3% | 2.9% | 100% 50% | 100% 75%

Data centers | Unit cost | 1.9% | 1.8% | 1.8% | 1.5% | 1.9% | 100% 100% | 100% 100%

Data centers | Utilization | 0.3 pt | 0.5 pt | 0.6 pt | 0.6 pt | 0.7 pt | 100% 82% | 100% 69%

Hospitals | Order book | 1.3% | 1.4% | 1.6% | 1.8% | 2.1% | 100% 91% | 100% 100%

Hospitals | Capacity | 1.9% | 2.0% | 2.1% | 2.2% | 2.3% | 100% 25% | 56% 25%

Hospitals | Lead time | 5.3% | 5.9% | 6.2% | 6.4% | 6.7% | 100% 100% | 100% 100%

Hospitals | Load factor | 1.0 pt | 1.3 pt | 0.9 pt | 1.7 pt | 1.7 pt | 100% 86% | 100% 94%

Hospitals | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Hospitals | New orders | 1.2% | 1.2% | 1.9% | 1.7% | 2.1% | 100% 89% | 100% 100%

Hospitals | Output | 0.4% | 0.5% | 0.6% | 0.6% | 0.7% | 100% 86% | 100% 88%

Hospitals | Price | 0.2% | 0.4% | 0.2% | 0.8% | 0.3% | 100% 100% | 100% 100%

Hospitals | Shipments | 1.1% | 1.3% | 0.9% | 2.2% | 2.0% | 100% 91% | 100% 94%

Hospitals | Unit cost | 1.4% | 1.3% | 1.2% | 0.8% | 1.2% | 100% 50% | 100% 100%

Hospitals | Utilization | 1.3 pt | 1.4 pt | 1.6 pt | 1.6 pt | 1.6 pt | 100% 25% | 88% 63%

Hotels | Order book | 6.6% | 7.2% | 6.8% | 6.9% | 7.6% | 45% 0% | 88% 50%

Hotels | Capacity | 2.1% | 2.4% | 2.7% | 2.9% | 3.5% | 100% 9% | 69% 0%

Hotels | Lead time | 4.3% | 5.3% | 6.4% | 7.0% | 5.8% | 100% 100% | 100% 100%

Hotels | Load factor | 0.7 pt | 1.0 pt | 1.5 pt | 1.4 pt | 1.4 pt | 100% 95% | 100% 94%

Hotels | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Hotels | New orders | 0.9% | 0.7% | 0.6% | 0.6% | 1.5% | 100% 98% | 100% 100%

Hotels | Output | 1.1% | 1.2% | 1.6% | 1.8% | 2.5% | 98% 30% | 94% 38%

Hotels | Price | 0.2% | 0.2% | 0.4% | 0.4% | 0.3% | 100% 100% | 100% 100%

Hotels | Shipments | 0.7% | 0.9% | 1.6% | 1.1% | 0.9% | 100% 98% | 100% 100%

Hotels | Unit cost | 0.9% | 0.7% | 0.7% | 0.8% | 1.1% | 100% 59% | 100% 100%

Hotels | Utilization | 1.2 pt | 1.4 pt | 1.4 pt | 1.4 pt | 1.6 pt | 100% 75% | 81% 75%

## Band widening

The members omit some uncertainty: weakly identified group means and sector parameters, and model error. The site's run therefore widens each published sector band around its median by a factor per status (PLAN decision 17). This run uses 2.55× history, 2.31× nowcast, 1.86× forecast. Recorded reason: The model's own 90% bands held 68% of the truth (all sector variables) in the 2023-2026 backtest on this world (sector fits on Modal, decision 31); factors from scripts/calibrate_bands.py (PLAN decision 17); held-out dates 0.886-0.909.

### Factors from the backtest

Fitted to the model's own bands in this backtest: what this world would call for now.

coverage, unwidened82% factor, forecast1.29×factor, nowcast1.57×factor, history1.63×

### Coverage on held-out dates

Each row: coverage at one as-of date, with factors fitted to the other dates.

2023-09-3087%2024-09-3089%2025-09-3093%2026-09-3092%

### Factors by sector

Oil and gasforecast0.95×Oil and gasnowcast1.17×Oil and gashistory1.12×Housingforecast2.78×Housingnowcast3.22×Housinghistory3.7×Foodforecast0.623×Foodnowcast0.809×Foodhistory0.894×Chemicalsforecast0.402×Chemicalsnowcast0.608×Chemicalshistory0.737×Steelforecast0.633×Steelnowcast0.997×Steelhistory1.14×Machineryforecast1.66×Machinerynowcast1.87×Machineryhistory1.92×Semiconductorsforecast0.619×Semiconductorsnowcast0.597×Semiconductorshistory0.56×Autosforecast2×Autosnowcast1.99×Autoshistory1.83×Wholesaleforecast1.36×Wholesalenowcast1.98×Wholesalehistory2.28×Retailforecast1.75×Retailnowcast2.1×Retailhistory1.8×Airlinesforecast1.26×Airlinesnowcast1.29×Airlineshistory1.87×Data centersforecast1.12×Data centersnowcast1.35×Data centershistory1.39×Hospitalsforecast1.02×Hospitalsnowcast1.6×Hospitalshistory1.65×Hotelsforecast1.67×Hotelsnowcast2.1×Hotelshistory2.32×

## Parameter recovery

Each row compares fitted with true parameters of the tracked entities in this run's fit, in prior sds.

- Bias: mean of fit minus truth.

- RMSE: root mean square of fit minus truth.

- Correlation: correlation of fit and truth across entities, which shows whether the fit recovers differences between entities.

sector | parameter | definition | bias (prior sd) | RMSE (prior sd) | correlation

Oil and gas | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.05 | 0.31  | 0.59

Oil and gas | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.39 | 0.69  | 0.05

Oil and gas | w w | pass-through of input cost to unit cost (L4)  | 0.19 | 0.51  | -0.10

Oil and gas | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.11 | 0.33  | -0.08

Oil and gas | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.08 | 0.14  | 0.71

Oil and gas | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.49 | 0.64  | 0.71

Oil and gas | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.45 | 0.59  | 0.34

Oil and gas | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | 0.03 | 0.26  | 0.68

Oil and gas | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.28 | 0.48  | 0.41

Oil and gas | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.07 | 0.31  | 0.17

Oil and gas | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.02 | 0.05  | 1.00

Oil and gas | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.12 | 0.43  | 0.01

Oil and gas | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.13 | 0.59  | 0.31

Housing | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 2.16 | 6.85  | -0.40

Housing | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.08 | 0.44  | 0.02

Housing | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.06 | 0.69  | 0.04

Housing | w w | pass-through of input cost to unit cost (L4)  | 0.22 | 0.35  | 0.33

Housing | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.23 | 1.36  | -0.76

Housing | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.15 | 0.38  | -0.13

Housing | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.06 | 0.30  | 0.50

Housing | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.01 | 0.32  | 0.57

Housing | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.33 | 0.65  | 0.57

Housing | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.87 | 1.32  | 0.37

Housing | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.96 | 1.89  | 0.20

Food | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.66 | 0.83  | -0.16

Food | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.25 | 0.48  | 0.47

Food | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.16 | 0.31  | 0.45

Food | w w | pass-through of input cost to unit cost (L4)  | -0.02 | 0.28  | -0.14

Food | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.02 | 0.28  | -0.66

Food | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.09 | 0.26  | -0.16

Food | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.55 | 0.86  | -0.33

Food | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.13 | 0.38  | 0.51

Food | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | -0.00 | 0.02  | 1.00

Food | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.07 | 0.22  | -0.07

Food | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.04 | 0.09  | 0.98

Food | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.26 | 0.35  | 0.60

Food | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.18 | 0.54  | 0.11

Chemicals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.14 | 0.53  | 0.09

Chemicals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.07 | 0.18  | 0.86

Chemicals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.04 | 0.46  | -0.20

Chemicals | w w | pass-through of input cost to unit cost (L4)  | -0.00 | 0.41  | 0.40

Chemicals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.19 | 0.41  | -0.33

Chemicals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.08 | 0.12  | 0.40

Chemicals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.20 | 0.43  | -0.36

Chemicals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.26 | 0.50  | -0.19

Chemicals | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.00 | 0.02  | 1.00

Chemicals | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.14 | 0.34  | 0.37

Chemicals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.03  | 1.00

Chemicals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.19 | 0.32  | 0.61

Chemicals | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.09 | 0.48  | 0.28

Steel | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.35 | 0.87  | 0.10

Steel | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.00 | 0.52  | 0.51

Steel | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.26 | 0.59  | 0.25

Steel | w w | pass-through of input cost to unit cost (L4)  | 0.63 | 0.78  | -0.27

Steel | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.20 | 0.39  | 0.13

Steel | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.27 | 0.38  | 0.36

Steel | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.28 | 0.45  | 0.64

Steel | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.40 | 0.65  | 0.16

Steel | export share export_share | Export share: share of shipments exported.  | 0.06 | 0.32  | 0.60

Steel | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.16 | 0.36  | 0.62

Steel | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.00 | 0.28  | 0.19

Steel | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.02 | 0.25  | 0.35

Steel | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.09 | 0.37  | 0.58

Steel | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.01 | 0.05  | 1.00

Steel | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.27 | 0.46  | 0.69

Steel | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.17 | 0.51  | 0.33

Machinery | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.79 | 1.14  | -0.72

Machinery | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.09 | 1.22  | -0.11

Machinery | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.27 | 0.47  | -0.16

Machinery | w w | pass-through of input cost to unit cost (L4)  | -0.08 | 0.35  | -0.55

Machinery | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.28 | 0.58  | -0.24

Machinery | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.10 | 0.29  | 0.00

Machinery | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.14 | 0.37  | 0.39

Machinery | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.21 | 0.56  | 0.41

Machinery | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.14 | 0.30  | 0.80

Machinery | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.01 | 0.47  | -0.06

Machinery | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.04 | 0.20  | -0.11

Machinery | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.03 | 0.31  | 0.35

Machinery | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.02 | 0.19  | 0.99

Machinery | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.06 | 0.31  | 0.36

Machinery | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.19 | 0.89  | -0.64

Semiconductors | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.15 | 0.34  | -0.07

Semiconductors | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.23 | 0.40  | 0.53

Semiconductors | w w | pass-through of input cost to unit cost (L4)  | 0.06 | 0.29  | -0.42

Semiconductors | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.14 | 0.47  | -0.15

Semiconductors | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.02 | 0.10  | -0.61

Semiconductors | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.20 | 0.36  | 0.23

Semiconductors | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.23 | 0.43  | 0.47

Semiconductors | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -0.53 | 0.55  | -0.08

Semiconductors | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.04 | 0.09  | 0.97

Semiconductors | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.01 | 0.12  | 0.13

Semiconductors | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.04 | 0.53  | -0.29

Semiconductors | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.02  | 1.00

Semiconductors | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.04 | 0.41  | -0.40

Semiconductors | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.01 | 0.46  | -0.01

Autos | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.97 | 1.15  | -0.16

Autos | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.36 | 0.62  | 0.42

Autos | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.69 | 1.35  | -0.13

Autos | w w | pass-through of input cost to unit cost (L4)  | 0.38 | 1.00  | -0.38

Autos | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -1.47 | 2.38  | 0.02

Autos | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.21 | 0.47  | 0.26

Autos | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.34 | 2.14  | -0.63

Autos | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.38 | 0.79  | -0.25

Autos | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.11 | 0.27  | 0.90

Autos | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.38 | 1.04  | 0.40

Autos | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.07 | 1.50  | -0.11

Autos | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.16 | 0.23  | 0.97

Autos | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 1.94 | 2.32  | -0.57

Autos | m_0 m0 | Starting markup: markup in the first month, log scale.  | -1.31 | 1.96  | 0.79

Wholesale | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.46 | 1.00  | 0.77

Wholesale | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.25 | 0.43  | 0.53

Wholesale | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.26 | 0.50  | -0.22

Wholesale | w w | pass-through of input cost to unit cost (L4)  | 0.28 | 0.49  | -0.37

Wholesale | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.32 | 0.66  | -0.66

Wholesale | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.02 | 0.22  | 0.23

Wholesale | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.30 | 0.57  | 0.07

Wholesale | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.36 | 0.47  | -0.73

Wholesale | export share export_share | Export share: share of shipments exported.  | 0.02 | 0.26  | 0.52

Wholesale | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.09 | 0.22  | 0.97

Wholesale | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.52 | 0.81  | 0.25

Wholesale | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.18 | 0.47  | -0.35

Retail | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.53 | 0.78  | -0.04

Retail | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.09 | 0.19  | 0.91

Retail | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.67 | 0.97  | -0.58

Retail | w w | pass-through of input cost to unit cost (L4)  | 0.33 | 0.37  | 0.15

Retail | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.11 | 0.37  | 0.38

Retail | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.01 | 0.26  | 0.68

Retail | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.34 | 0.53  | 0.40

Retail | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.36 | 0.41  | 0.75

Retail | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.04 | 0.21  | 0.95

Retail | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.08 | 0.63  | 0.13

Retail | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.02 | 0.56  | -0.42

Airlines | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.88 | 0.93  | -0.44

Airlines | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.51 | 0.60  | 0.68

Airlines | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.29 | 0.35  | 0.91

Airlines | w w | pass-through of input cost to unit cost (L4)  | -0.31 | 0.46  | -0.30

Airlines | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.03 | 0.19  | 0.68

Airlines | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.40 | 0.42  | 0.94

Airlines | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.12 | 0.35  | 0.46

Airlines | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.15 | 0.33  | 0.79

Airlines | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.09 | 0.26  | 0.28

Airlines | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.04 | 0.04  | 1.00

Airlines | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.09 | 0.19  | 0.93

Airlines | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.23 | 0.47  | -0.69

Data centers | w w | pass-through of input cost to unit cost (L4)  | -0.07 | 0.32  | 0.45

Data centers | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.18 | 0.36  | 0.10

Data centers | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 1.54 | 1.57  | 0.23

Data centers | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.58 | 0.67  | 0.13

Data centers | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.12 | 0.27  | 0.11

Data centers | u^norm u_norm | Normal occupancy: share of capacity leased in a normal month (L18).  | -1.33 | 1.36  | 0.85

Data centers | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -1.20 | 1.20  | 0.94

Data centers | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.01  | 1.00

Data centers | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.01 | 0.45  | 0.01

Data centers | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.19 | 0.29  | -0.39

Data centers | z_0 z0 | Starting utilization: utilization in the first month relative to normal, logit scale.  | 1.42 | 1.47  | -0.30

Hospitals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.02 | 0.40  | 0.30

Hospitals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.01 | 0.34  | 0.49

Hospitals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.28 | 0.56  | 0.51

Hospitals | w w | pass-through of input cost to unit cost (L4)  | 0.16 | 0.23  | 0.58

Hospitals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.22 | 0.62  | -0.33

Hospitals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.12 | 0.17  | 0.61

Hospitals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.13 | 0.36  | 0.46

Hospitals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.10 | 0.43  | 0.41

Hospitals | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.11 | 0.39  | 0.53

Hospitals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.06 | 0.09  | 0.99

Hospitals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.01 | 0.20  | -0.09

Hospitals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.17 | 0.36  | 0.41

Hotels | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.09 | 0.90  | -0.09

Hotels | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -1.21 | 2.04  | -0.17

Hotels | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.46 | 0.98  | -0.19

Hotels | w w | pass-through of input cost to unit cost (L4)  | 0.32 | 0.52  | 0.33

Hotels | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.10 | 0.31  | -0.31

Hotels | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.42 | 0.46  | 0.39

Hotels | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.24 | 0.44  | 0.69

Hotels | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.80 | 1.12  | 0.43

Hotels | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.18 | 0.26  | 0.72

Hotels | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.02  | 1.00

Hotels | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.02 | 0.07  | 0.98

Hotels | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.09 | 0.17  | 0.58
