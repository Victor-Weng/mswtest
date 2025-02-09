import { http, HttpResponse } from "msw";

export const tagHandlers = [
    http.get("/tags", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for tags list",
            },
            {
                status: 202,
            }
        );
    }),

    http.post("/tags", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for creating a tag",
            },
            {
                status: 201,
            }
        );
    }),
];
