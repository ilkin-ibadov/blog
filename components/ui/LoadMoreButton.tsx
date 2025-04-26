'use client'

import { useThemeStore } from '@/lib/store/theme'
import { colors } from '@/lib/constants/variables'

type LoadMoreButtonProps = {
  onClick: () => void;
};

export default function LoadMoreButton({ onClick }: LoadMoreButtonProps) {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  return (
    <div className="flex justify-center mt-8 mb-10">
      <button
        onClick={onClick}
        className={`px-5 py-3 rounded-md border transition ${current.loadMoreButtonBtn}`}
      >
        View All Post
      </button>
    </div>
  );
}