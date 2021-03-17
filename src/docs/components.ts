import { badRequest } from "./components/bad-request";
import { notFound } from "./components/not-found";

export const components = {
  securitySchemes: {
    user_id: {
      $ref: "#/schemas/user_id",
    },
  },
  badRequest,
  notFound,
};
