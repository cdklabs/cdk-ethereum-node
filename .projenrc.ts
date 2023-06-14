// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  name: '@cdklabs/cdk-ethereum-node',
  projenrcTs: true,
  author: 'Amazon Web Services',
  authorAddress: 'https://aws.amazon.com',
  description: 'CDK construct to deploy an Ethereum node running on Amazon Managed Blockchain',
  license: 'MIT-0',
  copyrightOwner: 'Amazon.com, Inc. or its affiliates. All Rights Reserved.',
  defaultReleaseBranch: 'main',
  repositoryUrl: 'https://github.com/cdklabs/cdk-ethereum-node.git',
  cdkVersion: '2.24.1',
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
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToPypi: {
    distName: 'cdklabs.cdk-ethereum-node',
    module: 'cdklabs.cdk_ethereum_node',
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
    'managedblockchain',
    'aws::managedblockchain',
    'aws-managedblockchain',
  ],
});

project.synth();
