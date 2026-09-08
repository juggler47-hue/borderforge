# BORDERFORGE Online Multiplayer Quick Start

**Game:** BORDERFORGE // Tactical Command  
**Online mode:** Friendly/private WebRTC multiplayer  
**Live game:** https://juggler47-hue.github.io/borderforge/

This guide explains how to host or join an online BORDERFORGE game. For complete game rules, see `BORDERFORGE_PLAYER_MANUAL.md`.

---

## Online Player Limits

- **2 to 4 human commanders** can play online in one room.
- BORDERFORGE allows **up to 5 total commanders** in a game, including AI commanders.
- The host is always the first human seat.

Examples:

| Human players | Maximum AI commanders | Maximum total commanders |
|---:|---:|---:|
| 2 | 3 | 5 |
| 3 | 2 | 5 |
| 4 | 1 | 5 |

You may also choose fewer AI commanders, including none.

---

# How to Host an Online Game

## 1. Open BORDERFORGE

Open the game in a modern web browser:

https://juggler47-hue.github.io/borderforge/

The setup screen appears automatically.

## 2. Choose the game settings

The **host controls the match settings**. Joining players do not need to duplicate them.

Choose the options you want, including:

- Ruleset
- Game Length
- Map Seed
- Opening Deployment
- Scenario
- Escalation Rules
- Human Commanders
- AI Commanders
- AI Difficulty and Doctrine
- Player Assistance
- Diplomacy
- Scientific Breakthrough / Research
- Battlefield Generator settings
- Tutorial and audio settings

### Important: set Human Commanders first

Set **Human Commanders** to the total number of real people who will be playing online:

- `2` for two friends
- `3` for three friends
- `4` for four friends

Then choose the number of AI commanders, if any.

**The total number of Human + AI commanders cannot exceed 5.**

## 3. Select Online — Host Room

Near the bottom of the setup screen, find **Play Mode**.

Choose:

**Online — Host Room**

## 4. Create the room

Click:

**Create Room**

BORDERFORGE creates a room code such as:

`K7M9Q2`

The host becomes **Commander / Seat 1**.

After the room is created, the Human Commander count is locked for that room. To change the number of human players, create a new room.

## 5. Send the room code to your friends

Click **Copy Code**, then send the room code to everyone joining the match.

All players use the same BORDERFORGE website. They do **not** need a separate copy of the game.

## 6. Wait for everyone to connect

The host's setup screen displays the number of connected human commanders, for example:

`2/3 connected`

The start button remains disabled until the required number of human players has joined.

## 7. Start the game

When everyone is connected, the button changes to:

**Begin Online Deployment**

Click it.

The host generates the map, opening ownership, turn order, and all other game settings, and the synchronized game state is sent to the other players.

---

# How to Join an Online Game

## 1. Get the room code from the host

The host will send you a code such as:

`K7M9Q2`

## 2. Open BORDERFORGE

Open:

https://juggler47-hue.github.io/borderforge/

## 3. Select Online — Join Room

On the setup screen, find **Play Mode** and choose:

**Online — Join Room**

## 4. Enter the room code

Type or paste the host's room code into the **ROOM CODE** box.

Click:

**Join Room**

You can also press Enter after typing the code.

## 5. Wait for your seat assignment

BORDERFORGE automatically assigns you an available human commander seat.

The status line will show that you are connected and identify your seat.

## 6. Wait for the host to start

Joining players do **not** click Begin Deployment.

The host is the only player who starts the online match. The host's selected game settings and map are automatically synchronized to everyone.

---

# During an Online Game

BORDERFORGE is turn-based.

- Only the player whose human commander currently owns the turn can issue game actions.
- Other players can see the public battlefield while they wait.
- The active commander's tactical/action panel is hidden on the other players' screens.
- When an AI commander takes a turn, the current authority browser runs the AI actions and synchronizes the results.
- When control reaches the next human commander, authority transfers to that player's browser.

The multiplayer status in the header tells you whether it is **YOUR TURN**, another commander's turn, or an AI turn.

---

# If a Player Disconnects

## Non-host player

If a joining player loses connection or closes the page:

1. Keep the host's game open.
2. Reopen the BORDERFORGE website on the same browser/device when possible.
3. Choose **Online — Join Room**.
4. Enter the same room code.
5. Click **Join Room** again.

BORDERFORGE stores a reconnect token in that browser and will attempt to return the player to the same seat if it is still available.

If the disconnected player currently owns the turn, the match waits for that player to reconnect.

## Host player

The host is the center of the room's network connection.

**If the host closes the browser tab, reloads out of the match, loses the connection permanently, or leaves the room, the online room cannot continue normally.**

For that reason, the host should keep BORDERFORGE open for the entire match.

---

# Can Several Groups Play at the Same Time?

Yes.

Every host creates a separate room code. For example:

- Group A — `ABC123`
- Group B — `K7M9Q2`
- Group C — `X4P8TR`

All three groups can play separate games at the same time from the exact same GitHub Pages address.

GitHub Pages serves the BORDERFORGE web page; each multiplayer room is a separate browser-to-browser session.

---

# Online Save Note

BORDERFORGE can still save a local copy of the current state in the browser, but **loading a local save is disabled while connected to an online room** because loading it would fork the synchronized match.

Treat an online save as a personal backup, not as a persistent online room.

---

# Friendly-Game Security Note

The current online system is intended for **friends and private games**.

Every connected browser receives the synchronized game state. The normal interface hides private tactical information when it is another commander's turn, but a technically knowledgeable player could inspect browser developer tools.

For ranked, public, or cheat-resistant play, BORDERFORGE would need a server-authoritative multiplayer backend.

---

# Connection Troubleshooting

### “Online play needs at least 2 Human Commanders.”
The host selected fewer than 2 humans. Set Human Commanders to 2, 3, or 4 before creating the room.

### “Maximum 5 total commanders.”
Reduce the number of AI commanders so Human + AI commanders is 5 or fewer.

### “This Borderforge room is full.”
All human seats in that room are occupied.

### “Host connection closed.”
The host's browser is no longer connected. The host must still be online for the room to continue.

### A player cannot make moves
Check the multiplayer status. Only the commander whose turn it is can interact with the battlefield and action controls.

### PeerJS will not load or the room will not connect
Check the internet connection, browser privacy/content-blocking settings, firewall restrictions, and whether the PeerJS service/CDN is reachable. Some restrictive networks may interfere with WebRTC connections.

---

## Recommended First Online Test

For a first match, use:

- **2 Human Commanders**
- **0 AI Commanders**
- **Quick** game length
- **Frontier Command**
- **Quick Deploy**
- **Standard War**
- **Balanced** escalation

This is the simplest configuration for learning the multiplayer flow.

---

© 2026 Matthew Snyder. All rights reserved.  
BORDERFORGE is an independent browser strategy game.
