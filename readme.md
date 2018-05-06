# c2-js-utils
This package contains executable cli tools to aid in development.

## Installation
```
yarn global add ClearC2/c2-js-utils
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
