// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

export default async (req, res) => {
  const token = await getToken({ req, secret });
  token ? res.status(200).json(token) : res.status(401);
};
