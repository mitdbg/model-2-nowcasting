<!-- Evaluation › Observations against the model, for forecast 9913b093-0e9e-570c-8a80-85802c3e6197; the page: https://mitdbg.github.io/model-2-nowcasting/eval_observations.html?set=9913b093-0e9e-570c-8a80-85802c3e6197; inputs 1b7ce2caa37e075a -->

World shown  5 of 5 worlds in this bundle

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Observations against the model

For every observation it uses (a company's revenue, a plant's output, a published price), the model predicts what the observation should read, and gives a range: its own uncertainty plus the observation's noise. A model that describes the data well has most observations inside that range. This is a weaker test than forecasts against later estimates: the model has already used these observations to correct itself, so it is checked on data it has seen.

Sector Entity Observation

the model's predictionits range: the model's uncertainty plus the observation's noise (90%)an observation inside the rangeoutside it

Acme Birmingham Mini-mill: 95 of 95 list price observations fall inside the range.

### Does the range hold the observations?

96 of every 100

observations fell inside the model's 90% range, out of 18,425.

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

Book-to-bill | 96/100 | 28%  | 217 | generous

Capacity announced | 97/100 | 22%  | 1,287 | generous

Capacity offered | 100/100 | 20%  | 608 | generous

Capacity under construction | 94/100 | 34%  | 1,287 | generous

Census shipments | 91/100 | 35%  | 159 | about right

Emissions | 95/100 | 26%  | 282 | generous

Employment | 98/100 | 28%  | 954 | generous

Exports | 97/100 | 32%  | 35 | too few to tell

Finished inventory | 83/100 | 58%  | 783 | misses too many

Input inventory | 96/100 | 34%  | 93 | about right

List price | 96/100 | 28%  | 1,045 | generous

Load factor | 90/100 | 36%  | 791 | about right

Margin price index | 99/100 | 23%  | 94 | generous

Market vacancy | 90/100 | 40%  | 31 | too few to tell

Occupancy | 97/100 | 26%  | 132 | generous

Order book | 98/100 | 28%  | 498 | generous

Price | 99/100 | 25%  | 1,762 | generous

Production | 98/100 | 28%  | 1,944 | generous

Quoted lead time | 94/100 | 37%  | 1,045 | generous

Rent churn | 95/100 | 44%  | 62 | about right

Revenue | 98/100 | 25%  | 1,488 | generous

Satellite activity index | 95/100 | 35%  | 2,375 | generous

Sector inventories | 60/100 | 91%  | 94 | misses too many

Signed not commenced | 98/100 | 23%  | 62 | generous

Stated capacity | 97/100 | 14%  | 348 | generous

Traffic | 95/100 | 28%  | 949 | generous

### By sector

sector | in range  | how close  | count |

Airlines | 97/100 | 26%  | 1,553 | generous

Autos | 94/100 | 32%  | 1,598 | generous

Chemicals | 98/100 | 28%  | 1,099 | generous

Data centers | 96/100 | 26%  | 1,057 | generous

Food | 99/100 | 24%  | 828 | generous

Hospitals | 98/100 | 22%  | 296 | generous

Hotels | 95/100 | 30%  | 1,761 | generous

Housing | 96/100 | 28%  | 1,265 | generous

Machinery | 90/100 | 36%  | 953 | about right

Oil and gas | 96/100 | 31%  | 3,191 | generous

Retail | 90/100 | 35%  | 869 | about right

Semiconductors | 97/100 | 27%  | 1,416 | generous

Steel | 97/100 | 28%  | 2,074 | generous

Wholesale | 89/100 | 38%  | 465 | about right
