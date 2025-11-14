# Sponge Protocol – Privacy-Preserving NFT Transfers

This README documents the **Sponge Protocol** project developed for **Invisible Garden – ARG25**.  
It includes architecture, technical decisions, weekly progress, and all relevant development details.

---

## Project Title  
**Sponge Protocol**

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

**Devfolio:**  
- Odig  
- DavidZO  
- jwnior15

---

## Project Description

**Sponge Protocol** is a **privacy-preserving NFT transfer protocol** built using **Zero-Knowledge Proofs (ZKPs)**.  
It uses:

- **Noir 1.0.0-beta.9** for ZK circuit logic  
- **Barretenberg 0.87.0** for proving and verification  
- **Solidity** for the EVM smart contracts  
- **Next.js + TypeScript** for the decentralized application

### The Problem
Traditional NFT transfers expose sensitive information, including:

- Wallet ownership  
- Complete transaction history  
- Public addresses  
- Transfer relationships  
- Metadata correlation  

This results in privacy, tracking, and security risks.

### The Solution
Sponge allows users to:

- **Grant private viewing rights to an NFT without revealing your address**
- **Control who can access the NFT's metadata through encrypted, permissioned proofs**
- **Share or transfer viewing permissions anonymously using Zero-Knowledge Proofs**
- **Protect ownership and access history with fully encrypted, non-linkable proofs**


All transfers are executed through **Zero-Knowledge proofs**, meaning:

- No public address is exposed  
- No sender–receiver relationship is revealed  
- The smart contract only validates a **proof**, not an address  

---

## Repositories

- **Backend:** https://github.com/DavidZapataOh/sponge-protocol-back  
- **Frontend:** https://github.com/DavidZapataOh/sponge-protocol-front  

---

## Tech Stack

- Noir 1.0.0-beta.9  
- Barretenberg 0.87.0  
- Solidity  
- Foundry  
- ZKIT  
- Next.js / TypeScript  

---

## Required Versions

This project depends on specific versions due to breaking changes across releases.

### Noir – **1.0.0-beta.9**
Chosen because:

- Compatible with Barretenberg 0.87.0  
- New artifact format  
- Better support for complex private inputs  
- More stable compiler modules  

### Barretenberg – **0.87.0**
Selected because:

- Stable UltraPlonk prover  
- Predictable WASM performance in Next.js  
- Fully compatible with Noir beta 9  
- Reliable on-chain verifier generation  

Using any other combination will result in:

- Invalid/no proofs  
- Artifact mismatch errors  
- Failed contract verification  

---

## Weekly Progress (ARG25 Timeline)

### **Week 1 – Concept Definition & Initial UI**
- Defined the idea of a private NFT transfer protocol  
- Created the **UI/UX blueprint**  
- Set up the **Next.js frontend**  
- Added **MetaMask connection & wallet handling**  
- Began exploring Noir to understand how to structure private commitments  

---

### **Week 2 – Frontend + ZK Exploration**
- Completed most of the dApp visual layer  
- Built core screens and flows  
- Connected frontend ↔ backend logic  
- Ran initial tests with Noir circuits  
- Studied proving/verification models for the protocol  

---

### **Week 3 – Noir Integration & Version Discovery**
- Implemented the full Noir circuit for private NFT commitment  
- Integrated Barretenberg prover & verifier  
- Encountered a critical error caused by mismatched versions  
- After research and testing, found the correct working pair:  
  - **Noir 1.0.0-beta.9**  
  - **Barretenberg 0.87.0**  
- Completed end-to-end proof generation with correct encryption  

This unlocked the full functioning protocol.

---

## Objectives

By the end of ARG25, our goals were:

- Gain practical mastery of Zero-Knowledge Proofs  
- Deliver a functional privacy-preserving NFT transfer MVP  
- Integrate Noir + Barretenberg + Solidity following best practices  
- Demonstrate a working end-to-end system  

---

## Next Steps (Post-ARG25 Roadmap)

- Improve tests and coverage  
- Develop a mobile version  
- Deploy on multiple chains  
- Optimize proofs and verification time  
- Expand support for fungible assets and multi-asset commitments  

---

_This template belongs to the [ARG25 Projects Repository](https://github.com/invisible-garden/arg25-projects)._  
_Update weekly by committing to your fork and pushing updates in the same PR._  
