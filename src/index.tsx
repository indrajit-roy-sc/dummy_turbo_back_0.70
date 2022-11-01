import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-dummy_turbo_back_0.70' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const DummyTurboBack070Module = isTurboModuleEnabled
  ? require('./NativeDummyTurboBack070').default
  : NativeModules.DummyTurboBack070;

const DummyTurboBack070 = DummyTurboBack070Module
  ? DummyTurboBack070Module
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return DummyTurboBack070.multiply(a, b);
}
