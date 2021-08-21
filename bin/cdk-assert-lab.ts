#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkAssertLabStack } from '../lib/cdk-assert-lab-stack';

const app = new cdk.App();
new CdkAssertLabStack(app, 'CdkAssertLabStack');
