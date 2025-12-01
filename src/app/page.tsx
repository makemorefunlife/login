export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-zinc-50">
            Clerk 인증이 설정되었습니다!
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            위쪽 헤더에서 로그인하거나 회원가입할 수 있습니다.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
              시작하기
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              오른쪽 상단의 로그인 또는 회원가입 버튼을 클릭하여 시작하세요.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

