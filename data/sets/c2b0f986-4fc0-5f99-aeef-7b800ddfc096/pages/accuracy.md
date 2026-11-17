<!-- Evaluation › Against ground truth, for forecast c2b0f986-4fc0-5f99-aeef-7b800ddfc096; the page: https://mitdbg.github.io/model-2-nowcasting/accuracy.html?set=c2b0f986-4fc0-5f99-aeef-7b800ddfc096; inputs 120962731c68bb5b -->

World shown  5 of 5 worlds in this bundle

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Against ground truth

No ground truth is available for real worlds.

The backtest runs Model 2 at each as-of date on the synthetic world, using only observations published by then and re-estimating each time, and scores every sector total against the truth. The backtest's runs widen their bands by 2.55× (history), 2.31× (nowcast), 1.86× (forecast), as the site's run does. Backtest workspace: /Users/michjc/lincoln/work/2026/10/m2-site-ws/w36-margin--5-worlds--seeds-2026111701-2026111702-2026111703-2026111704-2026111705/seed2026111704. As-of dates: 2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30.

- Error of the member median, in one of three units: for most quantities, the absolute log error, shown as a percentage; for utilization and load factor, the absolute difference in percentage points; for overdue orders, phantom orders and lost demand, which are often near zero, the absolute difference in months of the sector's output ("mo"). None where the truth or the median is zero.

- Mean error by horizon averages these over all sectors and quantities.

- Coverage: share of months with the truth inside the 90% band, for the bands as published (widened, see Band widening below) and for the model's own bands before widening ("unwidened"). Green: consistent with 90% or above given the number of values scored (within two binomial standard errors); amber: within four; red: further below. Coverage near 100% is not marked: it means the bands are wide, not wrong. Cells with fewer than 8 values are not colored.

## Errors by horizon

horizon | mean error | coverage, published | coverage, unwidened | values

history (last 12 months) | 0.052 | 93% | 76% | 7,876

nowcast | 0.055 | 92% | 78% | 716

forecast, 3 months ahead | 0.058 | 92% | 84% | 716

forecast, 6 months ahead | 0.060 | 96% | 86% | 716

forecast, 12 months ahead | 0.062 | 97% | 91% | 716

## Errors by sector and quantity

Error at each horizon, then coverage pooled over the horizons, since each horizon has only one value per as-of date: history (the last 12 months before each as-of date) and ahead (the nowcast and the 3-, 6- and 12-month forecasts). Coverage cells show published bands, then unwidened in gray; most rest on 44 values (history) and 16 (ahead), and hovering a cell gives its count.

sector | quantity | history (last 12 months) | nowcast | forecast, 3 months ahead | forecast, 6 months ahead | forecast, 12 months ahead | coverage, history | coverage, ahead

Oil and gas | Order book | 45.5% | 47.6% | 43.2% | 31.7% | 27.1% | 89% 41% | 94% 75%

Oil and gas | Overdue orders | 0.83 mo | 0.86 mo | 0.76 mo | 0.54 mo | 0.38 mo | 50% 55% | 75% 88%

Oil and gas | Capacity | 1.0% | 2.7% | 14.6% | 23.2% | 30.5% | 100% 91% | 81% 75%

Oil and gas | Capacity announced | 43.4% | 44.2% | 37.2% | 23.7% | 49.2% | 100% 95% | 100% 94%

Oil and gas | Capacity under construction | 11.9% | 50.0% | 62.8% | 59.9% | 48.2% | 98% 91% | 75% 75%

Oil and gas | Finished inventory | 0.18 mo | 0.19 mo | 0.29 mo | 0.55 mo | 0.10 mo | 100% 59% | 94% 75%

Oil and gas | Input inventory | 3.9% | 3.3% | 3.9% | 18.4% | 14.8% | 100% 100% | 100% 94%

Oil and gas | Lead time | 61.2% | 61.1% | 60.0% | 48.2% | 44.5% | 93% 50% | 94% 69%

Oil and gas | New orders | 3.8% | 5.9% | 6.6% | 5.1% | 5.2% | 93% 73% | 94% 88%

Oil and gas | Output | 2.0% | 4.6% | 18.4% | 15.8% | 11.3% | 100% 75% | 88% 56%

Oil and gas | Phantom orders | 0.05 mo | 0.06 mo | 0.06 mo | 0.05 mo | 0.04 mo | 55% 27% | 75% 63%

Oil and gas | Price | 19.4% | 16.4% | 14.1% | 16.6% | 15.9% | 100% 75% | 100% 100%

Oil and gas | Shipments | 2.8% | 4.2% | 9.1% | 10.6% | 4.3% | 95% 59% | 88% 69%

Oil and gas | Unit cost | 7.6% | 8.0% | 8.5% | 9.4% | 10.4% | 30% 2% | 25% 19%

Oil and gas | Utilization | 0.9 pt | 1.6 pt | 2.8 pt | 10.0 pt | 16.8 pt | 93% 64% | 94% 69%

