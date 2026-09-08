# BORDERFORGE // TACTICAL COMMAND
## Player Manual & Online Multiplayer Guide

**Version:** Current GitHub multiplayer build  
**Live game:** https://juggler47-hue.github.io/borderforge/  
**Copyright:** © 2026 Matthew Snyder. All rights reserved.

BORDERFORGE is a turn-based browser strategy game of territorial conquest, terrain, regions, diplomacy, research, specialists, cards, strategic events, and AI opponents.

This manual covers both local play and the current friendly online multiplayer system.

---

# Table of Contents

1. [Quick Start](#1-quick-start)
2. [Online Multiplayer](#2-online-multiplayer)
3. [Objective and Victory](#3-objective-and-victory)
4. [Game Setup](#4-game-setup)
5. [Opening the War](#5-opening-the-war)
6. [The Battlefield and Interface](#6-the-battlefield-and-interface)
7. [Turn Sequence](#7-turn-sequence)
8. [Reinforcements and Regions](#8-reinforcements-and-regions)
9. [Combat](#9-combat)
10. [Terrain and Strongholds](#10-terrain-and-strongholds)
11. [Fortification](#11-fortification)
12. [Cards](#12-cards)
13. [Research and Capitals](#13-research-and-capitals)
14. [Specialist Units](#14-specialist-units)
15. [Diplomacy](#15-diplomacy)
16. [Strategic Events](#16-strategic-events)
17. [Escalation and Final Hour](#17-escalation-and-final-hour)
18. [Scenarios](#18-scenarios)
19. [AI Commanders](#19-ai-commanders)
20. [Planning, Map Tools, and Controls](#20-planning-map-tools-and-controls)
21. [Saving, Replay, and Debrief](#21-saving-replay-and-debrief)
22. [Elimination and Spectator Play](#22-elimination-and-spectator-play)
23. [Online Troubleshooting](#23-online-troubleshooting)
24. [Glossary](#24-glossary)

---

# 1. Quick Start

If this is your first game, a simple starting configuration is:

- **Ruleset:** Frontier Command
- **Game Length:** Quick
- **Opening Deployment:** Quick Deploy
- **Scenario:** Standard War
- **Escalation:** Balanced
- **Human Commanders:** 1 locally, or 2 online
- **AI Commanders:** 1–3 as desired
- **AI Difficulty:** Medium or Hard
- **Player Assistance:** None or Light
- **Diplomacy:** Enabled
- **Scientific Breakthrough:** Enabled

The basic flow is:

1. Receive reinforcements.
2. Deploy every reinforcement.
3. Attack adjacent enemy territories if desired.
4. Fortify once, or skip fortification.
5. End the turn.
6. Eliminate every rival to become the last commander standing.

---

# 2. Online Multiplayer

## 2.1 Online player limits

The current online build supports:

- **2–4 human commanders per online room**
- **Up to 5 total commanders**, counting humans and AI
- The **host is Human Seat 1**

| Human commanders | Maximum AI commanders | Maximum total |
|---:|---:|---:|
| 2 | 3 | 5 |
| 3 | 2 | 5 |
| 4 | 1 | 5 |

The AI count may also be lower, including zero.

## 2.2 Hosting an online game

### Step 1 — Open the game

Go to:

https://juggler47-hue.github.io/borderforge/

### Step 2 — Configure the match

The host selects all game settings. Joining players receive those settings automatically after the game begins.

Set **Human Commanders** to the number of real online players: 2, 3, or 4.

Choose any AI commanders you want, remembering that **Human + AI commanders cannot exceed 5**.

### Step 3 — Select the host mode

Under **Play Mode**, select:

**Online — Host Room**

### Step 4 — Create the room

Click **Create Room**.

BORDERFORGE generates a six-character room code such as:

`K7M9Q2`

The host occupies the first human seat.

Once a room is created, the Human Commander count is locked for that room. To change it, create another room.

### Step 5 — Invite the other players

Click **Copy Code** and send the room code to each friend.

Everyone opens the same BORDERFORGE website.

### Step 6 — Wait for the lobby to fill

The host sees a connected count such as:

`2/4 connected`

BORDERFORGE does not allow the host to start until every required human seat is connected.

### Step 7 — Begin

When all human commanders are connected, click:

**Begin Online Deployment**

The host generates the game and synchronizes it to every connected player.

## 2.3 Joining an online game

1. Get the room code from the host.
2. Open the BORDERFORGE website.
3. Under **Play Mode**, select **Online — Join Room**.
4. Enter the room code.
5. Click **Join Room** or press Enter.
6. BORDERFORGE automatically assigns an available human seat.
7. Wait for the host to start the match.

Joining players do not need to copy the host's setup selections. The host's settings, map seed, generated map, opening ownership, and state are synchronized automatically.

## 2.4 What happens during an online turn

BORDERFORGE uses turn-owner authority:

- Only the human commander whose turn it is can issue game actions.
- Other players cannot click territories or trigger game commands for that commander.
- The public battlefield remains visible while another player acts.
- The active player's tactical/action panel is hidden on the other players' screens.
- AI turns are resolved by the current authority browser and synchronized to the room.
- When the next human turn begins, control transfers to that player's browser.

Watch the multiplayer status in the header. It identifies **YOUR TURN**, another player's turn, or an AI turn.

## 2.5 Reconnecting

If a non-host player disconnects:

1. Leave the host's game running.
2. Reopen BORDERFORGE, preferably on the same browser/device.
3. Choose **Online — Join Room**.
4. Enter the same room code.
5. Join again.

The browser stores a reconnect token and attempts to reclaim the same seat if that seat is still available.

If the disconnected player owns the current turn, the match waits for that commander to return.

## 2.6 Host dependency

The current multiplayer system uses the room host as the center of the match network.

**The host should keep the browser tab open for the entire game.**

If the host permanently leaves, closes the tab, or loses the connection, the online room cannot continue normally.

## 2.7 Multiple games at once

Different room codes are independent sessions. Many groups can play separate BORDERFORGE matches at the same time from the same GitHub Pages URL.

## 2.8 Friendly-game security model

The current multiplayer implementation is designed for private games among friends.

Every connected browser receives the synchronized game state. BORDERFORGE hides another commander's private tactical panel in the normal interface, but a technically knowledgeable player could inspect browser developer tools.

A server-authoritative backend would be required for ranked or cheat-resistant public multiplayer.

---

# 3. Objective and Victory

The standard victory condition is simple:

> **Be the last commander standing.**

A commander is eliminated when they own no territories.

In the current normal game-length profiles:

- Strongholds provide strategic and economic advantages.
- Scientific Breakthrough provides a permanent combat advantage.
- Neither of those systems normally ends the game by itself.

The war ends when only one commander remains.

The game also contains the **Last Stand** scenario, which has its own survival objective.

---

# 4. Game Setup

The host controls these settings in online play. In local play, the person starting the game chooses them.

## 4.1 Ruleset

### Core Conquest

The simplified ruleset.

- Terrain-specific systems are removed from normal play.
- Research is disabled.
- Diplomacy is disabled.
- Specialist systems are not used.
- Regions, cards, reinforcement placement, combat, fortification, and domination remain central.

### Frontier Command

The full tactical ruleset.

Includes:

- Terrain modifiers
- Strongholds
- Regions
- Specialist units
- Research and capitals
- Diplomacy
- Strategic events
- Escalation systems

## 4.2 Game Length

| Game length | Approximate time | Territories | Research target | Starting armies per territory* |
|---|---:|---:|---:|---:|
| Quick | ~15 min | 28–36 | 15 RP | 3 |
| Standard | ~30–45 min | 40–50 | 24 RP | 3 |
| Grand | ~45–75 min | 56–66 | 36 RP | 2 |
| Campaign | ~1–2 hrs | 76–90 | 54 RP | 2 |

\*Quick Deploy values. Strategic Deploy begins at 1 army per territory and then distributes the remaining opening reserve.

Actual play time varies with player count, aggression, scenario, and decision speed.

## 4.3 Map Seed

The **Map Seed** controls the reproducible battlefield generation.

Using the same seed with the same relevant setup and generator settings reproduces the same battlefield topology and opening distribution process.

You can:

- Enter a seed manually.
- Click **New Seed** for another battlefield.
- Save favorite seeds.

## 4.4 Opening Deployment

### Quick Deploy

Opening armies are placed automatically.

### Strategic Deploy

- Every territory begins with 1 army.
- Each commander receives the remaining opening army budget.
- Human commanders decide where to place those opening reserves before Turn 1.
- AI commanders deploy their reserves automatically.

## 4.5 Scenario

Choose one scenario from the setup screen. See [Scenarios](#18-scenarios) for details.

## 4.6 Escalation Rules

### Classic

No anti-stalemate intervention.

### Balanced

Uses late-game pressure systems designed to make long stalemates break.

### Aggressive

Uses stronger pressure and faster high-density combat than Balanced.

Core Conquest forces Classic escalation behavior.

## 4.7 Human and AI Commanders

A normal game requires at least **2 total commanders** and supports at most **5 total commanders**.

Local options include:

- 0 humans for AI-vs-AI simulation
- 1 human vs AI
- 2–4 human hot-seat play

Online play requires 2–4 human commanders.

## 4.8 AI Difficulty

AI difficulty options are:

- Easy
- Medium
- Hard
- Expert

Difficulty changes AI decision quality and tactical behavior. In Frontier Command with escalation enabled, higher difficulty levels may also receive configured AI economy advantages.

## 4.9 Player Assistance

Player Assistance is separate from AI difficulty.

- **None:** equal human economy
- **Light:** human reinforcement income +10%
- **Standard:** human reinforcement income +20%

## 4.10 AI Doctrine

You can choose a doctrine for AI commanders:

- **Mixed:** assigns different doctrines to different AIs
- **Balanced:** general-purpose strategy
- **Aggressive:** more attacks and lower offensive thresholds
- **Defensive:** larger defensive buffers and fewer attacks
- **Opportunist:** emphasizes favorable finishing opportunities
- **Scientist:** invests more heavily in research

## 4.11 Diplomacy

When enabled, commanders can offer temporary truces. Core Conquest disables diplomacy.

## 4.12 Scientific Breakthrough

When enabled, commanders use capitals and may invest reinforcements into research. Core Conquest disables research.

## 4.13 Battlefield Generator

Advanced generator settings include:

- Number of regions
- Chokepoint frequency
- Map connectivity
- Terrain density
- Stronghold density
- Region symmetry

The generator preview estimates map size, region count, average connectivity, gateways, and opening fairness.

## 4.14 Shareable Battle Code

BORDERFORGE can export a **Battle Code** beginning with `RTW5-`.

A Battle Code encodes major setup choices such as:

- Seed
- Ruleset
- Game length
- Human/AI counts
- AI settings
- Deployment
- Assistance
- Scenario
- Escalation
- Diplomacy
- Research
- Battlefield generator settings

This is separate from the online **room code**.

**Battle Code = configuration.**  
**Room Code = multiplayer connection.**

## 4.15 Tutorial and Audio

The setup screen also includes:

- Guided first-game tutorial
- Effects volume
- Radio ambience

---

# 5. Opening the War

After setup, BORDERFORGE performs the opening sequence.

## 5.1 Map generation

The map is generated from the selected seed and battlefield settings.

Regions, links, terrain, and strongholds are established.

## 5.2 Opening ownership

BORDERFORGE evaluates multiple seeded opening deals and chooses a distribution intended to reduce opening imbalance in territory count, strongholds, border exposure, gateway control, and region concentration.

## 5.3 Turn order

Turn order is independently seeded and displayed in the left panel.

## 5.4 Strategic Deployment, if selected

Human commanders place their opening reserve before Turn 1. Quick Deploy skips this manual step.

## 5.5 Capital selection, if research is enabled

Each commander establishes a capital before Turn 1.

AI commanders choose capitals automatically. Human commanders choose from their owned territories.

After the pregame steps finish, Turn 1 begins with the first commander's Reinforce phase.

---

# 6. The Battlefield and Interface

## 6.1 Left panel — Command Roster

The left side shows information such as:

- Commander roster
- Current active commander
- Territory/army statistics
- Terrain Codex
- Victory Conditions
- Turn Order
- Region Control

## 6.2 Center — Battlefield map

Each territory shows ownership, army strength, and tactical features.

Connections between territories determine where attacks can occur.

Use the map to:

- Place reinforcements
- Select attack sources and targets
- Choose fortification routes
- Inspect terrain, regions, capitals, strongholds, and specialists

## 6.3 Right panel — Tactical Console

The right panel shows:

- Selected territory details
- Combat forecasts
- Available action buttons
- Cards and research controls when applicable
- Specialist controls when applicable
- Intel Feed / combat log

## 6.4 Header controls

Depending on game state, the header includes tools such as:

- Save
- Export
- Balance Lab
- Display
- Rules
- Plan
- Replay
- AI speed/simulation controls

---

# 7. Turn Sequence

A normal turn has three main phases:

1. **REINFORCE**
2. **ATTACK**
3. **FORTIFY**

## 7.1 Reinforce phase

At the start of the turn:

- The commander receives reinforcements.
- Research countdowns and certain strategic systems may update.
- The commander may trade cards if a valid set is available.
- Research may be purchased if enabled.
- Specialists may be promoted in Frontier Command.
- Reinforcements are placed on owned territories.

You must deploy all normal available reinforcements before moving to Attack.

The **Undo Placement** button reverses the most recent ordinary reinforcement placement made during that Reinforce phase. It does not undo card trades, research purchases, or specialist promotions.

## 7.2 Attack phase

Attacking is optional.

You may make multiple attacks during the Attack phase as long as each attack is legal and you have sufficient armies.

When finished, choose:

**End Attack → Fortify**

## 7.3 Fortify phase

Fortification is optional.

You may relocate armies between two territories you own if they are connected by a continuous chain of your territories.

A confirmed fortification ends the turn. You may also choose **End Turn** without fortifying.

---

# 8. Reinforcements and Regions

## 8.1 Base reinforcements

At the start of a commander's turn:

**Base reinforcement = floor(territories owned ÷ 3), minimum 3.**

Example:

- 8 territories → 3 reinforcements
- 12 territories → 4 reinforcements
- 21 territories → 7 reinforcements

## 8.2 Region bonuses

If one commander owns every territory in a region, that commander receives the region's listed reinforcement bonus.

Region values are generated according to factors such as region size and gateway structure. The current bonus is shown on the map/interface.

## 8.3 Stronghold income

In the current Frontier Command game-length profiles, each controlled stronghold normally adds **+2 armies per turn**.

Scenarios can modify this value.

## 8.4 Other reinforcement effects

Reinforcement totals can also be affected by:

- Player Assistance
- Scenario rules
- Strategic events
- Finisher bonuses
- Escalation / anti-hoard pressure
- Higher-difficulty AI economy rules

---

# 9. Combat

## 9.1 Starting an attack

During the Attack phase:

1. Select one of your territories with at least 2 armies.
2. Select an adjacent enemy territory.
3. Review the combat forecast.
4. Choose an attack option.

A territory may only attack an enemy territory connected directly to it.

Active truces and certain event effects can make an otherwise adjacent attack illegal.

## 9.2 Dice

The attacker rolls up to **3 dice**:

`min(3, attacking armies - 1)`

The defender rolls up to **2 dice**:

`min(2, defending armies)`

Dice are sorted from highest to lowest.

Comparisons are:

- Highest attacker die vs highest defender die
- Second-highest attacker die vs second-highest defender die, if both sides have one

**The defender wins ties.**

Each lost comparison normally removes one army from the losing side, subject to escalation rules for large battles.

## 9.3 Terrain and combat modifiers

In Frontier Command, terrain can alter attack or defense dice. See [Terrain and Strongholds](#10-terrain-and-strongholds).

Specialists, research breakthroughs, strongholds, strategic events, and Final Hour can also modify combat.

## 9.4 Attack choices

### Single Strike

Resolves one combat engagement.

### Controlled Blitz

Repeats attacks while respecting limits you choose, such as:

- Minimum armies to preserve in the source territory
- Minimum acceptable win probability
- Whether to stop once the attacker no longer has a 2× army advantage

### Blitz Until Exhausted

Repeatedly attacks the selected target until the attacker can no longer continue or the target is captured.

## 9.5 Capturing a territory

When the defender reaches zero armies, ownership transfers to the attacker.

The attacker must move an occupation force into the captured territory while leaving at least one army behind in the source territory.

For human players, BORDERFORGE displays an **Advancing Force** slider and may show an Advisor recommendation.

Specialists from the attacking force can move forward proportionally with the advancing armies.

Captured enemy specialists are destroyed.

## 9.6 Capitals

Capturing an enemy capital has additional research consequences when research is enabled. See [Research and Capitals](#13-research-and-capitals).

---

# 10. Terrain and Strongholds

Terrain effects apply in Frontier Command.

| Terrain | Effect |
|---|---|
| Plains 🌾 | No modifier |
| Mountain ⛰️ | Defender +1 |
| Forest 🌲 | Attacker -1 |
| City 🏙️ | Attacker +1 |
| Desert 🏜️ | Defender -1 |

The attack modifier is based on the **attacking/source territory's terrain**. The defense modifier is based on the **defending/target territory's terrain**.

## 10.1 Strongholds

Strongholds are marked with a star.

They normally provide:

- **+2 defender combat bonus**
- **+2 reinforcement armies per turn** in the current normal Frontier Command profiles

Siege Engineers can negate stronghold defensive bonuses.

Final Hour can also remove positive defender bonuses.

Scenarios may strengthen strongholds further.

---

# 11. Fortification

During the Fortify phase:

1. Select an owned source territory with more than 1 army.
2. Select another owned territory connected to it through a continuous chain of friendly territories.
3. Choose the transfer size.
4. Confirm the transfer.

Rules:

- At least 1 army must remain in the source territory.
- The destination does not need to be directly adjacent if a friendly path connects the two territories.
- Specialists move proportionally with the transferred force.
- A confirmed fortification ends the turn.

---

# 12. Cards

## 12.1 Earning cards

Capture at least one territory during your turn to earn a card at turn end.

Normally, no matter how many territories you capture during that turn, the standard reward is one card.

The **Open Frontier** event temporarily doubles the reward to two cards.

## 12.2 Card types

There are three card types:

- Infantry
- Cavalry
- Artillery

## 12.3 Valid trades

A valid trade is either:

- 3 cards of the same type, or
- 1 Infantry + 1 Cavalry + 1 Artillery

## 12.4 Trade bonuses

Trade values escalate globally as sets are redeemed:

`4, 6, 8, 10, 12, 15, 20, 25, 30, 35, 40, 45, 50...`

The value is added to your Reinforce-phase army pool.

## 12.5 Mandatory trades

If you hold 6 or more cards and have a valid set, you must trade before proceeding to the Attack phase.

## 12.6 Elimination reward

When a commander is eliminated, the eliminator inherits that commander's remaining cards.

Eliminations may also grant a reinforcement bounty for the eliminator's next turn.

---

# 13. Research and Capitals

Research is available when **Scientific Breakthrough** is enabled in Frontier Command or enabled by a scenario.

## 13.1 Capitals

Every commander chooses or receives a capital before Turn 1.

The capital is the center of that commander's research effort.

## 13.2 Buying Research Points

During the Reinforce phase, a commander can spend reinforcements to buy Research Points (RP).

Base cost increases as progress advances:

- First third of the research track: **3 reinforcements per RP**
- Middle third: **4 reinforcements per RP**
- Final third: **5 reinforcements per RP**

Additional temporary surcharges can apply when several commanders are racing research or during a Tech Embargo.

The Arms Race event reduces research cost while it is active.

## 13.3 Research targets by game length

| Game length | RP required to begin Final Research |
|---|---:|
| Quick | 15 |
| Standard | 24 |
| Grand | 36 |
| Campaign | 54 |

Scenarios can alter these values.

## 13.4 Final Research

Once the RP requirement is met, the commander may start **Final Research** during the Reinforce phase.

Final Research takes **4 of that commander's turns** to complete.

When it completes in the current normal profiles, the commander gains a permanent:

**+1 edge to the highest attacker die**

This is a conquest advantage, not an automatic victory.

## 13.5 Losing a capital

If an enemy captures your capital:

- Active Final Research is halted.
- Your research progress is cut to roughly one-third of its previous amount.
- If you still own territories, a new capital is assigned, favoring an owned stronghold when available.

This makes capital defense especially important during Final Research.

---

# 14. Specialist Units

Specialists are promoted from existing armies during the Reinforce phase. Promoting a specialist does **not** add another army; it upgrades an army already present in that territory.

## 14.1 Shock Troops ▲

**Cost:** 2 reinforcements + 1 RP

Effect:

- Re-rolls the attacker's lowest die once per battle when useful.

Role:

- Sustained offensive pressure.

## 14.2 Guerilla Cells ◊

**Cost:** 2 reinforcements

Effect:

- When defending, low adjusted attacker dice automatically fail.
- Normally attacker results of 1–2 auto-miss.
- In Forest or Mountain cover, 1–3 auto-miss.
- Siege Engineers reduce the Guerilla threshold by 1.
- Only one Guerilla Cell is needed per territory for the full effect.

Role:

- Defensive holding power, especially in cover terrain.

## 14.3 Siege Engineers ■

**Cost:** 4 reinforcements

Effect:

- Adds +1 to the attacker's highest die.
- Ignores Stronghold defensive bonus.
- Ignores Mountain +1 defense.
- Counters part of the Guerilla Cell effect.

Role:

- Breaking fortified positions.

## 14.4 Specialist movement and loss

- Specialists move proportionally with fortifying armies.
- Specialists can move forward with armies after a capture.
- Specialists cannot outnumber the armies in their territory.
- Defending specialists are destroyed if their territory is captured.

---

# 15. Diplomacy

When Diplomacy is enabled, commanders can offer truces.

## 15.1 Truce duration

A truce lasts **3 turns**.

While active, neither side may attack the other.

## 15.2 Offering a truce

During a human turn, open **Diplomacy** and choose an opponent.

Human recipients receive an offer they can Accept or Reject.

The Advisor may display a recommendation based on military strength, borders, research pressure, capital exposure, and the opponent's behavior.

## 15.3 Breaking a truce

A commander may break a truce early.

Penalty:

**-3 reinforcements on the breaker's next turn**

Breaking truces also affects the game's grudge/hostility tracking.

Hard and Expert AI commanders may break truces opportunistically under dangerous strategic conditions.

---

# 16. Strategic Events

Frontier Command periodically creates a global strategic event. Only one event is active at a time.

Event frequency depends on game length.

## 16.1 Defection

A marked enemy stronghold becomes vulnerable for one turn.

Capture it during the event and a portion of its defending force defects to the attacker, with the bonus scaled and capped by the pre-attack garrison.

## 16.2 Arms Race

For 2 turns:

- Research costs are reduced.
- All attack rolls suffer -1.

It creates a tradeoff between research acceleration and battlefield tempo.

## 16.3 Martial Law

A stronghold is placed under Martial Law for 2 turns.

- Its owner receives a reinforcement boost from it.
- The marked territory cannot launch attacks while Martial Law is active.

## 16.4 Tech Embargo

For 3 turns:

- Research costs +2 reinforcements per RP for every commander.

This event does not appear in the very early game.

## 16.5 Open Frontier

For 3 turns:

- A commander who earns a conquest card receives **2 cards instead of 1** that turn.

This encourages aggressive expansion.

---

# 17. Escalation and Final Hour

Balanced and Aggressive Frontier Command use anti-stalemate systems.

These rules exist to prevent extremely large late-game stacks from creating endless defensive stalemates.

## 17.1 High-density combat

When both sides bring sufficiently large armies, combat casualties are multiplied.

- Balanced activates this at larger stack thresholds and uses doubled losses.
- Aggressive activates earlier and uses stronger casualty multiplication.

Small early-game battles remain closer to the normal dice-loss model.

## 17.2 Anti-hoard pressure

As a game approaches Final Hour, oversized stacks can reduce reinforcement efficiency. The pressure grows later in the game.

## 17.3 Final Hour

Once the configured Final Hour begins:

- Positive defender bonuses can be neutralized.
- Oversized army stacks suffer attrition.
- AI strategy becomes more decisive.
- Long-term turtling becomes increasingly expensive.

Balanced Final Hour timing is scaled by game length; Aggressive arrives earlier. Some scenarios adjust the timing again.

Classic escalation disables these anti-stalemate interventions.

---

# 18. Scenarios

## Standard War

Normal rules for the selected ruleset and setup.

## Last Stand

The primary human commander must remain alive through 15 full rounds.

The targeted commander begins with an additional defensive army on owned territories. If that commander survives to the scenario threshold, the scenario ends in a survival victory.

## Fortress War

Strongholds dominate the economy.

- Strongholds begin reinforced.
- Stronghold reinforcement value is increased.
- If the selected base ruleset created no strongholds, the scenario creates strategic strongholds.

## Arms Race

Research begins accelerated.

- Research is enabled.
- Research threshold is reduced.
- Commanders start with partial research progress.
- Strategic events begin earlier.

## Broken Alliance

The game opens with temporary pacts and seeded rivalries.

- Diplomacy is enabled.
- Opening truces are created between some commanders.
- Rivalries/grudges are seeded between others.

## Blitzkrieg

A faster, more violent war.

- Larger opening armies
- Aggressive escalation
- Earlier Final Hour
- More aggressive AI doctrine

## Cold War

A slower diplomatic conflict.

- Diplomacy is enabled.
- Final Hour arrives later.
- Strategic events are less frequent.
- Aggressive AI doctrines may shift toward defense.

---

# 19. AI Commanders

AI commanders participate under the same map, ownership, combat, card, research, and diplomacy systems as human commanders, with difficulty- and doctrine-specific decision logic.

## Difficulty

- **Easy:** forgiving tactical play
- **Medium:** more competent decision-making
- **Hard:** stronger evaluation and pressure
- **Expert:** highest tactical discipline and odds awareness

## Doctrine

Doctrine changes strategic priorities:

- Balanced
- Aggressive
- Defensive
- Opportunist
- Scientist

Mixed AI assigns different doctrines across AI seats.

## AI turns online

During online play, players do not need a separate AI server. The browser currently responsible for the turn sequence resolves AI turns and synchronizes the resulting state to the room.

---

# 20. Planning, Map Tools, and Controls

## 20.1 Map overlays

The battlefield includes map-analysis modes such as:

- Normal
- Threat
- Expansion
- Defense
- Region
- Research

These overlays help visualize strategic priorities.

## 20.2 Plan Turn

The **PLAN** tool can build a proposed turn sequence before executing it.

It can estimate information such as:

- Planned steps
- Reinforcement use
- Expected attack losses
- Combined projected success

The plan is advisory/automated support; the underlying rules remain unchanged.

## 20.3 Combat forecast

Selecting an attack displays a combat forecast including projected odds and expected losses.

## 20.4 Map movement

Controls include:

- Zoom In
- Zoom Out
- Reset to 1:1
- Mouse-wheel zoom
- Drag empty battlefield space to pan when zoomed

## 20.5 Keyboard shortcuts

| Key | Action |
|---|---|
| A | Attack |
| F | Fortify |
| B | Controlled Blitz |
| D | Diplomacy |
| ? | Active Rules |
| Esc | Cancel current action |
| Hold Space | Accelerate AI turns |

Online input is blocked when another human commander owns the turn.

## 20.6 Display & accessibility

Display settings include:

- Standard palette
- Red/Green colorblind palette
- Blue/Yellow colorblind palette
- High Contrast
- Color + Symbol or Color Only territory markers
- Normal or Large territory markers
- Full, Reduced, or Off animations

---

# 21. Saving, Replay, and Debrief

## 21.1 Local saves

BORDERFORGE stores saves in the browser's local storage and provides multiple save slots plus autosave behavior.

Save files can also be exported/imported as JSON.

## 21.2 Online save behavior

Saving a snapshot during online play can serve as a personal backup.

However, **loading a local save while connected to an online room is blocked**. Loading a local snapshot would create a game state different from the shared online match.

The current online room itself is not a permanent cloud save.

## 21.3 Battle Replay

The **REPLAY** tool provides a turn-by-turn reconstruction using captured game telemetry.

It can show:

- Territory ownership by turn
- Army levels
- Capitals
- Strongholds
- Recorded capture events

## 21.4 Command Debrief

At the end of a game, **Command Debrief** provides an after-action review.

Telemetry can also be exported for deeper analysis.

## 21.5 Balance Lab

The Balance Lab is primarily a design/testing tool. It can run large batches of AI-vs-AI simulations and compare configurations.

Ordinary players do not need it to play the game.

---

# 22. Elimination and Spectator Play

A commander is eliminated when they lose their final territory.

When a human player is eliminated while AI factions remain, BORDERFORGE can offer a spectator choice instead of immediately declaring an AI winner.

Options include:

- End observation
- Watch the remaining war to its actual conclusion

The final standard winner is the last living commander.

---

# 23. Online Troubleshooting

## The host cannot create a room

Check that **Human Commanders** is set to 2, 3, or 4.

## The game says “Maximum 5 total commanders”

Reduce the AI count until Human + AI commanders is 5 or fewer.

## The start button says “Waiting for Commanders”

Not all required human seats are connected yet.

## A joining player cannot start the game

This is intentional. Only the host begins an online match.

## A player cannot click anything

Check whose turn it is. Only the current online human commander can act.

## The room says it is full

All human seats are already occupied.

## A non-host player disconnected

Rejoin the same room code, preferably from the same browser/device so the reconnect token can reclaim the previous seat.

## The host disconnected

The current room depends on the host. The match cannot continue normally without that host browser.

## PeerJS or WebRTC connection fails

Possible causes include:

- Internet connection problems
- Browser content blockers
- Corporate, school, or public Wi-Fi restrictions
- Firewalls or NAT restrictions
- PeerJS signaling/CDN availability

Try another modern browser or another network if necessary.

## Can other groups play while our game is running?

Yes. Every room code represents an independent multiplayer session.

---

# 24. Glossary

**Army** — Basic force count occupying a territory.

**Attack phase** — Turn phase in which adjacent enemy territories may be attacked.

**Battle Code** — Shareable `RTW5-...` string that stores game configuration. Not the same as a multiplayer room code.

**Capital** — Research center belonging to a commander. Losing it disrupts research.

**Commander** — A human or AI faction/player.

**Controlled Blitz** — Repeated combat with user-defined stop conditions.

**Final Hour** — Late-game anti-stalemate state used by escalation rules.

**Fortify phase** — Turn phase for moving armies through connected friendly territory.

**Gateway** — Cross-region connection affecting regional structure and bonuses.

**Region** — Group of territories. Owning the complete region provides a reinforcement bonus.

**Reinforce phase** — Turn phase in which new armies, card trades, research, and specialists are managed.

**Room Code** — Short code used to join a specific online multiplayer room.

**RP** — Research Point.

**Specialist** — Upgraded army with Shock, Guerilla, or Siege abilities.

**Stronghold** — High-value territory with defensive and economic benefits.

**Truce** — Temporary non-aggression pact between two commanders.

---

# Recommended First Match

For new players learning both the rules and online system:

- Frontier Command
- Quick
- Quick Deploy
- Standard War
- Balanced Escalation
- 2 Human Commanders
- 0–1 AI Commander
- Medium AI if used
- Light or No Player Assistance
- Diplomacy Enabled
- Scientific Breakthrough Enabled
- Default Battlefield Generator settings

The game will introduce the core Reinforce → Attack → Fortify rhythm without the longer strategic commitments of Grand or Campaign play.

---

# Repository Use

This file is Markdown and can be uploaded directly to a GitHub repository.

Suggested repository structure:

```text
borderforge/
├── index.html
├── README.md
├── BORDERFORGE_PLAYER_MANUAL.md
└── ONLINE_MULTIPLAYER_QUICK_START.md
```

A repository `README.md` can link to both guides:

```markdown
## Documentation

- [Player Manual](BORDERFORGE_PLAYER_MANUAL.md)
- [Online Multiplayer Quick Start](ONLINE_MULTIPLAYER_QUICK_START.md)
```

---

© 2026 Matthew Snyder. All rights reserved.  
Independent browser strategy game.
