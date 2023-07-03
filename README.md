# Project: Lab 26-29 - Component Based UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Author: Tricia Sawyer

## Project domain

Lab 26

- SASS - Nesting and Variables
- "Component Architecture"
- Application and Component "State"
- Debate/Discuss Libraries vs Frameworks
- Basics of a React App
  - index.html in public (root div)
  - index.js as an untouchable "bootstrap" or "entry point"
  - React Renders into that div
  - JSX is actually javascript but it looks like markup
  - Components can be classes or functions. What gets "returned" gets "rendered"
    - Class - `render() { return(jsx) }`
    - Function - `return(jsx)`
  - Components can load and render each other
  - Components can load their own css

Lab 27

- Refactor any components using this.setState() to implement the useState() react API hook.
Refactor the Form Component to implement user input from form elements, instead of hard coded string values

Lab 28

- In phase 3, we will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service GET requests.

The following user stories detail the major functionality for this phase of the project.

As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data.
As a user, I want to see the results returned from an API request in my browser in a readable format.

Lab 29

- In phase 4, we will be tracking every API call and storing it in history.

The following user stories detail the major functionality for this phase of the project.

As a user, I want to see a list of my previous API calls, so that I can see the results again, quickly.

### Collaborators

- Used ChatGPT to help me understand what the assignment was asking for, as well as writing tests in lab 26
- Ryan in code review for lab 27

### Setup

- Begin a React project locally with `create-react-app`
- Use codesandbox.io to work live on a React application
- Create and render `Class` and `Functional` React components to the DOM
- Add event listeners to React components
- Update React component state
- Style React applications/components using SASS

#### `.env` requirements (where applicable)

Does not require .env file as of right now

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Details of feature
- GET : `/hello` - specific route to hit

#### Tests

- run npm test
- run npm start to run the app

#### UML

![lab 26](./assets/lab26-UML.png)
![lab 27](./assets/lab27-UML.png)

### Live/Deployment

[Code sandbox](https://6nlgfl-3000.csb.app/)
