# order-entry-app
Client for Blooms Order App
# Blooms Order App

## Summary
The Blooms Order App provides a way for the florist to capture the details of walk-in and phone orders using a tablet or phone. 
The current system of writing orders on a paper form presents unacceptable problems:
* Lost Orders * No single source of truth on pending orders * Lack of electronic audit trail *Lack of synchronization with online orders * Hard to read handwriting  * essy to update orders
The Order app:
* Stores orders in a database * Can integrate with existing systems to synch orders from all sources * Easy to see, can be displayed on a large screen  * Offers potential to easily update orders and set status * Potentially allows setting order priority via drag and drop

ToDos:
* Order Detail screen to display and provide order edit capability 
* Separate order entry screens for Arrangements, Plants, and Other Products 
* Action buttons on Order List to set order status
* SMS notification to customer and delivery service based on order status changes
* Drag and drop order sorting 
* Integrate Square POS API for checkout and payment.

## Screenshots :camera:
| <img alt="Intro" src="https://github.com/selvinor/order-entry-app/blob/master/screenshots/home.jpg" width="25%">                                <img alt="Intro" src="https://github.com/selvinor/order-entry-app/blob/master/screenshots/list.jpg" width="25%">                                <img alt="Intro" src="https://github.com/selvinor/order-entry-app/blob/master/screenshots/list.jpg" width="25%"> |
|:---:|
|                          Home             |         Order Form      |        Order List    


## Features

### Home Screen
The Home screen will display a welcome and buttons to access the app features.

### Order Screen
The Order screen will present a form for the input of new walk-in and phone orders.

### Order List
The Order List screen will display a list of all pending orders.


## Tech Used :computer:

### Front-End
* ReactJS
* React Native
* React Navigation
* React Native Elements
* Redux
* Redux Form
* JavaScript

### Back-End
* MongoDB
* Mongoose
* Node
* Express

### Deployment
* ToDo

## Project Location
Both the client and the server are pending further development before deployment.