Housing | Order book | 5.7% | 5.9% | 5.9% | 5.8% | 5.2% | 82% 25% | 88% 50%

Housing | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Housing | Capacity | 3.6% | 3.6% | 4.0% | 4.2% | 4.4% | 100% 66% | 75% 63%

Housing | Finished inventory | 0.09 mo | 0.09 mo | 0.09 mo | 0.10 mo | 0.08 mo | 100% 100% | 100% 100%

Housing | Input inventory | 4.8% | 5.5% | 5.0% | 5.6% | 4.7% | 100% 100% | 100% 100%

Housing | Lead time | 3.0% | 3.1% | 2.9% | 2.7% | 2.9% | 100% 100% | 100% 100%

Housing | New orders | 1.3% | 0.7% | 1.3% | 1.4% | 1.9% | 100% 100% | 100% 100%

Housing | Output | 0.4% | 0.6% | 0.5% | 1.1% | 1.1% | 100% 100% | 100% 100%

Housing | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 68% | 88% 81%

Housing | Price | 1.9% | 2.0% | 1.8% | 2.1% | 1.7% | 100% 77% | 100% 94%

Housing | Shipments | 0.3% | 0.3% | 0.3% | 0.7% | 1.1% | 100% 100% | 100% 100%

Housing | Unit cost | 2.4% | 2.2% | 2.7% | 2.8% | 2.9% | 84% 68% | 100% 81%

Housing | Utilization | 2.6 pt | 2.5 pt | 2.8 pt | 3.1 pt | 3.6 pt | 100% 68% | 100% 75%

Food | Order book | 0.8% | 1.6% | 2.0% | 3.0% | 3.3% | 100% 100% | 100% 100%

Food | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 100% 100% | 100% 100%

Food | Capacity | 0.4% | 0.3% | 0.5% | 0.7% | 0.9% | 100% 100% | 100% 75%

Food | Finished inventory | 0.10 mo | 0.11 mo | 0.12 mo | 0.13 mo | 0.15 mo | 100% 100% | 100% 94%

Food | Input inventory | 1.7% | 1.7% | 1.6% | 1.3% | 1.8% | 100% 100% | 100% 100%

Food | Lead time | 9.1% | 9.4% | 10.4% | 11.8% | 17.5% | 100% 100% | 100% 100%

Food | New orders | 0.7% | 1.0% | 1.2% | 1.3% | 2.2% | 100% 98% | 100% 100%

Food | Output | 0.3% | 0.3% | 0.8% | 1.1% | 1.9% | 100% 100% | 100% 100%

Food | Phantom orders | 0.00 mo | 0.00 mo | 0.01 mo | 0.01 mo | 0.01 mo | 80% 36% | 88% 63%

Food | Price | 7.4% | 7.5% | 7.8% | 7.5% | 7.5% | 66% 18% | 88% 56%

Food | Shipments | 0.6% | 0.5% | 0.9% | 2.0% | 2.0% | 100% 98% | 100% 100%

Food | Unit cost | 6.6% | 6.7% | 6.4% | 6.2% | 6.4% | 20% 0% | 94% 56%

Food | Utilization | 0.4 pt | 0.5 pt | 1.1 pt | 1.2 pt | 1.5 pt | 100% 100% | 100% 100%

Chemicals | Order book | 2.9% | 2.6% | 3.5% | 4.6% | 5.2% | 100% 61% | 100% 94%

Chemicals | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Chemicals | Capacity | 0.5% | 0.7% | 0.8% | 1.2% | 1.3% | 100% 86% | 100% 75%

Chemicals | Finished inventory | 0.10 mo | 0.14 mo | 0.17 mo | 0.17 mo | 0.20 mo | 100% 100% | 100% 100%

Chemicals | Input inventory | 1.2% | 1.3% | 1.0% | 1.8% | 2.1% | 100% 100% | 100% 100%

Chemicals | Lead time | 11.2% | 12.3% | 17.7% | 20.8% | 23.5% | 100% 100% | 100% 100%

Chemicals | New orders | 1.2% | 1.1% | 1.7% | 2.0% | 2.4% | 100% 95% | 100% 100%

Chemicals | Output | 0.6% | 0.4% | 1.2% | 1.7% | 2.2% | 100% 98% | 100% 100%

Chemicals | Phantom orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 89% 20% | 75% 38%

Chemicals | Price | 1.0% | 1.5% | 1.9% | 2.9% | 3.3% | 100% 95% | 100% 100%

Chemicals | Shipments | 1.0% | 1.2% | 1.7% | 2.2% | 3.0% | 100% 98% | 100% 94%

Chemicals | Unit cost | 2.7% | 3.0% | 2.9% | 2.9% | 2.2% | 100% 39% | 100% 88%

Chemicals | Utilization | 0.4 pt | 0.5 pt | 1.3 pt | 1.3 pt | 2.4 pt | 100% 84% | 100% 100%

