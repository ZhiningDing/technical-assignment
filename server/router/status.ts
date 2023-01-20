import { Request, Response, Router } from "express";
import { websiteData } from "./data";

const statusRouter = Router();

export interface IWebsite {
  url: string;
  status: string; // http status
}

// return a list of IWebsite
statusRouter.get("/", (req: Request, res: Response) => {
  return res.status(200).json(websiteData);
});

export default statusRouter;
