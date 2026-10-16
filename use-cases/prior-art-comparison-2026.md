# Encrypted group spaces: a comparison of approaches (2026)

How fifteen approaches to encrypted, shared data spaces handle eleven properties that matter when a group, not a single owner, is the unit of trust. The comparison started as input to the DIF Secure Data Storage working group's review of DWN, EDV, WAS/PWS and LWS in October 2026 and is meant to be maintained together: every project is invited to correct its row.

## How to read it

- **Values.** ✓ meets the property, ~ partly, ✗ does not, ? not documented. For K6 and K7 the cell names the kind (ordering, host role) instead.
- **Provenance.** A cell marked ᵐ was **measured** on a public test bench that runs the same scenarios against several candidates (github.com/real-life-org/port-experimente: membership under conflict, devices, history, stolen state, an adversarial carrier), using the project's own published code. A cell marked ᵖ was measured on the same bench, but on a **prototype built for the bench from a specification or a described model**, not on code the project ships; it shows that the rules hold, not that an implementation exists. All other cells were **assessed from the specification or the code** of the project; the reasoning section below names the source for each cell. Where a measurement contradicts an earlier reading, the measured value stands and the reasoning says what was observed.
- **Dates.** Document assessments as of 3 October 2026; measured cells as of 16 October 2026.
- **Camps.** The rows are grouped by where authority over the group lives: a server orders, an owner holds the group, or the group holds itself. That grouping turned out to be the most useful single lens.

## The properties and why they matter

| | Property | Question | Why it matters for a group space |
|---|---|---|---|
| K1 | Copies | who holds the full state | a group that lives only on one server disappears with it |
| K2 | Devices | are a person's devices one logical node | people have several devices; a lost one must be removable alone |
| K3 | Host blind | does a server see content | the host should be replaceable without being trusted with the content |
| K4 | Key change | new key on removal, forward secrecy, post-compromise security | removal must mean something; a captured device must not read forever |
| K5 | Offline | change content and membership without a network | local-first use: meetings, field work, outages |
| K6 | Ordering | none, causal, or total via a sequencer | a sequencer is a point of control and of failure |
| K7 | Host role | not needed, replaceable, or required | exit cost: can the group move |
| K8 | Authority | an owner, or rules in the group state | who decides membership when the founder leaves or is removed |
| K9 | Continuity | survives the loss of any node and any person | no single person or server may be indispensable |
| K10 | Concurrent changes | resolved deterministically and safely | two admins acting at the same time must not open the group to a removed member |
| K11 | Maturity and openness | spec, licence, code, deployment | can others build on it today |

## The matrix

| Project | K1 Copies | K2 Devices | K3 Blind | K4 Key change | K5 Offline | K6 Ordering | K7 Host | K8 Authority | K9 Continuity | K10 Conflicts | K11 Maturity |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **A server or an owner holds the group** | | | | | | | | | | | |
| Solid / LWS (W3C) | ✗ | ~ | ✗ | ✗ | ✗ | total | required | ✗ | ✗ | ~ | ~ |
| DWN / Enbox (DIF) | ~ | ✓ | ~ | ✗ | ~ | timestamps | replaceable | ✗ | ✗ | ~ | ~ |
| PWS / WAS + EC (CCG Capability-based Storage) | ~ | ~ | ✓ᵐ | ✓/~ | ~ | total per resource | replaceableᵐ | ✗/~ | ~ | ~ | ~ |
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
| Keyhive (Ink & Switch) | ✓ | ✓ | ✓ | ✓ᵐ | ✓ | causal | not needed | ✓ | ~ᵐ | ✓ᵐ | ~ |
| p2panda (p2panda) | ✓ᵐ | ✓ | ✓ᵐ | ~ᵐ | ✓ | causal | not needed | ✓ | ✓ | ~ᵐ | ~ |
| MLS room, commit decides membership (generic model) | ✓ᵖ | ~ᵖ | ✓ᵖ | ✓ᵖ | ✓ᵖ | per epoch, lowest hashᵖ | replaceableᵖ | ~ᵖ | ~ᵖ | ~ᵖ | ~ᵖ |
| **Real Life Organisation's two generations** | | | | | | | | | | | |
| WoT Gen 2 (live in the Real Life Stack) | ✓ | ~ | ~ | ~ | ✓/~ | causal | replaceable | ~ | ~ | ~ᵐ | ✓ |
| RLTP Gen 3 (spec converged, bench prototype, no app) | ✓ | ✓ᵖ | ✓ᵖ | ✓ᵖ | ✓ᵖ | causal | replaceable | ✓ | ✓ | ✓ᵖ | ✗ᵖ |

