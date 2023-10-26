import { Request, Response } from "express";
import userService from "./user.service";
import { AuthProps } from "./user.types";
import bcrypt from "bcryptjs";
import { verifyTokenMiddleware } from "./userMiddleware/verifyTokenMiddleware";
import { fixTodos } from "./util/fixTodos";

class UserController {
  hashSalt: number;

  constructor() {
    this.hashSalt = 8;
  }

  public async authUser(req: Request, res: Response) {
    try {
      const { login, password, admin }: AuthProps = req.body;

      if (!password || !login) {
        res
          .status(400)
          .json({ message: "Error: Login and password are requared" });
      }

      const authorizedUserData = await userService.authorizeUser({
        login,
        password,
        admin,
      });

      if (!authorizedUserData?.token.length) {
        return res.status(400).json({ message: "Error: Cannot authorize" });
      }

      res.status(200).json(authorizedUserData);
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }

  public async checkIsAuth(req: Request, res: Response) {
    try {
      const { token }: { token: string } = req.body;

      const userData = verifyTokenMiddleware(token);

      if (!userData)
        return res.status(403).json({ message: "Error: Token was expired" });

      const user = await userService.getUserById(userData.id);

      if (!user)
        return res.status(403).json({ message: "Error: Cannot find user" });
      console.log("user", user);
      console.log("groups", user.groups);

      return res.status(200).json({ token, groups: fixTodos(user.groups) });
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }

  public async registerUser(req: Request, res: Response) {
    try {
      const registerParams: AuthProps = req.body;

      if (!registerParams.password || !registerParams.login) {
        res
          .status(400)
          .json({ message: "Error: Login and password are requared" });
      }

      const hashPassword = bcrypt.hashSync(
        registerParams.password,
        this.hashSalt
      );

      const token = await userService.createNewUser({
        ...registerParams,
        admin: false,
        password: hashPassword,
      });

      if (token) {
        return res.status(200).json({ token });
      } else {
        return res.status(400).json({
          message: `User with login ${registerParams.login} is already exists`,
        });
      }
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }
  public async checkIsAdmin(req: Request, res: Response) {
    try {
      const { token }: { token: string } = req.body;

      const userData = verifyTokenMiddleware(token);

      if (!userData)
        return res.status(403).json({ message: "Error: Token was expired" });

      const user = await userService.getUserById(userData.id);

      if (!user)
        return res.status(403).json({ message: "Error: Cannot find user" });

      if (!user.admin)
        return res.status(404).json({ message: "Error: No roots" });

      return res.status(200).json(user.admin);
    } catch (e) {
      res.status(500).json({ message: `Error: ${e}` });
    }
  }
}

export default new UserController();
