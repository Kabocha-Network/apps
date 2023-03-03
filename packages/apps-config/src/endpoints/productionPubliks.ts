// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0


import type { EndpointOption } from './types';
import { nodesKabochaSVG, nodesEdgewareWhitePNG } from '../ui/logos/nodes';



import { expandEndpoints } from './util';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint

// alphabetical based on chain name

export const prodChainPubliks: EndpointOption[] = [

    {
      info: 'kabocha',
      // homepage: 'https://kabocha.network',
      paraId: 2113,
     
      providers: {
        JelliedOwl: 'wss://kabocha.jelliedowl.com',
      }, 
      text: 'Kabocha Parachain (KSM)',
      ui: {
        color: '#224851',
        logo: nodesKabochaSVG
      }
    },

    {
      dnslink: 'edgeware',
      info: 'edgeware',
      text:  'Edgeware', 
      providers: {
        JelliedOwl: 'wss://edgeware.jelliedowl.net',
        OnFinality: 'wss://edgeware.api.onfinality.io/public-ws'
      },
      ui: {
        color: '#224851',
        logo: nodesEdgewareWhitePNG
      }
    },
]

export const networkPubliks: EndpointOption = {
 // dnslink: 'publiks',
 
  info: 'publiks',
  text: 'Publiks',
  providers: {
   // JelliedOwl:'wss://popart1.jelliedowl.com', 
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
  ...prodChainPubliks,
]
};