ᵐ measured on the test bench with the project's published code; ᵖ measured on a bench prototype built from the specification or model; other cells assessed from specification or code (sources in the reasoning section).

## Observations

1. **Nobody meets everything.** Among the approaches assessed, the ones closest to the local-first profile below are p2panda (pre-1.0) and Keyhive (alpha integration in automerge-repo, core pre-alpha, no forward secrecy for history), with the measured caveats on K9 and K10 noted in their rows; and RLTP Gen 3, whose rules hold on a bench prototype but which has no library or app yet (its measured cells are marked ᵖ for that reason).
2. **Three camps.** A server orders (Data Rooms, Encrypted Spaces, Anytype ACL). An owner or tenant owns the group (DWN/Enbox, Solid/LWS, PWS/WAS). The group owns itself (p2panda, Keyhive, partly Matrix, RLTP Gen 3).
3. **The four shapes reviewed by the working group** (DWN, EDV, WAS/PWS, LWS) all have a single owner. PWS comes closest in mechanics: key epochs that rotate on removal and a client-signed governing log the host cannot forge. What it lacks is a group as controller; its editor has said that a group controller is intended.
4. **Matrix** is the only mature system where authority lives in the group and no sequencer is needed. In exchange, servers see membership.
5. **Jazz 2.0** dropped end-to-end encryption. **Enbox** does not rotate keys on removal; only the DWN's read-access check protects there.
6. **Concurrent removal** is where approaches differ most, and where document readings and measurements diverged: p2panda's strong removal leaves a removed member reading after two concurrent removals of different people; Keyhive resolves that case but cannot remove its founder; RLTP applies both removals and stops the group visibly only when a rule change is concurrent with a removal. A room model in which the commit itself decides membership (bottom row) resolves conflicts by commit hash, which decides who stays.
7. **History for newcomers** is not a comfort feature: in the measured room model without a key chain across epochs, a newcomer cannot integrate even new CRDT entries, because they reference earlier ones.

## Requirement profiles

The matrix carries no "required" row; different uses weigh the properties differently. Profiles are listed here instead, and more are welcome.

**Local-first group apps** (Real Life Organisation, for the Real Life Stack): K1, K2, K3, K4, K5, K8, K9, K10 required; K6 causal; K7 replaceable; K11 desirable. The data belongs to the group itself, and the provider is replaceable.

*Add your profile via PR: name, who it is for, and which properties are required, desirable, or irrelevant.*

## Reasoning and sources per cell


### A server or an owner holds the group

**Solid / LWS** (W3C)

- K1 Copies: **✗** — Full data only in the pod; clients cache. w3.org/TR/lws10-core
- K2 Devices: **~** — All devices sign in to the server with the same WebID; no device sync.
- K3 Host blind: **✗** — No E2EE, only HTTPS. The server reads content and grants.
- K4 Key change: **✗** — No group key; removing means revoking a grant.
- K5 Offline: **✗** — Offline writes and sync not specified.
- K6 Ordering: **total** — The server serializes via ETag/If-Match.
- K7 Host role: **required** — Nothing is readable without the server; moving is manual.
- K8 Authority: **✗** — The storage controller or authorization server.
- K9 Continuity: **✗** — Pod gone = group gone; owner gone = no admin left.
- K10 Concurrent changes: **~** — The server serializes ACL writes (LWW or 412); no group semantics.
- K11 Maturity: **~** — LWS 1.0 Working Draft 21 Sep 2026; CSS, NSS, Inrupt ESS.

**DWN / Enbox** (DIF)

