<!-- Next Version › Current Problems, for forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e; the page: https://mitdbg.github.io/model-2-nowcasting/next_problems.html?set=0c0a014b-d739-5e72-95a6-0b4ec4f3753e -->

# Current Problems

This analysis was written by an AI evaluator that saw only the Evaluation pages that need no ground truth. It had no access to the true values, the model's code, or how the model was developed. This analysis has not been human-reviewed.

Overall assessment. On average the model tracks official statistics closely (0.7% typical gap) and forecasts stay near later estimates (about 2.5%). But its uncertainty is sized badly in both directions: too wide in most sectors, too narrow for capacity, Oil and gas and Wholesale. Machinery, Wholesale and Oil and gas fail clearly. Across sectors, demand-side and inventory quantities (new orders, input and finished inventory, lost demand) are poorly determined by the data or unsettled. Many entity parameters are learned only from their group, not from the entity's own data.

## Weakest sectors (weakest first)

# | Sector | Forecasts in range  | Forecast gap  | Observations in range  | Official statistics agreeing  | Worst official statistic  | Parameters learned  | Median sd ratio  | Mostly from the model  | Unsettled  | Note

1 | Machinery | 87 | 9.6% | 94 (generous) | 0 of 2 | Production: 40, 4.0% off (disagrees) | 98% | 0.30 | Lead time; Input inventory; Overdue orders | New orders 11.30; Price 1.72; Finished inventory 1.24 | New orders and price unsettled

2 | Wholesale | 81 (too narrow) | 4.5% | 67 (misses too many) | none published | – | 92% | 0.44 | Load factor; New orders; Shipments; Order book | none | No official statistic to check against

3 | Oil and gas | 76 (too narrow) | 13.6% | 94 (generous) | 2 of 2 | Utilization: 93, 0.5% off (agrees) | 89% | 0.45 | Input inventory; New orders | Finished inventory 1.57 | Worst year-ahead forecasts; official statistics agree

4 | Retail | 91 | 3.0% | 88 (misses too many) | 1 of 2 | Retail sales: 83, 3.3% off (disagrees) | 87% | 0.46 | none | Lost demand 64.90; New orders 1.57; Order book 1.49; Shipments 1.24; Load factor 1.21 | Five totals unsettled

5 | Steel | 99 (wider than needed) | 2.7% | 95 (generous) | 1 of 2 | Utilization: 55, 1.6% off (disagrees) | 74% | 0.54 | Input inventory | New orders 2.54 | Lowest share of parameters learned

6 | Hospitals | 99 (wider than needed) | 1.1% | 97 (generous) | 2 of 2 | Employees: 100, 0.5% off (agrees) | 89% | 0.50 | Lead time; New orders; Order book; Shipments | Lost demand 216.00 | Fewest parameters learned by the stricter ratio

7 | Data centers | 93 (wider than needed) | 1.5% | 97 (generous) | none published | – | 94% | 0.32 | Overdue orders; Phantom orders; Shipments; Lead time; Order book | New orders 2.45 | No official statistic

8 | Hotels | 100 (wider than needed) | 1.3% | 96 (generous) | 2 of 2 | Employees: 100, 0.5% off (agrees) | 97% | 0.38 | New orders; Lead time; Order book; Shipments | Lost demand 22.70 | –

9 | Food | 97 (wider than needed) | 1.4% | 99 (generous) | 2 of 2 | Utilization: 99, 0.8% off (agrees) | 88% | 0.48 | Input inventory; Order book | none | –

10 | Housing | 94 (wider than needed) | 1.6% | 98 (generous) | 1 of 1 | Housing completions: 100, 0.4% off (agrees) | 89% | 0.39 | Finished inventory; Input inventory | New orders 5.21 | –

The stronger sectors are Semiconductors, Autos, Chemicals and Airlines. Each has one or two weak spots: Chemicals' finished inventory (1.47), Airlines' new orders (1.35) and lost demand (4.80), and input inventory near 1.0 in Autos and Semiconductors. Their forecast ranges are mostly wider than needed (98–100/100). Semiconductors has the lowest spread ratios on almost every quantity.

## Weakest hidden quantities (weakest first)

# | Quantity | Forecasts in range  | Forecast gap  | Sectors mostly from the model  | Unsettled sectors  | Note

1 | Finished inventory | 94 (wider than needed) | 0.09 mo | 1 of 10: Housing | Oil and gas 1.57; Chemicals 1.47; Machinery 1.24 | Sector inventories 4/100

