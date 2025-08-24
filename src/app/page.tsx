import Sidebar from '@/components/sidebar';
import PaletteGrid from '@/components/paletteGrid';

export default function Home() {
  return (
    <div>

      {/* 3. 사이드바가 차지하는 공간만큼 메인 컨텐츠에 왼쪽 여백을 줍니다. */}
      <main className="ml-32 p-8">
        
        <PaletteGrid />
      </main>
    </div>
  );
}