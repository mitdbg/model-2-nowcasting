<!-- Overview › Model Structure, for forecast 0c0a014b-d739-5e72-95a6-0b4ec4f3753e; the page: https://mitdbg.github.io/model-2-nowcasting/forecast_model.html?set=0c0a014b-d739-5e72-95a6-0b4ec4f3753e -->

# Model Structure

Model 2 describes every entity by a handful of hidden states, such as its capacity, its order book and its unit cost, that change month by month. One set of equations moves them forward a month at a time.

Drivers from the sector input bundle push them; parameters set how strongly, and how fast each state returns to normal; and random shocks each month account for the events the equations don't describe, such as an outage, a strike or a surprise order. Observation equations say what each kind of observation would read, given the states.

Every equation is per entity, and t is the month. Sector quantities (the drivers, real demand D, sector capacity K) are the same for every entity in a sector. Not every equation applies to every sector: each sector's template switches parts on or off. Equations marked with template names apply only to those templates; unmarked ones apply to all. The tags (L1, L2, …) number the equations; the rest of the site uses them too.

Every symbol in an equation is colored by where it comes from, and the rows under the equation describe each one, using the same colors: Computed here what the equation works out; Learned by the fit a parameter the fit estimates from past observations, per entity or per sector; From the sector input bundle a driver, taken as given; From other equations last month's level, or a value another equation worked out this month; Fixed, not learned a constant set from the data or known in advance; Random shock drawn afresh each month.

## One month at a glance

a value from this month last month's level, carried forward

driver, from the sector input bundle hidden state, or a quantity the model works out from the states

The chain for a factory that makes goods to order; hover over (or tap) a box for its equation. Demand brings orders into the order book; capacity and utilization set output; orders falling due are shipped from output and stock, and what cannot be shipped stays in the book as overdue. Solid arrows carry this month's values, so they never point left; dashed arrows carry last month's, so they never point right; each state also builds on its own last value, which the popups list. Observations are not drawn: after this step, the filter corrects the states with the month's observations (see How the forecast is made).

The three arrows marked "feedback" carry last month's tightness (how far the entity is booked beyond normal) and lead time back to the start of the chain. Increased utilization (L3) mitigates a shortage by working off the book, and a higher markup (L5) raises prices while it lasts. Over-ordering (L6) exacerbates it: extra orders lengthen lead times, which bring still more orders, until lead times fall and cancellations (L7) reduce shortages. Other templates vary the chain; an airline, for example, loses the sales it cannot serve and has no over-ordering loop.

## Hidden states

The model's state for an entity at the end of a month. None of them is seen directly; observations see them through the equations of the observations section.

symbol | quantity | unit

k | capacity, on the log scale: the most the entity could make or serve in a month | log physical units per month

z | utilization, on the logit scale; utilization itself is u = 1 / (1 + e−z), between 0 and 1 | –

c | unit cost, log | log dollars per unit

m | markup of price over unit cost, log | –

Bsched | scheduled order book: orders accepted, not yet due | units

Blate | overdue orders: due, not yet shipped | units

P | phantom orders: the part of the order book placed only because lead times were long | units

G | finished stock | units

S | input inventory (raw materials) | input units

LT | lead time quoted for a new order | months

A, U | capacity announced, and under construction (pipeline templates) | units per month

Occ | capacity in use under lease (occupancy template) | units

Some quantities derived from hidden state each month:

- output Q = u·ek

- price p = c + m (log)

- the order book B = Bsched + Blate, which is what filings call backlog

- the order-book position ob = (B − G) / Q, how many months ahead the entity is booked, net of stock

## Drivers

A driver is a sector-wide series that pushes the entities but that Model 2 does not model itself: the model takes it as given, from outside, and asks how each entity responds to it. Each sector has three, all on the log scale and the same for every entity in the sector:

- demand d: what buyers want from the sector, such as new orders across the industry

- price pr: the sector's price level

- input cost π: the cost of what the sector buys to make its output

These three series, and the official sector statistics of L16, are the only values the equations take from the bundle. Nothing about a driver is learned; what the fit learns is how strongly each entity responds to it, for example βO for demand (L6) and w for input cost (L4).

