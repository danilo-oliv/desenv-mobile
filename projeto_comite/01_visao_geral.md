# Visão geral do sistema

## 1. Objetivo do projeto
Desenvolver um sistema multiagente para apoiar a criação, análise e implementação de um software.

## 2. Problema que o sistema resolve
O software visa servir como interface visual para um comitê de avaliação de mudanças de ambiente produtivo.

## 3. Atores envolvidos
O sistema é dividido em dois tipos de usuário:
1. Membros do comitê avaliador.
2. Desenvolvedores
Ambos os papéis farão gestão dos dados, com delimitações especificadas nos requisitos.

## 4. Escopo inicial, dentro e fora
O projeto contará com backend REST, frontend MOBILE e deverá ser desenvolvido por completo.

## 5. Restrições técnicas
O backend REST deve ser desenvolvido em PHP 8.X, a interface frontend deve ser desenvolvida em React Native e demais bibliotecas necessárias. Será realizada uma análise de qual tipo de banco de dados utilizar (relacional, documentos, etc) e qual SGBD para acompanhar esta decisão.

## 6. Premissas

[AGT-001]
Tipo: Decisão
Descrição: Os agentes devem manter o histórico de atuação por meio do log de evolução.
Obrigatoriedade: Crítica

[AGT-002]
Tipo: Suposição
Descrição: Cada agente terá responsabilidade especializada (ex: arquitetura, backend, frontend, análise)
Impacto: Organização do sistema multiagente
Obrigatoriedade: Alta

[AGT-003]
Tipo: Decisão
Descrição: Os agentes devem respeitar todas as premissas definidas neste documento
Obrigatoriedade: Crítica

[AGT-004]
Tipo: Decisão
Descrição: Em caso de conflito, decisões têm prioridade sobre suposições
Obrigatoriedade: Crítica

[ARQ-001]
Tipo: Decisão
Descrição: O sistema será composto por uma arquitetura cliente-servidor com backend REST
Justificativa: Separação clara entre frontend mobile e lógica de negócio
Obrigatoriedade: Crítica

[ARQ-002]
Tipo: Decisão
Descrição: O frontend será uma aplicação mobile
Justificativa: Necessidade de mobilidade para membros do comitê
Obrigatoriedade: Crítica

[ARQ-003]
Tipo: Decisão
Descrição: O backend será desenvolvido em PHP 8.x
Justificativa: Restrição técnica definida no escopo
Obrigatoriedade: Crítica

[ARQ-004]
Tipo: Decisão
Descrição: O frontend será desenvolvido em React Native
Justificativa: Desenvolvimento cross-platform (Android/iOS)
Obrigatoriedade: Crítica

## 7. Riscos conhecidos

## 8. Pedido para o Agente Arquiteto
Atue como arquiteto de software. Analise o cenário e proponha a melhor estrutura inicial, considerando arquitetura, módulos, dependências e riscos.