Steel | Order book | 1.9% | 3.1% | 2.6% | 2.5% | 4.3% | 100% 91% | 100% 94%

Steel | Overdue orders | 0.03 mo | 0.04 mo | 0.05 mo | 0.05 mo | 0.03 mo | 84% 66% | 88% 63%

Steel | Capacity | 0.5% | 0.8% | 1.2% | 1.6% | 2.6% | 100% 91% | 100% 63%

Steel | Finished inventory | 0.06 mo | 0.04 mo | 0.04 mo | 0.04 mo | 0.06 mo | 100% 66% | 100% 88%

Steel | Input inventory | 2.6% | 2.7% | 2.4% | 1.5% | 2.6% | 100% 100% | 100% 100%

Steel | Lead time | 2.0% | 3.1% | 3.0% | 3.3% | 6.4% | 100% 93% | 100% 94%

Steel | New orders | 1.5% | 3.0% | 1.6% | 2.0% | 5.3% | 100% 95% | 100% 100%

Steel | Output | 0.5% | 0.3% | 1.4% | 0.7% | 2.4% | 100% 98% | 100% 100%

Steel | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 0.00 mo | 61% 45% | 81% 50%

Steel | Price | 2.1% | 2.6% | 2.3% | 2.6% | 1.8% | 100% 77% | 100% 100%

Steel | Shipments | 0.7% | 1.1% | 1.1% | 0.8% | 3.6% | 100% 95% | 100% 100%

Steel | Unit cost | 4.2% | 4.2% | 4.0% | 4.3% | 4.6% | 75% 50% | 88% 69%

Steel | Utilization | 0.4 pt | 0.5 pt | 1.0 pt | 1.2 pt | 2.4 pt | 100% 91% | 100% 100%

Machinery | Order book | 2.4% | 2.3% | 2.3% | 2.5% | 2.9% | 100% 80% | 100% 94%

Machinery | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Machinery | Capacity | 0.7% | 0.7% | 0.7% | 0.9% | 0.7% | 100% 98% | 100% 100%

Machinery | Finished inventory | 0.47 mo | 0.33 mo | 0.25 mo | 0.18 mo | 0.13 mo | 100% 93% | 100% 100%

Machinery | Input inventory | 5.7% | 5.7% | 5.6% | 6.8% | 6.7% | 100% 100% | 100% 100%

Machinery | Lead time | 7.3% | 6.9% | 5.1% | 3.7% | 3.5% | 100% 100% | 100% 100%

Machinery | New orders | 1.9% | 2.1% | 1.6% | 1.7% | 2.0% | 100% 93% | 100% 100%

Machinery | Output | 2.1% | 2.0% | 2.9% | 3.0% | 2.3% | 100% 89% | 100% 94%

Machinery | Phantom orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.00 mo | 0.00 mo | 55% 7% | 69% 56%

Machinery | Price | 3.6% | 4.0% | 2.1% | 1.7% | 1.9% | 100% 100% | 100% 100%

Machinery | Shipments | 1.2% | 1.0% | 0.9% | 1.4% | 1.7% | 100% 93% | 100% 100%

Machinery | Unit cost | 3.3% | 3.1% | 2.9% | 2.9% | 3.0% | 91% 50% | 100% 69%

Machinery | Utilization | 1.5 pt | 1.1 pt | 1.9 pt | 1.9 pt | 1.3 pt | 100% 98% | 100% 100%

Semiconductors | Order book | 3.3% | 4.2% | 4.8% | 4.5% | 3.4% | 100% 100% | 100% 100%

Semiconductors | Overdue orders | 0.00 mo | 0.01 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Semiconductors | Capacity | 0.3% | 0.2% | 0.3% | 0.3% | 0.4% | 100% 100% | 100% 100%

Semiconductors | Capacity announced | 8.7% | 11.5% | 6.2% | 7.0% | 13.4% | 100% 100% | 100% 100%

Semiconductors | Capacity under construction | 2.9% | 2.9% | 2.8% | 2.8% | 2.8% | 100% 100% | 100% 100%

Semiconductors | Finished inventory | 0.14 mo | 0.09 mo | 0.06 mo | 0.05 mo | 0.04 mo | 100% 100% | 100% 100%

Semiconductors | Input inventory | 3.2% | 2.7% | 3.3% | 4.1% | 3.2% | 100% 100% | 100% 100%

Semiconductors | Lead time | 2.3% | 1.9% | 2.2% | 3.6% | 6.4% | 100% 100% | 100% 100%

Semiconductors | New orders | 2.0% | 2.8% | 2.6% | 2.2% | 3.1% | 100% 98% | 100% 100%

Semiconductors | Output | 0.7% | 1.3% | 1.8% | 1.6% | 1.6% | 100% 100% | 100% 100%

Semiconductors | Phantom orders | 0.10 mo | 0.06 mo | 0.03 mo | 0.02 mo | 0.02 mo | 39% 16% | 69% 75%

