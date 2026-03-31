# Contributing to Teafindss

We appreciate your interest in contributing to the Teafindss Coffee Cafe project! Here are some guidelines to help you get started.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/yourusername/Coffee-cafe.git
   cd Coffee-cafe
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```

## Development Workflow

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Make your changes** following the project structure and coding standards

3. **Check code quality**:
   ```bash
   npm run lint
   npm run format
   npm run type-check
   ```

4. **Commit with meaningful messages**:
   ```bash
   git commit -m "feat: add new feature" 
   git commit -m "fix: resolve issue"
   ```

## Code Standards

- **TypeScript**: Use strict mode — ensure all types are properly annotated
- **ESLint**: Follow the project's ESLint rules (run `npm run lint`)
- **Prettier**: Format code with Prettier (run `npm run format`)
- **Components**: Keep components focused and reusable
- **CSS**: Follow the existing design system tokens and naming conventions

## Commit Message Convention

Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `refactor:` for code refactoring
- `docs:` for documentation
- `style:` for formatting/styling
- `test:` for test additions

Example:
```bash
git commit -m "feat: add dark mode toggle to navbar"
```

## Pull Request Process

1. **Push to your fork**: `git push origin feature/your-feature-name`
2. **Create a Pull Request** with a clear title and description
3. **Reference related issues**: Link to any issue the PR resolves
4. **Keep PRs focused**: One feature or fix per PR
5. **Await review**: Our team will review and provide feedback

## Project Structure

```
src/
├── components/    # Reusable components (Navbar, Footer, etc.)
├── pages/         # Page-level components (Home, Menu, etc.)
├── App.tsx        # Main router and app layout
├── main.tsx       # Entry point
└── index.css      # Global styles & design system
```

## Design System

The project uses a coffee-themed design system:
- **Colors**: Espresso, Gold, Cream, Ivory (see `index.css`)
- **Typography**: Playfair Display (serif), Inter (sans-serif), Cormorant Garamond (display)
- **Spacing**: Consistent margin/padding scale
- **Animations**: Framer Motion, scroll-triggered reveals

## Reporting Issues

Found a bug? Please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (browser, OS, etc.)

## Questions?

Feel free to:
1. Check existing issues/discussions
2. Create a new discussion for questions
3. Reach out to hello@teafindss.com

---

Thank you for contributing to Teafindss! ☕
