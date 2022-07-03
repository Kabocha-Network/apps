// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from '../types';
import type { LinkOption } from './types';

import { defaultT } from '../util';
import { createCustom, createDev, createOwn } from './development';
// import { createProduction } from './production';
import { createProductionEdgeware } from './productionEdgeware';
// import { createKusamaRelay, createPolkadotRelay } from './productionRelays';
// import { createTesting } from './testing';
import { createPopArtRelay } from './testingRelays';

import { prodChains, prodRelayKusama, prodRelayPolkadot } from './production';
import { testChains, testRelayRococo, } from './testing';
import { expandEndpoints } from './util';

export { CUSTOM_ENDPOINT_KEY } from './development';
export * from './production';
export * from './testing';

export function createWsEndpoints (t: TFunction = defaultT, firstOnly = false, withSort = true): LinkOption[] {
  return [
    ...createCustom(t),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.prod.edgeware', 'Edgeware', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    }, 
    ...createProductionEdgeware(t, firstOnly, withSort),
    {
      isSpaced: true,
      text: t('rpc.header.polkadot.relay', 'Polkadot & parachains', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...expandEndpoints(t, [prodRelayPolkadot], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.kusama.relay', 'Kusama & parachains', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...expandEndpoints(t, [prodRelayKusama], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.popart.relay', 'Test Pop-Art & parachains', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...createPopArtRelay(t, firstOnly, withSort),
    
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.rococo.relay', 'Test Rococo & parachains', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...expandEndpoints(t, [testRelayRococo], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.polkadot.relay', 'Polkadot & parachains', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
   // ...createPolkadotRelay(t, firstOnly, withSort),
    ...expandEndpoints(t, prodChains, firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.kusama.relay', 'Kusama & parachains', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...expandEndpoints(t, testChains, firstOnly, withSort),
    {
      isDevelopment: true,
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.dev', 'Development', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...createDev(t),
    ...createOwn(t)
  ].filter(({ isDisabled }) => !isDisabled);
}
