<!-- Evaluation › Observations against the model, for forecast 976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; the page: https://mitdbg.github.io/model-2-nowcasting/eval_observations.html?set=976debf3-7f2a-5e1a-aec0-e24ae8ea99d3 -->

# Observations against the model✎

For every observation it uses (a company's revenue, a plant's output, a published price), the model predicts what the observation should read, and gives a range: its own uncertainty plus the observation's noise. A model that describes the data well has most observations inside that range. This is a weaker test than forecasts against later estimates: the model has already used these observations to correct itself, so it is checked on data it has seen.

Sector Entity Observation

the model's predictionits range: the model's uncertainty plus the observation's noise (90%)an observation inside the rangeoutside it

Acme Birmingham Mini-mill: 92 of 95 list price observations fall inside the range.

### Does the range hold the observations?

96 of every 100

observations fell inside the model's 90% range, out of 18,339.

A well-sized 90% range holds about 90. Holding more is expected here, because the model has already used these observations to correct itself.

### How close is the prediction?

29% of the way to the edge

The typical observation sits that far from the middle of its range toward the edge.

predictionedge of the 90% range

With a well-sized range it would be about 41% (dashed mark). Closer is not better: the model has seen these observations, and a fit much tighter than that can mean it chases their noise.

## By kind and by sector✎

The same two questions for each kind of observation and each sector: how many of every 100 fall in the range, and how close the typical one sits (as a share of the way to the edge). The verdict allows for chance: with few observations the share wanders far from 90 by luck alone, so only a large departure counts, and with very few even 100 of 100 cannot be told apart from a well-sized range ("too few to tell"). Hover a verdict for its reasoning. Yes/no observations (whether a satellite image shows activity) have no range and are not counted.

### By kind of observation

kind | in range  | how close  | count |  |

Book-to-bill | 95/100 | 27%  | 217 | generous | ✎

Capacity announced | 99/100 | 23%  | 1,287 | generous | ✎

Capacity offered | 99/100 | 21%  | 608 | generous | ✎

Capacity under construction | 96/100 | 31%  | 1,287 | generous | ✎

Census shipments | 88/100 | 35%  | 160 | about right | ✎

Emissions | 94/100 | 31%  | 282 | generous | ✎

Employment | 97/100 | 26%  | 960 | generous | ✎

Exports | 97/100 | 24%  | 35 | too few to tell | ✎

Finished inventory | 84/100 | 44%  | 783 | misses too many | ✎

Input inventory | 94/100 | 34%  | 93 | about right | ✎

List price | 91/100 | 33%  | 1,045 | about right | ✎

Load factor | 91/100 | 32%  | 791 | about right | ✎

Market vacancy | 87/100 | 43%  | 31 | too few to tell | ✎

Occupancy | 95/100 | 29%  | 132 | about right | ✎

Order book | 95/100 | 29%  | 498 | generous | ✎

Price | 99/100 | 27%  | 1,762 | generous | ✎

Production | 97/100 | 29%  | 1,944 | generous | ✎

Quoted lead time | 96/100 | 29%  | 1,045 | generous | ✎

Rent churn | 90/100 | 47%  | 62 | about right | ✎

Revenue | 97/100 | 26%  | 1,488 | generous | ✎

Satellite activity index | 95/100 | 32%  | 2,375 | generous | ✎

Sector inventories | 97/100 | 17%  | 94 | generous | ✎

Signed not commenced | 95/100 | 32%  | 62 | about right | ✎

Stated capacity | 98/100 | 16%  | 349 | generous | ✎

Traffic | 95/100 | 28%  | 949 | generous | ✎

### By sector

sector | in range  | how close  | count |  |

Airlines | 96/100 | 25%  | 1,553 | generous | ✎

Autos | 93/100 | 32%  | 1,598 | generous | ✎

Chemicals | 97/100 | 30%  | 1,099 | generous | ✎

Data centers | 96/100 | 26%  | 1,057 | generous | ✎

Food | 98/100 | 27%  | 828 | generous | ✎

Hospitals | 97/100 | 26%  | 296 | generous | ✎

Hotels | 95/100 | 30%  | 1,761 | generous | ✎

Housing | 97/100 | 26%  | 1,265 | generous | ✎

Machinery | 85/100 | 41%  | 953 | misses too many | ✎

Oil and gas | 96/100 | 29%  | 3,198 | generous | ✎

Retail | 97/100 | 29%  | 869 | generous | ✎

Semiconductors | 96/100 | 28%  | 1,416 | generous | ✎

Steel | 97/100 | 30%  | 2,075 | generous | ✎

Wholesale | 98/100 | 23%  | 371 | generous | ✎
