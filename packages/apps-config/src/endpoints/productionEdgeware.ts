// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { LinkOption } from './types';

import { expandEndpoints } from './util';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint

// alphabetical based on chain name
export function createProductionEdgeware (t: TFunction, firstOnly: boolean, withSort: boolean): LinkOption[] {
  return expandEndpoints(t, [
    
    {
      dnslink: 'edgeware',
      info: 'edgeware',
      text: t('rpc.prod.edgeware', 'Edgeware', { ns: 'apps-config' }),
      providers: {
        'Commonwealth Labs': 'wss://mainnet.edgewa.re',
        OnFinality: 'wss://edgeware.api.onfinality.io/public-ws'
      }
    },
    
    {
      info: 'kabocha',
      homepage: 'https://kabocha.network',
      paraId: 2113,
      text: 'Kabocha Parachain (KSM)',
      providers: {
        JelliedOwl: 'wss://kabocha.jelliedowl.com',
        
        // Parity: 'wss://westmint-rpc.polkadot.io',
        // 'Patract Elara': 'wss://pub.elara.patract.io/westmint'
      }, 
    },
    
  ], firstOnly, withSort);
}
