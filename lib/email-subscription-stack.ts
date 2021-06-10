import * as sns from "@aws-cdk/aws-sns";
import * as subs from "@aws-cdk/aws-sns-subscriptions";
import * as sqs from "@aws-cdk/aws-sqs";
import * as cdk from "@aws-cdk/core";

export class EmailSubscriptionStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // we are going to call this function via APIGatewayEvent which is used for http requests
    exports.handler = async function (event: AWSLambda.APIGatewayEvent) {
      // this is a neat trick to prettify the console log
      console.log("request:", JSON.stringify(event, null, 2));

      // this is what calling this lambda function will return
      return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Hello, egghead friends!`,
      };
    };
  }
}
