export const handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event, null, 2)}`);
  console.log(`CONTEXT: ${JSON.stringify(context, null, 2)}`);

  return "Hi! This is a demonstration of AWS LocalStack!!";
};
