import fetch from "node-fetch";

export default async function handler(incomingRequest, outgoingResponse) {
  const CS_API_HOST = process.env.CONTENTSTACK_API_HOST;
  const CS_CDN = process.env.CONTENTSTACK_CDN;
  const CS_API_KEY = process.env.CONTENTSTACK_API_KEY;
  const CS_DELIVERY_TOKEN = process.env.CONTENTSTACK_DELIVERY_TOKEN;
  const CS_ENVIRONMENT = process.env.CONTENTSTACK_ENVIRONMENT;

  const getAllOptions = {
    headers: {
      api_key: CS_API_KEY,
      access_token: CS_DELIVERY_TOKEN,
    },
  };

  const requestedContentType = incomingRequest.query.path;
  const getAllURL = `${CS_CDN}/content_types/${requestedContentType}/entries?environment=${CS_ENVIRONMENT}`;

  console.log(`Will query ${getAllURL}`);

  const getAllResponse = await fetch(getAllURL, getAllOptions);
  const getAllResponseJson = await getAllResponse.json();
  outgoingResponse.status(getAllResponse.status).json(getAllResponseJson);
}
