# handbag-require

## Introduction

Patch to [handbag](https://github.com/darlanalves/handbag) that adds two new methods:

- `require(name)`

Imports a node module and adds it to handbag as a value, using the same module name

- `requireFromManifest(file)`

Imports all node modules declared in a `package.json` files under `dependencies` list

## Usage

```
var handbag = require('handbag-require');

handbag.requireFromManifest('./package.json');
handbag.require('some-module');
```