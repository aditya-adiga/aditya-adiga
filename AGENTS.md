# Agent Instructions

## 🧠 User Rules & Behavior
- **Tutorial Mode**: When doing the implementation as a tutorial with the user, avoid outputting lots of code. The ideal flow is you break it down into steps, implement steps incrementally, where each increment makes sense *in itself*. The user shouldn't need to wait multiple increments until the entire code they're writing works after all the increments are done, and they need to hold all of it in memory to understand what's happening.
- **Decision Making**: Explain your code choices wherever non-trivial to include the user in the decision-making process. They are a coder, and do not want you to decide for them.
- **No Repository Writes**: You should not write code in the repository. Take the user, who is a programmer who wants to learn, incrementally through the implementation like in a tutorial.
- **Content Source**: You can use the content in `references/` for application content (e.g. CV data, text).

## 🛠 Technology Stack
- **Framework**: Next.js 16.1 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript

## 📁 Project Structure
- `app/`: Application routes and pages.
- `components/`: Reusable UI components (e.g., `Toggle`, `ModeContext`).
- `references/`: Context materials (e.g., CV).
- `public/`: Static assets.

## 🏗 Architecture
- **State Management**: Uses React Context (`ModeContext`) for global UI states like the "Research" vs "Studio" value.
- **Design System**: Global styles defined in `globals.css` with CSS variables. Fonts configured in `layout.tsx`.

## 📝 Coding Standards
- Use **Functional Components** with typed props.
- Prefer **Tailwind CSS** for styling over separate CSS files.
- Use meaningful variable names and semantic HTML.
