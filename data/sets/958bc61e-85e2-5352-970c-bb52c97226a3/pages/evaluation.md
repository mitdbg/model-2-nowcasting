<!-- Evaluation › What the data pin down, for forecast 958bc61e-85e2-5352-970c-bb52c97226a3; the page: https://mitdbg.github.io/model-2-nowcasting/evaluation.html?set=958bc61e-85e2-5352-970c-bb52c97226a3; inputs 5860421e04e7b251 -->

World shown World seed 20261117 (the bundle's only world)

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# What the data pin down

Before it sees any data, the model has a rough idea of each entity parameter: a prior, a range of plausible values. Fitting the model to the observations narrows that range. The sd ratio compares the two: the width of the range after fitting divided by its width before. A parameter is labeled

- Informative when its sd ratio is below 0.8: the data narrowed its range by at least a fifth;

- Uninformative when it is 0.8 or more: its estimate is about as uncertain as before, so it rests on the prior rather than on the data.

An example. The normal markup μ of Cascade Steel (Steel):
before the data (prior)

-0.0345 to 0.294 after fitting

0.0350 to 0.187
Ranges are 90% ranges. The fitted range is 0.46 times as wide as the prior's, so the sd ratio is 0.46 and the parameter is Informative.

Only tracked entities have their own parameters; representative entities take their group's averages. Part of the narrowing comes from the pull toward the entity's group average (L14), so a sparsely observed entity can look informative because it borrowed from similar entities. The stricter sd ratio removes that part: it divides the width after fitting by the width the parameter would have from its group average alone (the spread of entities around their group's average). Below 0.8, the entity's own observations narrowed its range beyond what its group already says. The two ratios differ only for the parameters pooled toward the group average; observation parameters and starting states have no group average, so their two ratios are the same.

1,408

entity parameters fitted

1,277

informative (91%)

131

uninformative (9%)

850

informative by the stricter ratio (60%)

## Entity parameters

By parameter By sector By entity Every parameter

Sector

parameter | meaning | entities | informative |  | median sd ratio  | informative, stricter | median stricter ratio

b (emissions) | Emissions slope: percent change in emissions per percent change in output. | 47 |   | 23 of 47 | 0.80 | 23 of 47 | 0.80

δ | Capacity drift: monthly change in capacity outside announced projects (L1). | 90 |   | 54 of 90 | 0.77 | 43 of 90 | 0.81

m0 | Starting markup: markup in the first month, log scale. | 115 |   | 74 of 115 | 0.59 | 74 of 115 | 0.59

c0 | Starting unit cost: unit cost in the first month, log scale. | 115 |   | 87 of 115 | 0.33 | 87 of 115 | 0.33

z0 | Starting utilization: utilization in the first month relative to normal, logit scale. | 10 |   | 9 of 10 | 0.47 | 9 of 10 | 0.47

listing gap | List-price gap: log list price minus log transaction price. | 11 |   | 10 of 11 | 0.53 | 10 of 11 | 0.53

α | Normal utilization: utilization in a month of normal demand, logit scale (L3). | 105 |   | 105 of 105 | 0.33 | 75 of 105 | 0.61

β | Demand response: how far utilization rises with demand pressure (L3). | 105 |   | 105 of 105 | 0.47 | 52 of 105 | 0.80

w | pass-through of input cost to unit cost (L4) | 115 |   | 115 of 115 | 0.45 | 12 of 115 | 0.94

μ | Normal markup: price over unit cost in a normal month, log scale (L5). | 115 |   | 115 of 115 | 0.46 | 11 of 115 | 0.97

õ | Order level: new orders relative to the level that keeps the order book steady, log scale (L6). | 115 |   | 115 of 115 | 0.20 | 101 of 115 | 0.53

βO | Order response: elasticity of new orders to real demand (L6). | 115 |   | 115 of 115 | 0.46 | 70 of 115 | 0.75

ℓ | Normal order-book cover: months of output the order book holds in a normal month (L8–L9). | 115 |   | 115 of 115 | 0.39 | 60 of 115 | 0.79

a (emissions) | Emissions level: log emissions at the reference output. | 47 |   | 47 of 47 | 0.03 | 47 of 47 | 0.03

k0 | Starting capacity: capacity in the first month, log scale. | 115 |   | 115 of 115 | 0.06 | 115 of 115 | 0.06

lead-time bias | Lead-time bias: quoted lead time over the model's lead time, log scale. | 11 |   | 11 of 11 | 0.38 | 11 of 11 | 0.38

unorm | Normal occupancy: share of capacity leased in a normal month (L18). | 10 |   | 10 of 10 | 0.28 | 10 of 10 | 0.66

õA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19). | 25 |   | 25 of 25 | 0.27 | 23 of 25 | 0.55

lfnorm | Normal load factor: share of seat-miles sold in a normal month (L17). | 22 |   | 22 of 22 | 0.28 | 12 of 22 | 0.77

export share | Export share: share of shipments exported. | 5 |   | 5 of 5 | 0.07 | 5 of 5 | 0.07

Least informed first.

## Sector totals

The same question for the sector totals the forecasts show, such as a sector's output or its order book. The model runs its filter twice over the same history, once with the observations and once without, and compares how much its copies of the world disagree. Where the observations barely narrow that disagreement, the total is mostly from the model: its estimate comes from the equations and drivers, not from data, and it would look stable from one run to the next even if it were wrong. The forecast charts carry the same tag.

pinned by the data (ratio 0.5 or less) partly (0.5 to 0.8) mostly from the model (0.8 to 1.2) wider with the data than without (above 1.2): not a measure of data, a sign the filter is unsettled there Each number: spread with the observations ÷ spread without them. Blank: not part of the sector's template.

sector | Capacity | Output | Utilization | Load factor | Shipments | New orders | Order book | Overdue orders | Phantom orders | Lost demand | Lead time | Price | Unit cost | Finished inventory | Input inventory | Capacity in use | Capacity announced | Capacity under construction

Airlines | 0.14 | 0.06 | 0.31 | 0.22 | 0.50 | 1.32 | 0.69 |  |  | 8.94 | 0.91 | 0.10 | 0.30 |  |  |  |  |

Autos | 0.07 | 0.19 | 0.08 |  | 0.54 | 0.54 | 0.41 | 0.23 | 0.51 |  | 0.68 | 0.26 | 0.51 | 1.52 | 1.00 |  |  |

Chemicals | 0.03 | 0.23 | 0.05 |  | 0.69 | 0.72 | 0.23 | 0.14 | 0.08 |  | 0.41 | 0.12 | 0.24 | 1.03 | 0.86 |  |  |

Data centers | 0.23 | 0.12 | 0.17 |  | 0.97 | 2.05 | 0.86 | 1.00 | 1.00 |  | 1.01 | 0.65 | 0.67 |  |  | 0.12 | 0.58 | 0.16

Food | 0.22 | 0.25 | 0.13 |  | 0.62 | 0.54 | 0.18 | 0.13 | 0.14 |  | 0.59 | 0.43 | 0.53 | 1.15 | 1.01 |  |  |

Hospitals | 0.49 | 0.35 | 0.85 | 0.87 | 0.95 | 0.96 | 0.96 |  |  | 2810.00 | 1.00 | 0.21 | 0.50 |  |  |  |  |

Hotels | 0.76 | 0.15 | 0.47 | 1.57 | 0.66 | 0.73 | 0.68 |  |  | 1.11 | 1.24 | 0.35 | 0.68 |  |  |  |  |

Housing | 0.36 | 0.54 | 0.26 |  | 0.38 | 3.81 | 0.30 | 0.29 | 0.27 |  | 0.54 | 0.38 | 0.63 | 0.66 | 0.99 |  |  |

Machinery | 0.06 | 0.21 | 0.14 |  | 0.36 | 3.24 | 0.11 | 0.07 | 0.24 |  | 0.47 | 0.33 | 0.44 | 1.85 | 0.61 |  |  |

Oil and gas | 0.07 | 0.22 | 0.03 |  | 0.80 | 1.08 | 2.40 | 18.60 | 11.70 |  | 0.12 | 0.23 | 0.24 | 1.90 | 0.94 |  | 0.20 | 0.15

Retail | 0.09 | 0.22 | 0.12 | 1.34 | 1.30 | 2.22 | 2.03 |  |  | 1.68 | 0.50 | 0.03 | 0.10 | 0.05 |  |  |  |

Semiconductors | 0.04 | 0.09 | 0.11 |  | 0.12 | 0.81 | 0.08 | 0.06 | 0.12 |  | 0.20 | 0.30 | 0.19 | 1.36 | 0.80 |  | 0.34 | 0.15

Steel | 0.04 | 0.37 | 0.03 |  | 0.59 | 0.90 | 0.18 | 0.15 | 0.05 |  | 0.08 | 0.16 | 0.37 | 1.24 | 1.00 |  |  |

Wholesale | 0.62 | 1.14 | 0.90 | 1.18 | 1.18 | 1.13 | 1.09 |  |  | 0.21 | 0.97 | 0.47 | 0.51 | 0.39 |  |  |  |