Semiconductors | Price | 3.5% | 4.0% | 4.1% | 3.9% | 4.5% | 100% 100% | 100% 100%

Semiconductors | Shipments | 0.7% | 0.9% | 1.3% | 1.8% | 1.7% | 100% 100% | 100% 100%

Semiconductors | Unit cost | 1.8% | 2.1% | 1.9% | 2.0% | 1.9% | 98% 66% | 100% 81%

Semiconductors | Utilization | 0.5 pt | 0.8 pt | 1.2 pt | 1.1 pt | 1.5 pt | 100% 100% | 100% 100%

Autos | Order book | 1.7% | 2.1% | 2.1% | 3.1% | 3.2% | 100% 77% | 100% 100%

Autos | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 0.00 mo | 100% 100% | 100% 100%

Autos | Capacity | 1.4% | 1.3% | 2.0% | 2.5% | 3.7% | 75% 43% | 75% 50%

Autos | Finished inventory | 0.06 mo | 0.05 mo | 0.06 mo | 0.06 mo | 0.08 mo | 100% 84% | 100% 100%

Autos | Input inventory | 4.8% | 5.4% | 4.9% | 4.3% | 4.6% | 100% 100% | 100% 100%

Autos | Lead time | 7.3% | 7.5% | 9.2% | 13.1% | 18.9% | 100% 100% | 100% 100%

Autos | New orders | 1.1% | 2.0% | 1.1% | 2.4% | 3.9% | 100% 95% | 100% 100%

Autos | Output | 0.6% | 0.8% | 1.2% | 1.8% | 2.8% | 100% 100% | 100% 100%

Autos | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 0.00 mo | 89% 80% | 100% 94%

Autos | Price | 3.2% | 3.1% | 3.1% | 3.0% | 3.7% | 100% 93% | 100% 100%

Autos | Shipments | 0.9% | 0.5% | 1.3% | 1.8% | 3.0% | 100% 95% | 100% 100%

Autos | Unit cost | 5.8% | 5.6% | 5.4% | 5.3% | 5.6% | 52% 0% | 75% 38%

Autos | Utilization | 0.9 pt | 1.1 pt | 1.7 pt | 2.7 pt | 2.6 pt | 100% 75% | 100% 94%

Wholesale | Order book | 2.0% | 2.0% | 2.9% | 1.4% | 2.9% | 100% 89% | 100% 100%

Wholesale | Capacity | 15.2% | 15.2% | 15.6% | 15.7% | 15.7% | 0% 0% | 0% 0%

Wholesale | Finished inventory | 0.07 mo | 0.09 mo | 0.12 mo | 0.12 mo | 0.22 mo | 100% 80% | 100% 94%

Wholesale | Lead time | 37.3% | 35.6% | 39.1% | 39.6% | 42.9% | 100% 93% | 100% 100%

Wholesale | Load factor | 2.2 pt | 2.5 pt | 1.5 pt | 2.2 pt | 1.5 pt | 100% 77% | 100% 88%

Wholesale | Lost demand | 0.01 mo | 0.01 mo | 0.01 mo | 0.02 mo | 0.02 mo | 100% 83% | 100% 100%

Wholesale | New orders | 2.8% | 3.2% | 3.2% | 1.2% | 3.6% | 100% 77% | 100% 94%

Wholesale | Output | 3.2% | 3.8% | 3.8% | 4.1% | 3.8% | 98% 48% | 88% 56%

Wholesale | Price | 2.3% | 2.5% | 3.2% | 2.4% | 4.0% | 100% 68% | 100% 100%

Wholesale | Shipments | 2.8% | 2.0% | 2.6% | 1.8% | 2.7% | 98% 70% | 100% 94%

Wholesale | Unit cost | 1.8% | 2.3% | 2.6% | 2.3% | 2.9% | 100% 93% | 100% 100%

Wholesale | Utilization | 9.3 pt | 8.7 pt | 9.2 pt | 9.2 pt | 9.3 pt | 2% 0% | 25% 0%

Retail | Order book | 4.8% | 4.6% | 6.8% | 9.0% | 10.4% | 100% 70% | 94% 63%

Retail | Capacity | 3.8% | 3.4% | 3.4% | 4.4% | 4.1% | 98% 41% | 88% 50%

Retail | Finished inventory | 0.72 mo | 0.74 mo | 0.79 mo | 0.89 mo | 1.03 mo | 100% 0% | 88% 0%

Retail | Lead time | 14.8% | 9.6% | 9.6% | 9.1% | 7.4% | 100% 100% | 100% 100%

Retail | Load factor | 2.9 pt | 6.1 pt | 3.8 pt | 3.7 pt | 4.3 pt | 100% 98% | 100% 69%

Retail | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 98% 98% | 100% 100%

Retail | New orders | 5.3% | 5.2% | 7.6% | 9.6% | 11.7% | 100% 70% | 94% 63%

