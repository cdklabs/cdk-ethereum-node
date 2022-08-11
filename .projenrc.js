// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  name: 'cdk-ethereum-network',
  authorName: 'Marc Gozali, Trinity Key',
  description: 'CDK construct to deploy an Ethereum public network running on Amazon Managed Blockchain',
  license: 'MIT-0',
  copyrightOwner: 'Amazon.com, Inc. or its affiliates. All Rights Reserved.',
  defaultReleaseBranch: 'main',
  repositoryUrl: 'https://github.com/aws-samples/cdk-ethereum-network',
  cdkVersion: '2.33.0',
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  peerDeps: [
    'constructs',
    'aws-cdk-lib',
  ],
  devDeps: [
    'cdk-nag',
  ],
  npmignore: [
    '*.md',
    '.gitattributes',
    '.jsii',
  ],
  publishToPypi: {
    distName: 'cdk-ethereum-network',
    module: 'cdk_ethereum_network',
  },
  keywords: [
    'aws',
    'awscdk',
    'blockchain',
    'cdk',
    'ethereum',
    'ethereum-network',
    'managedblockchain',
    'aws::managedblockchain',
    'aws-managedblockchain',
  ],
});

project.synth();
