import { encrypt } from "../../../utils";
const apiPath = "https://luunify-python.herokuapp.com/";

export default async (req, res) => {
  const email = req.query.email;

  const response = await fetch(email ? `${apiPath}${email}` : apiPath, {
    method: req.method,
    body: req.body ? encryptKeys(req.body) : undefined,
    headers: { "Content-Type": "application/json" },
  });

  res.status(200).json(await response.json());
};

function encryptKeys(body) {
  const json = JSON.parse(body);

  if (json.apiKey) {
    return JSON.stringify({
      ...json,
      apiKey: encrypt(json.apiKey),
      apiSecret: encrypt(json.apiSecret),
    });
  }

  return body;
}
