<!-- Next Version › Current Problems, for forecast 976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; the page: https://mitdbg.github.io/model-2-nowcasting/next_problems.html?set=976debf3-7f2a-5e1a-aec0-e24ae8ea99d3 -->

# Current Problems

This analysis was written by an AI evaluator that saw only the Evaluation pages that need no ground truth. It had no access to the true values, the model's code, or how the model was developed. This analysis has not been human-reviewed.

Overall assessment. On the headline numbers the model looks sound: 94 of 100 later estimates fall inside the forecast range, the typical forecast gap is about 2.5%, and 91% of parameters are learned from data. Underneath, two sectors (Wholesale and Machinery) fail clearly. Several quantities, new orders and inventories above all, are set by the model's assumptions rather than by data, and its uncertainty is miscalibrated in both directions: too wide for most quantities, too narrow for capacity and some official statistics.

## Weakest sectors (weakest first)

# | Sector | Forecasts in range  | Forecast gap  | Observations in range  | Official statistics agreeing  | Worst official statistic  | Parameters learned  | Median sd ratio  | Mostly from the model  | Unsettled  | Note

1 | Wholesale | 76 (too narrow) | 12.4% | 98 (generous) | none published | – | 89% | 0.48 | Lead time; Load factor; Order book; Shipments; New orders | none | No official statistic to check against

2 | Machinery | 90 | 4.0% | 85 (misses too many) | 0 of 2 | Production: 0, 5.8% off (disagrees) | 89% | 0.50 | Input inventory | New orders 2.21 | List-price gap learned for no entity

3 | Retail | 94 (wider than needed) | 5.7% | 97 (generous) | 2 of 2 | Retail sales: 94, 3.3% off (agrees) | 91% | 0.38 | Lead time; Lost demand | Shipments 3.57; New orders 3.56; Order book 3.42; Load factor 3.25 | Capacity drift learned for 14% of entities

4 | Housing | 85 (too narrow) | 3.0% | 97 (generous) | 1 of 1 | Housing completions: 95, 0.4% off (agrees) | 93% | 0.42 | Input inventory; Finished inventory | New orders 4.20 | –

5 | Hospitals | 99 (wider than needed) | 1.2% | 97 (generous) | 1 of 2 | Employees: 63, 0.7% off (close, range too tight) | 87% | 0.49 | Lead time; New orders; Shipments; Order book | Lost demand 4.00 | Lowest share of parameters learned

6 | Hotels | 91 | 1.4% | 95 (generous) | 1 of 2 | Employees: 51, 0.9% off (close, range too tight) | 96% | 0.36 | New orders; Order book; Lead time; Shipments | Lost demand 1.41 | –

7 | Data centers | 98 (wider than needed) | 1.3% | 96 (generous) | none published | – | 92% | 0.40 | Overdue orders; Phantom orders; Lead time; Shipments; Order book | New orders 2.45 | Starting markup learned for 30% of entities; no official statistic

8 | Food | 89 | 3.3% | 98 (generous) | 1 of 2 | Utilization: 75, 0.7% off (close, range too tight) | 88% | 0.52 | Finished inventory; Input inventory; Unit cost | none | Highest median sd ratio

9 | Oil and gas | 94 (wider than needed) | 3.5% | 96 (generous) | 2 of 2 | Production: 93, 0.6% off (agrees) | 93% | 0.43 | New orders; Input inventory; Order book | Overdue orders 1.93 | –

10 | Autos | 98 (wider than needed) | 3.5% | 93 (generous) | 2 of 2 | Utilization: 89, 0.6% off (agrees) | 87% | 0.35 | Input inventory; Finished inventory | none | Capacity drift learned for no entity

Semiconductors, Steel, Airlines and Chemicals look strongest. Their forecast gaps run from 1.2% to 3.2%, and Semiconductors and Airlines have 100% of parameters informative (Semiconductors with the lowest median sd ratio, 0.21). Steel agrees with both official statistics, and most of their totals have spread ratios below 0.5. Even these sectors have weak spots: Chemicals' official statistics score only 74/100 and 81/100, Airlines has two ratios above 1.2, and Semiconductors' new orders sit at 1.31.

## Weakest hidden quantities (weakest first)

# | Quantity | Forecasts in range  | Forecast gap  | Sectors mostly from the model  | Unsettled sectors  | Note

