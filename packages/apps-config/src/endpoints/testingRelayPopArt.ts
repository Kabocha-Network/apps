// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

import { POPART_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testParasPopArt: EndpointOption[] = [
  {
    info: 'kabocha',
    homepage: 'https://kabocha.network',
    paraId: 2001,
    text: 'Kabocha Soupcan',
    ui: {},
    providers: {
      JelliedOwl: 'wss://soupcan1.jelliedowl.com',
      
      // Parity: 'wss://westmint-rpc.polkadot.io',
      // 'Patract Elara': 'wss://pub.elara.patract.io/westmint'
    },
    teleport: [-1]
  }, 
  
  
];

export const testParasPopArtCommon: EndpointOption[] = [
 
];

export const testRelayPopArt: EndpointOption = {
    dnslink: 'popart',
    genesisHash: POPART_GENESIS,
    info: 'popart',
    text: 'PopArt',
    providers: {
      JelliedOwl:'wss://popart1.jelliedowl.com', 
     // Subverse:'wss://pop-art-rpc.subverse.network', 
      //Parity: 'wss://westend-rpc.polkadot.io',
      //'Patract Elara': 'wss://pub.elara.patract.io/westend',
      //OnFinality: 'wss://westend.api.onfinality.io/public-ws',
      //Pinknode: 'wss://rpc.pinknode.io/westend/explorer',
      //'light client': 'light://substrate-connect/westend'
      // 'NodeFactory(Vedran)': 'wss://westend.vedran.nodefactory.io/ws', // https://github.com/polkadot-js/apps/issues/5580
    },
    ui: {},
  teleport: [1000, 1002],
  linked: [
    ...testParasPopArtCommon,
    ...testParasPopArt
  ]
};
