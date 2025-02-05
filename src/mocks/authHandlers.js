import { http, HttpResponse } from "msw";

export const authHandlers = [
    http.get("/mswAPI", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response",
            },
            {
                status: 202,
            }
        );
    }),
];
