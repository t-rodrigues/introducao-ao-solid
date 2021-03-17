import { apiKeyAuthSchema } from "./components/api-key-auth";
import { createUserParams } from "./schemas/create-user-params";
import { errorSchema } from "./schemas/error";
import { userSchema } from "./schemas/user";
import { usersSchema } from "./schemas/users";

export const schemas = {
  user_id: apiKeyAuthSchema,
  createUserParams,
  error: errorSchema,
  user: userSchema,
  users: usersSchema,
};
