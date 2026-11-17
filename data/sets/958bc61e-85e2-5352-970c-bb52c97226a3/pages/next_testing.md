<!-- Next Version › Improvement Testing, for forecast 958bc61e-85e2-5352-970c-bb52c97226a3; the page: https://mitdbg.github.io/model-2-nowcasting/next_testing.html?set=958bc61e-85e2-5352-970c-bb52c97226a3; inputs d061b504e0664cbf -->

World shown World seed 20261117 (the bundle's only world)

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Improvement Testing

Every possible improvement, and what became of it. Each test was carried out by an AI agent that made the change and ran the checks its fix describes. These results have not been human-reviewed.

Not all possible improvements are tested. The system prioritized fixes likely to work. It evaluates no fix that is less likely than Coin Flip. The total testing plan must cost at most $100 and complete within 24 hours when run in parallel.

Test Order | Fix | Problem | Fix Summary | [AI generated] Status | Actual Time To Test | Actual Financial Cost | [AI generated] What Happened

1 | 9B 02911250 | 9. Good scores against later estimates may partly be the model agreeing with itself | Show data-informed and model-only scores side by side | Planned | – | – | –

2 | 2A ab4ddc9b | 2. Adding data makes some totals less certain, sometimes absurdly so | Mark negligible quantities instead of dividing | Planned | – | – | –

3 | 9A cffce476 | 9. Good scores against later estimates may partly be the model agreeing with itself | Check forecasts against later observations | Planned | – | – | –

4 | 10A 49f08ab1 | 10. Large parts of the model have no outside check | Add check-only official sales for Wholesale | Planned | – | – | –

5 | 3A 72c2e125 | 3. Uncertainty ranges are generally too wide | Score observations before the model uses them | Planned | – | – | –

6 | 6A 5a63302f | 6. Oil and gas is weak across the board | Fit Oil and gas without official stock readings | Planned | – | – | –

7 | 10C 8acb005f | 10. Large parts of the model have no outside check | Add check-only housing starts and sales | Planned | – | – | –

8 | 1A 5d7c6999 | 1. Wholesale forecasts are the least accurate, and the data barely shape them | Keep the best of three Wholesale fits | Planned | – | – | –

9 | 2B 60d515e9 | 2. Adding data makes some totals less certain, sometimes absurdly so | Let stocked-out copies recover their inventory | Planned | – | – | –

10 | 10B 7c8ba1ac | 10. Large parts of the model have no outside check | Add a check-only statistic for Data centers | Planned | – | – | –

11 | 8A 8da43854 | 8. Order-flow and lead-time totals are mostly assumed | Add materials inventories in four sectors | Planned | – | – | –

12 | 7A e95cebe3 | 7. Cost pass-through and normal markup come from group averages, not from each firm's own data | Add gross margins to company reports | Planned | – | – | –

13 | 9C 14ffede1 | 9. Good scores against later estimates may partly be the model agreeing with itself | Show a simple baseline beside each score | Planned | – | – | –

14 | 4B cb2df9ae | 4. Utilization is confidently wrong in Food and Autos | Check how utilization is compared with the official figure | Planned | – | – | –

15 | 5A 4c1f963c | 5. Hotels do not match official employment or prices | Record hotel bookings in the month observed | Planned | – | – | –

16 | 1B fbca7fb8 | 1. Wholesale forecasts are the least accurate, and the data barely shape them | Fit Wholesale without sector inventory readings | Planned | – | – | –

17 | 3C b85a7653 | 3. Uncertainty ranges are generally too wide | Widen ranges less where data pin a quantity | Planned | – | – | –

– | 1C aeb4deae | 1. Wholesale forecasts are the least accurate, and the data barely shape them | Add company gross margins for tracked wholesalers | Not Tried | – | – | –

– | 1D 23fd5724 | 1. Wholesale forecasts are the least accurate, and the data barely shape them | Give Wholesale a monthly volume reading | Not Tried | – | – | –

– | 2C 70d482de | 2. Adding data makes some totals less certain, sometimes absurdly so | Use a filter update that cannot widen | Not Tried | – | – | –

– | 2D 9baba606 | 2. Adding data makes some totals less certain, sometimes absurdly so | Let sector-wide readings move only what they measure | Not Tried | – | – | –

– | 3B cde1dcfb | 3. Uncertainty ranges are generally too wide | Recalibrate the range widening on the newest worlds | Not Tried | – | – | –

– | 4A d225de65 | 4. Utilization is confidently wrong in Food and Autos | Let official utilization size Food's and Autos' untracked firms | Not Tried | – | – | –

– | 4C 6cb73ec7 | 4. Utilization is confidently wrong in Food and Autos | Keep the best of three Food and Autos fits | Not Tried | – | – | –

– | 5B 1da0e12d | 5. Hotels do not match official employment or prices | Anchor untracked hotels to official employment | Not Tried | – | – | –

– | 5C ba84e249 | 5. Hotels do not match official employment or prices | Add advance-booking readings for Hotels | Not Tried | – | – | –

– | 5D b41cdb08 | 5. Hotels do not match official employment or prices | Let hotel staffing per room drift over time | Not Tried | – | – | –

– | 6B e404553b | 6. Oil and gas is weak across the board | Keep the best held-out Oil and gas fit | Not Tried | – | – | –

– | 6C 053326a5 | 6. Oil and gas is weak across the board | Give Oil and gas a short order pipeline | Not Tried | – | – | –

– | 7B b0381e9d | 7. Cost pass-through and normal markup come from group averages, not from each firm's own data | Add official input-cost indexes by sector | Not Tried | – | – | –

– | 7C ca6064e2 | 7. Cost pass-through and normal markup come from group averages, not from each firm's own data | Share pass-through and markup where data are thin | Not Tried | – | – | –

– | 8B 3add7cfa | 8. Order-flow and lead-time totals are mostly assumed | Add lead-time readings in more sectors | Not Tried | – | – | –

– | 8C f6221379 | 8. Order-flow and lead-time totals are mostly assumed | Add signed leases and bookings to the order data | Not Tried | – | – | –

0 of 33 fixes tested | 0 minutes | $0.00 | time added up over all tests, which ran in parallel

Definitions behind the page's (i) marks:
- The fix's place in the testing plan. Fixes that were not tried have none.
- From the start of the test to its result: making the change and running the checks.
- The cloud computing the test used.
