# Bootcamp Project

Basechat was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0 combined with firebase as a backend to store realtime database and authentication.

## Description
Basechat is a simple chat application built using angular and firebase with VSCode as the editor. It allows users to create and join a room and send messages to each other in real time. Users can set up a nick-name which will be displayed on the chat history once they start sending messages. Hopefully it will allow users to send more than simple text messages in the near future.

## Components

### Addroom Component 
It creates an option for users to create a room/group for users to join and chat with other group members.  

### Chatroom component
It creates the interface which consists of textbox, send button and message history. All the messaging activities will take place in this page.

### Roomlist component
It displays the group/rooms a user has entered or created. It allows users to switch between rooms for viewing message history or sending messages in a particular room.

### Login component
It is responsible for providing users with their own username and password. Once users complete signing up, users can get authenticated into the system with their unique username and password.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.





