<!-- Model and Forecast › Values Computed From Input Data, for forecast 9913b093-0e9e-570c-8a80-85802c3e6197; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_computed.html?set=9913b093-0e9e-570c-8a80-85802c3e6197; inputs b0a5f60409bbf4a4 -->

Forecast shown  one forecast for each of the bundle's 5 worlds

# Values Computed From Input Data

A few values in the equations are neither learned by the fit nor set by hand: each is measured once from the world's own data at the start of the fit window and then held fixed. The rule is the same for every world of the bundle; the numbers are each world's own, so this page shows one forecast at a time, with the values its fit started from. The sentences behind each ⓘ also use the forecast's fitted responses and where demand and capacity stood at its last observed month.

sector  | template  | D̄ (index)  | x̄  | K₀

Airlines | perishable service  | 107.1 | -25.4  | 115.00B seat-miles/month

Autos | make to stock  | 99.7 | -13.6  | 786.8k vehicles/month

Chemicals | make to stock  | 109.4 | -14.9  | 3.37M tonnes/month

Data centers | contracted capacity  | 200.2 | -7.27  | 2754 MW

Food | make to stock  | 107.2 | -14.5  | 2.07M tonnes/month

Hospitals | perishable service  | 113.5 | -14.5  | 2.17M patient-days/month

Hotels | perishable service  | 103.1 | -14.6  | 2.19M room-nights/month

Housing | make to order  | 111.5 | -9.24  | 11.5k homes/month

Machinery | make to order  | 108.1 | -22.3  | $5.05B/month (2017 dollars)

Oil and gas | pipeline producer  | 120.4 | -18.4  | 105.20M barrels of oil equivalent/month

Retail | distribution  | 121.4 | -23.2  | $13.63B/month (2017 dollars)

Semiconductors | pipeline producer  | 159.1 | -13.9  | 1.65M wafers/month

Steel | make to order  | 108.4 | -14.9  | 3.25M tonnes/month

Wholesale | distribution  | 114.3 | -23.1  | $12.38B/month (2017 dollars)

- D̄: average real sector demand over the fit window's first two years (L6), shown as a demand index (January 2010 = 100). Orders move with demand against this level.

- x̄: the sector's demand pressure at the start of the window: that average demand against the starting capacity (L3). Utilization rises when pressure is above it.

- K₀: sector capacity at the start of the window (L6), in the sector's own units. An entity's share of orders follows its share of capacity measured against it.

The other fixed values, set by hand or from outside sources such as geography, are the same for every world: see Inputs, Model Configuration.

Definitions behind the page's (i) marks:
- Normal demand (L6). The sector's demand, adjusted for prices, averaged over the first two years of the fit window and written as an index: 100 is the January 2010 level, so 108 means 8% more. The model treats this as normal: firms get orders equal to their normal output when demand is here, more when it is higher, fewer when lower.
- Starting demand-to-capacity ratio (L3): how much demand there was for each unit of capacity when the window began. Each month the model compares the current ratio with this one. If demand has grown faster than capacity, the ratio is higher and firms run their plants harder than normal; if capacity has grown faster, they run below normal. The number itself is the log of the ratio of a demand index to capacity, so its size depends on the units and means nothing alone; only changes from it matter.
- The sector's capacity at the start of the window: the most all its firms together could produce in a month. It is the yardstick for market share: a firm's share of orders follows its capacity measured against it (L6).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 107.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 138.0, 29% above normal, so orders run about 29% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 81% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 9% higher (demand up 29%, capacity up 19%), so on that account firms run about 0.7 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 115.00B seat-miles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 136.60B (up 19%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 99.7 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 118.5, 19% above normal, so orders run about 19% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 76% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 29% higher (demand up 19%, capacity down 8%), so on that account firms run about 2.9 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 786.8k vehicles a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 722.2k (down 8%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 109.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.86% to their orders. In Aug 2026 demand is 115.2, 5% above normal, so orders run about 5% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 77% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 3% higher (demand up 5%, capacity up 2%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.37M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3.44M (up 2%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 200.2 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.2% to their orders. In Aug 2026 demand is 323.2, 61% above normal, so orders run about 74% above normal on that account.
- Not used here: a data center's utilization is set by how much is leased, not by how hard its sites run.
- The sector's capacity when the window began: 2754 MW. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3983 (up 45%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 107.2 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.98% to their orders. In Aug 2026 demand is 114.5, 7% above normal, so orders run about 7% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 7%, capacity up 5%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.07M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.18M (up 5%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 113.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 134.9, 19% above normal, so orders run about 20% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 86% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 4% higher (demand up 19%, capacity up 15%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.17M patient-days a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.49M (up 15%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 103.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 129.4, 25% above normal, so orders run about 28% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 89% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 14% higher (demand up 25%, capacity up 10%), so on that account firms run about 0.6 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 2.19M room-nights a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.42M (up 10%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 111.5 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 128.1, 15% above normal, so orders run about 16% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 81% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 15%, capacity up 14%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 11.5k homes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 13.1k (up 14%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 108.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 122.0, 13% above normal, so orders run about 13% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 78% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 13%, capacity up 11%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 5.05B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 5.60B (up 11%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 120.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 152.4, 27% above normal, so orders run about 28% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 86% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 27%, capacity up 28%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 105.20M barrels of oil equivalent a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 134.90M (up 28%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 121.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.3% to their orders. In Aug 2026 demand is 146.1, 20% above normal, so orders run about 26% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 72% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 9% higher (demand up 20%, capacity up 10%), so on that account firms run about 1.2 points above their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 13.63B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 15.06B (up 10%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 159.1 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1% to their orders. In Aug 2026 demand is 231.6, 46% above normal, so orders run about 46% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 82% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 46%, capacity up 48%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 1.65M wafers a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 2.45M (up 48%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 108.4 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 0.97% to their orders. In Aug 2026 demand is 120.6, 11% above normal, so orders run about 11% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 78% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is about the same (demand up 11%, capacity up 13%), so firms run near their normal rate on that account. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 3.25M tonnes a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 3.66M (up 13%).
- From Oct 2018 to Sep 2020 this sector's demand, adjusted for prices, averaged 114.3 (January 2010 = 100). That is its normal demand: at this level firms get orders equal to their normal output, and each 1% more demand adds about 1.1% to their orders. In Aug 2026 demand is 133.7, 17% above normal, so orders run about 19% above normal on that account.
- The ratio of demand to capacity when the window began. At this ratio the sector's firms run at their normal rate, about 79% of capacity; a higher ratio makes them run harder. By Aug 2026 the ratio is 4% higher (demand up 17%, capacity up 12%), so on that account firms run about the same their normal rate. (The number itself only marks the starting point: it depends on the units and means nothing alone.)
- The sector's capacity when the window began: 12.38B in 2017 dollars a month. It is the yardstick for market share: a firm whose capacity grows 10% faster than the sector's since then gets about 10% more orders. By Aug 2026 the sector had 13.91B (up 12%).
