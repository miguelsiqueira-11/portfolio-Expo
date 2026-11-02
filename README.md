# Portfólio / Currículo — React Native + Expo

App mobile de currículo e portfólio de Luiz Miguel Siqueira de Mendonça, desenvolvido para a disciplina de Programação para Dispositivos Móveis.

## Telas
- **Home**: foto, nome, cargo, resumo e atalhos (GitHub, e-mail e PDF)
- **Sobre**: resumo, habilidades, tecnologias usadas e a funcionalidade extra
- **Experiência Acadêmica**
- **Experiência Profissional**
- **Projetos**: com link para o repositório de cada projeto

A navegação usa o **Expo Router** (abas).

## Back-end
Todos os dados (pessoa, formações, experiências, projetos e habilidades) vêm de uma API REST própria feita com Express + PostgreSQL (Neon), publicada no Vercel:

https://api-curriculo-rosy.vercel.app

Rota usada pelo app: `GET /pessoas/1/completo`

## Funcionalidade extra
**Exportação do currículo em PDF**: o app gera um PDF com os dados vindos da API (`expo-print`) e abre o menu de compartilhamento do celular (`expo-sharing`).

## Tecnologias
- React Native
- Expo
- Expo Router
- TypeScript
- EAS Update
- expo-print e expo-sharing
- expo-linear-gradient
- Google Fonts (Poppins)

## Como rodar

npm install
npx expo start

Escaneie o QR code com o app Expo Go.

## Links
- App publicado no Expo: https://expo.dev/preview/update?message=Visual%2C+PDF+e+corre%C3%A7%C3%A3o+dos+links&updateRuntimeVersion=1.0.0&createdAt=2026-11-02T00%3A33%3A17.107Z&slug=exp&projectId=e90a1598-aea5-4ca6-9690-c4eccdac1c7f&group=eed3bab3-4d6f-4cc3-b794-edde831f6c72
- API: https://api-curriculo-rosy.vercel.app