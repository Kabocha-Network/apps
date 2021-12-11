// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { EndpointOption } from './types';

import { POPART_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint

// Based on history, this will expand so keep it as a singular chunk
export function createPopArt (t: TFunction): EndpointOption {
  return {
    dnslink: 'pop-art',
    genesisHash: POPART_GENESIS,
    info: 'pop-art',
    text: t('rpc.pop-art', 'Pop-Art', { ns: 'apps-config' }),
    providers: {
      Decentration:'wss://pop-art-rpc.decentration.org', 
      Subverse:'wss://pop-art-rpc.subverse.network', 
      //Parity: 'wss://westend-rpc.polkadot.io',
      //'Patract Elara': 'wss://pub.elara.patract.io/westend',
      //OnFinality: 'wss://westend.api.onfinality.io/public-ws',
      //Pinknode: 'wss://rpc.pinknode.io/westend/explorer',
      //'light client': 'light://substrate-connect/westend'
      // 'NodeFactory(Vedran)': 'wss://westend.vedran.nodefactory.io/ws', // https://github.com/polkadot-js/apps/issues/5580
    },
    teleport: [1000],
    linked: [
      // (1) system parachains (none available yet)
      // ...
      // (2) common good, leave as second group
      {
        info: 'pop-art',
        paraId: 1000,
        text: t('rpc.pop-art.shell', 'Popmint', { ns: 'apps-config' }),
        providers: {
          Decentration: 'wss://popmint-rpc.decentration.org',
          
          Parity: 'wss://westmint-rpc.polkadot.io',
          'Patract Elara': 'wss://pub.elara.patract.io/westmint'
        },
        teleport: [-1]
      },
      // (3) parachains with id, see Rococo (info here maps to the actual "named icon")
      //
      // NOTE: Added alphabetical based on chain name
     
      {
        info: 'edgeware',
        isUnreachable: true, // https://github.com/polkadot-js/apps/issues/
        homepage: 'https://edgewa.re',
        paraId: 2001,
        text: t('rpc.pop-art.edgeware', 'Edgeware EVM Parachain Testnet', { ns: 'apps-config' }),
        providers: {
          Interlay: 'wss://edgeware-testnet-parachain.subverse.network'
        }
      },
      {
        info: 'kabocha',
        isUnreachable: true, // https://github.com/polkadot-js/apps/issues/
        homepage: 'https://kabocha.network',
        paraId: 2000,
        text: t('rpc.pop-art.kabocha', 'Kabocha Pumpkin Testnet', { ns: 'apps-config' }),
        providers: {
          Decentration: 'wss://pumpkin-testnet.kabocha.network'
        }
      }
    ]
  };
}
