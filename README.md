# 🏨 Grand Stay

Jogo de gerenciamento de hotel para celular. **Original, sem anúncios, sem compras, sem conta e 100% offline.**
O progresso fica salvo só no aparelho.

## Como jogar
- Hóspedes chegam ao lobby. Toque em **Check-in** para colocá-los num quarto livre (a recepcionista faz isso sozinha depois de contratada).
- Ao fim da estadia o quarto fica sujo 🧺: toque nele para limpar (ou contrate uma camareira). A renda é paga no check-out.
- **Tipos de hóspede**
  | | Renda | Estadia | Observação |
  |---|---|---|---|
  | 🧳 Hóspede | x1 | 8s | comum |
  | 👨‍👩‍👧 Família | x1,6 | 12s | |
  | 💼 Executivo | x1,3 | 5s | rápido |
  | 👑 VIP | x4 | 10s | exige quarto ★3 ou mais; o Spa atrai mais VIPs |
- **Hotel**: 12 quartos em 3 andares, cada um com 6 níveis.
- **Equipe**: recepcionista (check-in automático), camareira (limpeza automática) e concierge (+15% de renda por nível).
- **Obras**: saguão ampliado (fila maior e mais chegadas), jardim (+10% de renda por nível) e spa (mais VIPs). Elas permanecem depois de reinaugurar.
- **Eventos**: 🎉 festivais dobram as chegadas por 30s e o 🔔 sino de gorjeta aparece por alguns segundos, então toque rápido.
- **Metas**: 10 conquistas com recompensa em moedas, mais um 🎁 bônus diário com sequência de até 7 dias.
- **Estrelas**: reinaugure o hotel para ganhar +10% de renda permanente por estrela.
- Ao voltar depois de um tempo fora, você recebe uma renda offline (até 2h).
- Ajustes de som e vibração em **Mais → Ajustes**.

## Estrutura
| Arquivo | Função |
|---|---|
| `index.html` | O jogo inteiro (HTML + CSS + JS, sem dependências nem build) |
| `manifest.webmanifest`, `sw.js`, `icon-*.png` | Instalação como app e modo offline (PWA) |
| `privacy.html` | Política de privacidade (necessária para a Play Store) |
| `package.json`, `capacitor.config.json`, `scripts/` | Empacotamento em APK/AAB com Capacitor |
| `.github/workflows/pages.yml` | Publica o site automaticamente no GitHub Pages |

## Jogar / testar
```bash
python3 -m http.server 8000     # abra http://localhost:8000 no navegador (ou no celular, pela rede local)
```

## Publicar o site (GitHub Pages)
1. Faça o merge desta branch em `main`.
2. No GitHub: **Settings → Pages → Source: GitHub Actions**.
3. O workflow publica em `https://<usuario>.github.io/PerfectHotel/`.
4. No Chrome do Android, abra o endereço e use **Menu → Instalar app**.

## Gerar o APK / AAB (Android)
Requisitos no seu PC: Node 20+, JDK 17 e Android Studio.
```bash
npm install
npm run android:add      # cria a pasta android/ (só na primeira vez)
npm run android:sync     # copia o jogo para o projeto Android
npm run android:open     # abre no Android Studio -> Build > Generate Signed Bundle / APK
```
O `appId` está em `capacitor.config.json` (`com.dusax.grandstay`). Troque antes de publicar se quiser outro.
**Guarde a keystore de assinatura e a senha em local seguro:** sem ela você não consegue atualizar o app depois.

Para publicar na Play Store: conta de desenvolvedor, ícone 512px (`icon-512.png`), capturas de tela e o link da política de privacidade
(`https://<usuario>.github.io/PerfectHotel/privacy.html`). Na declaração de dados, marque que o app não coleta dados.

## Licença
Código e arte deste projeto são originais. Defina a licença que preferir antes de publicar.
