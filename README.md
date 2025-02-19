# suada-components

`suada-components` is a library of React components designed for rapid development and consistency across SUADA projects. This README outlines key information about the project setup, development practices, and how to contribute effectively.

## Useful Links

- **Release Notes**: Keep up with the latest updates and enhancements.
- **Version Tags**: Track and utilize specific versions of the library.

## IDE Recommendations

To ensure a consistent development environment, we recommend using **Visual Studio Code**. Enhance your coding experience by installing the following VS Code extensions:

- **Code Spell Checker**: Helps catch spelling errors in your code.
- **ESLint**: Integrates ESLint into VS Code, highlighting and fixing code quality and style issues.
- **EditorConfig**: Helps maintain consistent coding styles for multiple developers working on the same project.
- **Prettier**: Automatically formats your code to ensure it adheres to a consistent style.

## Node Version Management

This project uses `asdf` for managing Node versions, ensuring that all contributors use the same version for consistency.

1. Install `asdf` by following the instructions [here](https://asdf-vm.com/guide/getting-started.html).
2. The required Node version is specified in the `.tool-versions` file.
3. After installing `asdf`, install the Node version specified for this project with:
   ```bash
   asdf install nodejs <version>
   ```

## Installing Dependencies

`suada-components` uses `yarn` for dependency management. Install `yarn` globally, then install the project dependencies:

## Available Scripts

Here are some of the scripts available in this project:

| Script                | Description                                     |
| --------------------- | ----------------------------------------------- |
| `npm run storybook`   | Runs the component library in development mode. |
| `npm run build`       | Builds the library for production.              |
| `npm build-storybook` | Builds the Storybook for production.            |

## Committing Guidelines

We use **Commitlint** to ensure our commit messages are consistent and follow conventional commit format. Here's an example of a well-formed commit message:

### Commit Types

- **feat**: Introduces a new feature.
- **fix**: Fixes a bug.
- **chore**: Other changes that don't modify source or test files.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting).
- **docs**: Documentation only changes.
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **perf**: A code change that improves performance.
- **test**: Adding missing tests or correcting existing tests.
- **build**: Changes that affect the build system or external dependencies.
- **ci**: Changes to our CI configuration files and scripts.
- **revert**: Reverts a previous commit.
- **breaking**: Causes a major version increment.

Adhering to these guidelines helps maintain a clean, manageable, and understandable commit history.
