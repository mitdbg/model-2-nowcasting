<!-- Evaluation › Against ground truth, for forecast 976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; the page: https://mitdbg.github.io/model-2-nowcasting/accuracy.html?set=976debf3-7f2a-5e1a-aec0-e24ae8ea99d3 -->

# Against ground truth✎

No ground truth is available for real worlds.

The backtest runs Model 2 at each as-of date on the synthetic world, using only observations published by then and re-estimating each time, and scores every sector total against the truth. The backtest's runs widen their bands by 2.55× (history), 2.31× (nowcast), 1.86× (forecast), as the site's run does. Backtest workspace: /Users/michjc/lincoln/work/2026/10/m2-site-ws/w34-seed20261112-4dates. As-of dates: 2023-09-30, 2024-09-30, 2025-09-30, 2026-09-30.

- Error of the member median, in one of three units: for most quantities, the absolute log error, shown as a percentage; for utilization and load factor, the absolute difference in percentage points; for overdue orders, phantom orders and lost demand, which are often near zero, the absolute difference in months of the sector's output ("mo"). None where the truth or the median is zero.

- Mean error by horizon averages these over all sectors and quantities.

- Coverage: share of months with the truth inside the 90% band, for the bands as published (widened, see Band widening below) and for the model's own bands before widening ("unwidened"). Green: consistent with 90% or above given the number of values scored (within two binomial standard errors); amber: within four; red: further below. Coverage near 100% is not marked: it means the bands are wide, not wrong. Cells with fewer than 8 values are not colored.

## Errors by horizon✎

horizon | mean error | coverage, published | coverage, unwidened | values |

history (last 12 months) | 0.045 | 92% | 74% | 7,876 | ✎

nowcast | 0.047 | 92% | 76% | 716 | ✎

forecast, 3 months ahead | 0.050 | 94% | 79% | 716 | ✎

forecast, 6 months ahead | 0.052 | 96% | 83% | 716 | ✎

forecast, 12 months ahead | 0.055 | 98% | 90% | 716 | ✎

## Errors by sector and quantity✎

Error at each horizon, then coverage pooled over the horizons, since each horizon has only one value per as-of date: history (the last 12 months before each as-of date) and ahead (the nowcast and the 3-, 6- and 12-month forecasts). Coverage cells show published bands, then unwidened in gray; most rest on 44 values (history) and 16 (ahead), and hovering a cell gives its count.

sector | quantity | history (last 12 months) | nowcast | forecast, 3 months ahead | forecast, 6 months ahead | forecast, 12 months ahead | coverage, history | coverage, ahead |

Oil and gas | Order book | 8.3% | 9.8% | 9.3% | 6.4% | 6.1% | 100% 75% | 100% 88% | ✎

Oil and gas | Overdue orders | 0.10 mo | 0.11 mo | 0.09 mo | 0.07 mo | 0.05 mo | 73% 73% | 88% 81% | ✎

Oil and gas | Capacity | 0.5% | 0.7% | 0.9% | 1.1% | 2.2% | 100% 86% | 100% 81% | ✎

Oil and gas | Capacity announced | 7.0% | 5.9% | 13.8% | 12.0% | 7.1% | 100% 95% | 100% 94% | ✎

Oil and gas | Capacity under construction | 2.6% | 4.0% | 4.8% | 6.4% | 9.2% | 100% 100% | 100% 100% | ✎

Oil and gas | Finished inventory | 0.05 mo | 0.05 mo | 0.09 mo | 0.10 mo | 0.06 mo | 100% 95% | 100% 94% | ✎

Oil and gas | Input inventory | 2.1% | 1.8% | 1.5% | 0.8% | 3.7% | 100% 100% | 100% 100% | ✎

Oil and gas | Lead time | 10.1% | 14.1% | 19.3% | 19.8% | 16.5% | 100% 98% | 100% 94% | ✎

Oil and gas | New orders | 1.8% | 2.9% | 3.3% | 1.0% | 1.5% | 98% 84% | 100% 100% | ✎

Oil and gas | Output | 0.7% | 1.1% | 2.1% | 2.9% | 3.7% | 100% 86% | 100% 69% | ✎

Oil and gas | Phantom orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 100% 50% | 88% 56% | ✎

Oil and gas | Price | 2.1% | 1.9% | 2.9% | 2.9% | 3.1% | 100% 95% | 100% 100% | ✎

Oil and gas | Shipments | 1.4% | 1.8% | 2.8% | 3.0% | 1.9% | 100% 75% | 100% 88% | ✎

Oil and gas | Unit cost | 6.7% | 6.2% | 6.0% | 6.5% | 6.0% | 36% 0% | 63% 0% | ✎

Oil and gas | Utilization | 0.3 pt | 0.5 pt | 1.2 pt | 1.7 pt | 1.1 pt | 100% 89% | 100% 88% | ✎

Housing | Order book | 1.7% | 1.6% | 1.3% | 1.7% | 1.4% | 100% 100% | 100% 100% | ✎

Housing | Overdue orders | 0.01 mo | 0.00 mo | 0.00 mo | 0.01 mo | 0.00 mo | 100% 100% | 100% 100% | ✎

Housing | Capacity | 5.1% | 5.5% | 5.7% | 5.8% | 6.4% | 75% 68% | 75% 56% | ✎

Housing | Finished inventory | 0.25 mo | 0.20 mo | 0.17 mo | 0.14 mo | 0.12 mo | 100% 59% | 100% 94% | ✎

Housing | Input inventory | 2.8% | 2.7% | 3.5% | 3.2% | 3.5% | 100% 100% | 100% 100% | ✎

