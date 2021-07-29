# Secure Data Storage WG - rolling agenda & minutes

[![hackmd-github-sync-badge](https://hackmd.io/p8p3SZ90TUi1PHTxByxD2A/badge)](https://hackmd.io/p8p3SZ90TUi1PHTxByxD2A)

[**Current Spec**](https://identity.foundation/confidential-storage/) | [**Issues**](https://github.com/decentralized-identity/confidential-storage/issues) | [ DIF page ](https://identity.foundation/working-groups/secure-data-storage.html) | [Mailing list and Wiki ](https://lists.identity.foundation/g/sds-wg/) | [Meeting recordings](https://docs.google.com/spreadsheets/d/1wgccmMvIImx30qVE9GhRKWWv3vmL2ZyUauuKx3IfRmA/edit#gid=85275820)

_For this call, you are encouraged to turn your video on. This is a good way to build rapport given we are a large, disparate group experiencing a lot of churn._

_This document is live-edited DURING each call, and stable/authoritative copies live on our github repo under `/agenda.md`.
Please note that we might not notice a pull request in time, but you are free to propose agenda items for future meetings via hackmd._

## July 29 2021
Focus on Hubs
Attendees:
* Kaliya
* TallTed
* Andreas Freund
* Adrian Gropper
* Micheal Terrell
* Brooklyn Zelenka
* Randolf Rodriguez
* (Dmitri Zagdulin)

Kaliya is chairing an Open Conversation

Michael Terrell put this diagram up and was asking about how the [EDV Client](https://github.com/decentralized-identity/confidential-storage/blob/master/diagrams/SDS_Layers.svg)

Bridging between two specs is not totally clear. Michael's company wants to align with both specs and have them bridge. 

Adrian has been engaging with IETF and [presented on Monday this week.](https://www.youtube.com/watch?v=iVx8_DbO3rM&list=PLC86T-6ZTP5ik187oPfRrOUaMw1AuLLi6&t=491s) 
A background task around authorization involving at least 5 different W3C/Decentralized Identifier work work groups will touch on Authorization
EDV
Secure Data Store
SIOP
DIDComm
VCI-HTTP-API 

Authorization protocols (folks jump to thinking about OAuth2) are potentailly relevant in all of them. Any time you put up an API that is going to be protected you are going to end up with an authorization situation. 
Data models are data models. 
Put up an End point putting up an API - then you have Authorization. 

**Then the Question becomes** as Justin Ritcher agrees with me - Authorization implacts multiple layers of whatever arrangement we have to explain what we are doing to the world. Adrian - said there is a separation of concerns issue - if we want generativeity and open to innovation. There will be sompething equivalent to IP in the internet - narrow neck of internet - was replaced by various platforms. 
Apple platform, google platform, msft platform. 
These lockin mechanisms have sort of evolved to add so many features that drive the lockin - the IP is no longer the narrow neck of the internet - it is these platforms. Gonig forward to map this with SSI - I have come to propose this GNAP that doesn't have the problem that OAuth2 could become this authorization standard that then spreads throughout these various APIs at whatever level the APIs are being designed. 
Can we detach posession from control? Here is a link to the slides. Issue putting on the table and trying to figure out and maybe reach a consensus. Lets have this authorization discussion. When you do authorization you have two choices - allow for delegation or don't (OAuth or UMA difference - OAuth vs OPenIDConnect/SIOP) We are going to want to agree that delegation is essential and a human right or optional.  

What is the Action Item here - in GNAP - should there be an appendix on how they might relate to GNAP - why we need it not to be compatable with OAuth2 
Or create a HumanRights working group. 

Question: I thought we agreed not to do GNAP cause it is to warly. Answer: Yes. 

OAuth2: was agred on for now. 

Adrian: would like to share something for discussion - everyone is interested in a micro-services architecture - storage is separated from the code. So what that means is that this authorization issue is going to come up again and again. Just because of that. If we completely ignore GNAP (imagine it doesn't exist) not deal with authoriazaiton in a normalized way. We might end up with different authorization protocols for EDVs and Hubs. Authorization requires a request data model (standardized by RAR or made up)
Because that is the generic role of authorization (or any other protocol invented for authorization) when you ignore the leap between OAuth to GNAP - what you are saying everywhere you have a request that has an authorization - each one of these working gorups will develop special snow-flake of special request - each will specify that aspect of things. At least in the gruops I have been in to not be specifying that layer - required and necessary.  Some other hooks that are receptive to. 

Those of us that have worked on this for a decade - a proposal for doing it called GNAP - you can't expect us to just all get on the same page - we are doing work that we have been doing for a while - we have maturity. In that light it is challenging to be told you don't understand - that doesn't help. 

To the extent that we are interested in interoperability in the DID and VC data models - if these things are randomly put out of scope by these groups. They are being out of scope becuase that is not the piece of the elephant we are not eating today. 
If you can summarize in tight technical form - this is a limitation in OAuth2 - how GNAP solves. 
This sussince technical conversations have not been in this space. 
I have been trying to understand - but lack technical basis. 
Adrian - says he can't do that so isn't sophisticated as you all. Differences in all the microservices. It isn't going to happen frm me. Justin is a better path to have these answered. 

Kaliya put forward rapid iteration process for completing a spec that can be implemented. Potentially in a 10 week sprint. 

Daniel suggested that maybe people out in PRs that are more opionated PR. 
* Ceramic
* Textile
* Fusion 

Lets get it done with implementations and codify what is done.  
Michael (PulseConnect) - is open to contributing closer to implementation and deployment. We have quite a bit of work to do before we can put it out there.
Adrian- Daniel all for looking at example implementation. Part I am confused by relative to our (HIEofONE) implementation. Is there a separate authorization layer for the hub or part of it. It will have to understanding of 
* capability model
* signed awarness 

Authorization module
- so then questions becomes Wallets secure wallets unlocked biometrics. Will be connectecd wallets and secure elements on one side and to Identity Hub on the other. 

If I'm Alice and I want to get a hold of Bob's stuff - object to request from Bob (standarized) Bob is going to pull it down - do I want to do this. Bob is going to have to codify a capabiliyt that gives Allice the keys she needs to call into the hub. 
Adrian - so if I'm hearing you. The Identity Hub consists of two modules (authorization module) the other one is the thing that controls access to storage - that is separate - access token. What would be helpful - moving faster implementing something - agree on something 
* authorization module
* access token is issued 
* consume Storage module
* 
Dan wrote this
step 1: Inbound call
2: Access Caller to determine access
3: If access checks out, return objects
4: If objects encrypted, decrypt on client


Adrian - here is the problem. When you bundle possession with control - you risk locking in teh customer. 
The way the platform economics - end up with apple and google (we control the authorization model - and storage) It is the way classic facebook - we as a service are going to compbine the access control (how manage friends list) and we are going to control your data - Inrupt is doing the same thing as facebook - we have this model where you can have apps. 

TallTed bluring a bunch of lines and saying things that are inacurate. 

When combine control with posission. Allice on her phone controls ability to access - then the data is wherever. Connection between storage module and authorization module needs to be standarized. 

TallTed: What aiming for something loosely coupled - standard that gets specifid you as a client build request one way - data store respond. 

It is not 
Gitrepo like - Masterlist 
replicates
LogicalHub that indivduals commit to - if by magic it is in two spaces. 
logicalme" - can get me on phone or msft instance. Indivdual is only one who can sign permissions and have keys. 

It doesn't have keys. 
Only outside people who have key control can committ to. EDV client. 
Instance of hub provisioning duplicated access. 

when I do the capabilities. When I do a process or committ to local hub. Commit to bobs public key - imediately replicated out - so if bob connects to another instance - he can get data from any one of them. Masterlist DB - don't think of clients and servers. One logical service. 
Committ to IPFS ring that only indivdual has keys. 

Ring of instances connected by IPFS only sync with each other. 
We store in tartergrad network - object stored there. Rasberry Pi. Instance on phone and computer. Asking for more clear API from IPFS - asking for Go-team for - interediction layer. 
Should I give this CID out - yes/no any request outside of known ring of instances. 
Right now IPFS data - encrypted in public IPFS - what when it gets broken. 
Using IPFS using for replication. 

No one and everyone is doing Authentication. 

Kaliya -asked Adrian how different
Adrian - model we work on - we avoid - data minimzation - not making a copy of any data - if you trust the authorization mechanism of the place that it is. Don't make me copy it into somewhere else - give me control delegatable control over what happens next - use it to copy that piece of data - go ofline/don't trust to keep. 
Our Model - that for whatever reason - never duplicate data unless you think they will be unrealizble - ask them to delete it. nature of the control - when you do alow access to data - delgatable. That place that has that control can not tell me what kind of client can bring the access token for access. we don't want token passed around to wrong people (bearer token threat models).








## Meeting 1 July 2021
Focus on Hubs. 


Continuing conversation on encoding.
Object synchronization.
Tobias “channelled” his inner Daniel.
To share that there is low trust between the two instances. 
It must be encrypted OR public

Replication policy at EDV layer - policies at Hubs Layer. 
Hub policy decision point EDV is policy enforcement point. 

Michael: when we started out Hubs based on IPFS - EDVs based on their own technology. 
Two meetings - happen in parallel their development. 

New separate independent discussions. 
To allow evolve separately - not a recognition that they don’t have a relationship. 

Layering conversation and Splits. 
They are independently implementable? Ensure two developments are still closely link so that you can implement an identity hub on top of an EDV. 
If you have an identity hub that is utilizing an EDV. One thing the identity hub might provide is policy for EDV - such as replication policy. 

Replication is based on a specific replication technology - by the database choice. 

Charles: Identity Hubs - was discussed to depend on IPLD; is the EDV group thinking about interfaces and data models that would work? 

The current conversation to use DAG-JOSE and DAG-CBOR.
Would Cryptree also be useful?
 
Data Storage hierarchy. 
Do you want to build a cryptographic se

Tobias: per-resource encryption versus tree-based efficiency of scale (at cost of granular authZ efficiency)

Andreas: but the question is what the access/authZ system is that the client needs exposed; serving a file is offering a merkle branch(es) proof

The Isssue is [number 60](https://github.com/decentralized-identity/identity-hub/issues/60). 

## 24 June - EDV call

## 23 June - IdHub 

- See separate [notes file](https://hackmd.io/UsGtEYJ9TdmevbFyJHzfRA?view#62321---Use-Cases)


## MISSING MEETINGS???

## Meeting - 8 April 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/VL-GZrwhD7EnH4bsbu_eECzoqbDdqZyz9UtYnqySsV1B4ZgFpSErSZF8xPILrNX7.rpeYiSGLoK4qQz8p)

1. IPR Reminder
2. A discussion about work mode for the EDV dedicated sub call


## Meeting - 1 April 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/9S9ZpqPQLzOVflEvYWlN896f-HFG5eNFv6E6206vVenaIiWWCD9B4Uk1gXOfeMhZ.Xib3h-uYjTUjhHfW)

1. IPR Reminder
2. A discussion about work mode for the EDV dedicated sub call

<details>
<summary> NOTES </summary>

**Agenda**: Dmitri gave an intro into the suggested working 

**PROPOSAL**: EDV calls focus on the following:

Spec
Test vectors
Remaining 1.0 of features (history api, etc).
securekey PR
pagination
history api
**All** +1's

**PROPOSAL**: EDV calls spin up 3 repos. 1) EDV Spec repo. 2) Test suite / test vectors. 3) Example implementation (client, server).

**All** +1's

**PROPOSAL**: Based on what I heard: Incoming issues will be triaged on call within two weeks. Issues that have been triaged will have tags associated with them, and a directly responsible individual assigned. If no one volunteers, the issue will be considered to unimportant to keep open.

**All** +1's

Manu: what do we want to do with the current list of issues in the repo?

Orie: As we spin up the new repo editors will label the relevant ones "Pending Move to EDV/Hub" all other issues 

Eric: Question about when cross group updates will occur

Orie: In favour of not setting up anything formal yet

Manu: Lets rely on more informal cross sub-group overlap for context sharing

Manu: Propose to move on to outstanding feature issues

Troy: *Gave a quick summary of their existing proposal for batch capability in an EDV*

Tobias: *Gave a quick summary of the proposal for a history API on an EDV*

</details>

<details>
<summary> Attendees</summary>

* Dmitri Z
* Tobias Looker
* Kaliya Young
* Daniel Buckner
* Manu Sporny
* Dave Longley
* Justin Bingam
* Zokama
* Eric Schuh
* Balazs Nemethi
* Ian Davis
* Adrian Gropper

</details>

## Meeting - 25 March 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/-LWGTan4y9absiIl2LyKOkSzm6wzJaEIy-iC6imxhY99kB0J1-q6jeYD07QyhFll.z2ZK_KC1nUCPLPr4)

1. IPR Reminder
2. Introductions and Re-Introductions
3. A proposal to the WG was put forward about call structure

<details>
<summary> NOTES </summary>

**Intros and Re-intros**

Justin Bingham - Co-editor of the SOLID specification

**Agenda**

A proposal was made to the working group to shift the call structure to alternating topic calls between Hubs and EDVs

**PROPOSAL**: The SDS WG will change to alternating calls where we will focus on EDVs on one call and Hubs on the other call. Each group will report into the the other group at least once a month.

Proposal passed, no objections noted.

</details>

<details>
<summary> Attendees</summary>

* Dmitri Z
* Tobias Looker
* Kaliya Young
* Daniel Buckner
* Manu Sporny
* Dave Longley
* Adrian Gropper
* Michael Herman
* Zokama
* Derek Trider
* Eric Schuh
* Michael Shea
* Neil Thomson
* Troy Ronda
* Balazs Nemethi

</details>

## Meeting - 18 March 2021 (1600 ET)

### Agenda + [recording1](https://us02web.zoom.us/rec/share/OQmXrU3tlUCGXFrEHZWOqAeW9TB40V3YEToKuX9FAcU6ALZOjq1oy8yQBaFYupA_.Xmwik3tdhQAL4wxb) + [recording2](https://us02web.zoom.us/rec/share/FLxwQgnFpp9KuyU1TR9JdRoTsz9hVZOXwgbgAd5jocDuQGsp2dFyB9mz2repw3m9.12q-ITzSe6A3N9Pp)

## Meeting - 11 March 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/-6PUTYTQfZt-2E23VYFFUcAQsdjiocqGy8hlOaCk1jNOC41EuEHmB8UP7hpmOmfs.qbMCfoK4E_wwDXmV)



## Meeting - 4 March 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/uLFMRPa1Z1xbcAt_S5rv8VPZkWJBx90Mxv73aCctvq_z_aj6ClaIQl6kvZxKltQx.5tqb7LI3oOVopzHO)

1. IPR Reminder
2. Introductions and Re-Introductions
3. A discussion of Daniel Buckner's [Requirements for Hubs](https://hackmd.io/qClYLUPkQ7uf0r3_4O7BUQ?view)


<details>
<summary> NOTES </summary>

**Intros and Re-intros**

Eric Schuh - from legendary requirements introduced himself

**Announcements**

Up and coming thoughtful biometrics workshop - Run by Kaliya Young et al, reach out to her for more details

**Agenda**

Dmitri gave a brief summary of the previous 2 sessions about the EDV - Hubs requirements doc

Manu continued facilitating the discussion around this doc making it to [completion](https://hackmd.io/qClYLUPkQ7uf0r3_4O7BUQ)

**PROPOSAL**: This group can specify a log data model (or better yet use an existing data model) and API, as a separate Note / side-spec.

+1 for all except for Adrian and Michael


Dmitri moved the group onto our next agenda item which was to gather requirements from implementers on which features are the most important

Manu outlined a process in which we can establish this list via collecting requirements then applying rank choice voting

</details>

<details>
<summary> Present</summary>

* Dmitri Z
* Tobias Looker
* Kaliya Young
* Daniel Buckner
* Manu Sporny
* Dave Longley
* Adrian Gropper
* Michael Herman
* Balas Nemethi
* Chris Were
* Derek Trider
* Eric Schuh
* ET
* Jace Hensley
* Michael Herman
* Michael Shea
* Neil Thomson
* Troy Ronda
* Zokama
* Juan


</details>

## Meeting - 25 Feb 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/Mal_vVMQZTFWddXpulxUfea8Emc83Jcr1hUXNYM2DBvWBEqZEW-4Vugds9tIn5iU.VSiLcYl_Yw6D9pt3)

1. IPR Reminder
2. Introductions and Re-Introductions
3. A discussion of Daniel Buckner's [Requirements for Hubs](https://hackmd.io/qClYLUPkQ7uf0r3_4O7BUQ?view)


<details>
<summary> NOTES </summary>

- Manu continued taking the group through Daniel Buckners requirements [document](https://hackmd.io/qClYLUPkQ7uf0r3_4O7BUQ?view)

</details>

<details>
<summary> Present</summary>

* Dmitri Z
* Tobias Looker
* Kaylia Young
* Daniel Buckner
* Manu Sporny
* Dave Longley
* Adrian Gropper
* Michael Herman
* Derek Trider
* Troy Ronda
* Balazs
* Robbie Jones
* Michael Shea
* Jace Hensley


</details>


## Meeting - 18 Feb 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/M6IyvrMNKWxxz01iGRmr0GAaEDrAoJ9yeUpjSLOxVvvRq78nQd7kGZd4guBXX1Tm.mrj8-UovRKrCtb77)

1. IPR Reminder
2. Introductions and Re-Introductions
3. A discussion of Daniel Buckner's [Requirements for Hubs](https://hackmd.io/qClYLUPkQ7uf0r3_4O7BUQ?view)


<details>
<summary> NOTES </summary>

- Continued conversation around the requirements [document](https://hackmd.io/qClYLUPkQ7uf0r3_4O7BUQ?view)

</details>

<details>
<summary> Present</summary>

* Dmitri Z
* Tobias Looker
* Kaylia Young
* Daniel Buckner
* Manu Sporny
* Dave Longley
* Adrian Gropper
* Michael Herman
* Derek Trider
* Troy Ronda
* Balazs
* Robbie Jones
* Michael Shea


</details>

## Meeting - 11 Feb 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/Mq7pRU8kbZpEPrHf3RAsWKAgA09l3FiOqZsW0MqwVTv4EJ8Vhu7PadJH9SDnlvvm.wqqZ6JzsiehASH_Y)

1. IPR Reminder
2. Introductions and Re-Introductions
3. A discussion of Daniel Buckner's [Requirements for Hubs](https://hackmd.io/qClYLUPkQ7uf0r3_4O7BUQ?view)


<details>
<summary> NOTES </summary>

- Michael H asked for someone to summarise the differences between Hubs and EDVs to frame the conversation

- Orie and Daniel B gave an explanation of the conceptual separation 

- Adrian wrote up some notes in response to Daniels requirements that were shared on the [list](https://lists.identity.foundation/g/sds-wg/message/65)

- Much of the discussion was held interactively via the hackmd [document](https://hackmd.io/qClYLUPkQ7uf0r3_4O7BUQ?view)

</details>

<details>
<summary> Present</summary>

* Dmitri Z
* Tobias Looker
* Kaylia Young
* Daniel Buckner
* Manu Sporny
* Dave Longley
* Derek Trider
* Juan Caballero
* Benjamin Goering
* Stephen Curran
* Troy Ronda
* Orie Steele
* Chris Were
* Adrian Gropper
* Michael Herman


</details>


## Meeting - 4 Feb 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/uLFMRPa1Z1xbcAt_S5rv8VPZkWJBx90Mxv73aCctvq_z_aj6ClaIQl6kvZxKltQx.5tqb7LI3oOVopzHO)

1. IPR Reminder
2. Introductions and Re-Introductions
3. Replication Discussion Continued
4. Issue Review


<details>
<summary> Present</summary>

* Dmitri Zagidulin
* Daniel Buchner
* Adrian Gropper
* Derek Trider
* Vaner Vendramini
* Kaliya Young
* Jace Hansley
* Derk Trider
* Sze Wong
* Manu Sporny
* Michael Shea


</details>

## Meeting - 28 Jan 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/KA9sx9njL4ArlaQHl23bLJlvnk7hk0LX3CZa-jPQwPpoBWAZpOxaYO_xex8t2m1F.ipdJx1MoF0Nkq441)

1. IPR Reminder
2. Introductions and Re-Introductions
3. Replication Discussion Continued
4. Issue Review


<details>
<summary> Present</summary>

* Dmitri Z
* Tobias Looker
* Kaylia Young
* Daniel Buckner
* Manu Sporny
* Dave Longley
* Orie Steele
* Chris Were
* Adrian Gropper
* Michael Herman
* Michael Shea
* Nader Helmy
* Zokama


</details>




## Meeting - 21 Jan 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/4o3fIJu6rsAW3_CMgxjuWQDa1MxVKKVRp7Al6VIJl4GZQSz4JLWssxHkskJeC5tt.GP4BNTO-BSaJ5jv6)

1. IPR Reminder
2. Introductions and Re-Introductions
3. Replication Discussion Continued
4. Issue Review

<details>
<summary> NOTES</summary>

**Introductions / Re-introductions**

- Jace from Bloom re-introduced himself

**Replication Discussion**

- Orie gave a brief reflection on our prior discussion on replication, touching on topics such as

    - filtered / partial replication, are we looking for EDV's to support only syncing a subset of information

    - how does this intersect with the AuthZ model we select

    - what role the client plays and what role the server play, e.g is it server controlled, client controlled or somewhere in between like client controlled but server facilitated.

- Adrian asked the question "what would we do differently to other DBs like CouchDB"

- Orie answered Adrians question, saying right now it is not defined but the likely solution will be similar however there are quite unique constraints that come about when the data is client side encrypted.

- Adrian asked how does an architecture like this protect against a honey pot style approached

- Daniel B make the observation that AuthZ is an important component in syncing that directly relates to the trust model assumed between clients and instances

- Andreas stated that the real problem in syncing between instances is the model we assume around consistency i.e do we assume strong consistency?

- Dave L responded to Adrians query by stating his assumption is that the server would not have the ability to decrypt the documents only perhaps Zcaps required to make authorized calls to another instance

- Michael asked is the replication model assumed multi-master or not? And also how granular does the sync get?

- Chris asked if we are going to adopt a model like CouchDB's replication do we want to invest in attempting to standardised this?

- Daniel B shared previous experiences with couch db, finding it in-compatible with their requirements for hubs

- Orie responded to Michaels partial sync strategy by explaining how CouchDB works with map-reduce queries, citing npm as a popular project that leverages CouchDB, but also noted the distinct difficulties that are introduced when the data is client encrypted.

- Adrian expressed frustration at the introduction of hubs into the conversation, saying that he finds them orthogonal and a distraction to the discussion on sync and replication. He clarified his issue w.r.t the honey pot question saying by encrypting we create a key management issue where clients need HSMs to interact with an EDV.

- Dmitri agreed that adrians general question around key management is good, but to an extent out of scope for this working group.

- Manu in response to the question around standardizing a replication model like couchdb said it is potentially a very difficult and involved task. Furthermore he asked had anyone implemented a model like this? Or instead can we talk about a simpler replication model like uni-directional replication.

- Zokama asked why is couchdb the main focus of the discussion?

- Michael echoed the same sentiments as Zokama

- Tobias responded to adrians question saying he does not expect clients to need an HSM to interact with an EDV, instead an EDV client will need to be able to perform crypto operations but where the keys used are sourced from will likely be varied e.g HSM SSM or derived from knowledge factors like a password.

- Orie asked to re-frame the discussion back into use-cases for replication. He also proposed whether we can initially constrain the conversation to uni-directional replication (the simple case) before the more complex derivatives.

- Dmitri brought the conversation back to some core properties uni-directional vs bi-directional, partial vs full sync and how the sync is performed. He also echoed Orie's ask to start simple w.r.t sync and replication.

- Daniel said he has done a tone of research on sync and replication and wants to be sure we build a system that caters for the more complicated sync scenarios and is committed to that cause.

- Manu echoed Dmitri and Ories ask to work on uni-directional replication initially and asked us to work on more terse use cases that describe the business need.

- Adrian asked for the use-cases to be more granular and relatable than just backup and recovery

- Andreas pointed out there are other examples of P2P replication protocols that can be looked at for sources of inspiration.

- Michael asked what sort of change tracking is build into an EDV to date?

- Manu asked for those using the terminology of "master slave" to instead move towards language like "primary secondary" clarifying he doesn't believe anyone on the call means anything bad when they use it, just wanting to drive the ecosystem towards more inclusive language.

- Dmitri responded to Michaels query by saying it is partially dependent on what use-cases we use to guide us.

</details>

<details>
<summary> Present</summary>

* Dmitri Zagidulin
* Tobias Looker
* Kaylia Young
* Daniel Buckner
* Adrian Gropper
* Chris Were
* Dave Longely
* Derek Trider
* Juan Caballero
* Leah
* Michael Shea
* Robbie Jones
* Sze (Z) Wong
* Troy Ronda
* Zokama
* Jim StClair
* Kristina Yasuda


</details>



## Meeting - 14 Jan 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/7dP3hPghHWrpK0gTFn5ltl164GoLInWEsNCO6K0byzMHo6M6rI_gowyrVRNLTLbp.L9DgvJdwNGojYDBQ)

1. IPR Reminder
2. Introductions and Re-Introductions
3. Replication (Use Cases and Threat Models) 
4. Issue Review

<details>
<summary> NOTES</summary>

Intro's / Re-intro's and announcements

Zokama - Introduced himself
Kaylia - New job now the ecosystem director for the linux foundation for public health
Revisited the naming question

- Group chartered as the Secure Data Storage WG and as per the vote in the WG we have renamed the current work item to Confidential Storage, there are appears to be some confusion about this relationship it was clarified during the call.

- Adrian proposed for the spec to be renamed to EDV (encrypted data vaults) and to remove the hubs section from the current spec because there is a legal distinction between EDV and hubs.

- Chris in reference to Adrians argument re-raised the point about hubs having access to un-encrypted data, Dmitri asked Chris to create an issue to capture this if it does not already exist.

Replication

- Dmitri explained how we got to this topic: authorization model -> how do we refer to resources (identifiers) -> how do we replicate these resources between provider instances.

- The conversation around replication was framed in the context of the use cases document

- Adrian G gave some examples about how he would like replication to occur, citing an example use case involving drop box and a password manager

- Chris W asked for clarification on the sharing data usecase, "is that sharing everything or only a subset?". Dmitri clarified that the current usecase is very general and the granularity of sharing is dependent on the authz model.

- Adrian asked whether backup is related to replication and whether it exists at just the hub level. Orie said he believes replication is at the EDV (CS) level.

- Dave asked whether replication is invisible to the client or co-ordinated by the client? I.e is replication achieved by the client co-ordinating it, or is it something two EDV servers do together without the client.

- Dave proposed "client-controlled replication"would be a potential feature for the spec, "server-controlled replication" would not be.

- Daniel B proposed what properties he would like to see from replication which is that Alice can have multiple instances of her hub that when a change is sent to one, it is broadcasted to all meaning if one provider fails she has appropriate redundancy.

- Dmitri clarified what he called a difference between client visible vs client controlled replication citing Orie's example of couch db, which is replication that is client visible but server controlled, where as another option is for replication to be client visible and client controlled.

- Orie made the point that not all replicas may be equal citing that some replicates due to storage requirements or bandwidth might not be able to hold an entire dataset.

- Dave clarified further about client controlled replication, asking is it the client setting a setting on the EDV or is it actually performing the copy. He also pointed out that when the server instances are responsible for syncing differential replication (partial replication) would be difficult, as the server has no access to the plain text data.

- Orie pointed out that encrypted indexes could offer a solution to achieve differential replication (partial replication) between two server instances. Dave agreed that we could explore a solution based on this. Chris agreed but was not convinced about dynamic filtered based replication.

</details>

<details>
<summary> Present</summary>

* Dmitri Zagidulin
* Tobias Looker
* Kaylia Young
* Daniel Buckner
* Adrian Gropper
* Chris Were
* Dave Longely
* Derek Trider
* Juan Caballero
* Leah
* Michael Shea
* Robbie Jones
* Sze (Z) Wong
* Troy Ronda
* Zokama
* Jim StClair
* Kristina Yasuda


</details>

## Meeting - 7 Jan 2021 (1600 ET)

### Agenda + [recording](https://us02web.zoom.us/rec/share/c9VLhgKS4Q5cvkbFBSCuHGWEjzCqUMGfb7el6BJ1fZzMncnWRwcTi4D28XQb28Ih.SdrK4UNF-DtfOoNw)

1. 1. IPR Reminder
2. Introductions and Re-Introductions
3. Discussion about Identifiers (how we refer to documents and other artifacts in an EDV)  - [Presentation](https://docs.google.com/presentation/d/1QEHSs4XJ05yQl2mvpiqbM80-MySxlVI9cNDLPq_XkkY/edit#slide=id.p).
4. Issue review

<details>
<summary> Present</summary>

* Dmitri Zagidulin
* Tobias Looker
* Kaylia Young
* Manu Sporny
* Daniel Buckner
* Orie Steele
* Troy Ronda
* Chris Were
* Dave Longley
* Derek Trider
* Adrian Gropper
* Andreas Freund


</details>

## Meeting - 17 Dec 2020 (1600 ET)

### Agenda [recording](https://us02web.zoom.us/rec/share/Ki8B0SPvZFVFd04UhY8yex9FyT-iE4XSJjItABH6PMaF36bQ5Z0bOUt579fjhmlV.pD_om2_uktnVWVjJ)

1. IPR Reminder
2. Introductions and Re-Introductions
3. PR Review (Example capabilities for operations). 
4. Issue review

<details>
<summary> Present</summary>

* Dmitri Zagidulin
* Tobias Looker
* Kaylia Young
* Manu Sporny
* Daniel Buckner
* Martin Riedel
* Steve Magennis
* Troy Ronda
* Chris Were
* Dave Longley
* Derek Trider
* Juan Caballero
* Adrian Gropper
* Andreas Freund


</details>

## Meeting - 10 Dec 2020 (1600 ET)


### Agenda + [recording](https://us02web.zoom.us/rec/share/Snpr3R8FBFAdtuybkgWhYAjWB3PmuoP6ebzuqnm2w7EdmShLfll4aOdYHyia7-VA.DCXAbl1-1VIN5WWD)

1. IPR Reminder
2. Introductions and Re-Introductions
3. PR Review (Example capabilities for operations). 
4. Issue review

<details>
<summary> Present</summary>

* Dmitri Zagidulin
* Tobias Looker
* Kaylia Young
* Manu Sporny
* Daniel Buckner
* Martin Riedel
* Steve Magennis
* Troy Ronda
* Chris Were
* Dave Longley
* Derek Trider
* Juan Caballero
* Adrian Gropper
* Andreas Freund

</details>



## Meeting - 3 Dec 2020 (1600 ET)

### Agenda

1. IPR Reminder
2. Introductions and Re-Introductions
3. Discussion: Storage Operations, and Authorization Structure
4. Issue review

## Meeting - 19 Nov 2020 (1600 ET)

### Agenda

1. IPR Reminder
2. Introductions and Re-Introductions
3. (Continued) Use Cases and Demos conversation
4. Issue review

## Meeting - 15 Oct 2020 - (1600 ET) [recording]() | [transcript]()

### Agenda

1. IPR Reminder
2. Introductions and Re-Introductions
3.

### Proposal

### Attendees
