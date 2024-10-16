# Comic Book Store Backend

This project is a backend for a React-based e-commerce store that allows the management and display of comic books as inventory items. It provides CRUD (Create, Read, Update, Delete) functionality for the store manager to create and manage comic books for sale.

## Key Technologies

- **Server**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Version Control**: GitHub
- **API Testing**: Postman

## Features and Requirements

### A. Comic Book Management API

#### Create a Comic Book
Implement an API that allows the manager to add a new comic book to the inventory by providing details such as:
- Book Name
- Author Name
- Year of Publication
- Price
- Discount (if applicable)
- Number of Pages
- Condition (e.g., new, used)
- Description (optional)
- Additional attributes as deemed necessary

#### Edit a Comic Book
Allow updates to the attributes of an existing comic book via an API. The manager should be able to modify any field, such as price, condition, or discount.

#### Delete a Comic Book
Implement a delete operation that removes a comic book from the inventory.

### B. Comic Book List API

#### Fetch Inventory List
Develop an API endpoint to retrieve all available comic books in the inventory. Ensure that:
- Pagination is supported for large datasets.
- Filtering options are available based on attributes like author, year, price, condition, etc.
- Sorting options are provided (e.g., by price, year, or alphabetically).

### C. Comic Book Details API

#### Get Comic Book Details
Create an endpoint that returns the full details of a specific comic book based on its ID. This API will be used to populate the details page for individual comic books.


### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Abhishek51882/comics.git
   cd comics
