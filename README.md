# BORDERFORGE signaling server

This is a tiny PeerJS signaling service for BORDERFORGE online multiplayer.
It does **not** host or process the game state. It only helps browsers find each
other and exchange WebRTC setup information.

## Deploy on Render

1. Put this folder in a GitHub repository (or in a `/signaling` folder in the BORDERFORGE repo).
2. In Render choose **New → Web Service** and connect the repository.
3. If this is in a subfolder, set **Root Directory** to that folder.
4. Use Node runtime, build command `npm install`, start command `npm start`.
5. Free is fine for testing. Render may sleep an idle free service; the first connection can take about a minute to wake it.
6. After deploy, open `https://YOUR-SERVICE.onrender.com/health`. It should say `ok`.
7. Your BORDERFORGE signaling URL is:

   `https://YOUR-SERVICE.onrender.com/peerjs`

## Connect the game

For testing, open BORDERFORGE once with:

`?signal=https://YOUR-SERVICE.onrender.com/peerjs`

Example:

`https://juggler47-hue.github.io/borderforge/?signal=https://borderforge-signaling.onrender.com/peerjs`

The patched game stores that setting in the browser and includes it in **Copy Invite Link**.
For a permanent release, set `window.BORDERFORGE_SIGNALING_URL` to that URL before the multiplayer code runs, or ask ChatGPT to bake the final Render URL into the HTML.

## Why this helps mobile

The earlier Android failure was a PeerJS `network` error, which means the phone
could not establish the signaling connection to the public PeerJS cloud. A
self-hosted HTTPS/WSS PeerServer gives BORDERFORGE a signaling endpoint you control.
The patched game can still fall back to PeerJS Cloud.

## TURN

This server is signaling only. For players behind restrictive NAT/firewalls,
a TURN relay can still be needed. BORDERFORGE already supports an optional
`window.BORDERFORGE_TURN_ENDPOINT` that returns `{ "iceServers": [...] }`.
Same-home-network phone play normally should not need TURN once signaling works.
