<!-- Next Version › Current Problems, for forecast 958bc61e-85e2-5352-970c-bb52c97226a3; the page: https://mitdbg.github.io/model-2-nowcasting/next_problems.html?set=958bc61e-85e2-5352-970c-bb52c97226a3; inputs 2156b111ff6e57a4 -->

World shown World seed 20261117 (the bundle's only world)

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Current Problems

This analysis was written by an AI evaluator that saw only the Evaluation pages that need no ground truth. It had no access to the true values, the model's code, or how the model was developed. This analysis has not been human-reviewed.

Overall assessment. On the headline numbers the model looks well behaved: forecast gaps average about 2.1%, and 19 of 22 official statistics agree. Underneath, its uncertainty is miscalibrated in both directions: too wide almost everywhere, yet too tight where it disagrees with official numbers. Many sector totals for orders, inventories and lead times come from the equations rather than the data, or are unsettled by the data. A few sectors (Wholesale, Oil and gas, Food, Hotels) carry most of the visible weakness.

## Weakest sectors (weakest first)

# | Sector | Forecasts in range  | Forecast gap  | Observations in range  | Official statistics agreeing  | Worst official statistic  | Parameters learned  | Median sd ratio  | Mostly from the model  | Unsettled  | Note

1 | Wholesale | 100 (wider than needed) | 5.9% | 98 (generous) | none published | – | 92% | 0.47 | Load factor; Shipments; Output; New orders; Order book; Lead time; Utilization | none | Largest forecast gap; most totals come from the model; nothing official to check against

2 | Oil and gas | 91 | 5.6% | 95 (generous) | 2 of 2 | Utilization: 93, 0.5% off (agrees) | 91% | 0.38 | New orders; Input inventory | Overdue orders 18.60; Phantom orders 11.70; Order book 2.40; Finished inventory 1.90 | Second-largest gap; order totals unsettled

3 | Food | 94 (wider than needed) | 2.8% | 98 (generous) | 1 of 2 | Utilization: 78, 1.0% off (disagrees) | 84% | 0.52 | Finished inventory; Input inventory | none | Utilization at odds with the official figure; parameters lean on group averages

4 | Hotels | 94 (wider than needed) | 1.3% | 93 (generous) | 1 of 2 | Employees: 83, 2.1% off (disagrees) | 99% | 0.35 | Lost demand | Load factor 1.57; Lead time 1.24 | Employment off the official figure; load factor unsettled

5 | Retail | 94 (wider than needed) | 1.9% | 97 (generous) | 2 of 2 | Retail sales: 99, 1.6% off (agrees) | 91% | 0.40 | none | New orders 2.22; Order book 2.03; Lost demand 1.68; Load factor 1.34; Shipments 1.30 | Order and demand totals all unsettled

6 | Hospitals | 100 (wider than needed) | 0.6% | 98 (generous) | 2 of 2 | Producer prices: 100, 0.4% off (agrees) | 90% | 0.50 | Lead time; New orders; Order book; Shipments; Load factor; Utilization | Lost demand 2810.00 | Mostly from the model; lost demand ratio extreme

7 | Autos | 94 (wider than needed) | 2.2% | 96 (generous) | 1 of 2 | Utilization: 79, 0.7% off (close, range too tight) | 91% | 0.40 | Input inventory | Finished inventory 1.52 | Overconfident utilization

8 | Housing | 99 (wider than needed) | 2.8% | 98 (generous) | 1 of 1 | Housing completions: 99, 1.0% off (agrees) | 85% | 0.40 | Input inventory | New orders 3.81 | Large forecast gap; new orders unsettled

9 | Machinery | 100 (wider than needed) | 2.4% | 98 (generous) | 2 of 2 | Production: 100, 1.7% off (agrees) | 93% | 0.28 | none | New orders 3.24; Finished inventory 1.85 | New orders and finished inventory unsettled

10 | Data centers | 100 (wider than needed) | 1.1% | 95 (generous) | none published | – | 94% | 0.34 | Lead time; Overdue orders; Phantom orders; Shipments; Order book | New orders 2.05 | Order totals entirely from the model; no official check

The stronger sectors are Steel, Semiconductors, Chemicals and Airlines. Most of their totals are pinned by the data (Steel and Chemicals capacity at 0.04 and 0.03), their official statistics agree at 97/100 to 100/100, and their forecast gaps run from 1.3% to 2.5%. Airlines still has two unsettled totals: new orders at 1.32 and lost demand at 8.94.

## Weakest hidden quantities (weakest first)

# | Quantity | Forecasts in range  | Forecast gap  | Sectors mostly from the model  | Unsettled sectors  | Note

1 | New orders | 100 (wider than needed) | 1.8% | 5 of 14: Wholesale; Oil and gas; Hospitals; Steel; Semiconductors | Housing 3.81; Machinery 3.24; Retail 2.22; Data centers 2.05; Airlines 1.32 | Pinned or partly pinned in only 4 of 14 sectors

2 | Finished inventory | 94 (wider than needed) | 0.09 mo | 2 of 10: Food; Chemicals | Oil and gas 1.90; Machinery 1.85; Autos 1.52; Semiconductors 1.36; Steel 1.24 | Data unsettle it in half the sectors that have it

3 | Lead time | 99 (wider than needed) | 7.0% | 4 of 14: Data centers; Hospitals; Wholesale; Airlines | Hotels 1.24 | Largest forecast gap of any quantity

4 | Lost demand | 94 | 0.00 mo | 1 of 5: Hotels | Hospitals 2810.00; Airlines 8.94; Retail 1.68 | Most extreme ratios on the page

5 | Order book | 100 (wider than needed) | 3.0% | 3 of 14: Wholesale; Hospitals; Data centers | Oil and gas 2.40; Retail 2.03 | Large gap; unsettled in Oil and gas and Retail

6 | Input inventory | 100 (wider than needed) | 2.5% | 7 of 8: Food; Steel; Autos; Housing; Oil and gas; Chemicals; Semiconductors | none | Almost entirely from the model

7 | Overdue orders | 99 (wider than needed) | 0.01 mo | 1 of 9: Data centers | Oil and gas 18.60 | One extreme value

8 | Phantom orders | 97 (wider than needed) | 0.00 mo | 1 of 9: Data centers | Oil and gas 11.70 | One extreme value

9 | Capacity announced | 100 (wider than needed) | 6.3% | 0 of 3 | none | Pinned, yet the second-largest forecast gap

10 | Unit cost | 90 | 3.0% | 0 of 14 | none | Large gap; its parameters rest on group averages

11 | Load factor | 99 (wider than needed) | 1.1 pts | 2 of 5: Wholesale; Hospitals | Hotels 1.57; Retail 1.34 | Unsettled in Hotels and Retail

12 | Shipments | 99 (wider than needed) | 1.4% | 3 of 14: Wholesale; Data centers; Hospitals | Retail 1.30 | Mixed

Output, capacity, utilization, price and capacity in use are pinned by the data in nearly every sector.

## Problems

### 1. Wholesale forecasts are the least accurate, and the data barely shape them

ID 4506da16-22e5-4bc2-bcc4-cd776f718312

EvidenceThe forecast gap for Wholesale is 5.9%, the largest of any sector, yet its range catches 100/100 ("wider than needed") ("Forecasts against later estimates"). Seven of its twelve totals fall at 0.8–1.2, including output at 1.14 and order book at 1.09 ("What the data pin down"). It has no official statistic ("Sector totals against official statistics"). Its parameters are 47% informative by the stricter ratio, and its least-informed parameter, w (cost pass-through), is 0% informative ("What the data pin down", by sector). It has only 465 observations, the second fewest of any sector ("Observations against the model").

Why it mattersWholesale's numbers mostly reflect the model's assumptions, and they move the most between runs. Nothing outside the model checks them.

Likely causesToo few observations, or observations that bear only on prices and margins rather than volumes. There may also be a mismatch between the sector's equations and how its data behave.

ConfidenceHigh. Several independent pages point the same way.

### 2. Adding data makes some totals less certain, sometimes absurdly so

ID 92e9d2d4-cc0d-4efe-a190-f1bfd2c694e2

EvidenceTwenty-six cells in the sector-totals table are above 1.2. Among them: Hospitals lost demand at 2810.00, Oil and gas overdue orders at 18.60 and phantom orders at 11.70, Airlines lost demand at 8.94, Housing new orders at 3.81, and Machinery new orders at 3.24 ("What the data pin down").

Why it mattersObservations should never make a well-behaved model more unsure. Where they do, the reported uncertainty for these quantities cannot be trusted.

Likely causesThe ratios may be dividing by a near-zero spread for quantities that are almost always tiny (lost demand shows 0.00 mo). The filter could also be making large corrections that disturb related quantities, or have too few copies of the world to estimate small spreads.

ConfidenceHigh for the extreme values. Medium for the values just above 1.2.

### 3. Uncertainty ranges are generally too wide

ID 265c95d5-a5bc-43ab-a9f7-718db83c3895

EvidenceOverall, 97 of 100 later estimates fall inside the 90% range, and 13 of 14 sectors are "wider than needed" ("Forecasts against later estimates"). Overall, 96 of 100 observations fall inside the range, closeness is 28% against a well-sized 41%, and 24 of 26 kinds of observation are "generous" or "too few to tell" ("Observations against the model"). Order book observations sit at 19% closeness and stated capacity at 18%.

Why it mattersUsers are told the model is less sure than it is, which makes its warnings less useful.

Likely causesThe model may assume more observation noise than the data contain. Closeness well below 41% could also mean it follows the observations too closely.

ConfidenceHigh. The pattern holds across thousands of values.

### 4. Utilization is confidently wrong in Food and Autos

ID f532d12b-cb52-4cc7-b9f7-f4486fe2de24

EvidenceFood capacity utilization is 78/100, "disagrees". Autos capacity utilization is 79/100, "close, range too tight" ("Sector totals against official statistics"). Yet the utilization totals look pinned at 0.13 for Food and 0.08 for Autos ("What the data pin down"). Food also has a 2.8% forecast gap ("Forecasts against later estimates").

Why it mattersThe model is sure about its utilization figure, and the official figure regularly falls outside the model's range anyway.

Likely causesEntity-level data may pin utilization to a level that does not add up to the official definition. The official statistic may be given too little uncertainty, or the sector may include activity that the tracked entities miss.

ConfidenceMedium to High. Food is labeled a genuine disagreement over 96 months.

### 5. Hotels do not match official employment or prices

ID aff5a135-471e-44e2-ba72-c34a9cd5c7fa

EvidenceAccommodation employment is 83/100 with a 2.1% gap, "disagrees", the largest gap tied with Oil and gas production. CPI lodging is 87/100 ("Sector totals against official statistics"). Hotels have the lowest share of observations in range, 93/100, at 33% closeness ("Observations against the model"). Hotel load factor is 1.57, lead time 1.24, and capacity only partly pinned at 0.76 ("What the data pin down").

Why it mattersHotel totals drift from the official picture even though the model is pulled toward it.

Likely causesThe link from occupancy to staffing may not fit, or tracked hotels may not represent the sector. The unsettled load factor suggests the occupancy data and the model may be in conflict.

ConfidenceMedium. The two official misses and the observation fit agree, but each is moderate.

### 6. Oil and gas is weak across the board

ID f387787d-bb12-477b-bbb9-4cf8b4656476

EvidenceThe forecast gap is 5.6% ("Forecasts against later estimates"). Order book is 2.40, overdue orders 18.60, phantom orders 11.70 and finished inventory 1.90, with shipments at 0.80 and new orders at 1.08 ("What the data pin down"). The industrial production gap is 2.1% ("Sector totals against official statistics").

Why it mattersThis is the sector with the most observations (3,191), yet its forecasts move a lot and its order-side totals are unstable.

Likely causesAn order-book structure may not suit a sector that mostly produces to flow. Volatile drivers such as commodity prices could also widen forecasts.

ConfidenceHigh.

### 7. Cost pass-through and normal markup come from group averages, not from each firm's own data

ID f0cc1475-16f5-4deb-9ef3-60e12d70c46b

EvidenceFor w (pass-through), 12 of 115 are informative by the stricter ratio, median 0.94. For μ (normal markup), 11 of 115, median 0.97 ("What the data pin down", by parameter). w is the least-informed parameter in 10 of 14 sectors ("What the data pin down", by sector). Unit cost has a 3.0% forecast gap with coverage only "about right" at 90/100, and price has a 2.6% gap ("Forecasts against later estimates").

Why it mattersFirm-level cost and margin behavior is essentially assumed, so firms that differ from their group are misdescribed.

Likely causesPrices may not separate cost from markup on their own. Input-cost data may be sparse at the entity level.

ConfidenceHigh for the parameters. Medium for the link to the forecast gaps.

### 8. Order-flow and lead-time totals are mostly assumed

ID d92e473b-d7e8-4393-9133-3d9fe0e9abde

EvidenceNew orders are at 0.8–1.2 or above 1.2 in 10 of 14 sectors. Input inventory is at 0.8–1.2 in 7 of 8 sectors. Data centers overdue and phantom orders sit at exactly 1.00 ("What the data pin down"). Lead time has the largest forecast gap at 7.0%, and order book is at 3.0% ("Forecasts against later estimates").

Why it mattersOrder books and lead times are often what a user wants to know, and here they are largely the model's assumption.

Likely causesDirect order or inventory data may be scarce: there are 217 book-to-bill and 93 input-inventory observations ("Observations against the model"). Order dynamics may be identified only indirectly, through output.

ConfidenceMedium to High.

### 9. Good scores against later estimates may partly be the model agreeing with itself

ID 95dfaf85-5c91-45a2-8536-1f8ea4b3bbc4

EvidenceHospitals has the smallest forecast gap, 0.6% at 100/100 ("Forecasts against later estimates"). Yet it has six totals at 0.8–1.2 and the lowest stricter-informative share, 35% ("What the data pin down"). The page itself warns that model-driven totals "would look stable from one run to the next even if [they] were wrong."

Why it mattersSmall forecast gaps in model-driven sectors say little about accuracy.

Likely causesBoth runs draw on the same equations and priors when observations are thin.

ConfidenceMedium. This is a property of the check, but the extent cannot be measured from the pages.

### 10. Large parts of the model have no outside check

ID 33026e1f-07d2-4779-8acb-53ef0ebcc705

EvidenceData centers and Wholesale have no official statistic, and Housing has only completions ("Sector totals against official statistics"). Exports have 35 observations and market vacancy 31, both "too few to tell" ("Observations against the model"). The emissions slope b is informative for 23 of 47, and capacity drift δ for 43 of 90 by the stricter ratio ("What the data pin down").

Why it mattersFor these areas the reader has no evidence of accuracy beyond the model's own consistency.

Likely causesLimited published statistics for these sectors. Some observation types are sparse.

ConfidenceMedium.

Connections. Problems 1, 8 and 9 share one cause: where observations are thin or bear only indirectly on a quantity, totals come from the equations, look stable, and are checked mainly against the model's later self. Problems 2, 6 and part of 8 involve the same order-side and inventory quantities (new orders, order book, overdue and phantom orders, finished inventory, lost demand), so the filter could be struggling with that one part of the model. Problems 3 and 4 together suggest the noise settings are off in both directions: observation noise set too high makes ranges wide, while official statistics or utilization data weighted too heavily give false confidence. Problem 7 and the large unit-cost and price gaps may share a cause: cost and markup cannot be separated from each other.

What the pages cannot tell me:

- How the forecasts compare with what actually happened, as opposed to later estimates.

- How many copies of the world the filter runs, and whether the extreme spread ratios come from dividing by near-zero spreads.

- Which observations feed each sector's order, inventory and lead-time totals, and how many there are.

- Whether the official statistics are themselves used in the fit for the months checked, and with what assumed error.

- How the forecast gaps and coverage change over different as-of dates, for example in turning points versus calm periods.

Definitions behind the page's (i) marks:
- How often the model's range caught the value it was checked against. The model gives a range it expects to hold the value 90 times out of 100, so about 90 is ideal. Much lower means the model is too sure of itself (too narrow, misses too many); much higher means its ranges are wider than they need to be (wider than needed, generous).
- How far off the model's best guess usually was, in percent (or in months of output, mo, or percentage points, pts). Forecasts are compared with the model's own estimate a year later, since the true value is not known. Smaller is better.
- Government statistics that measure a whole sector, such as industrial production, capacity utilization or employment. A statistic agrees when it falls inside the model's range about as often as it should; "close, range too tight" means the model is off by less than 1% but is too sure of itself.
- The share of the sector's parameters (the settings the model estimates for each business) that the data actually helped pin down, rather than leaving them near their starting guess. Higher is better.
- How much the data narrowed the uncertainty about a typical parameter: 0 means the data pinned it down exactly, 1 means the data told the model nothing. This is the middle value across the sector's parameters. Lower is better.
- Quantities the data barely affect, so their values come mostly from the model's own equations rather than from observations. (The model's simulated copies of the economy disagree about them almost as much with the data as without it: a spread ratio between 0.8 and 1.2.)
- Quantities the data make the model less sure about, not more: its simulated copies of the economy disagree more once the data are used (a spread ratio above 1.2, shown beside each). This usually means something in the estimation needs fixing.