They arrive in the sector input bundle, month by month: history up to the last month published, then a nowcast and a forecast. Nobody knows those later months exactly, and even history is sometimes revised, so each driver comes not as one series but as 100 draws. A draw is one complete, plausible path of the series over every month, consistent with what was known on the as-of date. The draws agree where the series is well known and fan out where it is not, so their spread is the driver's uncertainty. Draw number j of each driver comes from the same scenario, so demand, price and input cost move together as they would in one possible economy.

The forecast runs as many copies of the world as there are draws, and copy j uses draw j. A copy fed a weak-demand draw sees fewer orders than one fed a strong-demand draw, so the drivers' uncertainty widens the forecast's 90% band along with the model's own shocks.

### Capacity built through a pipeline L19–L22pipeline producers, contracted capacity

Annt = ekt−1 · exp(oA + βA ht−1) · εAtannounced (L19)
At = At−1 + Annt − At−1/TA − dA At−1announced, not started (L20)
Ut = Ut−1 + At−1/TA − Ut−1/TUunder construction (L21)
ekt = ekt−1 (1 − ret) + Ut−1/TUcapacity (L22)

Fabs, wells and data centers are not switched on overnight. Firms announce new capacity in proportion to what they have, more when they are tight (h, below); projects start after about TA months (a share dA per month is abandoned), take about TU months to build, and old capacity retires at rate ret. The delay is why a capacity shortage can last years.

Computed hereAnnt capacity announced; At announced, not yet started; Ut under construction; kt capacity (log)Learned by the fitoA announcements relative to replacement, per entity; βA response of announcements to tightness, per sector; TA months from announcement to start, per sector; dA share abandoned per month, per sector; TU months to build, per sector; ret share of capacity retired per month, per sectorFrom other equationskt−1 last month's capacity (L22); At−1 last month's announced projects (L20); Ut−1 last month's projects under construction (L21); ht−1 last month's tightness (L13)Random shockεAt announcement surprise, mean 1; its typical size is learned per sector

### Occupancy: capacity in use under lease L18contracted capacity (data centers)

Freet = ekt − Occt−1 (1 − 1/term)
Startt = min(Duet, max(0, Freet))
Occt = Occt−1 (1 − 1/term) + Startt; ut = Occt / ekt; Qt = Occt
LTt = ℓ + Blatet / max(Startt, 0.01 · ekt)lead time
ht = (Occt + Blatet) / ekt − unormtightness

Leases last about term months. A lease that comes due starts if there is free capacity, and otherwise waits as an overdue order. Utilization is not chosen; it is how much is leased.

Computed hereFreet capacity free for new leases; Startt leases starting; Occt capacity in use; ut utilization; Qt output; LTt lead time; ht tightnessLearned by the fitterm average lease, months, per sector; ℓ normal pre-leasing time, months, per entity; unorm normal occupancy, per entityFrom other equationskt capacity (L22); Occt−1 last month's capacity in use (L18); Duet leases coming due (L8); Blatet leases waiting for capacity (L9)

### Lost demand in place of overdue orders L17distribution, perishable services

Blatet = 0; Lostt = Duet − Sht; Ot+1 gains r · Lostt
lft = Sht / Qtload factor
ht = lft − lfnormtightness

A flight that is full does not owe its turned-away passengers a seat later: they are lost, and a share r book again next month. Empty seats (Q − Sh) cannot be stored.

Computed hereBlatet overdue orders, always zero; Lostt demand turned away; Ot+1 next month's orders (L6); lft load factor; ht tightnessLearned by the fitr share of lost customers who book again, per sector; lfnorm normal load factor, per entity (1 where unsold goods can be stored)From other equationsDuet, Sht orders falling due, and shipments (L8); Qt output (L3)

### Real demand and demand pressure L2

Dt = dt − prtwhen demand is in dollars; otherwise Dt = dt
xt = Dt − log Kt−1

D is real sector demand: a demand series in dollars rises with prices as well as volume, so it is divided by the price driver. x is demand pressure, demand against the sector's own capacity K (the sum over its entities, from last month).

Computed hereDt real sector demand; xt demand pressureFrom the sector input bundledt the demand driver; prt the price driverFrom other equationsKt−1 last month's sector capacity, the sum of its entities' capacity (L15)

### Capacity drifts, with rare jumps L1most templates

kt = kt−1 + δ + Jt

δ is a slow drift per month; J is a jump that is nearly zero in most months and occasionally large (an expansion, a closure). Announced capacity changes are observations of k, not forced jumps, because projects slip.

