# Exercise Introduction

This exercise is a **simple chat window** that shows 2 chat boxes for the
two existing users - Amy and John.

The aim of this practice exercise is to help cement the understanding of:

- where to put state
- how to update and access state
- when to use stateless functional components
- how to use controlled components

## Task

- A starter template with dummy data was given.
- Add interactivity to the app by refactoring the static code in the given template.
- The messages they send to each other should appear in both chat boxes.
- On Amy's screen, her messages should appear in green and John's messages should appear in blue.
- On John's screen, his messages should appear in green and Amy's messages should appear in blue.
- If the input box is empty, the "Send" button should be disabled.

## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, and you will also see any lint errors in the console.

# Facts about State Management in React

### _State management is at the heart of React._

> It allows us to have a single source of truth for our entire application.\
> That means that we don't need to make sure
> that our data is synched across multiple components; React does it for us. It
> happens via unidirectional data flow: parent components pass properties to
> child components as props.

### _State cannot be modified outside of the component in which it is declared._

> If a child component needs to pass some data back up to the parent (e.g. a
> form that conveys the new user information to the component that holds that the
> users piece of state), we'll need to pass callbacks from the component that holds
> state all the way down to the required component. By calling those callbacks, child
> components are able to pass data to back up to their parents, which are able to
> modify their state. Props can go through multiple components to get to the
> component they ultimately need to reach.

### _Steps To Considerer When 'Thinking React'_:

- _Step 1:_ Break down the app into a hierarchy of components. Draw a box around each React component.
- _Step 2:_ Determine the data in our app.
- _Step 3:_ Figure out the data that should be a part of our state.
- _Step 4:_ Identify where each piece of state lives.
- _Step 5:_ Add Inverse Data Flow.
