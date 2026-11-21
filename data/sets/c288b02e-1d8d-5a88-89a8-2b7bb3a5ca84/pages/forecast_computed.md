<!-- Model and Forecast › Values Computed From Input Data, for forecast c288b02e-1d8d-5a88-89a8-2b7bb3a5ca84; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_computed.html?set=c288b02e-1d8d-5a88-89a8-2b7bb3a5ca84; inputs 0aa0b1680ccac15a -->

Forecast shown  one forecast for each of the bundle's 5 worlds

# Values Computed From Input Data

A few values in the equations are neither learned by the fit nor set by hand: each is measured once from the world's own data at the start of the fit window and then held fixed. The rule is the same for every world of the bundle; the numbers are each world's own, so this page shows one forecast at a time, with the values its fit started from. The sentences behind each ⓘ also use the forecast's fitted responses and where demand and capacity stood at its last observed month.

sector  | template  | D̄ (index)  | x̄  | K₀

Airlines | perishable service  | 108.4 | -25.4  | 109.40B seat-miles/month

Autos | make to stock  | 103.6 | -13.4  | 683.4k vehicles/month

Chemicals | make to stock  | 110.4 | -14.9  | 3.45M tonnes/month

Data centers | contracted capacity  | 202.4 | -7.21  | 2642 MW

Food | make to stock  | 106.3 | -14.4  | 1.96M tonnes/month

Hospitals | perishable service  | 114.2 | -14.5  | 2.32M patient-days/month

Hotels | perishable service  | 105.1 | -14.7  | 2.52M room-nights/month

Housing | make to order  | 113.2 | -9.27  | 12.3k homes/month

Machinery | make to order  | 109.5 | -22  | $3.80B/month (2017 dollars)

Oil and gas | pipeline producer  | 122.3 | -18.3  | 97.56M barrels of oil equivalent/month

Retail | distribution  | 124.4 | -23  | $12.18B/month (2017 dollars)

Semiconductors | pipeline producer  | 166.1 | -13.9  | 1.80M wafers/month

Steel | make to order  | 111.1 | -14.9  | 3.35M tonnes/month

Wholesale | distribution  | 114.8 | -23.1  | $13.03B/month (2017 dollars)

- D̄: average real sector demand over the fit window's first two years (L6), shown as a demand index (January 2010 = 100). Orders move with demand against this level.

- x̄: the sector's demand pressure at the start of the window: that average demand against the starting capacity (L3). Utilization rises when pressure is above it.

- K₀: sector capacity at the start of the window (L6), in the sector's own units. An entity's share of orders follows its share of capacity measured against it.

The other fixed values, set by hand or from outside sources such as geography, are the same for every world: see Inputs, Model Configuration.

Definitions behind the page's (i) marks:
- Normal demand (L6). The sector's demand, adjusted for prices, averaged over the first two years of the fit window and written as an index: 100 is the January 2010 level, so 108 means 8% more. The model treats this as normal: firms get orders equal to their normal output when demand is here, more when it is higher, fewer when lower.
- Starting demand-to-capacity ratio (L3): how much demand there was for each unit of capacity when the window began. Each month the model compares the current ratio with this one. If demand has grown faster than capacity, the ratio is higher and firms run their plants harder than normal; if capacity has grown faster, they run below normal. The number itself is the log of the ratio of a demand index to capacity, so its size depends on the units and means nothing alone; only changes from it matter.
- The sector's capacity at the start of the window: the most all its firms together could produce in a month. It is the yardstick for market share: a firm's share of orders follows its capacity measured against it (L6).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 108.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 135.1, 25% above normal, so orders run about 25% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 86% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 17% lower (demand up 25%, capacity up 50%), so on that account firms run about 1 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 109.40B seat-miles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 163.60B (up 50%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 103.6 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.95% to their orders. In Sep 2026 demand is 112.9, 9% above normal, so orders run about 9% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 80% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 4% higher (demand up 9%, capacity up 4%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 683.4k vehicles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 713.6k (up 4%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 110.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.87% to their orders. In Sep 2026 demand is 118.1, 7% above normal, so orders run about 6% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 8% higher (demand up 7%, capacity down 1%), so on that account firms run about 0.6 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.45M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3.41M (down 1%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 202.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.96% to their orders. In Sep 2026 demand is 326.1, 61% above normal, so orders run about 58% above normal on that account.
- Not used here: a data center's utilization is set by how much is leased, not by how hard its sites run.
- The sector's capacity when the window began: 2642 MW. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3772 (up 43%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 106.3 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.99% to their orders. In Sep 2026 demand is 113.4, 7% above normal, so orders run about 7% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 2% lower (demand up 7%, capacity up 9%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.96M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.14M (up 9%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 114.2 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.83% to their orders. In Sep 2026 demand is 134.9, 18% above normal, so orders run about 15% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 83% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 15% higher (demand up 18%, capacity up 2%), so on that account firms run about 1.4 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.32M patient-days a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.37M (up 2%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 105.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 130.1, 24% above normal, so orders run about 25% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 88% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 32% higher (demand up 24%, capacity down 6%), so on that account firms run about 1.4 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.52M room-nights a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.36M (down 6%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 113.2 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.97% to their orders. In Sep 2026 demand is 120.7, 7% above normal, so orders run about 6% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 80% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 4% higher (demand up 7%, capacity up 3%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 12.3k homes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 12.7k (up 3%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 109.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.98% to their orders. In Sep 2026 demand is 114.2, 4% above normal, so orders run about 4% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 78% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 18% lower (demand up 4%, capacity up 28%), so on that account firms run about 1.8 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.80B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 4.85B (up 28%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 122.3 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 146.7, 20% above normal, so orders run about 22% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 89% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 20% lower (demand up 20%, capacity up 50%), so on that account firms run about 1.1 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 97.56M barrels of oil equivalent a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 145.90M (up 50%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 124.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 141.2, 14% above normal, so orders run about 15% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 76% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 10% lower (demand up 14%, capacity up 26%), so on that account firms run about 1.1 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 12.18B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 15.30B (up 26%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 166.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 228.2, 37% above normal, so orders run about 37% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 9% lower (demand up 37%, capacity up 51%), so on that account firms run about 0.7 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.80M wafers a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.73M (up 51%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 111.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 120.2, 8% above normal, so orders run about 9% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 75% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 4% lower (demand up 8%, capacity up 12%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.35M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3.75M (up 12%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 114.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.85% to their orders. In Sep 2026 demand is 130.2, 13% above normal, so orders run about 11% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 25% higher (demand up 13%, capacity down 9%), so on that account firms run about 2.5 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 13.03B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 11.84B (down 9%).
