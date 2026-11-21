<!-- Model and Forecast › Values Computed From Input Data, for forecast 95b8660e-19a8-5f67-bd12-40e75a011154; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_computed.html?set=95b8660e-19a8-5f67-bd12-40e75a011154; inputs a42f03742527be10 -->

Forecast shown  one forecast for each of the bundle's 5 worlds

# Values Computed From Input Data

A few values in the equations are neither learned by the fit nor set by hand: each is measured once from the world's own data at the start of the fit window and then held fixed. The rule is the same for every world of the bundle; the numbers are each world's own, so this page shows one forecast at a time, with the values its fit started from. The sentences behind each ⓘ also use the forecast's fitted responses and where demand and capacity stood at its last observed month.

sector  | template  | D̄ (index)  | x̄  | K₀

Airlines | perishable service  | 103.8 | -25.3  | 97.11B seat-miles/month

Autos | make to stock  | 96.3 | -13.5  | 683.0k vehicles/month

Chemicals | make to stock  | 104.6 | -14.9  | 3.03M tonnes/month

Data centers | contracted capacity  | 200.0 | -7.24  | 2679 MW

Food | make to stock  | 105.7 | -14.5  | 2.16M tonnes/month

Hospitals | perishable service  | 116.2 | -14.5  | 2.31M patient-days/month

Hotels | perishable service  | 99.7 | -14.7  | 2.44M room-nights/month

Housing | make to order  | 102.5 | -9.28  | 11.0k homes/month

Machinery | make to order  | 104.1 | -22.1  | $4.03B/month (2017 dollars)

Oil and gas | pipeline producer  | 117.4 | -18.3  | 97.37M barrels of oil equivalent/month

Retail | distribution  | 118.2 | -23.1  | $12.79B/month (2017 dollars)

Semiconductors | pipeline producer  | 152.7 | -13.9  | 1.58M wafers/month

Steel | make to order  | 107.1 | -14.9  | 3.19M tonnes/month

Wholesale | distribution  | 109.7 | -23.1  | $11.65B/month (2017 dollars)

- D̄: average real sector demand over the fit window's first two years (L6), shown as a demand index (January 2010 = 100). Orders move with demand against this level.

- x̄: the sector's demand pressure at the start of the window: that average demand against the starting capacity (L3). Utilization rises when pressure is above it.

- K₀: sector capacity at the start of the window (L6), in the sector's own units. An entity's share of orders follows its share of capacity measured against it.

The other fixed values, set by hand or from outside sources such as geography, are the same for every world: see Inputs, Model Configuration.

Definitions behind the page's (i) marks:
- Normal demand (L6). The sector's demand, adjusted for prices, averaged over the first two years of the fit window and written as an index: 100 is the January 2010 level, so 108 means 8% more. The model treats this as normal: firms get orders equal to their normal output when demand is here, more when it is higher, fewer when lower.
- Starting demand-to-capacity ratio (L3): how much demand there was for each unit of capacity when the window began. Each month the model compares the current ratio with this one. If demand has grown faster than capacity, the ratio is higher and firms run their plants harder than normal; if capacity has grown faster, they run below normal. The number itself is the log of the ratio of a demand index to capacity, so its size depends on the units and means nothing alone; only changes from it matter.
- The sector's capacity at the start of the window: the most all its firms together could produce in a month. It is the yardstick for market share: a firm's share of orders follows its capacity measured against it (L6).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 103.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 144.8, 39% above normal, so orders run about 40% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 87% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 10% higher (demand up 39%, capacity up 26%), so on that account firms run about 0.6 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 97.11B seat-miles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 122.70B (up 26%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 96.3 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 121.4, 26% above normal, so orders run about 26% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 69% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 29% higher (demand up 26%, capacity down 2%), so on that account firms run about 3.7 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 683.0k vehicles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 666.8k (down 2%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 104.6 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.82% to their orders. In Aug 2026 demand is 122.1, 17% above normal, so orders run about 14% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 80% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 12% higher (demand up 17%, capacity up 5%), so on that account firms run about 0.5 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.03M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3.17M (up 5%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 200.0 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.96% to their orders. In Aug 2026 demand is 350.4, 75% above normal, so orders run about 71% above normal on that account.
- Not used here: a data center's utilization is set by how much is leased, not by how hard its sites run.
- The sector's capacity when the window began: 2679 MW. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3653 (up 36%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 105.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.96% to their orders. In Aug 2026 demand is 113.2, 7% above normal, so orders run about 7% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 76% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 9% higher (demand up 7%, capacity down 2%), so on that account firms run about 1 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.16M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.12M (down 2%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 116.2 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.85% to their orders. In Aug 2026 demand is 137.1, 18% above normal, so orders run about 15% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 89% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 4% higher (demand up 18%, capacity up 13%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.31M patient-days a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.60M (up 13%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 99.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 136.7, 37% above normal, so orders run about 40% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 86% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 37% higher (demand up 37%, capacity unchanged), so on that account firms run about 2 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.44M room-nights a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.44M (about the same).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 102.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.93% to their orders. In Aug 2026 demand is 134.4, 31% above normal, so orders run about 28% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 80% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 22% higher (demand up 31%, capacity up 7%), so on that account firms run about 1.5 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 11.0k homes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 11.8k (up 7%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 104.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 121.2, 16% above normal, so orders run about 16% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 78% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 16%, capacity up 15%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 4.03B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 4.62B (up 15%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 117.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 151.5, 29% above normal, so orders run about 32% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 87% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 16% lower (demand up 29%, capacity up 54%), so on that account firms run about 1 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 97.37M barrels of oil equivalent a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 150.20M (up 54%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 118.2 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.85% to their orders. In Aug 2026 demand is 144.6, 22% above normal, so orders run about 19% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 66% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 4% lower (demand up 22%, capacity up 27%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 12.79B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 16.21B (up 27%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 152.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 233.8, 53% above normal, so orders run about 54% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 53%, capacity up 54%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.58M wafers a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.44M (up 54%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 107.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.83% to their orders. In Aug 2026 demand is 123.9, 16% above normal, so orders run about 13% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 76% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 12% higher (demand up 16%, capacity up 3%), so on that account firms run about 1.1 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.19M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3.29M (up 3%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 109.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 132.7, 21% above normal, so orders run about 23% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 78% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 3% higher (demand up 21%, capacity up 17%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 11.65B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 13.65B (up 17%).
