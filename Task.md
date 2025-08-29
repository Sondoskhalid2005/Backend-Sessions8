# Task : Library Books API

# Task Overview:

## You will create a MongoDB database to manage books in a library. You will define a schema, implement CRUD operations.

## 1. Create the Book Schema

## Fields:
`title – String`

`author – String`

`type - String`

`createdAt - (Date, default: Date.now)`

## 2. Implement Endpoints

Add a book: `POST /books`

Get all books: `GET /books`

Get a book by ID: `GET /books/:id`

Update a book title: `PUT /books/:id`

Delete a book: `DELETE /books/:id`

# Bonus Challenge: 
## Return the 2 most recently added books (based on a createdAt field you add to the schema).  `GET /books/recent`

## Requirements:
- Use proper file structuring 
- Use **Mongoose** for schema and database operations.
- Test endpoints using **Postman** or   **Thunder**.
- Handle errors gracefully (e.g., book not found).