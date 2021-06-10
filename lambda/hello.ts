// we are going to call this function via APIGatewayEvent which is used for http requests
exports.handler = async function (event: AWSLambda.APIGatewayEvent) {
  // this is a neat trick to prettify the console log
  console.log("request:", JSON.stringify(event, null, 2));
  console.log("isProduction?", process.env.isProduction);

  // this is what calling this lambda function will return
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, egghead friends!`,
  };
};