Computed herekt capacity (log)Learned by the fitδ drift per month, per entityFrom other equationskt−1 last month's capacity (L1)Random shockJt a jump: near zero most months, now and then large; how heavy its tail is and its typical size are learned per sector

### Utilization returns to normal, pushed by demand and tightness L3all but contracted capacity

zt = α + φz (zt−1 − α) + β (xt − x̄) + βB ht−1 + ηt
Qt = ut · ekt

α is normal utilization; φz how slowly utilization returns to it. The entity runs harder when sector demand pressure is above its level at the start of the window (x̄), and when it is tight (booked further ahead than normal). η stands for outages, maintenance and strikes. The logit scale keeps output below capacity.

Computed herezt utilization, logit scale; ut utilization, 1 / (1 + e−zt); Qt outputLearned by the fitα normal utilization, per entity; β response to demand pressure, per entity; φz persistence, per sector; βB response to tightness, per sectorFrom other equationszt−1 last month's utilization (L3); xt demand pressure (L2); ht−1 last month's tightness (L13); kt capacity (L1)Fixed, not learnedx̄ the sector's demand pressure at the start of the fit window: average demand over its first two years against the starting capacityRandom shockηt outages, maintenance, strikes; its typical size is learned per sector

### Unit cost follows input cost L4

ct = ct−1 + w Δπt + νt

A change in the sector's input-cost driver passes through at rate w, roughly the input's share of cost. ν covers energy, labor and the entity's other cost changes.

Computed herect unit cost (log)Learned by the fitw pass-through of input cost, per entityFrom the sector input bundleΔπt this month's change in the input-cost driverFrom other equationsct−1 last month's unit cost (L4)Random shockνt the Greek letter nu: energy, labor and other cost changes; its typical size is learned per sector

### Markup returns to normal, higher when tight L5

mt = μ + φm (mt−1 − μ) + γ ht−1 + ζt
pt = ct + mt

μ is the normal markup; γ a scarcity premium: an entity booked further ahead than usual (planes fuller, sites more fully leased) raises its margin. That gives price a pattern of its own, which helps separate price from volume in revenue reports.

Computed heremt markup (log); pt price (log)Learned by the fitμ normal markup, per entity; φm persistence, per sector; γ scarcity premium, per sectorFrom other equationsmt−1 last month's markup (L5); ht−1 last month's tightness (L13); ct unit cost (L4)Random shockζt markup surprise; its typical size is learned per sector

### New orders L6

log Ogent = õ + log Obal + βO (Dt − D̄) + (kt−1 − k0) − (log Kt−1 − log K0) + log εOtgenuine orders
Ot = Ogent · (1 + ω · max(0, LTt−1 / LTnorm − 1))orders placed

