// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * Regions where Managed Blockchain is supported, for details see
 * https://aws.amazon.com/managed-blockchain/pricing/hyperledger/
*/
export const SUPPORTED_REGIONS = [
  'ap-northeast-1',
  'ap-northeast-2',
  'ap-southeast-1',
  'eu-west-1',
  'eu-west-2',
  'us-east-1',
];

/**
 * Map of supported regions to their availabilty zones
 */
export const SUPPORTED_AVAILABILITY_ZONES: Record<string, Array<string>> = {
  'ap-northeast-1': [
    'ap-northeast-1a',
    'ap-northeast-1b',
    'ap-northeast-1c',
  ],
  'ap-northeast-2': [
    'ap-northeast-2a',
    'ap-northeast-2b',
    'ap-northeast-2c',
    'ap-northeast-2d',
  ],
  'ap-southeast-1': [
    'ap-southeast-1a',
    'ap-southeast-1b',
    'ap-southeast-1c',
  ],
  'eu-west-1': [
    'eu-west-1a',
    'eu-west-1b',
    'eu-west-1c',
  ],
  'eu-west-2': [
    'eu-west-2a',
    'eu-west-2b',
    'eu-west-2c',
  ],
  'us-east-1': [
    'us-east-1a',
    'us-east-1b',
    'us-east-1c',
    'us-east-1d',
    'us-east-1e',
    'us-east-1f',
  ],
};

/**
 * Method that throws an error if provided region is not in the supported list
 */
export function validateRegion(region: string) {
  if (!SUPPORTED_REGIONS.includes(region)) {
    const regionList = SUPPORTED_REGIONS.join(', ');
    throw new Error(`Managed Blockchain is only available in the following regions: ${regionList}.`);
  }
}

/**
 * Method that throws an error if provided availability zone is not in the supported list
 */
export function validateAvailabilityZone(region: string, availabilityZone?: string) {
  const availabililtyZonesForRegion = SUPPORTED_AVAILABILITY_ZONES[region];
  if (typeof availabilityZone === 'undefined' || !availabililtyZonesForRegion.includes(availabilityZone)) {
    const availabilityZoneList = availabililtyZonesForRegion.join(', ');
    throw new Error(`Managed Blockchain in ${region} is only available in the following availability zones: ${availabilityZoneList}.`);
  }
}

