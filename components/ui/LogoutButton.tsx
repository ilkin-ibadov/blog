"use client";

import { createClient } from "@/utils/supabase/client";
import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";

export default function LogoutButton() {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  const buttonClass = `px-4 py-2 text-sm font-normal rounded-[5px] hover:opacity-90 inline-block transition-colors duration-200 ${current.signInBtnBg} ${current.signInBtnText}`;

  return (
    <button onClick={handleLogout} className={`ml-[36px] ${buttonClass}`}>
      Logout
    </button>
  );
}
