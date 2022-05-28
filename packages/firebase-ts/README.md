## FIREBASE-TS

> An example of Server Side Rendering using modern TypeScript and Firebase Cloud functions


#### What does --legacy-peer-deps do exactly? 

One way of thinking of this flag is that it isn't doing something new; rather it's telling NPM not to do something new, since NPM v7 now installs peerDependencies by default.

In many cases, this is leading to version conflicts, which will break the installation process.

The --legacy-peer-deps flag was introduced with v7 as a way to bypass peerDependency auto-installation; it tells NPM to ignore peer deps and proceed with the installation anyway. This is how things used to be with NPM v4 thru v6.

```bash
npm i --legacy-peer-deps
```