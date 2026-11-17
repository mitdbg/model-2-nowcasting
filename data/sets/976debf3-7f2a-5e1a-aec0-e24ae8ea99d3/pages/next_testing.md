<!-- Next Version › Improvement Testing, for forecast 976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; the page: https://mitdbg.github.io/model-2-nowcasting/next_testing.html?set=976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; inputs b8fd194284b90e90 -->

World shown World seed 20261112 (the bundle's only world)

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Improvement Testing

Every possible improvement, and what became of it. Each test was carried out by an AI agent that made the change and ran the checks its fix describes. These results have not been human-reviewed.

Not all possible improvements are tested. The system prioritized fixes likely to work. It evaluates no fix that is less likely than Coin Flip. The total testing plan must cost at most $100 and complete within 24 hours when run in parallel.

Test Order | Fix | Problem | Fix Summary | [AI generated] Status | Actual Time To Test | Actual Financial Cost | [AI generated] What Happened

1 | 9A 0b7fa061 | 9. Order flow in service sectors comes from the model, not from data | Show constant quantities as fixed by structure | Partly Worked | 6 minutes | $0.00 | Data centers' overdue orders and phantom orders, which never vary, now show as fixed by the model's structure instead of a spread ratio of 1.00, so the count of quantities that come mostly from the model falls from 49 to 47. Lead time stays as it was, correctly: its copies do differ (ratio 0.999), so it really does come mostly from the model.

2 | 7A d17f32b3 | 7. Ranges around sector totals are too tight against official statistics | Include the official statistic's uncertainty in the check | Worked | 9 minutes | $0.00 | Comparing sector totals with official statistics now allows for the statistic's own uncertainty, which raises the share of months inside the range from 82/100 to 92/100: Hotels employees go from 51 to 95, Hospitals employees from 62 to 100, Food utilization from 75 to 91 and Chemicals utilization from 74 to 84. Machinery production, 5.8% off, still clearly disagrees (1/100), though 9 of the 22 statistics now sit at 98-100, so the range may be a little wide.

3 | 5B 58885fc7 | 5. Capacity forecasts are overconfident, while capacity growth is poorly learned | Widen capacity's forecast range on its own | Partly Worked | 24 minutes | $0.00 | Capacity now gets its own widening factor, set on three earlier synthetic worlds, which raises its hit rate on Forecasts against later estimates from 74/100 to 86/100, short of the 90/100 target. Its true-value coverage rises from about 0.77 to 0.84 with no change in error; the factor needed varies a lot from world to world, and capacity's misses look like level shifts that wider ranges alone will not fix.

4 | 6A a7f450e8 | 6. The uncertainty ranges are miscalibrated in both directions | Set range widening per quantity and horizon | Partly Worked | 1.0 hours | $0.21 | Ranges are now widened by one factor per quantity and horizon, set against the truth on four earlier synthetic worlds, which works there but on this world puts only 9 of 18 quantities between 85/100 and 95/100 on Forecasts against later estimates (6 before). Capacity rises from 74 to 83, but the overall rate falls from 94 to 87, and overdue orders, lost demand and utilization drop to 70-80 because this world revises them far more than the earlier worlds did.

5 | 8A e9a9b81d | 8. Inventories are set mostly by assumption and fit observations poorly | Add observations of input inventory | Partly Worked | 5.4 hours | $4.90 | Adding monthly sector materials inventories for six manufacturing sectors, and company raw-material reports for oil and gas and homebuilders, pinned input inventory in Food, Chemicals, Steel and Autos (spread ratios 0.18-0.76, from about 1) and cut its true nowcast error from 0.032 to 0.021. But other quantities in those sectors got worse, Machinery, Semiconductors, Housing and Oil and gas stayed above 0.8, and Oil and gas's 2023 fit blew up, so the overall true error worsened (0.0454 to 0.0504 leaving that one fit out).

6 | 3B cf16699c | 3. New orders are not determined by data | Add official statistics that measure new orders | Did Not Work | 5.4 hours | $5.00 | Adding direct new-orders statistics for Machinery, Semiconductors, Housing and Data centers did not bring new orders' spread ratio below 0.8 in any of them (2.0, 1.2, 5.2 and 2.9 afterwards), even though the model fits the new readings well. Machinery and Housing got less accurate against the truth while the whole-world gain (0.0469 to 0.0439) came mostly from Semiconductors, which suggests the spread ratio itself may be the wrong measure for new orders.

7 | 6B 5255d254 | 6. The uncertainty ranges are miscalibrated in both directions | Leave model-driven quantities out of the hit rate | Partly Worked | 7 minutes | $0.00 | Forecasts against later estimates now leaves out the 1,812 of 6,408 values whose later estimate comes mostly from the model, which moves the overall hit rate from 94/100 to 93/100 and the typical gap from 2.5% to 2.2%. The stated cause holds only for input inventory: lead time, order book and announced capacity still score 100/100 on data-informed values alone, so those ranges are simply too wide.

8 | 10B 7f84666c | 10. Some parameters lean on priors, and the 91% figure may flatter | Measure learning against the group average, not the prior | Worked | 7 minutes | $0.00 | What the data pin down now gives a second, stricter figure for every sector, comparing each parameter's uncertainty with what its group's average alone would give rather than with the starting guess. By that measure 58% of entity parameters are informed by data, not 91%, and the input-cost pass-through and normal markup are learned for only about one entity in ten.

9 | 3A f1a71ed3 | 3. New orders are not determined by data | Let the filter adjust order levels in five sectors | Did Not Work | 2.1 hours | $1.50 | Letting the filter adjust each entity's order level in Housing, Retail, Data centers, Machinery and Airlines lowered the new-orders spread ratio almost everywhere, but only Airlines reached 1; Housing (5.3), Data centers (2.3), Retail (1.9) and Machinery (1.8) still grow less certain about new orders when data are added. The true nowcast error improved (whole world 0.0469 to 0.0445, the five sectors 0.0433 to 0.0338), though the filter change alone did as well as the change with refitting, and Retail's lost demand became unsettled (0.86 to 3.31).

10 | 5A f5187fbb | 5. Capacity forecasts are overconfident, while capacity growth is poorly learned | Add small monthly capacity revisions to every business | Partly Worked | 5.4 hours | $5.00 | Giving every kind of business a small monthly capacity revision raised Capacity on Forecasts against later estimates from 74/100 to 95/100 and shrank its gap (0.018 to 0.013), with large gains in Housing, Food and Hotels, and true nowcast error fell from 0.0469 to 0.0417. But it also widened other ranges (overall hit rate 94 to 98) and overshoots the 90 target for capacity, so a smaller revision is the next thing to try; Wholesale's capacity did not improve.

11 | 10A cea7851b | 10. Some parameters lean on priors, and the 91% figure may flatter | Share weakly learned parameters per sector where it helps | Did Not Work | 5.4 hours | $4.30 | Sharing capacity drift, emissions slope and list-price gap across each sector's entities, chosen sector by sector on withheld observations, was kept in 6 of 9 sectors, and the share of informative parameters would rise from about 91% to 93% only because weakly learned rows drop out. In those 6 sectors the true nowcast error got worse (4.8% to 5.2%, with Retail 7.0% to 9.1% and Machinery 5.5% to 8.0%); the whole-world improvement (4.7% to 4.1%) came from Semiconductors, which the change did not touch, so it is run-to-run noise.

12 | 1A b2c99cec | 1. Wholesale forecasts are far off and overconfident | Give Wholesale an official price index | Worked | 5.5 hours | $1.30 | Giving Wholesale an official monthly price index cut its gap on Forecasts against later estimates from 12.4% to 4.1% and raised its hit rate from 76/100 to 91/100; used instead as a sector price observation it gave 5.5% and 90/100. Wholesale's true nowcast error fell from 6.7% to about 5.8%, but used only as an official statistic the index conflicts with Wholesale's other data, so the next step is to use it in fitting as well.

13 | 9C 19fabd0d | 9. Order flow in service sectors comes from the model, not from data | Add observations of advance bookings | Partly Worked | 5.4 hours | $4.50 | Adding advance-booking observations for Hotels and Airlines and signed-not-started leases for Data centers met the check only for the Data centers order book (spread ratio 0.88 to 0.74); Hotels' order book (0.88) and lead time in both sectors (about 0.93 and 1.00) stayed set mostly by the model. Accuracy against the truth improved clearly where the data were added: Hotels' error halved (0.051 to 0.026) and Airlines' order-book error fell from 0.025 to 0.013, though part of the whole-world gain (0.0469 to 0.0409) is run-to-run noise.

14 | 4A 1cce2f8a | 4. The estimation is unsettled in Retail and for several individual quantities | Compute the spread ratio from total spread | Partly Worked | 17 minutes | $0.00 | Measuring the spread ratio from total spread over the history removes most of the very large values (quantities above 1.2 fall from 13-18 per date to 7-13) and identifies the runaway copies behind several of them, such as Hospitals' and Hotels' lost demand. Retail does not fall toward 1: its order book, new orders, shipments and load factor stay at 2.8-3.5 with no runaway copies, so the data really do spread Retail's copies about three times wider, which points at the filter's updates there rather than the measure.

15 | 2A 3d196d09 | 2. Machinery's entities do not add up to the official totals | Anchor Machinery's size to official production | Partly Worked | 1.9 hours | $1.20 | Anchoring the size of Machinery's untracked firms to the official production statistic brought Machinery production from 0/100 to 100/100 on Sector totals against official statistics (gap 5.2% to 0.8%), utilization from 58 to 99, and the page's overall rate from 82 to 89, while sharply cutting Machinery's true output, shipments and new-orders errors on both seeds. The cost is Machinery's finished stock, which nothing observes: it went badly wrong at one as-of date on seed20261112, leaving Machinery's overall true error about flat there (5.5% to 5.7%) while it fell on seed20261107 (4.4% to 2.9%).

16 | 2B e4469c31 | 2. Machinery's entities do not add up to the official totals | Let the filter adjust Machinery's order level | Worked | 46 minutes | $1.50 | Letting the filter adjust Machinery's order level and overdue orders month by month raised its Observations against the model from 85/100 to 96/100, its agreement with official production from 0/100 (5.8% off) to 73/100 (1.9% off) and with official utilization from 54 to 99, and cut its true nowcast error from 0.055 to 0.035. A second run on other random numbers improved the same way but much less on official production (13/100), so fit-to-fit noise is still large, and Machinery's ranges now look wider than they need to be.

17 | 9B d9036591 | 9. Order flow in service sectors comes from the model, not from data | Let the filter adjust order levels in service sectors | Partly Worked | 2.3 hours | $1.80 | Letting the filter adjust the order level of Hotels, Hospitals and Data centers cut their shipments and order-book spread ratios from about 0.9 to 0.4-0.75 on both seeds, but lead time did not move and the ranges with data did not actually narrow: the ratios fell mainly because the model without data now carries more uncertainty. The true nowcast error improved a little (whole world 0.0469 to 0.0458 and 0.0445 on two seeds; Hotels 0.0505 to 0.0342 and 0.0465).

– | 1B 48e8dfe2 | 1. Wholesale forecasts are far off and overconfident | Pool three Wholesale fits into one forecast | Not Tried | – | – | –

– | 1C 6b92555c | 1. Wholesale forecasts are far off and overconfident | Share one capacity growth rate across Wholesale | Not Tried | – | – | –

– | 2C 1e7243f3 | 2. Machinery's entities do not add up to the official totals | Give Machinery a longer parameter search | Not Tried | – | – | –

– | 2D 6a59eadb | 2. Machinery's entities do not add up to the official totals | Check Machinery's conversion to official units | Not Tried | – | – | –

– | 3C 0aacb568 | 3. New orders are not determined by data | Measure order response against each entity's own demand | Not Tried | – | – | –

– | 4B d5363176 | 4. The estimation is unsettled in Retail and for several individual quantities | Pull copies toward the official value, not random draws | Not Tried | – | – | –

– | 4C c01ae051 | 4. The estimation is unsettled in Retail and for several individual quantities | Update the filter without random perturbation | Not Tried | – | – | –

– | 4D 20bdaf08 | 4. The estimation is unsettled in Retail and for several individual quantities | Let sector-wide observations move only related quantities | Not Tried | – | – | –

– | 5C cc9d0b9c | 5. Capacity forecasts are overconfident, while capacity growth is poorly learned | Share one capacity growth rate in weakly learned sectors | Not Tried | – | – | –

– | 6C 800f763f | 6. The uncertainty ranges are miscalibrated in both directions | Let the copies carry parameter uncertainty instead of widening | Not Tried | – | – | –

– | 7B f4b253c8 | 7. Ranges around sector totals are too tight against official statistics | Stop using the same official statistic twice | Not Tried | – | – | –

– | 7C b4bece14 | 7. Ranges around sector totals are too tight against official statistics | Let labor per unit of output drift over time | Not Tried | – | – | –

– | 8B 3cab4e0e | 8. Inventories are set mostly by assumption and fit observations poorly | Keep adjusting stock after a copy runs out | Not Tried | – | – | –

– | 8C a83b777d | 8. Inventories are set mostly by assumption and fit observations poorly | Give each entity its own normal stock level | Not Tried | – | – | –

– | 8D 71e96b7e | 8. Inventories are set mostly by assumption and fit observations poorly | Add official finished-goods inventories for manufacturers | Not Tried | – | – | –

– | 10C a12021d5 | 10. Some parameters lean on priors, and the 91% figure may flatter | Add observations for the weakest parameters | Not Tried | – | – | –

– | 11A d7d9c570 | 11. Forecast error is mostly present already at the current month | Start each fit from the previous run's estimates | Not Tried | – | – | –

– | 11B 84778ece | 11. Forecast error is mostly present already at the current month | Combine three fits per run into one forecast | Not Tried | – | – | –

– | 11C 2bdd7d64 | 11. Forecast error is mostly present already at the current month | Run the filter with 200 copies instead of 100 | Not Tried | – | – | –

17 of 36 fixes tested | 41.8 hours | $31.21 | time added up over all tests, which ran in parallel

Definitions behind the page's (i) marks:
- The fix's place in the testing plan. Fixes that were not tried have none.
- From the start of the test to its result: making the change and running the checks.
- The cloud computing the test used.
