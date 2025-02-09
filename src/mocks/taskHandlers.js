import { http, HttpResponse } from "msw";

export const taskHandlers = [
    http.get("/tasks", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for tasks list",
            },
            {
                status: 202,
            }
        );
    }),

    http.post("/tasks", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for creating a task",
            },
            {
                status: 201,
            }
        );
    }),
];