1 | New orders | 97 (wider than needed) | 2.3% | 6 of 14: Steel; Hotels; Oil and gas; Hospitals; Chemicals; Wholesale | Housing 4.20; Retail 3.56; Data centers 2.45; Machinery 2.21; Airlines 1.46; Semiconductors 1.31 | Only Autos (0.66) and Food (0.63) are below 0.8

2 | Input inventory | 100 (wider than needed) | 3.0% | 8 of 8: Steel; Machinery; Housing; Oil and gas; Autos; Chemicals; Food; Semiconductors | none | Never pinned by data in any sector

3 | Capacity | 74 (too narrow) | 1.8% | 0 of 14 | none | Lowest hit rate of any quantity, though well pinned today

4 | Lost demand | 93 | 0.00 mo | 1 of 5: Retail | Hospitals 4.00; Hotels 1.41; Airlines 1.29 | Ratios range from wildly unsettled to near zero

5 | Lead time | 100 (wider than needed) | 7.2% | 5 of 14: Wholesale; Data centers; Hospitals; Hotels; Retail | none | Largest forecast gap of any quantity

6 | Finished inventory | 94 (wider than needed) | 0.10 mo | 3 of 10: Food; Housing; Autos | none | Only kind of observation that misses too many (84/100)

7 | Order book | 97 (wider than needed) | 3.2% | 5 of 14: Oil and gas; Hotels; Hospitals; Wholesale; Data centers | Retail 3.42 | –

8 | Shipments | 96 (wider than needed) | 1.7% | 4 of 14: Hospitals; Hotels; Data centers; Wholesale | Retail 3.57 | –

9 | Capacity announced | 100 (wider than needed) | 6.7% | 0 of 3 | none | Second-largest forecast gap

10 | Overdue / phantom orders | 99 (wider than needed) / 92 | 0.00 mo / 0.00 mo | Overdue orders: 1 of 9: Data centers / Phantom orders: 1 of 9: Data centers | Overdue orders: Oil and gas 1.93 / Phantom orders: none | The gap measure cannot separate good from bad

11 | Capacity in use | 83 | 0.5% | 0 of 1 | none | –

Output, price, utilization and unit cost are the best-determined quantities.

## Problems

### 1. Wholesale forecasts are far off and overconfident

ID aad7256c-6a72-42ff-8517-b172e4cb45d6

Evidence"Forecasts against later estimates" puts Wholesale at 76/100 with a 12.4% gap, labeled "too narrow." That is the lowest hit rate and largest gap of any sector, against 2.5% overall. On "Observations against the model," Wholesale is 98/100 at 23%, "generous." On "What the data pin down," five Wholesale totals sit at 0.86–1.04 and lost demand is 0.01. No official statistic covers it.

Why it mattersThe model fits the Wholesale data it has already seen very comfortably, yet its forecasts miss by about five times the typical amount and with false confidence.

Likely causesThe model may be tracking past data closely without capturing what drives Wholesale. Its order-flow totals may come mostly from assumptions that a year of new data then overturns.

ConfidenceHigh. Both the gap and the narrow range stand far from every other sector.

### 2. Machinery's entities do not add up to the official totals

ID a0753d04-e5eb-4d74-b0c2-e479f4fbaabd

EvidenceOn "Sector totals against official statistics," Machinery industrial production scores 0/100 with a 5.8% gap and capacity utilization scores 54/100 with a 1.6% gap. Both are labeled "disagrees," and these are the two largest gaps on that page. Machinery is the only sector that "misses too many" observations (85/100, 41%). Its list-price gap parameter is 0% informative, and its forecast gap is 4.0%.

Why it mattersThe page notes that the model is already pulled toward these official numbers, so a persistent miss means its picture of individual Machinery firms contradicts the published sector total.

Likely causesThe tracked Machinery firms may not represent the sector, units may be converted wrongly, or the firms' production behavior may be misdescribed.

ConfidenceHigh. 0 of 96 months cannot be chance.

### 3. New orders are not determined by data

ID 339d462d-153f-426e-8420-3a499e7f6ba5

EvidenceOn "What the data pin down," new orders are above 1.2 in six sectors (Housing 4.20, Retail 3.56, Data centers 2.45, Machinery 2.21, Airlines 1.46, Semiconductors 1.31) and at 0.86–1.03 in six more. On "Forecasts against later estimates," the same quantity scores 97/100 with a 2.3% gap.

Why it mattersNew orders lead future output. The good forecast score may only mean that the model repeats its own assumptions: the page warns that such totals "would look stable from one run to the next even if [they] were wrong."

