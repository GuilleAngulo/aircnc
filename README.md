# AirCnC
A company uses the browser client of the app to register spots for rent (for coding, with an specific programming language). Then a user, using the mobile version of the app, can make a booking indicating the day. After that, the booking request will be shown for the company who can accept or reject the proposal. (Course produced by @RockeatSeat and teached by @diego3g).
The project is divided in three modules:

### Backend
Developed in NodeJS, is an API Rest that attend requests from the web version of the frontend as well as from the mobile version.

### Frontend
Developed in ReactJS, this browser client is basically an admin panel for a company to register new Spots (adding photos, programming languages and daily cost). After a user makes a booking request, a message is displayed to the company for accept or reject the book proposal (In real time, with socket-io).

### Mobile
Developed in React Native, using Expo, this client is used by the user to search spots filtered by programming languages of his interest. He can make a booking proposal with an specific day, and will be answered if the booking is accepted or rejected in real time when the company makes a response.

### Modules
* Axios - Requesting resources from Github API
* Socket.io / socket.io-client - Real-time WebSocket for booking spots
*

### How to run
Its necessary to have installed: [Node.js (LTS)](https://nodejs.org/en/), [NPM](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/lang/en/) and [Expo](https://expo.io/).

#### Backend
There is a script, **dev** (using [Nodemon](https://nodemon.io/) for development purpose), declared at backend/package.json to run the server.
```
cd backend/
npm run dev
```
#### Frontend
```
cd frontend/
npm start
```
#### Mobile
It is possible to run the app in a emulator (Genymotion | XCode) as well as in the own phone. To run in an Android emulator you can download [Genimotion](https://www.genymotion.com/). When running and in the bundler admin select the option "Run android in a simulator". It will automatically seach for a running android simulator. Otherwise its possible to run in your phone device donwloading the expo app in the Play Store, and scan the QR code that appears at the bundler admin page.
```
cd mobile/
npm install -g expo-cli

```


## Built With

* [MongDB](https://www.mongodb.com/) - Database System
* [Express](https://expressjs.com/en/guide/routing.html) - Routing framework
* [React](https://reactjs.org/) - Javascript client side
* [React-Native](http://www.reactnative.com/) - Native mobile client app
* [NodeJS](https://nodejs.org/en/) -  The server-side JavaScript runtime environment
* [Expo](https://expo.io/) - An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

## Authors

* **Diego Fernandes (@diego3g)**

## License

This project is licensed under the MIT License.

## Acknowledgments

* This project is developed as a part of the Omnistack Week 9.0 by Rocketseat (https://github.com/Rocketseat) 

## Screens - Web Version
<img src="https://github.com/GuilleAngulo/aircnc/blob/master/web-1.png" width="420"> <img src="https://github.com/GuilleAngulo/aircnc/blob/master/web-2.png" width="420">
<img src="https://github.com/GuilleAngulo/aircnc/blob/master/web-3.png" width="420">

## Screens - Mobile Version
<img src="https://github.com/GuilleAngulo/aircnc/blob/master/mobile-1.png" width="280"><img src="https://github.com/GuilleAngulo/aircnc/blob/master/mobile-2.png" width="280"><img src="https://github.com/GuilleAngulo/aircnc/blob/master/mobile-3.png" width="280">