2 | New orders | 97 (wider than needed) | 2.0% | 6 of 14: Wholesale; Hotels; Oil and gas; Autos; Hospitals; Chemicals | Machinery 11.30; Housing 5.21; Steel 2.54; Data centers 2.45; Retail 1.57; Airlines 1.35 | Only Food and Semiconductors below 0.8

3 | Input inventory | 100 (wider than needed) | 4.2% | 8 of 8: Semiconductors; Machinery; Oil and gas; Autos; Housing; Steel; Food; Chemicals | none | Entirely from the model

4 | Lost demand | 91 | 0.00 mo | 0 of 5 | Hospitals 216.00; Retail 64.90; Hotels 22.70; Airlines 4.80 | Gap of zero suggests a near-empty quantity

5 | Capacity in use | 67 (too narrow) | 1.1% | 0 of 1 | none | Looks pinned but is overconfident

6 | Capacity | 83 (too narrow) | 1.7% | 0 of 14 | none | Same pattern

7 | Lead time | 93 (wider than needed) | 10.0% | 6 of 14: Machinery; Hospitals; Data centers; Hotels; Airlines; Autos | none | Largest percentage gap

8 | Order book | 93 (wider than needed) | 3.4% | 5 of 14: Hotels; Hospitals; Data centers; Wholesale; Food | Retail 1.49 | –

9 | Shipments | 99 (wider than needed) | 1.4% | 4 of 14: Data centers; Hotels; Hospitals; Wholesale | Retail 1.24 | –

10 | Overdue orders | 88 | 0.01 mo | 2 of 9: Data centers; Machinery | none | –

11 | Price | 99 (wider than needed) | 2.2% | 0 of 14 | Machinery 1.72 | Otherwise well pinned

12 | Load factor | 99 (wider than needed) | 1.5 pts | 1 of 5: Wholesale | Retail 1.21 | –

Phantom orders, unit cost, utilization and output do best: they are well pinned and their ranges are wider than needed.

## Problems

### 1. Capacity and capacity in use are overconfident

ID 7d7c1dbd-b903-46e4-bfe4-ecf5eaf3a0a8

EvidenceForecasts against later estimates: Capacity 83/100 ("too narrow") and Capacity in use 67/100 ("too narrow"), even though the gaps are small (1.7%, 1.1%). What the data pin down: capacity spread ratios are as low as 0.01 (Machinery), 0.04 (Semiconductors) and 0.05 (Steel). Official statistics: Steel capacity utilization 55/100 while Steel industrial production is 97/100. Machinery capacity utilization 59/100. Machinery's least-informed parameter is capacity drift δ, 0% informative by the stricter ratio.

Why it mattersThe model is surer about how much each sector can produce than it should be. Utilization figures built on that capacity then disagree with official numbers.

Likely causesCapacity may be treated as nearly fixed, or tied too tightly to stated or announced capacity. A very low spread ratio may then measure overconfidence rather than real information. When output matches official statistics but utilization does not, the capacity level is the likely error.

ConfidenceHigh. Three pages point the same way.

### 2. Machinery totals disagree with official statistics even though the model is pulled toward them

ID c868fa08-cda3-4d2d-8db4-45586db446b1

EvidenceOfficial statistics: Machinery industrial production 40/100 with a 4.0% gap (the largest of 22), and capacity utilization 59/100 with a 1.8% gap. Forecasts against later estimates: 9.6% gap. What the data pin down: new orders 11.30, price 1.72, finished inventory 1.24.

Why it mattersThe official page says agreement is partly built in. A persistent gap therefore means the modeled plants cannot add up to the official sector.

Likely causesThe tracked machinery entities may not represent the sector well, or the sector's demand side (new orders) may be badly specified. That could unsettle prices and inventories as well.

ConfidenceHigh. The failure is large and shows on several measures.

### 3. Oil and gas forecasts a year ahead are far off and too confident

ID 3e8fb712-d176-43cf-84ec-a3ece3ddc0c8

EvidenceForecasts against later estimates: 76/100 ("too narrow"), 13.6% gap, the worst sector on both counts. On the other checks Oil and gas looks fine: observations 94/100 (3,191 observations, the most of any sector) and official statistics 93/100 and 97/100.

Why it mattersThe model describes Oil and gas history well, but its year-ahead forecasts there should not be trusted at the stated confidence.

Likely causesThe forecast may carry forward drivers, such as commodity prices, whose future uncertainty is not in the ranges. Finished inventory being unsettled (1.57) could add to it.

