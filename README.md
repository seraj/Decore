# Decore

The perfect boilerplate to help you to create your own React UI Kit.

## Features

- [Typescript](https://www.typescriptlang.org)
- Components generators
- Development Environment: [Storybook](https://storybook.js.org/)
- Styles: [Styled Components](https://www.styled-components.com/) with theming configuration
- Lint: [TSLint](https://palantir.github.io/tslint/)
- Tests: [Jest](https://jestjs.io/)

## Quick start

Make sure that you have Node v8 or above installed.

1. Clone this repo using `git clone git@github.com:logickit-io/Decore`
2. Move to the appropriate directory: `cd Decore`.
3. Run `npm ci` in order to install dependencies.
4. At this point you can run `npm run storybook` to see the example Storybook at [http://localhost:4008](http://localhost:4008).

## Creating new components

To add a new component, just run `npm run generate`. This command will generate all the component (Stateless or not) files for you.

## Testing

To test your components run `npm test`.
By default we run tests and lint before any push.

## Deploying storybook

To deploy storybook to Github Pages run `npm run deploy-storybook`.
