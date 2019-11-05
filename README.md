# AirCnC
This app has 3 basic modules:
### Backend
Developed in NodeJS, is an API Rest to attend requests from the web version of the frontend as the mobile version.
This app has basically two pages: login and main. The backend of the app is developed in NodeJS, and the frontend is coded in two versions: one in React for browser client and another in React-Native for mobile-native client. Course produced by @RockeatSeat and teached by @diego3g.

## Login
In the login page the user will insert his Github nickname, which will create a new app user by getting his github basic data (Avatar, Bio, Username) using the public API.

## Main
In the main page, a list of users already registered is shown along with two buttons: "like" and "dislike". Both buttons turn off users profiles from current user´s view, leaving only users without any interaction.
If two user do like one to each other, a match will show in the screen.

### Modules
* Axios - Requesting resources from Github API
* Socket.io / socket.io-client - Real-time WebSocket for booking spots
*


## Built With

* [MongDB](https://www.mongodb.com/) - Database System
* [Express](https://expressjs.com/en/guide/routing.html) - Routing framework
* [React](https://reactjs.org/) - Javascript client side
* [React-Native](http://www.reactnative.com/) - Native mobile client app
* [NodeJS](https://nodejs.org/en/) -  The server-side JavaScript runtime environment
* [Expo] (https://expo.io/) - An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

## Authors

* **Diego Fernandes (@diego3g)**

## License

This project is licensed under the MIT License.

## Acknowledgments

* This project is developed as a part of the Omnistack Week 9.0 by Rocketseat (https://github.com/Rocketseat) 

## Screens - Web Version
<img src="https://github.com/GuilleAngulo/aircnc/blob/master/web-1.png" width="400">
<img src="https://github.com/GuilleAngulo/aircnc/blob/master/web-2.png" width="400">
<img src="https://github.com/GuilleAngulo/aircnc/blob/master/web-3.png" width="400">

## Screens - Mobile Version
<img src="https://github.com/GuilleAngulo/aircnc/blob/master/mobile-1.png" width="200">
<img src="https://github.com/GuilleAngulo/aircnc/blob/master/mobile-2.png" width="200">
<img src="https://github.com/GuilleAngulo/aircnc/blob/master/mobile-3.png" width="200">


