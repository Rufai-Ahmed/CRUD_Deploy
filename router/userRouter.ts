import { Router } from "express";
import {
  createUser,
  deleteUser,
  upgradeUserPlan,
  viewOneUser,
  viewUsers,
} from "../controller/userController";

const router: Router = Router();

router.route("/create-user").post(createUser);
router.route("/view-user/:userID").get(viewOneUser);
router.route("/view-all-users").get(viewUsers);
router.route("/upgrade-one-user/:userID").patch(upgradeUserPlan);
router.route("/delete-one-user/:userID").delete(deleteUser);

export default router;
