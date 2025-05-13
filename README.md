# React Calculator – Enhanced Version with New Features

## 🔢 Original Project Functionality

The original calculator app is a basic, interactive calculator that allows users to perform standard arithmetic operations. It includes:

- Basic operations: Addition, Subtraction, Multiplication, Division  
- A clear (AC) button for resetting the input  
- An equal (=) button to compute results  
- Buttons for numeric input (0-9), decimal point, and arithmetic operators  

---

## 🚀 Added Features

In this enhanced version, we implemented the following features:

### 1. 🌙 Dark/Light Mode Toggle

- **User Story**: As a user, I want to toggle between dark and light mode so I can use the calculator comfortably in different lighting environments.
- **Description**: A toggle button allows switching between dark and light themes. Text and background colors adapt accordingly.
- **Technical Requirements**:
  - Added a `darkMode` state in `App.js`
  - Created CSS classes for both themes in `App.css`
  - Toggle button added in the top-right corner
- **Files Modified**: `App.js`, `App.css`
- **Challenges**: Ensuring smooth visual transitions without breaking layout or readability

---

### 2. ⌫ Backspace Button

- **User Story**: As a user, I want to remove the last entered character in case of mistakes.
- **Description**: A backspace button (`←`) deletes the last character from the input without affecting ongoing calculations.
- **Technical Requirements**:
  - Added a new button labeled `←`
  - Implemented logic to trim the last character from the `next` state
- **Files Modified**: `ButtonPanel.js`, `Button.js`, `App.js`, `App.css`
- **Challenges**: Ensuring no disruption to calculations while modifying input state

---

### 3. 🧾 History Feature

- **User Story**: As a user, I want to view my previous calculations and restore them if needed.
- **Description**: Displays the last 5 calculations. Clicking an entry restores the result.
- **Technical Requirements**:
  - Introduced a `history` state in `App.js`
  - Rendered a clickable list of results
  - Limited display to the most recent 5 entries
- **Files Modified**: `App.js`, `ButtonPanel.js`, `Button.js`, `App.css`
- **Challenges**: Managing the list size dynamically and ensuring restored values don’t overwrite active calculations

---

## ⚙️ Implementation Process

### 1. Dark Mode
- Added `darkMode` state
- Used conditional rendering for dark/light classes
- Customized styles via `App.css`

### 2. Backspace Button
- Added a `←` button to the panel
- Created handler to remove the last character of the `next` state
- Ensured clear separation between visual input and logic states

### 3. History Feature
- Created `history` array state
- Rendered it below the calculator
- Made list items clickable and limited to 5 entries

---

## 💡 Challenges Faced & Solutions

### Dark Mode
- **Challenge**: Achieving clear visibility while maintaining aesthetic consistency  
- **Solution**: Used contrast-optimized colors and smooth transitions for better UX

### Backspace Button
- **Challenge**: Avoid interfering with the main calculation logic  
- **Solution**: Scoped the trimming function to `next` only

### History Feature
- **Challenge**: Prevent state overflow and poor layout  
- **Solution**: Kept a 5-entry limit and designed responsive layout for interaction

---

## 🤖 Aider Prompt Strategy & Commands

We used **prompt engineering** with Aider to clearly define intent and scope per feature. Commands included:

- `"Help me implement a dark mode toggle that changes the background color of the app. Also, the text and button colors should adjust based on the mode."`
- `"Add a backspace button that deletes the last character in the displayed value without affecting the calculation results."`
- `"Create a history feature that stores and displays the last 5 calculations. The user should be able to click on a history item to restore the result."`

> **Prompt Strategy**:  
> We made sure to specify:
> - Exact UI behavior (e.g., toggle position, limit of entries)
> - Logic constraints (e.g., don’t affect ongoing calculations)
> - Styling requirements (e.g., button contrast in dark mode)

These guided Aider to generate accurate, modular updates while keeping existing code intact.

---

## 🧠 Reflection

### Most Effective Aider Techniques
- Helped generate well-scoped, component-specific code
- Ideal for small refactors and UI-related logic

### Limitations Encountered
- Not always aware of surrounding component context
- Sometimes needed manual tweaks to integrate fully

### Comparison to Traditional Workflow
- Aider saved hours compared to coding from scratch or looking up solutions
- Still required hands-on debugging to test edge cases

### Suggestions for Aider Improvement
- Deeper context awareness of the full app
- More detailed explanations when suggesting component updates or state changes

---

## 📂 Project Structure

- `App.js`: Main logic, states, rendering, and theme toggle
- `ButtonPanel.js`: Grid of buttons including `←`
- `Button.js`: Each individual button
- `App.css`: Theme styles and transitions

---


