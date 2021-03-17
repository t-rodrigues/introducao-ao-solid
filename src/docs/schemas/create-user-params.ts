export const createUserParams = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
  },
  example: {
    name: "John Doe",
    description: "john@doe.com",
  },
  required: ["name", "email"],
};
