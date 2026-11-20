<!-- Model and Forecast › Values Computed From Input Data, for forecast 958bc61e-85e2-5352-970c-bb52c97226a3; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_computed.html?set=958bc61e-85e2-5352-970c-bb52c97226a3; inputs aa771cae49c2836c -->

Forecast shown Forecast 958bc61e, world seed 20261117 (the forecast bundle's only forecast)

# Values Computed From Input Data

A few values in the equations are neither learned by the fit nor set by hand: each is measured once from the world's own data at the start of the fit window and then held fixed. The rule is the same for every world of the bundle; the numbers are each world's own, so this page shows one forecast at a time, with the values its fit started from. The sentences behind each ⓘ also use the forecast's fitted responses and where demand and capacity stood at its last observed month.

sector  | template  | D̄ (index)  | x̄  | K₀

Airlines | perishable service  | 104.1 | -25.3  | 104.10B seat-miles/month

Autos | make to stock  | 97.1 | -13.6  | 775.8k vehicles/month

Chemicals | make to stock  | 106.6 | -15  | 3.33M tonnes/month

Data centers | contracted capacity  | 198.7 | -7.22  | 2621 MW

Food | make to stock  | 106.8 | -14.4  | 1.97M tonnes/month

Hospitals | perishable service  | 113.4 | -14.6  | 2.43M patient-days/month

Hotels | perishable service  | 99.8 | -14.8  | 2.81M room-nights/month

Housing | make to order  | 104.6 | -9.42  | 13.2k homes/month

Machinery | make to order  | 103.4 | -22.3  | $4.76B/month (2017 dollars)

Oil and gas | pipeline producer  | 118.4 | -18.4  | 111.40M barrels of oil equivalent/month

Retail | distribution  | 117.7 | -23.1  | $11.82B/month (2017 dollars)

Semiconductors | pipeline producer  | 151.3 | -14  | 1.68M wafers/month

Steel | make to order  | 106.1 | -14.9  | 3.13M tonnes/month

Wholesale | distribution  | 110.8 | -23.2  | $12.85B/month (2017 dollars)

- D̄: average real sector demand over the fit window's first two years (L6), shown as a demand index (January 2010 = 100). Orders move with demand against this level.

- x̄: the sector's demand pressure at the start of the window: that average demand against the starting capacity (L3). Utilization rises when pressure is above it.

- K₀: sector capacity at the start of the window (L6), in the sector's own units. An entity's share of orders follows its share of capacity measured against it.

The other fixed values, set by hand or from outside sources such as geography, are the same for every world: see Inputs, Model Configuration.

Definitions behind the page's (i) marks:
- Normal demand (L6). The sector's demand, adjusted for prices, averaged over the first two years of the fit window and written as an index: 100 is the January 2010 level, so 108 means 8% more. The model treats this as normal: firms get orders equal to their normal output when demand is here, more when it is higher, fewer when lower.
- Starting demand-to-capacity ratio (L3): how much demand there was for each unit of capacity when the window began. Each month the model compares the current ratio with this one. If demand has grown faster than capacity, the ratio is higher and firms run their plants harder than normal; if capacity has grown faster, they run below normal. The number itself is the log of the ratio of a demand index to capacity, so its size depends on the units and means nothing alone; only changes from it matter.
- The sector's capacity at the start of the window: the most all its firms together could produce in a month. It is the yardstick for market share: a firm's share of orders follows its capacity measured against it (L6).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 104.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.93% to their orders. In Sep 2026 demand is 137.9, 32% above normal, so orders run about 30% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 85% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 29% higher (demand up 32%, capacity up 3%), so on that account firms run about 1.4 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 104.10B seat-miles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 106.90B (up 3%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 97.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 117.8, 21% above normal, so orders run about 22% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 71% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 29% higher (demand up 21%, capacity down 6%), so on that account firms run about 2.3 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 775.8k vehicles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 730.4k (down 6%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 106.6 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 118.3, 11% above normal, so orders run about 13% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 2% higher (demand up 11%, capacity up 9%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.33M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3.62M (up 9%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 198.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.97% to their orders. In Sep 2026 demand is 340.1, 71% above normal, so orders run about 68% above normal on that account.
- Not used here: a data center's utilization is set by how much is leased, not by how hard its sites run.
- The sector's capacity when the window began: 2621 MW. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3692 (up 41%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 106.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 113.5, 6% above normal, so orders run about 6% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 5% lower (demand up 6%, capacity up 11%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.97M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.20M (up 11%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 113.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 135.2, 19% above normal, so orders run about 22% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 88% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 3% higher (demand up 19%, capacity up 16%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.43M patient-days a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.81M (up 16%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 99.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.93% to their orders. In Sep 2026 demand is 131.8, 32% above normal, so orders run about 30% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 84% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 48% higher (demand up 32%, capacity down 11%), so on that account firms run about 2.4 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.81M room-nights a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.50M (down 11%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 104.6 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.9% to their orders. In Sep 2026 demand is 133.4, 28% above normal, so orders run about 24% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 80% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 37% higher (demand up 28%, capacity down 7%), so on that account firms run about 2.5 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 13.2k homes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 12.2k (down 7%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 103.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 126.2, 22% above normal, so orders run about 22% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 2% higher (demand up 22%, capacity up 19%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 4.76B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 5.67B (up 19%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 118.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.87% to their orders. In Sep 2026 demand is 153.0, 29% above normal, so orders run about 25% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 88% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 13% higher (demand up 29%, capacity up 14%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 111.40M barrels of oil equivalent a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 127.40M (up 14%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 117.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Sep 2026 demand is 148.7, 26% above normal, so orders run about 29% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 74% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 6% higher (demand up 26%, capacity up 19%), so on that account firms run about 0.5 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 11.82B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 14.09B (up 19%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 151.3 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Sep 2026 demand is 232.3, 54% above normal, so orders run about 54% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is about the same (demand up 54%, capacity up 55%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.68M wafers a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 2.59M (up 55%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 106.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.93% to their orders. In Sep 2026 demand is 124.3, 17% above normal, so orders run about 16% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 12% higher (demand up 17%, capacity up 5%), so on that account firms run about 0.7 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.13M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 3.28M (up 5%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 110.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.2% to their orders. In Sep 2026 demand is 131.0, 18% above normal, so orders run about 22% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 76% of capacity; a higher ratio makes them run harder. By Sep 2026 the ratio is 19% lower (demand up 18%, capacity up 46%), so on that account firms run about 2.2 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 12.85B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Sep 2026 the sector had 18.79B (up 46%).
