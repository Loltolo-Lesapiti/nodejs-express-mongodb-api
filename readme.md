# Product CRUD API

A simple RESTful API built with Node.js, Express.js, and MongoDB for managing products. This API provides full CRUD (Create, Read, Update, Delete) operations for product management.

## 🚀 Features

- ✅ Create new products
- ✅ Get all products
- ✅ Get product by ID
- ✅ Update existing products
- ✅ Delete products
- ✅ Input validation
- ✅ Error handling
- ✅ Timestamps for created/updated records

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas account)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## ⚡ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Loltolo-Lesapiti/nodejs-express-mongodb-api
cd  nodejs-express-mongodb-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name
PORT=3000
```

### 4. Run the application

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

## 📊 Data Model

### Product Schema

```javascript
{
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  image: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

## 🔗 API Endpoints

### Base URL

```
http://localhost:3000/
```

### Endpoints Overview

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/products`     | Get all products   |
| GET    | `/api/products/:id` | Get product by ID  |
| POST   | `/api/products`     | Create new product |
| PUT    | `/api/products/:id` | Update product     |
| DELETE | `/api/products/:id` | Delete product     |

---

### 📖 Detailed API Documentation

#### 1. Get All Products

```http
GET /api/products
```

**Response:**

```json
{
  "status": 200,
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6789abcde",
      "name": "Laptop",
      "quantity": 10,
      "price": 999.99,
      "image": "https://example.com/laptop.jpg",
      "createdAt": "2025-06-28T10:30:00.000Z",
      "updatedAt": "2025-06-28T10:30:00.000Z"
    }
  ]
}
```

#### 2. Get Product by ID

```http
GET /api/products/{id}
```

**Parameters:**

- `id` (string, required) - Product ID

**Response:**

```json
{
  "status": 200,
  "data": {
    "_id": "64f8a1b2c3d4e5f6789abcde",
    "name": "Laptop",
    "quantity": 10,
    "price": 999.99,
    "image": "https://example.com/laptop.jpg",
    "createdAt": "2025-06-28T10:30:00.000Z",
    "updatedAt": "2025-06-28T10:30:00.000Z"
  }
}
```

#### 3. Create New Product

```http
POST /api/products
```

**Request Body:**

```json
{
  "name": "Smartphone",
  "quantity": 25,
  "price": 599.99,
  "image": "https://example.com/smartphone.jpg"
}
```

**Response:**

```json
{
  "status": 201,
  "data": {
    "_id": "64f8a1b2c3d4e5f6789abcdf",
    "name": "Smartphone",
    "quantity": 25,
    "price": 599.99,
    "image": "https://example.com/smartphone.jpg",
    "createdAt": "2025-06-27T11:00:00.000Z",
    "updatedAt": "2025-06-27T11:00:00.000Z"
  }
}
```

#### 4. Update Product

```http
PUT /api/products/{id}
```

**Parameters:**

- `id` (string, required) - Product ID

**Request Body:**

```json
{
  "name": "Updated Smartphone",
  "quantity": 30,
  "price": 549.99
}
```

**Response:**

```json
{
  "status": 200,
  "data": {
    "_id": "64f8a1b2c3d4e5f6789abcdf",
    "name": "Updated Smartphone",
    "quantity": 30,
    "price": 549.99,
    "image": "https://example.com/smartphone.jpg",
    "createdAt": "2025-06-27T11:00:00.000Z",
    "updatedAt": "2025-06-27T11:15:00.000Z"
  }
}
```

#### 5. Delete Product

```http
DELETE /api/products/{id}
```

**Parameters:**

- `id` (string, required) - Product ID

**Response:**

```json
{
  "status": 200,
  "message": "Product deleted successfully"
}
```

## 🔧 Testing the API

### Using Thunder Client (VS Code Extension)

Thunder Client is a lightweight REST API client for VS Code. Perfect for testing your API directly in your editor!

1. **Install Thunder Client** extension in VS Code
2. **Create a new request**
3. **Set the base URL** to `http://localhost:3000/`
4. **Add requests for each endpoint:**

**Get all products:**

- Method: `GET`
- URL: `http://localhost:3000/api/products`

**Create a product:**

- Method: `POST`
- URL: `http://localhost:3000/api/products`
- Headers: `Content-Type: application/json`
- Body:

```json
{
  "name": "Test Product",
  "quantity": 5,
  "price": 29.99,
  "image": "https://example.com/test.jpg"
}
```

**Update a product:**

- Method: `PUT`
- URL: `http://localhost:3000/api/products/YOUR_PRODUCT_ID`
- Headers: `Content-Type: application/json`
- Body:

```json
{
  "name": "Updated Product",
  "quantity": 10
}
```

**Delete a product:**

- Method: `DELETE`
- URL: `http://localhost:3000/api/products/YOUR_PRODUCT_ID`

### Using cURL

**Get all products:**

```bash
curl -X GET http://localhost:3000/api/products
```

**Create a product:**

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Product",
    "quantity": 5,
    "price": 29.99,
    "image": "https://example.com/test.jpg"
  }'
```

### Using Postman

1. Import the API endpoints into Postman
2. Set the base URL to `http://localhost:3000/api`
3. Add `Content-Type: application/json` header for POST/PUT requests
4. Test each endpoint with sample data

## ❌ Error Handling

The API returns appropriate HTTP status codes and error messages:

### Common Error Responses

**400 - Bad Request**

```json
{
  "status": 400,
  "message": "Invalid product ID format"
}
```

**404 - Not Found**

```json
{
  "status": 404,
  "message": "Product not found"
}
```

**500 - Internal Server Error**

```json
{
  "status": 500,
  "message": "Internal server error"
}
```

**Validation Error**

```json
{
  "status": 400,
  "message": "Please enter product name"
}
```

# Project Structure

```
your-project/
├── controllers/
│   └── productController.js
├── routers/
│   └── products.js
├── models/
│   └── Product.js
├── .env
├── .gitignore
├── LICENSE
├── README.md
├── package.json
├── package-lock.json
└── index.js
```

## Directory Breakdown

### 📁 `controllers/`

Contains business logic and request handling

- **`productController.js`** - Product-related operations (CRUD functions)

### 📁 `routers/`

Contains route definitions and middleware

- **`products.js`** - Product API routes (/api/products)

### 📁 `models/`

Contains database schemas and models

- **`Product.js`** - MongoDB/Mongoose product schema

### 📄 Root Files

- **`.env`** - Environment variables (not committed to git)
- **`.env.example`** - Template for environment variables
- **`.gitignore`** - Files to ignore in version control
- **`LICENSE`** - MIT license file
- **`README.md`** - Project documentation
- **`package.json`** - Project dependencies and scripts
- **`package-lock.json`** - Dependency lock file
- **`app.js`** - Main application entry point

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Petro Lesapiti - petrolesapiti@gmail.com

Project Link: [clone https://github.com/Loltolo-Lesapiti/nodejs-express-mongodb-api](https://github.com/Loltolo-Lesapiti/nodejs-express-mongodb-api)

## 🙏 Acknowledgments

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Node.js Documentation](https://nodejs.org/)
- [FreeCodeCamp](https://www.freecodecamp.org/) - for excellent tutorials and learning resources