Housing | Lead time | 5.7% | 5.4% | 5.2% | 4.7% | 4.1% | 100% 100% | 100% 100% | ✎

Housing | New orders | 1.6% | 1.5% | 2.0% | 2.6% | 1.3% | 100% 100% | 100% 100% | ✎

Housing | Output | 1.1% | 1.5% | 2.1% | 1.8% | 1.4% | 100% 100% | 100% 100% | ✎

Housing | Phantom orders | 0.01 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 100% 100% | 100% 100% | ✎

Housing | Price | 8.2% | 8.0% | 8.3% | 8.4% | 8.7% | 100% 75% | 100% 75% | ✎

Housing | Shipments | 0.5% | 0.7% | 1.1% | 1.7% | 1.2% | 100% 100% | 100% 100% | ✎

Housing | Unit cost | 8.9% | 8.7% | 8.8% | 9.1% | 8.3% | 27% 0% | 63% 6% | ✎

Housing | Utilization | 4.3 pt | 4.8 pt | 5.2 pt | 4.9 pt | 5.2 pt | 95% 52% | 75% 63% | ✎

Food | Order book | 0.8% | 1.7% | 2.5% | 2.6% | 3.6% | 100% 93% | 100% 100% | ✎

Food | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100% | ✎

Food | Capacity | 1.7% | 1.8% | 2.3% | 3.1% | 4.6% | 57% 41% | 44% 6% | ✎

Food | Finished inventory | 0.18 mo | 0.18 mo | 0.17 mo | 0.17 mo | 0.19 mo | 98% 50% | 100% 75% | ✎

Food | Input inventory | 1.1% | 1.1% | 0.7% | 0.9% | 1.1% | 100% 100% | 100% 100% | ✎

Food | Lead time | 15.5% | 16.4% | 21.4% | 24.8% | 30.0% | 100% 100% | 100% 100% | ✎

Food | New orders | 0.7% | 1.5% | 1.9% | 2.0% | 3.5% | 100% 98% | 100% 100% | ✎

Food | Output | 0.4% | 0.4% | 1.8% | 2.1% | 2.5% | 100% 95% | 100% 100% | ✎

Food | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.01 mo | 75% 73% | 81% 81% | ✎

Food | Price | 3.3% | 2.8% | 4.4% | 4.8% | 5.1% | 100% 50% | 100% 94% | ✎

Food | Shipments | 0.7% | 0.6% | 1.3% | 2.2% | 2.9% | 100% 98% | 100% 100% | ✎

Food | Unit cost | 4.0% | 3.7% | 3.5% | 3.3% | 4.0% | 75% 20% | 94% 69% | ✎

Food | Utilization | 1.2 pt | 1.7 pt | 3.2 pt | 3.7 pt | 5.5 pt | 84% 50% | 88% 69% | ✎

Chemicals | Order book | 1.7% | 1.9% | 1.5% | 1.5% | 0.9% | 100% 91% | 100% 100% | ✎

Chemicals | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100% | ✎

Chemicals | Capacity | 0.4% | 0.6% | 0.6% | 0.4% | 0.6% | 100% 89% | 100% 100% | ✎

Chemicals | Finished inventory | 0.04 mo | 0.03 mo | 0.03 mo | 0.03 mo | 0.06 mo | 100% 100% | 100% 100% | ✎

Chemicals | Input inventory | 1.4% | 1.4% | 1.3% | 1.3% | 2.1% | 100% 100% | 100% 100% | ✎

Chemicals | Lead time | 6.0% | 8.2% | 11.5% | 13.8% | 11.1% | 100% 100% | 100% 100% | ✎

Chemicals | New orders | 1.4% | 2.2% | 1.4% | 1.8% | 2.6% | 100% 89% | 100% 100% | ✎

Chemicals | Output | 0.5% | 0.8% | 0.7% | 0.8% | 1.7% | 100% 91% | 100% 100% | ✎

Chemicals | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 95% | 100% 100% | ✎

Chemicals | Price | 2.3% | 2.0% | 2.3% | 2.6% | 2.2% | 100% 75% | 100% 94% | ✎

Chemicals | Shipments | 1.2% | 0.7% | 0.7% | 1.9% | 2.1% | 100% 86% | 100% 100% | ✎

Chemicals | Unit cost | 2.1% | 1.7% | 1.4% | 1.8% | 1.3% | 100% 66% | 100% 94% | ✎

Chemicals | Utilization | 0.3 pt | 0.2 pt | 0.7 pt | 0.8 pt | 1.5 pt | 100% 98% | 100% 100% | ✎

Steel | Order book | 3.0% | 2.8% | 3.3% | 4.0% | 2.8% | 100% 89% | 100% 100% | ✎

Steel | Overdue orders | 0.03 mo | 0.03 mo | 0.02 mo | 0.02 mo | 0.03 mo | 100% 82% | 100% 88% | ✎

Steel | Capacity | 0.8% | 1.1% | 1.5% | 2.1% | 2.7% | 100% 80% | 94% 63% | ✎

Steel | Finished inventory | 0.06 mo | 0.07 mo | 0.06 mo | 0.06 mo | 0.06 mo | 100% 75% | 100% 75% | ✎

Steel | Input inventory | 2.0% | 2.5% | 2.1% | 1.1% | 3.3% | 100% 100% | 100% 100% | ✎

Steel | Lead time | 2.9% | 3.4% | 2.9% | 4.2% | 5.1% | 100% 100% | 100% 100% | ✎

Steel | New orders | 1.6% | 0.5% | 1.6% | 1.6% | 1.2% | 100% 95% | 100% 100% | ✎

Steel | Output | 0.6% | 0.5% | 0.7% | 0.6% | 1.3% | 100% 98% | 100% 100% | ✎

