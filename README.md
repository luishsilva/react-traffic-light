# Traffic light Create React App

# Standard Requirements

Setup eslint
[] Pass all linting checks
To check if linting passes, run npm run lint
[] Format code with prettier
[] State should not be duplicated
[] Variables should be named logicially
[] No unneccessary console logs
[] No commented out blocks of code (Code comments are fine)
[] Setup a github repository with your submission as the main branch, you will submit a link to this for grading (NOT A ZIP FILE)

# Assignment Specific Requirements

[] The state of a traffic light should go in the following order and repeat indefinitely
Red, Green, Yellow
If the color is red, and you click nextState, the light should change to green
If the color is green, and you click nextState, the light should change to yellow
If the color is yellow, and you click nextState, the light should change to red
[] The correct circle should correspond with the correct position
red light should be the top light
yellow light should be the middle light
green light should be the bottom light
[] Next State button should go to the next state on the functional traffic light
[] Next State button should go to the next state on the class based traffic light

# Install eslint

link: https://www.youtube.com/watch?v=xinJSYiOB6Q
check if eslint is installed: npm ls eslint
install eslint: npm install eslint --save-dev
install eslint-plugin: npm install eslint-plugin-react --save-dev
check if eslint-hooks is installed: npm ls eslint-plugin-react-hooks

# Install Prettier

npm install prettier --save-dev --save-exact

# disable all the eslint rules that has something to do with code styling

npm install eslint-config-prettier --save-dev

# run prettier

npx --write .
