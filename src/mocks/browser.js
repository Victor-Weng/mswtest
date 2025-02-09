import { setupWorker } from "msw/browser";
import { authHandlers } from "./authHandlers";
import { accessControlHandlers } from "./accessControlHandlers";
//npx msw init .

const handlers = [...authHandlers, ...accessControlHandlers];

export const worker = setupWorker(...handlers);
