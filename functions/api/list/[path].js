import https from "https";
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

  const getAllResponse = await fetch(getAllURL);
  const getAllResponseJsin = await getAllResponse.json();
  outgoingResponse.status(200).json(getAllResponseJsin);

  //   https.get(requestGetAllEntries, getAllOptions, (getAllResponse) => {
  //     let getAllResponseString = "";

  //     getAllResponse.on("data", (getAllResponseChunk) => {
  //         getAllResponseString += getAllResponseChunk;
  //     });

  //     getAllResponse.on("end", () => {
  //       const getAllResponseJson = JSON.parse(getAllResponseString);
  //       console.log(getAllResponseJson);
  //       outgoingResponse.status(200).json(getAllResponseJson);
  //     });
  //   });
}
