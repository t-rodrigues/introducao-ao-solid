export const userPath = {
  post: {
    tags: ["User"],
    summary: "API para criar um usuário",
    description: "",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createUserParams",
          },
        },
      },
    },
    responses: {
      201: {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/user",
            },
          },
        },
      },
      400: {
        $ref: "#/components/badRequest",
      },
    },
  },
  get: {
    security: [
      {
        user_id: [],
      },
    ],
    tags: ["User"],
    summary: "API para listar os usuários",
    description: "**Somente usuários administradores**",
    responses: {
      200: {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/users",
            },
          },
        },
      },
      400: {
        $ref: "#/components/badRequest",
      },
    },
  },
};
