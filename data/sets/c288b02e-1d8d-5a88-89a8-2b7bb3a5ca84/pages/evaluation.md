<!-- Evaluation › What the data pin down, for forecast c288b02e-1d8d-5a88-89a8-2b7bb3a5ca84; the page: https://mitdbg.github.io/model-2-nowcasting/evaluation.html?set=c288b02e-1d8d-5a88-89a8-2b7bb3a5ca84; inputs a5c7579c14a3c24a -->

World shown  5 of 5 worlds in this bundle

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# What the data pin down

Before it sees any data, the model has a rough idea of each entity parameter: a prior, a range of plausible values. Fitting the model to the observations narrows that range. The sd ratio compares the two: the width of the range after fitting divided by its width before. A parameter is labeled

- Informative when its sd ratio is below 0.8: the data narrowed its range by at least a fifth;

- Uninformative when it is 0.8 or more: its estimate is about as uncertain as before, so it rests on the prior rather than on the data.

An example. The normal markup μ of Cascade Steel (Steel):
before the data (prior)

-0.0345 to 0.294 after fitting

0.0669 to 0.211
Ranges are 90% ranges. The fitted range is 0.44 times as wide as the prior's, so the sd ratio is 0.44 and the parameter is Informative.

Only tracked entities have their own parameters; representative entities take their group's averages. Part of the narrowing comes from the pull toward the entity's group average (L14), so a sparsely observed entity can look informative because it borrowed from similar entities. The stricter sd ratio removes that part: it divides the width after fitting by the width the parameter would have from its group average alone (the spread of entities around their group's average). Below 0.8, the entity's own observations narrowed its range beyond what its group already says. The two ratios differ only for the parameters pooled toward the group average; observation parameters and starting states have no group average, so their two ratios are the same.

1,408

entity parameters fitted

1,249

informative (89%)

159

uninformative (11%)

801

informative by the stricter ratio (57%)

## Entity parameters

By parameter By sector By entity Every parameter

Sector

parameter | meaning | entities | informative |  | median sd ratio  | informative, stricter | median stricter ratio

b (emissions) | Emissions slope: percent change in emissions per percent change in output. | 47 |   | 16 of 47 | 0.83 | 16 of 47 | 0.83

δ | Capacity drift: monthly change in capacity outside announced projects (L1). | 90 |   | 40 of 90 | 0.84 | 37 of 90 | 0.82

m0 | Starting markup: markup in the first month, log scale. | 115 |   | 78 of 115 | 0.57 | 78 of 115 | 0.57

c0 | Starting unit cost: unit cost in the first month, log scale. | 115 |   | 83 of 115 | 0.27 | 83 of 115 | 0.27

lead-time bias | Lead-time bias: quoted lead time over the model's lead time, log scale. | 11 |   | 8 of 11 | 0.42 | 8 of 11 | 0.42

z0 | Starting utilization: utilization in the first month relative to normal, logit scale. | 10 |   | 9 of 10 | 0.45 | 9 of 10 | 0.45

listing gap | List-price gap: log list price minus log transaction price. | 11 |   | 10 of 11 | 0.35 | 10 of 11 | 0.35

w | pass-through of input cost to unit cost (L4) | 115 |   | 112 of 115 | 0.46 | 23 of 115 | 0.95

a (emissions) | Emissions level: log emissions at the reference output. | 47 |   | 46 of 47 | 0.04 | 46 of 47 | 0.04

α | Normal utilization: utilization in a month of normal demand, logit scale (L3). | 105 |   | 105 of 105 | 0.33 | 76 of 105 | 0.67

β | Demand response: how far utilization rises with demand pressure (L3). | 105 |   | 105 of 105 | 0.51 | 38 of 105 | 0.86

μ | Normal markup: price over unit cost in a normal month, log scale (L5). | 115 |   | 115 of 115 | 0.45 | 14 of 115 | 0.96

õ | Order level: new orders relative to the level that keeps the order book steady, log scale (L6). | 115 |   | 115 of 115 | 0.19 | 98 of 115 | 0.47

βO | Order response: elasticity of new orders to real demand (L6). | 115 |   | 115 of 115 | 0.50 | 47 of 115 | 0.84

ℓ | Normal order-book cover: months of output the order book holds in a normal month (L8–L9). | 115 |   | 115 of 115 | 0.40 | 56 of 115 | 0.81

k0 | Starting capacity: capacity in the first month, log scale. | 115 |   | 115 of 115 | 0.05 | 115 of 115 | 0.05

unorm | Normal occupancy: share of capacity leased in a normal month (L18). | 10 |   | 10 of 10 | 0.30 | 10 of 10 | 0.71

õA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19). | 25 |   | 25 of 25 | 0.30 | 18 of 25 | 0.51

