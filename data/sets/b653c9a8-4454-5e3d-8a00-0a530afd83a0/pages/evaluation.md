<!-- Evaluation › What the data pin down, for forecast b653c9a8-4454-5e3d-8a00-0a530afd83a0; the page: https://mitdbg.github.io/model-2-nowcasting/evaluation.html?set=b653c9a8-4454-5e3d-8a00-0a530afd83a0 -->

# What the data pin down

Before it sees any data, the model has a rough idea of each entity parameter: a prior, a range of plausible values. Fitting the model to the observations narrows that range. The sd ratio compares the two: the width of the range after fitting divided by its width before. A parameter is labeled

- Informative when its sd ratio is below 0.8: the data narrowed its range by at least a fifth;

- Uninformative when it is 0.8 or more: its estimate is about as uncertain as before, so it rests on the prior rather than on the data.

An example. The normal markup μ of Cascade Steel (Steel):
before the data (prior)

-0.0345 to 0.294 after fitting

0.0397 to 0.213
Ranges are 90% ranges. The fitted range is 0.53 times as wide as the prior's, so the sd ratio is 0.53 and the parameter is Informative.

Only tracked entities have their own parameters; representative entities take their group's averages. Part of the narrowing comes from the pull toward the entity's group average (L14), so a sparsely observed entity can look informative because it borrowed from similar entities. The stricter sd ratio removes that part: it divides the width after fitting by the width the parameter would have from its group average alone (the spread of entities around their group's average). Below 0.8, the entity's own observations narrowed its range beyond what its group already says. The two ratios differ only for the parameters pooled toward the group average; observation parameters and starting states have no group average, so their two ratios are the same.

1,408

entity parameters fitted

1,253

informative (89%)

155

uninformative (11%)

1,253

informative by the stricter ratio (89%)

## Entity parameters

By parameter By sector By entity Every parameter

Sector

parameter | meaning | entities | informative |  | median sd ratio  | informative, stricter | median stricter ratio

b (emissions) | Emissions slope: percent change in emissions per percent change in output. | 47 |   | 23 of 47 | 0.81 | 23 of 47 | 0.81

δ | Capacity drift: monthly change in capacity outside announced projects (L1). | 90 |   | 47 of 90 | 0.79 | 47 of 90 | 0.79

listing gap | List-price gap: log list price minus log transaction price. | 11 |   | 6 of 11 | 0.73 | 6 of 11 | 0.73

m0 | Starting markup: markup in the first month, log scale. | 115 |   | 68 of 115 | 0.68 | 68 of 115 | 0.68

lead-time bias | Lead-time bias: quoted lead time over the model's lead time, log scale. | 11 |   | 8 of 11 | 0.41 | 8 of 11 | 0.41

c0 | Starting unit cost: unit cost in the first month, log scale. | 115 |   | 84 of 115 | 0.35 | 84 of 115 | 0.35

z0 | Starting utilization: utilization in the first month relative to normal, logit scale. | 10 |   | 9 of 10 | 0.44 | 9 of 10 | 0.44

a (emissions) | Emissions level: log emissions at the reference output. | 47 |   | 46 of 47 | 0.04 | 46 of 47 | 0.04

α | Normal utilization: utilization in a month of normal demand, logit scale (L3). | 105 |   | 105 of 105 | 0.32 | 105 of 105 | 0.32

β | Demand response: how far utilization rises with demand pressure (L3). | 105 |   | 105 of 105 | 0.52 | 105 of 105 | 0.52

w | pass-through of input cost to unit cost (L4) | 115 |   | 115 of 115 | 0.48 | 115 of 115 | 0.48

μ | Normal markup: price over unit cost in a normal month, log scale (L5). | 115 |   | 115 of 115 | 0.45 | 115 of 115 | 0.45

õ | Order level: new orders relative to the level that keeps the order book steady, log scale (L6). | 115 |   | 115 of 115 | 0.19 | 115 of 115 | 0.19

βO | Order response: elasticity of new orders to real demand (L6). | 115 |   | 115 of 115 | 0.47 | 115 of 115 | 0.47

ℓ | Normal order-book cover: months of output the order book holds in a normal month (L8–L9). | 115 |   | 115 of 115 | 0.38 | 115 of 115 | 0.38

k0 | Starting capacity: capacity in the first month, log scale. | 115 |   | 115 of 115 | 0.06 | 115 of 115 | 0.06

unorm | Normal occupancy: share of capacity leased in a normal month (L18). | 10 |   | 10 of 10 | 0.29 | 10 of 10 | 0.29

õA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19). | 25 |   | 25 of 25 | 0.30 | 25 of 25 | 0.30

