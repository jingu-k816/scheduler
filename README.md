# Interview Scheduler

A react app that allows users to book, edit and cancel interviews. Data is persisted through schedule API server using PostgreSQL database.
Jest, Cypress are used for integration, end to end tests throughout the project. Storybook is used for testing component isolation.

## Deployment

- The website is deployed using netlify and heroku! 
- You can click [here](https://interview-schduler.netlify.app/) to see the App!
- Back-end server can be found [here](https://scheduler-jingu.herokuapp.com/).<br/>
  Note: the server supports thress GET endpoint. The `/` path will return a 404 error <br/>
  `GET /api/days`
  `GET /api/appointments`
  `GET /api/interviewers`


## Screenshots
- Main Page
!["Main page screenshot"](https://github.com/jingu-k816/scheduler/blob/master/docs/main-page.png "Main Page")

- Show Component
!["Show Component"](https://github.com/jingu-k816/scheduler/blob/master/docs/show-component.png "Show Component")

- Validation check on Show Component
!["Error 1"](https://github.com/jingu-k816/scheduler/blob/master/docs/error.png "Error one")
!["Error 2"](https://github.com/jingu-k816/scheduler/blob/master/docs/error2.png "Error two")

- Status Component after clicking "Save"
!["Status Component"](https://github.com/jingu-k816/scheduler/blob/master/docs/saving-component.png "Status Component")

- Confirmation Component when deleting an existing interview
!["Confirmation Component"](https://github.com/jingu-k816/scheduler/blob/master/docs/confirmation.png "Confirmation component")

- Responsive Design of the App
!["Responsive Design"](https://github.com/jingu-k816/scheduler/blob/master/docs/responsive-design.png "Responsive Design")

## Dependencies
- Axios
- Classnames
- Cypress
- Normalize.css
- React
- React-dom
- React-scripts

## Dev Dependencies
- @babel/core
- @storybook/addon-actions
- @storybook/addon-backgrounds
- @storybook/addon-links
- @storybook/addons
- @storybook/react
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/react-hooks
- node-sass
- react-test-renderer
- Prop-Types

## Continuous Testing Integration
- Continuous CI deployed with CircleCI

## Setup

1. Fork this repository then clone your forked repository
2. Install dependencies using the command `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```