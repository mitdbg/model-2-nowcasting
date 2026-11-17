<!-- World Inputs › Model Configuration, for forecast b653c9a8-4454-5e3d-8a00-0a530afd83a0; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_config.html?set=b653c9a8-4454-5e3d-8a00-0a530afd83a0; inputs c2a50cb70427a028 -->

World shown World seed 20261107 (the bundle's only world)

# Model Configuration

The model and forecast require several fixed values. These are not learned from the data. Some values are set by hand in the configuration, while some come from outside sources (such as geography or Census counts). A few are computed once from the data at the start of the fit window and then held fixed.

The configuration also includes starting ranges for parameters that will be learned during model fitting.

The configuration is the same for every world of the bundle. The values computed from the data are each world's own, so this page shows one world at a time.

## Fixed values in the equations

The symbols marked "Fixed, not learned" on Model Structure, sector by sector. Here D̄ is shown as a demand index (January 2010 = 100), K₀ in the sector's own units and shipping time in days. Hover over (or tap) the ⓘ beside a value for what it means.

sector  | template  | D̄ (index)  | x̄  | K₀  | transit (days)

Airlines | perishable service  | 104.0 | -25.2  | 95.87B seat-miles/month  | 0

Autos | make to stock  | 100.9 | -13.4  | 669.9k vehicles/month  | 9

Chemicals | make to stock  | 107.7 | -15  | 3.42M tonnes/month  | 9

Data centers | contracted capacity  | 202.8 | -7.24  | 2724 MW  | 0

Food | make to stock  | 106.3 | -14.5  | 2.08M tonnes/month  | 6

Hospitals | perishable service  | 113.9 | -14.6  | 2.38M patient-days/month  | 0

Hotels | perishable service  | 100.9 | -14.7  | 2.33M room-nights/month  | 0

Housing | make to order  | 108.1 | -9.33  | 12.0k homes/month  | 0

Machinery | make to order  | 105.8 | -22.2  | $4.66B/month (2017 dollars)  | 15

Oil and gas | pipeline producer  | 116.9 | -18.3  | 99.23M barrels of oil equivalent/month  | 0

Retail | distribution  | 119.7 | -22.9  | $10.73B/month (2017 dollars)  | 0

Semiconductors | pipeline producer  | 154.5 | -13.9  | 1.63M wafers/month  | 9

Steel | make to order  | 107.9 | -14.9  | 3.19M tonnes/month  | 15

Wholesale | distribution  | 111.0 | -23.1  | $12.32B/month (2017 dollars)  | 6

- D̄: average real sector demand over the fit window's first two years (L6). Orders move with demand against this level.

- x̄: the sector's demand pressure at the start of the window: that average demand against the starting capacity (L3). Utilization rises when pressure is above it.

- K₀: sector capacity at the start of the window (L6). An entity's share of orders follows its share of capacity measured against it.

- transit: shipping time in months, from geography (L13), part of every quoted lead time.

- Congestion (L13), the extra wait as utilization nears full: on (κ_C = 1).

## How the forecast runs

Copies of the world100, each with its own shocks and parameter draw (entity, sector and group parameters all drawn)Fit window8 years of historyForecast horizon12 months past the last observed monthRandom seed12345Orders follow capacity shareyes (L6). Without it, an entity's orders ignore its own capacity, so an entity that loses capacity for good keeps its orders and its order book grows without bound.Starting stockseach copy starts its order book, input inventory and project pipeline spread by 0.3 (log) around the fitted startOrder level in the filtermoves with a spread of 0.05 (log) where a sector lets the filter correct itSector input deliveryat most 45 days older than the as-of date; an older one stops the runBand wideningpublished sector bands widened 2.55× in history, 2.31× in the nowcast and 1.86× in the forecast. The model's own 90% bands held too little of the truth in a backtest on this world; these factors bring the published bands to about 90% (see Against ground truth).Order book in the filterSemiconductors (overdue, level)

## How the fit runs

Copies of the world24 while fittingRoundsup to 10, stopping after 2 rounds without improvement or a relative change below 0.0001; the best round is keptSteps per round8 optimizer steps per entity, 2 for the sector parametersPull toward the groupas strong as 5 entities' worth of data, before the fit adjusts it (L25)Capacity growth priorscentered on each sector's demand trendPer-sector settingsOil and gas: lbfgs iters 20, sector iters 5, max rounds 30, patience 5, backtracks 3; Wholesale: lbfgs iters 16, sector iters 4, max rounds 20

## Starting ranges for the learned parameters

Before fitting, each parameter has a prior: a center and a 90% range of plausible values. The fit starts from the center and the range sets how far the data must push to move it (see What the data pin down for how far they did). Most come from the model's catalog; some are set for a sector, with a recorded reason. Entity parameters' ranges also bound how much entities in a group may differ.

Sector  7 set for this sector, the rest from the catalog

symbol  | meaning  | kind  | center  | 90% range  | set by

δ | Capacity drift: monthly change in capacity outside announced projects (L1). | entity  | 0 | -0.00329 to 0.00329  | catalog

α | Normal utilization: utilization in a month of normal demand, logit scale (L3). | entity  | 1.99 | 1.17 to 2.81  | this sector: synthetic world calibration

β | Demand response: how far utilization rises with demand pressure (L3). | entity  | 0.5 | 0.0065 to 0.994  | catalog

w | pass-through of input cost to unit cost (L4) | entity  | 0.3 | -0.029 to 0.629  | this sector: synthetic world calibration

μ | Normal markup: price over unit cost in a normal month, log scale (L5). | entity  | 0.14 | -0.0245 to 0.304  | this sector: synthetic world calibration

õ | Order level: new orders relative to the level that keeps the order book steady, log scale (L6). | entity  | 0 | -0.329 to 0.329  | catalog

βO | Order response: elasticity of new orders to real demand (L6). | entity  | 1 | 0.506 to 1.49  | catalog

ℓ | Normal order-book cover: months of output the order book holds in a normal month (L8–L9). | entity  | 2 | 1.44 to 3.28  | this sector: synthetic world calibration

lfnorm | Normal load factor: share of seat-miles sold in a normal month (L17). | entity  | 0.84 | 0.731 to 0.91  | this sector: synthetic world calibration

k0 | Starting capacity: capacity in the first month, log scale. | starting state  | 0 | -1.65 to 1.65  | catalog

c0 | Starting unit cost: unit cost in the first month, log scale. | starting state  | -2.04 | -2.53 to -1.55  | this sector: synthetic world calibration

m0 | Starting markup: markup in the first month, log scale. | starting state  | 0.1 | -0.229 to 0.429  | catalog

φz | utilization persistence (L3) | sector  | 0.8 | 0.637 to 0.901  | catalog

βB | utilization response to tightness (L3) | sector  | 0.3 | -0.029 to 0.629  | catalog

φm | markup persistence (L5) | sector  | 0.85 | 0.713 to 0.928  | catalog

γ | scarcity premium (L5) | sector  | 0.05 | -0.0323 to 0.132  | catalog

proc | processing time, months (L13) | sector  | 0.25 | 0.153 to 0.409  | catalog

ca²+cs² | arrival + service variability (L13) | sector  | 2 | 1.22 to 3.28  | catalog

νJ | capacity-jump tail thickness | sector  | 3 | 1.83 to 4.91  | catalog

sJ | capacity-jump scale | sector  | 0.01 | 0.00439 to 0.0228  | catalog

ση | utilization shock sd | sector  | 0.08 | 0.0488 to 0.131  | catalog

σν | unit-cost shock sd | sector  | 0.01 | 0.00611 to 0.0164  | catalog

σζ | markup shock sd | sector  | 0.01 | 0.00611 to 0.0164  | catalog

σO | genuine-order shock sd | sector  | 0.08 | 0.0488 to 0.131  | catalog

r | share of lost customers rebooking (L17) | sector  | 0.3 | 0.159 to 0.494  | catalog

labor/unit | employees per unit of monthly output (L29) | sector  | 0.000005 | 9.65e-7 to 0.0000259  | this sector: synthetic world calibration

Capacity drift δ is recentred on the sector's demand trend when the fit starts, so its center here is the catalog's, not the one the fit used.

## Observation noise

How much each kind of observation is expected to wander from the truth, as a fraction of its value (an observation with noise 0.05 is typically within about 5%). These are set, not fitted; the observations' fit to the model (Observations against the model) shows whether they are about right.

kind of observation  | noise

Book-to-bill | 0.05

Capacity announced | 0.05

Capacity offered | 0.02

Capacity under construction | 0.08

Census shipments | 0.03

Emissions | 0.08

Employment | 0.04

Exports | 0.08

Finished inventory | 0.08

Input inventory | 0.08

List price | 0.04

Load factor | 0.05

Market vacancy | 0.1

Occupancy | 0.08

Order book | 0.05

Price | 0.03

Production | 0.05

Quoted lead time | 0.12

Rent churn | 0.1

Revenue | 0.03

Satellite activity index | 0.05

Sector inventories | 0.03

Sector inventories at cost | 0.025

Signed not commenced | 0.05

Stated capacity | 0.02

Traffic | 0.02

Vacancy | 0.1

Satellite yes/no readings have no noise size: they are a probability, set by each sensor's curve.

## Official statistics

The statistics the model checks its sector totals against as it runs (L16). Each enters with the statistic's own uncertainty plus a floor; where the statistic already contains a tracked company's reports, its uncertainty is widened so the same information is not counted twice.

sector  | statistic  | floor  | widened

Airlines | AIRRPMTSID11  | 1% | 1.5×

Autos | IPG3361T3S  | 1% | 1.5×

Autos | CAPUTLG3361T3S  | 2% | 1.5×

Chemicals | IPG325S  | 1% | 1.5×

Chemicals | CAPUTLG325S  | 2% | 1.5×

Food | IPG311A2S  | 1% | 1.5×

Food | CAPUTLG311A2S  | 2% | 1.5×

Hospitals | PCU622622  | 1% | 1.5×

Hospitals | CES6562200001  | 1% | 1.5×

Hotels | CUSR0000SEHB  | 1% | 1.5×

Hotels | CES7072100001  | 1% | 1.5×

Housing | COMPUTSA  | 1% | 1.5×

Machinery | IPG333S  | 1% | 1.5×

Machinery | CAPUTLG333S  | 2% | 1.5×

Oil and gas | IPG211S  | 1% | 1.5×

Oil and gas | CAPUTLG211S  | 2% | 1.5×

Retail | RSGMS  | 1% | 1.5×

Retail | CUSR0000SACL1E  | 1% | 1.5×

Semiconductors | IPG3344S  | 1% | 1.5×

Semiconductors | CAPUTLG334S  | 2% | 1.5×

Steel | IPG3311A2S  | 1% | 1.5×

Steel | CAPUTLG3311A2S  | 2% | 1.5×

## Representative entities

The capacity of one establishment of each size, by sector: with the Census establishment counts, it sizes the representative entities that stand for untracked establishments.

sector  | small  | medium  | large  | unit

Airlines | 20.00M | 200.00M | 1.50B | seat mile per month

Autos | 300 | 4000 | 20.0k | vehicle per month

Chemicals | 800 | 9000 | 70.0k | tonne per month

Data centers | 0.500 | 4.00 | 25.00 | MW per month

Food | 300 | 4000 | 25.0k | tonne per month

Hospitals | 1500 | 9000 | 30.0k | patient day per month

Hotels | 1200 | 5000 | 20.0k | room night per month

Housing | 3.00 | 25.00 | 250 | home per month

Machinery | 400.0k | 6.00M | 50.00M | usd 2017 per month

Oil and gas | 30.0k | 400.0k | 4.00M | boe per month

Retail | 300.0k | 4.00M | 50.00M | usd 2017 per month

Semiconductors | 800 | 10.0k | 50.0k | wafer per month

Steel | 900 | 9000 | 60.0k | tonne per month

Wholesale | 600.0k | 8.00M | 80.00M | usd 2017 per month

Definitions behind the page's (i) marks:
- Normal demand (L6). The sector's demand, adjusted for prices, averaged over the first two years of the fit window and written as an index: 100 is the January 2010 level, so 108 means 8% more. The model treats this as normal: firms get orders equal to their normal output when demand is here, more when it is higher, fewer when lower.
- Starting demand-to-capacity ratio (L3): how much demand there was for each unit of capacity when the window began. Each month the model compares the current ratio with this one. If demand has grown faster than capacity, the ratio is higher and firms run their plants harder than normal; if capacity has grown faster, they run below normal. The number itself is the log of the ratio of a demand index to capacity, so its size depends on the units and means nothing alone; only changes from it matter.
- The sector's capacity at the start of the window: the most all its firms together could produce in a month. It is the yardstick for market share: a firm's share of orders follows its capacity measured against it (L6).
- Shipping time (L13): added to every lead time a firm quotes, so it is part of how long a customer waits.
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 104.0 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 132.9, 28% above normal, so orders run about 28% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 90% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 11% higher (demand up 28%, capacity up 16%), so on that account firms run about 0.7 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 95.87B seat-miles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 110.80B (up 16%).
- Nothing is shipped: the service is used where it is sold.
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 100.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.98% to their orders. In Sep 2026 demand is 101.8, close to normal, so orders run near normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 6% lower (demand up 1%, capacity up 7%), so on that account firms run about 0.6 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 669.9k vehicles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 718.7k (up 7%).
- About 9 days of shipping, part of every quoted lead time.
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 107.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.66% to their orders. In Sep 2026 demand is 114.6, 6% above normal, so orders run about 4% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 76% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is about the same (demand up 6%, capacity up 6%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.42M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3.61M (up 6%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 202.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 321.9, 59% above normal, so orders run about 61% above normal on that account.
- Not used here: a data center's utilization is set by how much is leased, not by how hard its sites run.
- The sector's capacity when the window began: 2724 MW. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3875 (up 42%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 106.3 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 114.8, 8% above normal, so orders run about 8% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 83% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 4% higher (demand up 8%, capacity up 3%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.08M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.15M (up 3%).
- About 6 days of shipping, part of every quoted lead time.
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 113.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.93% to their orders. In Sep 2026 demand is 133.7, 17% above normal, so orders run about 16% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 85% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 13% higher (demand up 17%, capacity up 4%), so on that account firms run about 1 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.38M patient-days a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.47M (up 4%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 100.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.2% to their orders. In Sep 2026 demand is 122.4, 21% above normal, so orders run about 26% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 87% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 20% higher (demand up 21%, capacity up 1%), so on that account firms run about 1 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.33M room-nights a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.36M (up 1%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 108.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.93% to their orders. In Sep 2026 demand is 110.1, 2% above normal, so orders run about 2% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 13% lower (demand up 2%, capacity up 17%), so on that account firms run about 1.1 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 12.0k homes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 14.0k (up 17%).
- The model counts no shipping time for this sector.
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 105.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 109.0, 3% above normal, so orders run about 3% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 76% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 3% higher (demand up 3%, capacity unchanged), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 4.66B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 4.64B (about the same).
- About 15 days of shipping, part of every quoted lead time.
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 116.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.99% to their orders. In Sep 2026 demand is 147.1, 26% above normal, so orders run about 26% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 87% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 7% lower (demand up 26%, capacity up 35%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 99.23M barrels of oil equivalent a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 134.20M (up 35%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 119.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.5% to their orders. In Sep 2026 demand is 137.3, 15% above normal, so orders run about 22% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 74% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 15% lower (demand up 15%, capacity up 34%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 10.73B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 14.43B (up 34%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 154.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 203.5, 32% above normal, so orders run about 32% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 18% lower (demand up 32%, capacity up 60%), so on that account firms run about 1.5 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.63M wafers a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.61M (up 60%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 107.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.98% to their orders. In Sep 2026 demand is 107.6, close to normal, so orders run near normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 80% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 10% lower (demand unchanged, capacity up 11%), so on that account firms run about 0.8 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.19M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3.54M (up 11%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 111.0 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 117.9, 6% above normal, so orders run about 7% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 7% lower (demand up 6%, capacity up 14%), so on that account firms run about 0.6 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 12.32B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 14.05B (up 14%).
- The parameter as it appears in the equations on Model Structure.
- What the parameter controls, and the equation it appears in.
- Entity: each firm gets its own value. Starting state: a firm's level in the first month of the window. Sector: one value shared by every firm in the sector.
- Where the fit starts: the most plausible value before seeing any data.
- Values the model finds plausible before seeing data. The narrower the range, the harder the data must push to move the parameter outside it.
- Catalog: the model's default for every sector. This sector: chosen for this sector, with the reason given.
- A kind of data the model reads, such as a company's revenue or a plant's stated capacity.
- How far an observation of this kind typically strays from the truth, as a fraction of its value. Larger noise means the model trusts each reading less and moves less when it disagrees.
- The official series, by its code in the sector input delivery.
- Extra uncertainty, as a fraction of the statistic's value, combined with the uncertainty the delivery gives it, so the model never treats the statistic as exact. A larger floor makes the model follow it less closely.
- How much the statistic's uncertainty is multiplied when it already includes tracked companies' own reports, so the same information is not counted twice.
- Monthly capacity of one small establishment. Multiplied by the Census count of small establishments in a region, it sizes that region's small representative entity.
- Monthly capacity of one medium establishment, used the same way.
- Monthly capacity of one large establishment, used the same way.
- The sector's own unit of output.
