<!-- Evaluation › Against ground truth, for forecast 958bc61e-85e2-5352-970c-bb52c97226a3; the page: https://mitdbg.github.io/model-2-nowcasting/accuracy.html?set=958bc61e-85e2-5352-970c-bb52c97226a3; inputs a33b3182d5af1eea -->

World shown World seed 20261117 (the bundle's only world)

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Against ground truth

No ground truth is available for real worlds.

The backtest runs Model 2 at each as-of date on the synthetic world, using only observations published by then and re-estimating each time, and scores every sector total against the truth. The backtest's runs widen their bands by 2.55× (history), 2.31× (nowcast), 1.86× (forecast), as the site's run does. Backtest workspace: /Users/michjc/lincoln/work/2026/10/m2-site-ws/seed20261117-4dates. As-of dates: 2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30.

- Error of the member median, in one of three units: for most quantities, the absolute log error, shown as a percentage; for utilization and load factor, the absolute difference in percentage points; for overdue orders, phantom orders and lost demand, which are often near zero, the absolute difference in months of the sector's output ("mo"). None where the truth or the median is zero.

- Mean error by horizon averages these over all sectors and quantities.

- Coverage: share of months with the truth inside the 90% band, for the bands as published (widened, see Band widening below) and for the model's own bands before widening ("unwidened"). Green: consistent with 90% or above given the number of values scored (within two binomial standard errors); amber: within four; red: further below. Coverage near 100% is not marked: it means the bands are wide, not wrong. Cells with fewer than 8 values are not colored.

## Errors by horizon

horizon | mean error | coverage, published | coverage, unwidened | values

history (last 12 months) | 0.039 | 95% | 75% | 7,876

nowcast | 0.041 | 94% | 77% | 716

forecast, 3 months ahead | 0.045 | 94% | 83% | 716

forecast, 6 months ahead | 0.049 | 95% | 86% | 716

forecast, 12 months ahead | 0.058 | 96% | 89% | 716

## Errors by sector and quantity

Error at each horizon, then coverage pooled over the horizons, since each horizon has only one value per as-of date: history (the last 12 months before each as-of date) and ahead (the nowcast and the 3-, 6- and 12-month forecasts). Coverage cells show published bands, then unwidened in gray; most rest on 44 values (history) and 16 (ahead), and hovering a cell gives its count.

sector | quantity | history (last 12 months) | nowcast | forecast, 3 months ahead | forecast, 6 months ahead | forecast, 12 months ahead | coverage, history | coverage, ahead

Oil and gas | Order book | 27.9% | 27.8% | 26.8% | 24.6% | 19.3% | 77% 68% | 94% 75%

Oil and gas | Overdue orders | 0.39 mo | 0.37 mo | 0.33 mo | 0.29 mo | 0.17 mo | 73% 50% | 88% 63%

Oil and gas | Capacity | 0.7% | 0.8% | 1.0% | 1.3% | 2.6% | 100% 100% | 100% 100%

Oil and gas | Capacity announced | 14.5% | 17.9% | 12.4% | 11.5% | 8.6% | 100% 93% | 100% 81%

Oil and gas | Capacity under construction | 5.0% | 5.4% | 5.2% | 7.3% | 11.4% | 100% 100% | 100% 88%

Oil and gas | Finished inventory | 0.11 mo | 0.15 mo | 0.18 mo | 0.17 mo | 0.11 mo | 100% 77% | 88% 75%

Oil and gas | Input inventory | 6.0% | 5.6% | 6.8% | 9.0% | 9.8% | 100% 100% | 100% 100%

Oil and gas | Lead time | 31.1% | 34.2% | 43.7% | 45.5% | 45.8% | 100% 73% | 88% 81%

Oil and gas | New orders | 2.0% | 2.1% | 2.9% | 2.9% | 3.0% | 100% 91% | 100% 100%

Oil and gas | Output | 1.2% | 1.6% | 3.3% | 4.4% | 6.2% | 100% 93% | 88% 75%

Oil and gas | Phantom orders | 0.02 mo | 0.02 mo | 0.02 mo | 0.02 mo | 0.02 mo | 100% 61% | 88% 81%

Oil and gas | Price | 4.1% | 3.6% | 5.1% | 6.5% | 6.0% | 100% 100% | 100% 100%

Oil and gas | Shipments | 1.8% | 3.5% | 3.6% | 5.0% | 4.9% | 93% 86% | 88% 81%

Oil and gas | Unit cost | 3.9% | 4.5% | 4.3% | 3.8% | 4.1% | 100% 9% | 88% 19%

Oil and gas | Utilization | 0.6 pt | 1.0 pt | 2.5 pt | 3.1 pt | 3.4 pt | 98% 70% | 88% 69%

Housing | Order book | 4.6% | 5.5% | 5.9% | 6.8% | 10.8% | 100% 50% | 94% 88%

Housing | Overdue orders | 0.04 mo | 0.06 mo | 0.08 mo | 0.12 mo | 0.25 mo | 100% 100% | 100% 100%

Housing | Capacity | 3.5% | 3.8% | 3.9% | 4.2% | 4.6% | 100% 50% | 75% 50%

Housing | Finished inventory | 0.11 mo | 0.08 mo | 0.06 mo | 0.05 mo | 0.04 mo | 100% 68% | 100% 100%

Housing | Input inventory | 5.0% | 5.3% | 4.9% | 4.8% | 5.1% | 100% 100% | 100% 100%

Housing | Lead time | 9.3% | 13.1% | 16.4% | 20.3% | 33.3% | 100% 100% | 100% 100%

Housing | New orders | 1.5% | 1.5% | 1.7% | 2.2% | 5.1% | 100% 100% | 100% 100%

Housing | Output | 1.0% | 0.8% | 0.7% | 1.0% | 1.5% | 100% 73% | 100% 100%

Housing | Phantom orders | 0.03 mo | 0.05 mo | 0.07 mo | 0.11 mo | 0.26 mo | 100% 100% | 100% 88%

Housing | Price | 2.9% | 2.6% | 1.5% | 2.0% | 4.7% | 100% 89% | 100% 100%

Housing | Shipments | 0.6% | 0.7% | 0.6% | 0.9% | 1.3% | 100% 98% | 100% 100%

Housing | Unit cost | 4.4% | 4.4% | 4.6% | 4.9% | 4.9% | 75% 25% | 94% 38%

Housing | Utilization | 2.6 pt | 3.0 pt | 3.3 pt | 3.2 pt | 3.4 pt | 100% 52% | 100% 63%

Food | Order book | 1.0% | 1.2% | 2.9% | 2.5% | 4.1% | 100% 100% | 100% 100%

Food | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 100% 100% | 100% 100%

Food | Capacity | 1.1% | 1.4% | 1.6% | 1.8% | 2.6% | 75% 36% | 69% 0%

Food | Finished inventory | 0.18 mo | 0.20 mo | 0.17 mo | 0.12 mo | 0.11 mo | 100% 98% | 100% 100%

Food | Input inventory | 0.5% | 0.7% | 0.6% | 1.8% | 2.7% | 100% 100% | 100% 100%

Food | Lead time | 12.0% | 13.8% | 20.2% | 20.6% | 24.6% | 100% 100% | 100% 100%

Food | New orders | 0.8% | 0.8% | 1.7% | 1.4% | 3.0% | 100% 93% | 100% 100%

Food | Output | 0.5% | 0.6% | 2.5% | 2.6% | 1.3% | 100% 100% | 100% 100%

Food | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 75% 66% | 88% 75%

Food | Price | 5.3% | 5.1% | 4.8% | 4.7% | 6.3% | 100% 75% | 100% 94%

Food | Shipments | 0.7% | 0.6% | 1.9% | 1.1% | 2.5% | 100% 93% | 100% 100%

Food | Unit cost | 8.3% | 8.4% | 8.4% | 7.8% | 8.7% | 25% 0% | 69% 19%

Food | Utilization | 0.9 pt | 1.6 pt | 3.2 pt | 3.5 pt | 2.9 pt | 100% 32% | 100% 75%

Chemicals | Order book | 3.2% | 3.0% | 3.6% | 3.7% | 4.1% | 95% 100% | 100% 100%

Chemicals | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Chemicals | Capacity | 0.9% | 1.4% | 1.6% | 2.0% | 2.7% | 98% 59% | 94% 50%

Chemicals | Finished inventory | 0.06 mo | 0.07 mo | 0.08 mo | 0.07 mo | 0.05 mo | 100% 100% | 100% 100%

Chemicals | Input inventory | 0.7% | 0.8% | 1.2% | 1.1% | 1.7% | 100% 100% | 100% 100%

Chemicals | Lead time | 5.5% | 8.0% | 11.2% | 16.2% | 16.8% | 100% 100% | 100% 100%

Chemicals | New orders | 1.6% | 0.6% | 2.1% | 1.0% | 1.9% | 100% 95% | 100% 100%

Chemicals | Output | 0.7% | 0.8% | 1.0% | 1.2% | 1.9% | 100% 86% | 100% 94%

Chemicals | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 84% | 100% 94%

Chemicals | Price | 5.2% | 5.3% | 5.4% | 6.4% | 7.0% | 100% 50% | 100% 94%

Chemicals | Shipments | 1.1% | 1.9% | 2.0% | 2.0% | 1.8% | 100% 98% | 100% 94%

Chemicals | Unit cost | 5.9% | 6.3% | 6.2% | 6.3% | 7.1% | 75% 41% | 75% 63%

Chemicals | Utilization | 0.4 pt | 0.8 pt | 1.5 pt | 2.3 pt | 2.9 pt | 100% 98% | 100% 94%

Steel | Order book | 2.4% | 2.1% | 1.8% | 2.0% | 2.8% | 100% 68% | 100% 100%

Steel | Overdue orders | 0.02 mo | 0.01 mo | 0.02 mo | 0.03 mo | 0.02 mo | 100% 89% | 100% 100%

Steel | Capacity | 0.5% | 0.7% | 0.7% | 0.7% | 1.7% | 100% 95% | 100% 88%

Steel | Finished inventory | 0.06 mo | 0.06 mo | 0.06 mo | 0.06 mo | 0.07 mo | 100% 50% | 100% 69%

Steel | Input inventory | 4.7% | 4.6% | 5.4% | 5.3% | 6.6% | 100% 100% | 100% 100%

Steel | Lead time | 1.9% | 1.2% | 1.5% | 1.9% | 3.2% | 100% 100% | 100% 100%

Steel | New orders | 1.5% | 1.1% | 1.5% | 0.5% | 1.8% | 100% 91% | 100% 100%

Steel | Output | 0.5% | 0.9% | 1.1% | 1.0% | 1.1% | 100% 100% | 100% 100%

Steel | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 86% | 100% 100%

Steel | Price | 2.4% | 2.5% | 3.4% | 3.1% | 3.1% | 100% 70% | 100% 100%

Steel | Shipments | 0.9% | 0.4% | 1.5% | 1.1% | 1.1% | 100% 93% | 100% 100%

Steel | Unit cost | 1.9% | 2.1% | 1.4% | 1.8% | 1.5% | 100% 75% | 100% 88%

Steel | Utilization | 0.3 pt | 0.5 pt | 0.5 pt | 0.9 pt | 1.5 pt | 100% 95% | 100% 100%

Machinery | Order book | 4.7% | 4.9% | 5.1% | 5.4% | 5.2% | 100% 100% | 100% 100%

Machinery | Overdue orders | 0.07 mo | 0.09 mo | 0.08 mo | 0.07 mo | 0.06 mo | 100% 100% | 100% 100%

Machinery | Capacity | 1.2% | 1.1% | 1.3% | 1.4% | 1.3% | 100% 80% | 100% 94%

Machinery | Finished inventory | 0.07 mo | 0.02 mo | 0.04 mo | 0.04 mo | 0.02 mo | 100% 100% | 100% 100%

Machinery | Input inventory | 2.3% | 1.9% | 2.3% | 1.8% | 2.6% | 100% 100% | 100% 100%

Machinery | Lead time | 4.1% | 4.9% | 5.2% | 5.6% | 5.0% | 100% 100% | 100% 100%

Machinery | New orders | 2.8% | 2.7% | 4.2% | 2.8% | 3.6% | 100% 93% | 100% 100%

Machinery | Output | 1.5% | 1.0% | 2.5% | 2.7% | 3.2% | 100% 100% | 100% 100%

Machinery | Phantom orders | 0.05 mo | 0.04 mo | 0.03 mo | 0.02 mo | 0.02 mo | 64% 2% | 44% 13%

Machinery | Price | 6.8% | 6.5% | 6.6% | 6.3% | 7.1% | 100% 98% | 100% 100%

Machinery | Shipments | 2.1% | 2.2% | 2.5% | 2.8% | 2.6% | 100% 91% | 100% 100%

Machinery | Unit cost | 8.9% | 8.9% | 9.2% | 9.3% | 9.4% | 25% 0% | 75% 6%

Machinery | Utilization | 0.5 pt | 0.4 pt | 1.9 pt | 2.3 pt | 2.4 pt | 100% 100% | 100% 100%

Semiconductors | Order book | 3.8% | 5.1% | 5.9% | 8.3% | 14.6% | 100% 100% | 100% 100%

Semiconductors | Overdue orders | 0.01 mo | 0.03 mo | 0.05 mo | 0.08 mo | 0.20 mo | 100% 100% | 100% 100%

Semiconductors | Capacity | 0.5% | 0.6% | 0.5% | 0.7% | 1.2% | 100% 100% | 100% 100%

Semiconductors | Capacity announced | 12.1% | 19.5% | 20.7% | 25.3% | 38.0% | 100% 100% | 100% 100%

Semiconductors | Capacity under construction | 5.3% | 4.4% | 3.3% | 5.9% | 8.6% | 100% 100% | 100% 100%

Semiconductors | Finished inventory | 0.14 mo | 0.06 mo | 0.05 mo | 0.03 mo | 0.08 mo | 100% 100% | 100% 100%

Semiconductors | Input inventory | 0.8% | 0.6% | 1.6% | 2.1% | 3.1% | 100% 100% | 100% 100%

Semiconductors | Lead time | 8.5% | 13.4% | 14.7% | 21.6% | 40.5% | 100% 100% | 100% 100%

Semiconductors | New orders | 1.5% | 3.8% | 3.5% | 5.3% | 7.5% | 100% 100% | 100% 100%

Semiconductors | Output | 1.2% | 0.6% | 1.5% | 2.3% | 2.9% | 100% 100% | 100% 100%

Semiconductors | Phantom orders | 0.11 mo | 0.12 mo | 0.09 mo | 0.12 mo | 0.25 mo | 91% 18% | 100% 69%

Semiconductors | Price | 4.0% | 3.2% | 3.9% | 4.6% | 4.6% | 100% 100% | 100% 100%

Semiconductors | Shipments | 0.4% | 0.8% | 1.5% | 1.8% | 2.5% | 100% 100% | 100% 100%

Semiconductors | Unit cost | 8.2% | 8.2% | 8.3% | 8.3% | 8.0% | 25% 0% | 25% 19%

Semiconductors | Utilization | 0.7 pt | 0.4 pt | 1.0 pt | 1.5 pt | 1.4 pt | 100% 100% | 100% 100%

Autos | Order book | 3.0% | 1.4% | 1.5% | 2.6% | 3.9% | 98% 75% | 100% 100%

Autos | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 0.03 mo | 100% 100% | 100% 100%

Autos | Capacity | 1.2% | 1.4% | 2.0% | 2.1% | 3.0% | 91% 43% | 56% 31%

Autos | Finished inventory | 0.05 mo | 0.06 mo | 0.07 mo | 0.09 mo | 0.11 mo | 100% 89% | 100% 100%

Autos | Input inventory | 2.6% | 3.3% | 2.9% | 2.4% | 4.2% | 100% 100% | 100% 100%

Autos | Lead time | 6.4% | 8.7% | 14.4% | 19.1% | 28.3% | 100% 100% | 100% 100%

Autos | New orders | 1.4% | 1.8% | 1.4% | 3.3% | 2.3% | 100% 89% | 100% 100%

Autos | Output | 0.7% | 0.8% | 1.4% | 1.5% | 1.5% | 100% 82% | 100% 100%

Autos | Phantom orders | 0.00 mo | 0.00 mo | 0.01 mo | 0.01 mo | 0.02 mo | 84% 73% | 100% 69%

Autos | Price | 5.6% | 5.2% | 4.3% | 4.0% | 3.8% | 70% 48% | 100% 75%

Autos | Shipments | 1.0% | 1.5% | 0.9% | 1.4% | 1.6% | 100% 98% | 100% 94%

Autos | Unit cost | 8.7% | 9.0% | 8.2% | 8.4% | 8.4% | 50% 23% | 63% 44%

Autos | Utilization | 0.5 pt | 1.0 pt | 2.0 pt | 2.1 pt | 2.5 pt | 100% 77% | 100% 75%

Wholesale | Order book | 3.7% | 2.7% | 4.2% | 4.7% | 3.1% | 100% 68% | 100% 100%

Wholesale | Capacity | 5.8% | 6.1% | 6.0% | 6.4% | 7.4% | 100% 75% | 75% 75%

Wholesale | Finished inventory | 0.04 mo | 0.08 mo | 0.11 mo | 0.12 mo | 0.21 mo | 100% 95% | 100% 94%

Wholesale | Lead time | 13.5% | 12.9% | 14.5% | 17.8% | 15.6% | 100% 100% | 100% 100%

Wholesale | Load factor | 1.8 pt | 1.0 pt | 1.3 pt | 1.4 pt | 1.0 pt | 100% 93% | 100% 100%

Wholesale | Lost demand | 0.01 mo | 0.00 mo | 0.01 mo | 0.01 mo | 0.00 mo | 82% 59% | 88% 69%

Wholesale | New orders | 3.7% | 2.8% | 4.6% | 4.4% | 3.1% | 100% 70% | 100% 100%

Wholesale | Output | 3.7% | 3.2% | 2.7% | 3.2% | 3.0% | 100% 59% | 100% 88%

Wholesale | Price | 3.7% | 4.1% | 3.7% | 3.8% | 3.0% | 100% 48% | 100% 88%

Wholesale | Shipments | 3.8% | 3.4% | 3.5% | 4.0% | 2.4% | 100% 64% | 100% 100%

Wholesale | Unit cost | 3.3% | 3.5% | 4.0% | 4.5% | 4.2% | 100% 75% | 100% 81%

Wholesale | Utilization | 2.8 pt | 2.7 pt | 2.6 pt | 3.9 pt | 3.4 pt | 100% 82% | 100% 75%

Retail | Order book | 3.8% | 5.4% | 3.6% | 4.4% | 3.7% | 100% 73% | 100% 81%

Retail | Capacity | 3.5% | 3.0% | 2.5% | 4.1% | 4.2% | 84% 52% | 88% 75%

Retail | Finished inventory | 0.19 mo | 0.18 mo | 0.22 mo | 0.25 mo | 0.35 mo | 100% 43% | 100% 44%

Retail | Lead time | 12.0% | 10.9% | 11.5% | 11.2% | 15.1% | 100% 86% | 100% 94%

Retail | Load factor | 1.7 pt | 1.1 pt | 2.6 pt | 2.3 pt | 1.3 pt | 100% 89% | 100% 88%

Retail | Lost demand | 0.04 mo | 0.04 mo | 0.04 mo | 0.07 mo | 0.05 mo | 93% 59% | 81% 56%

Retail | New orders | 3.7% | 6.8% | 4.5% | 5.6% | 7.1% | 100% 93% | 100% 88%

Retail | Output | 1.9% | 1.7% | 1.2% | 3.6% | 2.7% | 100% 64% | 94% 88%

Retail | Price | 0.5% | 0.5% | 0.6% | 0.8% | 0.6% | 100% 95% | 100% 100%

Retail | Shipments | 2.2% | 1.7% | 2.1% | 4.4% | 3.5% | 100% 84% | 100% 94%

Retail | Unit cost | 2.2% | 1.6% | 2.1% | 2.0% | 2.2% | 100% 64% | 100% 100%

Retail | Utilization | 1.5 pt | 1.0 pt | 1.4 pt | 1.1 pt | 1.4 pt | 98% 68% | 100% 94%

Airlines | Order book | 5.8% | 6.2% | 5.6% | 7.3% | 6.3% | 82% 50% | 94% 75%

Airlines | Capacity | 1.9% | 1.6% | 2.2% | 1.9% | 2.1% | 100% 70% | 100% 100%

Airlines | Lead time | 11.1% | 8.6% | 7.5% | 7.5% | 3.0% | 100% 100% | 100% 100%

Airlines | Load factor | 1.6 pt | 1.6 pt | 2.0 pt | 0.5 pt | 2.3 pt | 100% 91% | 100% 100%

Airlines | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 0.01 mo | 100% 95% | 100% 94%

Airlines | New orders | 3.7% | 3.4% | 4.0% | 3.8% | 2.9% | 100% 86% | 100% 100%

Airlines | Output | 1.2% | 2.4% | 2.5% | 2.6% | 3.2% | 100% 68% | 100% 75%

Airlines | Price | 1.9% | 2.7% | 2.2% | 1.8% | 1.8% | 100% 39% | 100% 88%

Airlines | Shipments | 1.5% | 0.9% | 1.7% | 2.0% | 1.5% | 100% 93% | 100% 100%

Airlines | Unit cost | 6.5% | 6.6% | 6.4% | 6.6% | 6.5% | 61% 0% | 69% 25%

Airlines | Utilization | 1.6 pt | 1.5 pt | 1.4 pt | 1.1 pt | 1.0 pt | 100% 66% | 100% 75%

Data centers | Order book | 7.4% | 7.6% | 7.1% | 6.9% | 6.2% | 100% 23% | 94% 56%

Data centers | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Capacity | 1.5% | 1.5% | 1.5% | 1.6% | 1.6% | 80% 18% | 44% 19%

Data centers | Capacity announced | 5.1% | 4.6% | 6.6% | 7.6% | 6.9% | 100% 91% | 100% 94%

Data centers | Capacity in use | 1.3% | 1.2% | 1.1% | 1.0% | 1.0% | 82% 30% | 81% 56%

Data centers | Capacity under construction | 2.2% | 2.2% | 2.3% | 2.3% | 2.0% | 100% 55% | 100% 81%

Data centers | Lead time | 9.5% | 9.6% | 9.6% | 9.6% | 9.6% | 100% 0% | 63% 0%

Data centers | New orders | 3.6% | 4.0% | 3.0% | 3.1% | 3.0% | 100% 80% | 100% 88%

Data centers | Output | 1.3% | 1.2% | 1.1% | 1.0% | 1.0% | 82% 30% | 81% 56%

Data centers | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Price | 2.2% | 2.3% | 1.7% | 1.9% | 2.0% | 100% 100% | 100% 100%

Data centers | Shipments | 2.7% | 2.7% | 3.1% | 3.3% | 3.6% | 100% 52% | 100% 81%

Data centers | Unit cost | 3.0% | 2.9% | 3.4% | 3.2% | 3.3% | 100% 100% | 100% 100%

Data centers | Utilization | 0.4 pt | 0.5 pt | 0.6 pt | 0.7 pt | 0.9 pt | 100% 84% | 100% 75%

Hospitals | Order book | 0.8% | 0.5% | 0.6% | 1.3% | 1.1% | 100% 100% | 100% 100%

Hospitals | Capacity | 1.5% | 1.7% | 1.8% | 1.8% | 2.0% | 100% 43% | 75% 44%

Hospitals | Lead time | 2.1% | 2.3% | 1.9% | 1.6% | 2.4% | 100% 100% | 100% 100%

Hospitals | Load factor | 0.5 pt | 0.5 pt | 0.4 pt | 0.4 pt | 0.4 pt | 100% 98% | 100% 100%

Hospitals | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 93% 63% | 100% 90%

Hospitals | New orders | 0.7% | 1.0% | 0.4% | 1.1% | 1.2% | 100% 95% | 100% 100%

Hospitals | Output | 0.3% | 0.4% | 0.5% | 0.5% | 0.6% | 100% 98% | 100% 100%

Hospitals | Price | 0.2% | 0.2% | 0.8% | 0.8% | 0.9% | 100% 100% | 100% 100%

Hospitals | Shipments | 0.6% | 0.2% | 0.5% | 0.9% | 0.5% | 100% 100% | 100% 100%

Hospitals | Unit cost | 0.4% | 0.5% | 0.7% | 1.2% | 0.7% | 100% 98% | 100% 100%

Hospitals | Utilization | 1.3 pt | 1.3 pt | 1.2 pt | 1.2 pt | 1.3 pt | 100% 25% | 100% 56%

Hotels | Order book | 10.2% | 10.1% | 9.9% | 10.0% | 10.7% | 27% 0% | 88% 31%

Hotels | Capacity | 2.5% | 2.3% | 2.5% | 2.6% | 3.5% | 73% 25% | 31% 25%

Hotels | Lead time | 9.6% | 9.8% | 8.4% | 9.0% | 10.7% | 100% 100% | 100% 100%

Hotels | Load factor | 4.5 pt | 4.5 pt | 5.1 pt | 5.6 pt | 6.7 pt | 41% 25% | 81% 50%

Hotels | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Hotels | New orders | 4.5% | 4.5% | 4.0% | 4.5% | 5.0% | 61% 25% | 100% 81%

Hotels | Output | 1.8% | 1.8% | 2.7% | 3.4% | 4.1% | 75% 0% | 69% 6%

Hotels | Price | 0.2% | 0.3% | 0.8% | 0.8% | 0.5% | 100% 100% | 100% 100%

Hotels | Shipments | 4.5% | 4.6% | 4.6% | 4.3% | 5.0% | 48% 25% | 88% 63%

Hotels | Unit cost | 1.2% | 1.4% | 1.6% | 1.5% | 1.8% | 100% 64% | 100% 94%

Hotels | Utilization | 1.7 pt | 1.8 pt | 2.0 pt | 2.2 pt | 2.4 pt | 100% 7% | 100% 44%

## Band widening

The members omit some uncertainty: weakly identified group means and sector parameters, and model error. The site's run therefore widens each published sector band around its median by a factor per status (PLAN decision 17). This run uses 2.55× history, 2.31× nowcast, 1.86× forecast. Recorded reason: The model's own 90% bands held 68% of the truth (all sector variables) in the 2023-2026 backtest on this world (sector fits on Modal, decision 31); factors from scripts/calibrate_bands.py (PLAN decision 17); held-out dates 0.886-0.909.

### Factors from the backtest

Fitted to the model's own bands in this backtest: what this world would call for now.

coverage, unwidened81% factor, forecast1.28×factor, nowcast1.87×factor, history1.88×

### Coverage on held-out dates

Each row: coverage at one as-of date, with factors fitted to the other dates.

2023-09-3088%2024-09-3089%2025-09-3091%2026-09-3092%

### Factors by sector

Oil and gasforecast1.36×Oil and gasnowcast1.81×Oil and gashistory1.64×Housingforecast1.07×Housingnowcast1.5×Housinghistory1.57×Foodforecast1.44×Foodnowcast1.81×Foodhistory2.03×Chemicalsforecast0.786×Chemicalsnowcast1.1×Chemicalshistory1.32×Steelforecast0.656×Steelhistory1.12×Machineryforecast1.25×Machinerynowcast1.91×Machineryhistory2.25×Semiconductorsforecast0.777×Semiconductorsnowcast0.969×Semiconductorshistory1.25×Autosforecast1.19×Autosnowcast1.48×Autoshistory1.91×Wholesaleforecast0.904×Wholesalenowcast1.13×Wholesalehistory1.51×Retailforecast1.31×Retailnowcast1.24×Retailhistory1.65×Airlinesforecast1.13×Airlinesnowcast1.55×Airlineshistory2.14×Data centersforecast2.02×Data centersnowcast2.17×Data centershistory2.13×Hospitalsforecast0.834×Hospitalsnowcast1.48×Hospitalshistory1.61×Hotelsforecast2×Hotelsnowcast2.95×Hotelshistory3.54×

## Parameter recovery

Each row compares fitted with true parameters of the tracked entities in this run's fit, in prior sds.

- Bias: mean of fit minus truth.

- RMSE: root mean square of fit minus truth.

- Correlation: correlation of fit and truth across entities, which shows whether the fit recovers differences between entities.

sector | parameter | definition | bias (prior sd) | RMSE (prior sd) | correlation

Oil and gas | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.21 | 0.46  | 0.51

Oil and gas | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.46 | 0.65  | 0.45

Oil and gas | w w | pass-through of input cost to unit cost (L4)  | 0.03 | 0.32  | 0.07

Oil and gas | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.73 | 0.83  | 0.15

Oil and gas | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.42 | 0.45  | 0.44

Oil and gas | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.05 | 0.30  | 0.87

Oil and gas | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.40 | 0.53  | -0.10

Oil and gas | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | 0.13 | 0.26  | 0.70

Oil and gas | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.22 | 0.45  | 0.65

Oil and gas | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.10 | 0.36  | 0.72

Oil and gas | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.04 | 0.05  | 1.00

Oil and gas | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.28 | 0.42  | 0.58

Oil and gas | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.31 | 0.68  | -0.15

Housing | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.69 | 0.95  | -0.25

Housing | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.26 | 0.37  | 0.91

Housing | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.09 | 0.47  | 0.17

Housing | w w | pass-through of input cost to unit cost (L4)  | -0.01 | 0.59  | -0.51

Housing | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.20 | 0.63  | -0.44

Housing | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.51 | 0.54  | 0.29

Housing | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.33 | 0.53  | 0.13

Housing | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.07 | 0.21  | 0.77

Housing | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.25 | 0.53  | 0.65

Housing | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.08 | 0.43  | 0.47

Housing | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.04 | 0.47  | -0.16

Food | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.24 | 0.65  | 0.31

Food | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.27 | 0.43  | 0.45

Food | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.25 | 0.49  | -0.26

Food | w w | pass-through of input cost to unit cost (L4)  | 0.15 | 0.52  | -0.70

Food | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.23 | 0.51  | 0.19

Food | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.03 | 0.17  | -0.13

Food | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.04 | 0.68  | -0.32

Food | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.07 | 0.40  | 0.59

Food | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.00 | 0.02  | 1.00

Food | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.05 | 0.49  | -0.01

Food | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.04 | 0.07  | 0.98

Food | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.12 | 0.31  | 0.52

Food | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.02 | 0.54  | -0.64

Chemicals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.00 | 0.72  | 0.13

Chemicals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.18 | 0.52  | 0.42

Chemicals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.38 | 0.72  | -0.16

Chemicals | w w | pass-through of input cost to unit cost (L4)  | -0.16 | 0.46  | -0.60

Chemicals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.14 | 0.46  | 0.48

Chemicals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.35 | 0.44  | -0.17

Chemicals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.26 | 0.56  | -0.31

Chemicals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.05 | 0.28  | 0.43

Chemicals | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.01 | 0.03  | 1.00

Chemicals | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.04 | 0.35  | 0.45

Chemicals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.03  | 1.00

Chemicals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.05 | 0.27  | 0.83

Chemicals | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.02 | 0.90  | -0.41

Steel | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.36 | 0.83  | 0.26

Steel | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.20 | 0.39  | 0.76

Steel | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.34 | 0.59  | -0.09

Steel | w w | pass-through of input cost to unit cost (L4)  | 0.39 | 0.52  | 0.27

Steel | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.20 | 0.33  | 0.26

Steel | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.28 | 0.36  | -0.17

Steel | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.19 | 0.52  | 0.46

Steel | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.05 | 0.37  | 0.34

Steel | export share export_share | Export share: share of shipments exported.  | -0.03 | 0.30  | 0.45

Steel | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.19 | 0.47  | 0.41

Steel | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.23 | 0.57  | -0.25

Steel | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.02 | 0.36  | 0.18

Steel | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.01 | 0.40  | 0.40

Steel | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.00 | 0.05  | 1.00

Steel | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.00 | 0.36  | 0.14

Steel | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.16 | 0.36  | 0.06

Machinery | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.17 | 0.35  | -0.40

Machinery | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.26 | 0.56  | 0.73

Machinery | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.32 | 0.45  | 0.39

Machinery | w w | pass-through of input cost to unit cost (L4)  | -0.06 | 0.49  | 0.19

Machinery | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.34 | 0.60  | -0.21

Machinery | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.00 | 0.09  | 0.52

Machinery | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.02 | 0.48  | -0.13

Machinery | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.14 | 0.43  | 0.23

Machinery | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.38 | 0.64  | 0.09

Machinery | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.01 | 0.20  | 0.04

Machinery | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.08 | 0.21  | 0.15

Machinery | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.02 | 0.74  | -0.42

Machinery | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.06 | 0.20  | 0.98

Machinery | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.19 | 0.29  | 0.69

Machinery | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.05 | 0.44  | -0.71

Semiconductors | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.16 | 0.45  | 0.06

Semiconductors | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.11 | 0.38  | -0.32

Semiconductors | w w | pass-through of input cost to unit cost (L4)  | -0.02 | 0.15  | -0.81

Semiconductors | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.27 | 0.41  | 0.19

Semiconductors | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.04 | 0.09  | -0.80

Semiconductors | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.13 | 0.37  | 0.22

Semiconductors | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.25 | 0.55  | -0.30

Semiconductors | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | 0.50 | 0.53  | -0.42

Semiconductors | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.02 | 0.16  | 0.84

Semiconductors | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.02 | 0.05  | -0.49

Semiconductors | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.01 | 0.51  | -0.44

Semiconductors | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.02  | 1.00

Semiconductors | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.06 | 0.23  | -0.17

Semiconductors | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.28 | 0.36  | 0.31

Autos | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.86 | 1.15  | -0.15

Autos | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.71 | 0.81  | 0.77

Autos | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.18 | 0.63  | 0.03

Autos | w w | pass-through of input cost to unit cost (L4)  | 0.72 | 0.80  | 0.24

Autos | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.30 | 0.32  | 0.31

Autos | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.56 | 0.57  | 0.82

Autos | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.01 | 0.61  | 0.80

Autos | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.30 | 0.54  | -0.30

Autos | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.18 | 0.37  | 0.39

Autos | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.02 | 0.28  | -0.27

Autos | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.12 | 0.26  | 0.57

Autos | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.13 | 0.14  | 1.00

Autos | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.02 | 0.36  | 0.34

Autos | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.10 | 0.31  | 0.38

Wholesale | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.66 | 0.97  | -0.14

Wholesale | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.32 | 0.65  | -0.16

Wholesale | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.30 | 0.41  | 0.21

Wholesale | w w | pass-through of input cost to unit cost (L4)  | 0.38 | 0.56  | -0.49

Wholesale | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.16 | 0.31  | 0.50

Wholesale | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.18 | 0.40  | 0.59

Wholesale | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.26 | 0.46  | 0.53

Wholesale | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.23 | 0.48  | 0.18

Wholesale | export share export_share | Export share: share of shipments exported.  | 0.04 | 0.40  | 0.00

Wholesale | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.08 | 0.24  | 0.95

Wholesale | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.01 | 0.66  | 0.09

Wholesale | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.19 | 0.44  | -0.17

Retail | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.13 | 0.49  | 0.08

Retail | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.12 | 0.34  | 0.79

Retail | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.14 | 0.47  | 0.26

Retail | w w | pass-through of input cost to unit cost (L4)  | 0.11 | 0.24  | -0.32

Retail | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.14 | 0.53  | -0.09

Retail | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.18 | 0.32  | 0.74

Retail | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.23 | 0.49  | 0.44

Retail | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.12 | 0.50  | -0.12

Retail | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.03 | 0.26  | 0.93

Retail | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.12 | 0.62  | -0.13

Retail | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.19 | 0.43  | 0.23

Airlines | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.31 | 0.50  | 0.49

Airlines | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.54 | 0.70  | 0.61

Airlines | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.12 | 0.45  | 0.75

Airlines | w w | pass-through of input cost to unit cost (L4)  | -0.32 | 0.42  | 0.55

Airlines | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.43 | 0.56  | -0.69

Airlines | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.55 | 0.56  | 0.73

Airlines | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.13 | 0.18  | 0.92

Airlines | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.15 | 0.54  | 0.18

Airlines | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.06 | 0.24  | -0.02

Airlines | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.04  | 1.00

Airlines | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.24 | 0.27  | 0.92

Airlines | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.37 | 0.39  | 0.91

Data centers | w w | pass-through of input cost to unit cost (L4)  | 0.25 | 0.39  | 0.40

Data centers | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.15 | 0.36  | -0.36

Data centers | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 1.30 | 1.37  | -0.07

Data centers | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.04 | 0.49  | 0.18

Data centers | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.16 | 0.31  | 0.36

Data centers | u^norm u_norm | Normal occupancy: share of capacity leased in a normal month (L18).  | -1.18 | 1.22  | 0.76

Data centers | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -0.88 | 0.90  | 0.90

Data centers | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.01  | 1.00

Data centers | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.15 | 0.28  | 0.08

Data centers | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.31 | 0.34  | 0.60

Data centers | z_0 z0 | Starting utilization: utilization in the first month relative to normal, logit scale.  | 1.39 | 1.42  | -0.20

Hospitals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.01 | 0.38  | -0.14

Hospitals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.04 | 0.39  | 0.30

Hospitals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.18 | 0.40  | 0.43

Hospitals | w w | pass-through of input cost to unit cost (L4)  | -0.24 | 0.50  | -0.16

Hospitals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.05 | 0.42  | 0.22

Hospitals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.17 | 0.24  | 0.48

Hospitals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.35 | 0.49  | 0.66

Hospitals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.14 | 0.30  | 0.33

Hospitals | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.14 | 0.30  | 0.71

Hospitals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.01 | 0.04  | 1.00

Hospitals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.01 | 0.21  | 0.73

Hospitals | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.09 | 0.24  | 0.06

Hotels | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -1.02 | 1.60  | 0.52

Hotels | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -2.21 | 2.81  | -0.11

Hotels | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.03 | 0.71  | 0.35

Hotels | w w | pass-through of input cost to unit cost (L4)  | -0.39 | 0.42  | 0.37

Hotels | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.06 | 0.30  | -0.28

Hotels | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.51 | 0.54  | -0.50

Hotels | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.12 | 0.54  | 0.50

Hotels | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.92 | 1.11  | -0.13

Hotels | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.17 | 0.22  | 0.79

Hotels | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.03 | 0.04  | 1.00

Hotels | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.06 | 0.13  | 0.93

Hotels | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.20 | 0.25  | 0.45
