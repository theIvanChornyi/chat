import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CopilotChat from './components/CopilotChat.component';

const App: FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CopilotChat />
    </QueryClientProvider>
  );
};

export default App;
