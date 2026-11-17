<!-- Evaluation › Against ground truth, for forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e; the page: https://mitdbg.github.io/model-2-nowcasting/accuracy.html?set=0c0a014b-d739-5e72-95a6-0b4ec4f3753e; inputs 3294f5c45ceb4fa4 -->

World shown World seed 20261115 (the bundle's only world)

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Against ground truth

No ground truth is available for real worlds.

The backtest runs Model 2 at each as-of date on the synthetic world, using only observations published by then and re-estimating each time, and scores every sector total against the truth. The backtest's runs widen their bands by 2.55× (history), 2.31× (nowcast), 1.86× (forecast), as the site's run does. Backtest workspace: /Users/michjc/lincoln/work/2026/10/m2-site-ws/w35-seed20261115-4dates. As-of dates: 2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30.

- Error of the member median, in one of three units: for most quantities, the absolute log error, shown as a percentage; for utilization and load factor, the absolute difference in percentage points; for overdue orders, phantom orders and lost demand, which are often near zero, the absolute difference in months of the sector's output ("mo"). None where the truth or the median is zero.

- Mean error by horizon averages these over all sectors and quantities.

- Coverage: share of months with the truth inside the 90% band, for the bands as published (widened, see Band widening below) and for the model's own bands before widening ("unwidened"). Green: consistent with 90% or above given the number of values scored (within two binomial standard errors); amber: within four; red: further below. Coverage near 100% is not marked: it means the bands are wide, not wrong. Cells with fewer than 8 values are not colored.

## Errors by horizon

horizon | mean error | coverage, published | coverage, unwidened | values

history (last 12 months) | 0.100 | 93% | 71% | 7,876

nowcast | 0.108 | 92% | 74% | 716

forecast, 3 months ahead | 0.118 | 90% | 77% | 716

forecast, 6 months ahead | 0.129 | 93% | 80% | 716

forecast, 12 months ahead | 0.146 | 95% | 85% | 716

## Errors by sector and quantity

Error at each horizon, then coverage pooled over the horizons, since each horizon has only one value per as-of date: history (the last 12 months before each as-of date) and ahead (the nowcast and the 3-, 6- and 12-month forecasts). Coverage cells show published bands, then unwidened in gray; most rest on 44 values (history) and 16 (ahead), and hovering a cell gives its count.

sector | quantity | history (last 12 months) | nowcast | forecast, 3 months ahead | forecast, 6 months ahead | forecast, 12 months ahead | coverage, history | coverage, ahead

Oil and gas | Order book | 56.4% | 61.9% | 66.2% | 66.3% | 63.8% | 75% 57% | 81% 63%

Oil and gas | Overdue orders | 1.60 mo | 1.93 mo | 2.02 mo | 2.12 mo | 2.05 mo | 75% 48% | 69% 63%

Oil and gas | Capacity | 0.8% | 0.6% | 0.4% | 2.0% | 9.9% | 100% 98% | 100% 100%

Oil and gas | Capacity announced | 37.4% | 42.8% | 33.5% | 35.3% | 35.2% | 100% 75% | 100% 94%

Oil and gas | Capacity under construction | 4.8% | 7.0% | 14.0% | 26.9% | 37.5% | 100% 98% | 100% 94%

Oil and gas | Finished inventory | 0.12 mo | 0.11 mo | 0.14 mo | 0.17 mo | 0.11 mo | 100% 70% | 88% 63%

Oil and gas | Input inventory | 5.7% | 5.4% | 5.4% | 5.2% | 11.1% | 100% 100% | 100% 100%

Oil and gas | Lead time | 54.8% | 57.9% | 72.5% | 74.3% | 81.1% | 75% 50% | 81% 63%

Oil and gas | New orders | 7.8% | 6.3% | 12.9% | 12.0% | 7.7% | 77% 45% | 81% 81%

Oil and gas | Output | 2.0% | 1.7% | 4.3% | 7.5% | 13.8% | 100% 73% | 100% 81%

Oil and gas | Phantom orders | 0.15 mo | 0.20 mo | 0.24 mo | 0.29 mo | 0.26 mo | 75% 52% | 81% 69%

Oil and gas | Price | 4.2% | 4.6% | 13.8% | 22.3% | 26.1% | 100% 100% | 100% 100%

Oil and gas | Shipments | 2.5% | 2.1% | 6.2% | 7.3% | 12.3% | 100% 61% | 100% 75%

Oil and gas | Unit cost | 2.5% | 2.1% | 2.0% | 2.4% | 2.0% | 100% 75% | 100% 81%

Oil and gas | Utilization | 1.9 pt | 2.0 pt | 4.2 pt | 5.1 pt | 5.0 pt | 100% 48% | 100% 63%

Housing | Order book | 3.3% | 3.1% | 3.3% | 3.5% | 3.0% | 100% 91% | 100% 100%

Housing | Overdue orders | 0.01 mo | 0.00 mo | 0.00 mo | 0.01 mo | 0.02 mo | 100% 100% | 100% 100%

Housing | Capacity | 4.5% | 5.3% | 5.7% | 5.7% | 6.3% | 98% 25% | 50% 25%

Housing | Finished inventory | 0.09 mo | 0.08 mo | 0.09 mo | 0.09 mo | 0.12 mo | 100% 100% | 94% 75%

Housing | Input inventory | 3.4% | 3.4% | 3.0% | 2.9% | 2.7% | 100% 100% | 100% 100%

Housing | Lead time | 6.9% | 7.8% | 9.7% | 10.5% | 12.2% | 100% 100% | 100% 100%

Housing | New orders | 1.4% | 0.7% | 0.6% | 2.0% | 2.3% | 100% 100% | 100% 100%

Housing | Output | 0.5% | 0.6% | 0.7% | 0.3% | 1.5% | 100% 95% | 100% 100%

Housing | Phantom orders | 0.01 mo | 0.01 mo | 0.02 mo | 0.03 mo | 0.04 mo | 100% 75% | 81% 75%

Housing | Price | 4.3% | 5.1% | 5.6% | 6.3% | 7.3% | 91% 50% | 81% 63%

Housing | Shipments | 0.3% | 0.2% | 0.5% | 0.7% | 1.3% | 100% 100% | 100% 100%

Housing | Unit cost | 5.4% | 5.5% | 5.7% | 6.0% | 5.7% | 50% 50% | 69% 50%

Housing | Utilization | 3.3 pt | 3.8 pt | 4.0 pt | 4.5 pt | 5.1 pt | 98% 34% | 81% 38%

Food | Order book | 1.1% | 2.2% | 2.6% | 2.6% | 1.8% | 100% 100% | 100% 100%

Food | Overdue orders | 0.00 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 100% 100% | 100% 100%

Food | Capacity | 0.5% | 0.6% | 0.7% | 0.8% | 1.0% | 100% 66% | 81% 63%

Food | Finished inventory | 0.08 mo | 0.11 mo | 0.09 mo | 0.03 mo | 0.06 mo | 100% 100% | 100% 100%

Food | Input inventory | 1.5% | 1.3% | 1.6% | 1.9% | 1.4% | 100% 100% | 100% 100%

Food | Lead time | 10.0% | 11.0% | 15.2% | 14.0% | 9.2% | 100% 100% | 100% 100%

Food | New orders | 0.8% | 1.1% | 0.4% | 1.3% | 2.0% | 100% 100% | 100% 100%

Food | Output | 0.2% | 0.4% | 1.3% | 1.0% | 1.5% | 100% 100% | 100% 100%

Food | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 89% | 100% 94%

Food | Price | 2.2% | 3.2% | 3.4% | 4.0% | 3.6% | 100% 100% | 100% 100%

Food | Shipments | 0.6% | 0.7% | 0.6% | 1.3% | 2.5% | 100% 100% | 100% 100%

Food | Unit cost | 3.3% | 3.6% | 3.0% | 3.2% | 3.3% | 75% 50% | 100% 81%

Food | Utilization | 0.4 pt | 0.7 pt | 1.6 pt | 1.4 pt | 0.8 pt | 100% 82% | 100% 94%

Chemicals | Order book | 2.6% | 1.7% | 2.7% | 2.5% | 3.9% | 100% 66% | 100% 100%

Chemicals | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Chemicals | Capacity | 1.0% | 1.2% | 1.7% | 2.0% | 2.3% | 100% 66% | 88% 75%

Chemicals | Finished inventory | 0.03 mo | 0.04 mo | 0.04 mo | 0.07 mo | 0.09 mo | 100% 100% | 100% 100%

Chemicals | Input inventory | 1.7% | 1.4% | 1.6% | 2.5% | 2.2% | 100% 100% | 100% 100%

Chemicals | Lead time | 6.1% | 5.1% | 4.0% | 5.5% | 11.2% | 100% 100% | 100% 100%

Chemicals | New orders | 1.7% | 1.5% | 1.4% | 1.4% | 2.4% | 100% 89% | 100% 100%

Chemicals | Output | 0.7% | 0.7% | 1.9% | 2.2% | 1.2% | 100% 89% | 100% 94%

Chemicals | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 48% | 94% 81%

Chemicals | Price | 6.6% | 6.7% | 8.3% | 8.4% | 6.7% | 59% 43% | 81% 63%

Chemicals | Shipments | 1.4% | 1.3% | 0.3% | 1.6% | 2.6% | 100% 89% | 100% 100%

Chemicals | Unit cost | 9.0% | 9.1% | 9.5% | 10.0% | 9.8% | 41% 0% | 56% 13%

Chemicals | Utilization | 0.4 pt | 0.9 pt | 1.8 pt | 2.0 pt | 2.6 pt | 100% 98% | 100% 100%

Steel | Order book | 14.1% | 14.2% | 14.6% | 14.7% | 15.3% | 75% 75% | 75% 75%

Steel | Overdue orders | 1.90 mo | 1.94 mo | 1.91 mo | 1.96 mo | 2.06 mo | 100% 50% | 100% 50%

Steel | Capacity | 0.7% | 1.0% | 1.4% | 1.5% | 2.2% | 100% 84% | 94% 69%

Steel | Finished inventory | 0.04 mo | 0.04 mo | 0.04 mo | 0.03 mo | 0.03 mo | 98% 77% | 100% 69%

Steel | Input inventory | 1.7% | 1.3% | 1.5% | 2.2% | 2.6% | 100% 100% | 100% 100%

Steel | Lead time | 9.3% | 7.3% | 11.1% | 14.1% | 17.4% | 100% 98% | 100% 81%

Steel | New orders | 4.9% | 3.3% | 4.6% | 6.9% | 5.2% | 100% 84% | 100% 100%

Steel | Output | 0.8% | 1.1% | 1.6% | 1.7% | 1.4% | 100% 98% | 100% 100%

Steel | Phantom orders | 0.88 mo | 0.98 mo | 0.89 mo | 0.80 mo | 0.68 mo | 100% 50% | 100% 75%

Steel | Price | 4.9% | 5.8% | 6.5% | 7.1% | 5.9% | 100% 64% | 100% 75%

Steel | Shipments | 1.0% | 0.8% | 1.6% | 1.6% | 1.4% | 100% 84% | 100% 94%

Steel | Unit cost | 16.1% | 15.8% | 15.9% | 15.9% | 16.3% | 0% 0% | 19% 0%

Steel | Utilization | 0.7 pt | 0.8 pt | 1.3 pt | 1.2 pt | 1.8 pt | 100% 84% | 100% 100%

Machinery | Order book | 38.4% | 42.9% | 44.1% | 48.5% | 54.9% | 89% 50% | 56% 50%

Machinery | Overdue orders | 3.67 mo | 4.22 mo | 4.41 mo | 4.72 mo | 5.73 mo | 75% 50% | 50% 50%

Machinery | Capacity | 1.1% | 1.2% | 1.3% | 1.2% | 1.2% | 100% 100% | 100% 100%

Machinery | Finished inventory | 0.17 mo | 0.12 mo | 0.11 mo | 0.11 mo | 0.11 mo | 100% 75% | 100% 81%

Machinery | Input inventory | 6.1% | 5.8% | 4.3% | 6.3% | 6.9% | 100% 100% | 100% 100%

Machinery | Lead time | 26.3% | 29.6% | 50.1% | 66.7% | 77.8% | 100% 100% | 100% 63%

Machinery | New orders | 17.8% | 18.9% | 18.1% | 25.3% | 27.3% | 100% 70% | 81% 63%

Machinery | Output | 4.7% | 3.7% | 6.8% | 7.7% | 7.5% | 100% 57% | 100% 63%

Machinery | Phantom orders | 0.54 mo | 0.69 mo | 0.79 mo | 1.25 mo | 2.26 mo | 100% 100% | 100% 75%

Machinery | Price | 25.1% | 27.9% | 33.1% | 38.1% | 42.0% | 100% 100% | 100% 100%

Machinery | Shipments | 5.2% | 4.3% | 7.8% | 8.3% | 7.6% | 100% 75% | 100% 81%

Machinery | Unit cost | 7.6% | 7.7% | 7.6% | 7.7% | 8.3% | 48% 25% | 63% 38%

Machinery | Utilization | 4.1 pt | 3.3 pt | 6.4 pt | 7.1 pt | 6.7 pt | 100% 64% | 100% 69%

Semiconductors | Order book | 1.7% | 1.2% | 0.9% | 1.2% | 2.6% | 100% 95% | 100% 100%

Semiconductors | Overdue orders | 0.00 mo | 0.00 mo | 0.01 mo | 0.01 mo | 0.02 mo | 100% 100% | 100% 100%

Semiconductors | Capacity | 0.4% | 0.3% | 0.2% | 0.2% | 0.5% | 100% 89% | 100% 100%

Semiconductors | Capacity announced | 5.9% | 4.4% | 6.1% | 11.0% | 6.0% | 100% 100% | 100% 100%

Semiconductors | Capacity under construction | 3.2% | 1.3% | 2.2% | 2.3% | 3.7% | 100% 100% | 100% 100%

Semiconductors | Finished inventory | 0.15 mo | 0.15 mo | 0.13 mo | 0.12 mo | 0.08 mo | 100% 100% | 100% 100%

Semiconductors | Input inventory | 5.4% | 4.9% | 5.2% | 4.4% | 4.3% | 100% 100% | 100% 100%

Semiconductors | Lead time | 4.4% | 3.5% | 2.7% | 2.9% | 6.7% | 100% 100% | 100% 100%

Semiconductors | New orders | 1.3% | 1.9% | 1.4% | 2.7% | 2.8% | 100% 98% | 100% 100%

Semiconductors | Output | 0.6% | 0.4% | 0.5% | 0.2% | 1.5% | 100% 100% | 100% 100%

Semiconductors | Phantom orders | 0.10 mo | 0.08 mo | 0.04 mo | 0.03 mo | 0.03 mo | 41% 0% | 56% 50%

Semiconductors | Price | 2.7% | 2.9% | 2.6% | 1.8% | 3.2% | 100% 100% | 100% 100%

Semiconductors | Shipments | 0.7% | 0.4% | 0.4% | 0.8% | 1.6% | 100% 95% | 100% 100%

Semiconductors | Unit cost | 1.8% | 1.8% | 2.0% | 1.7% | 2.1% | 100% 70% | 100% 81%

Semiconductors | Utilization | 0.5 pt | 0.2 pt | 0.2 pt | 0.3 pt | 0.7 pt | 100% 100% | 100% 100%

Autos | Order book | 2.0% | 2.2% | 1.7% | 2.2% | 3.4% | 100% 68% | 100% 100%

Autos | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 0.01 mo | 100% 100% | 100% 100%

Autos | Capacity | 0.9% | 1.0% | 0.9% | 1.0% | 1.6% | 86% 75% | 100% 75%

Autos | Finished inventory | 0.04 mo | 0.05 mo | 0.06 mo | 0.05 mo | 0.04 mo | 100% 73% | 100% 88%

Autos | Input inventory | 5.7% | 5.8% | 5.1% | 4.4% | 4.6% | 100% 100% | 100% 100%

Autos | Lead time | 5.3% | 7.7% | 10.8% | 8.5% | 15.4% | 100% 100% | 100% 100%

Autos | New orders | 1.5% | 1.4% | 1.4% | 1.3% | 2.1% | 100% 93% | 100% 100%

Autos | Output | 0.6% | 0.9% | 1.2% | 1.2% | 1.5% | 100% 86% | 100% 94%

Autos | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 95% 64% | 100% 88%

Autos | Price | 4.6% | 4.4% | 4.1% | 4.3% | 5.7% | 100% 25% | 100% 75%

Autos | Shipments | 1.2% | 0.8% | 1.1% | 0.5% | 1.6% | 100% 91% | 100% 100%

Autos | Unit cost | 5.4% | 5.4% | 5.6% | 5.9% | 6.3% | 50% 50% | 81% 50%

Autos | Utilization | 0.5 pt | 0.8 pt | 1.6 pt | 1.8 pt | 1.7 pt | 100% 73% | 100% 81%

Wholesale | Order book | 3.2% | 3.6% | 4.2% | 5.2% | 8.1% | 100% 73% | 100% 94%

Wholesale | Capacity | 12.7% | 13.5% | 14.5% | 15.0% | 15.7% | 27% 25% | 25% 13%

Wholesale | Finished inventory | 0.19 mo | 0.17 mo | 0.22 mo | 0.26 mo | 0.34 mo | 100% 30% | 100% 75%

Wholesale | Lead time | 27.9% | 29.2% | 30.0% | 31.7% | 35.1% | 98% 75% | 81% 75%

Wholesale | Load factor | 1.5 pt | 1.6 pt | 1.9 pt | 2.9 pt | 2.5 pt | 100% 91% | 100% 88%

Wholesale | Lost demand | 0.06 mo | 0.06 mo | 0.08 mo | 0.09 mo | 0.12 mo | 55% 41% | 63% 44%

Wholesale | New orders | 4.7% | 4.3% | 5.8% | 4.9% | 5.3% | 100% 59% | 100% 88%

Wholesale | Output | 5.6% | 4.6% | 5.5% | 6.3% | 7.0% | 57% 9% | 63% 25%

Wholesale | Price | 0.9% | 1.5% | 1.8% | 1.7% | 1.5% | 100% 98% | 100% 100%

Wholesale | Shipments | 4.6% | 5.9% | 6.1% | 6.5% | 6.4% | 98% 34% | 88% 44%

Wholesale | Unit cost | 2.1% | 2.7% | 3.3% | 2.5% | 2.9% | 95% 75% | 100% 88%

Wholesale | Utilization | 7.8 pt | 7.7 pt | 7.0 pt | 7.1 pt | 6.9 pt | 75% 50% | 75% 56%

Retail | Order book | 4.8% | 3.5% | 4.6% | 6.4% | 4.5% | 100% 70% | 100% 88%

Retail | Capacity | 6.9% | 7.4% | 8.2% | 9.2% | 11.2% | 68% 43% | 50% 19%

Retail | Finished inventory | 0.23 mo | 0.35 mo | 0.41 mo | 0.43 mo | 0.53 mo | 100% 75% | 94% 75%

Retail | Lead time | 19.6% | 23.6% | 21.9% | 20.9% | 22.0% | 100% 75% | 100% 75%

Retail | Load factor | 4.1 pt | 3.0 pt | 3.7 pt | 1.5 pt | 2.7 pt | 100% 75% | 94% 88%

Retail | Lost demand | 0.05 mo | 0.04 mo | 0.04 mo | 0.06 mo | 0.07 mo | 73% 61% | 88% 63%

Retail | New orders | 4.8% | 3.0% | 5.4% | 7.7% | 5.4% | 100% 70% | 100% 88%

Retail | Output | 5.3% | 5.6% | 6.2% | 7.3% | 8.0% | 68% 36% | 50% 19%

Retail | Price | 0.7% | 1.1% | 1.4% | 2.2% | 2.0% | 100% 95% | 100% 100%

Retail | Shipments | 4.1% | 2.9% | 6.8% | 6.7% | 5.6% | 100% 73% | 94% 63%

Retail | Unit cost | 1.8% | 2.1% | 1.9% | 2.6% | 2.5% | 100% 68% | 100% 100%

Retail | Utilization | 1.3 pt | 1.9 pt | 1.4 pt | 1.5 pt | 2.3 pt | 100% 73% | 94% 81%

Airlines | Order book | 7.7% | 7.0% | 7.0% | 8.7% | 6.5% | 100% 27% | 100% 69%

Airlines | Capacity | 5.9% | 6.2% | 7.1% | 7.3% | 6.6% | 100% 11% | 81% 25%

Airlines | Lead time | 12.7% | 13.6% | 15.1% | 14.6% | 12.8% | 100% 100% | 100% 100%

Airlines | Load factor | 1.6 pt | 1.5 pt | 2.5 pt | 2.3 pt | 2.7 pt | 100% 82% | 100% 100%

Airlines | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Airlines | New orders | 3.8% | 1.9% | 2.2% | 3.7% | 1.7% | 100% 84% | 100% 100%

Airlines | Output | 1.2% | 1.4% | 2.1% | 3.0% | 2.6% | 100% 64% | 100% 88%

Airlines | Price | 0.8% | 0.9% | 0.9% | 1.1% | 1.1% | 100% 91% | 100% 100%

Airlines | Shipments | 1.5% | 1.0% | 2.0% | 0.7% | 1.7% | 100% 93% | 100% 100%

Airlines | Unit cost | 1.5% | 1.0% | 1.5% | 0.8% | 1.1% | 100% 91% | 100% 100%

Airlines | Utilization | 3.8 pt | 3.8 pt | 3.8 pt | 3.4 pt | 3.4 pt | 100% 23% | 94% 50%

Data centers | Order book | 4.6% | 3.6% | 3.3% | 2.8% | 1.5% | 100% 75% | 100% 100%

Data centers | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Capacity | 2.1% | 2.1% | 2.0% | 2.0% | 2.0% | 41% 25% | 25% 25%

Data centers | Capacity announced | 5.5% | 3.2% | 5.5% | 8.9% | 2.1% | 100% 91% | 100% 100%

Data centers | Capacity in use | 1.3% | 1.1% | 1.0% | 0.9% | 0.9% | 100% 18% | 100% 56%

Data centers | Capacity under construction | 0.9% | 1.0% | 1.1% | 1.1% | 0.9% | 100% 100% | 100% 100%

Data centers | Lead time | 8.8% | 8.7% | 8.7% | 8.7% | 8.7% | 100% 0% | 100% 0%

Data centers | New orders | 4.6% | 6.5% | 5.8% | 5.4% | 7.2% | 98% 73% | 100% 88%

Data centers | Output | 1.3% | 1.1% | 1.0% | 0.9% | 0.9% | 100% 18% | 100% 56%

Data centers | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% –

Data centers | Price | 2.6% | 2.8% | 2.4% | 2.2% | 2.3% | 100% 100% | 100% 100%

Data centers | Shipments | 4.0% | 4.7% | 5.2% | 5.7% | 6.4% | 98% 27% | 100% 50%

Data centers | Unit cost | 1.5% | 1.8% | 2.1% | 1.3% | 1.3% | 100% 100% | 100% 100%

Data centers | Utilization | 0.9 pt | 1.2 pt | 1.3 pt | 1.5 pt | 1.9 pt | 100% 27% | 94% 6%

Hospitals | Order book | 1.6% | 1.6% | 1.6% | 1.4% | 2.2% | 100% 80% | 100% 100%

Hospitals | Capacity | 1.4% | 1.6% | 1.8% | 2.0% | 2.4% | 100% 50% | 81% 50%

Hospitals | Lead time | 2.9% | 3.2% | 2.9% | 2.6% | 3.1% | 100% 100% | 100% 100%

Hospitals | Load factor | 0.9 pt | 1.1 pt | 1.1 pt | 0.8 pt | 1.3 pt | 100% 82% | 100% 88%

Hospitals | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 98% 92% | 94% 83%

Hospitals | New orders | 1.4% | 1.2% | 1.2% | 1.2% | 1.8% | 100% 80% | 100% 100%

Hospitals | Output | 0.6% | 0.8% | 1.0% | 1.2% | 1.6% | 100% 82% | 100% 81%

Hospitals | Price | 0.3% | 0.5% | 0.5% | 0.8% | 1.2% | 100% 100% | 100% 100%

Hospitals | Shipments | 1.3% | 1.8% | 2.0% | 1.3% | 2.0% | 100% 80% | 100% 94%

Hospitals | Unit cost | 0.4% | 0.4% | 0.6% | 0.9% | 1.3% | 100% 100% | 100% 100%

Hospitals | Utilization | 0.9 pt | 0.9 pt | 0.9 pt | 0.9 pt | 1.3 pt | 100% 68% | 100% 88%

Hotels | Order book | 10.9% | 11.3% | 11.5% | 11.4% | 11.8% | 2% 0% | 69% 19%

Hotels | Capacity | 3.0% | 3.2% | 3.4% | 3.7% | 4.6% | 48% 0% | 0% 0%

Hotels | Lead time | 16.6% | 17.3% | 19.1% | 20.2% | 21.0% | 100% 86% | 100% 88%

Hotels | Load factor | 4.0 pt | 4.1 pt | 4.5 pt | 4.8 pt | 6.0 pt | 66% 0% | 75% 38%

Hotels | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100%

Hotels | New orders | 4.9% | 5.4% | 5.4% | 5.6% | 5.7% | 82% 5% | 100% 69%

Hotels | Output | 1.0% | 1.2% | 1.5% | 1.8% | 2.3% | 98% 20% | 100% 38%

Hotels | Price | 0.2% | 0.2% | 0.4% | 0.6% | 0.7% | 100% 100% | 100% 100%

Hotels | Shipments | 4.9% | 4.6% | 4.9% | 5.3% | 5.9% | 77% 0% | 94% 56%

Hotels | Unit cost | 1.4% | 1.6% | 1.7% | 1.9% | 1.5% | 98% 50% | 100% 94%

Hotels | Utilization | 1.9 pt | 1.8 pt | 1.8 pt | 1.9 pt | 2.1 pt | 73% 0% | 88% 31%

## Band widening

The members omit some uncertainty: weakly identified group means and sector parameters, and model error. The site's run therefore widens each published sector band around its median by a factor per status (PLAN decision 17). This run uses 2.55× history, 2.31× nowcast, 1.86× forecast. Recorded reason: The model's own 90% bands held 68% of the truth (all sector variables) in the 2023-2026 backtest on this world (sector fits on Modal, decision 31); factors from scripts/calibrate_bands.py (PLAN decision 17); held-out dates 0.886-0.909.

### Factors from the backtest

Fitted to the model's own bands in this backtest: what this world would call for now.

coverage, unwidened76% factor, forecast1.58×factor, nowcast2.02×factor, history2.14×

### Coverage on held-out dates

Each row: coverage at one as-of date, with factors fitted to the other dates.

2023-09-3091%2024-09-3087%2025-09-3092%2026-09-3089%

### Factors by sector

Oil and gasforecast1.53×Oil and gasnowcast2.15×Oil and gashistory2.26×Housingforecast1.69×Housingnowcast2.06×Housinghistory1.76×Foodforecast0.547×Foodnowcast0.874×Foodhistory0.924×Chemicalsforecast1.13×Chemicalsnowcast2×Chemicalshistory2.09×Steelforecast1.71×Steelnowcast0.305×Steelhistory2.4×Machineryforecast2.06×Machinerynowcast2.33×Machineryhistory2.15×Semiconductorsforecast0.497×Semiconductorsnowcast0.649×Semiconductorshistory1.02×Autosforecast0.945×Autosnowcast1.54×Autoshistory1.73×Wholesaleforecast2.48×Wholesalenowcast2.88×Wholesalehistory3.06×Retailforecast2.05×Retailnowcast2.26×Retailhistory2.31×Airlinesforecast1.24×Airlinesnowcast1.55×Airlineshistory1.84×Data centersforecast1.79×Data centersnowcast1.84×Data centershistory2.1×Hospitalsforecast0.703×Hospitalsnowcast1.15×Hospitalshistory1.17×Hotelsforecast2.29×Hotelsnowcast2.87×Hotelshistory3.62×

## Parameter recovery

Each row compares fitted with true parameters of the tracked entities in this run's fit, in prior sds.

- Bias: mean of fit minus truth.

- RMSE: root mean square of fit minus truth.

- Correlation: correlation of fit and truth across entities, which shows whether the fit recovers differences between entities.

sector | parameter | definition | bias (prior sd) | RMSE (prior sd) | correlation

Oil and gas | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.17 | 0.46  | 0.56

Oil and gas | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.01 | 1.33  | 0.60

Oil and gas | w w | pass-through of input cost to unit cost (L4)  | -0.02 | 0.34  | 0.09

Oil and gas | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.10 | 0.20  | 0.36

Oil and gas | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.06 | 0.14  | 0.78

Oil and gas | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.33 | 0.46  | 0.90

Oil and gas | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.36 | 0.61  | -0.54

Oil and gas | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | 0.09 | 0.28  | 0.62

Oil and gas | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.29 | 0.59  | 0.12

Oil and gas | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.21 | 0.40  | 0.28

Oil and gas | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.01 | 0.03  | 1.00

Oil and gas | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.05 | 0.26  | 0.40

Oil and gas | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.26 | 0.48  | 0.65

Housing | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.77 | 1.12  | -0.25

Housing | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.28 | 0.61  | -0.30

Housing | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.22 | 0.32  | 0.57

Housing | w w | pass-through of input cost to unit cost (L4)  | -0.03 | 0.43  | -0.10

Housing | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.05 | 0.11  | 0.62

Housing | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.03 | 0.16  | -0.17

Housing | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.42 | 0.65  | 0.14

Housing | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.02 | 0.30  | 0.07

Housing | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.08 | 0.31  | 0.83

Housing | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.05 | 0.20  | 0.93

Housing | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.09 | 0.39  | -0.64

Food | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.31 | 0.50  | 0.27

Food | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.09 | 0.42  | -0.27

Food | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.02 | 0.53  | 0.27

Food | w w | pass-through of input cost to unit cost (L4)  | 0.16 | 0.36  | 0.16

Food | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.01 | 0.53  | -0.03

Food | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.00 | 0.12  | 0.66

Food | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.08 | 0.59  | 0.44

Food | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.11 | 0.41  | -0.56

Food | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.00 | 0.02  | 1.00

Food | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.26 | 0.41  | 0.39

Food | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.02 | 0.05  | 0.99

Food | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.31 | 0.40  | 0.80

Food | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.20 | 0.45  | 0.10

Chemicals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.30 | 1.95  | -0.83

Chemicals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.44 | 0.47  | 0.91

Chemicals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.87 | 0.95  | 0.00

Chemicals | w w | pass-through of input cost to unit cost (L4)  | -0.86 | 0.97  | -0.01

Chemicals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.28 | 0.53  | -0.46

Chemicals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.08 | 0.19  | 0.69

Chemicals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.02 | 0.39  | 0.43

Chemicals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.26 | 0.44  | 0.08

Chemicals | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | -0.01 | 0.02  | 1.00

Chemicals | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.03 | 0.23  | 0.40

Chemicals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.04  | 1.00

Chemicals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.29 | 0.48  | 0.58

Chemicals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.22 | 0.42  | 0.66

Steel | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.13 | 1.03  | 0.07

Steel | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.41 | 0.87  | 0.04

Steel | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.48 | 0.83  | 0.06

Steel | w w | pass-through of input cost to unit cost (L4)  | 0.18 | 0.46  | -0.23

Steel | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.27 | 0.45  | 0.56

Steel | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.40 | 0.88  | 0.61

Steel | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.65 | 0.90  | 0.59

Steel | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 1.60 | 2.59  | -0.59

Steel | export share export_share | Export share: share of shipments exported.  | -0.07 | 0.29  | 0.61

Steel | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.10 | 0.26  | 0.86

Steel | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.00 | 0.57  | 0.39

Steel | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.14 | 0.42  | 0.52

Steel | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.09 | 0.65  | 0.40

Steel | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.06 | 0.10  | 0.99

Steel | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.57 | 0.94  | 0.25

Steel | m_0 m0 | Starting markup: markup in the first month, log scale.  | -1.18 | 2.09  | 0.19

Machinery | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.47 | 0.50  | 0.49

Machinery | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.33 | 0.45  | 0.18

Machinery | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.00 | 0.36  | -0.51

Machinery | w w | pass-through of input cost to unit cost (L4)  | -0.25 | 0.44  | 0.13

Machinery | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.52 | 0.54  | 0.03

Machinery | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.07 | 0.17  | -0.11

Machinery | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.07 | 0.46  | 0.69

Machinery | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.04 | 0.32  | -0.31

Machinery | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.31 | 0.56  | 0.44

Machinery | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.06 | 0.13  | -0.56

Machinery | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.02 | 0.19  | 0.33

Machinery | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.35 | 0.65  | -0.35

Machinery | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.17 | 0.45  | 0.96

Machinery | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.45 | 0.63  | 0.18

Machinery | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.96 | 1.90  | 0.01

Semiconductors | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.06 | 0.41  | –

Semiconductors | w w | pass-through of input cost to unit cost (L4)  | -0.03 | 0.25  | –

Semiconductors | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.13 | 0.42  | –

Semiconductors | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.15 | 0.32  | –

Semiconductors | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | 0.08 | 0.14  | –

Semiconductors | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.17 | 0.43  | 0.04

Semiconductors | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.02  | 1.00

Semiconductors | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.06 | 0.34  | –

Semiconductors | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.24 | 0.45  | –

Autos | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.22 | 0.68  | 0.11

Autos | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.36 | 0.62  | 0.22

Autos | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.07 | 0.65  | -0.49

Autos | w w | pass-through of input cost to unit cost (L4)  | 0.18 | 0.42  | -0.50

Autos | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.03 | 0.29  | 0.51

Autos | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.07 | 0.19  | 0.12

Autos | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.26 | 0.53  | 0.82

Autos | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.29 | 0.64  | -0.32

Autos | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.11 | 0.25  | 0.73

Autos | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.10 | 0.15  | 0.74

Autos | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.20 | 0.32  | 0.26

Autos | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.06 | 0.09  | 1.00

Autos | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.01 | 0.52  | 0.08

Autos | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.04 | 0.48  | -0.09

Wholesale | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.48 | 0.84  | -0.47

Wholesale | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.17 | 0.64  | -0.20

Wholesale | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.21 | 0.68  | -0.10

Wholesale | w w | pass-through of input cost to unit cost (L4)  | -0.44 | 0.80  | -0.00

Wholesale | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.14 | 0.49  | 0.13

Wholesale | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.10 | 0.15  | 0.87

Wholesale | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.17 | 0.59  | -0.14

Wholesale | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.10 | 0.43  | 0.23

Wholesale | export share export_share | Export share: share of shipments exported.  | 0.07 | 0.35  | 0.58

Wholesale | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.10 | 0.16  | 0.98

Wholesale | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.22 | 0.73  | -0.29

Wholesale | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.19 | 0.93  | -0.28

Retail | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -1.43 | 1.82  | 0.49

Retail | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.18 | 0.27  | 0.94

Retail | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.89 | 1.26  | 0.12

Retail | w w | pass-through of input cost to unit cost (L4)  | 0.02 | 0.39  | 0.59

Retail | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.12 | 0.38  | 0.69

Retail | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.24 | 0.49  | -0.14

Retail | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.37 | 0.63  | 0.17

Retail | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.18 | 0.32  | 0.47

Retail | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.14 | 0.40  | 0.88

Retail | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.14 | 0.52  | -0.22

Retail | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.36 | 0.85  | -0.49

Airlines | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.45 | 1.05  | -0.67

Airlines | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.89 | 0.96  | 0.81

Airlines | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.29 | 0.33  | 0.95

Airlines | w w | pass-through of input cost to unit cost (L4)  | 0.17 | 0.41  | 0.55

Airlines | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.14 | 0.26  | -0.48

Airlines | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.39 | 0.44  | 0.25

Airlines | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.01 | 0.38  | 0.66

Airlines | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.11 | 0.41  | 0.77

Airlines | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.03 | 0.27  | 0.88

Airlines | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.05 | 0.07  | 1.00

Airlines | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.01 | 0.15  | 0.77

Airlines | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.16 | 0.39  | 0.54

Data centers | w w | pass-through of input cost to unit cost (L4)  | 0.41 | 0.47  | 0.10

Data centers | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.31 | 0.64  | -0.33

Data centers | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 1.56 | 1.64  | 0.61

Data centers | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.55 | 0.67  | 0.69

Data centers | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.05 | 0.41  | -0.10

Data centers | u^norm u_norm | Normal occupancy: share of capacity leased in a normal month (L18).  | -1.27 | 1.29  | 0.74

Data centers | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -1.00 | 1.01  | 0.97

Data centers | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.01  | 1.00

Data centers | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.00 | 0.54  | -0.16

Data centers | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.36 | 0.53  | -0.28

Data centers | z_0 z0 | Starting utilization: utilization in the first month relative to normal, logit scale.  | 1.38 | 1.41  | 0.15

Hospitals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.18 | 0.51  | -0.16

Hospitals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.20 | 0.60  | 0.54

Hospitals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.04 | 0.31  | 0.28

Hospitals | w w | pass-through of input cost to unit cost (L4)  | -0.22 | 0.43  | -0.17

Hospitals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.00 | 0.27  | -0.42

Hospitals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.17 | 0.25  | 0.32

Hospitals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.38 | 0.54  | 0.61

Hospitals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.06 | 0.27  | -0.38

Hospitals | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.12 | 0.18  | 0.88

Hospitals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.00 | 0.07  | 0.99

Hospitals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.00 | 0.30  | 0.46

Hospitals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.10 | 0.17  | 0.10

Hotels | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.41 | 1.27  | 0.45

Hotels | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.66 | 0.96  | 0.28

Hotels | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.19 | 0.76  | 0.14

Hotels | w w | pass-through of input cost to unit cost (L4)  | -0.03 | 0.31  | 0.26

Hotels | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.01 | 0.61  | 0.31

Hotels | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.38 | 0.46  | 0.58

Hotels | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.00 | 0.21  | 0.94

Hotels | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.59 | 0.81  | 0.18

Hotels | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.11 | 0.32  | 0.76

Hotels | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.00 | 0.04  | 1.00

Hotels | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.07 | 0.28  | 0.84

Hotels | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.11 | 0.50  | -0.68
