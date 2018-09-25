# Installation
```bash
npm install snaptest -g
```

# Usage
## CLI
```bash
snaptest
```

This command will run through the `snaptest.config` file in the current directory. If it is not found, a generic one will be made.

```bash
snaptest-rails
```

This command is the same as `snaptest`, but it will go talk to your Rails application to mine your "named routes" and add them to the `Snaptest.path` array as long as the directory you run this from is a Rails application.

## snaptest.config
This file determines how `snaptest` will run - everything from mananging states or to the width at which you'd like to snap screenshots. Here's a sample `snaptest.config` file below:

```javascript
{
  "host": "www.yoursitehere.com", // string. required. snaptest will run all paths against this host.
  "width": 1024, // integer. default is 1024 if not set. snaptest will hit each path with this width.
  "height": 768, // integer. default is 768 if not set. snaptest will hit each path with this height.
  "ignore": [ "some_path", ... ], // array[string]. contains a list of path names to not visit.
  "paths": {
    "some_path": { // string. name of the path.
      "path": "/path", // string. path to visit. will be added to host. can be a fully-qualified URL.
      "params": { "key": "value", ... }, // Object. will populate $key$ with value in path.
      "cases": [ // array[Object]. contains a list of case configurations. will screenshot after every case.
        {
          "name": "Case Name", // string. a name for the case.
          "actions": [ // array[Object]. will perform each nightmare action after visiting the path.
            { "nightmareAction": [ "nightmareArg1", "nightmareArg2", ... ] },
            ...
          ],
          "params": { "key": "value", ... }, // Object. will populate $key$ with value in path.
          "only": [ "Another State", ... ], // array[string]. will only perform the case for the states listed.
          "except": [ "A State", ... ] // array[string]. will only perform the case for states not listed.
        }
      ]
    }
  },
  "states": { // Object. each attribute represents the name of a state. will visit each path once in each state.
    "A State": {
      "width": 1024, // integer. sets the width of the viewport for a state.
      "height": 768, // integer. sets the height of the viewport for a state.
      "partial": true // boolean. if set to true, it will not visit any paths.
    },
    "Another State": {
      "before" : [ // array[Object]. will perform each nightmare action before visiting the path.
        { "nightmareAction": [ "nightmareArg1", "nightmareArg2", ... ] },
        ...
      ]
      "ignore": [ "some_path", ... ], // array[string]. paths the state will not visit.
      "inherits": [ "A State", ... ] // array[string]. gains attributes of listed states.
    },
  }
}

```

### [Nightmare](https://github.com/segmentio/nightmare) actions
Wherever you see "nightmareAction" in `snaptest.config` you may use any of the actions listed at https://github.com/segmentio/nightmare#interact. For actions requiring no arguments, pass an empty array.

# Versions
```
0.0.6 - Actually fixed the bug that 0.0.5 should have fixed!
0.0.5 - Fixed state inheritance issue.
0.0.4 - Fixed a bug with new height option.
0.0.3 - Added support for a new height config option.
0.0.2 - Fixed a bug when no states exist in snaptest.config.
0.0.1 - Initial release.
```
