// frontend/src/pages/LoginPage.tsx
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/leads');
  };

  return (
    <div className="login-page">
      <h1>CRM Система</h1>
      <LoginForm onSuccess={handleSuccess} /> {/* ✅ onSuccess, не onLogin */}
    </div>
  );
};

export default LoginPage;

