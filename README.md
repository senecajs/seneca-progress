# @seneca/progress

> _Seneca Progress_ is a plugin for [Seneca](http://senecajs.org)

    Workflow progress record plugin for the Seneca platform.

[![npm version](https://img.shields.io/npm/v/@seneca/progress.svg)](https://npmjs.com/package/@seneca/progress)
[![build](https://github.com/senecajs/seneca-progress/actions/workflows/build.yml/badge.svg)](https://github.com/senecajs/seneca-progress/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/senecajs/seneca-progress/badge.svg?branch=main)](https://coveralls.io/github/senecajs/seneca-progress?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/senecajs/seneca-progress/badge.svg)](https://snyk.io/test/github/senecajs/seneca-progress)
[![DeepScan grade](https://deepscan.io/api/teams/5016/projects/20872/branches/581541/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5016&pid=20872&bid=581541)
[![Maintainability](https://api.codeclimate.com/v1/badges/8242b80adb8acb685afd/maintainability)](https://codeclimate.com/github/senecajs/seneca-progress/maintainability)

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------- |

## Install

```sh
$ npm install seneca@^4 @seneca/entity @seneca/progress
```

Requires Node.js `>=24`, Seneca `^4.0.0` and `@seneca/entity` `^29.0.0`:
progress records are saved as `sys/progress` and `sys/progressentry` entities.

## Quick Example

```js
const seneca = Seneca().use('@seneca/entity').use('@seneca/progress', {})

const created = await seneca.post('sys:progress,create:progress', {
  kind: 'upload',
})

await seneca.post('sys:progress,update:progress', {
  id: created.item.id,
  how: 'step',
})
```

<!--START:options-->


## Options

* `debug` : boolean <i><small>false</small></i>
* `step` : number <i><small>10</small></i>
* `start` : number <i><small>0</small></i>
* `end` : number <i><small>100</small></i>


<!--END:options-->

<!--START:action-list-->


## Action Patterns

* [sys:progress,create:progress](#-sysprogresscreateprogress-)
* [sys:progress,get:progress](#-sysprogressgetprogress-)
* [sys:progress,list:progress](#-sysprogresslistprogress-)
* [sys:progress,update:progress](#-sysprogressupdateprogress-)


<!--END:action-list-->

<!--START:action-desc-->


## Action Descriptions

### &laquo; `sys:progress,create:progress` &raquo;

No description provided.



#### Parameters


* __kind__ : _string_
* __step__ : _number_ (optional, default: `0`)
* __start__ : _number_ (optional, default: `0`)
* __end__ : _number_ (optional, default: `0`)
* __code__ : _string_ (optional, default: ``)
* __owner__ : _string_ (optional, default: ``)
* __ref__ : _string_ (optional, default: ``)
* __user_id__ : _string_ (optional, default: ``)
* __custom__ : _object_ (optional, default: `{}`)
* __note__ : _string_ (optional, default: ``)
* __expire__ : _number_ (optional, default: `0`)


----------
### &laquo; `sys:progress,get:progress` &raquo;

No description provided.



#### Parameters


* __id__ : _string_
* __full__ : _boolean_ (optional, default: `false`)


----------
### &laquo; `sys:progress,list:progress` &raquo;

No description provided.



#### Parameters


* __q__ : _object_ (optional, default: `{}`)


----------
### &laquo; `sys:progress,update:progress` &raquo;

No description provided.



#### Parameters


* __id__ : _string_
* __how__ : _any_ (optional, default: `undefined`)
* __val__ : _number_ (optional, default: `0`)
* __status__ : _string_ (optional, default: ``)
* __code__ : _string_ (optional, default: ``)
* __custom__ : _object_ (optional, default: `{}`)
* __note__ : _string_ (optional, default: ``)


----------


<!--END:action-desc-->

## More Examples

## Motivation

## Support

## API

## Contributing

## Background
