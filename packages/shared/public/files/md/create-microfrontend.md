## Create Microfrontend

> This walkthrough guides the process of adding a new microfrontend called **xyz** to an organisation **abc**'s Higher Order Framework

- #### Close down development environent

  If you are running the development environment, close it all down before proceeding

- #### Change to repo root directory

  eg; `cd ~/hof` If you want, you can use bash alias's to setup a single key shortcut to like this

  ```bash
  sudo nano ~/.zshrc
  alias hof="clear && cd ~/WORKING/hof"
  ```

- #### Create new Single SPA microfrontend

  Create a new microfrontend using the single-spa CLI. Don't just copy & paste another package, use one of the following commands `npm run single-spa` or `npx create-single-spa`

  **Choose your own settings**

  - Directory for new project `./packages/xyz`
  - So that lerna can manage the repo\_
  - Type to generate; `single-spa application / parcel`
  - Choose your framework, package manager, and Typescript preferences
  - Organization name; `abc`
  - Project name; `xyz`

- #### Init the new repository

  `cd ./packages/xyz && git add . && git commit -m 'init xyz repo'`

  Create and push to a remote repo at this point

- #### Update package.json

  **/hof/packages/xyz/package.json**

  ```javascript
    "version": "0.1.0",
  	"scripts": {
      "start": "webpack serve --port 1234 --env isLocal",
       ...
  ```

- #### Update Bash Scripts (optional)
  If you are using the npm scripts to help your development, make sure to add the new microsite to the dist and ssr scripts in `.scripts/`
- #### Update webpack.config.js

  **/hof/packages/xyz/webpack.config.js**

  We need to tweak the webpack to use System JS and externalise the shared libraries

  ```javascript
  // change from
    return merge(defaultConfig, {
      // modify the webpack config however you'd like to by adding to this object
    });
  // to
    return merge(defaultConfig, {
      output: {
        library: {
          type: "system",
        },
      },
      externals: [
        "single-spa",
        "react",
        "react-draggable",
        ...etc
  ```

- #### Update root-config layout

  Now we add the new microfrontend to the higher order framework in the. We simply need to add it as an application in the layout file and single-spa takes care of the rest

  **/hof/packages/root-config/src/layout.html**

  ````html
  <div id="flashStage">
    <application name="@abc/shared"></application>...
    <application name="@abc/xyz"></application>
  </div>
  ```
  ````

- #### Update import map

  **/hof/packages/firebase/src/ssr/render.ts**

  ```javascript
  <script type="systemjs-importmap">
    {
    "imports": {
      "@abc/xyz": "http://localhost:1234/abc-xyz.js",
  ```
