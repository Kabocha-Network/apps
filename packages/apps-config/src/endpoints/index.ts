


// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction, TOptions } from '../types';
import type { LinkOption } from './types';

import { createCustom, createDev, createOwn } from './development';
import { prodChains, prodRelayKusama, prodRelayPolkadot, prodChainPubliks } from './production';
import { testChains, testRelayRococo, testRelayWestend } from './testing';
import { expandEndpoints } from './util';
import { testRelayPopArt } from './testingRelayPopArt';

export { CUSTOM_ENDPOINT_KEY } from './development';
export * from './production';
export * from './testing';

function defaultT (keyOrText: string, text?: string, options?: TOptions): string {
  return (
    (
      options &&
      options.replace &&
      options.replace.host
    ) ||
    text ||
    keyOrText
  );
}

export function createWsEndpoints (t: TFunction = defaultT, firstOnly = false, withSort = true): LinkOption[] {
  return [
    ...createCustom(t),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.publiks', 'Network Publics', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    }, 
    ...expandEndpoints(t, prodChainPubliks, firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.popart.relay', 'Publik Testnets', { ns: 'apps-config' }),
      textBy: '',
      value: '',
      ui: {},
    },
    ...expandEndpoints(t, [testRelayPopArt], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.polkadot.relay', 'Polkadot & parachains', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, [prodRelayPolkadot], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.kusama.relay', 'Kusama & parachains', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, [prodRelayKusama], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.westend.relay', 'Test Westend & parachains', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, [testRelayWestend], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.rococo.relay', 'Test Rococo & parachains', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, [testRelayRococo], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.live', 'Substrate Based Networks', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, prodChains, firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.test', 'Test networks', { ns: 'apps-config' }),
      textBy: '',
      ui: {},
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
      ui: {},
      value: ''
    },
    ...createDev(t),
    ...createOwn(t)
  ].filter(({ isDisabled }) => !isDisabled);
}


// // Copyright 2017-2023 @polkadot/apps-config authors & contributors
// // SPDX-License-Identifier: Apache-2.0

// import type { TFunction, TOptions } from '../types';
// import type { LinkOption } from './types';

// import { createCustom, createDev, createOwn } from './development';
// // import { createProduction } from './production';
// import { createProductionEdgeware } from './productionEdgeware';
// // import { createKusamaRelay, createPolkadotRelay } from './productionRelays';
// // import { createTesting } from './testing';
// // import { createPopArtRelay} from './testingRelays';

// import { prodChains, prodRelayKusama, prodRelayPolkadot } from './production';
// import { testChains, testRelayRococo, testRelayPopArt } from './testing';
// import { expandEndpoints } from './util';

// export { CUSTOM_ENDPOINT_KEY } from './development';
// export * from './production';
// export * from './testing';

// function defaultT (keyOrText: string, text?: string, options?: TOptions): string {
//   return (
//     (
//       options &&
//       options.replace &&
//       options.replace.host
//     ) ||
//     text ||
//     keyOrText
//   );
// }

// export function createWsEndpoints (t: TFunction = defaultT, firstOnly = false, withSort = true): LinkOption[] {
//   return [
//     ...createCustom(t),
//     {
//       isDisabled: false,
//       isHeader: true,
//       text: t('rpc.prod.edgeware', 'Network Publics', { ns: 'apps-config' }),
//       textBy: '',
//       value: ''
//     }, 
//     ...createProductionEdgeware(t, firstOnly, withSort),

//     {
//       isDisabled: false,
//       isHeader: true,
//       text: t('rpc.header.popart.relay', 'Publik Testnets', { ns: 'apps-config' }),
//       textBy: '',
//       value: ''
//     },
//     ...expandEndpoints(t, [testRelayPopArt], firstOnly, withSort),
  
//     {
//       isDisabled: false,
//       isHeader: true,
//       isSpaced: true,
//       text: t('rpc.header.polkadot.relay', 'Polkadot & parachains', { ns: 'apps-config' }),
//       textBy: '',
//       ui: {},
//       value: ''
//     },
//     ...expandEndpoints(t, [prodRelayPolkadot], firstOnly, withSort),

//     {
//       isDisabled: false,
//       isHeader: true,
//       text: t('rpc.header.kusama.relay', 'Kusama & parachains', { ns: 'apps-config' }),
//       textBy: '',
//       ui: {},
//       value: ''
//     },
//     ...expandEndpoints(t, [prodRelayKusama], firstOnly, withSort),

//     {
//       isDisabled: false,
//       isHeader: true,
//       isSpaced: true,
//       text: t('rpc.header.westend.relay', 'Test Westend & parachains', { ns: 'apps-config' }),
//       textBy: '',
//       ui: {},
//       value: ''
//     },
//     ...expandEndpoints(t, [testRelayWestend], firstOnly, withSort),

//     {
//       isDisabled: false,
//       isHeader: true,
//       text: t('rpc.header.rococo.relay', 'Test Rococo & parachains', { ns: 'apps-config' }),
//       textBy: '',
//       ui: {},
//       value: ''
//     },
//     ...expandEndpoints(t, [testRelayRococo], firstOnly, withSort),
    
//     {
//       isDisabled: false,
//       isHeader: true,
//       isSpaced: true,
//       text: t('rpc.header.polkadot.relay', 'Substrate based networks', { ns: 'apps-config' }),
//       textBy: '',
//       ui: {},
//       value: ''
//     },
//    // ...createPolkadotRelay(t, firstOnly, withSort),
//     ...expandEndpoints(t, prodChains, firstOnly, withSort),
//     {
//       isDisabled: false,
//       isHeader: true,
//       text: t('rpc.header.kusama.relay', 'Testnets', { ns: 'apps-config' }),
//       textBy: '',
//       ui: {},
//       value: ''
//     },
//     ...expandEndpoints(t, testChains, firstOnly, withSort),
//     {
//       isDevelopment: true,
//       isDisabled: false,
//       isHeader: true,
//       isSpaced: true,
//       text: t('rpc.header.dev', 'Development', { ns: 'apps-config' }),
//       textBy: '',
//       ui: {},
//       value: ''
//     },
//     ...createDev(t),
//     ...createOwn(t)
//   ].filter(({ isDisabled }) => !isDisabled);
// }