ConfidenceHigh on the size. Medium on the cause: only three forecast dates are shown.

### 4. Wholesale fails every check available, and one check is missing

ID 787359fb-cf2c-4dac-b9c8-f9a5e83a1e24

EvidenceForecasts against later estimates: 81/100 ("too narrow"), 4.5%. Observations: 67/100, 49% of the way to the edge ("misses too many"), on only 466 observations. Official statistics: none listed for Wholesale. What the data pin down: shipments 0.84, new orders 1.00, order book 0.83, load factor 1.17. Pass-through of input cost to unit cost (w) is 0% informative by the stricter ratio.

Why it mattersWholesale's estimates do not match its own data, and no official statistic is there to catch the error.

Likely causesThe sector's template may suit wholesale poorly. Its observations may be too few or too noisy to correct the model's equations.

ConfidenceHigh.

### 5. Inventories do not match their data

ID 914daf2a-202c-4dec-915c-79773d7810c4

EvidenceObservations: Finished inventory 71/100 at 58% (783 observations). Sector inventories 4/100 at 100% (94 observations), the worst of any kind of observation. What the data pin down: finished inventory 1.47 (Chemicals), 1.57 (Oil and gas), 1.24 (Machinery). Input inventory sits between 0.97 and 1.01 in all eight sectors that have it. Yet Forecasts against later estimates reports input inventory at 100/100.

Why it mattersInventory is a key early signal in a business cycle. Here it is either contradicted by the data or not informed by it at all.

Likely causesThe way the model links its inventory to the published sector inventory figures may be wrong, for example in units, timing or definition. Input inventory may have no informative observation in most sectors.

ConfidenceHigh. The misses are extreme and the observation counts are not small.

### 6. New orders are barely determined, and often unsettled

ID 2692dee5-a1bd-473c-b689-bd295b78bb0c

EvidenceWhat the data pin down: new orders above 1.2 in six sectors (Machinery 11.30, Housing 5.21, Steel 2.54, Data centers 2.45, Retail 1.57, Airlines 1.35) and between 0.87 and 1.00 in six more. Forecasts against later estimates still shows new orders at 97/100 and 2.0%.

Why it mattersDemand is what drives the rest of the model. If it is not learned from data, output and orders forecasts rest on assumptions.

Likely causesNew orders may be hard to tell apart from order-book and shipment changes, so the data cannot separate them. Ratios above 1 suggest observations that conflict with each other, or an unstable filter, the step that updates the estimates month by month as observations arrive.

ConfidenceMedium-high. The pattern is broad, but how to read ratios above 1.2 is the page's interpretation.

### 7. Ranges are too wide in most places and too narrow in a few

ID 46ab798b-fd4e-4e14-b5ac-3d6daf028f66

EvidenceForecasts against later estimates: 94/100 overall. Nine sectors are "wider than needed", with Airlines, Hotels and Semiconductors at 100/100. Observations: 95/100 at 29% against an expected 41%. Stated capacity is at 18%, and capacity announced, capacity offered and order book are each at 20%. Against this, Oil and gas (76/100), Wholesale (81/100) and capacity in use (67/100) are too narrow.

Why it mattersThe stated uncertainty does not say how much to trust a number. Easy sectors look less certain than they are, and hard ones look more certain.

Likely causesNoise levels for observations and for the model's internal processes may be set roughly uniformly rather than matched to each sector. The very tight "how close" values may mean the model is fitting noise.

ConfidenceMedium-high.

### 8. Many parameters are learned only from their group

ID bdf6f819-fc07-43c2-ad55-6c7c35f1996f

EvidenceWhat the data pin down: 89% are informative by the plain ratio but 63% by the stricter one. Pass-through w: 115 of 115 informative but 20 of 115 by the stricter ratio, median 0.94. Normal markup μ: 115 of 115 against 16 of 115, median 0.96. Demand response β: 48 of 105 stricter. Hospitals: 35% informative by the stricter ratio, median 0.92. Food: 44%. Steel has the lowest plain share (74%), and its entities fill most of the least-informed places in the entity view (Desert Mini-mill 7 of 13, Gary Coke & Iron 6 of 11).

Why it mattersDifferences between entities in cost pass-through and markup are mostly assumed, not measured.

Likely causesPrice and cost observations for individual entities may be too sparse. The prior may also be much wider than the spread across the group, which makes the plain ratio look better than it is.

ConfidenceHigh.

### 9. Lost demand is unsettled

