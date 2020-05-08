import bodyParser from "body-parser";

const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

export const rootLevelMiddleware = [urlEncodedParser, jsonParser];
