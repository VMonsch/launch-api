const https = require("https");

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
  const requestGetAllEntries = `${CS_CDN}/content_types/${requestedContentType}/entries?environment=${CS_ENVIRONMENT}`;

  console.log(`Will query ${requestGetAllEntries}`);

  https.get(requestGetAllEntries, getAllOptions, (getAllResponse) => {
    let getAllResponseData = "";

    getAllResponse.on("data", (getAllResponseChunk) => {
        getAllResponseData += getAllResponseChunk;
    });

    getAllResponse.on("end", () => {
      console.log(getAllResponseData);
      outgoingResponse.status(200).json(getAllResponseData);
    });
  });
}
