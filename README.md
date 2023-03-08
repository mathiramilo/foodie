# Foodie - Food Delivery App

Mobile multiplatform food delivery app developed with React Native and Expo for the final project of Coderhouse mobile development course.

![Design Image](./design/design.jpg)

## Features

1. **`Authentication`** (Users can register and login himselfs)
2. **`Order Food`** (Users can make orders to any of the restaurants that fooide offers)
3. **`Search and Filter Restaurants and Food`** (Users can filter restaurants and food by searching the name or filtering by tags)
4. **`Favorite Restaurants`** (Users can add restaurants as favorites so they can make orders quickly)
5. **`Checkout Options`** (Users can increase, decrease or delete items from the order and they can choose the payment method)
6. **`Orders History`** (Users can see their history of orders and more details about an specific order)
7. **`User Information`** (Users can see their information and edit it)
8. **`Avatar Photo`** (Users can upload an avatar photo from their library or with the camera)
9. **`Addresses and Cards`** (Users can add and manage their addresses and cards)

## App Demo

#### Authentication and profile management flow.

https://user-images.githubusercontent.com/42822912/223637844-a84557d1-08d9-4c7c-b431-f72289ca4e2d.mov

#### Food ordering and orders history flow.

https://user-images.githubusercontent.com/42822912/223637748-34c1fe47-4d85-4154-adc7-604f524f6d51.mov

## Architecture and Data Model

Foodie uses firebase as a cloud service for persistence, authentication and storage of multimedia content.

![Data Model](./design/foodie-data-model.jpg)
Data Model

![Architecture](./design/foodie-architecture.jpg)
Architecture

## App Technical Information

Foodie is developed with React Native and Expo.

### Global State Management

Global application state is managed with **Redux Toolkit**.

This is responsible for managing the authentication status of the app, the user's current order, order history and addresses and the available restaurants.

### Authentication

The application uses firebase as an external authentication layer.

### Navigation

The navigation of the app can be separated into authentication and application, when there is no logged in user the application shows the authentication stack, on the other hand when there is a logged in user the navigation tab is shown consisting of 3 tabs, food, orders and profile where each of these is a separate stack.

### SQLite

The application connects with the SQLite database to obtain and store the addresses of the users.

### Device Camera and Library

The camera and gallery of the device are used so that users can change their profile picture.

## Personal Data

- Visit my [**Github**](https://github.com/mathiramilo) profile to see more amazing projects.
- If you are interested, contact me on [**Linkedin**](https://www.linkedin.com/in/mathias-ramilo).
