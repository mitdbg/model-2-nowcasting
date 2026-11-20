<!-- Evaluation › What the data pin down, for forecast 95b8660e-19a8-5f67-bd12-40e75a011154; the page: https://mitdbg.github.io/model-2-nowcasting/evaluation.html?set=95b8660e-19a8-5f67-bd12-40e75a011154; inputs 52dd13f71b6272ed -->

World shown  5 of 5 worlds in this bundle

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# What the data pin down

Before it sees any data, the model has a rough idea of each entity parameter: a prior, a range of plausible values. Fitting the model to the observations narrows that range. The sd ratio compares the two: the width of the range after fitting divided by its width before. A parameter is labeled

- Informative when its sd ratio is below 0.8: the data narrowed its range by at least a fifth;

- Uninformative when it is 0.8 or more: its estimate is about as uncertain as before, so it rests on the prior rather than on the data.

An example. The normal markup μ of Cascade Steel (Steel):
before the data (prior)

-0.0345 to 0.294 after fitting

0.0498 to 0.211
Ranges are 90% ranges. The fitted range is 0.49 times as wide as the prior's, so the sd ratio is 0.49 and the parameter is Informative.

Only tracked entities have their own parameters; representative entities take their group's averages. Part of the narrowing comes from the pull toward the entity's group average (L14), so a sparsely observed entity can look informative because it borrowed from similar entities. The stricter sd ratio removes that part: it divides the width after fitting by the width the parameter would have from its group average alone (the spread of entities around their group's average). Below 0.8, the entity's own observations narrowed its range beyond what its group already says. The two ratios differ only for the parameters pooled toward the group average; observation parameters and starting states have no group average, so their two ratios are the same.

1,408

entity parameters fitted

1,261

informative (90%)

147

uninformative (10%)

827

informative by the stricter ratio (59%)

## Entity parameters

By parameter By sector By entity Every parameter

Sector

parameter | meaning | entities | informative |  | median sd ratio  | informative, stricter | median stricter ratio

b (emissions) | Emissions slope: percent change in emissions per percent change in output. | 47 |   | 21 of 47 | 0.81 | 21 of 47 | 0.81

δ | Capacity drift: monthly change in capacity outside announced projects (L1). | 90 |   | 45 of 90 | 0.79 | 38 of 90 | 0.81

listing gap | List-price gap: log list price minus log transaction price. | 11 |   | 6 of 11 | 0.58 | 6 of 11 | 0.58

m0 | Starting markup: markup in the first month, log scale. | 115 |   | 75 of 115 | 0.60 | 75 of 115 | 0.60

c0 | Starting unit cost: unit cost in the first month, log scale. | 115 |   | 90 of 115 | 0.26 | 90 of 115 | 0.26

lead-time bias | Lead-time bias: quoted lead time over the model's lead time, log scale. | 11 |   | 9 of 11 | 0.36 | 9 of 11 | 0.36

z0 | Starting utilization: utilization in the first month relative to normal, logit scale. | 10 |   | 9 of 10 | 0.45 | 9 of 10 | 0.45

βO | Order response: elasticity of new orders to real demand (L6). | 115 |   | 113 of 115 | 0.49 | 57 of 115 | 0.80

α | Normal utilization: utilization in a month of normal demand, logit scale (L3). | 105 |   | 104 of 105 | 0.27 | 80 of 105 | 0.52

β | Demand response: how far utilization rises with demand pressure (L3). | 105 |   | 105 of 105 | 0.51 | 40 of 105 | 0.85

w | pass-through of input cost to unit cost (L4) | 115 |   | 115 of 115 | 0.45 | 17 of 115 | 0.96

μ | Normal markup: price over unit cost in a normal month, log scale (L5). | 115 |   | 115 of 115 | 0.45 | 21 of 115 | 0.96

õ | Order level: new orders relative to the level that keeps the order book steady, log scale (L6). | 115 |   | 115 of 115 | 0.19 | 99 of 115 | 0.49

ℓ | Normal order-book cover: months of output the order book holds in a normal month (L8–L9). | 115 |   | 115 of 115 | 0.39 | 55 of 115 | 0.81

a (emissions) | Emissions level: log emissions at the reference output. | 47 |   | 47 of 47 | 0.04 | 47 of 47 | 0.04

k0 | Starting capacity: capacity in the first month, log scale. | 115 |   | 115 of 115 | 0.05 | 115 of 115 | 0.05

unorm | Normal occupancy: share of capacity leased in a normal month (L18). | 10 |   | 10 of 10 | 0.30 | 10 of 10 | 0.69

õA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19). | 25 |   | 25 of 25 | 0.28 | 23 of 25 | 0.45

