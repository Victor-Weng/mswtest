import { http, HttpResponse } from "msw";

export const commentHandlers = [
    http.get("/comments", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for comments list",
            },
            {
                status: 202,
            }
        );
    }),

    http.post("/comments", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for adding a comment",
            },
            {
                status: 201,
            }
        );
    }),
];