Genuine orders start from the balanced level Obal (the entity's normal output at its starting capacity), move with real sector demand against its window average D̄ at elasticity βO, and follow the entity's share of sector capacity: an entity that grows faster than its sector wins a larger share of orders, and one that closes a plant loses them. õ is the entity's offset from balance. When the lead time quoted last month is longer than normal, customers over-order to secure supply (order inflation, strength ω); the extra is phantom orders.

The share term is a change from the original design, which let orders ignore the entity's own capacity: an entity that lost capacity for good then kept receiving the same orders, and its order book grew without bound.

Computed hereOgent genuine orders; Ot orders placed, genuine plus phantomLearned by the fitõ offset from balance, per entity; βO response to real demand, per entity; k0 starting capacity, per entity; ω order inflation, per sector; Obal normal orders: normal output at the starting capacity, worked out from the entity's learned parameters; LTnorm normal lead time, worked out from the entity's learned parametersFrom other equationsDt real demand, from the bundle's drivers (L2); kt−1 last month's capacity (L1); Kt−1 last month's sector capacity (L15); LTt−1 last month's lead time (L13)Fixed, not learnedD̄ average real demand over the fit window's first two years; K0 sector capacity at the window startRandom shockεOt order surprise, mean 1; its typical size is learned per sector

### Cancellations L7where order inflation is on

Xt = min( Bschedt−1 (1 − 1/ℓ), Pt−1 · min(1, χ · max(0, log(LTt−2 / LTt−1))) )

When lead times fall, customers cancel phantom orders; with χ = 3, a 10% fall cancels about 30% of them.

Computed hereXt cancellationsLearned by the fitℓ normal order-book cover, months, per entity; χ cancellation speed, per sectorFrom other equationsBschedt−1 last month's scheduled book (L9); Pt−1 last month's phantom orders (L10); LTt−1, LTt−2 lead times one and two months ago (L13)

### Orders falling due, and shipments L8

Duet = Blatet−1 + Bschedt−1 / ℓ
Sht = min(Duet, Qt + Gt−1)

Scheduled orders fall due at rate 1/ℓ a month, so an order waits ℓ months on average; ℓ is the entity's normal order-book cover. The entity ships what is due, up to what it has made plus its stock.

Computed hereDuet orders falling due; Sht shipmentsLearned by the fitℓ normal order-book cover, months, per entityFrom other equationsBlatet−1, Bschedt−1 last month's overdue and scheduled orders (L9); Qt output (L3); Gt−1 last month's finished stock (L11)

### Order book L9

Bschedt = Bschedt−1 (1 − 1/ℓ) + Ot − Xt
Blatet = Duet − Sht

New orders join the scheduled book; what falls due and cannot be shipped becomes overdue.

Computed hereBschedt scheduled orders; Blatet overdue ordersLearned by the fitℓ normal order-book cover, months, per entityFrom other equationsBschedt−1 last month's scheduled orders (L9); Ot orders placed (L6); Xt cancellations (L7); Duet, Sht orders falling due, and shipments (L8)

### Phantom orders L10where order inflation is on

Pt = clip( Pt−1 + (Ot − Ogent) − Xt − (Pt−1 / Bt−1) · Sht, 0, Bt )

Phantom orders are canceled, or shipped in proportion to their share of the book.

Computed herePt phantom ordersFrom other equationsPt−1 last month's phantom orders (L10); Ot, Ogent orders placed and genuine orders (L6); Xt cancellations (L7); Sht shipments (L8); Bt−1, Bt the order book last month and this month, scheduled plus overdue (L9)

### Finished stock L11where output can be stored

Gt = Gt−1 + Qt − Sht

Stock rises by what is made and falls by what is shipped. It lets an entity ship more than it makes in a month, and absorbs output nobody has ordered yet.

Computed hereGt finished stockFrom other equationsGt−1 last month's stock (L11); Qt output (L3); Sht shipments (L8)

### Input inventory L12where the entity stocks its input

Rt = max( a Qt − St−1, a Qt−1 + (n a Qt−1 − St−1) / τ, 0 )
St = St−1 + Rt − a Qt

a is input per unit of output (1.1 tonnes of scrap per tonne of steel); the entity aims for n months of input in stock and closes a gap over τ months. Purchases R always cover the month's use: inputs can always be bought.

Computed hereRt purchases of input; St input inventoryLearned by the fita input per unit of output, per sector; n target stock, months of use, per sector; τ months to close a gap to target, per sectorFrom other equationsQt, Qt−1 output this month and last (L3); St−1 last month's input inventory (L12)

### Lead time, order-book position and tightness L13

LTt = transit + proc + max(0, Bt − Gt) / Qt + Ct
Ct = (ut / (1 − ut)) · (ca² + cs²) / 2 · proccongestion
ht = obt − (ℓ − g)tightness

The quoted lead time is shipping time, processing time, the time to work through the order book ahead of a new order (net of stock), and extra waiting that grows sharply as utilization nears 1. Tightness h is how far the entity is booked beyond normal; it is zero when the order book is ℓ months of output and stock is at its target of g months. Other templates measure tightness their own way: the load factor above its normal level for airlines and hotels, and capacity in use plus waiting customers above normal occupancy for data centers. Tightness feeds back into L3, L5, L6 and L19.

Computed hereLTt quoted lead time; Ct congestion wait; ht tightnessLearned by the fitproc processing time, months, per sector; ca² + cs² variability of arrivals and processing, per sector; ℓ normal order-book cover, per entity; g target finished stock, months of output, per sectorFrom other equationsBt the order book (L9); Gt finished stock (L11); Qt, ut output and utilization (L3); obt order-book position, (B − G) / Q, from the order book (L9), finished stock (L11) and output (L3)Fixed, not learnedtransit shipping time, known from geography

## Shocks

Every shock is independent across entities, months and equations. Their sizes are sector parameters.

shock | equation | distribution

capacity jump J | L1 | Student-t with νJ degrees of freedom and scale sJ: mostly tiny, occasionally large

utilization η | L3 | normal, sd ση

unit cost ν | L4 | normal, sd σν

markup ζ | L5 | normal, sd σζ

orders εO | L6 | lognormal with mean 1, log sd σO

announcements εA | L19 | lognormal with mean 1, log sd σA

A representative entity stands for many establishments, so it moves more smoothly than one: its shocks are divided by the square root of the number it stands for, and it has no capacity jumps.

## Templates

A steel mill, an airline and a data center run the same equations with different parts switched on. A template is a named set of switches; each sector has one. A part switched off fixes its states at zero. Open a template to see its month as a diagram, drawn like the one above; hover over (or tap) a box for its equation.

make to order — steel, machinery, housing; in this world: Steel, Housing, Machinery capacity drifts · output is a monthly flow · finished stock · unserved demand waits · input inventory · over-ordering

The chain drawn above. Goods are made against orders, and the normal order book runs months ahead.

make to stock — chemicals, food, autos; in this world: Autos, Chemicals, Food capacity drifts · output is a monthly flow · finished stock · unserved demand waits · input inventory · over-ordering

The same chain as make to order; only the parameters differ. The normal order book is short (about a month), and most orders ship from finished stock.

distribution — retail, wholesale; in this world: Retail, Wholesale capacity drifts · output is a monthly flow · finished stock · unserved demand lost · no input inventory · no over-ordering

Output is goods received for sale, and there is no input inventory or over-ordering. A sale that finds nothing on hand is lost (L17), and a share of those customers come back next month. Tightness is the share of goods received that sells.

perishable service — airlines, hotels, hospitals; in this world: Airlines, Hospitals, Hotels capacity drifts · output is a monthly flow · no finished stock · unserved demand lost · no input inventory · no over-ordering

Output cannot be stored: an empty seat or room-night is gone. Customers turned away are lost (L17), and a share book again next month. Tightness is how full the entity is (its load factor) against normal.

contracted capacity — data centers; in this world: Data centers capacity through a pipeline · output is capacity in use · no finished stock · unserved demand waits · no input inventory · over-ordering

Capacity is built through a pipeline (L19–L22), and output is capacity in use under lease (L18). A lease that comes due waits if no capacity is free, so tightness counts waiting customers as well as capacity in use; a tight site announces more capacity.

pipeline producer — oil and gas, semiconductors; in this world: Oil and gas, Semiconductors capacity through a pipeline · output is a monthly flow · finished stock · unserved demand waits · input inventory · over-ordering

The make-to-order chain, but capacity is built through a pipeline (L19–L22): announcements, then construction, then capacity, so a shortage takes years to close. Tight producers announce more.

## Parameters

Parameters come in three kinds. Entity parameters differ from entity to entity; the fit estimates each one with an uncertainty, and every copy of the world draws its own value from it. Sector parameters are shared by every entity in a sector. Starting states (capacity, unit cost and markup at the start of the window) are fitted like entity parameters. Some entities also have parameters for their own observations, such as the bias of their quoted lead times.

### Entities borrow strength from similar entities L14

θi ~ N(μg(i), Σs)

Entity i's parameters θi are drawn around the average of its group g (sector × size class × region), with a spread Σs shared by the sector's groups. Group averages are in turn pulled toward the sector's average, more strongly for a group with few entities. An entity with few observations stays near its group's average, which is how the model fills in poorly observed firms. A representative entity uses its group's average throughout, except for its size.

Learned by the fitθi entity i's parameters; μg(i) the average of its group g (L25); Σs the spread of entities around their group averages, per sector (L25)

kind | symbol | meaning | equation | applies to

entity | δ | capacity drift per month | L1 | not pipeline templates

entity | α | normal utilization (logit) | L3 | not contracted capacity

entity | β | response of utilization to demand pressure | L3 | not contracted capacity

entity | w | pass-through of input cost to unit cost | L4 | all

entity | μ | normal markup (log) | L5 | all

entity | õ | genuine orders relative to balance (log) | L6 | all

entity | βO | elasticity of orders to real demand | L6 | all

entity | ℓ | normal order-book cover, months | L8, L9 | all

entity | lfnorm | normal load factor | L17 | perishable services

entity | unorm | normal occupancy | L18 | contracted capacity

entity | oA | announcements per unit of capacity, relative to replacement | L19 | pipeline templates

sector | φz, βB, ση | utilization: persistence, response to tightness, shock size | L3 | not contracted capacity

sector | φm, γ, σζ | markup: persistence, scarcity premium, shock size | L5 | all

sector | σν | unit-cost shock size | L4 | all

sector | σO | order shock size | L6 | all

sector | ω, χ | order inflation, cancellation speed | L6, L7 | where order inflation is on

sector | a, n, τ | input per unit, target input stock, months to close the gap | L12 | where input inventory is on

sector | proc, ca² + cs² | processing time, variability of arrivals and processing | L13 | not contracted capacity

sector | g | target finished stock, months of output | L13 | where finished stock is on

sector | νJ, sJ | capacity jumps: tail thickness, scale | L1 | not pipeline templates

sector | r | share of lost customers who book again | L17 | where unserved demand is lost

sector | term | average lease, months | L18 | contracted capacity

sector | βA, TA, TU, dA, ret, σA | pipeline: response to tightness, months to start, months to build, abandonment, retirement, shock size | L19–L22 | pipeline templates

sector | labor/unit | employees per unit of monthly output, for representative entities | L29 | all

## Observations

An observation names one subject: an entity, or a grouping such as a company, a site or a whole sector. Its predicted value is worked out from the states of the subject's entities, each at its weight (a company's consolidation share, for instance), and summed over the months the observation covers. The observation is the prediction plus noise, of one of these kinds:

