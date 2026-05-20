'use client';
import { useSyncExternalStore } from 'react';
import { useTheme } from './ThemeProvider';
import type { SkillEntry } from '@/data/skills';

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true, // true on client
    () => false, // false on server
  );
}

export function SkillIcon({ skill }: { skill: SkillEntry }) {
  const mounted = useIsMounted();
  const { theme } = useTheme();

  if (!skill.themeAdaptive) return <skill.icon size={64} color={skill.color} />;
  if (!mounted) return <skill.icon size={64} color='#888888' />;
  const color = theme === 'dark' ? '#FFFFFF' : '#111827';

  return <skill.icon size={64} color={color} />;
}
