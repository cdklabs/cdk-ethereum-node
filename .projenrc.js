// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  name: '@cdklabs/cdk-ethereum-node',
  authorName: 'Amazon Web Services',
  authorUrl: 'https://aws.amazon.com',
  description: 'CDK construct to deploy an Ethereum node running on Amazon Managed Blockchain',
  license: 'MIT-0',
  copyrightOwner: 'Amazon.com, Inc. or its affiliates. All Rights Reserved.',
  defaultReleaseBranch: 'main',
  repositoryUrl: 'https://github.com/cdklabs/cdk-ethereum-node.git',
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
  npmAccess: 'public',
  publishToPypi: {
    distName: 'cdklabs.cdk-ethereum-node',
    module: 'cdklabs.cdk_ethereum-node',
  },
  publishToMaven: {
    javaPackage: 'io.github.cdklabs.cdkethereumnode',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
    mavenArtifactId: 'cdk-ethereum-node',
    mavenGroupId: 'io.github.cdklabs',
  },
  publishToNuget: {
    dotNetNamespace: 'Cdklabs.CdkEthereumNode',
    packageId: 'Cdklabs.CdkEthereumNode',
  },
  keywords: [
    'aws',
    'awscdk',
    'blockchain',
    'cdk',
    'ethereum',
    'ethereum-node',
    'ethereum-network',
    'managedblockchain',
    'aws::managedblockchain',
    'aws-managedblockchain',
  ],
});

project.synth();
