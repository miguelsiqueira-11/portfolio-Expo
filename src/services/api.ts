const BASE = process.env.EXPO_PUBLIC_API_URL ?? 'https://api-curriculo-rosy.vercel.app';

export async function getJson<T>(path: string): Promise<T> {
  const url = `${BASE}${path}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const resposta = await fetch(url, { signal: controller.signal });
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status} em ${url}`);
    return await resposta.json();
  } catch (e: any) {
    if (e?.name === 'AbortError') throw new Error(`Tempo esgotado em ${url}`);
    throw new Error(e?.message ?? `Falha em ${url}`);
  } finally {
    clearTimeout(timer);
  }
}