<!-- Evaluation › What the data pin down, for forecast 9913b093-0e9e-570c-8a80-85802c3e6197; the page: https://mitdbg.github.io/model-2-nowcasting/evaluation.html?set=9913b093-0e9e-570c-8a80-85802c3e6197; inputs 5b2f29cd6cbb3457 -->

World shown  5 of 5 worlds in this bundle

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# What the data pin down

Before it sees any data, the model has a rough idea of each entity parameter: a prior, a range of plausible values. Fitting the model to the observations narrows that range. The sd ratio compares the two: the width of the range after fitting divided by its width before. A parameter is labeled

- Informative when its sd ratio is below 0.8: the data narrowed its range by at least a fifth;

- Uninformative when it is 0.8 or more: its estimate is about as uncertain as before, so it rests on the prior rather than on the data.

An example. The normal markup μ of Cascade Steel (Steel):
before the data (prior)

-0.0345 to 0.294 after fitting

0.0452 to 0.200
Ranges are 90% ranges. The fitted range is 0.47 times as wide as the prior's, so the sd ratio is 0.47 and the parameter is Informative.

Only tracked entities have their own parameters; representative entities take their group's averages. Part of the narrowing comes from the pull toward the entity's group average (L14), so a sparsely observed entity can look informative because it borrowed from similar entities. The stricter sd ratio removes that part: it divides the width after fitting by the width the parameter would have from its group average alone (the spread of entities around their group's average). Below 0.8, the entity's own observations narrowed its range beyond what its group already says. The two ratios differ only for the parameters pooled toward the group average; observation parameters and starting states have no group average, so their two ratios are the same.

1,408

entity parameters fitted

1,271

informative (90%)

137

uninformative (10%)

794

informative by the stricter ratio (56%)

## Entity parameters

By parameter By sector By entity Every parameter

Sector

parameter | meaning | entities | informative |  | median sd ratio  | informative, stricter | median stricter ratio

b (emissions) | Emissions slope: percent change in emissions per percent change in output. | 47 |   | 22 of 47 | 0.83 | 22 of 47 | 0.83

δ | Capacity drift: monthly change in capacity outside announced projects (L1). | 90 |   | 56 of 90 | 0.76 | 43 of 90 | 0.81

m0 | Starting markup: markup in the first month, log scale. | 115 |   | 74 of 115 | 0.65 | 74 of 115 | 0.65

c0 | Starting unit cost: unit cost in the first month, log scale. | 115 |   | 83 of 115 | 0.40 | 83 of 115 | 0.40

listing gap | List-price gap: log list price minus log transaction price. | 11 |   | 10 of 11 | 0.59 | 10 of 11 | 0.59

w | pass-through of input cost to unit cost (L4) | 115 |   | 111 of 115 | 0.47 | 14 of 115 | 0.96

α | Normal utilization: utilization in a month of normal demand, logit scale (L3). | 105 |   | 105 of 105 | 0.32 | 73 of 105 | 0.69

β | Demand response: how far utilization rises with demand pressure (L3). | 105 |   | 105 of 105 | 0.57 | 33 of 105 | 0.89

μ | Normal markup: price over unit cost in a normal month, log scale (L5). | 115 |   | 115 of 115 | 0.45 | 14 of 115 | 0.97

õ | Order level: new orders relative to the level that keeps the order book steady, log scale (L6). | 115 |   | 115 of 115 | 0.20 | 97 of 115 | 0.52

βO | Order response: elasticity of new orders to real demand (L6). | 115 |   | 115 of 115 | 0.50 | 48 of 115 | 0.83

ℓ | Normal order-book cover: months of output the order book holds in a normal month (L8–L9). | 115 |   | 115 of 115 | 0.40 | 54 of 115 | 0.82

a (emissions) | Emissions level: log emissions at the reference output. | 47 |   | 47 of 47 | 0.04 | 47 of 47 | 0.04

k0 | Starting capacity: capacity in the first month, log scale. | 115 |   | 115 of 115 | 0.05 | 115 of 115 | 0.05

lead-time bias | Lead-time bias: quoted lead time over the model's lead time, log scale. | 11 |   | 11 of 11 | 0.42 | 11 of 11 | 0.42

unorm | Normal occupancy: share of capacity leased in a normal month (L18). | 10 |   | 10 of 10 | 0.30 | 10 of 10 | 0.67

õA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19). | 25 |   | 25 of 25 | 0.31 | 18 of 25 | 0.56

