<!-- Model and Forecast › Values Computed From Input Data, for forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_computed.html?set=0c0a014b-d739-5e72-95a6-0b4ec4f3753e; inputs a5e6e73bf3f91f39 -->

Forecast shown Forecast 0c0a014b, world seed 20261115 (the forecast bundle's only forecast)

# Values Computed From Input Data

A few values in the equations are neither learned by the fit nor set by hand: each is measured once from the world's own data at the start of the fit window and then held fixed. The rule is the same for every world of the bundle; the numbers are each world's own, so this page shows one forecast at a time, with the values its fit started from. The sentences behind each ⓘ also use the forecast's fitted responses and where demand and capacity stood at its last observed month.

sector  | template  | D̄ (index)  | x̄  | K₀

Airlines | perishable service  | 104.7 | -25.4  | 110.40B seat-miles/month

Autos | make to stock  | 100.0 | -13.4  | 650.7k vehicles/month

Chemicals | make to stock  | 105.2 | -15  | 3.46M tonnes/month

Data centers | contracted capacity  | 201.0 | -7.23  | 2657 MW

Food | make to stock  | 107.1 | -14.5  | 2.06M tonnes/month

Hospitals | perishable service  | 112.0 | -14.6  | 2.40M patient-days/month

Hotels | perishable service  | 100.5 | -14.7  | 2.38M room-nights/month

Housing | make to order  | 109.0 | -9.26  | 11.2k homes/month

Machinery | make to order  | 107.5 | -22.3  | $5.30B/month (2017 dollars)

Oil and gas | pipeline producer  | 121.3 | -18.3  | 102.90M barrels of oil equivalent/month

Retail | distribution  | 120.4 | -23.2  | $14.07B/month (2017 dollars)

Semiconductors | pipeline producer  | 159.8 | -13.9  | 1.59M wafers/month

Steel | make to order  | 109.9 | -14.8  | 3.05M tonnes/month

Wholesale | distribution  | 113.0 | -23.1  | $11.97B/month (2017 dollars)

- D̄: average real sector demand over the fit window's first two years (L6), shown as a demand index (January 2010 = 100). Orders move with demand against this level.

- x̄: the sector's demand pressure at the start of the window: that average demand against the starting capacity (L3). Utilization rises when pressure is above it.

- K₀: sector capacity at the start of the window (L6), in the sector's own units. An entity's share of orders follows its share of capacity measured against it.

The other fixed values, set by hand or from outside sources such as geography, are the same for every world: see Inputs, Model Configuration.

Definitions behind the page's (i) marks:
- Normal demand (L6). The sector's demand, adjusted for prices, averaged over the first two years of the fit window and written as an index: 100 is the January 2010 level, so 108 means 8% more. The model treats this as normal: firms get orders equal to their normal output when demand is here, more when it is higher, fewer when lower.
- Starting demand-to-capacity ratio (L3): how much demand there was for each unit of capacity when the window began. Each month the model compares the current ratio with this one. If demand has grown faster than capacity, the ratio is higher and firms run their plants harder than normal; if capacity has grown faster, they run below normal. The number itself is the log of the ratio of a demand index to capacity, so its size depends on the units and means nothing alone; only changes from it matter.
- The sector's capacity at the start of the window: the most all its firms together could produce in a month. It is the yardstick for market share: a firm's share of orders follows its capacity measured against it (L6).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 104.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.9% to their orders. In Sep 2026 demand is 135.3, 29% above normal, so orders run about 26% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 81% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 11% higher (demand up 29%, capacity up 16%), so on that account firms run about 0.6 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 110.40B seat-miles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 128.20B (up 16%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 100.0 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.83% to their orders. In Sep 2026 demand is 129.0, 29% above normal, so orders run about 24% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 75% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 17% higher (demand up 29%, capacity up 11%), so on that account firms run about 1.5 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 650.7k vehicles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 720.2k (up 11%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 105.2 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 127.4, 21% above normal, so orders run about 24% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 71% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 6% higher (demand up 21%, capacity up 14%), so on that account firms run about 1 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.46M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3.95M (up 14%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 201.0 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.2% to their orders. In Sep 2026 demand is 362.2, 80% above normal, so orders run about 103% above normal on that account.
- Not used here: a data center's utilization is set by how much is leased, not by how hard its sites run.
- The sector's capacity when the window began: 2657 MW. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3933 (up 48%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 107.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 116.0, 8% above normal, so orders run about 9% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 81% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 2% higher (demand up 8%, capacity up 6%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.06M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.19M (up 6%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 112.0 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 132.9, 19% above normal, so orders run about 22% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 87% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is about the same (demand up 19%, capacity up 20%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.40M patient-days a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.89M (up 20%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 100.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 140.5, 40% above normal, so orders run about 40% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 89% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 29% higher (demand up 40%, capacity up 9%), so on that account firms run about 1.5 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.38M room-nights a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.58M (up 9%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 109.0 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 147.9, 36% above normal, so orders run about 38% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 80% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 11% higher (demand up 36%, capacity up 22%), so on that account firms run about 0.8 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 11.2k homes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 13.7k (up 22%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 107.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 131.3, 22% above normal, so orders run about 22% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 78% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 25% higher (demand up 22%, capacity down 2%), so on that account firms run about 1.9 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 5.30B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 5.18B (down 2%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 121.3 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.2% to their orders. In Sep 2026 demand is 156.0, 29% above normal, so orders run about 35% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 88% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 4% lower (demand up 29%, capacity up 34%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 102.90M barrels of oil equivalent a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 137.60M (up 34%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 120.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.88% to their orders. In Sep 2026 demand is 151.5, 26% above normal, so orders run about 22% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 70% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 33% higher (demand up 26%, capacity down 5%), so on that account firms run about 0.7 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 14.07B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 13.31B (down 5%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 159.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 251.1, 57% above normal, so orders run about 57% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is about the same (demand up 57%, capacity up 59%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.59M wafers a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.54M (up 59%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 109.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.2% to their orders. In Sep 2026 demand is 125.6, 14% above normal, so orders run about 17% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 5% higher (demand up 14%, capacity up 9%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.05M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3.33M (up 9%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 113.0 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 135.3, 20% above normal, so orders run about 21% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 80% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 15% higher (demand up 20%, capacity up 4%), so on that account firms run about 1.1 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 11.97B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 12.45B (up 4%).
