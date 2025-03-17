import LoginForm from '@/components/forms/login-form';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">ログイン</h1>
        <LoginForm />
      </div>
    </div>
  );
}
