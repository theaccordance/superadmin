import expressRequestId from "express-request-id";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import { Request, Response, NextFunction } from "express";
// @ts-ignore
import OktaJwtVerifier from "@okta/jwt-verifier";

const requestId = expressRequestId();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: "https://dev-550216.okta.com/oauth2/default",
});

export function oktaAuth(req: Request, res: Response, next: NextFunction) {
  const expectedAudience = "api://default";
  const authHeader = req.headers.authorization || "";
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    console.log("No match found for Auth Header");
    res.status(401);
    return next("Unauthorized");
  }

  console.log(`oktaAuth: Bearer Token found`);

  const accessToken = match[1];

  console.log(`Access Token: ${accessToken}`);

  return oktaJwtVerifier
    .verifyAccessToken(accessToken, expectedAudience)
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