- K1 Copies: **~** — The tenant's DWN holds everything; members hold only the contexts they follow.
- K2 Devices: **✓** — One DID, devices as delegate DIDs with grants, sync between DWN replicas.
- K3 Host blind: **~** — Content encrypted; visible: protocol paths, tags, recipients, $role records with member DIDs.
- K4 Key change: **✗** — No rotation on removal; the oldest audience key applies. dwn-sdk-js encryption-control.ts:137
- K5 Offline: **~** — Member writes are admitted if the role was valid at the time. Only the tenant changes roles.
- K6 Ordering: **timestamps** — dateCreated/messageTimestamp, LWW per record. agent/src/sync-admission-order.ts
- K7 Host role: **replaceable** — DWN server self-hostable, but practically needed as a meeting point.
- K8 Authority: **✗** — The tenant; rules from the protocol definition are evaluated by the tenant's DWN.
- K9 Continuity: **✗** — Tenant key gone = no new roles, no succession.
- K10 Concurrent changes: **~** — No dedicated resolver; timestamps/LWW.
- K11 Maturity: **~** — Research preview, one maintainer, Apache-2.0. github.com/enboxorg/enbox

**PWS / WAS + EC** (CCG Capability-based Storage)

- K1 Copies: **~** — The server holds the Collection; clients keep a local replica via the changes feed (was-sync on RxDB, wallet-core over SQLite). WAS §changes profile
- K2 Devices: **~** — One controller DID; a person's clients as keys of a did:webvh controller or via zCap delegation; each writing agent tagged by an unkeyed writerId. WAS §writer attribution
- K3 Host blind: **✓ᵐ** — Measured with sealed frames as resources (E12): the server stores only ciphertext with an envelope; visible are the space id, per resource the sender device id and frame label as plaintext fields and a resource id made of device id and sequence number, sizes, timestamps and the addressee of welcomes; person names, content and group secrets stay sealed (check 3). A pseudonym per device and group would remove the device ids; not built. github.com/real-life-org/port-experimente, src/candidates/pws/NOTES.md
- K4 Key change: **✓/~** — Key epochs: removing a reader appends a fresh epoch wrapped to the remaining readers, then revokes its capabilities, as one step. No PCS; earlier epochs stay readable to a removed reader; adding a reader wraps every epoch (history included). WAS-EC §roster operations
- K5 Offline: **~** — Content offline in the local replica; writes reconcile through the server's conditional writes. Roster changes are compare-and-swap writes at the server.
- K6 Ordering: **total per resource** — ETag compare-and-swap; concurrent edits settled last-write-wins by (updatedAt, writerId).
- K7 Host role: **replaceableᵐ** — Measured: export and import of the space onto a second server mid-life, the group continues and a new device reads the full history (check 4, T8). github.com/real-life-org/port-experimente
- K8 Authority: **✗/~** — The Space controller DID is the root of every capability. The epoch roster can be a client-signed, hash-chained governing log verified against the controller document, not the host. WAS-EC §resource log profile
- K9 Continuity: **~** — Controller key loss is covered by did:webvh key rotation (verified history); there is no controller beyond the one DID.
- K10 Concurrent changes: **~** — Compare-and-swap at the server, rebase and retry on 412; no group-level conflict rules.
- K11 Maturity: **~** — WAS v0.5 CCG draft (renaming to Portable Web Spaces) and WAS-EC, both actively edited. TypeScript: teaching server, client, RxDB sync, conformance suite, Freewallet. github.com/interop-alliance

**VTA Data Rooms** (OpenVTC / ToIP)

- K1 Copies: **~** — The host holds all entries encrypted; clients cache, mirrors are read-only. data-rooms.md §8.3
- K2 Devices: **✓** — One MLS leaf per VTA; devices and agents attach to the VTA. design-notes §5.1
- K3 Host blind: **~** — Content encrypted; the host sees which member acts. Unlinkable tier not shipped.
- K4 Key change: **✓/~** — MLS remove = new epoch. But whoever holds the current key opens all retained epochs. design-notes §5.5
- K5 Offline: **✗** — The host assigns versions, only the owner commits. CRDTs explicitly rejected (design-notes §6).
- K6 Ordering: **total** — The home host is MLS delivery service and sequencer.
- K7 Host role: **replaceable** — Repoint the room DID's service endpoint; nothing works without a host.
- K8 Authority: **✗/~** — The owner (controller of the room DID) issues all credentials; checked against the room DID, not a host ACL.
- K9 Continuity: **~** — Succession via nomination VAC + 365+30-day quiet period. k-of-n not built.
- K10 Concurrent changes: **~** — Avoided: only one committer, the host serializes.
- K11 Maturity: **~** — Apache-2.0, Rust. Epoch anchor in the DID log designed, not implemented.

