<!-- Evaluation › Observations against the model, for forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e; the page: https://mitdbg.github.io/model-2-nowcasting/eval_observations.html?set=0c0a014b-d739-5e72-95a6-0b4ec4f3753e; inputs 4de34bd7c0ce48e0 -->

World shown World seed 20261115 (the bundle's only world)

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# Observations against the model

For every observation it uses (a company's revenue, a plant's output, a published price), the model predicts what the observation should read, and gives a range: its own uncertainty plus the observation's noise. A model that describes the data well has most observations inside that range. This is a weaker test than forecasts against later estimates: the model has already used these observations to correct itself, so it is checked on data it has seen.

Sector Entity Observation

the model's predictionits range: the model's uncertainty plus the observation's noise (90%)an observation inside the rangeoutside it

Acme Birmingham Mini-mill: 86 of 95 list price observations fall inside the range.

### Does the range hold the observations?

95 of every 100

observations fell inside the model's 90% range, out of 18,428.

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

Book-to-bill | 95/100 | 32%  | 217 | generous

Capacity announced | 99/100 | 20%  | 1,287 | generous

Capacity offered | 100/100 | 20%  | 608 | generous

Capacity under construction | 94/100 | 37%  | 1,287 | generous

Census shipments | 89/100 | 36%  | 159 | about right

Emissions | 94/100 | 31%  | 282 | generous

Employment | 97/100 | 27%  | 954 | generous

Exports | 94/100 | 23%  | 35 | too few to tell

Finished inventory | 71/100 | 58%  | 783 | misses too many

Input inventory | 97/100 | 31%  | 93 | generous

List price | 94/100 | 34%  | 1,045 | generous

Load factor | 94/100 | 34%  | 791 | generous

Market vacancy | 90/100 | 38%  | 31 | too few to tell

Occupancy | 97/100 | 31%  | 132 | generous

Order book | 95/100 | 20%  | 498 | generous

Price | 98/100 | 27%  | 1,857 | generous

Production | 98/100 | 29%  | 1,944 | generous

Quoted lead time | 95/100 | 31%  | 1,045 | generous

Rent churn | 94/100 | 35%  | 62 | about right

Revenue | 98/100 | 26%  | 1,488 | generous

Satellite activity index | 95/100 | 33%  | 2,375 | generous

Sector inventories | 4/100 | 100%  | 94 | misses too many

Signed not commenced | 94/100 | 34%  | 62 | about right

Stated capacity | 99/100 | 18%  | 350 | generous

Traffic | 96/100 | 28%  | 949 | generous

### By sector

sector | in range  | how close  | count |

Airlines | 98/100 | 24%  | 1,553 | generous

Autos | 96/100 | 30%  | 1,598 | generous

Chemicals | 96/100 | 29%  | 1,099 | generous

Data centers | 97/100 | 26%  | 1,057 | generous

Food | 99/100 | 24%  | 828 | generous

Hospitals | 97/100 | 28%  | 296 | generous

Hotels | 96/100 | 31%  | 1,761 | generous

Housing | 98/100 | 27%  | 1,265 | generous

Machinery | 94/100 | 28%  | 953 | generous

Oil and gas | 94/100 | 32%  | 3,191 | generous

Retail | 88/100 | 37%  | 869 | misses too many

Semiconductors | 95/100 | 26%  | 1,416 | generous

Steel | 95/100 | 31%  | 2,076 | generous

Wholesale | 67/100 | 49%  | 466 | misses too many
