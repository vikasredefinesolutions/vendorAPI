# Vendor Management System API Documentation

## Overview

This API provides endpoints to manage a vendors.

## Base URL

```
/vendors
```

## Data Models

### Vendor Schema

| Field              | Type   | Description                 | Required |
| ------------------ | ------ | --------------------------- | -------- |
| vendorName         | String | Name of the Vendor          | Yes      |
| contactName        | String | Contact Name of the Vendor  | Yes      |
| contactEmail       | String | Contact Email of the Vendor | Yes      |
| contactPhone       | String | Contact Phone of the Vendor | Yes      |
| website            | String | Website link of vendor      | Yes      |
| loginName          | String | loginName of vendor         | Yes      |
| imagePortalWebsite | String | Reference to parent module  | Yes      |
| status             | String | Status fof vendor           | Yes      |

## Endpoints

### 1. Create Module

Creates a new module with automatic display order assignment.

**Endpoint:** `POST /`

**Request Body:**

```json
{
  "vendorName": "string",
  "contactName": "string",
  "contactEmail": "string",
  "contactPhone": "string",
  "address": "string",
  "website": "string",
  "loginName": "string",
  "imagePortalWebsite": "string",
  "status": "active"| "inactive" | "archive"
}
```

**Response:** `200 OK`

```json
{
  "_id": "string",
 "vendorName": "string",
  "contactName": "string",
  "contactEmail": "string",
  "contactPhone": "string",
  "address": "string",
  "website": "string",
  "loginName": "string",
  "imagePortalWebsite": "string",
  "status": "active"| "inactive" | "archive"
}
```

**Error:** `400 Bad Request`

```json
{
  "message": "Failed to create vendor"
}
```

### 2. Get All Vendors

Retrieves the all vendors or filter on the basis of query params.

**Endpoint:** `GET /`

**Response:** `200 OK`

```json
[
  {
     "_id": "string",
 "vendorName": "string",
  "contactName": "string",
  "contactEmail": "string",
  "contactPhone": "string",
  "address": "string",
  "website": "string",
  "loginName": "string",
  "imagePortalWebsite": "string",
  "status": "active"| "inactive" | "archive"
  }
]
```

**Error:** `400 Bad Request`

```json
{
  "message": "Failed to fetch vendors"
}
```

### 3. Delete Vendor

Deletes a vendor.

**Endpoint:** `DELETE /:id`

**URL Parameters:**

- `id`: Vendor ID (string)

**Response:** `200 OK`

```json
{
  "message": "Vendor deleted successfully"
}
```

**Errors:**

- `404 Not Found`: Vendor not found
- `400 Bad Request`: Failed to delete vendor

### 4. Update Vendor

Update a vendor using it's object id

**Endpoint:** `PUT /:id`

**URL Parameters:**

- `id`: Vendor ID (string)

**Request Body:**

```json
{
 "vendorName": "string",
  "contactName": "string",
  "contactEmail": "string",
  "contactPhone": "string",
  "address": "string",
  "website": "string",
  "loginName": "string",
  "imagePortalWebsite": "string",
  "status": "active"| "inactive" | "archive"
}
```

**Response:** `200 OK`

```json
{
  // Updated vendor object
}
```

**Errors:**

- `404 Not Found`: Vendor not found
- `400 Bad Request`: Failed to update vendor

``

### 5. Get Vendor By id

Update a vendor using it's object id

**Endpoint:** `GET /:id`

**URL Parameters:**

- `id`: Vendor ID (string)

**Response:** `200 OK`

```json
{
  {
    "_id":"string",
  "vendorName": "string",
  "contactName": "string",
  "contactEmail": "string",
  "contactPhone": "string",
  "address": "string",
  "website": "string",
  "loginName": "string",
  "imagePortalWebsite": "string",
  "status": "active"| "inactive" | "archive"
}
}
```

**Errors:**

- `404 Not Found`: Vendor not found
- `400 Bad Request`: Failed to fetch vendor

## Error Handling

All endpoints follow consistent error handling:

- `400`: Bad Request - Invalid input or operation failed
- `404`: Not Found - Requested resource doesn't exist
- All errors return a JSON object with a `message` field

## TypeScript Integration

The API is built with TypeScript support, providing type safety through interfaces:

- `IModule` interface defines the shape of module objects
- All endpoints are type-safe and provide proper TypeScript definitions

```

```

```

```
