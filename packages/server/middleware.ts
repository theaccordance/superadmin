import expressRequestId from "express-request-id";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

const requestId = expressRequestId();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

export const rootLevelMiddleware = [
  compression(),
  cors(),
  requestId,
  urlEncodedParser,
  jsonParser,
  morgan("combined"),
];
