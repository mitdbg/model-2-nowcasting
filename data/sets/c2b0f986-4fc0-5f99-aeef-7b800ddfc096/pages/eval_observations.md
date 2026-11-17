<!-- Evaluation › Observations against the model, for forecast c2b0f986-4fc0-5f99-aeef-7b800ddfc096; the page: https://mitdbg.github.io/model-2-nowcasting/eval_observations.html?set=c2b0f986-4fc0-5f99-aeef-7b800ddfc096; inputs 0210ab5521bcd6f7 -->

World shown  5 of 5 worlds in this bundle

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Observations against the model

For every observation it uses (a company's revenue, a plant's output, a published price), the model predicts what the observation should read, and gives a range: its own uncertainty plus the observation's noise. A model that describes the data well has most observations inside that range. This is a weaker test than forecasts against later estimates: the model has already used these observations to correct itself, so it is checked on data it has seen.

Sector Entity Observation

the model's predictionits range: the model's uncertainty plus the observation's noise (90%)an observation inside the rangeoutside it

Acme Birmingham Mini-mill: 93 of 95 list price observations fall inside the range.

### Does the range hold the observations?

96 of every 100

observations fell inside the model's 90% range, out of 18,427.

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

Capacity announced | 100/100 | 21%  | 1,287 | generous

Capacity offered | 99/100 | 17%  | 608 | generous

Capacity under construction | 95/100 | 34%  | 1,287 | generous

Census shipments | 88/100 | 40%  | 160 | about right

Emissions | 97/100 | 29%  | 282 | generous

Employment | 97/100 | 25%  | 960 | generous

Exports | 94/100 | 30%  | 35 | too few to tell

Finished inventory | 90/100 | 43%  | 783 | about right

Input inventory | 99/100 | 23%  | 93 | generous

List price | 94/100 | 32%  | 1,045 | generous

Load factor | 91/100 | 36%  | 791 | about right

Margin price index | 97/100 | 34%  | 94 | generous

Market vacancy | 90/100 | 41%  | 31 | too few to tell

Occupancy | 98/100 | 25%  | 132 | generous

Order book | 94/100 | 30%  | 498 | generous

Price | 98/100 | 28%  | 1,762 | generous

Production | 97/100 | 28%  | 1,944 | generous

Quoted lead time | 92/100 | 35%  | 1,045 | generous

Rent churn | 92/100 | 48%  | 62 | about right

Revenue | 98/100 | 26%  | 1,488 | generous

Satellite activity index | 96/100 | 32%  | 2,375 | generous

Sector inventories | 98/100 | 30%  | 94 | generous

Signed not commenced | 97/100 | 34%  | 62 | about right

Stated capacity | 100/100 | 17%  | 343 | generous

Traffic | 95/100 | 28%  | 949 | generous

### By sector

sector | in range  | how close  | count |

Airlines | 96/100 | 24%  | 1,553 | generous

Autos | 96/100 | 28%  | 1,598 | generous

Chemicals | 97/100 | 27%  | 1,099 | generous

Data centers | 97/100 | 27%  | 1,057 | generous

Food | 97/100 | 28%  | 828 | generous

Hospitals | 98/100 | 21%  | 296 | generous

Hotels | 94/100 | 31%  | 1,761 | generous

Housing | 97/100 | 28%  | 1,265 | generous

Machinery | 92/100 | 37%  | 953 | about right

Oil and gas | 97/100 | 30%  | 3,191 | generous

Retail | 97/100 | 31%  | 869 | generous

Semiconductors | 94/100 | 28%  | 1,416 | generous

Steel | 96/100 | 30%  | 2,076 | generous

Wholesale | 97/100 | 26%  | 465 | generous