Steel | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 52% | 100% 88% | ✎

Steel | Price | 3.2% | 3.7% | 3.1% | 2.9% | 3.5% | 100% 66% | 100% 94% | ✎

Steel | Shipments | 0.8% | 0.7% | 1.2% | 1.3% | 1.5% | 100% 95% | 100% 100% | ✎

Steel | Unit cost | 3.9% | 4.0% | 3.2% | 3.4% | 3.2% | 75% 52% | 94% 75% | ✎

Steel | Utilization | 0.3 pt | 0.6 pt | 0.6 pt | 1.1 pt | 2.0 pt | 100% 98% | 100% 100% | ✎

Machinery | Order book | 4.2% | 4.3% | 6.3% | 7.1% | 8.1% | 100% 30% | 88% 38% | ✎

Machinery | Overdue orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100% | ✎

Machinery | Capacity | 2.5% | 2.5% | 2.6% | 3.0% | 3.0% | 77% 23% | 69% 44% | ✎

Machinery | Finished inventory | 0.23 mo | 0.22 mo | 0.15 mo | 0.11 mo | 0.09 mo | 93% 70% | 100% 81% | ✎

Machinery | Input inventory | 9.3% | 8.8% | 10.1% | 11.5% | 12.3% | 100% 100% | 100% 100% | ✎

Machinery | Lead time | 4.2% | 3.8% | 3.8% | 3.1% | 3.3% | 100% 100% | 100% 100% | ✎

Machinery | New orders | 4.3% | 5.9% | 8.9% | 7.6% | 8.5% | 93% 52% | 94% 56% | ✎

Machinery | Output | 4.4% | 5.4% | 7.4% | 8.3% | 8.9% | 52% 0% | 56% 13% | ✎

Machinery | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 86% | 100% 100% | ✎

Machinery | Price | 5.6% | 6.2% | 5.6% | 5.0% | 4.8% | 93% 50% | 100% 69% | ✎

Machinery | Shipments | 4.4% | 4.0% | 5.6% | 6.9% | 8.1% | 55% 0% | 75% 13% | ✎

Machinery | Unit cost | 5.2% | 5.5% | 6.0% | 5.9% | 6.4% | 77% 25% | 94% 44% | ✎

Machinery | Utilization | 1.4 pt | 2.2 pt | 3.5 pt | 4.1 pt | 4.4 pt | 100% 32% | 100% 50% | ✎

Semiconductors | Order book | 9.4% | 11.0% | 11.7% | 12.2% | 11.8% | 100% 100% | 100% 100% | ✎

Semiconductors | Overdue orders | 0.66 mo | 0.84 mo | 0.82 mo | 0.85 mo | 0.89 mo | 100% 100% | 100% 100% | ✎

Semiconductors | Capacity | 0.4% | 0.4% | 0.5% | 0.5% | 0.6% | 100% 100% | 100% 100% | ✎

Semiconductors | Capacity announced | 10.3% | 9.3% | 12.0% | 16.9% | 14.7% | 100% 100% | 100% 100% | ✎

Semiconductors | Capacity under construction | 5.2% | 4.0% | 4.6% | 5.1% | 7.3% | 100% 100% | 100% 100% | ✎

Semiconductors | Finished inventory | 0.24 mo | 0.18 mo | 0.12 mo | 0.10 mo | 0.07 mo | 100% 100% | 100% 100% | ✎

Semiconductors | Input inventory | 3.2% | 3.4% | 2.7% | 3.8% | 3.4% | 100% 100% | 100% 100% | ✎

Semiconductors | Lead time | 13.9% | 16.4% | 16.1% | 17.0% | 15.9% | 100% 100% | 100% 100% | ✎

Semiconductors | New orders | 6.9% | 4.3% | 3.1% | 1.9% | 3.5% | 100% 100% | 100% 100% | ✎

Semiconductors | Output | 1.2% | 1.3% | 1.7% | 1.2% | 1.6% | 100% 100% | 100% 100% | ✎

Semiconductors | Phantom orders | 0.37 mo | 0.42 mo | 0.40 mo | 0.42 mo | 0.53 mo | 100% 100% | 100% 100% | ✎

Semiconductors | Price | 3.7% | 4.0% | 2.8% | 3.0% | 3.1% | 100% 100% | 100% 100% | ✎

Semiconductors | Shipments | 1.4% | 0.9% | 0.7% | 0.9% | 1.1% | 100% 98% | 100% 100% | ✎

Semiconductors | Unit cost | 1.5% | 1.3% | 1.4% | 1.2% | 1.3% | 100% 89% | 100% 100% | ✎

Semiconductors | Utilization | 0.8 pt | 0.8 pt | 1.3 pt | 0.9 pt | 1.2 pt | 100% 100% | 100% 100% | ✎

Autos | Order book | 2.1% | 3.4% | 4.2% | 4.1% | 5.5% | 100% 100% | 100% 100% | ✎

Autos | Overdue orders | 0.01 mo | 0.01 mo | 0.01 mo | 0.01 mo | 0.02 mo | 100% 100% | 100% 100% | ✎

Autos | Capacity | 0.8% | 0.9% | 1.0% | 1.3% | 1.6% | 100% 68% | 100% 75% | ✎

Autos | Finished inventory | 0.05 mo | 0.07 mo | 0.08 mo | 0.09 mo | 0.10 mo | 100% 100% | 100% 100% | ✎

Autos | Input inventory | 4.0% | 4.0% | 4.2% | 3.1% | 1.7% | 100% 100% | 100% 100% | ✎

