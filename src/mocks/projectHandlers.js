import { http, HttpResponse } from "msw";

export const projectHandlers = [
    http.get("/projects", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for projects list",
            },
            {
                status: 202,
            }
        );
    }),

    http.post("/projects", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for creating a project",
            },
            {
                status: 201,
            }
        );
    }),
];