Retail | Output | 4.5% | 4.8% | 6.2% | 7.4% | 8.3% | 86% 36% | 56% 31%

Retail | Price | 1.0% | 1.7% | 1.3% | 1.5% | 1.1% | 100% 89% | 100% 94%

Retail | Shipments | 4.7% | 10.9% | 10.2% | 10.5% | 12.3% | 100% 66% | 69% 38%

Retail | Unit cost | 1.8% | 0.8% | 0.9% | 0.7% | 0.7% | 100% 84% | 100% 100%

Retail | Utilization | 1.8 pt | 1.9 pt | 2.5 pt | 3.1 pt | 3.7 pt | 89% 68% | 94% 63%

Airlines | Order book | 2.1% | 2.5% | 2.2% | 1.6% | 2.8% | 100% 98% | 100% 100%

Airlines | Capacity | 7.4% | 7.2% | 7.4% | 7.2% | 6.5% | 75% 25% | 75% 38%

Airlines | Lead time | 12.0% | 12.1% | 11.0% | 11.7% | 10.9% | 100% 80% | 100% 100%

Airlines | Load factor | 1.3 pt | 0.9 pt | 1.0 pt | 1.3 pt | 0.6 pt | 100% 86% | 100% 100%

Airlines | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Airlines | New orders | 3.0% | 6.2% | 2.4% | 3.2% | 5.4% | 100% 95% | 100% 94%

Airlines | Output | 1.0% | 1.0% | 0.9% | 2.2% | 2.0% | 100% 86% | 100% 100%

Airlines | Price | 0.9% | 0.7% | 0.7% | 1.0% | 1.1% | 100% 80% | 100% 100%

Airlines | Shipments | 1.3% | 1.0% | 1.8% | 0.9% | 3.2% | 100% 93% | 100% 100%

Airlines | Unit cost | 1.6% | 1.6% | 2.1% | 1.3% | 1.4% | 100% 95% | 100% 100%

Airlines | Utilization | 5.7 pt | 6.2 pt | 5.6 pt | 5.2 pt | 4.5 pt | 77% 18% | 88% 44%

Data centers | Order book | 4.4% | 4.6% | 5.3% | 5.1% | 5.8% | 100% 75% | 100% 81%

Data centers | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Capacity | 0.6% | 0.7% | 0.6% | 0.6% | 0.7% | 100% 86% | 100% 94%

Data centers | Capacity announced | 5.2% | 5.7% | 4.6% | 10.3% | 6.9% | 100% 95% | 100% 100%

Data centers | Capacity in use | 0.7% | 0.7% | 0.8% | 0.8% | 0.9% | 100% 75% | 100% 81%

Data centers | Capacity under construction | 1.0% | 1.1% | 1.3% | 1.5% | 2.1% | 100% 98% | 100% 88%

Data centers | Lead time | 3.1% | 3.1% | 3.2% | 3.1% | 3.0% | 100% 100% | 100% 100%

Data centers | New orders | 3.0% | 2.6% | 5.1% | 3.1% | 4.6% | 100% 84% | 100% 100%

Data centers | Output | 0.7% | 0.7% | 0.8% | 0.8% | 0.9% | 100% 75% | 100% 81%

Data centers | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Price | 3.6% | 3.5% | 3.8% | 3.9% | 3.7% | 100% 100% | 100% 100%

Data centers | Shipments | 1.5% | 1.7% | 1.8% | 2.3% | 2.5% | 100% 86% | 100% 94%

Data centers | Unit cost | 1.8% | 1.4% | 0.9% | 0.8% | 0.9% | 100% 100% | 100% 100%

Data centers | Utilization | 0.3 pt | 0.2 pt | 0.2 pt | 0.2 pt | 0.2 pt | 100% 100% | 100% 100%

Hospitals | Order book | 3.1% | 2.8% | 3.2% | 3.5% | 3.0% | 91% 30% | 100% 94%

Hospitals | Capacity | 0.7% | 0.9% | 1.0% | 1.0% | 1.3% | 100% 91% | 100% 81%

Hospitals | Lead time | 1.9% | 1.6% | 3.3% | 3.0% | 3.1% | 100% 100% | 100% 100%

Hospitals | Load factor | 2.0 pt | 2.0 pt | 2.1 pt | 2.0 pt | 2.6 pt | 100% 34% | 100% 81%

Hospitals | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 95% 90% | 100% 100%

Hospitals | New orders | 2.9% | 2.6% | 3.0% | 3.3% | 2.7% | 98% 34% | 100% 100%

Hospitals | Output | 0.4% | 0.3% | 0.2% | 0.2% | 0.7% | 100% 77% | 100% 100%

Hospitals | Price | 0.3% | 0.4% | 0.4% | 0.3% | 0.8% | 100% 100% | 100% 100%

Hospitals | Shipments | 2.9% | 2.9% | 2.7% | 2.9% | 3.9% | 98% 27% | 100% 81%

