import { http, HttpResponse } from "msw";

export const resourceHandlers = [
    http.get("/resources", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for resource list",
            },
            {
                status: 202,
            }
        );
    }),

    http.post("/resources", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for creating a resource",
            },
            {
                status: 201,
            }
        );
    }),
];
