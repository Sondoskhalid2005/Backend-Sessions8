# Task : Library Books API

# Task Overview:

# You will create a MongoDB database to manage books in a library. You will define a schema, implement CRUD operations, and optionally add borrowing functionality.

## 1. Create the Book Schema

## Fields:
`title – String`

`author – String`

`type - String`

`createdAt (Date, default: Date.now)`

## 2. Implement Endpoints

Add a book: `POST /books`

Get all books: `GET /books`

Get a book by ID: `GET /books/:id`

Update a book title: `PUT /books/:id`

Delete a book: `DELETE /books/:id`

# Bonus Challenge: Recently Added Books

## Create an endpoint: `GET /books/recent`
## Functionality: Return the 2 most recently added books (based on a createdAt field you add to the schema).

# Requirements:

## Use Mongoose for schema and database operations.
## Test endpoints using Postman or similar tool.
## Handle errors gracefully (e.g., book not found).