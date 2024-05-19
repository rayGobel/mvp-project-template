# MVP Team's Full-Stack Boilerplate

Welcome to the MVP Team's Full-Stack Boilerplate – a powerful, efficient, and scalable foundation for rapid prototyping and building full-stack applications. This boilerplate combines modern tools and best practices in both frontend (React + Vite) and backend (Express + TypeScript) development, enhancing productivity, code quality, and performance.

## Structure

The boilerplate is organized into two main directories:

- `client/`: Contains the frontend boilerplate based on React and Vite.
- `server/`: Contains the backend boilerplate based on Express and TypeScript.

## Key Features

### Frontend (React + Vite)

- TypeScript for type safety and better developer experience
- React for building user interfaces
- Vite for fast and optimized frontend tooling
- Tailwind CSS for rapid UI development
- Storybook for building and testing UI components in isolation
- TanStack Router for typesafe and modern routing
- TanStack Query for efficient data fetching and state management
- Zustand for simple and scalable state management
- React Hook Form for performant and extensible forms
- Zod for schema validation
- React Testing Library and Vitest for comprehensive testing
- Playwright for reliable end-to-end testing
- Nivo for rich data visualization

### Backend (Express + TypeScript)

- Modular structure organized by feature for easy navigation and scalability
- Faster execution with tsx and tsc for type checking
- Stable Node environment with the latest LTS version
- Simplified environment variables management with Envalid
- Path aliases for cleaner code
- Dependabot integration for secure and up-to-date dependencies
- Helmet for HTTP header security and CORS setup
- Efficient logging with pino-http
- Comprehensive testing with Vitest and Supertest
- Code quality assurance with Husky and lint-staged
- Unified code style with ESLint and Prettier
- API response standardization with ServiceResponse class
- Docker support for easy containerization and deployment
- Input validation with Zod for strongly typed request validation
- Automated OpenAPI specification generation from Zod schemas

Husky, Commitizen, and Commitlint are used for ensuring consistent commit messages

## Package Manager

Both the frontend and backend boilerplates use [pnpm](https://pnpm.io) as the package manager, ensuring fast and efficient dependency management.

## Getting Started

To get started with the boilerplate, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd <project-directory>
   ```

3. Install dependencies for both the client and server:
   ```
   pnpm install
   ```
4. Set up the server environment variables:
   - Navigate to the `server/` directory: `cd server`
   - Create a `.env` file based on the provided `.env.template`: `cp .env.template .env`
   - Update the `.env` file with the necessary environment variables

Happy coding! 🚀
