import { PrismaClient } from "@prisma/client";
import IUser from "../interfaces/user.interface";

export default class UserModel {
  private _prisma: PrismaClient = new PrismaClient();

  // get user by input email
  async getUserByEmail(email: string): Promise<IUser> {
    const user = await this._prisma.user.findUnique({
      where: { email }
    });
    return user;
  }

  // get user by input id
  async getUserById(id: string): Promise<IUser> {
    const user = await this._prisma.user.findUnique({
      where: { id }
    });
    return user;
  }

  // insert a new user given user data
  async createUser(user: any, hash: string): Promise<IUser> {
    const { username, email } = user;
    const newUser = await this._prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hash
      }
    })
    return newUser;
  }

  // given email, delete a user from table user
  async deleteUser(email: string): Promise<IUser> {
    const user = await this._prisma.user.delete({
      where: { email }
    });
    return user;
  }

  // get users by keyword
  async getUsersByKeyword(keyword: string): Promise<IUser[]> {
    return await this._prisma.user.findMany({
      where: {
        username: {
          contains: keyword
        }
      }
    })
  }

  async updateBio(id: string, bio: string): Promise<IUser> {
    const user = this._prisma.user.update({
      where: { id },
      data: { bio }
    })
    return user; 
  }

  async updatePhoto(id: string, photo: string): Promise<IUser> {
    const user = this._prisma.user.update({
      where: { id },
      data: { photo }
    })
    return user; 
  }
}