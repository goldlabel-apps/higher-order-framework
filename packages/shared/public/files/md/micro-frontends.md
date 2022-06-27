## Micro Frontends

Shared dependencies are used to improve performance by sharing a module in the browser through import maps declared in the root-config. Adding these at this point is conditionally optional, depending on if the generated application expects any shared dependencies.

For example, if using React the generated Webpack config already expects React and ReactDOM to be shared dependencies, so you must add these to the import map. Vue, Angular, and Svelte don't require shared dependencies at this time.

What if we could organise the front end mediviewer clients in such a way as to deploy a kind of ‘main’ app containing features needed site wide. Think Routing, Redux, certain elements such as header/footer. Now think of our features as separate mods which can be loaded into the main app when needed with both apps happily communicating between themselves.

That’d be good, right? Turns our there’s nothing new under the sun & Micro Frontends - a microservice style approach to front-end web development has been around for a little while and is used by companies like Spotify It’s true that the problems are many & the solutions non-trivial, but I definitely think it’s a concept worth discussing and maybe trying out?
One cool thing is that all the work done moving to monorepo is a massive step toward doing this kind of thing anyway.

Implementing a Micro Frontends approach might as simple as extending that concept using a tried and tested pattern

Resources

-   https://micro-frontends.org Understand more about the concept
-   https://single-spa.js.org/docs/getting-started-overview Promising existing framework
