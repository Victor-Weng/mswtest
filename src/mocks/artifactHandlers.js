import { http, HttpResponse } from "msw";

export const artifactHandlers = [
    http.get("/artifacts", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for artifacts list",
            },
            {
                status: 202,
            }
        );
    }),

    http.post("/artifacts", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response for creating artifact",
            },
            {
                status: 202,
            }
        );
    }),
];
