import { Request, Response, Router } from "express";

const statusRouter = Router();

statusRouter.get("/", (req: Request, res: Response) => {
  // TODO
  return res.status(200).json({});
});

export default statusRouter;
