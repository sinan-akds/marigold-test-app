import theme from '@marigold/theme-rui';
import '@marigold/theme-rui/styles.css';
import { MarigoldProvider } from '@marigold/components';
import TestApp from './TestApp';

const App = () => (
  <MarigoldProvider theme={theme}>
    <TestApp />
  </MarigoldProvider>
);

export default App;
