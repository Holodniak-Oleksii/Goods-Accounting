import { Request } from "express";

export interface DecodedToken {
  id: number;
}

export interface ExtendedRequest extends Request {
  userKey?: DecodedToken;
}
