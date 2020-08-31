import { APIGatewayProxyEvent, Context } from "aws-lambda";

export async function get(_event: APIGatewayProxyEvent, _context: Context) {
    return {
      headers: { "Content-Type": "application/json" },
      statusCode: 200,
      body: JSON.stringify({ data: "hello from lambda" }),
    };
  }