<!-- Evaluation › Observations against the model, for forecast c288b02e-1d8d-5a88-89a8-2b7bb3a5ca84; the page: https://mitdbg.github.io/model-2-nowcasting/eval_observations.html?set=c288b02e-1d8d-5a88-89a8-2b7bb3a5ca84; inputs 9a28e2dbf44800b6 -->

World shown  5 of 5 worlds in this bundle

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Observations against the model

For every observation it uses (a company's revenue, a plant's output, a published price), the model predicts what the observation should read, and gives a range: its own uncertainty plus the observation's noise. A model that describes the data well has most observations inside that range. This is a weaker test than forecasts against later estimates: the model has already used these observations to correct itself, so it is checked on data it has seen.

Sector Entity Observation

the model's predictionits range: the model's uncertainty plus the observation's noise (90%)an observation inside the rangeoutside it

Acme Birmingham Mini-mill: 92 of 95 list price observations fall inside the range.

### Does the range hold the observations?

94 of every 100

observations fell inside the model's 90% range, out of 18,429.

A well-sized 90% range holds about 90. Holding more is expected here, because the model has already used these observations to correct itself.

### How close is the prediction?

30% of the way to the edge

The typical observation sits that far from the middle of its range toward the edge.

predictionedge of the 90% range

With a well-sized range it would be about 41% (dashed mark). Closer is not better: the model has seen these observations, and a fit much tighter than that can mean it chases their noise.

## By kind and by sector

The same two questions for each kind of observation and each sector: how many of every 100 fall in the range, and how close the typical one sits (as a share of the way to the edge). The verdict allows for chance: with few observations the share wanders far from 90 by luck alone, so only a large departure counts, and with very few even 100 of 100 cannot be told apart from a well-sized range ("too few to tell"). Hover a verdict for its reasoning. Yes/no observations (whether a satellite image shows activity) have no range and are not counted.

### By kind of observation

kind | in range  | how close  | count |

Book-to-bill | 94/100 | 28%  | 217 | about right

Capacity announced | 96/100 | 26%  | 1,287 | generous

Capacity offered | 100/100 | 21%  | 608 | generous

Capacity under construction | 95/100 | 32%  | 1,287 | generous

Census shipments | 91/100 | 31%  | 160 | about right

Emissions | 98/100 | 25%  | 282 | generous

Employment | 93/100 | 30%  | 960 | generous

Exports | 94/100 | 36%  | 35 | too few to tell

Finished inventory | 89/100 | 39%  | 783 | about right

Input inventory | 99/100 | 27%  | 93 | generous

List price | 94/100 | 31%  | 1,045 | generous

Load factor | 92/100 | 35%  | 791 | generous

Margin price index | 98/100 | 29%  | 94 | generous

Market vacancy | 90/100 | 41%  | 31 | too few to tell

Occupancy | 99/100 | 23%  | 132 | generous

Order book | 90/100 | 27%  | 498 | about right

Price | 98/100 | 27%  | 1,762 | generous

Production | 96/100 | 29%  | 1,944 | generous

Quoted lead time | 91/100 | 38%  | 1,045 | about right

Rent churn | 87/100 | 38%  | 62 | about right

Revenue | 98/100 | 24%  | 1,488 | generous

Satellite activity index | 93/100 | 37%  | 2,375 | generous

Sector inventories | 32/100 | 100%  | 94 | misses too many

Signed not commenced | 95/100 | 32%  | 62 | about right

Stated capacity | 98/100 | 16%  | 345 | generous

Traffic | 92/100 | 26%  | 949 | generous

### By sector

sector | in range  | how close  | count |

Airlines | 96/100 | 26%  | 1,553 | generous

Autos | 97/100 | 27%  | 1,598 | generous

Chemicals | 98/100 | 26%  | 1,099 | generous

Data centers | 96/100 | 27%  | 1,057 | generous

Food | 97/100 | 25%  | 828 | generous

Hospitals | 98/100 | 22%  | 296 | generous

Hotels | 94/100 | 30%  | 1,761 | generous

Housing | 93/100 | 34%  | 1,272 | generous

Machinery | 81/100 | 52%  | 953 | misses too many

Oil and gas | 92/100 | 36%  | 3,191 | generous

Retail | 96/100 | 30%  | 869 | generous

Semiconductors | 99/100 | 20%  | 1,416 | generous

Steel | 96/100 | 31%  | 2,071 | generous

Wholesale | 83/100 | 37%  | 465 | misses too many
