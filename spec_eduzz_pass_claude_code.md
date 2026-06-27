# Spec de Prototipagem — Eduzz Pass
> Documento para uso direto no Claude Code. Cole esse spec e peça o mock.

---

## Contexto do produto

**Eduzz Pass** é uma assinatura mensal que dá ao aluno acesso a um catálogo curado de cursos de múltiplos produtores da plataforma Eduzz — modelo Kindle Unlimited / GymPass aplicado à educação digital brasileira.

- O aluno paga uma assinatura e consome N cursos de N produtores
- O produtor opta por incluir cursos no catálogo e é remunerado proporcionalmente ao consumo (minutos assistidos)
- A Eduzz fica com a margem entre o que o aluno paga e o que distribui ao pool de produtores

---

## Telas a prototipar (4 no total)

### TELA 1 — Descoberta (catálogo)
**Quem vê:** aluno que ainda não assinou o Pass
**Objetivo da tela:** despertar desejo e levar ao clique em "Assinar"

**Elementos obrigatórios:**
- Header com logo Eduzz Pass + tagline: *"Acesso ilimitado a centenas de cursos por uma assinatura"*
- Botão de CTA primário: "Assinar agora — a partir de R$29/mês"
- Barra de busca + filtros de categoria (chips horizontais): Todos · Marketing · Finanças · Empreendedorismo · Saúde · Tecnologia · Vendas
- Grid de cards de cursos (3 colunas): cada card tem capa do curso, badge "Pass" no canto superior, nome do curso, nome do produtor, nota (estrelas), carga horária
- Contador no topo: "237 cursos incluídos no Pass"
- Rodapé da seção: "Cancele quando quiser. Sem fidelidade."

---

### TELA 2 — Assinatura (planos)
**Quem vê:** aluno que clicou em "Assinar agora"
**Objetivo da tela:** converter — aluno escolhe um plano e clica em assinar

**Elementos obrigatórios:**
- Título: "Escolha seu plano"
- Dois cards de plano lado a lado:
  - **Pass Essencial** — R$29/mês
    - Acesso a +100 cursos selecionados
    - 1 dispositivo
    - Certificados incluídos
    - Suporte por e-mail
    - CTA: "Assinar Essencial"
  - **Pass Total** *(destacado como "Mais popular")* — R$49/mês
    - Acesso a +237 cursos (catálogo completo)
    - Até 3 dispositivos
    - Certificados incluídos
    - Suporte prioritário
    - Novos cursos toda semana
    - CTA: "Assinar Total" (botão em destaque, cor amarela)
- Linha de confiança abaixo dos planos: ícones + textos curtos: "Cancele quando quiser" · "Pagamento seguro" · "Acesso imediato"
- Link discreto: "Ver todos os cursos incluídos"

---

### TELA 3 — Biblioteca (pós-assinatura)
**Quem vê:** aluno logado que já assina o Pass
**Objetivo da tela:** engajar — aluno retoma cursos e descobre novos

**Elementos obrigatórios:**
- Header: "Olá, [Nome do aluno] 👋" + badge do plano ativo (ex.: "Pass Total ativo")
- Seção **"Continue assistindo"**: cards horizontais com barra de progresso (ex.: 67% concluído), nome do curso, botão "Continuar"
- Seção **"Explorar por categoria"**: grid de cards de categoria com ícone e nome:
  - 💰 Educação Financeira
  - 💪 Saúde e Bem-Estar
  - 🚀 Empreendedorismo
  - 📱 Marketing Digital
  - 💻 Tecnologia
  - 🎯 Vendas
- Seção **"Novidades esta semana"**: linha horizontal de cards de cursos recém-adicionados ao catálogo
- Seção **"Salvos"**: cursos que o aluno marcou com favorito

---

### TELA 4 — Painel do Produtor (configurar participação no Pass)
**Quem vê:** produtor logado no painel Eduzz (MyEduzz/Órbita)
**Objetivo da tela:** produtor decide quais cursos coloca no Pass e acompanha retorno

