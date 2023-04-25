#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { InteractiveItemSearchDemoServerStack } from "../lib/server-stack";
import { InteractiveItemSearchDemoWebStack } from "../lib/web-stack";
import { InteractiveItemSearchDemoGHAOidcStack } from "../lib/gha-oidc-stack";

const app = new cdk.App();
new InteractiveItemSearchDemoServerStack(
  app,
  "InteractiveItemSearchDemoServerStack"
);
new InteractiveItemSearchDemoWebStack(app, "InteractiveItemSearchDemoWebStack");
new InteractiveItemSearchDemoGHAOidcStack(
  app,
  "InteractiveItemSearchDemoGHAOidcStack"
);