Hospitals | Unit cost | 1.3% | 1.5% | 1.5% | 1.3% | 1.3% | 100% 57% | 100% 100%

Hospitals | Utilization | 0.5 pt | 0.6 pt | 0.9 pt | 0.7 pt | 0.9 pt | 100% 93% | 100% 94%

Hotels | Order book | 11.2% | 10.9% | 11.1% | 11.5% | 11.3% | 0% 0% | 56% 13%

Hotels | Capacity | 3.1% | 3.3% | 3.6% | 3.6% | 3.8% | 59% 0% | 19% 0%

Hotels | Lead time | 10.4% | 11.3% | 12.4% | 11.8% | 11.7% | 100% 100% | 100% 100%

Hotels | Load factor | 2.9 pt | 2.6 pt | 3.4 pt | 3.3 pt | 3.6 pt | 64% 11% | 94% 69%

Hotels | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% 100%

Hotels | New orders | 3.0% | 3.1% | 2.8% | 3.5% | 3.3% | 93% 32% | 100% 88%

Hotels | Output | 1.4% | 1.6% | 2.0% | 2.2% | 2.8% | 77% 18% | 75% 25%

Hotels | Price | 0.3% | 0.2% | 0.7% | 0.6% | 0.7% | 100% 98% | 100% 100%

Hotels | Shipments | 3.0% | 2.6% | 3.3% | 2.9% | 2.6% | 93% 27% | 100% 75%

Hotels | Unit cost | 1.3% | 1.3% | 1.1% | 1.1% | 0.6% | 100% 50% | 100% 94%

Hotels | Utilization | 2.4 pt | 2.6 pt | 2.8 pt | 2.8 pt | 2.4 pt | 50% 11% | 56% 31%

## Band widening

The members omit some uncertainty: weakly identified group means and sector parameters, and model error. The site's run therefore widens each published sector band around its median by a factor per status (PLAN decision 17). This run uses 2.55× history, 2.31× nowcast, 1.86× forecast. Recorded reason: The model's own 90% bands held 68% of the truth (all sector variables) in the 2023-2026 backtest on this world (sector fits on Modal, decision 31); factors from scripts/calibrate_bands.py (PLAN decision 17); held-out dates 0.886-0.909.

### Factors from the backtest

Fitted to the model's own bands in this backtest: what this world would call for now.

coverage, unwidened81% factor, forecast1.2×factor, nowcast1.71×factor, history1.95×

### Coverage on held-out dates

Each row: coverage at one as-of date, with factors fitted to the other dates.

2023-09-3088%2024-09-3094%2025-09-3089%2026-09-3089%

### Factors by sector

Oil and gasforecast2.16×Oil and gasnowcast2.29×Oil and gashistory2.34×Housingforecast1.05×Housingnowcast1.52×Housinghistory1.81×Foodforecast0.982×Foodnowcast1.64×Foodhistory2.28×Chemicalsforecast0.728×Chemicalsnowcast1.16×Chemicalshistory1.36×Steelforecast1.14×Steelnowcast2.53×Steelhistory1.42×Machineryforecast0.737×Machinerynowcast1.38×Machineryhistory1.38×Semiconductorsforecast0.583×Semiconductorsnowcast0.854×Semiconductorshistory0.824×Autosforecast0.874×Autosnowcast1.68×Autoshistory1.84×Wholesaleforecast2.47×Wholesalenowcast3.5×Wholesalehistory3.7×Retailforecast1.9×Retailnowcast2.03×Retailhistory1.96×Airlinesforecast1.07×Airlinesnowcast1.35×Airlineshistory1.7×Data centersforecast0.906×Data centersnowcast1.04×Data centershistory1×Hospitalsforecast0.615×Hospitalsnowcast1.16×Hospitalshistory1.57×Hotelsforecast2.46×Hotelsnowcast3.25×Hotelshistory3.79×

## Parameter recovery

Each row compares fitted with true parameters of the tracked entities in this run's fit, in prior sds.

- Bias: mean of fit minus truth.

- RMSE: root mean square of fit minus truth.

- Correlation: correlation of fit and truth across entities, which shows whether the fit recovers differences between entities.

sector | parameter | definition | bias (prior sd) | RMSE (prior sd) | correlation

Oil and gas | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.14 | 0.36  | 0.84

Oil and gas | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.46 | 0.77  | -0.72

Oil and gas | w w | pass-through of input cost to unit cost (L4)  | 0.12 | 0.53  | -0.07

Oil and gas | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.24 | 0.41  | 0.19

Oil and gas | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.10 | 0.17  | -0.39

Oil and gas | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.14 | 0.52  | 0.34

Oil and gas | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.05 | 0.41  | -0.72

Oil and gas | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | 0.03 | 0.13  | 0.39

Oil and gas | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.25 | 0.39  | 0.76

Oil and gas | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.24 | 0.43  | 0.10

