<!-- Evaluation › What the data pin down, for forecast e05174ab-92f2-5d55-9c37-d06ebf3ce165; the page: https://mitdbg.github.io/model-2-nowcasting/evaluation.html?set=e05174ab-92f2-5d55-9c37-d06ebf3ce165; inputs 1ebc3e0366acd92a -->

World shown  5 of 5 worlds in this bundle

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# What the data pin down

Before it sees any data, the model has a rough idea of each entity parameter: a prior, a range of plausible values. Fitting the model to the observations narrows that range. The sd ratio compares the two: the width of the range after fitting divided by its width before. A parameter is labeled

- Informative when its sd ratio is below 0.8: the data narrowed its range by at least a fifth;

- Uninformative when it is 0.8 or more: its estimate is about as uncertain as before, so it rests on the prior rather than on the data.

An example. The normal markup μ of Cascade Steel (Steel):
before the data (prior)

-0.0345 to 0.294 after fitting

0.0114 to 0.168
Ranges are 90% ranges. The fitted range is 0.47 times as wide as the prior's, so the sd ratio is 0.47 and the parameter is Informative.

Only tracked entities have their own parameters; representative entities take their group's averages. Part of the narrowing comes from the pull toward the entity's group average (L14), so a sparsely observed entity can look informative because it borrowed from similar entities. The stricter sd ratio removes that part: it divides the width after fitting by the width the parameter would have from its group average alone (the spread of entities around their group's average). Below 0.8, the entity's own observations narrowed its range beyond what its group already says. The two ratios differ only for the parameters pooled toward the group average; observation parameters and starting states have no group average, so their two ratios are the same.

1,408

entity parameters fitted

1,252

informative (89%)

156

uninformative (11%)

814

informative by the stricter ratio (58%)

## Entity parameters

By parameter By sector By entity Every parameter

Sector

parameter | meaning | entities | informative |  | median sd ratio  | informative, stricter | median stricter ratio

δ | Capacity drift: monthly change in capacity outside announced projects (L1). | 90 |   | 40 of 90 | 0.85 | 29 of 90 | 0.88

b (emissions) | Emissions slope: percent change in emissions per percent change in output. | 47 |   | 28 of 47 | 0.78 | 28 of 47 | 0.78

listing gap | List-price gap: log list price minus log transaction price. | 11 |   | 7 of 11 | 0.67 | 7 of 11 | 0.67

m0 | Starting markup: markup in the first month, log scale. | 115 |   | 77 of 115 | 0.61 | 77 of 115 | 0.61

c0 | Starting unit cost: unit cost in the first month, log scale. | 115 |   | 86 of 115 | 0.36 | 86 of 115 | 0.36

μ | Normal markup: price over unit cost in a normal month, log scale (L5). | 115 |   | 103 of 115 | 0.46 | 14 of 115 | 0.95

lead-time bias | Lead-time bias: quoted lead time over the model's lead time, log scale. | 11 |   | 10 of 11 | 0.38 | 10 of 11 | 0.38

β | Demand response: how far utilization rises with demand pressure (L3). | 105 |   | 103 of 105 | 0.52 | 46 of 105 | 0.84

α | Normal utilization: utilization in a month of normal demand, logit scale (L3). | 105 |   | 104 of 105 | 0.34 | 73 of 105 | 0.64

w | pass-through of input cost to unit cost (L4) | 115 |   | 115 of 115 | 0.47 | 17 of 115 | 0.95

õ | Order level: new orders relative to the level that keeps the order book steady, log scale (L6). | 115 |   | 115 of 115 | 0.19 | 97 of 115 | 0.52

βO | Order response: elasticity of new orders to real demand (L6). | 115 |   | 115 of 115 | 0.51 | 48 of 115 | 0.83

ℓ | Normal order-book cover: months of output the order book holds in a normal month (L8–L9). | 115 |   | 115 of 115 | 0.39 | 65 of 115 | 0.73

a (emissions) | Emissions level: log emissions at the reference output. | 47 |   | 47 of 47 | 0.04 | 47 of 47 | 0.04

k0 | Starting capacity: capacity in the first month, log scale. | 115 |   | 115 of 115 | 0.06 | 115 of 115 | 0.06

unorm | Normal occupancy: share of capacity leased in a normal month (L18). | 10 |   | 10 of 10 | 0.28 | 10 of 10 | 0.66

õA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19). | 25 |   | 25 of 25 | 0.28 | 19 of 25 | 0.57

