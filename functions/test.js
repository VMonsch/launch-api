export default function handler(request, response) {
    const CS_API_HOST = process.env.CONTENTSTACK_API_HOST;
    const CS_CDN = process.env.CONTENTSTACK_CDN;
    const CS_API_KEY = process.env.CONTENTSTACK_API_KEY;
    const CS_DELIVERY_TOKEN = process.env.CONTENTSTACK_DELIVERY_TOKEN;
    const CS_ENVIRONMENT = process.env.CONTENTSTACK_ENVIRONMENT;

    response.status(200).json({
        howdy: "hello",
        body: request.body,
        query: request.query,
        cookies: request.cookies,
    });
}