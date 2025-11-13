# Typhoon Protocol – Privacy-Preserving NFT Transfers

> 🔗 **Repositorio original del backend (creado por David Zapata):**  
> https://github.com/DavidZapataOh/sponge-protocol-back

Este README corresponde a nuestro proyecto **Typhoon Protocol**, desarrollado para **Invisible Garden – ARG25**.  
Aquí documentamos el avance semanal, arquitectura, dependencias críticas y progreso general del equipo.

---

## Project Title
**Typhoon Protocol**

---

## Team

**Integrantes:**
- Diego Guzman Montoya  
- David Zapata  
- Pedro Solís Gonzales

**GitHub:**
- [@Odig](https://github.com/Odig0)  
- [@DavidZapataOh](https://github.com/DavidZapataOh) *(creador del repo backend original)*  
- [@jwnior15](https://github.com/jwnior15)

**Devfolio Handles:**  
- Odig  
- DavidZO  
- jwnior15

---

## Project Description

Typhoon Protocol es un **protocolo para transferir NFTs con privacidad total**, construido con **Zero-Knowledge Proofs (ZKPs)** usando:

- **Noir 1.0.0-beta.9** para circuitos ZK  
- **Barretenberg 0.87.0** como backend criptográfico  
- **Solidity** para la lógica en la EVM  
- **Next.js** para la aplicación descentralizada

### 🔐 Problema que resolvemos
Los sistemas NFT actuales exponen públicamente:
- Propietarios  
- Historial de transacciones  
- Dirección de wallet  
- Metadata asociada  

Esto compromete la privacidad y la seguridad de los usuarios.

### 🌀 Nuestra solución
Un protocolo donde los usuarios pueden:
- **Transferir NFTs**
- **Recibir NFTs**
- **Regalar NFTs**

Todo **sin revelar su dirección pública**, usando únicamente **pruebas ZK** verificadas on-chain.

El contrato solo ve una prueba válida, nunca una dirección o historial.

---

## Tech Stack

- **Noir 1.0.0-beta.9**  
- **Barretenberg 0.87.0**  
- **Solidity**  
- **Foundry**  
- **Next.js / Typescript**  
- **ZKIT**

---

## ⚠️ Versiones obligatorias

Este proyecto SÍ requiere versiones exactas.  
Otras versiones producirán fallos en artefactos, pruebas o verificación.

### 🧮 Noir – **1.0.0-beta.9**
Se usa porque:
- Cambió el formato de artefactos  
- Compatibilidad estable con Barretenberg 0.87.0  
- Mejor soporte para inputs complejos  
- Nuevo módulo de compilación

### 🔐 Barretenberg – **0.87.0**
Fundamental por:
- Implementación estable de UltraPlonk  
- API consistente para verificación WASM  
- Compatibilidad total con Noir beta 9  
- Buen soporte en entornos Next.js

Si usas otra versión:
- Las pruebas no verifican  
- Los artefactos no son compatibles  
- Puede fallar el verificador on-chain  

---

## Objectives

Al finalizar ARG25 buscamos:
- Dominio práctico y teórico de ZKPs  
- Construir un protocolo NFT privado, verificable y descentralizado  
- Integrar Noir + Barretenberg + Solidity con buenas prácticas  
- Entregar un MVP funcional y demostrable

---

## Weekly Progress

### 📌 Week 1 (Ends Oct 31)
**Goals**
- Definir la idea ZK
- Elegir stack compatible Noir + Barretenberg
- Diseñar arquitectura inicial

**Progress Summary**
- Objetivos completados: diseño conceptual, prototipo base y selección tecnológica.

---

### 📌 Week 2 (Ends Nov 7)
**Goals**
- *(Por completar)*

**Progress Summary**
- *(Por completar)*

---

### 📌 Week 3 (Ends Nov 14)
**Goals**
- *(Por completar)*

**Progress Summary**
- *(Por completar)*

---

## Final Wrap-Up

Después de la semana 3:

- **Main Repository:**  
- **Demo / Deployment:**  
- **Slides / Presentation:**  

---

## Learnings
*(Por completar al final del programa)*

---

## Next Steps
*(Roadmap posterior a ARG25)*

- Extender pruebas  
- Integrar mobile  
- Desplegar versión multi-chain  
- Optimizar pruebas y verificación  

---

_This template is part of the [ARG25 Projects Repository](https://github.com/invisible-garden/arg25-projects)._  
_Update weekly by committing to your fork and pushing updates in the same PR._
