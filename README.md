![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js](http://senecajs.org) plugin

# @seneca/progress

[![npm version](https://img.shields.io/npm/v/@seneca/progress.svg)](https://npmjs.com/package/@seneca/progress)
[![build](https://github.com/senecajs/seneca-progress/actions/workflows/build.yml/badge.svg)](https://github.com/senecajs/seneca-progress/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/senecajs/seneca-progress/badge.svg?branch=main)](https://coveralls.io/github/senecajs/seneca-progress?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/senecajs/seneca-progress/badge.svg)](https://snyk.io/test/github/senecajs/seneca-progress)
[![DeepScan grade](https://deepscan.io/api/teams/5016/projects/20872/branches/581541/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5016&pid=20872&bid=581541)
[![Maintainability](https://api.codeclimate.com/v1/badges/8242b80adb8acb685afd/maintainability)](https://codeclimate.com/github/senecajs/seneca-progress/maintainability)

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|

Workflow progress record plugin for the Seneca platform.

## Install

```sh
$ npm install @seneca/progress
```

## Quick Example

```js
// Setup - get the key value (<SECRET>) separately from a vault or
// environment variable.
Seneca().use('progress', {})

TODO
```

## More Examples

See [test/](test/) for more usage examples.

## Motivation

A [Seneca.js](http://senecajs.org) plugin.

## Support

If you're using this module and need help, you can:

- Post a [github issue](https://github.com/senecajs/seneca-progress/issues)
- Tweet to [@senecajs](http://twitter.com/senecajs)
- Ask on the [Gitter](https://gitter.im/senecajs/seneca)

## API

### Options

_None._

### Action Patterns

* [create:progress,sys:progress](#-createprogresssysprogress-)
* [get:progress,sys:progress](#-getprogresssysprogress-)
* [list:progress,sys:progress](#-listprogresssysprogress-)
* [sys:progress,update:progress](#-sysprogressupdateprogress-)

### Action Descriptions

### &laquo; `create:progress,sys:progress` &raquo;

No description provided.


#### Parameters


* _kind_ : [Function: String]
* _step_ : {
  '

## Contributing

The [Senecajs org](https://github.com/senecajs/) encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

### Running tests

```sh
npm run test
```

## Background

: { 'gubu