ID b3fedfc9-0df2-4f9a-bf75-42804a1f9d24

EvidenceWhat the data pin down: lost demand 216.00 (Hospitals), 64.90 (Retail), 22.70 (Hotels), 4.80 (Airlines). Forecasts against later estimates: 0.00 mo gap.

Why it mattersThe model gets less certain when given data, which signals an unstable piece of the model even if the quantity itself is small.

Likely causesThe quantity may be near zero without data, so any spread with data looks huge. Or its equation may interact badly with occupancy or load-factor observations.

ConfidenceMedium. It may be an artifact of a ratio between tiny numbers.

### 10. Retail does not reproduce its own data or official sales

ID a2cc8b94-b769-4da9-81c2-74e5c72d45af

EvidenceObservations: 88/100, 37% ("misses too many"). Official statistics: retail sales 83/100, 3.3% gap. What the data pin down: shipments 1.24, new orders 1.57, order book 1.49, load factor 1.21, lost demand 64.90.

Why it mattersThe sector's sales path is the main thing a reader would want from Retail, and it is the weak point.

Likely causesRetail's order-related quantities may not fit how stores actually operate, which unsettles the estimates around them.

ConfidenceMedium-high.

### 11. The main forecast check partly grades the model against itself

ID 80a7e30b-5306-49ae-9e68-6840caea2211

EvidenceForecasts against later estimates: the later estimate "is not the truth". Input inventory scores 100/100 there while its spread ratios sit at about 1.0. Hospitals scores 1.1% while most of its totals have spread ratios of 0.93–0.99. The gap is already 2.0% in "this month", against 2.9% at 7–12 months.

Why it mattersQuantities the model mostly invents will agree with themselves from one run to the next. The page itself warns these totals "would look stable … even if wrong". Most of the year-ahead gap is already there in the estimate of the current month.

Likely causesAgreement with the model's own later estimate measures consistency, not accuracy. Estimates of the current month may be revised heavily as later data arrive.

ConfidenceMedium.

Connections. Problems 1 and 2 may share a cause: overconfident capacity, with Machinery's capacity drift learned from nothing, would explain the utilization disagreements in Steel and Machinery. Problems 5, 6, 9 and 10 all sit on the demand and stock side of the model (new orders, order book, inventories, lost demand). They point to one weakly identified or unstable part of the model, meaning one the data cannot pin down, that hits Retail, Machinery and Wholesale hardest. Problems 7 and 11 interact: ranges that are generous overall, plus self-comparison, make the headline scores look better than the sector failures in 2–4.

What the pages cannot tell me:

- How the model's estimates compare with the actual truth, rather than with its own later runs.

- Which quantities make up the 13.6% Oil and gas gap and the 9.6% Machinery gap, since the by-quantity table pools all sectors.

- How much the three forecast dates (2023-09, 2024-09, 2025-09) vary from one another, and whether the scores are stable.

- What "load factor" and "lost demand" mean for Hospitals, Hotels, Retail and Wholesale, where those columns also appear.

- How the published sector inventory figures map onto the model's inventory.

Definitions behind the page's (i) marks:
- How often the model's range caught the value it was checked against. The model gives a range it expects to hold the value 90 times out of 100, so about 90 is ideal. Much lower means the model is too sure of itself (too narrow, misses too many); much higher means its ranges are wider than they need to be (wider than needed, generous).
- How far off the model's best guess usually was, in percent (or in months of output, mo, or percentage points, pts). Forecasts are compared with the model's own estimate a year later, since the true value is not known. Smaller is better.
- Government statistics that measure a whole sector, such as industrial production, capacity utilization or employment. A statistic agrees when it falls inside the model's range about as often as it should; "close, range too tight" means the model is off by less than 1% but is too sure of itself.
- The share of the sector's parameters (the settings the model estimates for each business) that the data actually helped pin down, rather than leaving them near their starting guess. Higher is better.
- How much the data narrowed the uncertainty about a typical parameter: 0 means the data pinned it down exactly, 1 means the data told the model nothing. This is the middle value across the sector's parameters. Lower is better.
- Quantities the data barely affect, so their values come mostly from the model's own equations rather than from observations. (The model's simulated copies of the economy disagree about them almost as much with the data as without it: a spread ratio between 0.8 and 1.2.)
- Quantities the data make the model less sure about, not more: its simulated copies of the economy disagree more once the data are used (a spread ratio above 1.2, shown beside each). This usually means something in the estimation needs fixing.
