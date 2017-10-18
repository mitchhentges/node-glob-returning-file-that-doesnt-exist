# Instructions to reproduce glob error

1. `npm install` to install `glob`
2. `npm start` will test the glob `'node_modules/**/node_modules/**/node_modules/**/node_modules'` in the `fail-case` directory
3. Should print `[]`, but instead returns path to nonexistant folder (`node_modules/@namespace/src-package-a/node_modules/lib-b/node_modules/lib-c/bin/file.js/node_modules`) which it shouldn't.

Directory structure of failure-case is:
```
$ tree -a
.
├── index.js
└── node_modules
    └── @namespace
        └── src-package-a
            └── node_modules
                └── lib-b
                    └── node_modules
                        └── lib-c
                            └── bin
                                └── file.js

8 directories, 2 files
```
