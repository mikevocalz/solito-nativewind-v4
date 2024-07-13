import ReactNativeFeatureFlags from "react-native/Libraries/ReactNative/ReactNativeFeatureFlags";
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// enable the JS-side of the w3c PointerEvent implementation
ReactNativeFeatureFlags.shouldEmitW3CPointerEvents = () => true;

// enable hover events in Pressibility to be backed by the PointerEvent implementation.
// shouldEmitW3CPointerEvents should also be true
ReactNativeFeatureFlags.shouldPressibilityUseW3CPointerEventsForHover = () =>
  true;


// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);