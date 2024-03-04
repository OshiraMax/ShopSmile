import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'mobx-react';

import { Navigator } from './navigation/Navigator';
import { stores } from './stores/stores';

export default function App() {
  return (
    <Provider {...stores}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

