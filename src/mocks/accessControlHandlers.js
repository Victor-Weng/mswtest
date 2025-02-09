import { http, HttpResponse } from "msw";

export const accessControlHandlers = [
    http.get("/user-projects", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for user-projects",
            },
            {
                status: 202,
            }
        );
    }),

    http.post("/user-projects", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for adding user to project",
            },
            {
                status: 201,
            }
        );
    }),

    http.delete("/user-projects", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for removing user from project",
            },
            {
                status: 204,
            }
        );
    }),
];
