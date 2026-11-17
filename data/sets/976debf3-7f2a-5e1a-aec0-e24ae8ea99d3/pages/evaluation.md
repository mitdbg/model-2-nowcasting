<!-- Evaluation › What the data pin down, for forecast 976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; the page: https://mitdbg.github.io/model-2-nowcasting/evaluation.html?set=976debf3-7f2a-5e1a-aec0-e24ae8ea99d3; inputs 8d9de0fc6666f2de -->

World shown World seed 20261112 (the bundle's only world)

In progress. This tab is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# What the data pin down

Before it sees any data, the model has a rough idea of each entity parameter: a prior, a range of plausible values. Fitting the model to the observations narrows that range. The sd ratio compares the two: the width of the range after fitting divided by its width before. A parameter is labeled

- Informative when its sd ratio is below 0.8: the data narrowed its range by at least a fifth;

- Uninformative when it is 0.8 or more: its estimate is about as uncertain as before, so it rests on the prior rather than on the data.

An example. The normal markup μ of Cascade Steel (Steel):
before the data (prior)

-0.0345 to 0.294 after fitting

0.0533 to 0.203
Ranges are 90% ranges. The fitted range is 0.46 times as wide as the prior's, so the sd ratio is 0.46 and the parameter is Informative.

Only tracked entities have their own parameters; representative entities take their group's averages. Part of the narrowing comes from the pull toward the entity's group average (L14), so a sparsely observed entity can look informative because it borrowed from similar entities. The stricter sd ratio removes that part: it divides the width after fitting by the width the parameter would have from its group average alone (the spread of entities around their group's average). Below 0.8, the entity's own observations narrowed its range beyond what its group already says. The two ratios differ only for the parameters pooled toward the group average; observation parameters and starting states have no group average, so their two ratios are the same.

1,408

entity parameters fitted

1,284

informative (91%)

124

uninformative (9%)

1,284

informative by the stricter ratio (91%)

## Entity parameters

By parameter By sector By entity Every parameter

Sector

parameter | meaning | entities | informative |  | median sd ratio  | informative, stricter | median stricter ratio

b (emissions) | Emissions slope: percent change in emissions per percent change in output. | 47 |   | 26 of 47 | 0.78 | 26 of 47 | 0.78

listing gap | List-price gap: log list price minus log transaction price. | 11 |   | 7 of 11 | 0.55 | 7 of 11 | 0.55

m0 | Starting markup: markup in the first month, log scale. | 115 |   | 74 of 115 | 0.62 | 74 of 115 | 0.62

δ | Capacity drift: monthly change in capacity outside announced projects (L1). | 90 |   | 58 of 90 | 0.74 | 58 of 90 | 0.74

c0 | Starting unit cost: unit cost in the first month, log scale. | 115 |   | 89 of 115 | 0.29 | 89 of 115 | 0.29

α | Normal utilization: utilization in a month of normal demand, logit scale (L3). | 105 |   | 105 of 105 | 0.35 | 105 of 105 | 0.35

β | Demand response: how far utilization rises with demand pressure (L3). | 105 |   | 105 of 105 | 0.56 | 105 of 105 | 0.56

w | pass-through of input cost to unit cost (L4) | 115 |   | 115 of 115 | 0.49 | 115 of 115 | 0.49

μ | Normal markup: price over unit cost in a normal month, log scale (L5). | 115 |   | 115 of 115 | 0.46 | 115 of 115 | 0.46

õ | Order level: new orders relative to the level that keeps the order book steady, log scale (L6). | 115 |   | 115 of 115 | 0.17 | 115 of 115 | 0.17

βO | Order response: elasticity of new orders to real demand (L6). | 115 |   | 115 of 115 | 0.51 | 115 of 115 | 0.51

ℓ | Normal order-book cover: months of output the order book holds in a normal month (L8–L9). | 115 |   | 115 of 115 | 0.40 | 115 of 115 | 0.40

a (emissions) | Emissions level: log emissions at the reference output. | 47 |   | 47 of 47 | 0.04 | 47 of 47 | 0.04

k0 | Starting capacity: capacity in the first month, log scale. | 115 |   | 115 of 115 | 0.05 | 115 of 115 | 0.05

lead-time bias | Lead-time bias: quoted lead time over the model's lead time, log scale. | 11 |   | 11 of 11 | 0.40 | 11 of 11 | 0.40

unorm | Normal occupancy: share of capacity leased in a normal month (L18). | 10 |   | 10 of 10 | 0.29 | 10 of 10 | 0.29

õA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19). | 25 |   | 25 of 25 | 0.27 | 25 of 25 | 0.27

z0 | Starting utilization: utilization in the first month relative to normal, logit scale. | 10 |   | 10 of 10 | 0.43 | 10 of 10 | 0.43

lfnorm | Normal load factor: share of seat-miles sold in a normal month (L17). | 22 |   | 22 of 22 | 0.30 | 22 of 22 | 0.30

export share | Export share: share of shipments exported. | 5 |   | 5 of 5 | 0.08 | 5 of 5 | 0.08

Least informed first.

## Sector totals

The same question for the sector totals the forecasts show, such as a sector's output or its order book. The model runs its filter twice over the same history, once with the observations and once without, and compares how much its copies of the world disagree. Where the observations barely narrow that disagreement, the total is mostly from the model: its estimate comes from the equations and drivers, not from data, and it would look stable from one run to the next even if it were wrong. The forecast charts carry the same tag.

pinned by the data (ratio 0.5 or less) partly (0.5 to 0.8) mostly from the model (0.8 to 1.2) wider with the data than without (above 1.2): not a measure of data, a sign the filter is unsettled there Each number: spread with the observations ÷ spread without them. Blank: not part of the sector's template.

sector | Capacity | Output | Utilization | Load factor | Shipments | New orders | Order book | Overdue orders | Phantom orders | Lost demand | Lead time | Price | Unit cost | Finished inventory | Input inventory | Capacity in use | Capacity announced | Capacity under construction

Airlines | 0.11 | 0.05 | 0.27 | 0.24 | 0.53 | 1.46 | 0.69 |  |  | 1.29 | 0.74 | 0.09 | 0.27 |  |  |  |  |

Autos | 0.06 | 0.17 | 0.07 |  | 0.61 | 0.66 | 0.27 | 0.25 | 0.23 |  | 0.55 | 0.22 | 0.40 | 0.85 | 0.99 |  |  |

Chemicals | 0.09 | 0.28 | 0.09 |  | 0.72 | 0.89 | 0.24 | 0.10 | 0.07 |  | 0.65 | 0.14 | 0.40 | 0.61 | 0.97 |  |  |

Data centers | 0.28 | 0.13 | 0.14 |  | 0.93 | 2.45 | 0.88 | 1.00 | 1.00 |  | 1.00 | 0.58 | 0.57 |  |  | 0.13 | 0.57 | 0.18

Food | 0.23 | 0.29 | 0.15 |  | 0.66 | 0.63 | 0.16 | 0.11 | 0.08 |  | 0.57 | 0.23 | 0.83 | 1.17 | 0.97 |  |  |

Hospitals | 0.52 | 0.32 | 0.79 | 0.79 | 0.94 | 0.96 | 0.94 |  |  | 4.00 | 0.99 | 0.23 | 0.50 |  |  |  |  |

Hotels | 0.37 | 0.28 | 0.59 | 0.65 | 0.94 | 1.01 | 0.95 |  |  | 1.41 | 0.94 | 0.27 | 0.62 |  |  |  |  |

Housing | 0.44 | 0.48 | 0.28 |  | 0.34 | 4.20 | 0.31 | 0.35 | 0.30 |  | 0.36 | 0.45 | 0.54 | 0.97 | 1.00 |  |  |

Machinery | 0.16 | 0.58 | 0.14 |  | 0.57 | 2.21 | 0.13 | 0.12 | 0.05 |  | 0.14 | 0.09 | 0.50 | 0.73 | 1.00 |  |  |

Oil and gas | 0.11 | 0.21 | 0.06 |  | 0.75 | 1.00 | 0.99 | 1.93 | 0.59 |  | 0.39 | 0.35 | 0.26 | 0.75 | 0.99 |  | 0.74 | 0.59

Retail | 0.20 | 0.43 | 0.25 | 3.25 | 3.57 | 3.56 | 3.42 |  |  | 0.86 | 0.93 | 0.07 | 0.20 | 0.17 |  |  |  |

Semiconductors | 0.01 | 0.13 | 0.07 |  | 0.23 | 1.31 | 0.08 | 0.07 | 0.07 |  | 0.15 | 0.13 | 0.39 | 0.61 | 0.94 |  | 0.39 | 0.28

Steel | 0.07 | 0.38 | 0.06 |  | 0.73 | 1.03 | 0.35 | 0.42 | 0.07 |  | 0.15 | 0.23 | 0.61 | 0.71 | 1.00 |  |  |

Wholesale | 0.49 | 0.65 | 0.53 | 0.99 | 0.88 | 0.86 | 0.90 |  |  | 0.01 | 1.04 | 0.41 | 0.47 | 0.15 |  |  |  |