Likely causesFew observations may bear on new orders directly. Its link to the order book and shipments may leave it hard to tell apart from them.

ConfidenceHigh. The pattern holds across 12 of 14 sectors.

### 4. The estimation is unsettled in Retail and for several individual quantities

ID 35221bca-5d8e-4e1b-bfda-b3dfb1c1b901

EvidenceOn "What the data pin down," Retail shows load factor 3.25, shipments 3.57, new orders 3.56 and order book 3.42. Elsewhere: Hospitals lost demand 4.00, Housing new orders 4.20, Oil and gas overdue orders 1.93, Hotels lost demand 1.41. Retail has the second-largest forecast gap (5.7%), and its official retail sales gap is 3.3%.

Why it mattersAdding data should never make the model less sure. When it does, those totals cannot be trusted either way.

Likely causesObservations may conflict with the model's structure, a quantity may be tied to the wrong observations, or the simulated copies may collapse and then reset.

ConfidenceMedium-high. The ratios are large, but how they are computed is not shown.

### 5. Capacity forecasts are overconfident, while capacity growth is poorly learned

ID 7b0c6ed4-b024-4807-8aac-472fe3d89c14

Evidence"Forecasts against later estimates" shows Capacity at 74/100, "too narrow," the lowest hit rate of any quantity. Yet every capacity spread ratio is 0.01–0.52. Capacity drift is 58 of 90 informative (median 0.74) and is the least informed parameter in several sectors (Autos 0%, Retail 14%, Wholesale 14%, Hotels 50%, Housing 50%).

Why it mattersThe model knows today's capacity well but not how it changes, and its forecast ranges do not admit this.

Likely causesThe range may reflect only the well-known starting level and not the uncertain drift. Drift may also change between as-of dates.

ConfidenceMedium-high.

### 6. The uncertainty ranges are miscalibrated in both directions

ID 67ccdbb6-ac59-4a7b-a0d2-f13d43825b34

EvidenceOn "Forecasts against later estimates," the overall hit rate is 94/100. Eleven of 18 quantities are "wider than needed," with input inventory, lead time, capacity announced and capacity under construction at 100/100, and Chemicals and Semiconductors also at 100/100. Against this, Capacity is at 74/100, Wholesale at 76/100 and Housing at 85/100. On "Sector totals against official statistics," the overall hit rate is 82/100, with gaps as small as 0.7% still outside the range.

Why it mattersA user cannot take a 90% range at face value. Most ranges overstate the risk and a few understate it, and the overall average hides both.

Likely causesUncertainty may be set the same way for quantities that behave very differently. The range from the simulated copies may not include model error.

ConfidenceMedium. Part of the excess width may be legitimate.

### 7. Ranges around sector totals are too tight against official statistics

ID feb41fc5-0e40-4219-aadf-b3696c6a97ea

EvidenceOn "Sector totals against official statistics," Hotels employees score 51/100 (0.9% gap), Hospitals employees 63/100 (0.7%), Chemicals utilization 74/100, Food utilization 75/100 and Chemicals production 81/100, all labeled "close, range too tight."

Why it mattersThe totals are nearly right, but the model claims more precision than it has, especially for employment.

Likely causesThe simulated copies may agree too closely when added up, perhaps because entity errors are assumed to be independent. The way employment relates to activity may be too rigid.

ConfidenceMedium. These are consistent across 96 months each.

### 8. Inventories are set mostly by assumption and fit observations poorly

ID 561e4aec-5aab-4fbb-b389-800a8db01b49

EvidenceOn "What the data pin down," input inventory is 0.94–1.00 in all eight sectors that carry it, and finished inventory is Food 1.17, Housing 0.97 and Autos 0.85. On "Observations against the model," finished inventory is the only kind of observation labeled "misses too many" (84/100, 44%), even though the model has already seen these observations. On "Forecasts against later estimates," input inventory scores 100/100.

Why it mattersInventory swings signal turning points. Here the model neither learns input inventory nor matches the finished-inventory data it was given.

Likely causesInput inventory may have no direct observations. The model's account of how finished inventory builds up and runs down may conflict with what firms report.

ConfidenceHigh for input inventory, medium for finished inventory.

### 9. Order flow in service sectors comes from the model, not from data

ID f4c904b5-8c69-46d8-bcc7-92190c03a493

