export const userSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
    admin: {
      type: "boolean",
    },
    email: {
      type: "string",
    },
    created_at: {
      type: "string",
    },
    updated_at: {
      type: "string",
    },
  },
  required: ["id", "name", "admin", "email", "created_at", "updated_at"],
};
