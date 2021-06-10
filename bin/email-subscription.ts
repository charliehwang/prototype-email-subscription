#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { EmailSubscriptionStack } from '../lib/email-subscription-stack';

const app = new cdk.App();
new EmailSubscriptionStack(app, 'EmailSubscriptionStack');