**Elementos obrigatórios:**
- Título da seção: "Eduzz Pass — Seus cursos no catálogo"
- Lista de cursos do produtor com:
  - Capa + nome do curso
  - Toggle "Incluir no Pass" (ativo/inativo)
  - Tag de elegibilidade: "Elegível" (verde) ou "Não elegível — ticket acima de R$497" (amarelo)
- Card de resumo financeiro:
  - "Estimativa de receita este mês pelo Pass: R$ 847,00"
  - "Minutos consumidos pelos assinantes: 4.320 min"
  - "Posição no ranking do catálogo: #12 em Marketing"
- Tabela de histórico de repasses: mês, minutos consumidos, valor repassado
- CTA: "Adicionar curso ao Pass" (para cursos ainda não cadastrados)

---

## Identidade visual

### Tipografia
- **Fonte principal:** Syne (Google Fonts)
- Weights: Regular (400) para corpo, Bold (700) para títulos e CTAs
- Importar via: `https://fonts.googleapis.com/css2?family=Syne:wght@400;700&display=swap`

### Paleta de cores
| Nome | HEX | Uso |
|------|-----|-----|
| Azul Eduzz | `#0D2772` | Background principal (fundo escuro) |
| Azul Claro | `#00CAF9` | Destaque, links, badges, elementos interativos |
| Amarelo Eduzz | `#FFBC00` | CTA primário, elementos de destaque máximo |
| Creme | `#FFF4E1` | Backgrounds secundários, cards em contraste suave |
| Branco | `#FFFFFF` | Texto principal sobre fundo escuro, logo |
| Cinza escuro | `#0A1F5C` | Cards e superfícies sobre o fundo principal |

### Modo visual
- **Fundo:** escuro — usar `#0D2772` como base (Azul Eduzz)
- **Cards:** `#0A1F5C` ou variação mais escura do azul com borda sutil
- **Texto primário:** `#FFFFFF`
- **Texto secundário:** `rgba(255,255,255,0.65)`
- **Accent principal:** `#FFBC00` (amarelo) para CTAs e destaques
- **Accent secundário:** `#00CAF9` (azul claro) para badges, tags, links
- **Bordas:** `rgba(255,255,255,0.1)` (sutis, glassmorphism leve é permitido)

### Logo
- Usar texto "eduzz" em branco (`#FFFFFF`) com tipografia Syne Bold
- Ou texto "Eduzz Pass" como logotipo da feature — "Eduzz" em branco, "Pass" em amarelo `#FFBC00`

---

## Instrução para o Claude Code

```
Você é um designer de produto sênior. Crie um protótipo visual navegável em React + Tailwind com as 4 telas do Eduzz Pass descritas neste spec.

Requisitos técnicos:
- React com useState para navegação entre telas
- Tailwind CSS para estilização
- Fonte Syne importada do Google Fonts
- Fundo escuro (#0D2772), cards em azul mais escuro, texto branco
- Amarelo (#FFBC00) para CTAs primários
- Azul claro (#00CAF9) para badges e destaques secundários
- Dados fictícios realistas em português brasileiro
- Navegação entre as 4 telas via menu ou botões de fluxo
- Visual limpo, sem Lorem Ipsum, sem ícones genéricos

Telas:
1. Descoberta (catálogo de cursos com filtros por categoria)
2. Assinatura (dois planos: Essencial R$29 e Total R$49)
3. Biblioteca (área pós-assinatura com progresso e categorias)
4. Painel do Produtor (gestão de cursos no Pass + repasses)

Siga rigorosamente a estrutura de elementos de cada tela descrita no spec.
```

---

## O que NÃO está definido ainda (decide depois)

- Ícones: usar biblioteca de ícones (Lucide, Heroicons) ou emoji — você decide no Claude Code
- Imagens de capa dos cursos: usar cores sólidas com iniciais ou placeholders com degradê
- Animações: mínimas ou nenhuma — foco no layout

