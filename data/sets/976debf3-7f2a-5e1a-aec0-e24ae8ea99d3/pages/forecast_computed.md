<!-- Model and Forecast › Values Computed From Input Data, for forecast 976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_computed.html?set=976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; inputs b659e8c2aad9cac5 -->

Forecast shown Forecast 976debf3, world seed 20261112 (the forecast bundle's only forecast)

# Values Computed From Input Data

A few values in the equations are neither learned by the fit nor set by hand: each is measured once from the world's own data at the start of the fit window and then held fixed. The rule is the same for every world of the bundle; the numbers are each world's own, so this page shows one forecast at a time, with the values its fit started from. The sentences behind each ⓘ also use the forecast's fitted responses and where demand and capacity stood at its last observed month.

sector  | template  | D̄ (index)  | x̄  | K₀

Airlines | perishable service  | 106.3 | -25.3  | 100.20B seat-miles/month

Autos | make to stock  | 102.4 | -13.4  | 649.0k vehicles/month

Chemicals | make to stock  | 107.5 | -14.9  | 3.26M tonnes/month

Data centers | contracted capacity  | 200.8 | -7.23  | 2669 MW

Food | make to stock  | 105.2 | -14.4  | 1.88M tonnes/month

Hospitals | perishable service  | 114.0 | -14.7  | 2.65M patient-days/month

Hotels | perishable service  | 100.9 | -14.8  | 2.60M room-nights/month

Housing | make to order  | 108.4 | -9.3  | 11.8k homes/month

Machinery | make to order  | 106.4 | -22.2  | $4.64B/month (2017 dollars)

Oil and gas | pipeline producer  | 122.7 | -18.4  | 116.50M barrels of oil equivalent/month

Retail | distribution  | 119.6 | -23  | $10.79B/month (2017 dollars)

Semiconductors | pipeline producer  | 160.0 | -13.9  | 1.69M wafers/month

Steel | make to order  | 110.1 | -14.9  | 3.10M tonnes/month

Wholesale | distribution  | 113.3 | -23.3  | $15.34B/month (2017 dollars)

- D̄: average real sector demand over the fit window's first two years (L6), shown as a demand index (January 2010 = 100). Orders move with demand against this level.

- x̄: the sector's demand pressure at the start of the window: that average demand against the starting capacity (L3). Utilization rises when pressure is above it.

- K₀: sector capacity at the start of the window (L6), in the sector's own units. An entity's share of orders follows its share of capacity measured against it.

The other fixed values, set by hand or from outside sources such as geography, are the same for every world: see Inputs, Model Configuration.

Definitions behind the page's (i) marks:
- Normal demand (L6). The sector's demand, adjusted for prices, averaged over the first two years of the fit window and written as an index: 100 is the January 2010 level, so 108 means 8% more. The model treats this as normal: firms get orders equal to their normal output when demand is here, more when it is higher, fewer when lower.
- Starting demand-to-capacity ratio (L3): how much demand there was for each unit of capacity when the window began. Each month the model compares the current ratio with this one. If demand has grown faster than capacity, the ratio is higher and firms run their plants harder than normal; if capacity has grown faster, they run below normal. The number itself is the log of the ratio of a demand index to capacity, so its size depends on the units and means nothing alone; only changes from it matter.
- The sector's capacity at the start of the window: the most all its firms together could produce in a month. It is the yardstick for market share: a firm's share of orders follows its capacity measured against it (L6).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 106.3 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 131.3, 23% above normal, so orders run about 25% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 89% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 7% higher (demand up 23%, capacity up 16%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 100.20B seat-miles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 115.90B (up 16%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 102.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 108.3, 6% above normal, so orders run about 6% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 4% lower (demand up 6%, capacity up 10%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 649.0k vehicles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 712.8k (up 10%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 107.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.64% to their orders. In Aug 2026 demand is 114.2, 6% above normal, so orders run about 4% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 5% higher (demand up 6%, capacity up 1%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.26M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3.30M (up 1%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 200.8 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 319.3, 59% above normal, so orders run about 60% above normal on that account.
- Not used here: a data center's utilization is set by how much is leased, not by how hard its sites run.
- The sector's capacity when the window began: 2669 MW. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3798 (up 42%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 105.2 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 110.9, 5% above normal, so orders run about 5% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 5% lower (demand up 5%, capacity up 12%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.88M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.10M (up 12%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 114.0 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.95% to their orders. In Aug 2026 demand is 136.2, 19% above normal, so orders run about 18% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 85% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 16% higher (demand up 19%, capacity up 3%), so on that account firms run about 1.1 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.65M patient-days a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.73M (up 3%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 100.9 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 122.7, 22% above normal, so orders run about 24% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 87% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 16% higher (demand up 22%, capacity up 5%), so on that account firms run about 1.2 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.60M room-nights a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.72M (up 5%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 108.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.94% to their orders. In Aug 2026 demand is 112.2, 4% above normal, so orders run about 3% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 80% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 6% lower (demand up 4%, capacity up 10%), so on that account firms run about 0.5 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 11.8k homes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 13.1k (up 10%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 106.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.94% to their orders. In Aug 2026 demand is 110.6, 4% above normal, so orders run about 4% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 77% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 7% lower (demand up 4%, capacity up 11%), so on that account firms run about 0.7 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 4.64B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 5.17B (up 11%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 122.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.91% to their orders. In Aug 2026 demand is 143.6, 17% above normal, so orders run about 15% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 88% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 4% lower (demand up 17%, capacity up 22%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 116.50M barrels of oil equivalent a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 142.30M (up 22%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 119.6 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 135.0, 13% above normal, so orders run about 15% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 73% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 15% lower (demand up 13%, capacity up 32%), so on that account firms run about 0.9 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 10.79B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 14.26B (up 32%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 160.0 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 205.3, 28% above normal, so orders run about 28% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 14% lower (demand up 28%, capacity up 50%), so on that account firms run about 1.2 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.69M wafers a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.53M (up 50%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 110.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 113.6, 3% above normal, so orders run about 4% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 81% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 3%, capacity up 3%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.10M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3.19M (up 3%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 113.3 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 121.6, 7% above normal, so orders run about 8% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 72% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 4% lower (demand up 7%, capacity up 11%), so on that account firms run about 0.5 points below their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 15.34B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 17.06B (up 11%).
