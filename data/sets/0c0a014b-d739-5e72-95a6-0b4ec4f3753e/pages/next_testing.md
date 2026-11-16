<!-- Next Version › Improvement Testing, for forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e; the page: https://mitdbg.github.io/model-2-nowcasting/next_testing.html?set=0c0a014b-d739-5e72-95a6-0b4ec4f3753e -->

# Improvement Testing

Every possible improvement, and what became of it. Each test was carried out by an AI agent that made the change and ran the checks its fix describes. These results have not been human-reviewed.

Test Order | Fix | Problem | Fix Summary | [AI generated] Status | Actual Time To Test | Actual Financial Cost | [AI generated] What Happened

– | 1A 5eca6b9a | 1. Capacity and capacity in use are overconfident | Add a smaller monthly capacity revision everywhere | Not Tried | – | – | –

– | 1B 3b7f65d4 | 1. Capacity and capacity in use are overconfident | Observe storage space for Wholesale and Retail | Not Tried | – | – | –

– | 1C 74c8902b | 1. Capacity and capacity in use are overconfident | Fit capacity against official utilization too | Not Tried | – | – | –

– | 2A 0a0e733d | 2. Machinery totals disagree with official statistics even though the model is pulled toward them | Size Machinery's untracked firms to official production | Not Tried | – | – | –

– | 2B 47e8c095 | 2. Machinery totals disagree with official statistics even though the model is pulled toward them | Calm the filter's Machinery order-book corrections | Not Tried | – | – | –

– | 2C 9879904d | 2. Machinery totals disagree with official statistics even though the model is pulled toward them | Keep the best of three Machinery fits | Not Tried | – | – | –

– | 3A 989a152c | 3. Oil and gas forecasts a year ahead are far off and too confident | Keep the best of three Oil and gas fits | Not Tried | – | – | –

– | 3B ed95fa04 | 3. Oil and gas forecasts a year ahead are far off and too confident | Start Oil and gas fits from last year's answer | Not Tried | – | – | –

– | 3C 9f6bb366 | 3. Oil and gas forecasts a year ahead are far off and too confident | Loosen Oil and gas's official stock readings | Not Tried | – | – | –

– | 4A 76a5e2f6 | 4. Wholesale fails every check available, and one check is missing | Anchor Wholesale's untracked stock to sector inventories | Not Tried | – | – | –

– | 4B 06b0763c | 4. Wholesale fails every check available, and one check is missing | Keep the best of three Wholesale fits | Not Tried | – | – | –

– | 4C f93a8903 | 4. Wholesale fails every check available, and one check is missing | Check Wholesale against official wholesale sales | Not Tried | – | – | –

– | 4D cddd63e0 | 4. Wholesale fails every check available, and one check is missing | Find what clashes with the new price index | Not Tried | – | – | –

– | 5A 935769bd | 5. Inventories do not match their data | Add materials inventories in four sectors only | Not Tried | – | – | –

– | 5B 5a3d71a6 | 5. Inventories do not match their data | Give each firm its own normal stock level | Not Tried | – | – | –

– | 5C 8b777298 | 5. Inventories do not match their data | Let stocked-out copies recover their inventory | Not Tried | – | – | –

– | 6A 7470ae10 | 6. New orders are barely determined, and often unsettled | Use a filter update that cannot widen | Not Tried | – | – | –

– | 6B 461e3b44 | 6. New orders are barely determined, and often unsettled | Measure spread over the whole history | Not Tried | – | – | –

– | 7A f6120d4f | 7. Ranges are too wide in most places and too narrow in a few | Recalibrate the widening on newer worlds | Not Tried | – | – | –

– | 7B 2cd21632 | 7. Ranges are too wide in most places and too narrow in a few | Widen each sector by how much its fits wander | Not Tried | – | – | –

– | 7C 7a3fed21 | 7. Ranges are too wide in most places and too narrow in a few | Pool three fits into each forecast | Not Tried | – | – | –

– | 8A 3c5e2d69 | 8. Many parameters are learned only from their group | Add gross margins to company reports | Not Tried | – | – | –

– | 8B 327f7ce5 | 8. Many parameters are learned only from their group | Share pass-through and markup where data are thin | Not Tried | – | – | –

– | 9A 99622b65 | 9. Lost demand is unsettled | Mark negligible quantities instead of dividing | Not Tried | – | – | –

– | 9B 447ca80c | 9. Lost demand is unsettled | Stop copies running away in service sectors | Not Tried | – | – | –

– | 9C d1535f60 | 9. Lost demand is unsettled | Record advance bookings in the month observed | Not Tried | – | – | –

– | 10A e96e4563 | 10. Retail does not reproduce its own data or official sales | Check how Retail sales are compared | Not Tried | – | – | –

– | 10B 2b3a4f6e | 10. Retail does not reproduce its own data or official sales | Use a filter update that cannot widen, in Retail | Not Tried | – | – | –

– | 10C a1b258ac | 10. Retail does not reproduce its own data or official sales | Limit what Retail's sector totals can move | Not Tried | – | – | –

– | 11A f335a0de | 11. The main forecast check partly grades the model against itself | Check forecasts against later observations | Not Tried | – | – | –

– | 11B 48bbf47f | 11. The main forecast check partly grades the model against itself | Show data-informed and model-only scores side by side | Not Tried | – | – | –

0 of 31 fixes tested | 0 minutes | $0.00 | time added up over all tests, which ran in parallel

Definitions behind the page's (i) marks:
- The fix's place in the testing plan. Fixes that were not tried have none.
- From the start of the test to its result: making the change and running the checks.
- The cloud computing the test used.
