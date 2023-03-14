export default function handler(request, response) {
    response.status(200).json({
        howdy: "hello",
        body: request.body,
        query: request.query,
        cookies: request.cookies,
    });
}