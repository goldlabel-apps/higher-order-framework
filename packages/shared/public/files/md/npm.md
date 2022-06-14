## How to Create and Publish your own NPM Package

Create an account in the NPM registry, write some code for your package and publish

https://javascript.plainenglish.io/how-to-create-and-publish-your-own-npm-package-ce065fcd31db

Have you ever wondered where those **npm** packages you install come from Well, wonder no longer, they come from developers like you!

# What We Will Do

In this tutorial, we will create and publish to the NPM registry, an NPM package using the following steps.

-   Create an NPM [registry account](https://www.npmjs.com/).
-   Write some code that will become your NPM package.
-   Test this locally.
-   Add **module.exports** to export what will be made available in your package to those who install it.
-   Publish your package to the NPM registry.
-   Test your NPM package by using npm install.

_Our focus will be on the process and not the package per se. So we will keep our package simple._

**We will be creating a package that strips duplicates from an array.**

Once published, if a user installs our package, using npm install, they can easily strip duplicates from an array.

**Important Suggestion:** The package name in the NPM registry must be unique. Therefore you will probably have to change the name of your package. You will be reminded to do this at the appropriate time in the tutorial.

Or you can just follow the steps and create your own package that does something other than remove duplicates from an array.

# What You Will Need

-   [Nodejs ](https://nodejs.org/en/download/)installed
-   NPM command line tool. This is installed when you install Nodejs.
-   I suggest that you have git installed and and upload this to a remote repository as well. _I will not be adding these steps in this tutorial._

I will be using Visual Studio Code (VSCode.) You can be obtained it [here](https://code.visualstudio.com/).

# Setting Up an Account in the NPM Registry

To set up an account, click [here](https://www.npmjs.com/).

1. Click the **Sign Up** button.

![img](https://miro.medium.com/max/475/1*FCLPFEs0LCK7K4vvfOwT7Q.jpeg)

https://npmjs.org

\2. Enter a Username, your email address and password. **\*The Username must be unique.\***

_Be sure to keep track of your credentials, you will need them to publish. You will also receive an email to confirm your account._

![img](https://miro.medium.com/max/559/1*OwjnwUm9-hdRNB-gRs39fA.jpeg)

Sign up form

# Writing Your Code

1. Create a folder called **remove-array-duplicates**.
2. Open VSCode and Open that the folder, remove-array-duplicates.
3. Open a new Terminal window.
4. Now initialize your **package.json** with the defaults.

```
npm init -y
```

_You can change the defaults in the package.json later._

\5. Open the package.json file.

```
{
  "name": "remove-array-duplicates",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

> _Package.json is the_ **\*most important\*** _file as far as creating and publishing an NPM package is concerned. Without it, you won’t be able to publish._

The file named in the **main** key, index.js in this case, will be the entry point in to your package after a user installs it. It will be what you export from this file that will give the user functionality once they have installed the package.

**Critical Note**: Package names must be unique in the NPM registry. Therefore, if the **value** for the **name** key (**remove-array-duplicates** in our case) already exists in the NPM registry, your publish will fail.

**You can search the NPM registry** for the name by [logging in here ](https://www.npmjs.com/package/signin)and search for the name. If the package exists, change the **name** field in your package.json to be unique. _You will most likely need to do this._

![img](https://miro.medium.com/max/700/1*qKTu4U4t1vyYraU95ri7Uw.jpeg)

Search the NPM registry for the name of your package

\6. Create a new file named **index.js.**

\7. Enter the following code in index.js.

```
let uniqueArr = []function removeArrayDuplicates(arr){
// Accepts an array from which the duplicates
// will be removedif (!Array.isArray(arr)){

    arr = []
}let theSet = new Set(arr)let uniqueArr = [...theSet]return uniqueArr}
```

# Testing Your Code Locally

1. Add the code that you see in bold below to test locally.

```
let uniqueArr = []function removeArrayDuplicates(arr){
// Accepts an array from which the duplicates
// will be removedif (!Array.isArray(arr)){

    arr = []
}let theSet = new Set(arr)let uniqueArr = [...theSet]return uniqueArr}// Testing Only
let myNums = [1,2,3,1,4,1,2,5,3,4]
let uniqueNums = removeArrayDuplicates(myNums)console.log(uniqueNums)
```

\2. In the Terminal window type,

```
node index
```

\3. Your output should be similar to this.

![img](https://miro.medium.com/max/487/1*2a8RVGQ1pHxM3SwckF-wPQ.jpeg)

Output of your future package

# Publishing Your Package

1. Replace the testing code with a **module.exports** statement.

Whatever you export is what will be made available for importing when others install the package.

```
let uniqueArr = []function removeArrayDuplicates(arr){
// Accepts an array from which the duplicates
// will be removedif (!Array.isArray(arr)){

    arr = []
}let theSet = new Set(arr)let uniqueArr = [...theSet]return uniqueArr}module.exports = removeArrayDuplicates
```

\2. Next let’s check your package.json.

Remember the name **must be unique** in the NPM registry. Change it if necessary. You can check that [here](https://www.npmjs.com/package/signin).

You will see I have changed the name in my package.json, added keywords and author information.

```
{
  "name": "rem-arr-dups",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["remove","array","duplicates"],
  "author": "gravity-well <bobtomlin@gmail.com>",
  "license": "ISC"
}
```

\3. Login to the NPM registry.

```
npm login
```

You will be prompted for your **Username, Password and Email.**

\4. Now we can publish it. In the Terminal type,

```
npm publish
```

You should see notices like this in the Terminal as well as get a confirmation email as to success or not.

```
npm notice
npm notice package: rem-arr-dups@1.0.0
npm notice === Tarball Contents ===
npm notice 304B index.js
npm notice 289B package.json
npm notice === Tarball Details ===
npm notice name:          rem-arr-dups
npm notice version:       1.0.0
npm notice package size:  484 B
npm notice unpacked size: 593 B
npm notice shasum:        77f1d53e8cb9f07318874706329c9e1c375f40fc
npm notice integrity:     sha512-VdzLzFcZVBgk+[...]rN7L2nfpRxr/w==
npm notice total files:   2
npm notice
+ rem-arr-dups@1.0.0
```

# Testing The Package (npm install)

1. Create a new folder in which to test.
2. Open a new instance of VSCode (you cannot install the package in the same place where you created the package.)
3. Open a Terminal window and install the package (use the name used in your package.json when published.)

```
npm install the-name-you-gave-your-package
```

A **node_modules** folder has been added to your project.

\4. Create a new file called **test.js** and enter the following code.

```
// For the require statement, use the name you gave your published package
const removeArrayDuplicates = require('rem-arr-dups')
let myNums = [1,2,3,1,4,1,2,5,3,4]
let uniqueNums = removeArrayDuplicates(myNums)
console.log(uniqueNums)
```

\5. Run the file in the Terminal with.

```
node test
```

## Viola!

As is typical we must **require** the package. If you have written, for example, a React component or other ES6 piece of code, you would use the **import** statement instead of require.

After importing the package, we can use whatever was exported. In this case the **removeArrayDuplicates**() function.

# Making Changes

If you need to make changes,

-   Make the changes.
-   Open the package.json and change the version number.
-   Login to the NPM registry and run npm publish again.

If you do not change the version number, the Publish will fail.

# Conclusion

Here we have created a simple NPM package. Anyone can install it and use it.

Once you have published the package, you can refactor the code or add functionality. If you do this, change the version number in the package.json before Publishing.

It is also suggested that you add a README.MD, a markdown file, that gives a description and some examples of how to use your package.

Here is what mine looks like in the NPM registry. I have added a README.MD.

![img](https://miro.medium.com/max/700/1*q9FRzVwEljHaCTUR9xWS8Q.jpeg)

My rem-arr-dups NPM package

**Thank you for reading and coding along!**

[![](https://data.jsdelivr.com/v1/package/npm/@reduxjs/toolkit/badge)](https://www.jsdelivr.com/package/npm/@reduxjs/toolkit)

[All your base are belong to us](https://en.wikipedia.org/wiki/All_your_base_are_belong_to_us) is a popular Internet meme based on a badly translated phrase from the opening cutscene of the video game Zero Wing. The phrase first appeared on the European release of the 1991 Sega Mega Drive port of the 1989 Japanese arcade game.

By the early 2000s, a GIF animation depicting the opening text was widespread on the Something Awful message forums and other internet forums. The phrase found popular reference outside internet forums through the 2000s and 2010s, including use by Newgrounds in 2001
