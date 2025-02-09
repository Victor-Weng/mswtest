import { http, HttpResponse } from "msw";

export const userHandlers = [
    http.get("/users", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for users list",
            },
            {
                status: 202,
            }
        );
    }),

    http.get("/users/:userId", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for user details",
            },
            {
                status: 200,
            }
        );
    }),
];
