<!-- Next Version › Current Problems, for forecast b653c9a8-4454-5e3d-8a00-0a530afd83a0; the page: https://mitdbg.github.io/model-2-nowcasting/next_problems.html?set=b653c9a8-4454-5e3d-8a00-0a530afd83a0; inputs 45b0f8728c99849d -->

World shown World seed 20261107 (the bundle's only world)

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Current Problems

This analysis was written by an AI evaluator that saw only the Evaluation pages that need no ground truth. It had no access to the true values, the model's code, or how the model was developed. This analysis has not been human-reviewed.

Overall assessment. Taken one entity at a time, the model fits well: 89% of its entity parameters are narrowed by the data, and its forecasts usually land within about 2% of its own later estimates. The trouble is in how the parts add up and how they are linked. The filter is unsettled in several sectors, the sector totals for Machinery and Oil and gas disagree with official statistics, and the model's stated uncertainty is uneven: too wide for most observations and forecasts, too narrow for capacity and sector totals. The main headline check, forecasts against later estimates, flatters the model, because many of the quantities it scores come mostly from the model itself rather than from data.

## Weakest sectors (weakest first)

# | Sector | Forecasts in range  | Forecast gap  | Observations in range  | Official statistics agreeing  | Worst official statistic  | Parameters learned  | Median sd ratio  | Mostly from the model  | Unsettled  | Note

1 | Machinery | 96 (wider than needed) | 3.9% | 93 (generous) | 1 of 2 | Production: 26, 13.4% off (disagrees) | 88% | 0.47 | Input inventory; Shipments; Unit cost | Finished inventory 177.00; Output 10.90; Utilization 4.69; New orders 2.36 | Second-worst forecast gap; starting markup learned for 38% of entities

2 | Oil and gas | 98 (wider than needed) | 2.5% | 90 | 0 of 2 | Production: 4, 3.2% off (disagrees) | 94% | 0.43 | Input inventory; New orders; Phantom orders | none | –

3 | Hotels | 84 (too narrow) | 1.7% | 95 (generous) | 1 of 2 | Employees: 31, 1.3% off (disagrees) | 97% | 0.34 | New orders; Lead time; Order book; Shipments | none | The only sector whose forecast ranges are too narrow

4 | Retail | 90 | 4.6% | 95 (generous) | 2 of 2 | Retail sales: 93, 2.8% off (agrees) | 94% | 0.44 | none | Order book 2.27; New orders 2.27; Shipments 1.86; Lost demand 1.42; Load factor 1.37 | Worst forecast gap

5 | Wholesale | 100 (wider than needed) | 1.9% | 79 (misses too many) | none published | – | 81% | 0.49 | Shipments; Order book; New orders; Lead time | none | The only sector whose observations miss too many; capacity drift learned for no entity; no official statistic

6 | Hospitals | 97 (wider than needed) | 1.5% | 98 (generous) | 1 of 2 | Employees: 69, 0.7% off (close, range too tight) | 85% | 0.51 | Lead time; New orders; Shipments; Order book; Utilization | Lost demand 2.71 | Highest median sd ratio; starting markup learned for 25% of entities

7 | Data centers | 93 (wider than needed) | 1.5% | 96 (generous) | none published | – | 94% | 0.34 | Lead time; Overdue orders; Phantom orders; Order book; Shipments; Unit cost | New orders 2.74 | No official statistic

8 | Semiconductors | 98 (wider than needed) | 3.0% | 96 (generous) | 2 of 2 | Utilization: 87, 1.1% off (agrees) | 86% | 0.43 | Input inventory | Finished inventory 8.34 | Lead-time bias learned for no entity

9 | Autos | 95 (wider than needed) | 2.8% | 94 (generous) | 1 of 2 | Production: 79, 1.0% off (close, range too tight) | 87% | 0.27 | Input inventory | none | Capacity drift learned for 38% of entities

10 | Housing | 100 (wider than needed) | 1.6% | 98 (generous) | 1 of 1 | Housing completions: 97, 0.4% off (agrees) | 96% | 0.30 | Input inventory; Finished inventory | New orders 4.84 | –

The stronger sectors are Food (3.0% forecast gap, official statistics agree), Airlines (New orders 1.32 and Lost demand 1.25 above 1.2), Chemicals (Finished inventory 1.27) and, strongest, Steel. Steel shows 100/100 with a 1.4% gap, 97/100 on both official statistics, and only New orders 1.03 and Input inventory 1.00 coming from the model; its weak point is the emissions slope b, informative for only 18% of entities.

## Weakest hidden quantities (weakest first)

# | Quantity | Forecasts in range  | Forecast gap  | Sectors mostly from the model  | Unsettled sectors  | Note

1 | New orders | 100 (wider than needed) | 1.8% | 5 of 14: Steel; Hotels; Hospitals; Oil and gas; Wholesale | Housing 4.84; Data centers 2.74; Machinery 2.36; Retail 2.27; Airlines 1.32 | Pinned by data (0.5 or less) in no sector

2 | Finished inventory | 97 (wider than needed) | 0.14 mo | 2 of 10: Housing; Food | Machinery 177.00; Semiconductors 8.34; Chemicals 1.27 | Observations: finished inventory 80/100, sector inventories 43/100

3 | Input inventory | 100 (wider than needed) | 3.3% | 7 of 8: Machinery; Oil and gas; Housing; Steel; Autos; Semiconductors; Chemicals | none | In effect not observed anywhere

4 | Lost demand | 99 (wider than needed) | 0.00 mo | 0 of 5 | Hospitals 2.71; Retail 1.42; Airlines 1.25 | A gap of zero suggests it rarely moves at all

5 | Order book | 99 (wider than needed) | 2.3% | 4 of 14: Hospitals; Hotels; Data centers; Wholesale | Retail 2.27 | –

6 | Shipments | 99 (wider than needed) | 1.4% | 5 of 14: Machinery; Hospitals; Hotels; Wholesale; Data centers | Retail 1.86 | Observations: Census shipments 78/100

7 | Capacity in use | 67 (too narrow) | 0.8% | 0 of 1 | none | Overconfident; worst hit rate

8 | Lead time | 100 (wider than needed) | 5.4% | 4 of 14: Data centers; Hotels; Hospitals; Wholesale | none | –

9 | Capacity announced | 100 (wider than needed) | 10.2% | 0 of 3 | none | Largest gap

10 | Overdue / Phantom orders | 100 (wider than needed) / 99 (wider than needed) | 0.00 mo / 0.00 mo | Overdue orders: 1 of 9: Data centers / Phantom orders: 2 of 9: Data centers; Oil and gas | Overdue orders: none / Phantom orders: none | –

11 | Capacity | 81 (too narrow) | 1.8% | 0 of 14 | none | Overconfident

12 | Utilization | 91 | 1.8 pts | 1 of 14: Hospitals | Machinery 4.69 | –

13 | Unit cost | 93 (wider than needed) | 2.0% | 3 of 14: Machinery; Data centers; Food | none | –

14 | Output | 98 (wider than needed) | 1.5% | 0 of 14 | Machinery 10.90 | Official industrial production misses badly in Machinery and Oil and gas

15 | Price | 99 (wider than needed) | 2.1% | 0 of 14 | none | Strongest

## Problems

### 1. Adding data makes some estimates less certain

ID 969e7420-2ef9-4982-8114-b5d0f5d6eb9a

Evidence"What the data pin down", sector-totals table: Machinery Finished inventory 177.00, Output 10.90, Utilization 4.69, New orders 2.36; Semiconductors Finished inventory 8.34; Housing New orders 4.84; Data centers New orders 2.74; Hospitals Lost demand 2.71; Retail New orders 2.27, Order book 2.27, Shipments 1.86; Airlines New orders 1.32; Chemicals Finished inventory 1.27. The page describes any value above 1.2 as "a sign the filter is unsettled there".

Why it mattersNew data should make the model more sure, not less. Where it does the reverse, those numbers cannot be trusted, and the problem may spread to related quantities.

Likely causesThe model keeps many simulated copies of the world. These copies could be collapsing onto a few, or drifting apart, when an observation strongly contradicts them. A badly scaled or wrongly signed link from observation to quantity, or a few extreme data points, could have the same effect. A value of 177 suggests a numerical breakdown rather than ordinary noise.

ConfidenceHigh.

### 2. Machinery output does not match official industrial production

ID 600373e7-b215-410c-b778-8bbabba658a9

Evidence"Sector totals against official statistics": Industrial production, machinery, 26/100 months in range, 13.4% gap, "disagrees"; capacity utilization 96/100 with a 3.4% gap. Machinery Output has a spread ratio of 10.90. On the forecast page, Machinery's typical gap is 3.9%.

Why it mattersThe model's Machinery output is about an eighth away from the official figure, even though it is pulled toward that figure while it runs.

Likely causesThis could be a consequence of problem 1. The tracked firms may not represent the whole industry, or they may be scaled up to the industry total wrongly. Utilization can only stay close while output is 13% off if the capacity level is off by a similar amount.

ConfidenceHigh.

### 3. Oil and gas totals are confident, pinned down by data, and wrong

ID 3343fa6f-a131-4ee9-9385-0e9c6ae4fbce

EvidenceOfficial page: Industrial production, oil & gas extraction, 4/100 with a 3.2% gap; capacity utilization 51/100 with a 1.0% gap. Yet Oil and gas Output has a spread ratio of 0.20 and Utilization 0.08; its observations are 90/100 "about right" over 3,191; and its forecasts are 98/100.

Why it mattersThe model fits its own firms' data well but adds them up to the wrong industry total, so its sector figures would mislead a reader.

Likely causesThe tracked firms may cover an unrepresentative part of the industry. The official index may weight oil and gas differently from the model, or define output differently. The range given to the total may make no allowance for the gap between the tracked firms and the whole industry.

ConfidenceHigh.

### 4. Inventory and shipment data are fitted poorly even after being seen

ID 48b41e70-2dfe-455e-b4f3-7d2bff35e37c

Evidence"Observations against the model": Sector inventories 43/100, sitting 98% of the way to the edge of the range (94 observations); Finished inventory 80/100 (783); Census shipments 78/100 (160); Wholesale 79/100 (371). These are the only kinds of observation, and the only sector, marked "misses too many".

Why it mattersThese observations have already been used by the model, so misses this large mean its structure cannot reproduce how inventories behave.

Likely causesThe units or definitions may not match between the data and the model, for example months of sales against money, or cost against price. The model may also pull inventories toward a fixed normal level more strongly than the data shows.

ConfidenceHigh.

### 5. The ranges on sector totals are too narrow

ID 20f0e7fb-560e-495e-baab-a02bd0a6bc02

EvidenceOfficial page: 79 of every 100 months fall inside the range across 2,112 months, against an expected 90. Some statistics miss with small gaps: Hospitals, All employees, 69/100 with 0.7%; Autos industrial production 79/100 with 1.0%. Hotels, All employees, accommodation, is 31/100 with 1.3%. On the forecast page, Hotels is "too narrow" at 84/100.

Why it mattersThe model claims more certainty about sector totals than it has, so ordinary misses will look like surprises.

Likely causesThe page says the range comes only from "how much its copies of the world disagree". If so, it may leave out the measurement noise in the official statistic, the error from converting units, and the part of the sector the tracked firms do not cover. Hotel employment may also be tied to the model's output too rigidly.

ConfidenceHigh.

### 6. Capacity forecasts are overconfident

ID 772a056b-f03a-4ead-812d-94789cf084d3

EvidenceForecast page: Capacity in use 67/100 and Capacity 81/100, both "too narrow". "What the data pin down": capacity drift δ is informative for only 47 of 90 entities (median 0.79), 38% in Autos and Chemicals and 0% in Wholesale.

Why it mattersThe model's capacity figures a year ahead are close, but it is surer of them than it should be, and capacity underlies utilization and output.

Likely causesThe drift may rest mostly on a prior range (the model's assumption before seeing data) that is too narrow. It may be treated as fixed when it really changes, and sudden closures or restarts may not be represented.

ConfidenceMedium-high. The check is against the model's own later estimates, not the truth.

### 7. The assumed noise in most observations is set too high

ID 5dcbe738-bead-4d02-b534-fc16ea29341a

Evidence"Observations against the model": 95/100 over 18,338 observations; the typical observation sits 31% of the way to the edge, against an expected 41%; Stated capacity 98/100 at 15%. Forecast page: 96/100, "wider than needed", with Chemicals, Housing, Steel and Wholesale all at 100/100.

Why it mattersA model that thinks its data is noisier than it is gives the data too little weight, reacts slowly to real change and quotes ranges wider than needed.

Likely causesThe noise levels may be set by hand or fixed too high. Having already seen the data explains only part of the gap.

ConfidenceMedium.

### 8. The headline forecast check partly measures the model against itself

ID 22292e49-f84e-4171-afd5-725750ce19b0

EvidenceInput inventory has spread ratios of about 1.0 in most sectors, and New orders is 0.8 or above in five sectors. On the forecast page, Input inventory and New orders both score 100/100, and Overdue orders, Phantom orders and Lost demand each have a gap of "0.00 mo".

Why it mattersWhere no data pins a quantity down, the forecast and the later estimate come from the same equations, so they agree whether or not they are right. A perfect score there says little about accuracy.

Likely causesThese quantities are unobserved or only weakly observed, so both runs fall back on the model's equations. Gaps of exactly zero suggest the quantities rarely move away from zero.

ConfidenceHigh.

### 9. Some parameters rest mainly on their priors

ID 08821f7f-1367-422d-9b78-f9d4483aa81e

Evidence"What the data pin down": emissions slope b is informative for 23 of 47 entities (median 0.81), δ for 47 of 90, starting markup m0 for 68 of 115, and List-price gap for 6 of 11. Semiconductors lead-time bias is 0% informative and Steel b 18%. The page warns that the pull toward each group's average can make a parameter look informative when it is not.

Why it mattersThese settings come mainly from assumptions, and any error in them passes silently into emissions, prices and capacity.

Likely causesThere may be too little data that varies in the right way, or pairs of parameters may trade off against each other, for example starting markup against starting unit cost.

ConfidenceMedium.

### 10. Retail demand is unsettled and has the largest forecast errors

ID 577abb57-4cb7-428b-8912-fe58bc6c4b8e

EvidenceForecast page: Retail has the largest gap, 4.6%. Spread ratios: Shipments 1.86, New orders 2.27, Order book 2.27, Lost demand 1.42, and a Load factor of 1.37. Wholesale also shows a Load factor, at 0.80.

Why it mattersRetail's demand-side estimates are the least reliable, and a quantity that seems not to belong to retailers suggests the sector may have been set up wrongly.

Likely causesA template from another sector may have been reused, giving retail parts it should not have. Demand may also be poorly linked to the sales observations.

ConfidenceMedium.

Connections. Problems 1, 2 and 10 may share one cause: the filter becoming unstable in sectors whose demand side is weakly observed. Problems 5 and 6 look like the same gap, ranges that count only disagreement among the copies of the world. Problem 7 runs the other way and may explain the overly wide forecast ranges. Problems 3 and 4, together with Hotels in problem 5, suggest the tracked firms are not being added up or matched to official definitions correctly. Problem 8 means the headline accuracy figures understate all of the above.

What the pages cannot tell me:

- How the forecasts compare with what actually happened, as opposed to later model estimates.

- How the forecasts compare with a simple baseline, such as the last value or a seasonal trend.

- When over time the official misses and the jumps in spread occur (a steady offset, or a break in a particular month).

- What share of each official statistic the tracked entities cover.

- How many simulated copies the filter keeps, and how often they collapse onto a few.

Definitions behind the page's (i) marks:
- How often the model's range caught the value it was checked against. The model gives a range it expects to hold the value 90 times out of 100, so about 90 is ideal. Much lower means the model is too sure of itself (too narrow, misses too many); much higher means its ranges are wider than they need to be (wider than needed, generous).
- How far off the model's best guess usually was, in percent (or in months of output, mo, or percentage points, pts). Forecasts are compared with the model's own estimate a year later, since the true value is not known. Smaller is better.
- Government statistics that measure a whole sector, such as industrial production, capacity utilization or employment. A statistic agrees when it falls inside the model's range about as often as it should; "close, range too tight" means the model is off by less than 1% but is too sure of itself.
- The share of the sector's parameters (the settings the model estimates for each business) that the data actually helped pin down, rather than leaving them near their starting guess. Higher is better.
- How much the data narrowed the uncertainty about a typical parameter: 0 means the data pinned it down exactly, 1 means the data told the model nothing. This is the middle value across the sector's parameters. Lower is better.
- Quantities the data barely affect, so their values come mostly from the model's own equations rather than from observations. (The model's simulated copies of the economy disagree about them almost as much with the data as without it: a spread ratio between 0.8 and 1.2.)
- Quantities the data make the model less sure about, not more: its simulated copies of the economy disagree more once the data are used (a spread ratio above 1.2, shown beside each). This usually means something in the estimation needs fixing.
