// Import libs react router dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import libs react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Import pages
import { Home, Signin, Signup } from '@/pages';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </QueryClientProvider>
);

export default App;
