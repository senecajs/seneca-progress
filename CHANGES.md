# Changes

## 0.1.0 2026-11-21

First entry of this change log. Earlier versions are on npm and in the git
history.

* Seneca 4: the peer dependency is `seneca` `^4.0.0` (0.0.6 had `>=3`).
  Seneca 3 users stay on `@seneca/progress@0.0.6`.
* The entity peer dependency is `@seneca/entity` `^29.0.0` (was
  `seneca-entity`). The old peer made npm install `seneca-entity` 28, which
  stops a Seneca 4 process at startup with `plugin_gubu_shape`. Load the
  entity plugin by its full name: `seneca.use('@seneca/entity')`.
* The `seneca-promisify`, `gubu` and `@seneca/entity-util` peer dependencies
  are removed: Seneca 4 has promises built in (do not call `use('promisify')`,
  D4), and the plugin uses neither Gubu nor `@seneca/entity-util`.
* Node.js 24 or later (`engines.node` `>=24`; 0.0.6 declared none).
* The plugin documentation module names an empty `messages` object, as
  `@seneca/doc` 9 requires, and the README is regenerated with it.
* Tests run on Seneca 4 with `@seneca/entity` 29 and `@seneca/entity-util` 4,
  load them by their full names (B14) and no longer use `promisify`.
  devDependencies: `seneca` `^4.0.0`, `@seneca/entity` `^29.0.0`,
  `@seneca/entity-util` `^4.0.0`, `seneca-msg-test` `^5.0.0` and `@seneca/doc`
  `^9.0.0` (was `seneca-doc`); the unused `@seneca/maintain` is removed.
* The committed `dist-test/` is the plain TypeScript output, and Prettier
  leaves it alone, so `npm run build` changes no tracked file.
* `repository.url` uses `git+https`, `publishConfig` sets public access, and
  the package includes `CHANGES.md`.
