<!-- Next Version › Improvement Testing, for forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e; the page: https://mitdbg.github.io/model-2-nowcasting/next_testing.html?set=0c0a014b-d739-5e72-95a6-0b4ec4f3753e; inputs 14214f3932881e16 -->

World shown World seed 20261115 (the bundle's only world)

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Improvement Testing

Every possible improvement, and what became of it. Each test was carried out by an AI agent that made the change and ran the checks its fix describes. These results have not been human-reviewed.

Not all possible improvements are tested. The system prioritized fixes likely to work. It evaluates no fix that is less likely than Coin Flip. The total testing plan must cost at most $100 and complete within 24 hours when run in parallel.

Test Order | Fix | Problem | Fix Summary | [AI generated] Status | Actual Time To Test | Actual Financial Cost | [AI generated] What Happened

1 | 11A f335a0de | 11. The main forecast check partly grades the model against itself | Check forecasts against later observations | Worked | 22 minutes | $0.00 | Each run's forecast is now also checked against the real readings that arrived after its as-of date, with no later estimate involved: across the four runs 91 in 100 of 7,491 readings fall in the 90% range. By sector it tells a different story from the model grading itself: Oil and gas 85 vs 71, Machinery 94 vs 79, but Hospitals 84 vs 99 and Housing 87 vs 92. It also exposes misses the self-check hides: Oil and gas finished-inventory readings are in range only 58 times in 100.

2 | 9A 99622b65 | 9. Lost demand is unsettled | Mark negligible quantities instead of dividing | Worked | 25 minutes | $0.00 | A sector total that is zero in at least 90% of copies and months is now shown as negligible instead of as a ratio of two tiny spreads, and other ratios are measured from total spread over the history. Lost demand in Hospitals, Hotels and Airlines (216, 22.7 and 4.8 on the live page) is now negligible, and the unsettled cells on What the data pin down fall from 17 to 11. On a rerun the old ratios swung wildly (Airlines 4.8 to 3,080), so they were noise; forecasts are unchanged.

3 | 2A 0a0e733d | 2. Machinery totals disagree with official statistics even though the model is pulled toward them | Size Machinery's untracked firms to official production | Worked | 30 minutes | $1.00 | Anchoring the overall size of Machinery's untracked firms to official production, as 11 other sectors already do, took Machinery production on Sector totals against official statistics from 40/100 to 99/100 (gap 4.0% to 1.4%) and its gap on Forecasts against later estimates from 9.6% to 5.2%. Machinery's true error over the four dates roughly halved on both random-number sets. Overdue orders still swing from date to date, so on one set the 2026 forecast itself came out worse.

4 | 1A 5eca6b9a | 1. Capacity and capacity in use are overconfident | Add a smaller monthly capacity revision everywhere | Did Not Work | 2.5 hours | $8.00 | Giving every kind of business except order-pipeline producers a small monthly capacity revision, a quarter of the size tried before, did not fix capacity's overconfidence: Capacity on Forecasts against later estimates went from 83/100 to 77/100 on one run and 91/100 on another, and Capacity in use stayed at 67/100, since it covers only Data centers, which this change leaves alone. The ranges barely widened, so capacity's misses come from fits landing in different places between run dates, not from ranges that are too narrow. True error over the four dates fell slightly in both runs (0.108 to 0.103 and 0.096), probably also from fit-to-fit differences.

5 | 11B 48bbf47f | 11. The main forecast check partly grades the model against itself | Show data-informed and model-only scores side by side | Partly Worked | 7 minutes | $0.00 | Forecasts against later estimates now shows values informed by data (4,500 values: 94/100, 2.2% gap) beside values that come mostly from the model (1,944 values: 93/100, 3.2% gap); the combined figures are unchanged. Nearly all of input inventory (276 of 288 values) lands in the model-only column; the rest is one Machinery date just under the cut. The split shows Wholesale's data-informed range is clearly too narrow (75/100) and Oil and gas's model-only values are the weak part (63/100).

6 | 6B 461e3b44 | 6. New orders are barely determined, and often unsettled | Measure spread over the whole history | Partly Worked | 14 minutes | $0.00 | The spread ratio is now computed from the copies' total spread over the whole history, and the page lists the months where one copy ran away. On the same run, sectors with new orders above 1.2 fell from 6 to 5 and all quantities above 1.2 from 18 to 11 (Housing 6.07 to 1.25, Retail 1.64 to 1.08). But only three of the five still above 1.2 name runaway months: in Machinery, Steel, Airlines and Data centers new orders are in real conflict with the observations, not a few wild copies.

7 | 10A e96e4563 | 10. Retail does not reproduce its own data or official sales | Check how Retail sales are compared | Worked | 46 minutes | $0.50 | The comparison with official retail sales was right; the gap had two real causes in the model. Retail's untracked stores were about 20% too small, because their size was set only from official figures in physical units and Retail's are in dollars; and each month's pull toward official sales barely moved them, because a month's sales ship the previous month's orders. With both fixed, retail sales on Sector totals against official statistics went from 83/100 (3.3% gap) to 97/100 (1.3%), four Retail totals stopped being unsettled, and Retail's true error at 2026-09-30 fell from 0.148 to 0.101.

8 | 4C f93a8903 | 4. Wholesale fails every check available, and one check is missing | Check Wholesale against official wholesale sales | Worked | 45 minutes | $0.25 | The official monthly wholesale sales figure now appears on Sector totals against official statistics as a check-only row that the model never uses; every other number on the site is unchanged. It gives Wholesale its first outside test, and Wholesale fails it: at 2026-09-30 the official value is inside the model's range in 77 months of 100 with a 2.7% gap, and it is above the model at every date by 2-6%. The model's Wholesale price level is about 2% low even with the price index.

9 | 4D cddd63e0 | 4. Wholesale fails every check available, and one check is missing | Find what clashes with the new price index | Did Not Work | 1.4 hours | $1.20 | The new price index is not what makes Wholesale's sector inventory readings fail: without it they still fit only 6/100, and the model's own estimate of how far the index can stray (about 0.03) is what it was already given; the real cause is that Wholesale's stock runs far above the readings. A side finding is large, though: leaving the index out of fitting and the filter made Wholesale much better on everything else (Forecasts against later estimates 81/100 and 4.5% to 99/100 and 3.0%, true error 0.08 to 0.03 averaged over the dates), because the tight index pushes Wholesale's capacity and utilization wrong. That reverses part of fix 1A and deserves its own test.

10 | 2B 47e8c095 | 2. Machinery totals disagree with official statistics even though the model is pulled toward them | Calm the filter's Machinery order-book corrections | Did Not Work | 1.6 hours | $2.10 | Four milder versions of the filter's Machinery order-book corrections (order level only, half-size corrections, both, and a refit with level only) left Machinery's new-orders spread ratio at 7.4-10.0 and price at 1.6-2.0 on two random-number sets, against a target below 1.2; even switching the corrections off left new orders near 9.6, so they are not what drives those ratios. Adjusting only the order level, not overdue orders, did roughly halve Machinery's true error over the four dates, but it leaves overdue orders set mostly by the model.

11 | 3C 9f6bb366 | 3. Oil and gas forecasts a year ahead are far off and too confident | Loosen Oil and gas's official stock readings | Worked | 1.1 hours | $1.40 | Fitting Oil and gas without the official petroleum stock readings, and using them only in the filter, took Oil and gas on Forecasts against later estimates from 76/100 with a 13.6% gap to 89/100 with 5.7%, settled finished inventory (1.57 to 1.01), and improved official-statistic agreement (utilization 93 to 98, production 97 to 100). Its true error over the four dates fell from 0.28 to 0.11, mostly by removing the 2024 blow-up, while loosening the readings instead did much less. This was one run on one set of random numbers, so part of the gain may be luck.

12 | 5C 8b777298 | 5. Inventories do not match their data | Let stocked-out copies recover their inventory | Did Not Work | 1.2 hours | $3.00 | Letting the filter keep adjusting a copy's finished stock after it runs out with orders late did not make inventories fit their data: Finished inventory on Observations against the model went from 71/100 to 66/100 and Sector inventories stayed at 4/100, so problem 5's cause lies elsewhere. It had a large side effect the check did not ask about: overdue orders in Oil and gas and Machinery stopped running away, and the true error over the four dates fell from 0.108 to 0.074 with the same fits. That makes it a candidate fix for the overdue-orders problem, pending a repeat and a look at one failing filter test.

13 | 4A 76a5e2f6 | 4. Wholesale fails every check available, and one check is missing | Anchor Wholesale's untracked stock to sector inventories | Did Not Work | 1.2 hours | $1.60 | Fitting the starting stock of Wholesale's untracked firms against the whole-sector inventory readings barely moved that stock, and the checks did not improve: Sector inventories went from 4/100 to 12/100 on one set of random numbers and stayed at 4/100 on another, and Wholesale on Observations against the model stayed near 66/100. The model's Wholesale stock stays about 65% above the readings even after the filter has used them, for tracked and untracked firms alike, which points at how the filter corrects stock rather than at the starting level.

14 | 1C 74c8902b | 1. Capacity and capacity in use are overconfident | Fit capacity against official utilization too | Partly Worked | 1.5 hours | $3.00 | Letting official utilization set the capacity of the untracked firms during fitting fixed Steel: its utilization row on Sector totals against official statistics went from 55/100 to 99/100 (gap 1.55% to 0.37%), production rose to 100/100, and Steel's utilization error against the truth roughly halved. Machinery got worse on both random-number sets (utilization 59 to 34/100), because its misses come from tracked firms whose capacity is 33-48% too high, not from the untracked firms this adjusts. So it is worth keeping for Steel only.

15 | 2C 9879904d | 2. Machinery totals disagree with official statistics even though the model is pulled toward them | Keep the best of three Machinery fits | Partly Worked | 1.4 hours | $2.00 | Fitting Machinery three times at each date and keeping the fit that best predicts held-back observations took Machinery on Forecasts against later estimates from 87/100 with a 9.6% gap to 97/100 with 3.9%, with far less variation between dates, and cut Machinery's true error over the four dates from 0.50 to 0.14 (the whole world's from 0.108 to 0.082). But official production did not improve: it went from 40/100 to 15/100 at 2026-09-30, though with a smaller average gap, so the production disagreement is not mainly bad luck in the fits. Fits also differed even on the same random numbers, which is itself a large source of noise.

