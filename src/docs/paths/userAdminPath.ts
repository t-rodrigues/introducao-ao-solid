export const userAdminPath = {
  patch: {
    security: [
      {
        user_id: [],
      },
    ],
    tags: ["User"],
    summary: "API para tornar um usuário administrar",
    description: "**Somente usuários administradores**",
    parameters: [
      {
        name: "user_id",
        in: "path",
        description: "ID do usuário a ser atualizado",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/user",
            },
          },
        },
      },
      404: {
        $ref: "#/components/notFound",
      },
    },
  },
};
