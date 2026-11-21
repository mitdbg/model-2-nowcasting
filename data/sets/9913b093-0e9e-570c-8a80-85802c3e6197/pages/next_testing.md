<!-- Next Version › Improvement Testing, for forecast 9913b093-0e9e-570c-8a80-85802c3e6197; the page: https://mitdbg.github.io/model-2-nowcasting/next_testing.html?set=9913b093-0e9e-570c-8a80-85802c3e6197; inputs cb2bd0ed76de4316 -->

# Improvement Testing

Every possible improvement, and what became of it. Each test was carried out by an AI agent that made the change and ran the checks its fix describes. These results have not been human-reviewed.

Test Order | Fix | Problem | Fix Summary | [AI generated] Status | Actual Time To Test | Actual Financial Cost | [AI generated] What Happened

– | 1A fd9b9112 | 1. Lead time is wrong by a lasting margin in many sectors | Add quoted lead-time readings in five more sectors | Not Tried | – | – | –

– | 1B 90b87b51 | 1. Lead time is wrong by a lasting margin in many sectors | Hold waiting-time settings where nothing measures lead time | Not Tried | – | – | –

– | 1C 3701611b | 1. Lead time is wrong by a lasting margin in many sectors | Let the filter correct orders in Autos and Oil and gas | Not Tried | – | – | –

– | 2A 0ef43318 | 2. Housing's order side fails in most worlds while its output is right | Add the official backlog of homes sold not built | Not Tried | – | – | –

– | 2B 54ab6c97 | 2. Housing's order side fails in most worlds while its output is right | Let the filter correct Housing's orders month by month | Not Tried | – | – | –

– | 2C 8a22b017 | 2. Housing's order side fails in most worlds while its output is right | Keep the best of three Housing fits | Not Tried | – | – | –

– | 3A 663859af | 3. The order book, overdue orders and phantom orders go wrong together with lead time | Let stocked-out copies recover their inventory | Not Tried | – | – | –

– | 3B 87d67e6e | 3. The order book, overdue orders and phantom orders go wrong together with lead time | Cap how much long waits inflate new orders | Not Tried | – | – | –

– | 4A 73ebd850 | 4. Unit cost has level errors, with bands that miss it | Add companies' reported cost of goods sold | Not Tried | – | – | –

– | 4B 68307524 | 4. Unit cost has level errors, with bands that miss it | Start each firm's unit cost from its own price | Not Tried | – | – | –

– | 4C 0d04a474 | 4. Unit cost has level errors, with bands that miss it | Let price readings correct a lasting cost level | Not Tried | – | – | –

– | 5A 661d2edf | 5. Price errors follow the unit cost errors | Add official price indexes for Machinery, Autos and Housing | Not Tried | – | – | –

– | 5B 954e7ed0 | 5. Price errors follow the unit cost errors | Use one normal markup per sector | Not Tried | – | – | –

– | 6A c91d0efa | 6. Machinery breaks down entirely in one world | Keep the best of three Machinery fits | Not Tried | – | – | –

– | 6B f732879b | 6. Machinery breaks down entirely in one world | Anchor untracked Machinery firms to official production | Not Tried | – | – | –

– | 7A d49c751c | 7. Oil and gas capacity pipeline and output disagree with official figures | Fit Oil and gas without official stock readings | Not Tried | – | – | –

– | 7B bfb7cd94 | 7. Oil and gas capacity pipeline and output disagree with official figures | Keep the best of three Oil and gas fits | Not Tried | – | – | –

– | 7C 4f725674 | 7. Oil and gas capacity pipeline and output disagree with official figures | Add a sector-wide count of active drilling rigs | Not Tried | – | – | –

– | 8A 9b914641 | 8. Sector inventories do not fit the data, and several order totals are unsettled | Use a filter update that cannot widen | Not Tried | – | – | –

– | 8B 72911fee | 8. Sector inventories do not fit the data, and several order totals are unsettled | Let sector-wide readings move only what they measure | Not Tried | – | – | –

– | 9A 3418c723 | 9. The model's own bands are too narrow and rely on heavy widening | Recalibrate range widening by quantity on older worlds | Not Tried | – | – | –

– | 9B 67420ac1 | 9. The model's own bands are too narrow and rely on heavy widening | Widen ranges less where data pin a quantity | Not Tried | – | – | –

0 of 22 fixes tested | 0 minutes | $0.00 | time added up over all tests, which ran in parallel

Definitions behind the page's (i) marks:
- The fix's place in the testing plan. Fixes that were not tried have none.
- From the start of the test to its result: making the change and running the checks.
- The cloud computing the test used.
