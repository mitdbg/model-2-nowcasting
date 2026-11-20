<!-- Evaluation › What the data pin down, for forecast c2b0f986-4fc0-5f99-aeef-7b800ddfc096; the page: https://mitdbg.github.io/model-2-nowcasting/evaluation.html?set=c2b0f986-4fc0-5f99-aeef-7b800ddfc096; inputs 691292a5b4dd10c3 -->

World shown  5 of 5 worlds in this bundle

In progress. This page is being rewritten to describe every world of the bundle together. For now it describes one world, chosen above.

# What the data pin down

Before it sees any data, the model has a rough idea of each entity parameter: a prior, a range of plausible values. Fitting the model to the observations narrows that range. The sd ratio compares the two: the width of the range after fitting divided by its width before. A parameter is labeled

- Informative when its sd ratio is below 0.8: the data narrowed its range by at least a fifth;

- Uninformative when it is 0.8 or more: its estimate is about as uncertain as before, so it rests on the prior rather than on the data.

An example. The normal markup μ of Cascade Steel (Steel):
before the data (prior)

-0.0345 to 0.294 after fitting

0.0736 to 0.220
Ranges are 90% ranges. The fitted range is 0.44 times as wide as the prior's, so the sd ratio is 0.44 and the parameter is Informative.

Only tracked entities have their own parameters; representative entities take their group's averages. Part of the narrowing comes from the pull toward the entity's group average (L14), so a sparsely observed entity can look informative because it borrowed from similar entities. The stricter sd ratio removes that part: it divides the width after fitting by the width the parameter would have from its group average alone (the spread of entities around their group's average). Below 0.8, the entity's own observations narrowed its range beyond what its group already says. The two ratios differ only for the parameters pooled toward the group average; observation parameters and starting states have no group average, so their two ratios are the same.

1,408

entity parameters fitted

1,274

informative (90%)

134

uninformative (10%)

834

informative by the stricter ratio (59%)

## Entity parameters

By parameter By sector By entity Every parameter

Sector

parameter | meaning | entities | informative |  | median sd ratio  | informative, stricter | median stricter ratio

b (emissions) | Emissions slope: percent change in emissions per percent change in output. | 47 |   | 20 of 47 | 0.81 | 20 of 47 | 0.81

δ | Capacity drift: monthly change in capacity outside announced projects (L1). | 90 |   | 58 of 90 | 0.73 | 51 of 90 | 0.79

m0 | Starting markup: markup in the first month, log scale. | 115 |   | 76 of 115 | 0.65 | 76 of 115 | 0.65

c0 | Starting unit cost: unit cost in the first month, log scale. | 115 |   | 82 of 115 | 0.33 | 82 of 115 | 0.33

listing gap | List-price gap: log list price minus log transaction price. | 11 |   | 8 of 11 | 0.57 | 8 of 11 | 0.57

α | Normal utilization: utilization in a month of normal demand, logit scale (L3). | 105 |   | 105 of 105 | 0.32 | 71 of 105 | 0.68

β | Demand response: how far utilization rises with demand pressure (L3). | 105 |   | 105 of 105 | 0.50 | 40 of 105 | 0.86

w | pass-through of input cost to unit cost (L4) | 115 |   | 115 of 115 | 0.46 | 17 of 115 | 0.95

μ | Normal markup: price over unit cost in a normal month, log scale (L5). | 115 |   | 115 of 115 | 0.44 | 17 of 115 | 0.96

õ | Order level: new orders relative to the level that keeps the order book steady, log scale (L6). | 115 |   | 115 of 115 | 0.18 | 101 of 115 | 0.49

βO | Order response: elasticity of new orders to real demand (L6). | 115 |   | 115 of 115 | 0.48 | 55 of 115 | 0.81

ℓ | Normal order-book cover: months of output the order book holds in a normal month (L8–L9). | 115 |   | 115 of 115 | 0.36 | 68 of 115 | 0.73

a (emissions) | Emissions level: log emissions at the reference output. | 47 |   | 47 of 47 | 0.04 | 47 of 47 | 0.04

k0 | Starting capacity: capacity in the first month, log scale. | 115 |   | 115 of 115 | 0.06 | 115 of 115 | 0.06

lead-time bias | Lead-time bias: quoted lead time over the model's lead time, log scale. | 11 |   | 11 of 11 | 0.29 | 11 of 11 | 0.29

unorm | Normal occupancy: share of capacity leased in a normal month (L18). | 10 |   | 10 of 10 | 0.25 | 10 of 10 | 0.59

õA | Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19). | 25 |   | 25 of 25 | 0.31 | 18 of 25 | 0.57

