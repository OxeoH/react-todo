import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "./user.entity";
import { AuthProps } from "./user.types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "./jwtConfig";
import { Group } from "../Groups/groups.entity";
import { fixTodos } from "./util/fixTodos";

const generateAccessToken = (id: string, login: string) => {
  const payload = {
    id,
    login,
  };

  return jwt.sign(payload, config.secret, { expiresIn: "24h" });
};

class UserService {
  userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository<User>(User);
  }

  public async checkIsNewUser(login: string) {
    const candidate = await this.userRepository.find({ where: { login } });

    if (candidate.length === 0) {
      return true;
    }
    return false;
  }

  public async getUserById(userId: string) {
    const candidate = await this.userRepository.findOne({
      where: { id: userId },
      relations: ["groups", "groups.todos"],
    });
    console.log(candidate);

    if (candidate) {
      return candidate;
    }

    return candidate;
  }

  public async createNewUser(
    registerParams: AuthProps
  ): Promise<string | null> {
    if (await this.checkIsNewUser(registerParams.login)) {
      const newUser = this.userRepository.create();
      newUser.login = registerParams.login;
      newUser.password = registerParams.password;
      newUser.admin = registerParams.admin;

      const createdUser = await this.userRepository.save(newUser);

      const token = generateAccessToken(createdUser.id, createdUser.login);

      return token;
    } else {
      return null;
    }
  }

  public async authorizeUser(authParams: AuthProps) {
    try {
      const user = await this.userRepository.findOne({
        where: { login: authParams.login },
        relations: ["groups", "groups.todos"],
      });

      if (!user) {
        return null;
      }

      const validPassword = bcrypt.compareSync(
        authParams.password,
        user.password
      );

      if (!validPassword) {
        return null;
      }

      const token = generateAccessToken(user.id, user.login);

      return { token, groups: fixTodos(user.groups) };
    } catch (e) {
      return null;
    }
  }
}

export default new UserService();