Oil and gas | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.01 | 0.05  | 1.00

Oil and gas | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.13 | 0.22  | 0.84

Oil and gas | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.02 | 0.47  | -0.53

Housing | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.43 | 0.84  | 0.51

Housing | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.02 | 0.43  | 0.34

Housing | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.20 | 0.50  | 0.64

Housing | w w | pass-through of input cost to unit cost (L4)  | -0.37 | 0.49  | 0.05

Housing | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.26 | 0.48  | 0.21

Housing | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.17 | 0.28  | 0.32

Housing | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.09 | 0.51  | 0.42

Housing | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.00 | 0.25  | 0.57

Housing | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.09 | 0.34  | 0.86

Housing | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.11 | 0.31  | 0.64

Housing | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.12 | 0.39  | 0.13

Food | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.23 | 0.80  | 0.13

Food | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.10 | 0.37  | 0.29

Food | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.21 | 0.53  | 0.50

Food | w w | pass-through of input cost to unit cost (L4)  | -0.07 | 0.43  | 0.30

Food | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.20 | 0.25  | -0.60

Food | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.02 | 0.20  | 0.19

Food | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.31 | 0.39  | 0.87

Food | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.06 | 0.34  | 0.03

Food | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.01 | 0.02  | 1.00

Food | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.02 | 0.31  | 0.67

Food | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.04 | 0.06  | 0.99

Food | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.09 | 0.34  | 0.75

Food | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.02 | 0.28  | -0.54

Chemicals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.17 | 0.62  | 0.21

Chemicals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.28 | 0.56  | 0.66

Chemicals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.13 | 0.38  | 0.34

Chemicals | w w | pass-through of input cost to unit cost (L4)  | -0.58 | 0.71  | 0.34

Chemicals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.16 | 0.38  | -0.41

Chemicals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.05 | 0.26  | 0.13

Chemicals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.86 | 0.96  | 0.36

Chemicals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.27 | 0.80  | -0.27

Chemicals | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.00 | 0.02  | 1.00

Chemicals | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.12 | 0.26  | 0.52

Chemicals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.03 | 0.04  | 1.00

Chemicals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.18 | 0.38  | 0.48

Chemicals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.06 | 0.48  | 0.49

Steel | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.14 | 0.97  | -0.07

Steel | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.67 | 0.75  | 0.93

Steel | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.64 | 0.75  | 0.41

Steel | w w | pass-through of input cost to unit cost (L4)  | -0.07 | 0.30  | 0.25

Steel | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.12 | 0.44  | 0.28

Steel | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.29 | 0.36  | 0.80

Steel | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.19 | 0.82  | 0.30

Steel | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.08 | 0.45  | 0.16

Steel | export share export_share | Export share: share of shipments exported.  | 0.06 | 0.40  | 0.33

Steel | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.06 | 0.17  | 0.94

Steel | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.14 | 0.28  | 0.58

Steel | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.08 | 0.26  | 0.41

Steel | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.08 | 0.60  | 0.25

Steel | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.00 | 0.06  | 1.00

Steel | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.34 | 0.54  | 0.67

Steel | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.01 | 0.41  | 0.13

Machinery | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.06 | 0.37  | 0.30

Machinery | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.32 | 0.80  | -0.59

Machinery | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.22 | 0.52  | 0.10

Machinery | w w | pass-through of input cost to unit cost (L4)  | 0.07 | 0.29  | 0.14

Machinery | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.17 | 0.49  | -0.30

Machinery | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.17 | 0.31  | 0.01

Machinery | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.19 | 0.34  | 0.84

Machinery | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.23 | 0.44  | 0.25

Machinery | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.20 | 0.37  | 0.85

Machinery | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.02 | 0.40  | -0.89

Machinery | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.02 | 0.27  | -0.75

Machinery | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.01 | 0.58  | -0.02

Machinery | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.23 | 0.27  | 0.99

Machinery | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.21 | 0.49  | 0.43

Machinery | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.16 | 0.57  | -0.37

Semiconductors | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.11 | 0.31  | 0.20

Semiconductors | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.02 | 0.63  | -0.14

Semiconductors | w w | pass-through of input cost to unit cost (L4)  | 0.05 | 0.30  | -0.33

Semiconductors | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.35 | 0.55  | 0.07

Semiconductors | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.03 | 0.17  | -0.14

Semiconductors | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.38 | 0.50  | 0.75

Semiconductors | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.35 | 0.51  | -0.81

Semiconductors | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -0.24 | 0.29  | -0.59

Semiconductors | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.07 | 0.18  | 0.90

Semiconductors | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.05 | 0.21  | -0.18

Semiconductors | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.08 | 0.46  | -0.65

Semiconductors | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.02  | 1.00

Semiconductors | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.08 | 0.54  | -0.49

Semiconductors | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.02 | 0.22  | 0.54

Autos | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.31 | 0.88  | 0.35

Autos | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.11 | 0.43  | 0.13

