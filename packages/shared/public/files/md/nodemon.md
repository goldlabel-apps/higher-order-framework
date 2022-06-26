## nodemon.

#### Pronunciation

nodemon, is it pronounced: node-mon, no-demon or node-e-mon (like pokémon)?
Well...I've been asked this many times before. I like that I've been asked this before. There's been bets as to which one it actually is.
The answer is simple, but possibly frustrating. I'm not saying (how I pronounce it). It's up to you to call it as you like. All answers are correct :)

#### config

Here is an example (of a contrived) `nodemon.json` file:

```javascript
{
  "restartable": "rs",
  "ignore": [
    ".git",
    "node_modules/**/node_modules"
  ],
  "verbose": true,
  "execMap": {
    "js": "node --harmony"
  },
  "events": {
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  },
  "watch": [
    "test/fixtures/",
    "test/samples/"
  ],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json"
}
```

Note that the `ignore` used is nodemon's default ignore rule. The complete defaults can be seen here: [defaults.js](https://github.com/remy/nodemon/blob/master/lib/config/defaults.js).
