import expressRequestId from "express-request-id";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import { Request, Response, NextFunction } from "express";
import OktaJwtVerifier from "@okta/jwt-verifier";

const requestId = expressRequestId();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: "https://dev-550216.okta.com/oauth2/default",
});

export function oktaAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization || "";
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    res.status(401);
    return next("Unauthorized");
  }

  const accessToken = match[1];

  return oktaJwtVerifier
    .verifyAccessToken(accessToken)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}

export const rootLevelMiddleware = [
  compression(),
  cors(),
  requestId,
  urlEncodedParser,
  jsonParser,
  morgan("combined"),
  oktaAuth,
];