lfnorm | Normal load factor: share of seat-miles sold in a normal month (L17). | 22 |   | 22 of 22 | 0.34 | 10 of 22 | 0.83

export share | Export share: share of shipments exported. | 5 |   | 5 of 5 | 0.05 | 5 of 5 | 0.05

Least informed first.

## Sector totals

The same question for the sector totals the forecasts show, such as a sector's output or its order book. The model runs its filter twice over the same history, once with the observations and once without, and compares how much its copies of the world disagree. Where the observations barely narrow that disagreement, the total is mostly from the model: its estimate comes from the equations and drivers, not from data, and it would look stable from one run to the next even if it were wrong. The forecast charts carry the same tag.

pinned by the data (ratio 0.5 or less) partly (0.5 to 0.8) mostly from the model (0.8 to 1.2) wider with the data than without (above 1.2): not a measure of data, a sign the filter is unsettled there Each number: spread with the observations ÷ spread without them. Blank: not part of the sector's template.

sector | Capacity | Output | Utilization | Load factor | Shipments | New orders | Order book | Overdue orders | Phantom orders | Lost demand | Lead time | Price | Unit cost | Finished inventory | Input inventory | Capacity in use | Capacity announced | Capacity under construction

Airlines | 0.14 | 0.06 | 0.33 | 0.23 | 0.51 | 1.48 | 0.80 |  |  | 2.63 | 0.81 | 0.10 | 0.31 |  |  |  |  |

Autos | 0.03 | 0.15 | 0.05 |  | 0.54 | 0.64 | 0.83 | 0.98 | 0.84 |  | 0.64 | 0.34 | 0.28 | 0.71 | 0.98 |  |  |

Chemicals | 0.12 | 0.24 | 0.13 |  | 0.47 | 0.50 | 0.68 | 0.68 | 0.31 |  | 0.30 | 0.32 | 0.40 | 0.98 | 0.71 |  |  |

Data centers | 0.26 | 0.12 | 0.13 |  | 0.99 | 2.69 | 0.87 | 1.00 | 1.00 |  | 0.98 | 0.76 | 0.77 |  |  | 0.12 | 0.59 | 0.16

Food | 0.21 | 0.28 | 0.14 |  | 0.56 | 0.56 | 0.86 | 0.96 | 1.12 |  | 0.93 | 0.94 | 0.97 | 0.94 | 0.97 |  |  |

Hospitals | 0.44 | 0.36 | 0.69 | 0.79 | 0.95 | 0.96 | 0.95 |  |  | 17.60 | 0.99 | 0.15 | 0.46 |  |  |  |  |

Hotels | 0.47 | 0.25 | 0.73 | 0.83 | 0.91 | 0.96 | 0.93 |  |  | 0.50 | 0.95 | 0.28 | 0.56 |  |  |  |  |

Housing | 0.41 | 0.35 | 0.30 |  | 0.32 | 5.50 | 0.45 | 0.97 | 1.17 |  | 0.25 | 0.28 | 0.59 | 0.75 | 1.00 |  |  |

Machinery | 0.02 | 1.66 | 0.46 |  | 0.38 | 6.43 | 0.10 | 0.06 | 0.12 |  | 0.35 | 0.75 | 0.40 | 48.80 | 1.00 |  |  |

Oil and gas | 0.03 | 0.12 | 0.05 |  | 0.61 | 0.91 | 0.15 | 0.07 | 0.05 |  | 0.58 | 0.34 | 0.38 | 1.04 | 0.98 |  | 0.85 | 0.27

Retail | 0.18 | 0.35 | 0.25 | 1.73 | 2.82 | 3.10 | 2.86 |  |  | 0.35 | 0.85 | 0.05 | 0.20 | 0.25 |  |  |  |

Semiconductors | 0.06 | 0.08 | 0.12 |  | 0.16 | 0.81 | 0.04 | 0.04 | 0.12 |  | 0.14 | 0.09 | 0.43 | 1.63 | 0.91 |  | 0.18 | 0.16

Steel | 0.12 | 0.39 | 0.06 |  | 0.64 | 1.15 | 0.36 | 0.23 | 0.15 |  | 0.34 | 0.35 | 0.56 | 0.97 | 1.00 |  |  |

Wholesale | 0.26 | 0.44 | 0.30 | 0.82 | 0.89 | 0.89 | 0.81 |  |  | 0.39 | 0.77 | 0.35 | 0.42 | 0.10 |  |  |  |
