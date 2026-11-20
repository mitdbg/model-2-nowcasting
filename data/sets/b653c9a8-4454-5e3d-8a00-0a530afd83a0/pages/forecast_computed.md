<!-- Model and Forecast › Values Computed From Input Data, for forecast b653c9a8-4454-5e3d-8a00-0a530afd83a0; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_computed.html?set=b653c9a8-4454-5e3d-8a00-0a530afd83a0; inputs 5030d5b338a0c507 -->

Forecast shown Forecast b653c9a8, world seed 20261107 (the forecast bundle's only forecast)

# Values Computed From Input Data

A few values in the equations are neither learned by the fit nor set by hand: each is measured once from the world's own data at the start of the fit window and then held fixed. The rule is the same for every world of the bundle; the numbers are each world's own, so this page shows one forecast at a time, with the values its fit started from. The sentences behind each ⓘ also use the forecast's fitted responses and where demand and capacity stood at its last observed month.

sector  | template  | D̄ (index)  | x̄  | K₀

Airlines | perishable service  | 104.0 | -25.2  | 95.87B seat-miles/month

Autos | make to stock  | 100.9 | -13.4  | 669.9k vehicles/month

Chemicals | make to stock  | 107.7 | -15  | 3.42M tonnes/month

Data centers | contracted capacity  | 202.8 | -7.24  | 2724 MW

Food | make to stock  | 106.3 | -14.5  | 2.08M tonnes/month

Hospitals | perishable service  | 113.9 | -14.6  | 2.38M patient-days/month

Hotels | perishable service  | 100.9 | -14.7  | 2.33M room-nights/month

Housing | make to order  | 108.1 | -9.33  | 12.0k homes/month

Machinery | make to order  | 105.8 | -22.2  | $4.66B/month (2017 dollars)

Oil and gas | pipeline producer  | 116.9 | -18.3  | 99.23M barrels of oil equivalent/month

Retail | distribution  | 119.7 | -22.9  | $10.73B/month (2017 dollars)

Semiconductors | pipeline producer  | 154.5 | -13.9  | 1.63M wafers/month

Steel | make to order  | 107.9 | -14.9  | 3.19M tonnes/month

Wholesale | distribution  | 111.0 | -23.1  | $12.32B/month (2017 dollars)

- D̄: average real sector demand over the fit window's first two years (L6), shown as a demand index (January 2010 = 100). Orders move with demand against this level.

- x̄: the sector's demand pressure at the start of the window: that average demand against the starting capacity (L3). Utilization rises when pressure is above it.

- K₀: sector capacity at the start of the window (L6), in the sector's own units. An entity's share of orders follows its share of capacity measured against it.

The other fixed values, set by hand or from outside sources such as geography, are the same for every world: see Inputs, Model Configuration.

Definitions behind the page's (i) marks:
- Normal demand (L6). The sector's demand, adjusted for prices, averaged over the first two years of the fit window and written as an index: 100 is the January 2010 level, so 108 means 8% more. The model treats this as normal: firms get orders equal to their normal output when demand is here, more when it is higher, fewer when lower.
- Starting demand-to-capacity ratio (L3): how much demand there was for each unit of capacity when the window began. Each month the model compares the current ratio with this one. If demand has grown faster than capacity, the ratio is higher and firms run their plants harder than normal; if capacity has grown faster, they run below normal. The number itself is the log of the ratio of a demand index to capacity, so its size depends on the units and means nothing alone; only changes from it matter.
- The sector's capacity at the start of the window: the most all its firms together could produce in a month. It is the yardstick for market share: a firm's share of orders follows its capacity measured against it (L6).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 104.0 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 132.9, 28% above normal, so orders run about 28% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 90% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 11% higher (demand up 28%, capacity up 16%), so on that account firms run about 0.7 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 95.87B seat-miles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 110.80B (up 16%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 100.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.98% to their orders. In Sep 2026 demand is 101.8, close to normal, so orders run near normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 6% lower (demand up 1%, capacity up 7%), so on that account firms run about 0.6 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 669.9k vehicles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 718.7k (up 7%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 107.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.66% to their orders. In Sep 2026 demand is 114.6, 6% above normal, so orders run about 4% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 76% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is about the same (demand up 6%, capacity up 6%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.42M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3.61M (up 6%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 202.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 321.9, 59% above normal, so orders run about 61% above normal on that account.
- Not used here: a data center's utilization is set by how much is leased, not by how hard its sites run.
- The sector's capacity when the window began: 2724 MW. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3875 (up 42%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 106.3 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 114.8, 8% above normal, so orders run about 8% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 83% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 4% higher (demand up 8%, capacity up 3%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.08M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.15M (up 3%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 113.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.93% to their orders. In Sep 2026 demand is 133.7, 17% above normal, so orders run about 16% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 85% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 13% higher (demand up 17%, capacity up 4%), so on that account firms run about 1 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.38M patient-days a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.47M (up 4%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 100.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.2% to their orders. In Sep 2026 demand is 122.4, 21% above normal, so orders run about 26% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 87% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 20% higher (demand up 21%, capacity up 1%), so on that account firms run about 1 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.33M room-nights a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.36M (up 1%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 108.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.93% to their orders. In Sep 2026 demand is 110.1, 2% above normal, so orders run about 2% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 13% lower (demand up 2%, capacity up 17%), so on that account firms run about 1.1 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 12.0k homes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 14.0k (up 17%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 105.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 109.0, 3% above normal, so orders run about 3% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 76% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 3% higher (demand up 3%, capacity unchanged), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 4.66B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 4.64B (about the same).
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
