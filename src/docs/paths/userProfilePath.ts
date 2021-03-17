export const userProfilePath = {
  get: {
    security: [
      {
        user_id: [],
      },
    ],
    tags: ["User"],
    summary: "API para carregar o perfil",
    description: "**Somente usuários logados**",
    parameters: [
      {
        name: "user_id",
        in: "path",
        description: "ID do usuário a ser consultado",
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
      400: {
        $ref: "#/components/badRequest",
      },
    },
  },
};