**Encrypted Spaces** (Orrù, Perrin, Trapp, Zaverucha)

- K1 Copies: **~** — The server holds the full state, clients only a verified partial cache. Whitepaper §3.1
- K2 Devices: **?** — Multi-device not covered; one signing key per space identity. §4.1
- K3 Host blind: **~** — Content blind; visible: schema, plaintext columns, IPs, _users table. §1
- K4 Key change: **✓** — Rekey via mVE with ZK proof, ratchet on join, PCS via RefreshKeys. §4
- K5 Offline: **✗** — Writes and membership need the server; catch-up via fast-forward proof.
- K6 Ordering: **total** — Linear changelog from the server; fork protection planned, not built.
- K7 Host role: **required** — Local-first and P2P only as future directions. §6
- K8 Authority: **✓** — Rules in the schema; server, client and zkVM decide alike. §3.3
- K9 Continuity: **~** — No owner; a server outage costs availability, clients hold only partial caches.
- K10 Concurrent changes: **~** — Avoided through server ordering; mVE prevents key splits.
- K11 Maturity: **~** — Whitepaper v1.1 (25 Aug 2026), research prototype. encryptedspaces.org


### A sync server, the clients check the rules

**Matrix** (Matrix.org)

- K1 Copies: **~** — Every participating homeserver holds the room DAG; clients cache.
- K2 Devices: **~** — One account, several devices via cross-signing; each device its own Olm recipient.
- K3 Host blind: **~** — Megolm E2EE; m.room.member and power levels in plaintext for all servers.
- K4 Key change: **~** — Session rotation on leave is client practice; weak FS, no PCS. MLS still an MSC.
- K5 Offline: **~** — Without a homeserver only a client queue; partitioned servers keep writing.
- K6 Ordering: **causal** — DAG via prev_events + state resolution v2, no sequencer.
- K7 Host role: **replaceable** — A room survives a server outage; the account stays bound to its homeserver.
- K8 Authority: **~** — Power levels in room state, checked by every server, not by the clients.
- K9 Continuity: **✓/~** — Survives the loss of a server and of the creator if there are several servers and admins.
- K10 Concurrent changes: **✓** — State resolution v2, deterministic on every server. spec.matrix.org/latest/rooms/v2
- K11 Maturity: **✓** — Spec v1.19, Synapse, Element; large real-world use.

**Anytype / any-sync** (Any Association)

- K1 Copies: **✓** — Clients hold spaces locally, sync nodes hold encrypted replicas.
- K2 Devices: **✓** — Account key from the recovery phrase on all devices (a copy, not delegation).
- K3 Host blind: **✓** — Content E2EE; ACL entries with member keys visible to nodes.
- K4 Key change: **~** — Read key rotated on every removal; no ratchet.
- K5 Offline: **~** — Content offline; ACL changes need the consensus node.
- K6 Ordering: **total (ACL)** — The consensus node only accepts prevId == last entry, otherwise ErrConflict.
- K7 Host role: **~** — Sync nodes replaceable; the consensus node is required for membership.
- K8 Authority: **~** — Rules in the ACL, every client checks; but an owner hierarchy.
- K9 Continuity: **~** — Owner gone: admins keep managing, nobody takes over ownership.
- K10 Concurrent changes: **✓** — First at the sequencer wins; the other rebuilds.
- K11 Maturity: **✓** — In production for years, any-sync MIT. github.com/anyproto/any-sync

**Jazz Classic** (Garden Computing)

- K1 Copies: **~** — The sync server holds everything, clients load on demand.
- K2 Devices: **✓** — One account, each device a session.
- K3 Host blind: **✓** — Content E2EE; the server sees group entries and roles.
- K4 Key change: **~** — New read key on removal; no FS, no PCS.
- K5 Offline: **✓** — Content and group changes are signed transactions, possible offline.
- K6 Ordering: **wall clock** — Group transactions ordered by madeAt; depends on device clocks.
- K7 Host role: **replaceable** — Sync server self-hostable, but practically needed.
- K8 Authority: **✓** — Roles in the group CoValue, every peer checks.
- K9 Continuity: **~** — Only admin gone = nobody can appoint admins.
- K10 Concurrent changes: **~** — Deterministic, but by clock time, open to clock manipulation.
- K11 Maturity: **~** — Classic is legacy. Jazz 2.0 dropped E2EE; the server is the only authority.

