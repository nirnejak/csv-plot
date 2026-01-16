# Agent Guidelines for csv-plot

This file contains essential information for agentic coding assistants working on the csv-plot codebase. Follow these guidelines to maintain code quality and consistency.

## Project Overview

csv-plot is a React TypeScript application for uploading and visualizing CSV data using various chart types. Built with Vite, it uses Radix UI components, Tailwind CSS for styling, and Nivo charts for data visualization.

## Build, Lint, and Test Commands

### Development

- `npm run dev` - Start development server with Vite
- `npm run preview` - Preview production build locally

### Build & Quality

- `npm run build` - Type-check and build for production (`tsc && vite build`)
- `npm run type-check` - Run TypeScript compiler in check mode (`tsc --pretty --noEmit`)
- `npm run lint` - Run ESLint on all files
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check if files are formatted correctly

### Testing

**Note**: This project currently has no test framework configured. When adding tests in the future:

- No test runner is currently set up
- Consider adding Vitest (recommended for Vite projects) or Jest
- Test files should be colocated with components (e.g., `Component.test.tsx`)
- Run single test: `npm run test -- Component.test.tsx` (once test framework is added)

## Code Style Guidelines

### Language & Framework

- **TypeScript**: Strict mode enabled with comprehensive type checking
- **React**: Version 19 with new JSX transform (no need for React imports in JSX files)
- **Module System**: ES modules with `"type": "module"` in package.json

### File Structure & Naming

```
src/
├── components/          # Reusable UI components
│   ├── atoms/          # Basic UI elements (Select, Slider, etc.)
│   └── molecules/      # Complex components (charts, etc.)
├── pages/              # Route components
├── context/            # React context providers
├── utils/              # Utility functions
├── @types/             # TypeScript type definitions
└── main.tsx            # Application entry point
```

**Naming Conventions:**

- **Components**: PascalCase (`BarChart.tsx`, `Select.tsx`)
- **Utilities**: camelCase (`classNames.ts`, `arrayToKeyValuePairs.ts`)
- **Types/Interfaces**: PascalCase with descriptive names (`TraceType`, `TraceContextType`)
- **Props**: PascalCase interface named `Props` or `ComponentNameProps`
- **Constants**: SCREAMING_SNAKE_CASE
- **Functions**: camelCase

### Imports & Dependencies

**Import Order:**

1. React imports: `import * as React from "react"`
2. External libraries (alphabetical)
3. Internal imports (alphabetical, with path aliases)

**Path Aliases:**

- `@/*` → `src/` (configured in tsconfig.json and vite.config.ts)
- `@ui/*` → `src/ui/` (placeholder for future UI library)

**Examples:**

```typescript
import * as React from "react"
import { ResponsiveBar } from "@nivo/bar"
import { Label } from "@radix-ui/react-label"

import { classNames } from "@/utils/classNames"
import Select from "@/components/atoms/Select"
```

### TypeScript Guidelines

**Strict Type Checking:**

- All TypeScript strict options enabled
- Avoid `any` types; use proper type definitions
- Interface over type aliases for object shapes
- Use union types for variant props

**Type Definition Patterns:**

```typescript
// Interface for component props
interface Props {
  data: any[] // Avoid any when possible
  keys: string[]
  indexBy: string
  margin?: { top: number; bottom: number; left: number; right: number }
}

// Type for context
export interface TraceContextType {
  traces: TraceType[]
  setValues: (values: TraceType[]) => void
}

// Generic types for reusable components
interface SelectOption<T = string> {
  label: string
  value: T
  disabled?: boolean
}
```

### React Patterns

**Component Structure:**

- Functional components with TypeScript
- Props destructuring in component signature
- Default props using default parameters
- Export default for components

**Hooks Usage:**

- React hooks follow standard patterns
- Custom hooks for shared logic
- Context providers for global state

**Example Component:**

```typescript
interface Props {
  value: string
  onValueChange: (value: string) => void
  placeholder: string
  label?: string
}

const Select: React.FC<Props> = ({
  value,
  onValueChange,
  label,
  placeholder,
}) => (
  // Component implementation
)

export default Select
```

### Styling Guidelines

**Tailwind CSS:**

- Utility-first approach with Tailwind CSS v4
- Custom color scheme using neutral colors
- Responsive design with mobile-first approach
- Consistent spacing using Tailwind's spacing scale

**Class Name Patterns:**

- Use `className` prop for styling
- Conditional classes with `classNames` utility
- Avoid inline styles; use Tailwind classes
- Follow BEM-like naming for custom classes

**Accessibility:**

- Full JSX a11y ESLint rules enabled
- ARIA labels and roles where appropriate
- Semantic HTML elements
- Keyboard navigation support

### Error Handling

**Current Patterns:**

- TypeScript strict mode catches most type errors
- ESLint promise rules enforce proper async handling
- No centralized error handling system yet

**Best Practices:**

- Use try/catch for async operations
- Provide user-friendly error messages
- Log errors appropriately (console.error for development)
- Handle loading states for async operations

### Code Quality Tools

**ESLint Configuration:**

- React recommended rules
- TypeScript recommended rules
- JSX accessibility (jsx-a11y)
- Promise handling rules
- Better Tailwind CSS rules
- Prettier integration

**Prettier Configuration:**

```json
{
  "endOfLine": "auto",
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**EditorConfig:**

- UTF-8 encoding
- 2-space indentation
- LF line endings
- Final newline required

### Git Workflow

**Pre-commit Hooks:**

- Husky with lint-staged
- Runs ESLint on staged `.{js,jsx,ts,tsx}` files
- Prevents commits with linting errors

**Branch Strategy:**

- Main branch: `master`
- Feature branches for development
- Pull requests required

**Commit Messages:**

- Follow conventional commit format when possible
- Clear, descriptive messages
- Reference issues/tickets when applicable

### Development Environment

**Required Tools:**

- Node.js 24.12.0 (managed by Volta)
- npm or bun (bun preferred for faster installs)
- VS Code with recommended extensions

**VS Code Extensions:**

- TypeScript and JavaScript Language Features
- ESLint
- Prettier
- Tailwind CSS IntelliSense

**Environment Setup:**

1. Install dependencies: `bun install`
2. Start development: `bun run dev`
3. Run quality checks: `bun run lint && bun run type-check`

### Performance Considerations

**Bundle Optimization:**

- Vite for fast development and optimized builds
- Tree shaking enabled
- Code splitting for routes (when implemented)

**React Performance:**

- Use React.memo for expensive components
- Optimize re-renders with proper dependency arrays
- Virtualize large lists (when needed)
- Lazy load heavy components

### Security

**Code Security:**

- No secrets in code (use environment variables)
- Sanitize user inputs (especially CSV parsing with papaparse)
- Follow React security best practices
- Regular dependency updates

### Future Enhancements

**Testing Framework:**
When adding tests, consider:

- Vitest for Vite integration
- React Testing Library for component testing
- Test coverage reporting

**Code Organization:**

- Consider adding a `src/ui` directory for shared UI components
- Implement proper error boundaries
- Add loading states and skeletons
- Consider state management (Zustand/Redux) for complex state

---

## Quick Reference

**Format code:** `npm run format`
**Check types:** `npm run type-check`
**Lint and fix:** `npm run lint:fix`
**Build project:** `npm run build`

**Import React:** `import * as React from "react"`
**Component props:** `interface Props { ... }`
**Path alias:** `import { ... } from "@/*"`

Always run `npm run lint && npm run type-check` before committing changes.</content>
<parameter name="filePath">/Users/nirnejak/Code/jscode/csv-plot/AGENTS.md