Autos | Lead time | 7.0% | 9.4% | 13.8% | 15.2% | 16.0% | 100% 100% | 100% 100% | ✎

Autos | New orders | 1.5% | 2.6% | 2.2% | 2.3% | 2.8% | 100% 91% | 100% 100% | ✎

Autos | Output | 0.5% | 0.9% | 2.3% | 2.0% | 2.1% | 100% 100% | 100% 88% | ✎

Autos | Phantom orders | 0.00 mo | 0.00 mo | 0.01 mo | 0.01 mo | 0.01 mo | 100% 80% | 100% 81% | ✎

Autos | Price | 1.9% | 1.1% | 1.6% | 1.6% | 1.6% | 100% 100% | 100% 100% | ✎

Autos | Shipments | 1.1% | 1.7% | 2.1% | 2.1% | 3.4% | 100% 98% | 100% 94% | ✎

Autos | Unit cost | 3.9% | 3.5% | 3.4% | 3.5% | 3.3% | 75% 36% | 88% 63% | ✎

Autos | Utilization | 0.8 pt | 1.2 pt | 2.1 pt | 2.3 pt | 2.8 pt | 100% 91% | 100% 81% | ✎

Wholesale | Order book | 7.7% | 8.0% | 7.4% | 8.9% | 8.7% | 75% 30% | 100% 63% | ✎

Wholesale | Capacity | 8.2% | 8.0% | 8.3% | 8.0% | 8.5% | 77% 50% | 75% 63% | ✎

Wholesale | Finished inventory | 0.04 mo | 0.06 mo | 0.09 mo | 0.10 mo | 0.13 mo | 100% 93% | 100% 81% | ✎

Wholesale | Lead time | 14.3% | 13.8% | 11.4% | 13.4% | 11.8% | 100% 100% | 100% 100% | ✎

Wholesale | Load factor | 1.1 pt | 0.7 pt | 2.0 pt | 1.9 pt | 0.7 pt | 100% 93% | 100% 100% | ✎

Wholesale | Lost demand | 0.01 mo | 0.01 mo | 0.01 mo | 0.02 mo | 0.01 mo | 70% 50% | 94% 50% | ✎

Wholesale | New orders | 7.5% | 7.6% | 7.2% | 8.2% | 7.8% | 77% 27% | 100% 81% | ✎

Wholesale | Output | 8.0% | 8.3% | 8.2% | 7.8% | 8.9% | 59% 0% | 81% 19% | ✎

Wholesale | Price | 8.0% | 7.7% | 8.0% | 9.2% | 8.5% | 66% 25% | 81% 56% | ✎

Wholesale | Shipments | 7.5% | 8.1% | 7.2% | 7.8% | 8.2% | 73% 20% | 94% 63% | ✎

Wholesale | Unit cost | 7.4% | 7.1% | 7.0% | 7.9% | 7.5% | 50% 30% | 94% 50% | ✎

Wholesale | Utilization | 3.3 pt | 3.4 pt | 2.9 pt | 2.7 pt | 2.4 pt | 100% 48% | 100% 81% | ✎

Retail | Order book | 4.7% | 3.8% | 7.5% | 9.2% | 6.5% | 100% 82% | 94% 75% | ✎

Retail | Capacity | 4.8% | 5.3% | 4.8% | 4.5% | 4.2% | 91% 30% | 100% 38% | ✎

Retail | Finished inventory | 0.29 mo | 0.33 mo | 0.35 mo | 0.38 mo | 0.48 mo | 100% 64% | 100% 63% | ✎

Retail | Lead time | 13.0% | 14.1% | 14.0% | 12.4% | 14.4% | 100% 100% | 100% 100% | ✎

Retail | Load factor | 4.0 pt | 4.0 pt | 3.2 pt | 2.4 pt | 2.6 pt | 100% 91% | 100% 100% | ✎

Retail | Lost demand | 0.01 mo | 0.02 mo | 0.00 mo | 0.01 mo | 0.01 mo | 91% 70% | 94% 81% | ✎

Retail | New orders | 5.7% | 6.0% | 7.9% | 10.7% | 7.8% | 98% 80% | 94% 69% | ✎

Retail | Output | 4.2% | 4.3% | 4.9% | 5.9% | 5.4% | 84% 36% | 88% 50% | ✎

Retail | Price | 1.0% | 1.1% | 1.1% | 1.0% | 1.2% | 100% 75% | 100% 100% | ✎

Retail | Shipments | 5.0% | 7.3% | 8.0% | 7.2% | 8.1% | 98% 73% | 94% 63% | ✎

Retail | Unit cost | 2.5% | 2.3% | 2.9% | 2.4% | 1.9% | 100% 59% | 100% 94% | ✎

Retail | Utilization | 1.8 pt | 2.0 pt | 2.8 pt | 3.2 pt | 2.9 pt | 100% 66% | 100% 75% | ✎

Airlines | Order book | 2.6% | 2.5% | 2.4% | 2.2% | 1.6% | 100% 86% | 100% 100% | ✎

Airlines | Capacity | 1.8% | 1.8% | 1.8% | 1.9% | 2.7% | 98% 73% | 100% 94% | ✎

Airlines | Lead time | 9.9% | 7.0% | 6.6% | 8.6% | 12.7% | 100% 100% | 100% 100% | ✎

Airlines | Load factor | 1.4 pt | 2.2 pt | 1.5 pt | 2.1 pt | 3.7 pt | 100% 86% | 100% 100% | ✎

Airlines | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 98% 95% | 100% 94% | ✎

Airlines | New orders | 3.3% | 1.6% | 2.2% | 2.6% | 2.4% | 100% 91% | 100% 100% | ✎