Autos | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.54 | 0.64  | 0.67

Autos | w w | pass-through of input cost to unit cost (L4)  | -0.18 | 0.50  | 0.23

Autos | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.32 | 0.45  | -0.25

Autos | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.08 | 0.24  | 0.35

Autos | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.02 | 0.42  | 0.75

Autos | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.02 | 0.40  | -0.00

Autos | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.11 | 0.22  | 0.85

Autos | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.08 | 0.37  | 0.42

Autos | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.10 | 0.21  | -0.22

Autos | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.10 | 0.12  | 0.99

Autos | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.20 | 0.37  | 0.85

Autos | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.24 | 0.47  | -0.35

Wholesale | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.12 | 0.50  | 0.34

Wholesale | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.59 | 0.71  | -0.04

Wholesale | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.39 | 0.42  | 0.31

Wholesale | w w | pass-through of input cost to unit cost (L4)  | -0.69 | 0.81  | 0.22

Wholesale | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.06 | 0.17  | 0.71

Wholesale | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.07 | 0.17  | 0.13

Wholesale | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.22 | 0.51  | -0.04

Wholesale | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.30 | 0.49  | 0.12

Wholesale | export share export_share | Export share: share of shipments exported.  | 0.06 | 0.36  | 0.62

Wholesale | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.09 | 0.17  | 0.98

Wholesale | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.07 | 0.74  | -0.72

Wholesale | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.01 | 0.27  | 0.26

Retail | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.37 | 0.59  | 0.59

Retail | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.37 | 0.48  | 0.71

Retail | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.88 | 1.00  | -0.12

Retail | w w | pass-through of input cost to unit cost (L4)  | 0.19 | 0.28  | 0.84

Retail | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.10 | 0.18  | 0.21

Retail | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.14 | 0.19  | 0.82

Retail | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.36 | 0.54  | 0.34

Retail | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.22 | 0.35  | -0.30

Retail | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.02 | 0.16  | 0.96

Retail | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.26 | 0.56  | -0.40

Retail | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.04 | 0.40  | 0.37

Airlines | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.17 | 0.85  | -0.60

Airlines | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -1.51 | 1.66  | 0.14

Airlines | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.88 | 1.01  | 0.64

Airlines | w w | pass-through of input cost to unit cost (L4)  | -0.02 | 0.15  | 0.91

Airlines | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.17 | 0.42  | 0.57

Airlines | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.50 | 0.53  | -0.07

Airlines | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.12 | 0.24  | 0.96

Airlines | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.09 | 0.53  | 0.55

Airlines | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.33 | 0.48  | 0.23

Airlines | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.13 | 0.14  | 1.00

Airlines | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.00 | 0.26  | 0.77

Airlines | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.01 | 0.41  | -0.22

Data centers | w w | pass-through of input cost to unit cost (L4)  | -0.19 | 0.51  | -0.07

Data centers | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.24 | 0.37  | 0.28

Data centers | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 1.54 | 1.58  | 0.17

Data centers | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.45 | 0.57  | 0.66

Data centers | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.02 | 0.44  | 0.27

Data centers | u^norm u_norm | Normal occupancy: share of capacity leased in a normal month (L18).  | -1.47 | 1.50  | 0.87

Data centers | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -1.35 | 1.36  | 0.91

Data centers | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.01  | 1.00

Data centers | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.01 | 0.31  | 0.55

Data centers | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.34 | 0.37  | 0.38

Data centers | z_0 z0 | Starting utilization: utilization in the first month relative to normal, logit scale.  | 1.57 | 1.62  | -0.46

Hospitals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.31 | 0.41  | 0.29

Hospitals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.13 | 0.45  | 0.06

Hospitals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 1.03 | 1.09  | 0.47

Hospitals | w w | pass-through of input cost to unit cost (L4)  | -0.13 | 0.26  | 0.04

Hospitals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.17 | 0.37  | 0.03

Hospitals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.00 | 0.15  | 0.69

Hospitals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 1.00 | 1.08  | 0.48

Hospitals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.21 | 0.39  | -0.27

Hospitals | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | 0.10 | 0.36  | 0.62

Hospitals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.06  | 0.99

Hospitals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.19 | 0.39  | 0.11

Hospitals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.02 | 0.19  | -0.47

Hotels | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.75 | 1.19  | -0.36

Hotels | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.91 | 1.06  | -0.35

Hotels | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.30 | 0.47  | 0.65

Hotels | w w | pass-through of input cost to unit cost (L4)  | -0.08 | 0.33  | 0.34

Hotels | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.25 | 0.50  | -0.04

Hotels | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.34 | 0.41  | 0.05

Hotels | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.33 | 0.44  | 0.43

Hotels | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.71 | 0.79  | 0.88

Hotels | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.25 | 0.31  | 0.75

Hotels | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.06  | 1.00

Hotels | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.11 | 0.24  | 0.87

Hotels | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.13 | 0.42  | 0.09
