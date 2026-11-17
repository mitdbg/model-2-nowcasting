<!-- Model and Forecast › Values Computed From Input Data, for forecast c2b0f986-4fc0-5f99-aeef-7b800ddfc096; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_computed.html?set=c2b0f986-4fc0-5f99-aeef-7b800ddfc096; inputs fcb5d636e59c8a2e -->

Forecast shown  one forecast for each of the bundle's 5 worlds

# Values Computed From Input Data

A few values in the equations are neither learned by the fit nor set by hand: each is measured once from the world's own data at the start of the fit window and then held fixed. The rule is the same for every world of the bundle; the numbers are each world's own, so this page shows one forecast at a time, with the values its fit started from. The sentences behind each ⓘ also use the forecast's fitted responses and where demand and capacity stood at its last observed month.

sector  | template  | D̄ (index)  | x̄  | K₀

Airlines | perishable service  | 108.8 | -25.4  | 117.80B seat-miles/month

Autos | make to stock  | 105.1 | -13.3  | 619.9k vehicles/month

Chemicals | make to stock  | 110.9 | -14.9  | 3.27M tonnes/month

Data centers | contracted capacity  | 203.8 | -7.25  | 2767 MW

Food | make to stock  | 107.9 | -14.5  | 2.06M tonnes/month

Hospitals | perishable service  | 116.7 | -14.5  | 2.31M patient-days/month

Hotels | perishable service  | 103.6 | -14.7  | 2.40M room-nights/month

Housing | make to order  | 114.4 | -9.22  | 11.3k homes/month

Machinery | make to order  | 111.5 | -22.2  | $4.66B/month (2017 dollars)

Oil and gas | pipeline producer  | 120.1 | -18.4  | 106.90M barrels of oil equivalent/month

Retail | distribution  | 122.5 | -23  | $11.88B/month (2017 dollars)

Semiconductors | pipeline producer  | 163.5 | -13.9  | 1.64M wafers/month

Steel | make to order  | 112.8 | -14.8  | 3.15M tonnes/month

Wholesale | distribution  | 113.7 | -23.1  | $11.79B/month (2017 dollars)

- D̄: average real sector demand over the fit window's first two years (L6), shown as a demand index (January 2010 = 100). Orders move with demand against this level.

- x̄: the sector's demand pressure at the start of the window: that average demand against the starting capacity (L3). Utilization rises when pressure is above it.

- K₀: sector capacity at the start of the window (L6), in the sector's own units. An entity's share of orders follows its share of capacity measured against it.

The other fixed values, set by hand or from outside sources such as geography, are the same for every world: see Inputs, Model Configuration.

Definitions behind the page's (i) marks:
- Normal demand (L6). The sector's demand, adjusted for prices, averaged over the first two years of the fit window and written as an index: 100 is the January 2010 level, so 108 means 8% more. The model treats this as normal: firms get orders equal to their normal output when demand is here, more when it is higher, fewer when lower.
- Starting demand-to-capacity ratio (L3): how much demand there was for each unit of capacity when the window began. Each month the model compares the current ratio with this one. If demand has grown faster than capacity, the ratio is higher and firms run their plants harder than normal; if capacity has grown faster, they run below normal. The number itself is the log of the ratio of a demand index to capacity, so its size depends on the units and means nothing alone; only changes from it matter.
- The sector's capacity at the start of the window: the most all its firms together could produce in a month. It is the yardstick for market share: a firm's share of orders follows its capacity measured against it (L6).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 108.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 141.2, 30% above normal, so orders run about 32% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 75% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 5% higher (demand up 30%, capacity up 23%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 117.80B seat-miles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 145.10B (up 23%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 105.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 119.6, 14% above normal, so orders run about 15% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 14%, capacity up 14%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 619.9k vehicles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 705.4k (up 14%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 110.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.2% to their orders. In Aug 2026 demand is 121.1, 9% above normal, so orders run about 12% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 73% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 6% higher (demand up 9%, capacity up 3%), so on that account firms run about 0.6 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.27M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3.35M (up 3%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 203.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.2% to their orders. In Aug 2026 demand is 335.0, 64% above normal, so orders run about 79% above normal on that account.
- Not used here: a data center's utilization is set by how much is leased, not by how hard its sites run.
- The sector's capacity when the window began: 2767 MW. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3914 (up 41%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 107.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 115.2, 7% above normal, so orders run about 7% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 7% higher (demand up 7%, capacity unchanged), so on that account firms run about 0.5 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.06M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.05M (about the same).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 116.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.4% to their orders. In Aug 2026 demand is 134.0, 15% above normal, so orders run about 21% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 88% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 6% lower (demand up 15%, capacity up 22%), so on that account firms run about 0.6 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.31M patient-days a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.83M (up 22%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 103.6 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.93% to their orders. In Aug 2026 demand is 131.0, 27% above normal, so orders run about 25% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 87% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 21% higher (demand up 27%, capacity up 4%), so on that account firms run about 0.9 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.40M room-nights a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.50M (up 4%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 114.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.95% to their orders. In Aug 2026 demand is 136.9, 20% above normal, so orders run about 18% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 78% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 4% higher (demand up 20%, capacity up 15%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 11.3k homes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 13.0k (up 15%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 111.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.96% to their orders. In Aug 2026 demand is 129.0, 16% above normal, so orders run about 15% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 77% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 16%, capacity up 17%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 4.66B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 5.45B (up 17%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 120.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.96% to their orders. In Aug 2026 demand is 156.5, 30% above normal, so orders run about 29% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 88% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 5% higher (demand up 30%, capacity up 24%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 106.90M barrels of oil equivalent a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 133.00M (up 24%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 122.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.83% to their orders. In Aug 2026 demand is 148.0, 21% above normal, so orders run about 17% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 70% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 8% higher (demand up 21%, capacity up 12%), so on that account firms run about 0.5 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 11.88B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 13.26B (up 12%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 163.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 234.5, 43% above normal, so orders run about 43% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 8% lower (demand up 43%, capacity up 55%), so on that account firms run about 0.6 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.64M wafers a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.54M (up 55%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 112.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.98% to their orders. In Aug 2026 demand is 127.6, 13% above normal, so orders run about 13% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 72% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 13%, capacity up 12%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.15M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3.53M (up 12%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 113.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.99% to their orders. In Aug 2026 demand is 130.9, 15% above normal, so orders run about 15% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 15%, capacity up 13%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 11.79B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 13.36B (up 13%).