Airlines | Output | 0.8% | 1.3% | 1.4% | 1.2% | 1.6% | 100% 91% | 100% 100% | ✎

Airlines | Price | 0.8% | 1.3% | 1.4% | 2.0% | 2.4% | 100% 89% | 100% 94% | ✎

Airlines | Shipments | 1.4% | 1.9% | 1.2% | 1.2% | 2.9% | 100% 89% | 100% 100% | ✎

Airlines | Unit cost | 1.6% | 2.3% | 2.0% | 2.3% | 2.4% | 100% 86% | 100% 94% | ✎

Airlines | Utilization | 1.7 pt | 1.3 pt | 1.6 pt | 1.8 pt | 2.0 pt | 100% 70% | 100% 81% | ✎

Data centers | Order book | 3.6% | 2.9% | 2.6% | 2.5% | 2.5% | 100% 75% | 100% 88% | ✎

Data centers | Overdue orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% – | ✎

Data centers | Capacity | 2.0% | 2.2% | 2.2% | 2.3% | 2.5% | 45% 14% | 25% 0% | ✎

Data centers | Capacity announced | 6.7% | 7.2% | 6.9% | 4.4% | 6.1% | 100% 82% | 100% 94% | ✎

Data centers | Capacity in use | 1.5% | 1.5% | 1.4% | 1.3% | 1.3% | 75% 23% | 81% 44% | ✎

Data centers | Capacity under construction | 2.6% | 2.7% | 2.9% | 2.9% | 2.8% | 100% 59% | 81% 75% | ✎

Data centers | Lead time | 3.8% | 3.8% | 3.8% | 3.8% | 3.7% | 100% 82% | 100% 75% | ✎

Data centers | New orders | 2.0% | 1.3% | 2.7% | 1.9% | 2.3% | 100% 95% | 100% 100% | ✎

Data centers | Output | 1.5% | 1.5% | 1.4% | 1.3% | 1.3% | 75% 23% | 81% 44% | ✎

Data centers | Phantom orders | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% – | 100% – | ✎

Data centers | Price | 2.3% | 2.4% | 2.4% | 2.4% | 1.9% | 100% 100% | 100% 100% | ✎

Data centers | Shipments | 0.9% | 0.9% | 1.0% | 1.1% | 1.1% | 100% 100% | 100% 100% | ✎

Data centers | Unit cost | 6.1% | 5.7% | 6.2% | 5.9% | 5.5% | 100% 84% | 100% 100% | ✎

Data centers | Utilization | 0.4 pt | 0.6 pt | 0.7 pt | 0.8 pt | 0.9 pt | 100% 66% | 100% 50% | ✎

Hospitals | Order book | 2.2% | 2.3% | 3.2% | 3.8% | 3.2% | 100% 52% | 100% 94% | ✎

Hospitals | Capacity | 2.5% | 2.6% | 2.8% | 2.9% | 3.0% | 77% 25% | 44% 25% | ✎

Hospitals | Lead time | 7.6% | 7.9% | 8.0% | 8.9% | 10.1% | 100% 100% | 100% 100% | ✎

Hospitals | Load factor | 1.8 pt | 1.4 pt | 2.2 pt | 1.9 pt | 2.5 pt | 100% 66% | 100% 94% | ✎

Hospitals | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100% | ✎

Hospitals | New orders | 2.1% | 2.4% | 2.6% | 3.5% | 2.8% | 100% 64% | 100% 94% | ✎

Hospitals | Output | 0.5% | 0.6% | 0.8% | 1.1% | 0.8% | 100% 100% | 100% 100% | ✎

Hospitals | Price | 0.3% | 0.3% | 0.3% | 0.6% | 1.7% | 100% 98% | 100% 100% | ✎

Hospitals | Shipments | 2.1% | 1.7% | 2.8% | 2.6% | 2.7% | 100% 64% | 100% 88% | ✎

Hospitals | Unit cost | 1.1% | 1.1% | 0.9% | 0.9% | 0.6% | 100% 70% | 100% 100% | ✎

Hospitals | Utilization | 2.1 pt | 2.1 pt | 2.1 pt | 2.1 pt | 2.2 pt | 75% 0% | 94% 38% | ✎

Hotels | Order book | 11.1% | 11.5% | 11.7% | 12.0% | 12.4% | 2% 0% | 56% 6% | ✎

Hotels | Capacity | 2.9% | 2.9% | 3.2% | 3.3% | 3.9% | 50% 9% | 50% 13% | ✎

Hotels | Lead time | 16.3% | 16.3% | 17.6% | 19.0% | 20.1% | 100% 100% | 100% 100% | ✎

Hotels | Load factor | 5.9 pt | 5.8 pt | 6.9 pt | 6.9 pt | 7.2 pt | 5% 0% | 75% 19% | ✎

Hotels | Lost demand | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 0.00 mo | 100% 100% | 100% 100% | ✎

Hotels | New orders | 7.0% | 7.7% | 7.8% | 7.9% | 8.1% | 18% 0% | 100% 38% | ✎

Hotels | Output | 1.4% | 1.3% | 1.5% | 1.6% | 1.9% | 55% 36% | 56% 50% | ✎

Hotels | Price | 0.5% | 0.9% | 1.1% | 1.2% | 2.1% | 100% 100% | 100% 100% | ✎

Hotels | Shipments | 7.0% | 6.9% | 8.1% | 8.0% | 8.4% | 9% 0% | 81% 17% | ✎

Hotels | Unit cost | 0.5% | 0.8% | 0.8% | 0.7% | 1.3% | 100% 100% | 100% 100% | ✎

