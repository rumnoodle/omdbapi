# Omdb API Movie Search

Almost all work has been done in client (frontend) which is a React app generated with create-react-app. Some minor changes have been made in other places as well but the major changes were made in the SearchWidget.js and SearchResultsWidget.js files in the src directory and their corresponding test files in the src/tests directory.

## Setup

You'll need a secret key from http://www.omdbapi.com to be able to use this search. When you have that paste it into the correct place in server.js to be able to make searches. (In production this would be stored somewhere else like a vault, environment variable etc.)

When you've added the key the application can be installed and run on development with the following commands.

* `npm i`
* `cd client`
* `npm i`
* `cd ..`
* `npm start`

Navigate to localhost:3000 to try it out unless it is opened automatically.

## Testing

To test the application go into client folder and run `npm test`.
