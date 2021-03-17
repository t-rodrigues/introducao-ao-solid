import { components } from "./components";
import { paths } from "./paths";
import { schemas } from "./schemas";

export const swaggerConfig = {
  openapi: "3.0.0",
  info: {
    title: "Atlas",
    description: "Essa é uma documentação sobre a Atlas API",
    version: "1.0.0",
    contact: {
      name: "Thiago Rodrigues",
      email: "thiagor_@live.com",
      url: "https://www.linkedin.com/in/rodrigues-thiago",
    },
  },
  servers: [
    {
      url: "/",
      description: "Servidor principal",
    },
  ],
  tags: [
    {
      name: "User",
      description: "APIs de gerenciamento de usuários",
    },
  ],
  paths,
  schemas,
  components,
};