EvidenceOn "What the data pin down," Data centers show overdue orders, phantom orders and lead time all at exactly 1.00, with shipments at 0.93 and order book at 0.88. Hospitals and Hotels show shipments, order book and lead time at 0.94–0.99, and Wholesale shows 0.86–1.04.

Why it mattersIn these sectors the order side of the forecast is close to pure assumption, whatever the forecast scores suggest.

Likely causesThese sectors may have few observations that bear on orders. The order-book structure may fit them poorly.

ConfidenceMedium-high. Ratios of exactly 1.00 suggest that no data reach these quantities at all.

### 10. Some parameters lean on priors, and the 91% figure may flatter

ID ecdd15c9-06b7-4339-8386-96f91d2e5f2f

Evidence"What the data pin down" (by parameter) shows emissions slope at 26 of 47 informative (median 0.78), starting markup at 74 of 115, capacity drift at 58 of 90 and list-price gap at 7 of 11. The by-sector view shows Hospitals at 86%, Autos at 87% and Food with a median of 0.52. The page notes that some narrowing "comes from the pull toward the entity's group average."

Why it mattersParameters that the data never shaped carry the prior's guesses into forecasts, and pooling across firms can make weakly observed firms look well learned.

Likely causesThere may be too few observations on emissions, early-period prices and list prices. The well-determined parameters are mostly starting levels (0.04–0.05).

ConfidenceMedium.

### 11. Forecast error is mostly present already at the current month

ID ac38cf24-91b3-485e-9cfb-a2d054e09891

EvidenceOn "Forecasts against later estimates," the gap is 2.1% this month, 2.4% at 1–6 months ahead and 2.7% at 7–12 months ahead.

Why it mattersThe model's view of the present moves almost as much with a year of new data as its view of next year does, so its nowcast (its estimate of the current month) is less settled than its ranges suggest.

Likely causesData for recent months may arrive late or be sparse. The model may also revise the past when new data arrive.

ConfidenceLow-medium. The later estimate is not the truth.

Connections. Problems 3, 8 and 9 look like one issue: quantities with spread ratios near 1 are filled in by the model's equations. In those places, "Forecasts against later estimates" mostly checks the model against itself, which may explain the generous 100/100 scores for input inventory and lead time (problem 6). Problems 1, 2 and 4 combine poor fit or unsettled estimation with order-flow quantities that are weakly determined, which suggests that the order side of the structure fits Wholesale, Machinery and Retail poorly. Problems 5 and 7 both describe ranges built from the spread of the model's simulated copies that are too narrow where levels are well known, which points to a single way of measuring uncertainty that leaves out model error.

What the pages cannot tell me:

- How these estimates compare with the true values. Every test here is against data the model used, official statistics it was pulled toward, or its own later estimate.

- Which observations, if any, feed each hidden quantity, especially new orders and the inventories.

- Whether the cells in the sector-totals table are aligned correctly. Load factor and lost demand appear for Retail, Wholesale and Hospitals.

- How forecast results vary across the three as-of dates, rather than pooled.

- What the "0.00 mo" gaps for lost demand, overdue orders and phantom orders mean in size.

Definitions behind the page's (i) marks:
- How often the model's range caught the value it was checked against. The model gives a range it expects to hold the value 90 times out of 100, so about 90 is ideal. Much lower means the model is too sure of itself (too narrow, misses too many); much higher means its ranges are wider than they need to be (wider than needed, generous).
- How far off the model's best guess usually was, in percent (or in months of output, mo, or percentage points, pts). Forecasts are compared with the model's own estimate a year later, since the true value is not known. Smaller is better.
- Government statistics that measure a whole sector, such as industrial production, capacity utilization or employment. A statistic agrees when it falls inside the model's range about as often as it should; "close, range too tight" means the model is off by less than 1% but is too sure of itself.
- The share of the sector's parameters (the settings the model estimates for each business) that the data actually helped pin down, rather than leaving them near their starting guess. Higher is better.
- How much the data narrowed the uncertainty about a typical parameter: 0 means the data pinned it down exactly, 1 means the data told the model nothing. This is the middle value across the sector's parameters. Lower is better.
- Quantities the data barely affect, so their values come mostly from the model's own equations rather than from observations. (The model's simulated copies of the economy disagree about them almost as much with the data as without it: a spread ratio between 0.8 and 1.2.)
- Quantities the data make the model less sure about, not more: its simulated copies of the economy disagree more once the data are used (a spread ratio above 1.2, shown beside each). This usually means something in the estimation needs fixing.
