<!-- Evaluation › Observations against the model, for forecast b653c9a8-4454-5e3d-8a00-0a530afd83a0; the page: https://mitdbg.github.io/model-2-nowcasting/eval_observations.html?set=b653c9a8-4454-5e3d-8a00-0a530afd83a0; inputs 7790e88d0391c79f -->

World shown World seed 20261107 (the bundle's only world)

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Observations against the model

For every observation it uses (a company's revenue, a plant's output, a published price), the model predicts what the observation should read, and gives a range: its own uncertainty plus the observation's noise. A model that describes the data well has most observations inside that range. This is a weaker test than forecasts against later estimates: the model has already used these observations to correct itself, so it is checked on data it has seen.

Sector Entity Observation

the model's predictionits range: the model's uncertainty plus the observation's noise (90%)an observation inside the rangeoutside it

Acme Birmingham Mini-mill: 93 of 95 list price observations fall inside the range.

### Does the range hold the observations?

95 of every 100

observations fell inside the model's 90% range, out of 18,338.

A well-sized 90% range holds about 90. Holding more is expected here, because the model has already used these observations to correct itself.

### How close is the prediction?

31% of the way to the edge

The typical observation sits that far from the middle of its range toward the edge.

predictionedge of the 90% range

With a well-sized range it would be about 41% (dashed mark). Closer is not better: the model has seen these observations, and a fit much tighter than that can mean it chases their noise.

## By kind and by sector

The same two questions for each kind of observation and each sector: how many of every 100 fall in the range, and how close the typical one sits (as a share of the way to the edge). The verdict allows for chance: with few observations the share wanders far from 90 by luck alone, so only a large departure counts, and with very few even 100 of 100 cannot be told apart from a well-sized range ("too few to tell"). Hover a verdict for its reasoning. Yes/no observations (whether a satellite image shows activity) have no range and are not counted.

### By kind of observation

kind | in range  | how close  | count |

Book-to-bill | 96/100 | 31%  | 217 | generous

Capacity announced | 93/100 | 31%  | 1,287 | generous

Capacity offered | 100/100 | 22%  | 608 | generous

Capacity under construction | 93/100 | 37%  | 1,287 | generous

Census shipments | 78/100 | 44%  | 160 | misses too many

Emissions | 97/100 | 26%  | 282 | generous

Employment | 97/100 | 29%  | 960 | generous

Exports | 100/100 | 26%  | 35 | too few to tell

Finished inventory | 80/100 | 44%  | 783 | misses too many

Input inventory | 98/100 | 27%  | 93 | generous

List price | 96/100 | 32%  | 1,045 | generous

Load factor | 92/100 | 38%  | 791 | generous

Market vacancy | 90/100 | 44%  | 31 | too few to tell

Occupancy | 99/100 | 29%  | 132 | generous

Order book | 96/100 | 27%  | 498 | generous

Price | 98/100 | 27%  | 1,762 | generous

Production | 97/100 | 30%  | 1,944 | generous

Quoted lead time | 93/100 | 34%  | 1,045 | generous

Rent churn | 87/100 | 42%  | 62 | about right

Revenue | 97/100 | 27%  | 1,488 | generous

Satellite activity index | 96/100 | 34%  | 2,375 | generous

Sector inventories | 43/100 | 98%  | 94 | misses too many

Signed not commenced | 97/100 | 37%  | 62 | about right

Stated capacity | 98/100 | 15%  | 348 | generous

Traffic | 95/100 | 27%  | 949 | generous

### By sector

sector | in range  | how close  | count |

Airlines | 96/100 | 26%  | 1,553 | generous

Autos | 94/100 | 31%  | 1,598 | generous

Chemicals | 97/100 | 28%  | 1,099 | generous

Data centers | 96/100 | 28%  | 1,057 | generous

Food | 98/100 | 24%  | 828 | generous

Hospitals | 98/100 | 28%  | 296 | generous

Hotels | 95/100 | 33%  | 1,761 | generous

Housing | 98/100 | 28%  | 1,272 | generous

Machinery | 93/100 | 33%  | 953 | generous

Oil and gas | 90/100 | 39%  | 3,191 | about right

Retail | 95/100 | 31%  | 869 | generous

Semiconductors | 96/100 | 28%  | 1,416 | generous

Steel | 97/100 | 31%  | 2,074 | generous

Wholesale | 79/100 | 42%  | 371 | misses too many
