import { userAdminPath } from "./paths/userAdminPath";
import { userPath } from "./paths/userPath";
import { userProfilePath } from "./paths/userProfilePath";

export const paths = {
  "/users": userPath,
  "/users/:user_id": userProfilePath,
  "/:user_id/admin": userAdminPath,
};
