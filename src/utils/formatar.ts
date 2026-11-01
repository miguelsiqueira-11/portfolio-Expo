export function formatarData(iso: string | null): string {
  if (!iso) return 'Atual';
  const d = new Date(iso);
  return `${String(d.getUTCMonth() + 1).padStart(2, '0')}/${d.getUTCFullYear()}`;
}