- Lognormal: log(observed) = log(predicted) + e, e normal with sd σ. Most amounts: revenue, output, the order book.

- Normal, sometimes after taking the log or logit of both sides: prices, shares such as load factor or vacancy, emissions.

- Yes or no: a satellite image shows activity at a site with a probability that rises with utilization.

σ depends on the kind of observation and its source.

observation | predicted value | noise

revenue over a period | Σ ep · Sh over the period's months and the subject's entities (for leases, Σ ep · Occ) | lognormal

production, or capacity offered | Σ Q | lognormal

stated capacity | ek | lognormal, small

traffic sold (passenger-miles, room-nights) | Σ Sh | lognormal

backlog | B · ep, the order book in dollars | lognormal

quoted lead time | LT, with the source's own bias | lognormal

observed or list price | p plus the listing gap | normal on the log

load factor; occupancy or vacancy | Sh / Q; u or 1 − u | normal on the logit

inventories (input, finished, a sector's at cost) | S; G; Σ ec G | lognormal

reported emissions | a straight line in log output, per facility | normal

satellite activity | a curve in utilization, per sensor | yes/no, or normal

capacity announced; under construction | Ann; U | lognormal

employment of a size class and region (Census) | labor per unit × output of its representative entity | lognormal

World Inputs, Observations lists every kind in this world.

## Sector totals

### Tracked plus representative entities L15

Xtotalt = Σtracked Xt + Σrepresentative Xt

A sector total (capacity, output, the order book, shipments and the rest) is the sum over its entities. Tracked entities are specific mills, fleets and campuses with their own observations. Each representative entity stands for all the other establishments of one size class and region, sized from Census establishment counts, so the two kinds together cover the whole sector.

Computed hereXtotalt a sector totalFrom other equationsXt the same quantity for each of the sector's entities (L1–L13, L17–L22)

### Checked against official sector series L16

The sector input bundle also carries sector statistics, such as industrial production. Where one measures a sector total, the filter treats it as one more observation of that total, with noise equal to the statistic's own uncertainty plus 1%. It corrects states, not parameters, and it mostly moves the representative entities, which have the least other data.

From the sector input bundlethe official sector statisticsFrom other equationsthe sector totals (L15)

## How the forecast is made

- Fit the parameters (once per quarter, on an 8-year window). For each sector, alternate: fit each entity's parameters, holding the sector's numbers fixed (L24); update the group averages and spread (L25); update the sector parameters, holding the entities fixed (L26). Score each round by the marginal likelihood and keep the best. An entity's fit maximizes the likelihood of its observations (L23), worked out by running the filter below over the window, plus the pull toward its group (L14).

- Run the filter (every run). Start 100 copies of the world, each with its own draw of the parameters. Each month, step every copy forward through the equations above with its own shocks; predict the month's observations from each copy; then move every copy toward what was actually observed, by how strongly, across copies, each state moved with the predicted observations (an ensemble Kalman filter). Last, apply the sector statistics (L16).

- Run past the data. After the last observed month there is nothing to correct with, so the copies run on the equations and the drivers' draws alone: the nowcast, then the forecast. The spread of the copies gives the 90% band; the published sector bands are then widened by factors from backtests.
