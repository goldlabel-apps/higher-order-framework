# Firebase

> Firebase is a free & useful resource we can use to quickly and securely host HTML, Node and more. Every Google User automatically has an account, so the fact that Advicator use Google means everyone can login their own unique [firebase portal](https://console.firebase.google.com/) and projects can be shared

### Firebase initializeApp

```
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};
const app = initializeApp(firebaseConfig);
```

#### Firestore NoSQL Database

-   [Migrate MongoDB Collections to Cloud Firestore](https://medium.com/@dev.prasenjitsaha/migrate-mongodb-data-to-cloud-firestore-79a68ee18aa3)

Though the MongoDB and Firestore both support NoSQL data, we can’t import MongoDB exported data into Firestore directly but we can import it indirectly by 4 steps only.
Steps to import MongoDB collections into Firestore indirectly —

-   STEP-1: Export MongoDB collections

To Migrate the MongoDB data first we need to export our MongoDB collection data (one by one) into a JSON file as JSON Array by using the below command

```bash
mongoexport --uri=<mongodb-uri> --collection=<collection-name> --out=./<output-directory-name>/<collection-name>.json --jsonArray

clear && mongoexport --uri=mongodb://localhost:27017/ll --collection=Events --out=/Users/milky/Desktop/ll_Mongo/Events.json --jsonArray

```

-   Convert the Exported JSON file.
-   Import the converted JSON file into Firestore.
-   Create a sh file.

#### Credentials

Normally we wouldn't store real credentials in a repo, and if you do that in a public repo, Google will tell you not to. In this case, not only is the repo Bitbucket & private, but also the credentials are kind of public anyway in as much as the actual values are available on the publically available clients if you know where to look, so no worries at this point

```javascript
/* eslint-disable max-len */
export const gserviceaccount = {
  "type": "service_account",
  "project_id": "listingslab",
  "private_key_id": "5515774xxxxxxxxxxx3cc499b943c911e4640fda7c",
  ...
```

## Cloud Project Access

You are welcome to access to the Firebase Console for this project. It gives you an quick interface to the database, deployment, user management etc.

Any Google user account can be added to a Firebase project, so if you have a gmail adress, you can be added and have access to deployment and other features, otherwise you can simply use the default credentials for the `ll-ts` project

> [Firebase Console](https://console.firebase.google.com)

#### Benefits

-   It's free & easy to use; until an app gets real
-   It gives us a single, live sandbox env
-   It doesn't need docker yet :)
-   Using the cloud based NoSQL database means no need a local Mongo
-   Data doesn't have to be synched or seeded

#### Wrappers

Wrappers provide interfaces between react and the SSO Service. If there is any work to be done normalising data or sililar, then it gets done in these wrappers

#### Authentication

Firebase Auth provides backend services, SDKs, and UI libraries to authenticate. It authenticates with passwords, phone numbers & popular federated providers like Google, Facebook and Twitter, MicroSoft etc.

Here we will use the Email Provider and restrict email adresses to the @listingslab.com domain

It gives us the chance to change things up a little. Let's all create logins from our listingslab.com emails. Then we can start tracking ourselves with a view to building a useful tracking feature later

### Firebase getAuth user

Set up a listenter for auth state change

```javascript
const dispatch = useAppDispatch()
const authInitted = useAppSelector(selectAuthInitted)
const auth = getAuth()
onAuthStateChanged(auth, (user) => {
    dispatch(onStateChange(user))
})
```

and then select it like so...

```javascript
import { useAppSelector } from './app/hooks'
import { selectUser } from './features/auth'

const user = useAppSelector(selectUser)
```

#### props

-   [displayName](https://firebase.google.com/docs/reference/js/v8/firebase.User#displayname)
-   [email](https://firebase.google.com/docs/reference/js/v8/firebase.User#email)
-   [emailVerified](https://firebase.google.com/docs/reference/js/v8/firebase.User#emailverified)
-   [isAnonymous](https://firebase.google.com/docs/reference/js/v8/firebase.User#isanonymous)
-   [metadata](https://firebase.google.com/docs/reference/js/v8/firebase.User#metadata)
-   [multiFactor](https://firebase.google.com/docs/reference/js/v8/firebase.User#multifactor)
-   [phoneNumber](https://firebase.google.com/docs/reference/js/v8/firebase.User#phonenumber)
-   [photoURL](https://firebase.google.com/docs/reference/js/v8/firebase.User#photourl)
-   [providerData](https://firebase.google.com/docs/reference/js/v8/firebase.User#providerdata)
-   [providerId](https://firebase.google.com/docs/reference/js/v8/firebase.User#providerid)
-   [refreshToken](https://firebase.google.com/docs/reference/js/v8/firebase.User#refreshtoken)
-   [tenantId](https://firebase.google.com/docs/reference/js/v8/firebase.User#tenantid)
-   [uid](https://firebase.google.com/docs/reference/js/v8/firebase.User#uid)

## env

`.development.env` etc

```bash
# App
REACT_APP_APP=

# Env
REACT_APP_ENV=DEV

# API
REACT_APP_LISTINGSLAB_API=http://localhost:5001/abc/us-central1/api

# Firebase
REACT_APP_FIREBASE_APIKEY=
REACT_APP_FIREBASE_AUTHDOMAIN=
REACT_APP_FIREBASE_DATABASEURL=
REACT_APP_FIREBASE_PROJECTID=
REACT_APP_FIREBASE_STORAGEBUCKET=
REACT_APP_FIREBASE_MESSAGESENDERID=
REACT_APP_FIREBASE_APPID=
REACT_APP_API_IPGEO=
```

### Why is Firebase in this project?

It shouldn't be. Agreed. The firebase element in this project is temporary and as soon as we can remove it the better. For the moment it provides a single, consistant shared environment everyone can use as a sandbox. Features such as the Auth System which is currently using Firebase is designed to be able to be easily swapped out with the unchanged SSO Service

#### Keywords

bitbucket, authentication, SSO, credentials, deployment, docker
