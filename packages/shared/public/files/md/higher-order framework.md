## Higher Order Framework

#### Storybook

```
npx lerna run storybook --scope=@listingslab/storybook
```

The project is organised into an HOF which follows the same pattern as lerna monorepo. Basically lerna packages. This aims to allow me to use the project as a kind of sandbox to develop features and ideas and make it easy to move these packages around as needed. It's not unlike the idea behind storybook but at an application level rather than component

## Micro Frontends

What if we could organise front end clients in such a way as to deploy a kind of ‘main’ app containing features needed site wide. Think Routing, Redux, certain elements such as header/footer. Now think of our features as separate mods which can be loaded into the main app when needed with both apps happily communicating between themselves.

That’d be good, right? Turns our there’s nothing new under the sun & Micro Frontends - a microservice style approach to front-end web development has been around for a little while and is used by companies like Spotify It’s true that the problems are many & the solutions non-trivial, but I definitely think it’s a concept worth discussing and maybe trying out?
One cool thing is that all the work done moving to monorepo is a massive step toward doing this kind of thing anyway.

Implementing a Micro Frontends approach might as simple as extending that concept using a tried and tested pattern

Resources

-   [micro-frontends.org](https://micro-frontends.org) Understand more about the concept
-   [single-spa.js.org](https://single-spa.js.org/docs/getting-started-overview) Promising existing framework

What if we could organise front end clients in such a way as to deploy a kind of ‘main’ app containing features needed site wide. Routing, Redux, UI components. Now think of features as separate modules which can be loaded into a main app when needed with both apps happily communicating between themselves. With shared dependencies of course. That’d be good, right? Turns our there’s nothing new under the sun & Micro Frontends - a microservice style approach to front-end web development has been around for a little while and is used by companies like Spotify

How to use the themes

Higher Order Framework

What if we could organise front end clients in such a way as to deploy a kind of ‘main’ app containing features needed site wide. Routing, Redux, UI components.

Now think of features as separate modules which can be loaded into a main app when needed with both apps happily communicating between themselves. With shared dependencies of course

That’d be good, right? Turns our there’s nothing new under the sun & Micro Frontends - a microservice style approach to front-end web development has been around for a little while and is used by companies like Spotify

-   [/packages](./packages/)

#### Lerna

-   [Lerna](https://github.com/lerna/lerna) is a tool that optimizes the workflow around managing multi-package repositories with git and npm

#### Single SPA

[single-spa.js](https://single-spa.js.org) is an Open Source framework for bringing together multiple JavaScript microfrontends in a frontend application. Architecting your frontend using single-spa enables many benefits, such as:

-   Use multiple frameworks on the same page without page refreshing (React, AngularJS, Angular, Ember, or whatever you're using)
-   Deploy your microfrontends independently
-   Write code using a new framework, without rewriting your existing app
-   Lazy load code for improved initial load time

single-spa takes inspiration from modern framework component lifecycles by abstracting lifecycles for entire applications. Born out of Canopy's desire to use React + react-router instead of being forever stuck with our AngularJS + ui-router application, single-spa is now a mature library that enables frontend microservices architecture aka "microfrontends". Microfrontends enable many benefits such as independent deployments, migration and experimentation, and resilient applications. single-spa apps consist of the following

1. A single-spa root config, which renders the HTML page and the JavaScript that registers applications. Each application is registered with three things:

-   A name
-   A function to load the application's code
-   A function that determines when the application is active/inactive

2. Applications which can be thought of as single-page applications packaged up into modules. Each application must know how to bootstrap, mount, and unmount itself from the DOM. The main difference between a traditional SPA and single-spa applications is that they must be able to coexist with other applications as they do not each have their own HTML page.

For example, your React or Angular SPAs are applications. When active, they can listen to url routing events and put content on the DOM. When inactive, they do not listen to url routing events and are totally removed from the DOM.

#### Recommended single-spa Setup

The single-spa core team has put together documentation, tools, and videos showing the currently encouraged best practices with single-spa. Check out [these docs](https://single-spa.js.org/docs/recommended-setup/) for more information.

#### Resources

-   https://micro-frontends.org Understand more about the concept
-   [single-spa.js.org](https://single-spa.js.org)
-   https://single-spa.js.org/docs/getting-started-overview

#### CLI tools

```bash
npx create-single-spa
npx create-react-app ./packages/microfrontend --template redux-typescript
```

> _Isn't single-spa sort of a redundant name?_
> Yep.

#### Keywords

single-spa, microfrontend, open source, react