z0 | Starting utilization: utilization in the first month relative to normal, logit scale. | 10 |   | 10 of 10 | 0.42 | 10 of 10 | 0.42

lfnorm | Normal load factor: share of seat-miles sold in a normal month (L17). | 22 |   | 22 of 22 | 0.34 | 11 of 22 | 0.78

export share | Export share: share of shipments exported. | 5 |   | 5 of 5 | 0.06 | 5 of 5 | 0.06

Least informed first.

## Sector totals

The same question for the sector totals the forecasts show, such as a sector's output or its order book. The model runs its filter twice over the same history, once with the observations and once without, and compares how much its copies of the world disagree. Where the observations barely narrow that disagreement, the total is mostly from the model: its estimate comes from the equations and drivers, not from data, and it would look stable from one run to the next even if it were wrong. The forecast charts carry the same tag.

pinned by the data (ratio 0.5 or less) partly (0.5 to 0.8) mostly from the model (0.8 to 1.2) wider with the data than without (above 1.2): not a measure of data, a sign the filter is unsettled there Each number: spread with the observations ÷ spread without them. Blank: not part of the sector's template.

sector | Capacity | Output | Utilization | Load factor | Shipments | New orders | Order book | Overdue orders | Phantom orders | Lost demand | Lead time | Price | Unit cost | Finished inventory | Input inventory | Capacity in use | Capacity announced | Capacity under construction

Airlines | 0.08 | 0.04 | 0.28 | 0.14 | 0.39 | 1.32 | 0.60 |  |  | 0.25 | 0.63 | 0.08 | 0.28 |  |  |  |  |

Autos | 0.04 | 0.36 | 0.25 |  | 0.42 | 0.84 | 0.88 | 0.71 | 1.44 |  | 0.77 | 1.04 | 0.36 | 0.65 | 0.98 |  |  |

Chemicals | 0.12 | 0.18 | 0.08 |  | 0.58 | 0.55 | 0.23 | 0.21 | 0.16 |  | 0.40 | 0.14 | 0.53 | 0.74 | 0.82 |  |  |

Data centers | 0.25 | 0.13 | 0.12 |  | 0.98 | 2.82 | 0.89 | 1.00 | 1.00 |  | 1.01 | 0.86 | 0.89 |  |  | 0.13 | 0.58 | 0.19

Food | 0.20 | 0.25 | 0.14 |  | 0.61 | 0.58 | 0.19 | 0.14 | 0.11 |  | 0.43 | 0.32 | 0.78 | 0.99 | 0.75 |  |  |

Hospitals | 0.47 | 0.35 | 0.87 | 0.81 | 0.96 | 0.97 | 0.96 |  |  | 2.02 | 0.96 | 0.21 | 0.43 |  |  |  |  |

Hotels | 0.48 | 0.20 | 0.75 | 0.85 | 0.82 | 0.94 | 0.86 |  |  | 485.00 | 0.97 | 0.28 | 0.59 |  |  |  |  |

Housing | 0.32 | 0.27 | 0.28 |  | 0.29 | 4.34 | 0.44 | 0.36 | 0.20 |  | 0.51 | 0.78 | 0.31 | 6.11 | 0.91 |  |  |

Machinery | 0.06 | 0.15 | 0.05 |  | 0.21 | 1.54 | 0.06 | 0.05 | 0.32 |  | 0.08 | 0.05 | 0.28 | 0.43 | 1.02 |  |  |

Oil and gas | 0.08 | 0.21 | 0.06 |  | 0.68 | 1.00 | 0.78 | 0.74 | 0.54 |  | 0.53 | 0.23 | 0.39 | 1.51 | 0.99 |  | 0.57 | 0.41

Retail | 0.05 | 0.08 | 0.09 | 0.68 | 0.93 | 1.81 | 1.75 |  |  | 2.69 | 0.33 | 0.03 | 0.07 | 0.06 |  |  |  |

Semiconductors | 0.06 | 0.57 | 0.12 |  | 1.03 | 4.11 | 0.32 | 0.46 | 0.08 |  | 0.40 | 0.48 | 0.35 | 17.40 | 0.97 |  | 0.42 | 0.29

Steel | 0.10 | 0.27 | 0.04 |  | 0.44 | 0.81 | 0.19 | 0.18 | 0.28 |  | 0.25 | 0.14 | 0.42 | 0.89 | 0.98 |  |  |

Wholesale | 0.31 | 0.57 | 0.29 | 0.81 | 0.93 | 0.94 | 0.92 |  |  | 0.42 | 0.94 | 0.23 | 0.27 | 0.31 |  |  |  |
