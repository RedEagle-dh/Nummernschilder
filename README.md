# API Documentation for German Vehicle Registration Plates

## Overview

This API allows querying for information about German vehicle registration plates based on their abbreviations.

## Base URL

The API is accessed via the base path: `/api/plates`

## Endpoints

### GET /api/plates

Retrieves information about a specific registration plate by its abbreviation.

#### Parameters

- **abbreviation** (string): The abbreviation of the registration plate. It is a required query parameter.

#### Responses

- **200 OK**: Returns a JSON object with details of the registration plate.
- **404 Not Found**: Returned if no abbreviation is provided or if the abbreviation does not match any entry in the database.

#### Example Request

```bash
curl -X GET "http://localhost:3100/api/plates?abbreviation=A"
```

#### Example Response

```json
{
  "abbreviation": "A",
  "origin": "Augsburg",
  "city": "Stadt & Landkreis Augsburg",
  "state": "Bayern"
}
```

## Errors

The API uses standard HTTP response codes to indicate the success or failure of requests.

- **200 OK**: The request was successful.
- **404 Not Found**: The resource was not found. This usually means the abbreviation was not provided or did not match any entries.
