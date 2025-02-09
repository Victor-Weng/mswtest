import { http, HttpResponse } from "msw";

export const authHandlers = [
    http.get("/auth/register", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response from register",
            },
            {
                status: 202,
            }
        );
    }),
    http.get("/auth/login", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                name: "Mocked response from login",
            },
            {
                status: 202,
            }
        );
    }),
];