Hotels | Utilization | 1.5 pt | 1.4 pt | 1.5 pt | 1.6 pt | 1.8 pt | 50% 33% | 69% 33% | ✎

## Band widening✎

The members omit some uncertainty: weakly identified group means and sector parameters, and model error. The site's run therefore widens each published sector band around its median by a factor per status (PLAN decision 17). This run uses 2.55× history, 2.31× nowcast, 1.86× forecast. Recorded reason: The model's own 90% bands held 68% of the truth (all sector variables) in the 2023-2026 backtest on this world (sector fits on Modal, decision 31); factors from scripts/calibrate_bands.py (PLAN decision 17); held-out dates 0.886-0.909.

### Factors from the backtest

Fitted to the model's own bands in this backtest: what this world would call for now.

coverage, unwidened79% factor, forecast1.33×factor, nowcast2.21×factor, history2.14×

### Coverage on held-out dates

Each row: coverage at one as-of date, with factors fitted to the other dates.

2023-09-3091%2024-09-3088%2025-09-3094%2026-09-3088%

### Factors by sector

Oil and gasforecast1.24×Oil and gasnowcast1.62×Oil and gashistory1.75×Housingforecast1.34×Housingnowcast1.81×Housinghistory2.15×Foodforecast1.32×Foodnowcast1.74×Foodhistory2.32×Chemicalsforecast0.465×Chemicalsnowcast0.682×Chemicalshistory0.946×Steelforecast0.79×Steelnowcast1.09×Steelhistory1.11×Machineryforecast1.72×Machinerynowcast2.32×Machineryhistory2.58×Semiconductorsforecast0.471×Semiconductorsnowcast0.569×Semiconductorshistory0.633×Autosforecast0.851×Autosnowcast1.01×Autoshistory1.02×Wholesaleforecast1.66×Wholesalenowcast2.96×Wholesalehistory3.2×Retailforecast1.43×Retailnowcast1.69×Retailhistory1.76×Airlinesforecast0.763×Airlinesnowcast0.853×Airlineshistory1.17×Data centersforecast2.16×Data centersnowcast2.17×Data centershistory2.13×Hospitalsforecast1.18×Hospitalsnowcast1.66×Hospitalshistory1.93×Hotelsforecast2.37×Hotelsnowcast4.28×Hotelshistory4.76×

## Parameter recovery✎

Each row compares fitted with true parameters of the tracked entities in this run's fit, in prior sds.

- Bias: mean of fit minus truth.

- RMSE: root mean square of fit minus truth.

- Correlation: correlation of fit and truth across entities, which shows whether the fit recovers differences between entities.

sector | parameter | definition | bias (prior sd) | RMSE (prior sd) | correlation |

Oil and gas | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.21 | 0.40  | 0.64 | ✎

Oil and gas | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.52 | 0.82  | 0.25 | ✎

Oil and gas | w w | pass-through of input cost to unit cost (L4)  | 0.22 | 0.56  | -0.19 | ✎

Oil and gas | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.05 | 0.64  | -0.30 | ✎

Oil and gas | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.19 | 0.23  | 0.53 | ✎

Oil and gas | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.04 | 0.56  | 0.77 | ✎

Oil and gas | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.20 | 0.62  | 0.63 | ✎

Oil and gas | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -0.02 | 0.17  | 0.29 | ✎

Oil and gas | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.39 | 0.63  | 0.07 | ✎

Oil and gas | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.40 | 0.79  | 0.35 | ✎

Oil and gas | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.01 | 0.04  | 1.00 | ✎

Oil and gas | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.04 | 0.28  | 0.15 | ✎

Oil and gas | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.39 | 0.51  | 0.39 | ✎

Housing | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.02 | 0.59  | 0.08 | ✎

Housing | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.01 | 0.31  | 0.47 | ✎

Housing | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.27 | 0.42  | 0.55 | ✎

Housing | w w | pass-through of input cost to unit cost (L4)  | -0.51 | 0.65  | 0.67 | ✎

Housing | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.19 | 0.42  | -0.02 | ✎

Housing | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.30 | 0.38  | 0.49 | ✎

Housing | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.24 | 0.74  | 0.42 | ✎

Housing | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.12 | 0.39  | -0.08 | ✎

Housing | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.21 | 0.40  | 0.78 | ✎

Housing | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.07 | 0.45  | -0.02 | ✎

Housing | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.10 | 0.39  | 0.79 | ✎

Food | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.41 | 0.50  | 0.63 | ✎

Food | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.09 | 0.46  | 0.50 | ✎

Food | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.01 | 0.45  | -0.38 | ✎

Food | w w | pass-through of input cost to unit cost (L4)  | 0.13 | 0.31  | 0.53 | ✎

Food | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.03 | 0.36  | -0.07 | ✎

Food | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.08 | 0.17  | 0.17 | ✎

Food | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.09 | 0.59  | -0.40 | ✎

Food | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.25 | 0.43  | 0.28 | ✎

Food | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | -0.00 | 0.02  | 1.00 | ✎

Food | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.08 | 0.52  | -0.44 | ✎

Food | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.06 | 0.08  | 0.99 | ✎

Food | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.10 | 0.19  | 0.78 | ✎

Food | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.25 | 0.51  | -0.36 | ✎

Chemicals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.29 | 0.81  | -0.58 | ✎

Chemicals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.12 | 0.19  | 0.91 | ✎

Chemicals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.22 | 0.50  | 0.40 | ✎

Chemicals | w w | pass-through of input cost to unit cost (L4)  | -0.00 | 0.43  | 0.35 | ✎

Chemicals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.33 | 0.42  | -0.08 | ✎

Chemicals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.23 | 0.25  | 0.90 | ✎

