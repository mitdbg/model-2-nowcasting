<!-- Evaluation › Observations against the model, for forecast 95b8660e-19a8-5f67-bd12-40e75a011154; the page: https://mitdbg.github.io/model-2-nowcasting/eval_observations.html?set=95b8660e-19a8-5f67-bd12-40e75a011154; inputs bf907d63d74fb148 -->

World shown  5 of 5 worlds in this bundle

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Observations against the model

For every observation it uses (a company's revenue, a plant's output, a published price), the model predicts what the observation should read, and gives a range: its own uncertainty plus the observation's noise. A model that describes the data well has most observations inside that range. This is a weaker test than forecasts against later estimates: the model has already used these observations to correct itself, so it is checked on data it has seen.

Sector Entity Observation

the model's predictionits range: the model's uncertainty plus the observation's noise (90%)an observation inside the rangeoutside it

Acme Birmingham Mini-mill: 93 of 95 list price observations fall inside the range.

### Does the range hold the observations?

94 of every 100

observations fell inside the model's 90% range, out of 18,422.

A well-sized 90% range holds about 90. Holding more is expected here, because the model has already used these observations to correct itself.

### How close is the prediction?

32% of the way to the edge

The typical observation sits that far from the middle of its range toward the edge.

predictionedge of the 90% range

With a well-sized range it would be about 41% (dashed mark). Closer is not better: the model has seen these observations, and a fit much tighter than that can mean it chases their noise.

## By kind and by sector

The same two questions for each kind of observation and each sector: how many of every 100 fall in the range, and how close the typical one sits (as a share of the way to the edge). The verdict allows for chance: with few observations the share wanders far from 90 by luck alone, so only a large departure counts, and with very few even 100 of 100 cannot be told apart from a well-sized range ("too few to tell"). Hover a verdict for its reasoning. Yes/no observations (whether a satellite image shows activity) have no range and are not counted.

### By kind of observation

kind | in range  | how close  | count |

Book-to-bill | 96/100 | 27%  | 217 | generous

Capacity announced | 83/100 | 41%  | 1,287 | misses too many

Capacity offered | 100/100 | 22%  | 608 | generous

Capacity under construction | 90/100 | 39%  | 1,287 | about right

Census shipments | 85/100 | 41%  | 159 | misses too many

Emissions | 95/100 | 31%  | 282 | generous

Employment | 97/100 | 26%  | 954 | generous

Exports | 100/100 | 41%  | 35 | too few to tell

Finished inventory | 85/100 | 54%  | 783 | misses too many

Input inventory | 95/100 | 33%  | 93 | about right

List price | 96/100 | 29%  | 1,045 | generous

Load factor | 91/100 | 37%  | 791 | about right

Margin price index | 95/100 | 28%  | 94 | about right

Market vacancy | 90/100 | 45%  | 31 | too few to tell

Occupancy | 99/100 | 33%  | 132 | generous

Order book | 98/100 | 25%  | 498 | generous

Price | 98/100 | 28%  | 1,762 | generous

Production | 95/100 | 32%  | 1,944 | generous

Quoted lead time | 94/100 | 32%  | 1,045 | generous

Rent churn | 92/100 | 40%  | 62 | about right

Revenue | 96/100 | 28%  | 1,488 | generous

Satellite activity index | 95/100 | 34%  | 2,375 | generous

Sector inventories | 42/100 | 100%  | 94 | misses too many

Signed not commenced | 100/100 | 27%  | 62 | generous

Stated capacity | 99/100 | 15%  | 345 | generous

Traffic | 95/100 | 27%  | 949 | generous

### By sector

sector | in range  | how close  | count |

Airlines | 97/100 | 26%  | 1,553 | generous

Autos | 97/100 | 32%  | 1,598 | generous

Chemicals | 98/100 | 25%  | 1,099 | generous

Data centers | 96/100 | 25%  | 1,057 | generous

Food | 98/100 | 26%  | 828 | generous

Hospitals | 99/100 | 25%  | 296 | generous

Hotels | 95/100 | 33%  | 1,761 | generous

Housing | 97/100 | 30%  | 1,265 | generous

Machinery | 94/100 | 25%  | 953 | generous

Oil and gas | 84/100 | 50%  | 3,191 | misses too many

Retail | 95/100 | 30%  | 869 | generous

Semiconductors | 97/100 | 29%  | 1,416 | generous

Steel | 96/100 | 30%  | 2,071 | generous

Wholesale | 81/100 | 38%  | 465 | misses too many
