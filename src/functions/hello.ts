export async function get(event: any) {
  return {
    headers: { 'Content-Type': 'application/json' },
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello Lambda Function', event }),
  };
}