**NextGraph** (ELFA)

- K1 Copies: **✓/~** — Native replicas hold subscribed branches fully; the web app has no storage.
- K2 Devices: **✓** — The wallet carries the identity, each device its own replica.
- K3 Host blind: **✓** — Brokers see only IP, PeerID and topic.
- K4 Key change: **✗** — RootCapRefresh/BranchCapRefresh are stubs. engine/verifier/src/commits/mod.rs
- K5 Offline: **✓/✗** — Content offline (CRDT); AddMember/RemoveMember are stubs.
- K6 Ordering: **causal** — Commit DAG; quorum total order for root operations planned.
- K7 Host role: **replaceable** — A broker is needed, but self-hostable and multiple.
- K8 Authority: **~** — Permissions as commits in the root branch designed, not enforced today.
- K9 Continuity: **?** — Owner quorum designed; sharing with others not shipped.
- K10 Concurrent changes: **✗** — Planned as quorum total order, not implemented.
- K11 Maturity: **~** — Alpha, MIT/Apache-2.0, essentially one maintainer.


### Local-first, no sequencer

**Willow / Meadowcap** (Earthstar)

- K1 Copies: **~** — Peers replicate fully or in part; no host.
- K2 Devices: **~** — Shared subspace key or delegated capability; no device concept.
- K3 Host blind: **✗** — No built-in encryption; left to the app. willowprotocol.org/specs/e2e
- K4 Key change: **✗** — No group keys.
- K5 Offline: **✓** — Writes and capabilities are signatures, possible offline.
- K6 Ordering: **none** — Conflicts via timestamps and prefix pruning.
- K7 Host role: **not needed** — Pure P2P.
- K8 Authority: **~** — Owned namespace: an owner key. Communal: each only their own subspace.
- K9 Continuity: **~** — Communal yes; owned: owner key gone = no new root capabilities.
- K10 Concurrent changes: **✗** — No membership state; revocation only via expiry.
- K11 Maturity: **~** — Specs largely stable, small team, little deployment.

**NAOMS** (Ruben Daniels)

- K1 Copies: **✓** — Signed chains per space on the devices.
- K2 Devices: **✓** — Master key distributed over the devices via FROST.
- K3 Host blind: **✓** — No server; relay only as NAT fallback.
- K4 Key change: **?** — Rotation on removal from hives not documented.
- K5 Offline: **✓** — Each device writes its own lane.
- K6 Ordering: **causal** — Hash-linked chains, gossip over iroh.
- K7 Host role: **not needed** — iroh/QUIC, mDNS.
- K8 Authority: **~** — Hives with governance modes and steward invitation.
- K9 Continuity: **?** — Not documented.
- K10 Concurrent changes: **?** — Deterministic according to the devlog, rule not published.
- K11 Maturity: **✗** — Core not open yet, alpha, one maintainer. naoms.dev

**Keyhive** (Ink & Switch)

- K1 Copies: **✓** — Every member holds the whole Automerge document.
- K2 Devices: **✓** — Devices are their own keys; a person is a group of their devices.
- K3 Host blind: **✓** — The relay sees no plaintext; document IDs, membership, sizes visible (T8).
- K4 Key change: **✓ᵐ** — Measured: new key on removal (S2), rotation on demand with forcePcsUpdate, a passive thief reads nothing after the rotation (S7). github.com/real-life-org/port-experimente, src/candidates/keyhive/NOTES.md
- K5 Offline: **✓** — Content and membership offline, merged causally.
- K6 Ordering: **causal** — No sequencer; concurrent BeeKEM updates via conflict keys.
- K7 Host role: **not needed** — P2P possible; the sync server (Subduction, successor of Beelay) only needs relay access.
- K8 Authority: **✓** — Convergent capabilities: delegation chains in the state, every replica checks.
- K9 Continuity: **~ᵐ** — Measured in both runs (Keyhive core with Yjs; Keyhive over ARK with Automerge and a Subduction server): other admins cannot revoke the founder, who is the root of all delegations (S4c). Loss of any other node or person is survived. github.com/real-life-org/port-experimente
- K10 Concurrent changes: **✓ᵐ** — Measured: simultaneous removals of different people leave nobody reading along (S4b); mutual removal resolves (S4c). Open observation: people invited by a later-removed admin stay members (S4f). github.com/real-life-org/port-experimente
- K11 Maturity: **~** — Integration in automerge-repo as alpha (@automerge/automerge-repo-keyhive 0.6.0-alpha, 25 Sep 2026, automerge.org/docs/keyhive). Rust core still pre-alpha per its README, “DO NOT use in production”, no audit. Apache-2.0.

