import { setupWorker } from "msw/browser";
import { authHandlers } from "./authHandlers";
import { http, HttpResponse } from "msw";
//npx msw init public

export const worker = setupWorker(...authHandlers);
