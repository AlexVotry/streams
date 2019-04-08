I wanted to explore how redux-form works. It has built-in action creators and reducers, so understanding how redux works is essential.  We just add the formReducer from redux-form into our list of reducers. 

Essentially, the redux-form will manage all our input data from forms in the redux store.

I set up a mock database with db.json file, and installed  'json-server' package as the server.

I considered saving the api folder in a separate repo as a stand alone server. I am making api calls from the react client to the api folder.  I am running both separately.  In the end I decided to keep them in the same repo. I am thinking of creating a similar mock server that I can use with other practice repos...

I created a third server using [RTMP server](https://github.com/illuspas/Node-Media-Server). This server is for the live video streams.

I use OBS Studio locally for screencast and [flv.js](https://www.npmjs.com/package/flv.js) for getting the video stream and displaying it.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

For each server (client, api, rtmpserver) 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

