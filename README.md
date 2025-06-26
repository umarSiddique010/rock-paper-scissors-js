# Rock Paper Scissors

<div align="center">

<img src="./assets/logo.png" alt="Rock Paper Scissors Logo" width="150" height="150">

#### A modern OOP-driven browser game built in Vanilla JavaScript, architected with SOLID principles, and battle-tested with full unit + integration coverage using Vitest.

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vitest](https://img.shields.io/badge/Tested_with-Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)
[![jsdom](https://img.shields.io/badge/jsdom-Simulated_DOM-blue?style=for-the-badge)](https://github.com/jsdom/jsdom)
[![OOP](https://img.shields.io/badge/OOP-Class_Structure-blueviolet?style=for-the-badge)](https://en.wikipedia.org/wiki/Object-oriented_programming)
[![SOLID](https://img.shields.io/badge/SOLID-Design_Patterns-orange?style=for-the-badge)](https://medium.com/nerd-for-tech/solid-principles-explained-in-plain-english-11c221fdb48e)
[![Accessibility](https://img.shields.io/badge/Accessibility-100%25-green?style=for-the-badge)](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile_First-critical?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![GitHub](https://img.shields.io/badge/Hosted_on-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/umarSiddique010/rock-paper-scissors-js)

</div>

---

## 🔖 Project Overview

This is not just a game — it's a **technical showcase**. Built from scratch without frameworks, this project demonstrates **clean architecture**, **class-based encapsulation**, and **professional testing standards** for frontend apps.

> 💼 **Recruiter & Freelance Note**: This repo is designed to represent my skills in test-driven development, clean class architecture, DOM/UI separation, and real-world production practices — all with no frameworks. Hire skill, not fluff.

---

## 💡 Features Breakdown

| Category         | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| 🏋️ Gameplay      | Fully interactive Rock Paper Scissors logic vs AI                       |
| 📉 Score System  | First to 5 wins, match result displayed                                 |
| 🦜 UI/UX         | Hover animations, responsive mobile design, blur modal for result       |
| 🤖 OOP Structure | Game split into `GameLogic` & `GameUI` classes for testability          |
| ✅ Reset Logic   | Scores and UI are resettable instantly                                  |
| 🔧 Accessibility | Clear ARIA-compliant structure and keyboard navigability                |
| ⚖️ Testing       | Full **unit** and **integration** test coverage with `Vitest` + `jsdom` |

---

## 🧪 Testing Architecture

### GameLogic.test.js (Unit)

- Validates all core logic methods
- Mock-based isolation for `GameUI`
- Includes:

  - `checkWin()` tests for draw/human/computer win
  - `gameOver()` scenarios for each win state
  - `playHandler()` flow and internal call validation

### GameUI.test.js (DOM Unit)

- DOM is mocked in `beforeEach`
- Tests:

  - `liveScore()` correctness
  - `resultBox()` modal display
  - `resetUI()` behavior

### main.test.js (Integration)

- Real DOM event testing
- Simulates user clicks for Rock, Paper, Scissors
- Validates:

  - Game flow triggers
  - `liveFeedback` and modal updates
  - Reset behavior

### Coverage:

- ✅ 100% test coverage on core logic
- ✅ All DOM interactions simulated

---

## 🏢 Tech Stack Deep Dive

| Stack                     | Role                                                |
| ------------------------- | --------------------------------------------------- |
| **JavaScript (ES6)**      | Core logic, modular imports, classes                |
| **HTML5 + Semantic Tags** | Accessibility, SEO, structure                       |
| **CSS3**                  | Grid, Flexbox, hover effects, mobile responsiveness |
| **Vitest**                | Fast unit + integration test runner                 |
| **jsdom**                 | Simulated browser for DOM testing                   |
| **OOP + SOLID**           | Design principles for class interaction             |

---

## 📁 Project Structure

```
rock-paper-scissors-js/
├── index.html              # Semantic structure & interaction roots
├── style.css               # CSS animations, responsiveness, layout
├── main.js                 # Bootstrap, event binding, game entrypoint
├── Javascript/
│   ├── GameLogic.js        # Pure logic class: rules, state, outcome
│   └── GameUI.js            # DOM-only class: renders feedback, modal
├── __tests__/
│   ├── GameLogic.test.js
│   ├── GameUI.test.js
│   └── main.test.js
├── assets/                # Game images: rock/paper/scissors
└── .gitignore              # Clean repo structure
```

---

## ⚙️ Installation & Usage

```bash
# Clone the repo
https://github.com/umarSiddique010/rock-paper-scissors-js.git

# Move to project
cd rock-paper-scissors-js

# Install dev deps
npm install

# Run test suite
npm test
```

---

## 📈 Highlights & Learning Outcomes

### ✏️ Clean Code Practices

- OOP: Used encapsulated `GameLogic` and `GameUI`
- SOLID: Each class has a single responsibility
- No tight coupling: UI mockable in logic tests

### 🔧 Testing Mastery

- Used `Vitest` with `mockImplementation` for logic
- Simulated DOM environment via `jsdom`
- Validated interaction and isolation

### 🛋 UX/UI

- CSS transitions + scaling animations
- Blur background modal for results
- Mobile responsive layout using media queries

### 🚀 Dev Tools

- Modern ES modules
- Fully ESM-compatible test runner
- VS Code support and script automation

---

## 👤 Author

**Md Umar Siddique**

[![GitHub](https://img.shields.io/badge/@umarSiddique010-181717?style=flat-square&logo=github)](https://github.com/umarSiddique010)
[![LinkedIn](https://img.shields.io/badge/LinkedIn:%20Md%20Umar%20Siddique-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/md-umar-siddique-1519b12a4/)
[![Gmail](https://img.shields.io/badge/us70763@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:us70763@gmail.com)

---

<div align="center">

### ✨ Thanks for reviewing! If you're a recruiter, let's connect — or drop a star if you like the craftsmanship.

[Back to Top ↑](#-rock-paper-scissors)

</div>
