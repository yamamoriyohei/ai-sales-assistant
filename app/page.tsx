import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">AI営業インテリジェンス</h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        顧客企業の情報収集から提案書作成まで自動化し、営業活動を効率化します
      </p>
      
      <div className="flex gap-4">
        <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          ログイン
        </Link>
        <Link href="/register" className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
          新規登録
        </Link>
      </div>
    </main>
  );
}
