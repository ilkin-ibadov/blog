'use client';

import { useThemeStore } from "@/lib/store/theme";
import { colors } from "@/lib/constants/variables";
import { motion } from "framer-motion";

type Section = {
  title: string;
  content: string;
};

interface InfoPageProps {
  title: string;
  updatedDate: string;
  sections: Section[];
}

export default function InfoPage({ title, updatedDate, sections }: InfoPageProps) {
  const { isDark } = useThemeStore();
  const current = isDark ? colors.dark : colors.light;

  return (
    <main className={`container px-4 py-16 max-w-3xl mx-auto ${current.infoCardText}`}>
      <section className="text-center mb-14">
        <h1 className={`text-5xl font-bold mb-4 tracking-tight ${current.infoPageTitle}`}>
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">{updatedDate}</p>
      </section>

      <section className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`
              relative overflow-hidden rounded-2xl border border-border/5
              shadow-md p-6 transition-all duration-300 hover:shadow-xl
              group backdrop-blur-sm ${current.infoCardText}
            `}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`
                  h-1.5 w-6 rounded-full transition-all group-hover:w-8
                  ${current.infoPageRound}
                `}
              />
              <h2 className={`text-xl font-semibold tracking-tight ${current.infoPageHeading}`}>
                {section.title}
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              {section.content}
            </p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}