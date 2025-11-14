# Typhoon Protocol - Privacy-Preserving NFT Transfers

This README documents the **Typhoon Protocol** project developed for **Invisible Garden - ARG25**.  
Here we track weekly progress, architecture, critical dependencies, and overall team advancement.

---

## Project Title
**Typhoon Protocol**

---

## Team

**Members:**
- Diego Guzman Montoya  
- David Zapata  
- Pedro Solís Gonzales

**GitHub:**
- [@Odig](https://github.com/Odig0)  
- [@DavidZapataOh](https://github.com/DavidZapataOh)  
- [@jwnior15](https://github.com/jwnior15)

**Devfolio Handles:**  
- Odig  
- DavidZO  
- jwnior15

---

## Project Description

Typhoon Protocol is a **protocol for transferring NFTs with complete privacy**, built with **Zero-Knowledge Proofs (ZKPs)** using:

- **Noir 1.0.0-beta.9** for ZK circuits  
- **Barretenberg 0.87.0** as cryptographic backend  
- **Solidity** for EVM logic  
- **Next.js** for the decentralized application

### Problem We Solve
Current NFT systems publicly expose:
- Owners  
- Transaction history  
- Wallet addresses  
- Associated metadata  

This compromises user privacy and security.

### Our Solution
A protocol where users can:
- **Transfer NFTs**
- **Receive NFTs**
- **Gift NFTs**

All **without revealing their public address**, using only **ZK proofs** verified on-chain.

The smart contract only sees a valid proof, never an address or history.

---

## Repositories

- **Backend:** https://github.com/DavidZapataOh/sponge-protocol-back  
- **Frontend:** https://github.com/DavidZapataOh/sponge-protocol-front  

---

## Tech Stack

- **Noir 1.0.0-beta.9**  
- **Barretenberg 0.87.0**  
- **Solidity**  
- **Foundry**  
- **Next.js / Typescript**  
- **ZKIT**

---

## Required Versions

This project requires exact versions.  
Other versions will produce failures in artifacts, tests, or verification.

### Noir - **1.0.0-beta.9**
Used because:
- Changed artifact format  
- Stable compatibility with Barretenberg 0.87.0  
- Better support for complex inputs  
- New compilation module

### Barretenberg - **0.87.0**
Fundamental because:
- Stable UltraPlonk implementation  
- Consistent API for WASM verification  
- Full compatibility with Noir beta 9  
- Good support in Next.js environments

If you use another version:
- Proofs won't verify  
- Artifacts are incompatible  
- On-chain verifier may fail  

---

## Objectives

By the end of ARG25 we aim for:
- Practical and theoretical mastery of ZKPs  
- Build a private, verifiable, and decentralized NFT protocol  
- Integrate Noir + Barretenberg + Solidity with best practices  
- Deliver a functional and demonstrable MVP

---



## Next Steps
Roadmap after ARG25

- Extend tests  
- Integrate mobile  
- Deploy multi-chain version  
- Optimize proofs and verification  

---

_This template is part of the [ARG25 Projects Repository](https://github.com/invisible-garden/arg25-projects)._  
_Update weekly by committing to your fork and pushing updates in the same PR._
