## Matrix

| Project | K1 Copies | K2 Devices | K3 Blind | K4 Key change | K5 Offline | K6 Ordering | K7 Host | K8 Authority | K9 Continuity | K10 Conflicts | K11 Maturity |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **A server or an owner holds the group** | | | | | | | | | | | |
| Solid / LWS (W3C) | ✗ | ~ | ✗ | ✗ | ✗ | total | required | ✗ | ✗ | ~ | ~ |
| DWN / Enbox (DIF) | ~ | ✓ | ~ | ✗ | ~ | timestamps | replaceable | ✗ | ✗ | ~ | ~ |
| PWS / WAS + EC (CCG Capability-based Storage) | ~ | ~ | ✓ | ✓/~ | ~ | total per resource | replaceable | ✗/~ | ~ | ~ | ~ |
| VTA Data Rooms (OpenVTC / ToIP) | ~ | ✓ | ~ | ✓/~ | ✗ | total | replaceable | ✗/~ | ~ | ~ | ~ |
| Encrypted Spaces (Orrù, Perrin, Trapp, Zaverucha) | ~ | ? | ~ | ✓ | ✗ | total | required | ✓ | ~ | ~ | ~ |
| **A sync server, the clients check the rules** | | | | | | | | | | | |
| Matrix (Matrix.org) | ~ | ~ | ~ | ~ | ~ | causal | replaceable | ~ | ✓/~ | ✓ | ✓ |
| Anytype / any-sync (Any Association) | ✓ | ✓ | ✓ | ~ | ~ | total (ACL) | ~ | ~ | ~ | ✓ | ✓ |
| Jazz Classic (Garden Computing) | ~ | ✓ | ✓ | ~ | ✓ | wall clock | replaceable | ✓ | ~ | ~ | ~ |
| NextGraph (ELFA) | ✓/~ | ✓ | ✓ | ✗ | ✓/✗ | causal | replaceable | ~ | ? | ✗ | ~ |
| **Local-first, no sequencer** | | | | | | | | | | | |
| Willow / Meadowcap (Earthstar) | ~ | ~ | ✗ | ✗ | ✓ | none | not needed | ~ | ~ | ✗ | ~ |
| NAOMS (Ruben Daniels) | ✓ | ✓ | ✓ | ? | ✓ | causal | not needed | ~ | ? | ? | ✗ |
| Keyhive (Ink & Switch) | ✓ | ✓ | ✓ | ✓ | ✓ | causal | not needed | ✓ | ✓ | ✓ | ~ |
| p2panda (p2panda) | ✓ | ✓ | ✓ | ✓ | ✓ | causal | not needed | ✓ | ✓ | ✓ | ~ |
| **Our two generations** | | | | | | | | | | | |
| WoT Gen 2 (live in the Real Life Stack) | ✓ | ~ | ~ | ~ | ✓/~ | causal | replaceable | ~ | ~ | ~ | ✓ |
| RLTP Gen 3 (spec converged) | ✓ | ~ | ✓ | ✓ | ✓/~ | causal | replaceable | ✓ | ✓ | ~ | ~ |
| **What we need** (Real Life Stack) | required | required | required | required | required | causal | replaceable | required | required | required | desirable |

## Findings

Nobody meets everything. Closest to our goal are p2panda (pre-1.0) and Keyhive (alpha integration in automerge-repo, core pre-alpha, no forward secrecy for history). Both meet every required property.
Three camps. A server orders (Data Rooms, Encrypted Spaces, Anytype ACL). An owner or tenant owns the group (DWN/Enbox, Solid/LWS, PWS/WAS). The group owns itself (p2panda, Keyhive, partly Matrix, RLTP Gen 3).
The four shapes on today's agenda (DWN, EDV, WAS/PWS, LWS) all have a single owner. PWS comes closest to us in its mechanics: key epochs that rotate on removal and a client-signed governing log the host cannot forge. What it lacks is a group as controller.
Matrix is the only mature system where authority lives in the group and no sequencer is needed. In exchange, servers see membership.
Jazz 2.0 dropped end-to-end encryption. Enbox does not rotate keys on removal; only the DWN's read-access check protects there.
Concurrent removal is solved differently: p2panda uses strong removal; RLTP lets both removals apply and stops the group visibly only when a rule change is concurrent with a removal. Open for discussion.

## The properties

|prop|def|
|---|---|
|K1|Copies who holds the full state|
|K2|Devices are a person's devices one logical node|
|K3|Host blind does a server see content|
|K4|Key change new key on removal, FS, PCS|
|K5|Offline change content and membership without a network|
|K6|Ordering none, causal, or total via a sequencer|
|K7|Host role not needed, replaceable, or required|
|K8|Authority an owner, or rules in the group state|
|K9|Continuity survives the loss of any node and any person|
|K10|Concurrent changes resolved deterministically and safely|
|K11|Maturity and openness spec, licence, code, deployment|

## Footer

Initial Source: A [Claude session](https://claude.ai/artifact/GHeHJekhEc6sop9N1F8FgV) of [Anton](@antontranelis)'s.

Assessments as of 3 October 2026; RLTP and PWS/WAS rows updated 9 October 2026. Sources are given per cell. 
"Gen 2" = [Web of Trust](https://web-of-trust.de/), live in the [Real Life Stack](https://github.com/real-life-org/real-life-stack).
"Gen 3" = the [Real Life Trust Protocol](https://trust-protocol.real-life.org/). Corrections welcome via PR or on meetings of the Confidential Storage WG at DIF.
