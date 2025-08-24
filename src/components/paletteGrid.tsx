'use client';

import React from 'react';

// 1. 팔레트 데이터 타입 정의
type Palette = {
  theme: string;
  colors: string[];
};

// 2. 20개의 팔레트 데이터를 컴포넌트 내부에 배열로 정의
const palettes: Palette[] = [
  { theme: '해질녘 노을', colors: ['#FFD0A4', '#FF9E86', '#FF6281', '#A65E98', '#555189', '#2F374F'] },
  { theme: '고요한 새벽 숲', colors: ['#E0F0E8', '#A0D8B8', '#58B898', '#408070', '#305860', '#203848'] },
  { theme: '여름날의 바다', colors: ['#F0F8FF', '#AEE8FF', '#60D0FF', '#2890E0', '#1860A8', '#083870'] },
  { theme: '벚꽃 엔딩', colors: ['#FFFFFF', '#FFE8F0', '#FFC0D8', '#FFA8C0', '#E080A0', '#705060'] },
  { theme: '가을 단풍길', colors: ['#FFF0D8', '#FFD880', '#FFB040', '#E87038', '#A04028', '#602820'] },
  { theme: '지하 던전', colors: ['#E8E0D8', '#A8A098', '#787068', '#504840', '#383030', '#202028'] },
  { theme: '사이버펑크 네온', colors: ['#F0FFF0', '#A0FFC0', '#40F8A0', '#E040E0', '#8028A0', '#301850', '#101020'] },
  { theme: '마법사의 서재', colors: ['#FFFFE8', '#FFD8A8', '#C0A078', '#806050', '#503840', '#302030'] },
  { theme: '수정 동굴', colors: ['#F0F8FF', '#D0E8FF', '#A0C8FF', '#80A0F0', '#6078D8', '#4050A0'] },
  { theme: '우주 성운', colors: ['#FFFFFF', '#F0A8FF', '#D880F0', '#A050D0', '#4828A0', '#201850', '#000000'] },
  { theme: '잘 익은 딸기', colors: ['#FFFFFF', '#FFF0F0', '#FFD8D8', '#FF8080', '#E04040', '#902020', '#408040'] },
  { theme: '따뜻한 커피 한 잔', colors: ['#FFFFFF', '#E0D0C0', '#C0A898', '#A08070', '#604038', '#402828'] },
  { theme: '빈티지 목재', colors: ['#E8D8C8', '#C8B098', '#A88870', '#886850', '#604838', '#403028'] },
  { theme: '녹슨 금속', colors: ['#D8D8E0', '#A8A8B8', '#888898', '#907870', '#785850', '#584040'] },
  { theme: '라벤더 향기', colors: ['#F8F0FF', '#E0C8FF', '#C8A0FF', '#A078E0', '#7858B8', '#504080'] },
  { theme: '게임보이', colors: ['#C8D8A0', '#80A078', '#486850', '#203028'] },
  { theme: '닌텐도 NES', colors: ['#FFFFFF', '#B8B8B8', '#787878', '#000000', '#FF7878', '#B83838', '#B8B8FF', '#5858F8'] },
  { theme: '차가운 겨울', colors: ['#FFFFFF', '#E8F0F8', '#C0D8E8', '#A0B8D0', '#7890A8', '#586880'] },
  { theme: '따뜻한 모닥불', colors: ['#FFFFE0', '#FFD880', '#FFB040', '#FF8030', '#C85020', '#803018', '#302020'] },
  { theme: '사막의 모래', colors: ['#FFFFF0', '#F0E8D0', '#E0D0A8', '#C8B088', '#A08868', '#786850'] },

];


const PaletteGrid: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">테마별 팔레트</h1>
      
      {/* 3. Tailwind CSS Grid를 사용하여 팔레트 컨테이너 생성 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* 4. .map()을 사용하여 각 팔레트 데이터를 카드로 렌더링 */}
        {palettes.map((palette) => (
          <div key={palette.theme} className="bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-200">
            {/* 팔레트 색상들을 표시하는 영역 */}
            <div className="flex h-24 rounded-md overflow-hidden mb-3">
              {palette.colors.map((color) => (
                <div 
                  key={color} 
                  className="flex-1" 
                  style={{ backgroundColor: color }} 
                />
              ))}
            </div>
            {/* 팔레트 테마 이름 */}
            <h2 className="text-white font-semibold text-center">{palette.theme}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaletteGrid;