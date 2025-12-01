# Vercel 배포 가이드

## 1단계: GitHub 저장소 생성 및 연결

### GitHub에서 저장소 만들기
1. https://github.com 에 로그인
2. 오른쪽 상단의 "+" 버튼 클릭 → "New repository" 선택
3. 저장소 이름 입력 (예: `clerktest`)
4. "Public" 또는 "Private" 선택
5. "Create repository" 클릭
6. 저장소 URL 복사 (예: `https://github.com/사용자명/clerktest.git`)

### 로컬에서 GitHub에 연결하기
터미널에서 다음 명령어 실행:

```bash
# 원격 저장소 추가 (URL은 위에서 복사한 것을 사용)
git remote add origin https://github.com/사용자명/저장소명.git

# 코드 푸시
git push -u origin master
```

## 2단계: Vercel에서 프로젝트 배포

### Vercel 계정 만들기
1. https://vercel.com 접속
2. "Sign Up" 클릭
3. GitHub 계정으로 로그인 (권장)

### 프로젝트 Import
1. Vercel 대시보드에서 "Add New..." → "Project" 클릭
2. 방금 만든 GitHub 저장소 선택
3. "Import" 클릭

### 환경 변수 설정
Vercel 프로젝트 설정에서 "Environment Variables" 섹션으로 이동하여 다음 변수 추가:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk 대시보드에서 가져온 Publishable Key
- `CLERK_SECRET_KEY`: Clerk 대시보드에서 가져온 Secret Key

### 배포 완료
"Deploy" 버튼을 클릭하면 자동으로 배포가 시작됩니다!

## 3단계: 자동 배포 설정 (선택사항)

GitHub에 코드를 푸시할 때마다 자동으로 배포되도록 설정되어 있습니다.
`git push`만 하면 Vercel이 자동으로 새 버전을 배포합니다.