lfnorm | Normal load factor: share of seat-miles sold in a normal month (L17). | 22 |   | 22 of 22 | 0.30 | 22 of 22 | 0.30

export share | Export share: share of shipments exported. | 5 |   | 5 of 5 | 0.07 | 5 of 5 | 0.07

Least informed first.

## Sector totals

The same question for the sector totals the forecasts show, such as a sector's output or its order book. The model runs its filter twice over the same history, once with the observations and once without, and compares how much its copies of the world disagree. Where the observations barely narrow that disagreement, the total is mostly from the model: its estimate comes from the equations and drivers, not from data, and it would look stable from one run to the next even if it were wrong. The forecast charts carry the same tag.

pinned by the data (ratio 0.5 or less) partly (0.5 to 0.8) mostly from the model (0.8 to 1.2) wider with the data than without (above 1.2): not a measure of data, a sign the filter is unsettled there Each number: spread with the observations ÷ spread without them. Blank: not part of the sector's template.

sector | Capacity | Output | Utilization | Load factor | Shipments | New orders | Order book | Overdue orders | Phantom orders | Lost demand | Lead time | Price | Unit cost | Finished inventory | Input inventory | Capacity in use | Capacity announced | Capacity under construction

Airlines | 0.13 | 0.05 | 0.30 | 0.21 | 0.49 | 1.32 | 0.78 |  |  | 1.25 | 0.78 | 0.09 | 0.34 |  |  |  |  |

Autos | 0.02 | 0.14 | 0.06 |  | 0.52 | 0.65 | 0.40 | 0.42 | 0.48 |  | 0.51 | 0.37 | 0.34 | 0.36 | 0.99 |  |  |

Chemicals | 0.08 | 0.21 | 0.07 |  | 0.63 | 0.71 | 0.12 | 0.06 | 0.06 |  | 0.39 | 0.07 | 0.46 | 1.27 | 0.90 |  |  |

Data centers | 0.28 | 0.11 | 0.14 |  | 0.92 | 2.74 | 0.93 | 1.00 | 1.00 |  | 1.03 | 0.80 | 0.81 |  |  | 0.11 | 0.59 | 0.15

Food | 0.27 | 0.42 | 0.42 |  | 0.52 | 0.73 | 0.69 | 0.47 | 0.31 |  | 0.78 | 0.70 | 0.81 | 0.85 | 0.77 |  |  |

Hospitals | 0.51 | 0.30 | 0.85 | 0.74 | 0.95 | 0.97 | 0.95 |  |  | 2.71 | 0.97 | 0.16 | 0.33 |  |  |  |  |

Hotels | 0.37 | 0.28 | 0.80 | 0.71 | 0.94 | 1.01 | 0.94 |  |  | 0.64 | 0.99 | 0.23 | 0.73 |  |  |  |  |

Housing | 0.59 | 0.38 | 0.32 |  | 0.30 | 4.84 | 0.20 | 0.23 | 0.40 |  | 0.31 | 0.28 | 0.64 | 0.98 | 1.00 |  |  |

Machinery | 0.27 | 10.90 | 4.69 |  | 0.96 | 2.36 | 0.38 | 0.34 | 0.17 |  | 0.67 | 0.79 | 0.86 | 177.00 | 1.03 |  |  |

Oil and gas | 0.11 | 0.20 | 0.08 |  | 0.71 | 0.87 | 0.48 | 0.34 | 0.82 |  | 0.78 | 0.36 | 0.30 | 0.37 | 1.01 |  | 0.64 | 0.41

Retail | 0.10 | 0.14 | 0.34 | 1.37 | 1.86 | 2.27 | 2.27 |  |  | 1.42 | 0.77 | 0.04 | 0.15 | 0.14 |  |  |  |

Semiconductors | 0.03 | 0.14 | 0.15 |  | 0.17 | 0.63 | 0.07 | 0.06 | 0.22 |  | 0.23 | 0.07 | 0.25 | 8.34 | 0.96 |  | 0.24 | 0.30

Steel | 0.04 | 0.27 | 0.03 |  | 0.50 | 1.03 | 0.21 | 0.22 | 0.26 |  | 0.09 | 0.14 | 0.43 | 0.51 | 1.00 |  |  |

Wholesale | 0.29 | 0.52 | 0.38 | 0.80 | 0.93 | 0.86 | 0.88 |  |  | 0.18 | 0.80 | 0.29 | 0.36 | 0.06 |  |  |  |
