import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import CopilotChat from './components/CopilotChat.component';

const App: FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CopilotChat />
      <ToastContainer
        position="top-center"
        limit={1}
        autoClose={1500}
        closeOnClick
        pauseOnHover={false}
        closeButton={false}
      />
    </QueryClientProvider>
  );
};

export default App;