**p2panda** (p2panda)

- K1 Copies: **✓ᵐ** — Measured: every peer holds the full space state; no server (S1–S8). github.com/real-life-org/port-experimente
- K2 Devices: **✓** — Nested groups: a person is a group of their devices.
- K3 Host blind: **✓ᵐ** — Measured: the bench carrier sees only binary frames without names (T12). github.com/real-life-org/port-experimente
- K4 Key change: **~ᵐ** — Measured: a new secret on every removal (S2); no rotation without a membership change, so no PCS after a captured device (S4d, S7 not applicable); the welcome carries all previous secrets. github.com/real-life-org/port-experimente, src/candidates/p2panda/NOTES.md
- K5 Offline: **✓** — Content and membership offline, operation DAG.
- K6 Ordering: **causal** — previous links, no sequencer.
- K7 Host role: **not needed** — mDNS, gossip, direct connections.
- K8 Authority: **✓** — Rules in the group state, only Manage changes them, every peer checks. p2panda-auth
- K9 Continuity: **✓** — No owner, several managers possible.
- K10 Concurrent changes: **~ᵐ** — Measured: two admins remove different people at the same time, each distributes a new secret to the members as it sees them, and one of the removed keeps reading (S4b); mutual removal resolves cleanly (S4c). Reproduced natively in rust/p2panda-wasm/tests/peer.rs. github.com/real-life-org/port-experimente
- K11 Maturity: **~** — 0.7.1, pre-1.0, MIT/Apache-2.0, NLnet-funded.

**MLS room, commit decides membership** (generic model, measured on a bench prototype)

- K1 Copies: **✓ᵖ** — Measured: every device holds the full tree and all entries it can open. github.com/real-life-org/port-experimente
- K2 Devices: **~ᵖ** — Measured: a second device joins, but without a key chain across epochs it integrates neither old nor new entries of a CRDT (S5). github.com/real-life-org/port-experimente
- K3 Host blind: **✓ᵖ** — Measured: the carrier sees ciphertext and MLS commits (T12). github.com/real-life-org/port-experimente
- K4 Key change: **✓ᵖ** — Measured: new epoch secret on removal, rotation gives PCS (S7). github.com/real-life-org/port-experimente
- K5 Offline: **✓ᵖ** — Measured: members commit offline; after the partition the lowest commit hash wins (S3, S4). github.com/real-life-org/port-experimente
- K6 Ordering: **one commit per epoch, lowest hash winsᵖ** — MLS is linear; concurrent commits are resolved by hash, the loser re-stages. github.com/real-life-org/port-experimente
- K7 Host role: **replaceableᵖ** — A store-and-forward relay is enough; nothing of the group lives at it. github.com/real-life-org/port-experimente
- K8 Authority: **~ᵖ** — Membership is whatever the winning commit says: any member commits ('any-staged') or only the founder ('owner'); no rules evaluated against the group state. github.com/real-life-org/port-experimente
- K9 Continuity: **~ᵖ** — Measured: in owner mode nothing happens without the founder (S8); in any-staged mode the group continues. github.com/real-life-org/port-experimente
- K10 Concurrent changes: **~ᵖ** — Measured: which of two mutually removing members stays is decided by the commit hash and changes between runs (S4c); the winner reads a third party's concurrent entry (S4c2); a commit that loses its epoch strands the content sealed under it (T2); no history for newcomers (S6). github.com/real-life-org/port-experimente
- K11 Maturity: **~ᵖ** — A model built for the comparison, not a product; it follows a design we were shown by one project, kept generic here.


### Real Life Organisation's two generations

**WoT Gen 2** (live in the Real Life Stack)

