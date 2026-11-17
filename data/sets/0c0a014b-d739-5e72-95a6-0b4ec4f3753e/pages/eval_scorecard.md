<!-- Evaluation › Scorecard, for forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e; the page: https://mitdbg.github.io/model-2-nowcasting/eval_scorecard.html?set=0c0a014b-d739-5e72-95a6-0b4ec4f3753e; inputs 94286fa3a72abfed -->

# Scorecard

No ground truth is available for real worlds, so a real bundle has no scorecard; the other Evaluation pages check it without the truth.

How close the forecasts came to the truth, on every world of the bundle. The backtest runs the model at each as-of date using only what was published by then and scores every sector total against the world's truth. Each number below is computed for each world, then averaged over the worlds; the range shows whether a result holds across worlds or comes from one world's random draws. Every sector and quantity counts equally.

- A sector and quantity fails when its error is above 25% (or 25 points), or above one month of output for the quantities scored in months.

## The bundle's scores

measure | bundle mean | range over worlds  | what it measures

Core quantities, nowcast error | 3.0%  | –  | output, capacity, utilization, shipments, price, unit cost, load factor

Orders, nowcast error | 10.5%  | –  | new orders, order book, lead time

Inputs and pipeline, nowcast error | 6.0%  | –  | input inventory, capacity announced, under construction and in use

Quantities near zero, nowcast error | 0.34 mo  | –  | finished inventory, overdue orders, phantom orders, lost demand (months of output)

Core quantities, error 12 months ahead | 4.6%  | –  | the core quantities forecast a year past the last observed month

Coverage of the 90% bands | 92%  | –  | share of nowcast values with the truth inside the published 90% band; about 90% is right, much less is overconfident

Failures | 10 of 179  | –  | sectors and quantities above the failure line, at the nowcast

## By sector

Each cell is the sector's error for that group of quantities, averaged over the worlds; "fails in k of N" counts the worlds where it is above the failure line. A failure in most worlds is a tendency of the model; a failure in one world may be that world's luck.

sector | Core quantities | Orders | Inputs and pipeline | Quantities near zero

Airlines | 2.3% | 7.5% | – | 0.00 mo

Autos | 2.2% | 3.8% | 5.8% | 0.02 mo

Chemicals | 3.3% | 2.8% | 1.4% | 0.01 mo

Data centers | 2.3% | 6.3% | 1.8% | 0.00 mo

Food | 1.5% | 4.8% | 1.3% | 0.04 mo

Hospitals | 1.0% | 2.0% | – | 0.00 mo

Hotels | 2.4% | 11.3% | – | 0.00 mo

Housing | 3.4% | 3.9% | 3.4% | 0.03 mo

Machinery | 8.0% | 30.5%fails in 1 of 1 | 5.8% | 1.68 mofails in 1 of 1

Oil and gas | 2.2% | 42.1%fails in 1 of 1 | 18.4% | 0.74 mo

Retail | 3.4% | 10.0% | – | 0.19 mo

Semiconductors | 1.0% | 2.2% | 3.6% | 0.08 mo

Steel | 4.2% | 8.3% | 1.3% | 0.99 mo

Wholesale | 5.4% | 12.4% | – | 0.11 mo

## By sector and quantity

The same, quantity by quantity. Only cells that fail in at least one world are listed, worst first.

sector | quantity | mean error | 20261115

Machinery | Overdue orders | 4.22 mofails in 1 of 1 | 4.22 mo

Oil and gas | Order book | 61.9%fails in 1 of 1 | 61.9%

Oil and gas | Lead time | 57.9%fails in 1 of 1 | 57.9%

Steel | Overdue orders | 1.94 mofails in 1 of 1 | 1.94 mo

Oil and gas | Overdue orders | 1.93 mofails in 1 of 1 | 1.93 mo

Machinery | Order book | 42.9%fails in 1 of 1 | 42.9%

Oil and gas | Capacity announced | 42.8%fails in 1 of 1 | 42.8%

Machinery | Lead time | 29.6%fails in 1 of 1 | 29.6%

Wholesale | Lead time | 29.2%fails in 1 of 1 | 29.2%

Machinery | Price | 27.9%fails in 1 of 1 | 27.9%
