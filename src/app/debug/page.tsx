export default function DebugPage() {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const secretKey = process.env.CLERK_SECRET_KEY ? '설정됨 (보안상 표시 안 함)' : '설정 안 됨';

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Clerk 환경 변수 확인</h1>
      <div className="space-y-2">
        <p>
          <strong>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:</strong>{' '}
          {publishableKey ? (
            <span className="text-green-600">설정됨 ({publishableKey.substring(0, 20)}...)</span>
          ) : (
            <span className="text-red-600">설정 안 됨</span>
          )}
        </p>
        <p>
          <strong>CLERK_SECRET_KEY:</strong> <span className={process.env.CLERK_SECRET_KEY ? 'text-green-600' : 'text-red-600'}>{secretKey}</span>
        </p>
      </div>
      {!publishableKey && (
        <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
          <p className="font-bold">⚠️ 환경 변수가 설정되지 않았습니다!</p>
          <p className="mt-2">프로젝트 루트에 .env.local 파일을 만들고 다음 내용을 추가하세요:</p>
          <pre className="mt-2 p-2 bg-gray-100 rounded text-sm">
{`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_여기에_키를_입력
CLERK_SECRET_KEY=sk_test_여기에_키를_입력`}
          </pre>
        </div>
      )}
    </div>
  );
}

