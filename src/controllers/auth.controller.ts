import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.send("login");
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