lfnorm | Normal load factor: share of seat-miles sold in a normal month (L17). | 22 |   | 22 of 22 | 0.30 | 14 of 22 | 0.73

export share | Export share: share of shipments exported. | 5 |   | 5 of 5 | 0.05 | 5 of 5 | 0.05

Least informed first.

## Sector totals

The same question for the sector totals the forecasts show, such as a sector's output or its order book. The model runs its filter twice over the same history, once with the observations and once without, and compares how much its copies of the world disagree. Where the observations barely narrow that disagreement, the total is mostly from the model: its estimate comes from the equations and drivers, not from data, and it would look stable from one run to the next even if it were wrong. The forecast charts carry the same tag.

pinned by the data (ratio 0.5 or less) partly (0.5 to 0.8) mostly from the model (0.8 to 1.2) wider with the data than without (above 1.2): not a measure of data, a sign the filter is unsettled there Each number: spread with the observations ÷ spread without them. Blank: not part of the sector's template.

sector | Capacity | Output | Utilization | Load factor | Shipments | New orders | Order book | Overdue orders | Phantom orders | Lost demand | Lead time | Price | Unit cost | Finished inventory | Input inventory | Capacity in use | Capacity announced | Capacity under construction

Airlines | 0.18 | 0.06 | 0.30 | 0.25 | 0.51 | 1.36 | 0.85 |  |  | 35.50 | 1.00 | 0.09 | 0.29 |  |  |  |  |

Autos | 0.06 | 0.22 | 0.09 |  | 0.53 | 0.83 | 0.48 | 0.37 | 0.72 |  | 0.77 | 0.67 | 0.35 | 1.29 | 0.99 |  |  |

Chemicals | 0.07 | 0.27 | 0.09 |  | 0.65 | 0.68 | 0.27 | 0.25 | 0.31 |  | 0.37 | 0.16 | 0.50 | 0.75 | 0.94 |  |  |

Data centers | 0.27 | 0.12 | 0.15 |  | 0.95 | 2.68 | 0.87 | 1.00 | 1.00 |  | 1.00 | 0.63 | 0.65 |  |  | 0.12 | 0.58 | 0.17

Food | 0.21 | 0.11 | 0.11 |  | 0.22 | 0.71 | 0.59 | 0.28 | 0.23 |  | 0.60 | 0.52 | 0.72 | 1.70 | 0.64 |  |  |

Hospitals | 0.49 | 0.36 | 0.70 | 0.83 | 0.94 | 0.96 | 0.94 |  |  | 2.50 | 0.98 | 0.16 | 0.30 |  |  |  |  |

Hotels | 0.47 | 0.32 | 0.88 | 0.74 | 0.94 | 1.00 | 0.96 |  |  | 3.96 | 1.03 | 0.28 | 0.66 |  |  |  |  |

Housing | 0.53 | 0.30 | 0.46 |  | 0.27 | 3.74 | 0.64 | 0.56 | 0.87 |  | 0.84 | 1.03 | 0.49 | 1.22 | 1.00 |  |  |

Machinery | 0.03 | 6.14 | 0.78 |  | 1.87 | 6.59 | 0.20 | 0.74 | 0.04 |  | 0.29 | 2.79 | 0.63 | 0.35 | 1.04 |  |  |

Oil and gas | 0.01 | 0.08 | 0.02 |  | 0.33 | 0.51 | 0.12 | 0.07 | 0.06 |  | 0.19 | 0.05 | 0.29 | 0.31 | 0.96 |  | 0.21 | 0.12

Retail | 0.12 | 0.40 | 0.11 | 2.51 | 2.19 | 2.66 | 2.36 |  |  | 4.12 | 0.53 | 0.05 | 0.14 | 0.23 |  |  |  |

Semiconductors | 0.03 | 0.14 | 0.12 |  | 0.26 | 2.65 | 0.27 | 0.22 | 0.06 |  | 0.40 | 0.47 | 0.27 | 2.93 | 0.82 |  | 0.95 | 0.33

Steel | 0.08 | 0.32 | 0.05 |  | 0.74 | 1.30 | 0.39 | 0.21 | 0.45 |  | 0.15 | 0.27 | 0.43 | 0.53 | 1.00 |  |  |

Wholesale | 0.41 | 0.55 | 0.48 | 0.81 | 0.90 | 0.87 | 0.89 |  |  | 0.41 | 0.94 | 0.22 | 0.29 | 0.22 |  |  |  |
