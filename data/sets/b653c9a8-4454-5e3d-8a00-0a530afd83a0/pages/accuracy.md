<!-- Evaluation › Against ground truth, for forecast b653c9a8-4454-5e3d-8a00-0a530afd83a0; the page: https://mitdbg.github.io/model-2-nowcasting/accuracy.html?set=b653c9a8-4454-5e3d-8a00-0a530afd83a0; inputs fc5b4b0a43bb9b3c -->

World shown World seed 20261107 (the bundle's only world)

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Against ground truth

No ground truth is available for real worlds.

The backtest runs Model 2 at each as-of date on the synthetic world, using only observations published by then and re-estimating each time, and scores every sector total against the truth. The backtest's runs widen their bands by 2.55× (history), 2.31× (nowcast), 1.86× (forecast), as the site's run does. Backtest workspace: /Users/michjc/lincoln/work/2026/10/m2-site-ws/units. As-of dates: 2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30.

- Error of the member median, in one of three units: for most quantities, the absolute log error, shown as a percentage; for utilization and load factor, the absolute difference in percentage points; for overdue orders, phantom orders and lost demand, which are often near zero, the absolute difference in months of the sector's output ("mo"). None where the truth or the median is zero.

- Mean error by horizon averages these over all sectors and quantities.

- Coverage: share of months with the truth inside the 90% band, for the bands as published (widened, see Band widening below) and for the model's own bands before widening ("unwidened"). Green: consistent with 90% or above given the number of values scored (within two binomial standard errors); amber: within four; red: further below. Coverage near 100% is not marked: it means the bands are wide, not wrong. Cells with fewer than 8 values are not colored.

## Errors by horizon

horizon | mean error | coverage, published | coverage, unwidened | values

history (last 12 months) | 0.041 | 96% | 78% | 7,876

nowcast | 0.043 | 96% | 81% | 716

forecast, 3 months ahead | 0.047 | 96% | 86% | 716

forecast, 6 months ahead | 0.047 | 96% | 89% | 716

forecast, 12 months ahead | 0.052 | 97% | 93% | 716

## Errors by sector and quantity

Error at each horizon, then coverage pooled over the horizons, since each horizon has only one value per as-of date: history (the last 12 months before each as-of date) and ahead (the nowcast and the 3-, 6- and 12-month forecasts). Coverage cells show published bands, then unwidened in gray; most rest on 44 values (history) and 16 (ahead), and hovering a cell gives its count.

sector | quantity | history (last 12 months) | nowcast | forecast, 3 months ahead | forecast, 6 months ahead | forecast, 12 months ahead | coverage, history | coverage, ahead

Oil and gas | Order book | 4.8% | 6.5% | 5.3% | 4.6% | 4.7% | 100% 84% | 100% 100%

Oil and gas | Overdue orders | 0.05 mo | 0.06 mo | 0.05 mo | 0.03 mo | 0.02 mo | 100% 73% | 100% 94%

Oil and gas | Capacity | 0.8% | 0.8% | 0.9% | 1.2% | 1.9% | 100% 75% | 100% 100%

Oil and gas | Capacity announced | 9.8% | 11.0% | 7.8% | 5.7% | 5.7% | 100% 98% | 100% 100%

Oil and gas | Capacity under construction | 4.4% | 5.0% | 7.0% | 6.5% | 4.7% | 100% 89% | 100% 100%

Oil and gas | Finished inventory | 0.15 mo | 0.14 mo | 0.12 mo | 0.06 mo | 0.07 mo | 95% 27% | 100% 81%

Oil and gas | Input inventory | 1.4% | 1.3% | 2.0% | 4.1% | 3.5% | 100% 100% | 100% 100%

Oil and gas | Lead time | 17.5% | 21.2% | 21.2% | 15.1% | 14.2% | 100% 100% | 100% 100%

Oil and gas | New orders | 1.9% | 3.6% | 2.7% | 4.5% | 5.3% | 100% 84% | 100% 94%

Oil and gas | Output | 1.1% | 1.9% | 3.7% | 4.3% | 3.1% | 100% 57% | 100% 81%

Oil and gas | Phantom orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 100% 84% | 100% 100%

Oil and gas | Price | 2.2% | 1.1% | 1.3% | 1.0% | 2.0% | 100% 98% | 100% 100%

Oil and gas | Shipments | 1.4% | 2.4% | 2.2% | 2.0% | 2.4% | 100% 86% | 100% 88%

Oil and gas | Unit cost | 4.0% | 3.9% | 4.1% | 4.3% | 4.1% | 75% 48% | 75% 56%

Oil and gas | Utilization | 0.4 pt | 1.1 pt | 2.4 pt | 2.7 pt | 1.9 pt | 100% 77% | 100% 81%

Housing | Order book | 1.3% | 1.0% | 1.2% | 1.2% | 1.5% | 100% 100% | 100% 100%

Housing | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Housing | Capacity | 3.4% | 3.7% | 3.9% | 3.8% | 3.9% | 91% 52% | 75% 50%

Housing | Finished inventory | 0.17 mo | 0.14 mo | 0.12 mo | 0.11 mo | 0.08 mo | 100% 91% | 100% 100%

Housing | Input inventory | 3.2% | 4.3% | 4.1% | 4.2% | 3.4% | 100% 100% | 100% 100%

Housing | Lead time | 3.6% | 3.4% | 3.0% | 2.3% | 1.2% | 100% 100% | 100% 100%

Housing | New orders | 1.5% | 1.9% | 0.2% | 0.6% | 1.3% | 100% 100% | 100% 100%

Housing | Output | 1.0% | 1.3% | 1.0% | 1.4% | 0.9% | 100% 95% | 100% 100%

Housing | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Housing | Price | 0.7% | 0.9% | 1.2% | 1.7% | 1.6% | 100% 100% | 100% 100%

Housing | Shipments | 0.6% | 0.8% | 0.7% | 1.0% | 0.8% | 100% 98% | 100% 100%

Housing | Unit cost | 0.9% | 0.5% | 0.5% | 0.6% | 1.0% | 100% 100% | 100% 100%

Housing | Utilization | 3.2 pt | 3.2 pt | 3.3 pt | 3.2 pt | 3.1 pt | 98% 50% | 100% 56%

Food | Order book | 3.4% | 4.3% | 3.9% | 6.3% | 6.6% | 100% 100% | 100% 100%

Food | Overdue orders | 0.03 mo | 0.03 mo | 0.03 mo | 0.03 mo | 0.05 mo | 100% 100% | 100% 100%

Food | Capacity | 1.0% | 1.1% | 1.4% | 1.6% | 2.0% | 98% 64% | 63% 50%

Food | Finished inventory | 0.10 mo | 0.11 mo | 0.13 mo | 0.12 mo | 0.16 mo | 100% 100% | 100% 100%

Food | Input inventory | 1.8% | 1.9% | 1.4% | 1.2% | 1.2% | 100% 100% | 100% 100%

Food | Lead time | 22.4% | 22.5% | 26.0% | 30.9% | 42.3% | 100% 100% | 100% 100%

Food | New orders | 1.1% | 1.6% | 1.5% | 3.1% | 2.1% | 100% 100% | 100% 100%

Food | Output | 0.6% | 0.8% | 1.4% | 1.5% | 2.6% | 100% 100% | 100% 100%

Food | Phantom orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.02 mo | 89% 43% | 94% 63%

Food | Price | 2.6% | 1.5% | 1.8% | 2.2% | 4.0% | 100% 100% | 100% 100%

Food | Shipments | 0.9% | 0.9% | 1.3% | 1.5% | 3.4% | 100% 98% | 100% 100%

Food | Unit cost | 3.9% | 4.0% | 4.4% | 4.0% | 4.7% | 50% 43% | 94% 75%

Food | Utilization | 1.1 pt | 1.4 pt | 2.0 pt | 2.2 pt | 3.0 pt | 100% 75% | 100% 88%

Chemicals | Order book | 1.8% | 1.3% | 0.8% | 1.9% | 1.6% | 100% 80% | 100% 100%

Chemicals | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% 100%

Chemicals | Capacity | 0.6% | 0.8% | 0.6% | 0.6% | 1.0% | 100% 80% | 100% 94%

Chemicals | Finished inventory | 0.06 mo | 0.03 mo | 0.04 mo | 0.04 mo | 0.03 mo | 100% 84% | 100% 100%

Chemicals | Input inventory | 1.2% | 1.1% | 0.9% | 1.4% | 2.3% | 100% 100% | 100% 100%

Chemicals | Lead time | 4.5% | 4.1% | 4.9% | 4.6% | 5.1% | 100% 100% | 100% 100%

Chemicals | New orders | 1.1% | 1.9% | 1.7% | 1.3% | 2.0% | 100% 95% | 100% 100%

Chemicals | Output | 0.6% | 0.7% | 1.1% | 1.2% | 2.1% | 100% 100% | 100% 100%

Chemicals | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 75% | 100% 88%

Chemicals | Price | 6.7% | 6.5% | 7.2% | 7.6% | 6.4% | 66% 0% | 94% 44%

Chemicals | Shipments | 1.1% | 0.4% | 1.7% | 1.6% | 2.0% | 100% 93% | 100% 100%

Chemicals | Unit cost | 7.4% | 7.4% | 7.5% | 7.4% | 7.2% | 30% 0% | 81% 38%

Chemicals | Utilization | 0.4 pt | 0.3 pt | 0.9 pt | 1.2 pt | 1.7 pt | 100% 91% | 100% 100%

Steel | Order book | 1.6% | 2.4% | 2.0% | 1.7% | 2.3% | 100% 95% | 100% 94%

Steel | Overdue orders | 0.02 mo | 0.03 mo | 0.02 mo | 0.02 mo | 0.02 mo | 100% 70% | 100% 94%

Steel | Capacity | 0.4% | 0.5% | 0.8% | 1.1% | 1.8% | 100% 100% | 100% 94%

Steel | Finished inventory | 0.07 mo | 0.07 mo | 0.06 mo | 0.07 mo | 0.06 mo | 100% 50% | 100% 75%

Steel | Input inventory | 3.2% | 3.2% | 3.3% | 2.4% | 2.5% | 100% 100% | 100% 100%

Steel | Lead time | 2.0% | 2.2% | 2.0% | 2.6% | 2.1% | 100% 93% | 100% 100%

Steel | New orders | 1.7% | 1.9% | 1.1% | 2.3% | 4.3% | 100% 91% | 100% 100%

Steel | Output | 0.4% | 0.4% | 0.6% | 0.5% | 1.0% | 100% 100% | 100% 100%

Steel | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 84% | 88% 81%

Steel | Price | 2.2% | 2.4% | 2.2% | 1.0% | 2.5% | 100% 61% | 100% 94%

Steel | Shipments | 0.7% | 0.6% | 1.0% | 1.7% | 1.1% | 100% 98% | 100% 100%

Steel | Unit cost | 2.9% | 2.8% | 2.8% | 3.0% | 3.5% | 100% 50% | 100% 88%

Steel | Utilization | 0.3 pt | 0.4 pt | 0.4 pt | 0.6 pt | 1.2 pt | 100% 95% | 100% 100%

Machinery | Order book | 2.7% | 2.9% | 2.9% | 2.8% | 3.6% | 100% 98% | 100% 94%

Machinery | Overdue orders | 0.03 mo | 0.03 mo | 0.02 mo | 0.02 mo | 0.02 mo | 100% 100% | 100% 100%

Machinery | Capacity | 4.3% | 3.8% | 4.0% | 4.3% | 4.9% | 75% 41% | 75% 50%

Machinery | Finished inventory | 0.41 mo | 0.33 mo | 0.23 mo | 0.13 mo | 0.06 mo | 100% 100% | 100% 100%

Machinery | Input inventory | 11.0% | 11.2% | 11.7% | 13.1% | 13.8% | 100% 100% | 100% 100%

Machinery | Lead time | 2.9% | 2.7% | 2.2% | 3.3% | 4.9% | 100% 100% | 100% 100%

Machinery | New orders | 4.9% | 4.7% | 5.3% | 5.8% | 6.1% | 98% 43% | 100% 88%

Machinery | Output | 5.9% | 5.4% | 8.4% | 7.9% | 7.2% | 100% 80% | 100% 100%

Machinery | Phantom orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 100% 68% | 81% 50%

Machinery | Price | 2.9% | 4.7% | 2.9% | 2.9% | 2.7% | 100% 100% | 100% 100%

Machinery | Shipments | 4.5% | 4.3% | 4.9% | 5.6% | 5.6% | 84% 27% | 94% 50%

Machinery | Unit cost | 3.5% | 3.9% | 3.9% | 3.8% | 3.7% | 100% 50% | 100% 81%

Machinery | Utilization | 1.4 pt | 1.3 pt | 3.4 pt | 2.8 pt | 2.3 pt | 100% 95% | 100% 100%

Semiconductors | Order book | 2.2% | 1.8% | 2.5% | 4.0% | 5.3% | 100% 100% | 100% 100%

Semiconductors | Overdue orders | 0.02 mo | 0.02 mo | 0.04 mo | 0.08 mo | 0.16 mo | 100% 100% | 88% 87%

Semiconductors | Capacity | 0.4% | 0.3% | 0.5% | 0.6% | 1.0% | 100% 100% | 100% 100%

Semiconductors | Capacity announced | 8.3% | 9.0% | 7.8% | 11.1% | 6.4% | 100% 100% | 100% 100%

Semiconductors | Capacity under construction | 5.0% | 6.6% | 7.4% | 7.9% | 8.6% | 100% 100% | 100% 100%

Semiconductors | Finished inventory | 0.32 mo | 0.21 mo | 0.12 mo | 0.07 mo | 0.07 mo | 100% 100% | 100% 100%

Semiconductors | Input inventory | 2.1% | 2.3% | 2.5% | 2.4% | 1.4% | 100% 100% | 100% 100%

Semiconductors | Lead time | 9.5% | 12.2% | 14.7% | 14.0% | 14.2% | 100% 100% | 100% 100%

Semiconductors | New orders | 2.1% | 1.6% | 2.9% | 2.5% | 3.5% | 100% 98% | 100% 100%

Semiconductors | Output | 1.6% | 1.4% | 2.0% | 1.0% | 1.2% | 100% 98% | 100% 100%

Semiconductors | Phantom orders | 0.10 mo | 0.09 mo | 0.09 mo | 0.13 mo | 0.20 mo | 100% 68% | 100% 100%

Semiconductors | Price | 1.7% | 2.3% | 3.2% | 2.9% | 2.7% | 100% 100% | 100% 100%

Semiconductors | Shipments | 0.8% | 0.6% | 0.8% | 1.0% | 1.0% | 100% 100% | 100% 100%

Semiconductors | Unit cost | 4.2% | 4.4% | 4.3% | 4.5% | 4.5% | 75% 25% | 94% 31%

Semiconductors | Utilization | 1.0 pt | 0.9 pt | 1.5 pt | 0.9 pt | 1.1 pt | 100% 100% | 100% 100%

Autos | Order book | 2.1% | 3.1% | 4.3% | 2.3% | 2.3% | 100% 73% | 100% 94%

Autos | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Autos | Capacity | 1.1% | 1.0% | 1.8% | 1.4% | 1.9% | 95% 50% | 100% 69%

Autos | Finished inventory | 0.07 mo | 0.05 mo | 0.05 mo | 0.04 mo | 0.03 mo | 100% 75% | 100% 94%

Autos | Input inventory | 2.9% | 3.0% | 2.9% | 2.4% | 2.6% | 100% 100% | 100% 100%

Autos | Lead time | 4.2% | 5.6% | 9.2% | 11.2% | 11.6% | 100% 100% | 100% 100%

Autos | New orders | 1.5% | 1.7% | 2.3% | 2.1% | 1.1% | 100% 91% | 100% 100%

Autos | Output | 0.7% | 0.8% | 1.7% | 2.0% | 1.3% | 100% 82% | 100% 94%

Autos | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 80% | 88% 88%

Autos | Price | 2.1% | 2.8% | 3.9% | 5.3% | 4.5% | 100% 75% | 100% 81%

Autos | Shipments | 1.1% | 0.8% | 2.0% | 0.9% | 2.3% | 100% 91% | 100% 100%

Autos | Unit cost | 7.9% | 8.2% | 8.3% | 8.7% | 8.1% | 39% 25% | 56% 31%

Autos | Utilization | 0.6 pt | 0.6 pt | 1.6 pt | 1.4 pt | 1.3 pt | 100% 73% | 100% 100%

Wholesale | Order book | 1.6% | 1.5% | 1.7% | 2.7% | 1.9% | 100% 93% | 100% 100%

Wholesale | Capacity | 1.6% | 1.8% | 2.3% | 2.1% | 2.5% | 100% 98% | 100% 88%

Wholesale | Finished inventory | 0.04 mo | 0.06 mo | 0.09 mo | 0.14 mo | 0.18 mo | 100% 93% | 100% 81%

Wholesale | Lead time | 7.8% | 5.5% | 5.1% | 3.8% | 6.0% | 100% 100% | 100% 100%

Wholesale | Load factor | 1.5 pt | 1.5 pt | 1.7 pt | 1.5 pt | 0.6 pt | 100% 91% | 100% 100%

Wholesale | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 100% 100% | 100% 100%

Wholesale | New orders | 1.6% | 1.6% | 1.7% | 2.4% | 1.4% | 100% 98% | 100% 100%

Wholesale | Output | 1.5% | 1.9% | 2.6% | 1.8% | 1.8% | 100% 86% | 100% 88%

Wholesale | Price | 2.8% | 3.4% | 3.3% | 3.1% | 5.0% | 100% 57% | 100% 88%

Wholesale | Shipments | 1.6% | 1.6% | 1.0% | 2.1% | 2.0% | 100% 95% | 100% 100%

Wholesale | Unit cost | 1.4% | 1.5% | 1.7% | 1.5% | 3.5% | 100% 100% | 100% 100%

Wholesale | Utilization | 1.3 pt | 1.1 pt | 1.2 pt | 1.1 pt | 1.6 pt | 100% 98% | 100% 100%

Retail | Order book | 4.1% | 5.5% | 8.8% | 7.7% | 6.2% | 100% 82% | 100% 81%

Retail | Capacity | 4.2% | 4.4% | 4.5% | 6.0% | 6.8% | 98% 50% | 63% 50%

Retail | Finished inventory | 1.28 mo | 1.57 mo | 1.75 mo | 1.94 mo | 2.35 mo | 50% 2% | 44% 0%

Retail | Lead time | 16.7% | 19.4% | 22.3% | 23.1% | 24.8% | 100% 100% | 100% 100%

Retail | Load factor | 4.6 pt | 5.5 pt | 7.8 pt | 5.7 pt | 7.8 pt | 98% 77% | 88% 69%

Retail | Lost demand | 0.01 mo | 0.02 mo | 0.02 mo | 0.01 mo | 0.01 mo | 100% 45% | 100% 75%

Retail | New orders | 4.0% | 4.3% | 7.5% | 7.5% | 5.4% | 100% 89% | 100% 81%

Retail | Output | 2.2% | 2.1% | 1.7% | 0.4% | 1.2% | 100% 80% | 100% 88%

Retail | Price | 0.7% | 0.8% | 1.6% | 2.1% | 3.8% | 100% 95% | 100% 100%

Retail | Shipments | 3.8% | 4.0% | 8.0% | 6.8% | 7.4% | 100% 91% | 100% 81%

Retail | Unit cost | 2.3% | 2.0% | 2.6% | 3.1% | 3.3% | 100% 77% | 100% 100%

Retail | Utilization | 2.5 pt | 2.9 pt | 4.3 pt | 4.5 pt | 5.0 pt | 100% 39% | 100% 50%

Airlines | Order book | 3.0% | 3.0% | 4.2% | 2.9% | 3.6% | 100% 91% | 100% 100%

Airlines | Capacity | 2.9% | 3.2% | 3.3% | 2.5% | 2.4% | 100% 48% | 100% 69%

Airlines | Lead time | 18.2% | 16.8% | 17.3% | 19.6% | 17.4% | 100% 100% | 100% 100%

Airlines | Load factor | 1.1 pt | 1.1 pt | 2.4 pt | 2.1 pt | 1.6 pt | 100% 89% | 100% 94%

Airlines | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 85% | 100% 100%

Airlines | New orders | 2.7% | 1.4% | 1.7% | 0.8% | 1.3% | 100% 95% | 100% 100%

Airlines | Output | 1.0% | 1.4% | 1.4% | 1.9% | 0.9% | 98% 68% | 100% 100%

Airlines | Price | 0.6% | 1.5% | 1.5% | 1.7% | 1.1% | 100% 95% | 100% 100%

Airlines | Shipments | 1.1% | 1.1% | 1.9% | 1.8% | 1.6% | 100% 95% | 100% 100%

Airlines | Unit cost | 1.8% | 1.9% | 1.9% | 2.2% | 2.1% | 100% 80% | 100% 81%

Airlines | Utilization | 3.2 pt | 3.1 pt | 3.0 pt | 3.5 pt | 3.2 pt | 100% 43% | 94% 50%

Data centers | Order book | 2.9% | 2.9% | 3.2% | 3.4% | 3.9% | 100% 100% | 100% 100%

Data centers | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Capacity | 1.9% | 1.9% | 1.9% | 1.9% | 1.8% | 50% 5% | 44% 13%

Data centers | Capacity announced | 6.0% | 4.3% | 7.5% | 2.5% | 5.6% | 100% 89% | 100% 100%

Data centers | Capacity in use | 1.0% | 1.1% | 1.1% | 1.1% | 1.2% | 89% 39% | 81% 56%

Data centers | Capacity under construction | 2.8% | 2.7% | 2.7% | 2.7% | 2.4% | 100% 32% | 100% 50%

Data centers | Lead time | 1.2% | 1.2% | 1.1% | 1.1% | 1.1% | 100% 100% | 100% 100%

Data centers | New orders | 4.1% | 4.1% | 5.2% | 5.0% | 8.6% | 100% 77% | 100% 81%

Data centers | Output | 1.0% | 1.1% | 1.1% | 1.1% | 1.2% | 89% 39% | 81% 56%

Data centers | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Price | 4.0% | 4.0% | 4.9% | 5.1% | 5.2% | 100% 100% | 100% 100%

Data centers | Shipments | 2.9% | 3.4% | 3.6% | 4.1% | 4.5% | 95% 41% | 88% 63%

Data centers | Unit cost | 2.4% | 2.3% | 2.2% | 1.6% | 1.3% | 100% 100% | 100% 100%

Data centers | Utilization | 0.8 pt | 0.9 pt | 1.1 pt | 1.2 pt | 1.4 pt | 100% 27% | 100% 25%

Hospitals | Order book | 1.6% | 1.4% | 1.9% | 1.8% | 1.1% | 100% 80% | 100% 100%

Hospitals | Capacity | 1.5% | 1.8% | 2.1% | 2.2% | 2.6% | 77% 75% | 75% 56%

Hospitals | Lead time | 3.9% | 3.8% | 4.3% | 5.1% | 4.9% | 100% 100% | 100% 100%

Hospitals | Load factor | 1.5 pt | 1.8 pt | 1.5 pt | 1.3 pt | 1.9 pt | 100% 64% | 100% 88%

Hospitals | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 95% 82% | 100% 100%

Hospitals | New orders | 1.8% | 1.7% | 2.3% | 1.6% | 1.5% | 100% 61% | 100% 100%

Hospitals | Output | 0.5% | 0.6% | 0.8% | 1.0% | 1.3% | 100% 75% | 100% 81%

Hospitals | Price | 0.2% | 0.1% | 0.8% | 0.7% | 0.6% | 100% 100% | 100% 100%

Hospitals | Shipments | 1.7% | 1.8% | 1.6% | 1.1% | 1.7% | 100% 66% | 100% 94%

Hospitals | Unit cost | 0.7% | 1.0% | 1.3% | 1.3% | 1.1% | 100% 93% | 100% 100%

Hospitals | Utilization | 1.1 pt | 1.2 pt | 1.2 pt | 1.2 pt | 1.4 pt | 100% 75% | 100% 81%

Hotels | Order book | 13.0% | 12.9% | 13.3% | 13.7% | 13.5% | 0% 0% | 50% 19%

Hotels | Capacity | 2.7% | 2.9% | 3.0% | 3.1% | 3.3% | 75% 50% | 56% 50%

Hotels | Lead time | 6.5% | 6.1% | 5.9% | 7.0% | 7.4% | 100% 100% | 100% 100%

Hotels | Load factor | 3.3 pt | 3.4 pt | 3.5 pt | 3.9 pt | 3.9 pt | 70% 0% | 94% 50%

Hotels | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% –

Hotels | New orders | 4.2% | 4.2% | 4.5% | 4.6% | 4.8% | 84% 5% | 100% 94%

Hotels | Output | 0.7% | 0.8% | 1.1% | 1.3% | 1.6% | 98% 50% | 88% 69%

Hotels | Price | 0.4% | 0.3% | 0.6% | 0.5% | 0.6% | 100% 91% | 100% 100%

Hotels | Shipments | 4.2% | 4.4% | 4.3% | 4.9% | 4.7% | 80% 2% | 94% 69%

Hotels | Unit cost | 1.9% | 2.0% | 2.0% | 2.1% | 2.3% | 93% 11% | 100% 94%

Hotels | Utilization | 2.2 pt | 2.2 pt | 2.1 pt | 2.2 pt | 2.3 pt | 75% 32% | 81% 56%

## Band widening

The members omit some uncertainty: weakly identified group means and sector parameters, and model error. The site's run therefore widens each published sector band around its median by a factor per status (PLAN decision 17). This run uses 2.55× history, 2.31× nowcast, 1.86× forecast. Recorded reason: The model's own 90% bands held 68% of the truth (all sector variables) in the 2023-2026 backtest on this world (sector fits on Modal, decision 31); factors from scripts/calibrate_bands.py (PLAN decision 17); held-out dates 0.886-0.909.

### Factors from the backtest

Fitted to the model's own bands in this backtest: what this world would call for now.

coverage, unwidened84% factor, forecast1.08×factor, nowcast1.57×factor, history1.65×

### Coverage on held-out dates

Each row: coverage at one as-of date, with factors fitted to the other dates.

2023-09-3094%2024-09-3088%2025-09-3092%2026-09-3086%

### Factors by sector

Oil and gasforecast0.747×Oil and gasnowcast1.35×Oil and gashistory1.42×Housingforecast0.638×Housingnowcast0.817×Housinghistory0.898×Foodforecast0.875×Foodnowcast1.28×Foodhistory1.19×Chemicalsforecast0.908×Chemicalsnowcast2.12×Chemicalshistory2.39×Steelforecast0.772×Steelnowcast1.09×Steelhistory1.26×Machineryforecast1.11×Machinerynowcast1.27×Machineryhistory1.59×Semiconductorsforecast0.559×Semiconductorsnowcast0.644×Semiconductorshistory0.784×Autosforecast0.986×Autosnowcast1.29×Autoshistory1.54×Wholesaleforecast0.648×Wholesalenowcast0.905×Wholesalehistory0.883×Retailforecast1.73×Retailnowcast2.3×Retailhistory1.71×Airlinesforecast0.937×Airlinesnowcast1.06×Airlineshistory1.46×Data centersforecast1.79×Data centersnowcast1.93×Data centershistory1.9×Hospitalsforecast0.74×Hospitalsnowcast1.33×Hospitalshistory1.29×Hotelsforecast2.05×Hotelsnowcast3.42×Hotelshistory3.65×

## Parameter recovery

Each row compares fitted with true parameters of the tracked entities in this run's fit, in prior sds.

- Bias: mean of fit minus truth.

- RMSE: root mean square of fit minus truth.

- Correlation: correlation of fit and truth across entities, which shows whether the fit recovers differences between entities.

sector | parameter | definition | bias (prior sd) | RMSE (prior sd) | correlation

Oil and gas | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.14 | 0.47  | 0.55

Oil and gas | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.35 | 0.95  | 0.35

Oil and gas | w w | pass-through of input cost to unit cost (L4)  | 0.08 | 0.21  | 0.71

Oil and gas | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.20 | 0.40  | -0.67

Oil and gas | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.22 | 0.32  | 0.37

Oil and gas | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.04 | 0.53  | 0.82

Oil and gas | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.00 | 0.38  | -0.46

Oil and gas | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | 0.40 | 0.48  | -0.24

Oil and gas | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.19 | 0.37  | 0.56

Oil and gas | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.01 | 0.24  | 0.51

Oil and gas | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.02 | 0.06  | 1.00

Oil and gas | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.24 | 0.32  | 0.78

Oil and gas | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.23 | 0.46  | 0.66

Housing | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.24 | 0.38  | 0.38

Housing | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.03 | 0.40  | -0.04

Housing | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.26 | 0.32  | 0.93

Housing | w w | pass-through of input cost to unit cost (L4)  | 0.04 | 0.48  | -0.03

Housing | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.18 | 0.31  | 0.30

Housing | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.15 | 0.28  | 0.71

Housing | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.02 | 0.18  | 0.90

Housing | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.10 | 0.23  | 0.61

Housing | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.17 | 0.45  | 0.74

Housing | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.07 | 0.31  | 0.66

Housing | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.07 | 0.35  | 0.87

Food | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.36 | 0.78  | 0.14

Food | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.01 | 0.43  | 0.38

Food | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.09 | 0.32  | -0.36

Food | w w | pass-through of input cost to unit cost (L4)  | 0.11 | 0.20  | 0.35

Food | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.16 | 0.43  | -0.45

Food | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.06 | 0.20  | 0.03

Food | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.15 | 0.40  | 0.34

Food | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.10 | 0.34  | 0.40

Food | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | -0.01 | 0.03  | 1.00

Food | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.08 | 0.31  | 0.43

Food | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.04 | 0.09  | 0.99

Food | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.04 | 0.34  | 0.48

Food | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.43 | 0.60  | 0.25

Chemicals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.06 | 0.76  | 0.18

Chemicals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.34 | 0.44  | 0.86

Chemicals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.28 | 0.35  | 0.92

Chemicals | w w | pass-through of input cost to unit cost (L4)  | -0.04 | 0.30  | -0.09

Chemicals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.49 | 0.66  | -0.28

Chemicals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.17 | 0.21  | 0.50

Chemicals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.59 | 0.81  | 0.63

Chemicals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.29 | 0.50  | 0.60

Chemicals | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | -0.01 | 0.01  | 1.00

Chemicals | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.25 | 0.40  | 0.33

Chemicals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.05  | 1.00

Chemicals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.37 | 0.46  | 0.48

Chemicals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.43 | 0.72  | -0.25

Steel | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.23 | 0.89  | 0.36

Steel | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.11 | 0.27  | 0.89

Steel | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.14 | 0.45  | 0.24

Steel | w w | pass-through of input cost to unit cost (L4)  | 0.45 | 0.59  | 0.08

Steel | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.11 | 0.49  | 0.65

Steel | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.19 | 0.24  | 0.70

Steel | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.25 | 0.52  | 0.68

Steel | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.18 | 0.47  | 0.46

Steel | export share export_share | Export share: share of shipments exported.  | 0.20 | 0.47  | 0.38

Steel | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.17 | 0.36  | 0.55

Steel | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.05 | 0.27  | 0.43

Steel | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.01 | 0.27  | 0.31

Steel | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.18 | 0.69  | 0.19

Steel | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.06  | 1.00

Steel | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.01 | 0.35  | 0.42

Steel | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.12 | 0.48  | 0.05

Machinery | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -1.45 | 1.54  | -0.61

Machinery | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.47 | 0.69  | -0.24

Machinery | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.15 | 0.42  | 0.30

Machinery | w w | pass-through of input cost to unit cost (L4)  | 0.45 | 0.47  | 0.97

Machinery | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.24 | 0.43  | -0.90

Machinery | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.25 | 0.38  | 0.04

Machinery | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.30 | 0.38  | 0.83

Machinery | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.02 | 0.32  | 0.58

Machinery | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.24 | 0.40  | 0.20

Machinery | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.01 | 0.19  | 0.03

Machinery | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.01 | 0.17  | 0.30

Machinery | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.10 | 0.53  | -0.11

Machinery | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.08  | 1.00

Machinery | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.10 | 0.49  | 0.02

Machinery | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.03 | 0.25  | 0.66

Semiconductors | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.12 | 0.49  | 0.04

Semiconductors | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.31 | 0.40  | 0.48

Semiconductors | w w | pass-through of input cost to unit cost (L4)  | -0.02 | 0.35  | 0.30

Semiconductors | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.25 | 0.40  | -0.13

Semiconductors | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.10 | 0.16  | 0.79

Semiconductors | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.17 | 0.48  | 0.75

Semiconductors | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.24 | 0.48  | 0.26

Semiconductors | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -0.38 | 0.47  | 0.13

Semiconductors | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.06 | 0.24  | 0.88

Semiconductors | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.05 | 0.14  | 0.41

Semiconductors | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.08 | 0.45  | -0.74

Semiconductors | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.00 | 0.02  | 1.00

Semiconductors | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.09 | 0.33  | 0.42

Semiconductors | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.38 | 0.49  | -0.14

Autos | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.38 | 1.59  | -0.05

Autos | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.01 | 0.66  | -0.40

Autos | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.32 | 0.73  | -0.11

Autos | w w | pass-through of input cost to unit cost (L4)  | -0.27 | 0.60  | -0.05

Autos | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.25 | 0.52  | 0.34

Autos | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.43 | 0.49  | 0.11

Autos | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.06 | 0.33  | 0.61

Autos | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.09 | 0.50  | -0.01

Autos | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.05 | 0.21  | 0.84

Autos | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.01 | 0.40  | -0.46

Autos | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.08 | 0.39  | 0.07

Autos | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.05 | 0.14  | 0.98

Autos | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.50 | 0.65  | 0.25

Autos | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.00 | 0.32  | 0.67

Wholesale | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.03 | 1.51  | -0.81

Wholesale | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.24 | 0.52  | -0.42

Wholesale | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.02 | 0.49  | -0.05

Wholesale | w w | pass-through of input cost to unit cost (L4)  | 0.05 | 0.26  | -0.60

Wholesale | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.20 | 0.51  | 0.28

Wholesale | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.10 | 0.28  | 0.20

Wholesale | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.22 | 0.56  | -0.02

Wholesale | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.15 | 0.59  | 0.22

Wholesale | export share export_share | Export share: share of shipments exported.  | 0.27 | 0.35  | 0.87

Wholesale | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.02 | 0.14  | 0.98

Wholesale | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.14 | 0.54  | 0.33

Wholesale | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.04 | 0.29  | -0.28

Retail | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.16 | 0.34  | -0.05

Retail | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.04 | 0.42  | 0.68

Retail | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -1.62 | 1.80  | -0.27

Retail | w w | pass-through of input cost to unit cost (L4)  | 0.10 | 0.32  | -0.06

Retail | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.21 | 0.36  | 0.34

Retail | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.00 | 0.38  | 0.13

Retail | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 1.56 | 1.66  | 0.46

Retail | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.03 | 0.29  | 0.46

Retail | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.03 | 0.24  | 0.93

Retail | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.13 | 0.59  | -0.82

Retail | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.11 | 0.47  | -0.58

Airlines | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.17 | 0.62  | -0.42

Airlines | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.51 | 0.64  | 0.70

Airlines | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.94 | 1.10  | -0.15

Airlines | w w | pass-through of input cost to unit cost (L4)  | 0.02 | 0.24  | 0.70

Airlines | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.15 | 0.34  | -0.58

Airlines | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.48 | 0.50  | 0.81

Airlines | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.08 | 0.24  | 0.94

Airlines | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.08 | 0.27  | 0.64

Airlines | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.25 | 0.35  | 0.18

Airlines | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.02 | 0.03  | 1.00

Airlines | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.04 | 0.19  | 0.71

Airlines | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.04 | 0.35  | 0.57

Data centers | w w | pass-through of input cost to unit cost (L4)  | 0.28 | 0.53  | 0.02

Data centers | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.11 | 0.57  | 0.46

Data centers | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 1.52 | 1.60  | 0.13

Data centers | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.15 | 0.46  | 0.49

Data centers | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.07 | 0.46  | 0.17

Data centers | u^norm u_norm | Normal occupancy: share of capacity leased in a normal month (L18).  | -1.49 | 1.51  | 0.89

Data centers | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -1.20 | 1.21  | 0.95

Data centers | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.01  | 1.00

Data centers | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.17 | 0.27  | 0.65

Data centers | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.50 | 0.58  | -0.25

Data centers | z_0 z0 | Starting utilization: utilization in the first month relative to normal, logit scale.  | 1.49 | 1.53  | -0.11

Hospitals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.86 | 1.15  | -0.01

Hospitals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.71 | 0.88  | 0.48

Hospitals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.30 | 0.61  | -0.45

Hospitals | w w | pass-through of input cost to unit cost (L4)  | -0.03 | 0.32  | 0.35

Hospitals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.06 | 0.39  | -0.40

Hospitals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.27 | 0.30  | 0.58

Hospitals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.16 | 0.66  | -0.32

Hospitals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.10 | 0.47  | -0.04

Hospitals | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.07 | 0.30  | 0.30

Hospitals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.04 | 0.07  | 0.99

Hospitals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.21 | 0.55  | -0.54

Hospitals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.04 | 0.21  | 0.44

Hotels | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.65 | 0.93  | 0.25

Hotels | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -1.18 | 1.29  | 0.58

Hotels | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.20 | 0.46  | 0.73

Hotels | w w | pass-through of input cost to unit cost (L4)  | 0.25 | 0.41  | 0.57

Hotels | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.31 | 0.52  | 0.11

Hotels | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.43 | 0.48  | 0.32

Hotels | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.29 | 0.56  | 0.66

Hotels | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.69 | 0.92  | 0.63

Hotels | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.19 | 0.42  | 0.75

Hotels | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.03  | 1.00

Hotels | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.07 | 0.25  | 0.45

Hotels | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.11 | 0.38  | -0.10
