# js-cli
This package contains executable cli tools to aid in development.

## Installation
Add the cli tools globally instead of at the project level.
```
yarn global add ClearC2/js-cli
```

## create-component.js
An external tool to scaffold a component. Creates the following:
- component directory
- component file
- container file that imports/uses component
- index file that exports container

### Usage

```sh
# in the location you wish to create the component
create-component <component-name>
```