z0 | Starting utilization: utilization in the first month relative to normal, logit scale. | 10 |   | 10 of 10 | 0.37 | 10 of 10 | 0.37

lfnorm | Normal load factor: share of seat-miles sold in a normal month (L17). | 22 |   | 22 of 22 | 0.32 | 12 of 22 | 0.77

export share | Export share: share of shipments exported. | 5 |   | 5 of 5 | 0.06 | 5 of 5 | 0.06

Least informed first.

## Sector totals

The same question for the sector totals the forecasts show, such as a sector's output or its order book. The model runs its filter twice over the same history, once with the observations and once without, and compares how much its copies of the world disagree. Where the observations barely narrow that disagreement, the total is mostly from the model: its estimate comes from the equations and drivers, not from data, and it would look stable from one run to the next even if it were wrong. The forecast charts carry the same tag.

pinned by the data (ratio 0.5 or less) partly (0.5 to 0.8) mostly from the model (0.8 to 1.2) wider with the data than without (above 1.2): not a measure of data, a sign the filter is unsettled there Each number: spread with the observations ÷ spread without them. Blank: not part of the sector's template.

sector | Capacity | Output | Utilization | Load factor | Shipments | New orders | Order book | Overdue orders | Phantom orders | Lost demand | Lead time | Price | Unit cost | Finished inventory | Input inventory | Capacity in use | Capacity announced | Capacity under construction

Airlines | 0.17 | 0.07 | 0.30 | 0.25 | 0.50 | 1.64 | 0.73 |  |  | 1.08 | 0.88 | 0.08 | 0.27 |  |  |  |  |

Autos | 0.06 | 0.12 | 0.10 |  | 0.22 | 0.66 | 0.52 | 0.27 | 0.21 |  | 0.43 | 0.50 | 0.50 | 0.93 | 0.99 |  |  |

Chemicals | 0.14 | 0.19 | 0.10 |  | 0.59 | 0.56 | 0.20 | 0.13 | 0.11 |  | 0.42 | 0.19 | 0.42 | 1.21 | 0.93 |  |  |

Data centers | 0.30 | 0.15 | 0.19 |  | 1.02 | 2.58 | 0.91 | 1.00 | 1.00 |  | 1.00 | 0.71 | 0.74 |  |  | 0.15 | 0.59 | 0.16

Food | 0.19 | 0.25 | 0.13 |  | 0.64 | 0.67 | 0.81 | 1.16 | 0.96 |  | 0.78 | 0.57 | 0.78 | 1.29 | 0.97 |  |  |

Hospitals | 0.47 | 0.38 | 0.62 | 0.90 | 0.92 | 0.94 | 0.93 |  |  | 553.00 | 1.04 | 0.17 | 0.36 |  |  |  |  |

Hotels | 0.31 | 0.29 | 0.83 | 0.66 | 0.96 | 1.03 | 0.98 |  |  | 285.00 | 0.97 | 0.26 | 0.65 |  |  |  |  |

Housing | 0.47 | 0.33 | 0.32 |  | 0.27 | 11.50 | 0.11 | 0.11 | 0.29 |  | 0.16 | 0.28 | 0.78 | 0.71 | 1.00 |  |  |

Machinery | 0.19 | 8.70 | 3.34 |  | 0.67 | 3.33 | 0.11 | 0.08 | 0.31 |  | 0.48 | 1.12 | 0.60 | 2.94 | 0.97 |  |  |

Oil and gas | 0.05 | 0.10 | 0.03 |  | 0.39 | 0.67 | 0.09 | 0.05 | 0.03 |  | 0.10 | 0.09 | 0.27 | 1.70 | 0.89 |  | 0.17 | 0.13

Retail | 0.16 | 0.36 | 0.21 | 1.71 | 2.64 | 2.89 | 2.65 |  |  | 0.93 | 0.85 | 0.05 | 0.17 | 0.21 |  |  |  |

Semiconductors | 0.02 | 0.14 | 0.06 |  | 0.26 | 0.72 | 0.09 | 0.07 | 0.09 |  | 0.18 | 0.10 | 0.25 | 0.92 | 0.99 |  | 0.56 | 0.28

Steel | 0.08 | 0.29 | 0.04 |  | 0.45 | 0.97 | 0.31 | 0.30 | 0.24 |  | 0.17 | 0.22 | 0.36 | 0.82 | 1.00 |  |  |

Wholesale | 0.22 | 0.53 | 0.30 | 0.64 | 0.96 | 0.94 | 0.93 |  |  | 0.01 | 0.89 | 0.29 | 0.35 | 0.02 |  |  |  |