- K1 Copies: **✓** — Every device holds the full space.
- K2 Devices: **~** — Devices share the identity key, one log per device.
- K3 Host blind: **~** — The relay sees only ciphertext, but space, devices and sender.
- K4 Key change: **~** — AES-GCM group key, the admin rotates on removal; no ratchet.
- K5 Offline: **✓/~** — Content offline, delivered after catch-up; removal is two-phase via the broker.
- K6 Ordering: **causal** — Signed logs per device, membership as _members events.
- K7 Host role: **replaceable** — Store-and-forward relay replaceable, but needed for delivery.
- K8 Authority: **~** — Rules in _members, members check; only the creator removes.
- K9 Continuity: **~** — Creator gone = nobody can remove anymore.
- K10 Concurrent changes: **~ᵐ** — Measured: promoted admins cannot enforce because the adapter sends no admin-add to the broker (S4b, S8 fail); the relay orders rotations totally, so concurrency only exists as 'noted offline, enforced later'. github.com/real-life-org/port-experimente, src/candidates/gen2/NOTES.md
- K11 Maturity: **✓** — Live, open source on npm (core 0.6.0).

**RLTP Gen 3** (spec converged, bench prototype, no app)

- K1 Copies: **✓** — Every member holds the group document and its authority log; recovery via the log.
- K2 Devices: **✓ᵖ** — Measured: one key-tree leaf per device, the authority log knows only persons; a second device reads along, a lost device is removed alone, removing a person removes all her devices (S5, S5b, S5c). github.com/real-life-org/port-experimente, src/candidates/rltp-beekem/NOTES.md, E7
- K3 Host blind: **✓ᵖ** — Measured: every frame over the carrier is a sealed entry, cards travel over the encounter channel; the carrier sees ciphertext, a frame kind, hashes and a device id (T12); on PWS that device id is a plaintext field per resource, a pseudonym per device and group is not built. github.com/real-life-org/port-experimente
- K4 Key change: **✓ᵖ** — Measured: new secret per removal, rotation on demand, a passive thief reads nothing after the rotation (S2, S7); a forged leaf from a captured state gains no access (S11, KV3). Identical results with BeeKEM and with MLS as the key protocol. github.com/real-life-org/port-experimente
- K5 Offline: **✓ᵖ** — Measured: content and membership change offline and converge after the partition heals (S3, S4a–S4j). github.com/real-life-org/port-experimente
- K6 Ordering: **causal** — Individually signed, causally linked entries; no sequencer.
- K7 Host role: **replaceable** — Services are replaceable and hold no keys (Replication Contract).
- K8 Authority: **✓** — Rules as data in the group state: any member, k of n, named members, vouches; every device enforces them.
- K9 Continuity: **✓** — No owner; a sole founder is just the k = 1 rule, changeable like any other.
- K10 Concurrent changes: **✓ᵖ** — Measured: concurrent removals of different people both hold with nobody reading along (S4b); mutual removal removes both (S4c2); a removed member's concurrent invitations lapse (S4f); a policy change concurrent with a removal forks and is ended by a policy change on both branches (S4j). The same results with two key protocols. github.com/real-life-org/port-experimente
- K11 Maturity: **✗ᵖ** — Spec public and converged (Access 0.56, Replication 0.26, Delivery 0.80 in progress); the group part exists only as a bench prototype (github.com/real-life-org/port-experimente), not as a library others can depend on, and there is no app. The npm package @real-life/trust-protocol covers the trust and encounter layers, not groups. trust-protocol.real-life.org

## How to add or correct a row

Open a pull request against this file. For every cell you change, give the value and one or two sentences of reasoning with a source: a specification section, a file in the code, or a measurement. Measurements are welcome and should name the scenario and where it can be re-run; the test bench above accepts new candidates behind a small driver interface. A project's own maintainers are the preferred authors of its row.

## Provenance

Initial version: a comparison page by [Anton Tranelis](https://github.com/antontranelis) (Real Life Organisation), October 2026 ([original page](https://claude.ai/artifact/GHeHJekhEc6sop9N1F8FgV)), brought to GitHub by Juan Caballero (DIF). Measured cells come from the port experiments of the Real Life Trust Protocol (github.com/real-life-org/port-experimente), whose candidate notes hold the full results. "Gen 2" = Web of Trust (web-of-trust.de), live in the Real Life Stack (github.com/real-life-org/real-life-stack). "Gen 3" = the Real Life Trust Protocol (trust-protocol.real-life.org). Maintained in the Confidential Storage working group at DIF; corrections via PR or at its meetings.
