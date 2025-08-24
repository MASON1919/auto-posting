'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// react-icons 라이브러리에서 Heroicons 아이콘들을 가져옵니다. (경로: /hi)
import { HiOutlineHome, HiOutlinePencilSquare, HiOutlineCog6Tooth } from 'react-icons/hi2';

// 각 네비게이션 아이템의 타입을 정의합니다.
// icon 타입이 라이브러리 아이콘에 맞게 간단해졌습니다.
type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType; // 아이콘 컴포넌트의 타입을 ElementType으로 지정
};

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  // navItems 배열의 icon 부분을 react-icons에서 가져온 컴포넌트로 교체합니다.
  const navItems: NavItem[] = [
    { name: '팔레트', href: '/', icon: HiOutlineHome },
    { name: '새 포스팅 작성', href: '/new-post', icon: HiOutlinePencilSquare },
    { name: '설정', href: '/settings', icon: HiOutlineCog6Tooth },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col">
      {/* 로고 영역 */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Pixel Palette</h1>
      </div>

      {/* 네비게이션 메뉴 영역 */}
      <nav className="flex-1 p-2 space-y-1">
        {navItems.map((item) => (
          <Link href={item.href} key={item.name}>
            <div
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                pathname === item.href
                  ? 'bg-blue-600 text-white' // 활성화된 메뉴 스타일
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white' // 비활성화된 메뉴 스타일
              }`}
            >
              <item.icon className="h-6 w-6 mr-3" />
              <span className="font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>

      {/* 하단 사용자 프로필 영역 (예시) */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-600 mr-3"></div>
          <div>
            <p className="font-semibold text-sm">사용자 이름</p>
            <p className="text-xs text-gray-400">로그아웃</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;