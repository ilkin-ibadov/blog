'use client';

import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";

interface SendButtonProps {
  label?: string;
}

export function SendButton({ label = "Send" }: SendButtonProps) {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  return (
    <button
      type="submit"
      className={`w-full py-2 px-4 font-semibold rounded-lg transition ${current.contactButton}`}
    >
      {label}
    </button>
  );
}