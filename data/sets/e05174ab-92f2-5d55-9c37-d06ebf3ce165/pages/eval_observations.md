<!-- Evaluation › Observations against the model, for forecast e05174ab-92f2-5d55-9c37-d06ebf3ce165; the page: https://mitdbg.github.io/model-2-nowcasting/eval_observations.html?set=e05174ab-92f2-5d55-9c37-d06ebf3ce165; inputs 25cf7b082a8aeb55 -->

World shown  5 of 5 worlds in this bundle

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Observations against the model

For every observation it uses (a company's revenue, a plant's output, a published price), the model predicts what the observation should read, and gives a range: its own uncertainty plus the observation's noise. A model that describes the data well has most observations inside that range. This is a weaker test than forecasts against later estimates: the model has already used these observations to correct itself, so it is checked on data it has seen.

Sector Entity Observation

the model's predictionits range: the model's uncertainty plus the observation's noise (90%)an observation inside the rangeoutside it

Acme Birmingham Mini-mill: 95 of 95 list price observations fall inside the range.

### Does the range hold the observations?

95 of every 100

observations fell inside the model's 90% range, out of 18,438.

A well-sized 90% range holds about 90. Holding more is expected here, because the model has already used these observations to correct itself.

### How close is the prediction?

29% of the way to the edge

The typical observation sits that far from the middle of its range toward the edge.

predictionedge of the 90% range

With a well-sized range it would be about 41% (dashed mark). Closer is not better: the model has seen these observations, and a fit much tighter than that can mean it chases their noise.

## By kind and by sector

The same two questions for each kind of observation and each sector: how many of every 100 fall in the range, and how close the typical one sits (as a share of the way to the edge). The verdict allows for chance: with few observations the share wanders far from 90 by luck alone, so only a large departure counts, and with very few even 100 of 100 cannot be told apart from a well-sized range ("too few to tell"). Hover a verdict for its reasoning. Yes/no observations (whether a satellite image shows activity) have no range and are not counted.

### By kind of observation

kind | in range  | how close  | count |

Book-to-bill | 91/100 | 27%  | 217 | about right

Capacity announced | 95/100 | 23%  | 1,287 | generous

Capacity offered | 100/100 | 19%  | 608 | generous

Capacity under construction | 93/100 | 35%  | 1,287 | generous

Census shipments | 79/100 | 38%  | 161 | misses too many

Emissions | 96/100 | 30%  | 282 | generous

Employment | 93/100 | 31%  | 966 | generous

Exports | 91/100 | 34%  | 35 | too few to tell

Finished inventory | 90/100 | 41%  | 783 | about right

Input inventory | 95/100 | 35%  | 93 | about right

List price | 97/100 | 25%  | 1,045 | generous

Load factor | 93/100 | 36%  | 791 | generous

Margin price index | 95/100 | 28%  | 94 | about right

Market vacancy | 90/100 | 48%  | 31 | too few to tell

Occupancy | 99/100 | 31%  | 132 | generous

Order book | 93/100 | 22%  | 498 | generous

Price | 97/100 | 26%  | 1,762 | generous

Production | 98/100 | 28%  | 1,944 | generous

Quoted lead time | 88/100 | 39%  | 1,045 | misses too many

Rent churn | 92/100 | 44%  | 62 | about right

Revenue | 96/100 | 26%  | 1,488 | generous

Satellite activity index | 94/100 | 36%  | 2,375 | generous

Sector inventories | 85/100 | 43%  | 94 | about right

Signed not commenced | 98/100 | 31%  | 62 | generous

Stated capacity | 99/100 | 16%  | 347 | generous

Traffic | 92/100 | 27%  | 949 | generous

### By sector

sector | in range  | how close  | count |

Airlines | 97/100 | 25%  | 1,553 | generous

Autos | 96/100 | 25%  | 1,598 | generous

Chemicals | 98/100 | 28%  | 1,099 | generous

Data centers | 96/100 | 26%  | 1,057 | generous

Food | 98/100 | 26%  | 828 | generous

Hospitals | 99/100 | 27%  | 296 | generous

Hotels | 96/100 | 31%  | 1,761 | generous

Housing | 89/100 | 28%  | 1,272 | about right

Machinery | 89/100 | 38%  | 953 | about right

Oil and gas | 94/100 | 30%  | 3,198 | generous

Retail | 96/100 | 33%  | 869 | generous

Semiconductors | 89/100 | 33%  | 1,416 | about right

Steel | 95/100 | 31%  | 2,073 | generous

Wholesale | 94/100 | 29%  | 465 | generous
