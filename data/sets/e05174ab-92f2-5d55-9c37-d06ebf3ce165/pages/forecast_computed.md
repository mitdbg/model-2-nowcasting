<!-- Model and Forecast › Values Computed From Input Data, for forecast e05174ab-92f2-5d55-9c37-d06ebf3ce165; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_computed.html?set=e05174ab-92f2-5d55-9c37-d06ebf3ce165; inputs 85cc4940a5b13c25 -->

Forecast shown  one forecast for each of the bundle's 5 worlds

# Values Computed From Input Data

A few values in the equations are neither learned by the fit nor set by hand: each is measured once from the world's own data at the start of the fit window and then held fixed. The rule is the same for every world of the bundle; the numbers are each world's own, so this page shows one forecast at a time, with the values its fit started from. The sentences behind each ⓘ also use the forecast's fitted responses and where demand and capacity stood at its last observed month.

sector  | template  | D̄ (index)  | x̄  | K₀

Airlines | perishable service  | 106.4 | -25.3  | 106.80B seat-miles/month

Autos | make to stock  | 106.2 | -13.3  | 676.6k vehicles/month

Chemicals | make to stock  | 111.9 | -14.8  | 3.06M tonnes/month

Data centers | contracted capacity  | 206.4 | -7.23  | 2740 MW

Food | make to stock  | 107.5 | -14.4  | 1.96M tonnes/month

Hospitals | perishable service  | 112.9 | -14.6  | 2.31M patient-days/month

Hotels | perishable service  | 102.4 | -14.7  | 2.42M room-nights/month

Housing | make to order  | 117.6 | -9.28  | 12.1k homes/month

Machinery | make to order  | 111.2 | -22.2  | $4.78B/month (2017 dollars)

Oil and gas | pipeline producer  | 122.7 | -18.4  | 113.10M barrels of oil equivalent/month

Retail | distribution  | 122.8 | -23  | $12.27B/month (2017 dollars)

Semiconductors | pipeline producer  | 164.2 | -13.9  | 1.62M wafers/month

Steel | make to order  | 110.9 | -14.8  | 2.96M tonnes/month

Wholesale | distribution  | 118.1 | -23.1  | $13.04B/month (2017 dollars)

- D̄: average real sector demand over the fit window's first two years (L6), shown as a demand index (January 2010 = 100). Orders move with demand against this level.

- x̄: the sector's demand pressure at the start of the window: that average demand against the starting capacity (L3). Utilization rises when pressure is above it.

- K₀: sector capacity at the start of the window (L6), in the sector's own units. An entity's share of orders follows its share of capacity measured against it.

The other fixed values, set by hand or from outside sources such as geography, are the same for every world: see Inputs, Model Configuration.

Definitions behind the page's (i) marks:
- Normal demand (L6). The sector's demand, adjusted for prices, averaged over the first two years of the fit window and written as an index: 100 is the January 2010 level, so 108 means 8% more. The model treats this as normal: firms get orders equal to their normal output when demand is here, more when it is higher, fewer when lower.
- Starting demand-to-capacity ratio (L3): how much demand there was for each unit of capacity when the window began. Each month the model compares the current ratio with this one. If demand has grown faster than capacity, the ratio is higher and firms run their plants harder than normal; if capacity has grown faster, they run below normal. The number itself is the log of the ratio of a demand index to capacity, so its size depends on the units and means nothing alone; only changes from it matter.
- The sector's capacity at the start of the window: the most all its firms together could produce in a month. It is the yardstick for market share: a firm's share of orders follows its capacity measured against it (L6).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 106.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 135.8, 28% above normal, so orders run about 29% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 87% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 25% higher (demand up 28%, capacity up 2%), so on that account firms run about 1.1 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 106.80B seat-miles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 109.40B (up 2%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 106.2 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.91% to their orders. In Aug 2026 demand is 117.2, 10% above normal, so orders run about 9% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 81% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 16% higher (demand up 10%, capacity down 5%), so on that account firms run about 1.4 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 676.6k vehicles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 645.1k (down 5%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 111.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 119.1, 6% above normal, so orders run about 6% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 83% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 3% lower (demand up 6%, capacity up 10%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.06M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3.35M (up 10%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 206.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.2% to their orders. In Aug 2026 demand is 325.1, 58% above normal, so orders run about 70% above normal on that account.
- Not used here: a data center's utilization is set by how much is leased, not by how hard its sites run.
- The sector's capacity when the window began: 2740 MW. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3840 (up 40%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 107.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 111.2, 3% above normal, so orders run about 4% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 84% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 10% lower (demand up 3%, capacity up 15%), so on that account firms run about 0.7 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.96M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.25M (up 15%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 112.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 134.2, 19% above normal, so orders run about 19% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 88% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 7% higher (demand up 19%, capacity up 11%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.31M patient-days a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.56M (up 11%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 102.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.94% to their orders. In Aug 2026 demand is 127.1, 24% above normal, so orders run about 23% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 86% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 14% higher (demand up 24%, capacity up 9%), so on that account firms run about 0.7 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.42M room-nights a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.63M (up 9%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 117.6 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 122.8, 4% above normal, so orders run about 4% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 80% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 32% lower (demand up 4%, capacity up 54%), so on that account firms run about 3.3 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 12.1k homes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 18.7k (up 54%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 111.2 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.97% to their orders. In Aug 2026 demand is 116.8, 5% above normal, so orders run about 5% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 78% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 3% higher (demand up 5%, capacity up 2%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 4.78B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 4.88B (up 2%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 122.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 148.6, 21% above normal, so orders run about 24% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 88% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 3% higher (demand up 21%, capacity up 17%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 113.10M barrels of oil equivalent a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 132.80M (up 17%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 122.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.92% to their orders. In Aug 2026 demand is 141.8, 15% above normal, so orders run about 14% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 73% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 5% higher (demand up 15%, capacity up 10%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 12.27B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 13.46B (up 10%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 164.2 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 218.2, 33% above normal, so orders run about 33% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 20% lower (demand up 33%, capacity up 66%), so on that account firms run about 1.7 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.62M wafers a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.69M (up 66%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 110.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 113.1, 2% above normal, so orders run about 2% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 10% lower (demand up 2%, capacity up 13%), so on that account firms run about 0.9 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.96M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3.35M (up 13%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 118.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.99% to their orders. In Aug 2026 demand is 129.6, 10% above normal, so orders run about 10% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 78% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 3% lower (demand up 10%, capacity up 14%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 13.04B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 14.81B (up 14%).