z0 | Starting utilization: utilization in the first month relative to normal, logit scale. | 10 |   | 10 of 10 | 0.48 | 10 of 10 | 0.48

lfnorm | Normal load factor: share of seat-miles sold in a normal month (L17). | 22 |   | 22 of 22 | 0.33 | 13 of 22 | 0.73

export share | Export share: share of shipments exported. | 5 |   | 5 of 5 | 0.11 | 5 of 5 | 0.11

Least informed first.

## Sector totals

The same question for the sector totals the forecasts show, such as a sector's output or its order book. The model runs its filter twice over the same history, once with the observations and once without, and compares how much its copies of the world disagree. Where the observations barely narrow that disagreement, the total is mostly from the model: its estimate comes from the equations and drivers, not from data, and it would look stable from one run to the next even if it were wrong. The forecast charts carry the same tag.

pinned by the data (ratio 0.5 or less) partly (0.5 to 0.8) mostly from the model (0.8 to 1.2) wider with the data than without (above 1.2): not a measure of data, a sign the filter is unsettled there Each number: spread with the observations ÷ spread without them. Blank: not part of the sector's template.

sector | Capacity | Output | Utilization | Load factor | Shipments | New orders | Order book | Overdue orders | Phantom orders | Lost demand | Lead time | Price | Unit cost | Finished inventory | Input inventory | Capacity in use | Capacity announced | Capacity under construction

Airlines | 0.21 | 0.07 | 0.39 | 0.28 | 0.49 | 1.59 | 0.74 |  |  | 0.71 | 0.76 | 0.06 | 0.25 |  |  |  |  |

Autos | 0.08 | 0.17 | 0.09 |  | 0.62 | 0.67 | 0.51 | 0.76 | 0.75 |  | 0.58 | 0.55 | 0.89 | 0.64 | 0.99 |  |  |

Chemicals | 0.08 | 0.24 | 0.07 |  | 0.66 | 0.71 | 0.19 | 0.12 | 0.21 |  | 0.30 | 0.09 | 0.27 | 1.06 | 0.75 |  |  |

Data centers | 0.23 | 0.12 | 0.13 |  | 0.97 | 2.48 | 0.93 | 1.00 | 1.00 |  | 1.01 | 0.69 | 0.67 |  |  | 0.12 | 0.59 | 0.14

Food | 0.14 | 0.17 | 0.14 |  | 0.24 | 0.75 | 0.70 | 0.35 | 0.34 |  | 0.67 | 0.40 | 0.91 | 0.60 | 0.88 |  |  |

Hospitals | 0.48 | 0.37 | 0.83 | 0.84 | 0.95 | 0.96 | 0.95 |  |  | 6.91 | 0.97 | 0.15 | 0.32 |  |  |  |  |

Hotels | 0.20 | 0.20 | 0.71 | 0.66 | 0.92 | 0.99 | 0.96 |  |  | 8.46 | 0.95 | 0.25 | 0.65 |  |  |  |  |

Housing | 0.50 | 0.33 | 0.28 |  | 0.36 | 5.20 | 0.28 | 0.32 | 0.40 |  | 0.42 | 0.20 | 0.53 | 0.84 | 0.99 |  |  |

Machinery | 0.07 | 0.20 | 0.07 |  | 0.22 | 1.65 | 0.08 | 0.05 | 0.18 |  | 0.17 | 0.05 | 0.29 | 1.01 | 0.98 |  |  |

Oil and gas | 0.06 | 0.33 | 0.08 |  | 0.63 | 1.13 | 2.43 | 4.41 | 1.41 |  | 0.46 | 1.10 | 0.28 | 12.20 | 0.99 |  | 1.07 | 0.50

Retail | 0.15 | 0.51 | 0.09 | 2.97 | 2.69 | 2.81 | 2.67 |  |  | 3.33 | 0.96 | 0.05 | 0.10 | 0.14 |  |  |  |

Semiconductors | 0.04 | 0.10 | 0.09 |  | 0.15 | 0.76 | 0.05 | 0.05 | 0.11 |  | 0.14 | 0.10 | 0.35 | 0.80 | 0.90 |  | 0.39 | 0.17

Steel | 0.03 | 0.29 | 0.05 |  | 0.74 | 1.08 | 0.32 | 0.38 | 0.23 |  | 0.21 | 0.23 | 0.53 | 1.19 | 0.99 |  |  |

Wholesale | 0.33 | 0.38 | 0.39 | 0.69 | 0.92 | 0.90 | 0.87 |  |  | 0.46 | 0.95 | 0.24 | 0.28 | 0.18 |  |  |  |
