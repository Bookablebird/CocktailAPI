# CocktailAPI
Request & Response Examples
API Resources
GET /magazines
GET /magazines/[id]
POST /magazines/[id]/articles
GET /magazines
Example: http://example.gov/api/v1/magazines.json

Response body:

{
    "metadata": {
        "resultset": {
            "count": 123,
            "offset": 0,
            "limit": 10
        }
    },
    "results": [
        {
            "id": "1234",
            "type": "magazine",
            "title": "Public Water Systems",
            "tags": [
                {"id": "125", "name": "Environment"},
                {"id": "834", "name": "Water Quality"}
            ],
            "created": "1231621302"
        },
        {
            "id": 2351,
            "type": "magazine",
            "title": "Public Schools",
            "tags": [
                {"id": "125", "name": "Elementary"},
                {"id": "834", "name": "Charter Schools"}
            ],
            "created": "126251302"
        }
        {
            "id": 2351,
            "type": "magazine",
            "title": "Public Schools",
            "tags": [
                {"id": "125", "name": "Pre-school"},
            ],
            "created": "126251302"
        }
    ]
}
GET /magazines/[id]
Example: http://example.gov/api/v1/magazines/[id].json

Response body:

{
    "id": "1234",
    "type": "magazine",
    "title": "Public Water Systems",
    "tags": [
        {"id": "125", "name": "Environment"},
        {"id": "834", "name": "Water Quality"}
    ],
    "created": "1231621302"
}
POST /magazines/[id]/articles
Example: Create – POST http://example.gov/api/v1/magazines/[id]/articles

Request body:

[
    {
        "title": "Raising Revenue",
        "author_first_name": "Jane",
        "author_last_name": "Smith",
        "author_email": "jane.smith@example.gov",
        "year": "2012",
        "month": "August",
        "day": "18",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante ut augue scelerisque ornare. Aliquam tempus rhoncus quam vel luctus. Sed scelerisque fermentum fringilla. Suspendisse tincidunt nisl a metus feugiat vitae vestibulum enim vulputate. Quisque vehicula dictum elit, vitae cursus libero auctor sed. Vestibulum fermentum elementum nunc. Proin aliquam erat in turpis vehicula sit amet tristique lorem blandit. Nam augue est, bibendum et ultrices non, interdum in est. Quisque gravida orci lobortis... "
    }
]
Mock Responses
It is suggested that each resource accept a 'mock' parameter on the testing server. Passing this parameter should return a mock data response (bypassing the backend).

Implementing this feature early in development ensures that the API will exhibit consistent behavior, supporting a test driven development methodology.

Note: If the mock parameter is included in a request to the production environment, an error should be raised.
