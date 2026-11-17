<!-- Evaluation › What the data pin down, for forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e; the page: https://mitdbg.github.io/model-2-nowcasting/evaluation.html?set=0c0a014b-d739-5e72-95a6-0b4ec4f3753e; inputs 959296f2808a6fc5 -->

World shown World seed 20261115 (the bundle's only world)

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# What the data pin down

Before it sees any data, the model has a rough idea of each entity parameter: a prior, a range of plausible values. Fitting the model to the observations narrows that range. The sd ratio compares the two: the width of the range after fitting divided by its width before. A parameter is labeled

- Informative when its sd ratio is below 0.8: the data narrowed its range by at least a fifth;

- Uninformative when it is 0.8 or more: its estimate is about as uncertain as before, so it rests on the prior rather than on the data.

An example. The normal markup μ of Cascade Steel (Steel):
before the data (prior)

-0.0345 to 0.294 after fitting

0.0546 to 0.270
Ranges are 90% ranges. The fitted range is 0.66 times as wide as the prior's, so the sd ratio is 0.66 and the parameter is Informative.

Only tracked entities have their own parameters; representative entities take their group's averages. Part of the narrowing comes from the pull toward the entity's group average (L14), so a sparsely observed entity can look informative because it borrowed from similar entities. The stricter sd ratio removes that part: it divides the width after fitting by the width the parameter would have from its group average alone (the spread of entities around their group's average). Below 0.8, the entity's own observations narrowed its range beyond what its group already says. The two ratios differ only for the parameters pooled toward the group average; observation parameters and starting states have no group average, so their two ratios are the same.

1,408

entity parameters fitted

1,260

informative (89%)

148

uninformative (11%)

891

informative by the stricter ratio (63%)

## Entity parameters

By parameter By sector By entity Every parameter

Sector

parameter | meaning | entities | informative |  | median sd ratio  | informative, stricter | median stricter ratio

b (emissions) | Emissions slope: percent change in emissions per percent change in output. | 47 |   | 21 of 47 | 0.82 | 21 of 47 | 0.82

δ | Capacity drift: monthly change in capacity outside announced projects (L1). | 90 |   | 49 of 90 | 0.73 | 45 of 90 | 0.80

listing gap | List-price gap: log list price minus log transaction price. | 11 |   | 7 of 11 | 0.67 | 7 of 11 | 0.67

m0 | Starting markup: markup in the first month, log scale. | 115 |   | 77 of 115 | 0.58 | 77 of 115 | 0.58

c0 | Starting unit cost: unit cost in the first month, log scale. | 115 |   | 91 of 115 | 0.28 | 91 of 115 | 0.28

z0 | Starting utilization: utilization in the first month relative to normal, logit scale. | 10 |   | 9 of 10 | 0.42 | 9 of 10 | 0.42

βO | Order response: elasticity of new orders to real demand (L6). | 115 |   | 109 of 115 | 0.47 | 77 of 115 | 0.72

β | Demand response: how far utilization rises with demand pressure (L3). | 105 |   | 101 of 105 | 0.54 | 48 of 105 | 0.82

ℓ | Normal order-book cover: months of output the order book holds in a normal month (L8–L9). | 115 |   | 111 of 115 | 0.40 | 68 of 115 | 0.70

α | Normal utilization: utilization in a month of normal demand, logit scale (L3). | 105 |   | 105 of 105 | 0.28 | 81 of 105 | 0.58

w | pass-through of input cost to unit cost (L4) | 115 |   | 115 of 115 | 0.47 | 20 of 115 | 0.94

μ | Normal markup: price over unit cost in a normal month, log scale (L5). | 115 |   | 115 of 115 | 0.46 | 16 of 115 | 0.96

õ | Order level: new orders relative to the level that keeps the order book steady, log scale (L6). | 115 |   | 115 of 115 | 0.18 | 106 of 115 | 0.45

a (emissions) | Emissions level: log emissions at the reference output. | 47 |   | 47 of 47 | 0.04 | 47 of 47 | 0.04

k0 | Starting capacity: capacity in the first month, log scale. | 115 |   | 115 of 115 | 0.05 | 115 of 115 | 0.05

lead-time bias | Lead-time bias: quoted lead time over the model's lead time, log scale. | 11 |   | 11 of 11 | 0.56 | 11 of 11 | 0.56

unorm | Normal occupancy: share of capacity leased in a normal month (L18). | 10 |   | 10 of 10 | 0.28 | 10 of 10 | 0.67

õA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19). | 25 |   | 25 of 25 | 0.27 | 24 of 25 | 0.54

lfnorm | Normal load factor: share of seat-miles sold in a normal month (L17). | 22 |   | 22 of 22 | 0.30 | 13 of 22 | 0.76

export share | Export share: share of shipments exported. | 5 |   | 5 of 5 | 0.09 | 5 of 5 | 0.09

Least informed first.

## Sector totals

The same question for the sector totals the forecasts show, such as a sector's output or its order book. The model runs its filter twice over the same history, once with the observations and once without, and compares how much its copies of the world disagree. Where the observations barely narrow that disagreement, the total is mostly from the model: its estimate comes from the equations and drivers, not from data, and it would look stable from one run to the next even if it were wrong. The forecast charts carry the same tag.

pinned by the data (ratio 0.5 or less) partly (0.5 to 0.8) mostly from the model (0.8 to 1.2) wider with the data than without (above 1.2): not a measure of data, a sign the filter is unsettled there Each number: spread with the observations ÷ spread without them. Blank: not part of the sector's template.

sector | Capacity | Output | Utilization | Load factor | Shipments | New orders | Order book | Overdue orders | Phantom orders | Lost demand | Lead time | Price | Unit cost | Finished inventory | Input inventory | Capacity in use | Capacity announced | Capacity under construction

Airlines | 0.26 | 0.07 | 0.36 | 0.31 | 0.52 | 1.35 | 0.71 |  |  | 4.80 | 0.89 | 0.10 | 0.38 |  |  |  |  |

Autos | 0.14 | 0.19 | 0.10 |  | 0.73 | 0.95 | 0.72 | 0.12 | 0.31 |  | 0.88 | 0.35 | 0.53 | 0.53 | 1.00 |  |  |

Chemicals | 0.12 | 0.20 | 0.07 |  | 0.71 | 0.87 | 0.74 | 0.71 | 0.27 |  | 0.75 | 0.29 | 0.53 | 1.47 | 0.97 |  |  |

Data centers | 0.22 | 0.12 | 0.14 |  | 1.00 | 2.45 | 0.92 | 1.00 | 1.00 |  | 0.98 | 0.69 | 0.70 |  |  | 0.12 | 0.56 | 0.17

Food | 0.16 | 0.23 | 0.21 |  | 0.79 | 0.73 | 0.83 | 0.72 | 0.63 |  | 0.76 | 0.57 | 0.76 | 0.50 | 0.97 |  |  |

Hospitals | 0.43 | 0.32 | 0.76 | 0.77 | 0.93 | 0.95 | 0.94 |  |  | 216.00 | 0.99 | 0.21 | 0.62 |  |  |  |  |

Hotels | 0.28 | 0.22 | 0.68 | 0.65 | 0.94 | 1.00 | 0.96 |  |  | 22.70 | 0.96 | 0.23 | 0.55 |  |  |  |  |

Housing | 0.44 | 0.29 | 0.28 |  | 0.22 | 5.21 | 0.13 | 0.17 | 0.39 |  | 0.21 | 0.18 | 0.48 | 1.09 | 0.99 |  |  |

Machinery | 0.01 | 0.26 | 0.05 |  | 0.38 | 11.30 | 0.52 | 0.97 | 0.12 |  | 1.07 | 1.72 | 0.31 | 1.24 | 1.00 |  |  |

Oil and gas | 0.10 | 0.20 | 0.07 |  | 0.63 | 0.97 | 0.53 | 0.53 | 0.38 |  | 0.33 | 0.20 | 0.26 | 1.57 | 1.00 |  | 0.63 | 0.35

Retail | 0.19 | 0.25 | 0.30 | 1.21 | 1.24 | 1.57 | 1.49 |  |  | 64.90 | 0.64 | 0.05 | 0.15 | 0.10 |  |  |  |

Semiconductors | 0.04 | 0.13 | 0.05 |  | 0.20 | 0.56 | 0.04 | 0.03 | 0.08 |  | 0.11 | 0.09 | 0.42 | 0.50 | 1.01 |  | 0.59 | 0.26

Steel | 0.05 | 0.24 | 0.06 |  | 0.27 | 2.54 | 0.29 | 0.18 | 0.49 |  | 0.31 | 0.20 | 0.28 | 0.45 | 0.98 |  |  |

Wholesale | 0.27 | 0.43 | 0.46 | 1.17 | 0.84 | 1.00 | 0.83 |  |  | 0.74 | 0.68 | 0.33 | 0.41 | 0.18 |  |  |  |