Chemicals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.90 | 1.01  | 0.50 | ✎

Chemicals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.35 | 0.45  | 0.25 | ✎

Chemicals | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | -0.00 | 0.03  | 1.00 | ✎

Chemicals | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.34 | 0.50  | -0.40 | ✎

Chemicals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.03  | 1.00 | ✎

Chemicals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.34 | 0.46  | 0.75 | ✎

Chemicals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.24 | 0.62  | 0.01 | ✎

Steel | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.28 | 0.55  | 0.36 | ✎

Steel | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.15 | 0.46  | 0.10 | ✎

Steel | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.46 | 0.81  | -0.25 | ✎

Steel | w w | pass-through of input cost to unit cost (L4)  | -0.11 | 0.50  | 0.25 | ✎

Steel | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.17 | 0.42  | 0.19 | ✎

Steel | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.29 | 0.37  | 0.30 | ✎

Steel | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.20 | 0.62  | -0.08 | ✎

Steel | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.07 | 0.35  | 0.44 | ✎

Steel | export share export_share | Export share: share of shipments exported.  | 0.10 | 0.30  | 0.38 | ✎

Steel | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.20 | 0.43  | 0.16 | ✎

Steel | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | 0.04 | 0.33  | -0.03 | ✎

Steel | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.02 | 0.22  | 0.22 | ✎

Steel | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | -0.07 | 0.53  | 0.51 | ✎

Steel | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.02 | 0.04  | 1.00 | ✎

Steel | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.15 | 0.44  | 0.24 | ✎

Steel | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.28 | 0.37  | 0.62 | ✎

Machinery | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.91 | 1.02  | 0.19 | ✎

Machinery | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.20 | 0.46  | 0.28 | ✎

Machinery | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.33 | 0.47  | 0.46 | ✎

Machinery | w w | pass-through of input cost to unit cost (L4)  | 0.24 | 0.33  | 0.40 | ✎

Machinery | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.24 | 0.37  | 0.18 | ✎

Machinery | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.13 | 0.24  | -0.08 | ✎

Machinery | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.36 | 0.48  | 0.09 | ✎

Machinery | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.13 | 0.18  | 0.53 | ✎

Machinery | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.18 | 0.43  | 0.75 | ✎

Machinery | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.10 | 0.33  | 0.41 | ✎

Machinery | listing gap list_gap | List-price gap: log list price minus log transaction price.  | 0.14 | 0.29  | 0.15 | ✎

Machinery | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.01 | 0.61  | 0.25 | ✎

Machinery | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.03 | 0.23  | 0.98 | ✎

Machinery | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.10 | 0.34  | 0.69 | ✎

Machinery | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.26 | 0.55  | 0.33 | ✎

Semiconductors | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.27 | 0.50  | 0.26 | ✎

Semiconductors | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.04 | 0.36  | 0.22 | ✎

Semiconductors | w w | pass-through of input cost to unit cost (L4)  | 0.24 | 0.26  | -0.27 | ✎

Semiconductors | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.14 | 0.23  | 0.29 | ✎

Semiconductors | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.10 | 0.14  | -0.28 | ✎

Semiconductors | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.05 | 0.51  | -0.55 | ✎

Semiconductors | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.10 | 0.46  | 0.31 | ✎

Semiconductors | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -0.06 | 0.30  | -0.10 | ✎

Semiconductors | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.01 | 0.11  | 0.95 | ✎

Semiconductors | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.03 | 0.14  | -0.06 | ✎

Semiconductors | lead-time bias lt_bias | Lead-time bias: quoted lead time over the model's lead time, log scale.  | 0.22 | 0.54  | -0.53 | ✎

Semiconductors | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.02 | 0.03  | 1.00 | ✎

Semiconductors | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.24 | 0.42  | 0.07 | ✎

Semiconductors | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.04 | 0.46  | -0.13 | ✎

Autos | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.15 | 1.07  | 0.28 | ✎

Autos | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.08 | 0.67  | 0.12 | ✎

Autos | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.04 | 0.54  | -0.36 | ✎

Autos | w w | pass-through of input cost to unit cost (L4)  | -0.06 | 0.53  | -0.22 | ✎

Autos | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.45 | 0.56  | 0.08 | ✎

Autos | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.18 | 0.23  | 0.71 | ✎

Autos | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.22 | 0.58  | 0.28 | ✎

Autos | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.10 | 0.42  | 0.47 | ✎

Autos | a (emissions) emis_a | Emissions level: log emissions at the reference output.  | 0.02 | 0.49  | 0.55 | ✎

Autos | b (emissions) emis_b | Emissions slope: percent change in emissions per percent change in output.  | -0.06 | 0.86  | -0.44 | ✎

Autos | listing gap list_gap | List-price gap: log list price minus log transaction price.  | -0.10 | 0.29  | -0.11 | ✎

Autos | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.04 | 0.08  | 0.99 | ✎

Autos | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.06 | 0.45  | 0.19 | ✎

Autos | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.12 | 0.90  | -0.55 | ✎

Wholesale | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.18 | 1.02  | 0.20 | ✎

Wholesale | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.77 | 0.86  | 0.28 | ✎

Wholesale | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.19 | 0.42  | 0.19 | ✎

Wholesale | w w | pass-through of input cost to unit cost (L4)  | -0.27 | 0.31  | 0.44 | ✎

Wholesale | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.60 | 0.75  | -0.77 | ✎

Wholesale | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.09 | 0.16  | 0.45 | ✎

Wholesale | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.09 | 0.30  | 0.44 | ✎

Wholesale | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.15 | 0.41  | -0.31 | ✎

Wholesale | export share export_share | Export share: share of shipments exported.  | -0.19 | 0.53  | 0.22 | ✎

