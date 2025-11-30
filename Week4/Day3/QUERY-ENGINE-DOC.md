QUERY ENGINE DOC

1. Dynamic Search

Endpoint: GET http://localhost:5003/api/products?search=phone|laptop
Description: Search products dynamically using OR (|) conditions.
Implementation: Uses regex for case-insensitive matching.


2. Filtering

Exact Match:
GET http://localhost:5003/api/products?category=electronics

Range Queries:
GET http://localhost:5003/api/products?price[gte]=500&price[lte]=2000


3. Sorting

Single Field: sort=price (ascending)
Descending: sort=-price
Multiple Fields: sort=category,-price (category ascending, price descending within category)


4. Pagination

Query Params:
GET http://localhost:5003/api/products?page=1&limit=5
Description: Returns results based on page number and items per page.


5. Soft Delete

Soft Delete Product:
DELETE http://localhost:5003/api/products/:id

Marks deletedAt instead of removing the document.
Include Deleted Products:
GET http://localhost:5003/api/products?includeDeleted=true
Returns products that were soft deleted.


6. Error Handling

Custom Errors: ApiError class handles intentional errors like “Product not found”.
Middleware: Centralized error middleware catches all errors and returns uniform JSON responses: