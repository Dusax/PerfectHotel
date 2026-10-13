# Grand Stay

Jogo original de gerenciamento de hotel para celular. Sem anúncios, sem conta, funciona offline.

## Como jogar
- Hóspedes chegam ao lobby (🧳). Toque em **Check-in** para colocar um no quarto livre.
- Ao fim da estadia o quarto fica sujo (🧺): toque nele para limpar. A renda é paga no check-out.
- Melhore quartos, abra novos e contrate equipe (recepcionista e camareira automatizam, concierge aumenta a renda).
- **Estrelas**: reinaugure o hotel para ganhar +10% de renda permanente por estrela.

## Rodar / instalar no celular
É um PWA (HTML + JS puro, sem build). Hospede a pasta em qualquer HTTPS estático (ex.: GitHub Pages),
abra no Chrome do Android e use **Menu → Instalar app**. O progresso fica salvo no aparelho.

Teste local: `python3 -m http.server 8000` e abra `http://localhost:8000`.

## Gerar APK (opcional)
Com o site publicado em HTTPS, use o PWABuilder (pwabuilder.com) ou o Capacitor para empacotar como APK/AAB.
