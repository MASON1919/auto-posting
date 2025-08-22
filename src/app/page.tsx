import React from 'react';

// 아이콘을 위한 SVG 컴포넌트들
// React.FC (Functional Component) 타입을 명시하여 이 함수가 React 컴포넌트임을 알립니다.
const PaperClipIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.122 2.122l7.81-7.81" />
  </svg>
);

const PaperAirplaneIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);


const MainPage: React.FC = () => {
  // 나중에 상태를 추가할 경우, 아래와 같이 타입을 지정할 수 있습니다.
  // const [prompt, setPrompt] = React.useState<string>('');

  return (
    <div className="bg-gray-900 text-white h-screen flex">
      {/* 왼쪽 사이드바 */}
      <aside className="w-64 bg-gray-800 p-4">
        <div className="font-bold text-xl mb-6">Project AI Blog</div>
        {/* 사이드바 항목들은 나중에 이곳에 추가됩니다. */}
        <nav>
          <ul>
            {/* 예시: 
            <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">새 포스팅</li>
            <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">내 포스팅</li> 
            */}
          </ul>
        </nav>
      </aside>

      {/* 메인 컨텐츠 영역 */}
      <main className="flex-1 flex flex-col">
        {/* 상단 헤더: 로그인/회원가입 버튼 */}
        <header className="flex justify-end p-4 border-b border-gray-700">
          <div className="space-x-2">
            <button className="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-lg text-sm font-semibold">
              로그인
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg text-sm font-semibold">
              회원가입
            </button>
          </div>
        </header>

        {/* 컨텐츠 표시 영역 */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="text-center max-w-2xl mx-auto mt-20">
            <h1 className="text-4xl font-bold tracking-tight">AI Blog Post Generator</h1>
            <p className="mt-4 text-lg text-gray-400">
              블로그 포스팅의 주제나 이미지를 알려주세요.
              <br />
              AI가 초안을 작성하여 당신의 시간을 아껴드립니다.
            </p>
          </div>
          {/* AI가 생성한 블로그 포스팅은 나중에 이곳에 표시됩니다. */}
        </div>

        {/* 하단 프롬프트 입력 영역 */}
        <div className="p-4 border-t border-gray-700">
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-2 flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full">
              <PaperClipIcon />
            </button>
            <input
              type="text"
              placeholder="블로그 주제를 입력하거나 이미지를 업로드하세요..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500"
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
            />
            <button className="p-2 text-gray-400 hover:text-white bg-gray-700 rounded-full">
              <PaperAirplaneIcon />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;