16 | 9C d1535f60 | 9. Lost demand is unsettled | Record advance bookings in the month observed | Partly Worked | 1.4 hours | $1.50 | In Hotels, Hospitals and Airlines the filter's correction to advance bookings now lands in the month observed; with those sectors refitted, Hotels' lost demand settled at every date (22.7 to 0.05 on the site's date) and Hotels' true error fell from 0.04-0.07 to about 0.02, while a same-seed control without the change reproduced the old numbers. Lost demand stayed unsettled in Hospitals and Airlines, where it is essentially zero, so their large ratios look like the tiny-spread artifact that fix 9A addresses. Observations against the model held or improved in all three sectors.

17 | 3A 989a152c | 3. Oil and gas forecasts a year ahead are far off and too confident | Keep the best of three Oil and gas fits | Partly Worked | 1.9 hours | $4.60 | Choosing among three Oil and gas fits per date by how well each predicts held-back observations, then refitting the winner on all data, barely helped (76/100 and 13.6% to 73/100 and 9.7%), because refitting on all data lands somewhere else. Keeping the winning held-back fits themselves did meet the check: Oil and gas went to 96/100 with a 3.3% gap and its true error over the four dates fell from 0.28 to 0.03 (whole world 0.108 to 0.087), though those fits never see a fifth of the observations. A warm-started finish on all the data, or a different way of choosing, is the next step.

18 | 4B 06b0763c | 4. Wholesale fails every check available, and one check is missing | Keep the best of three Wholesale fits | Worked | 2.0 hours | $1.50 | Wholesale is now fitted three times per date with different random numbers, the fit that best predicts held-back observations is kept and then refined on all the data: Wholesale on Forecasts against later estimates rose from 81/100 to 95/100 (gap 4.5% to 4.9%), and its capacity stopped jumping between runs (average change at the same month 27% to 7%, utilization 24% to 4.5%). Wholesale's true error over the four dates halved (0.081 to 0.043), though at 2026-09-30 alone it rose from 0.025 to 0.048. The choice reliably avoided bad fits but did not always pick the best one.

– | 1B 3b7f65d4 | 1. Capacity and capacity in use are overconfident | Observe storage space for Wholesale and Retail | Not Tried | – | – | –

– | 3B ed95fa04 | 3. Oil and gas forecasts a year ahead are far off and too confident | Start Oil and gas fits from last year's answer | Not Tried | – | – | –

– | 5A 935769bd | 5. Inventories do not match their data | Add materials inventories in four sectors only | Not Tried | – | – | –

– | 5B 5a3d71a6 | 5. Inventories do not match their data | Give each firm its own normal stock level | Not Tried | – | – | –

– | 6A 7470ae10 | 6. New orders are barely determined, and often unsettled | Use a filter update that cannot widen | Not Tried | – | – | –

– | 7A f6120d4f | 7. Ranges are too wide in most places and too narrow in a few | Recalibrate the widening on newer worlds | Not Tried | – | – | –

– | 7B 2cd21632 | 7. Ranges are too wide in most places and too narrow in a few | Widen each sector by how much its fits wander | Not Tried | – | – | –

– | 7C 7a3fed21 | 7. Ranges are too wide in most places and too narrow in a few | Pool three fits into each forecast | Not Tried | – | – | –

– | 8A 3c5e2d69 | 8. Many parameters are learned only from their group | Add gross margins to company reports | Not Tried | – | – | –

– | 8B 327f7ce5 | 8. Many parameters are learned only from their group | Share pass-through and markup where data are thin | Not Tried | – | – | –

– | 9B 447ca80c | 9. Lost demand is unsettled | Stop copies running away in service sectors | Not Tried | – | – | –

– | 10B 2b3a4f6e | 10. Retail does not reproduce its own data or official sales | Use a filter update that cannot widen, in Retail | Not Tried | – | – | –

– | 10C a1b258ac | 10. Retail does not reproduce its own data or official sales | Limit what Retail's sector totals can move | Not Tried | – | – | –

18 of 31 fixes tested | 20.2 hours | $31.65 | time added up over all tests, which ran in parallel

Definitions behind the page's (i) marks:
- The fix's place in the testing plan. Fixes that were not tried have none.
- From the start of the test to its result: making the change and running the checks.
- The cloud computing the test used.
