import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [
    inferAdditionalFields({
      user: {
        role: {
          type: "string",
        },
      },
    }),
  ], // the base url of your auth server
});
