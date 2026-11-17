<!-- Next Version › Improvement Testing, for forecast b653c9a8-4454-5e3d-8a00-0a530afd83a0; the page: https://mitdbg.github.io/model-2-nowcasting/next_testing.html?set=b653c9a8-4454-5e3d-8a00-0a530afd83a0; inputs 88b06f76e650a998 -->

World shown World seed 20261107 (the bundle's only world)

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Improvement Testing

Every possible improvement, and what became of it. Each test was carried out by an AI agent that made the change and ran the checks its fix describes. These results have not been human-reviewed.

Not all possible improvements are tested. The system prioritized fixes likely to work. It evaluates no fix that is less likely than Coin Flip. The total testing plan must cost at most $100 and complete within 24 hours when run in parallel.

Test Order | Fix | Problem | Fix Summary | [AI generated] Status | Actual Time To Test | Actual Financial Cost | [AI generated] What Happened

1 | 5A 0e3a8863 | 5. The ranges on sector totals are too narrow | Count the filter's own allowance in the totals check | Planned | – | – | –

2 | 8A ac37e43f | 8. The headline forecast check partly measures the model against itself | Leave model-driven quantities out of the headline check | Planned | – | – | –

3 | 1B 2f9323bc | 1. Adding data makes some estimates less certain | Compute the spread ratio from average spreads | Planned | – | – | –

4 | 9B 47282e8f | 9. Some parameters rest mainly on their priors | Stop estimating biases the data cannot separate | Planned | – | – | –

5 | 1A 8d9a23f7 | 1. Adding data makes some estimates less certain | Let observations move only what they measure | Planned | – | – | –

6 | 8B f30f0e76 | 8. The headline forecast check partly measures the model against itself | Check forecasts against observations not yet used | Planned | – | – | –

7 | 8C 79af72dc | 8. The headline forecast check partly measures the model against itself | Show a simple baseline beside each forecast score | Planned | – | – | –

8 | 7A a71add58 | 7. The assumed noise in most observations is set too high | Score observations before the model uses them | Planned | – | – | –

9 | 7C 743f0392 | 7. The assumed noise in most observations is set too high | Widen bands less for well-pinned quantities | Planned | – | – | –

10 | 2A 26cadeb7 | 2. Machinery output does not match official industrial production | Tie Machinery's untracked part to official production | Planned | – | – | –

11 | 5C 439887a3 | 5. The ranges on sector totals are too narrow | Set band widening per sector | Planned | – | – | –

12 | 6A 314e4b2f | 6. Capacity forecasts are overconfident | Set forecast band widening per quantity | Planned | – | – | –

13 | 9A d7bb4542 | 9. Some parameters rest mainly on their priors | Estimate emissions slope and markup once per sector | Planned | – | – | –

14 | 10A ac0cf9bb | 10. Retail demand is unsettled and has the largest forecast errors | Let the filter adjust Retail's lasting demand level | Planned | – | – | –

15 | 1C 53e86cb8 | 1. Adding data makes some estimates less certain | Run the filter with 400 copies instead of 100 | Planned | – | – | –

16 | 3A 5aae5efa | 3. Oil and gas totals are confident, pinned down by data, and wrong | Tie oil and gas's untracked part to official production | Planned | – | – | –

17 | 7B 884d5c4d | 7. The assumed noise in most observations is set too high | Narrow the spread of each entity's parameters | Planned | – | – | –

18 | 10B 7dfa81d0 | 10. Retail demand is unsettled and has the largest forecast errors | Give Retail a stronger parameter search | Planned | – | – | –

19 | 4A 9350f22b | 4. Inventory and shipment data are fitted poorly even after being seen | Stop unrelated observations from moving finished stock | Planned | – | – | –

20 | 1D c506581b | 1. Adding data makes some estimates less certain | Drop the random jitter for sector-wide statistics | Planned | – | – | –

21 | 4B 791e4f2a | 4. Inventory and shipment data are fitted poorly even after being seen | Let industry inventories adjust the normal stock level | Planned | – | – | –

22 | 2B 3ed05235 | 2. Machinery output does not match official industrial production | Let the filter adjust Machinery's lasting level | Planned | – | – | –

23 | 3B 4b7ba5da | 3. Oil and gas totals are confident, pinned down by data, and wrong | Let the filter adjust oil and gas's lasting level | Planned | – | – | –

24 | 5B c235471a | 5. The ranges on sector totals are too narrow | Add a shared sector-wide part to random shocks | Planned | – | – | –

25 | 9C f6dd1818 | 9. Some parameters rest mainly on their priors | Add data that varies the way parameters need | Planned | – | – | –

– | 2C 37aea5fd | 2. Machinery output does not match official industrial production | Pool Machinery's untracked part less with tracked firms | Not Tried | – | – | –

– | 3C 1eea96de | 3. Oil and gas totals are confident, pinned down by data, and wrong | Refit oil and gas without industry-wide stock data | Not Tried | – | – | –

– | 3D b4c76597 | 3. Oil and gas totals are confident, pinned down by data, and wrong | Make official statistics bind tighter for oil and gas | Not Tried | – | – | –

– | 4C 78c72c2c | 4. Inventory and shipment data are fitted poorly even after being seen | Shield finished stock from non-inventory observations | Not Tried | – | – | –

– | 6B d69b5e72 | 6. Capacity forecasts are overconfident | Let capacity growth rates wander over time | Not Tried | – | – | –

– | 7D 25496cc7 | 7. The assumed noise in most observations is set too high | Lower each observation's assumed noise | Not Tried | – | – | –

– | 10C 84f9c647 | 10. Retail demand is unsettled and has the largest forecast errors | Update Retail in smaller steps each month | Not Tried | – | – | –

0 of 32 fixes tested | 0 minutes | $0.00 | time added up over all tests, which ran in parallel

Definitions behind the page's (i) marks:
- The fix's place in the testing plan. Fixes that were not tried have none.
- From the start of the test to its result: making the change and running the checks.
- The cloud computing the test used.