Wholesale | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.20 | 0.46  | 0.88 | ✎

Wholesale | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.33 | 0.96  | 0.30 | ✎

Wholesale | m_0 m0 | Starting markup: markup in the first month, log scale.  | -0.04 | 0.32  | 0.41 | ✎

Retail | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.71 | 1.11  | 0.77 | ✎

Retail | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | 0.46 | 0.55  | 0.71 | ✎

Retail | β beta | Demand response: how far utilization rises with demand pressure (L3).  | -0.72 | 1.11  | -0.66 | ✎

Retail | w w | pass-through of input cost to unit cost (L4)  | 0.20 | 0.52  | 0.57 | ✎

Retail | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.48 | 0.56  | 0.14 | ✎

Retail | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 0.30 | 0.36  | 0.03 | ✎

Retail | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.60 | 0.75  | 0.02 | ✎

Retail | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.23 | 0.43  | -0.15 | ✎

Retail | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.07 | 0.13  | 0.99 | ✎

Retail | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.06 | 0.42  | 0.09 | ✎

Retail | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.00 | 0.81  | -0.44 | ✎

Airlines | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | 0.30 | 0.62  | -0.01 | ✎

Airlines | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.08 | 0.57  | 0.48 | ✎

Airlines | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.71 | 0.79  | 0.47 | ✎

Airlines | w w | pass-through of input cost to unit cost (L4)  | 0.19 | 0.34  | 0.53 | ✎

Airlines | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.30 | 0.41  | -0.90 | ✎

Airlines | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.32 | 0.37  | 0.70 | ✎

Airlines | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.19 | 0.37  | 0.63 | ✎

Airlines | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.07 | 0.19  | 0.89 | ✎

Airlines | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.19 | 0.38  | 0.78 | ✎

Airlines | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.03  | 1.00 | ✎

Airlines | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.01 | 0.07  | 0.98 | ✎

Airlines | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.11 | 0.24  | 0.47 | ✎

Data centers | w w | pass-through of input cost to unit cost (L4)  | 0.26 | 0.41  | 0.19 | ✎

Data centers | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | 0.19 | 0.37  | 0.17 | ✎

Data centers | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | 1.57 | 1.64  | -0.02 | ✎

Data centers | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.21 | 0.32  | 0.82 | ✎

Data centers | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.10 | 0.31  | 0.35 | ✎

Data centers | u^norm u_norm | Normal occupancy: share of capacity leased in a normal month (L18).  | -1.48 | 1.48  | 0.83 | ✎

Data centers | õ^A oA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).  | -1.20 | 1.21  | 0.92 | ✎

Data centers | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.01 | 0.01  | 1.00 | ✎

Data centers | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.20 | 0.42  | -0.04 | ✎

Data centers | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.12 | 0.30  | -0.18 | ✎

Data centers | z_0 z0 | Starting utilization: utilization in the first month relative to normal, logit scale.  | 1.55 | 1.57  | -0.15 | ✎

Hospitals | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.67 | 1.04  | 0.24 | ✎

Hospitals | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -0.34 | 0.61  | -0.03 | ✎

Hospitals | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.65 | 0.87  | 0.46 | ✎

Hospitals | w w | pass-through of input cost to unit cost (L4)  | -0.08 | 0.33  | -0.24 | ✎

Hospitals | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.14 | 0.36  | -0.02 | ✎

Hospitals | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.27 | 0.29  | 0.57 | ✎

Hospitals | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | -0.17 | 0.41  | 0.13 | ✎

Hospitals | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | -0.26 | 0.56  | -0.54 | ✎

Hospitals | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.06 | 0.28  | 0.48 | ✎

Hospitals | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | 0.02 | 0.05  | 1.00 | ✎

Hospitals | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | -0.07 | 0.35  | 0.07 | ✎

Hospitals | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.09 | 0.33  | -0.39 | ✎

Hotels | δ delta | Capacity drift: monthly change in capacity outside announced projects (L1).  | -0.62 | 1.64  | 0.19 | ✎

Hotels | α alpha | Normal utilization: utilization in a month of normal demand, logit scale (L3).  | -1.14 | 1.24  | 0.07 | ✎

Hotels | β beta | Demand response: how far utilization rises with demand pressure (L3).  | 0.82 | 1.03  | 0.78 | ✎

Hotels | w w | pass-through of input cost to unit cost (L4)  | 0.14 | 0.29  | 0.36 | ✎

Hotels | μ mu | Normal markup: price over unit cost in a normal month, log scale (L5).  | -0.16 | 0.48  | -0.28 | ✎

Hotels | õ o | Order level: new orders relative to the level that keeps the order book steady, log scale (L6).  | -0.32 | 0.37  | 0.11 | ✎

Hotels | β^O betaO | Order response: elasticity of new orders to real demand (L6).  | 0.05 | 0.78  | 0.15 | ✎

Hotels | ℓ ell | Normal order-book cover: months of output the order book holds in a normal month (L8–L9).  | 0.58 | 0.74  | 0.24 | ✎

Hotels | lf^norm lf_norm | Normal load factor: share of seat-miles sold in a normal month (L17).  | -0.26 | 0.33  | 0.68 | ✎

Hotels | k_0 k0 | Starting capacity: capacity in the first month, log scale.  | -0.02 | 0.05  | 1.00 | ✎

Hotels | c_0 c0 | Starting unit cost: unit cost in the first month, log scale.  | 0.03 | 0.22  | 0.78 | ✎

Hotels | m_0 m0 | Starting markup: markup in the first month, log scale.  | 0.06 | 0.42  | 0.29 | ✎
