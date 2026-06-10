const resumos = [
    {
        "id": 1,
        "titulo": "ANÁLISE COMPARATIVA DO TESTE RÁPIDO IMUNOCROMATOGRÁFICO TR-DPP® E IMUNOENZIMÁTICO ELISA NO DIAGNÓSTICO DA LEISHMANIOSE VISCERAL CANINA",
        "autores": "BIANCA SANTOS IERVOLINO, ANTÔNIO GABRIEL BRITO PEREIRA, MYLENA MENDES CORRÊA, ELOÍSA ROCHA COSTA, VANESSA PAULINO DA CRUZ VIEIRA",
        "link_pdf": "ppgvet2/1.pdf",
        "evento_id": 2
    },
    {
        "id": 2,
        "titulo": "AVALIAÇÃO DO DESEMPENHO PRODUTIVO ENTRE DIFERENTES PROPORÇÕES GENÉTICAS DE VACAS LEITEIRAS EM REGIÃO SEMIÁRIDA",
        "autores": "Heitor Amaral Figueira, Ana Luisa Gomide Doehler, Ana Flavia da Fonseca, Sérgio Fernandes Ferreira, Suzi Cristina dos Santos Guimarães Martins",
        "link_pdf": "ppgvet2/2.pdf",
        "evento_id": 2
    },
    {
        "id": 3,
        "titulo": "AVALIAÇÃO DO DESEMPENHO REPRODUTIVO ENTRE VACAS LEITEIRAS DE DIFERENTES PROPORÇÕES GENÉTICAS EM REGIÃO SEMIÁRIDA",
        "autores": "Ana Luisa Gomide Doehler algd, Heitor Amaral Figueira, Nágila Alves Nascimento, Susi Cristina dos Santos Guimarães Martins, Sérgio Fernandes Ferreira",
        "link_pdf": "ppgvet2/3.pdf",
        "evento_id": 2
    },
    {
        "id": 4,
        "titulo": "AVALIAÇÃO DO EFEITO DA SUPLEMENTAÇÃO A PASTO DE NOVILHAS DE CORTE NA TAXA DE NASCIMENTO DE BEZERROS",
        "autores": "Antônio Eustáquio Filho, EDMARCOS FERREIRA ANDRADE, Wagner Azis Garcia de Araujo, Lucas D'angeles Mendes",
        "link_pdf": "ppgvet2/4.pdf",
        "evento_id": 2
    },
    {
        "id": 5,
        "titulo": "AVALIAÇÃO DO ESCORE DE CONDIÇÃO CORPORAL DE NOVILHAS DE CORTE SUPLEMENTADAS A PASTO NO PERÍODO TRANSIÇÃO DAS ÁGUA/ SECA",
        "autores": "Fayra Ferraz Machado de Andrade, Susi Cristina dos Santos Guimarães Martins, Sérgio Fernandes Ferreira, Aylla Lopes Magalhães, Henrique Oliveira Almeida",
        "link_pdf": "ppgvet2/5.pdf",
        "evento_id": 2
    },
    {
        "id": 6,
        "titulo": "AVALIAÇÃO DO GANHO DE PESO DE NOVILHAS DE CORTE SUPLEMENTADAS A PASTO NO NORTE DE MINAS",
        "autores": "Antônio Eustáquio Filho, EDMARCOS FERREIRA ANDRADE, Wagner Azis Garcia de Araujo, Luan da Silva Luz",
        "link_pdf": "ppgvet2/6.pdf",
        "evento_id": 2
    },
    {
        "id": 7,
        "titulo": "AVALIAÇÃO IN VITRO DA EFICÁCIA DE ACARICIDAS SOBRE RHIPICEPHALUS (BOOPHILUS) MICROPLUS (CANESTRINI, 1887) (ACARI: IXODIDAE) DE BOVINOS LEITEIROS EM MUNICÍPIOS DE MINAS GERAIS",
        "autores": "Lara Botelho Lacerda, Amanda Danieletto de Mello, Rhuan Paulo Veloso Ribeiro, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "ppgvet2/7.pdf",
        "evento_id": 2
    },
    {
        "id": 8,
        "titulo": "CARACTERIZAÇÃO DO PARASITISMO GASTROINTESTINAL EM EQUINOS DA RAÇA QUARTO DE MILHA",
        "autores": "Antônio Gabriel Brito Pereira, João Marcos Ribeiro Braga, Bianca Santos Iervolino, Athos Ricardo Mourão Nogueira, Vanessa Paulino Da Cruz Vieira",
        "link_pdf": "ppgvet2/8.pdf",
        "evento_id": 2
    },
    {
        "id": 9,
        "titulo": "CONFINAMENTO DE BOVINOS NA DIETA PURO GRÃO",
        "autores": "Brenda Souza Rodrigues bsr9, OTAVIANO DE SOUZA PIRES NETO, DANIEL ANANIAS DE ASSIS PIRES, MARIELLY MARIA ALMEIDA MOURA, OSCAR VIEIRA LAFETÁ NETO",
        "link_pdf": "ppgvet2/9.pdf",
        "evento_id": 2
    },
    {
        "id": 10,
        "titulo": "CONSUMO DE MATÉRIA SECA E CUSTO-BENEFÍCIO DO USO DE BAGAÇO DE CANA-DE-AÇÚCAR TRATADO EM DIETAS PARA CORDEIROS",
        "autores": "Amanda Araújo Ferreira, Ana Luisa Gomide Doehler, Antônio Eustáquio Filho, Paulo Eduardo Ferreira Dos Santos",
        "link_pdf": "ppgvet2/10.pdf",
        "evento_id": 2
    },
    {
        "id": 11,
        "titulo": "CORRELAÇÃO ENTRE VACAS LEITEIRAS DE DIFERENTES GRUPOS GENÉTICOS E ÍNDICES REPRODUTIVOS EM REGIÃO SEMIÁRIDA",
        "autores": "Ana Luisa Gomide Doehler algd, João Marcos Ribeiro Braga, Heitor Amaral Figueira, Susi Cristina dos Santos Guimaraes Martins, Sérgio Fernandes Ferreira",
        "link_pdf": "ppgvet2/11.pdf",
        "evento_id": 2
    },
    {
        "id": 12,
        "titulo": "EFICIÊNCIA ALIMENTAR DE VACAS LEITEIRAS ALIMENTADAS COM FARELO DE PALMA",
        "autores": "Davi Custódio de Souza, Luis Carlos Gomes de Azevedo, Antônio Eustáquio Filho, Harley Alex Soares, Wagner Azis Garcia de Araújo",
        "link_pdf": "ppgvet2/13.pdf",
        "evento_id": 2
    },
    {
        "id": 13,
        "titulo": "EFICÁCIA IN VITRO DE ACARICIDAS SOBRE RHIPICEPHALUS MICROPLUS (CANESTRINI, 1888) (ACARI: IXODIDAE)",
        "autores": "Gabriel Augusto Pereira Sousa, Lara Botelho Lacerda, Amanda Danieletto de Mello, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "ppgvet2/12.pdf",
        "evento_id": 2
    },
    {
        "id": 14,
        "titulo": "FAUNA PARASITÁRIA GASTROENTÉRICA DE EQUINOS DA RAÇA MANGALARGA MARCHADOR",
        "autores": "João Marcos Ribeiro Braga, Antônio Gabriel Brito Pereira, Heitor Amaral Figueira, Mylena Mendes Corrêa, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "ppgvet2/14.pdf",
        "evento_id": 2
    },
    {
        "id": 15,
        "titulo": "FREQUÊNCIA DE ZOONOSES EM ANIMAIS ATENDIDOS EM CLÍNICA VETERINÁRIA NO MUNICÍPIO DE ALMENARA-MG",
        "autores": "Eloisa Rocha Costa, Bethânia Silva Gil de Freitas, Bianca Santos Iervolino, Kamila Rodrigues Costa, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "ppgvet2/15.pdf",
        "evento_id": 2
    },
    {
        "id": 16,
        "titulo": "HELMINTOS E PROTOZOÁRIOS GASTRINTESTINAIS EM BOVINOS DE CORTE ORIUNDOS DE FAZENDA DE RECRIA NO NORTE DE MINAS GERAIS",
        "autores": "Athos Ricardo Mourão Nogueira, Pérola Pereira Batista, Helder Ferreira Ramos, Antônio Gabriel Brito Pereira, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "ppgvet2/16.pdf",
        "evento_id": 2
    },
    {
        "id": 17,
        "titulo": "IMPLEMENTAÇÃO DO SISTEMA “COMPOST BARN” COMO ESTRATÉGIA DE MELHORIA DA PRODUTIVIDADE DE LEITE",
        "autores": "Taison Souto Silva, Paulo Eduardo Ferreira Santos, Laura Costa de Almeida, Samuel Dias Silva Souto, Rayanne Clemente Jorge",
        "link_pdf": "ppgvet2/17.pdf",
        "evento_id": 2
    },
    {
        "id": 18,
        "titulo": "IMPLEMENTAÇÃO DO SISTEMA “COMPOST BARN” COMO ESTRATÉGIA DE MELHORIA DA QUALIDADE DE LEITE",
        "autores": "Jéssica Chaves Rodrigues, Perecles Brito Batista, Ilana Nahas Duarte",
        "link_pdf": "ppgvet2/18.pdf",
        "evento_id": 2
    },
    {
        "id": 19,
        "titulo": "LEISHMANIOSE VISCERAL CANINA NA REGIÃO PERIURBANA DO MUNICÍPIO DE JANUÁRIA, MINAS GERAIS",
        "autores": "Mylena Mendes Corrêa, Antônio Gabriel Brito Pereira, Bianca Santos Iervolino, João Marcos Ribeiro Braga, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "ppgvet2/19.pdf",
        "evento_id": 2
    },
    {
        "id": 20,
        "titulo": "POTENCIAL FORRAGEIRO DOS CAPINS UROCHLOA MOSAMBICENSIS E BUFFEL ÁRIDUS NO SEMIÁRIDO",
        "autores": "Liliane Duarte da Silva, Susi Cristina dos Santos Guimarães Martins, Leonardo Bernardino Tanure Matos, Osmar Correia Primo, Antônio Eustáquio Filho",
        "link_pdf": "ppgvet2/20.pdf",
        "evento_id": 2
    },
    {
        "id": 21,
        "titulo": "SOROPREVALÊNCIA DE TOXOPLASMA GONDII EM SUÍNOS DESTINADOS AO ABATE NA REGIÃO DE SALINAS, MINAS GERAIS",
        "autores": "Lavínia Caires Queiroga, Brena Lana Neres Barbosa, Isabela Aquino Pereira, Venessa Paulino da Cruz Vieira",
        "link_pdf": "ppgvet2/21.pdf",
        "evento_id": 2
    },
    {
        "id": 22,
        "titulo": "USO DOS CINCO DOMÍNIOS PARA AVALIAR O BEM-ESTAR DE EQUINOS NO MUNICÍPIO DE JUATUBA - MG",
        "autores": "Marielly Maria Almeida Moura, Marielly Maria Almeida Moura, DANIEL ANANIAS DE ASSIS PIRES, CINARA DA CUNHA SIQUEIRA CARVALHO, Lívia rodrigues mendes, Isadora Fernanda Dias Nunes",
        "link_pdf": "ppgvet2/22.pdf",
        "evento_id": 2
    },
    {
        "id": 23,
        "titulo": "UTILIZAÇÃO DO BIOCARRAPATICIDOGRAMA PARA AVALIAÇÃO IN VITRO DA RESISTÊNCIA E SUSCETIBILIDADE DE RHIPICEPHALUS MICROPLUS A ACARICIDAS COMERCIAIS",
        "autores": "Lara Botelho Lacerda, Amanda Danieletto de Mello, Rhuan Paulo Veloso Ribeiro, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "ppgvet2/23.pdf",
        "evento_id": 2
    },
    {
        "id": 1,
        "titulo": "ANÁLISE COMPARATIVA DO PROCESSO DE CRIODESIDRATAÇÃO EM TECIDO CARDÍACO, NEUROLÓGICO E DIGESTÓRIO DE ANIMAIS DOMÉSTICOS DO IFNMG-CAMPUS SALINAS",
        "autores": "Deivid Reis Magalhães, Walter Octaviano Bernis Filho",
        "link_pdf": "ppgvet3/1.pdf",
        "evento_id": 3
    },
    {
        "id": 2,
        "titulo": "ANÁLISE ECONÔMICA DA PRODUÇÃO LEITEIRA DE VACAS ALIMENTADAS COM FARELO DE PALMA FORRAGEIRA",
        "autores": "Erik Juneo Soares Costa, Davi Custódio de Souza, Luiz Carlos Gomes de Azevedo, Harley Alex Soares, Wagner Azis Garcia de Araujo, Antônio Eustáquio Filho",
        "link_pdf": "ppgvet3/2.pdf",
        "evento_id": 3
    },
    {
        "id": 3,
        "titulo": "ANÁLISE IN SILICO DA INTERAÇÃO ENTRE LACTOFERRINA BOVINA E PROTEÍNAS BACTERIANAS ENVOLVIDAS NA MASTITE BOVINA",
        "autores": "Agueda Maria de França Tavares, Leonardo Ferreira Oliveira, Marcos Jean Ramos Amorim, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "ppgvet3/3.pdf",
        "evento_id": 3
    },
    {
        "id": 4,
        "titulo": "ANÁLISE IN SILICO DE INIBIÇÃO DE BIOFILMES DE STAPHYLOCOCCUS AUREUS POR COMPOSTOS NATURAIS: PERSPECTIVAS PARA O MANEJO DA MASTITE BOVINA",
        "autores": "Leonardo Ferreira Oliveira, Agueda Maria de França Tavares, Suze Adriane Fonseca, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "ppgvet3/4.pdf",
        "evento_id": 3
    },
    {
        "id": 5,
        "titulo": "ANÁLISE IN SILICO DE TANASES BACTERIANAS COMO ESTRATÉGIA PARA MELHORA DA QUALIDADE NUTRICIONAL DE SILAGENS COM ALTO TEOR DE TANINOS",
        "autores": "Leonardo Ferreira Oliveira, Agueda Maria de França Tavares, Suze Adriane Fonseca, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "ppgvet3/5.pdf",
        "evento_id": 3
    },
    {
        "id": 6,
        "titulo": "AVALIAÇÃO DA PRODUTIVIDADE E DO TEOR DE MATÉRIA SECA DE CULTIVARES DO GÊNERO BRACHIARIA SOB IRRIGAÇÃO NO PERÍODO SECO",
        "autores": "Samuel Dias Silva Souto, Yzak Jonatah Neres Cardoso, Heros Pereira Quaresma, Taison Souto Silva, Paulo Eduardo Ferreira dos Santos, Joan Brálio Mendes Pereira Lima",
        "link_pdf": "ppgvet3/6.pdf",
        "evento_id": 3
    },
    {
        "id": 7,
        "titulo": "AVALIAÇÃO DO CONSUMO DE SUPLEMENTO PROTÉICO EM BOVINOS MANTIDOS A PASTO.",
        "autores": "Samuel Rodrigues dos Santos, Rogério Mendes Murta, Edmilson Tadeu Cassani, Flávio Da Cruz Silva, Dielle Cawane Lopes Gonçalves, Gabryella Rocha Gusmão",
        "link_pdf": "ppgvet3/7.pdf",
        "evento_id": 3
    },
    {
        "id": 8,
        "titulo": "BIOINFORMÁTICA NA INTERAÇÃO ENTRE IMUNIDADE E PAPILOMATOSE BOVINA",
        "autores": "Maria Julia Ribeiro, Maria Vitória Loiola Carvalho, Eliane Macedo Sobrinho Santos, Hércules Otacílio Santos, Janini Tatiane Lima Souza Maia, Anna Christina de Almeida",
        "link_pdf": "ppgvet3/8.pdf",
        "evento_id": 3
    },
    {
        "id": 9,
        "titulo": "COMPETÊNCIAS INTERPESSOAIS E TECNOLÓGICAS EM EQUIPES DE REVENDAS E DISTRIBUIDORAS DE INSUMOS AGRÍCOLAS",
        "autores": "Hélio Pinheiro da Silva Junior, Jarbas de Menezes, Paulo Eduardo Ferreira dos Santos, Perecles Brito Batista, Antônio Eustáquio Filho, Marielly Maria Almeida Moura",
        "link_pdf": "ppgvet3/9.pdf",
        "evento_id": 3
    },
    {
        "id": 10,
        "titulo": "COMPORTAMENTO INGESTIVO DE NOVILHOS TERMINADOS EM CONFINAMENTO",
        "autores": "Ketley Lavinni Silva Gusmão, Rogério Mendes Murta, Edmilson Tadeu Cassani, Anderson Torres de Melo, Samuel Rodrigues Dos Santos, Flávio Da Cruz Silva",
        "link_pdf": "ppgvet3/10.pdf",
        "evento_id": 3
    },
    {
        "id": 11,
        "titulo": "CONHECIMENTO TÁCITO DE EQUIPES DE VENDAS NA EFICIENCIA COMERCIAL NO AGRONEGÓCIO",
        "autores": "Liliane Duarte da Silva, Paulo Eduardo Ferreira dos Santos, Jarbas de Menezes, Perecles Brito Batista, Antônio Eustáquio Filho",
        "link_pdf": "ppgvet3/11.pdf",
        "evento_id": 3
    },
    {
        "id": 12,
        "titulo": "CONSUMO DE PASTAGEM DE NOVILHOS NELORES SUPLEMENTADOS COM PROTEINADO ENERGÉTICO",
        "autores": "Germano Santos Ferreira Júnior gsfj, Rogério Mendes Murta, Edmilson Tadeu Cassani, Matheus Ribeiro Paraíso, Maria de Fátima Batista Freitas, Dielle Cawane Lopes Gonçalves",
        "link_pdf": "ppgvet3/12.pdf",
        "evento_id": 3
    },
    {
        "id": 13,
        "titulo": "CONVERSÃO ALIMENTAR DE VACAS LEITEIRAS ALIMENTADAS COM FARELO DE PALMA FORRAGEIRA",
        "autores": "Gabriela Morais Durães, Davi Custódio de Souza, Luiz Carlos Gomes de Azevedo, Luiz Rodolfo Antunes Quaresma, Wagner Azis Garcia de Araújo, Antônio Eustáquio Filho",
        "link_pdf": "ppgvet3/13.pdf",
        "evento_id": 3
    },
    {
        "id": 14,
        "titulo": "DESEMPENHO AGRONÔMICO DE GENÓTIPOS DE SORGO FORRAGEIRO CULTIVADOS EM TRÊS REGIÕES BRASILEIRAS",
        "autores": "Marielly Maria Almeida moura, ANNE KAROLINE FERREIRA MENDES, OTAVIANO DE SOUZA PIRES NETO, JAINE APARECIDA DOS SANTOS, DANIEL ANANIAS DE ASSIS PIRES, JULIANO SANTOS SIQUEIRA",
        "link_pdf": "ppgvet3/14.pdf",
        "evento_id": 3
    },
    {
        "id": 15,
        "titulo": "DESEMPENHO ANTIPARASITÁRIO DA IVERMECTINA 2% ORAL EM EQUÍDEOS: RESULTADOS DE UM ESTUDO EM CONDIÇÕES DE CAMPO",
        "autores": "Antônio Gabriel Brito Pereira, Mylena Mendes Correa, Kellen Pereira da Silva, Heitor Amaral Figueira, Leonardo Costa Tavares Coelho, Vanessa Paulino da Cruz Vieira",
        "link_pdf": "ppgvet3/15.pdf",
        "evento_id": 3
    },
    {
        "id": 16,
        "titulo": "DESEMPENHO DE 19 GENÓTIPOS DE SORGO EM DIFERENTES CENÁRIOS EDAFOCLIMÁTICOS QUANTO AO FLORESCIMENTO E À ALTURA DE PLANTA",
        "autores": "Marielly Maria Almeida moura, JAINE APARECIDA DOS SANTOS, OTAVIANO DE SOUZA PIRES NETO, ANNE KAROLINE FERNANDES MENDES, DANIEL ANANIAS DE ASSIS PIRES, RENÊ FERREIRA COSTA",
        "link_pdf": "ppgvet3/16.pdf",
        "evento_id": 3
    },
    {
        "id": 17,
        "titulo": "DESEMPENHO DE BOVINOS NELORE NA TERMINAÇÃO INTENSIVA A PASTO",
        "autores": "Mateus Bandeira Lima, Rogério Mendes Murta, Edmilson Tadeu Cassani, Rogério Ribeiro da Silva Júnior, Anderson Torres de Melo, Matheus Ribeiro Paraíso",
        "link_pdf": "ppgvet3/17.pdf",
        "evento_id": 3
    },
    {
        "id": 18,
        "titulo": "DESEMPENHO DE BOVINOS SUPLEMENTADOS A PASTO E TERMINADOS EM CONFINAMENTO",
        "autores": "Luyara Lorrany Alves Lima, Rogério Mendes Murta, Edmilson Tadeu Cassani, Maria de Fátima Batista Freitas, Germano Santos Ferreira Junior, Mateus Bandeira Lima",
        "link_pdf": "ppgvet3/18.pdf",
        "evento_id": 3
    },
    {
        "id": 19,
        "titulo": "DESEMPENHO DE NOVILHOS ANELORADOS SUPLEMENTADOS COM PROTEINADO NO PERÍODO DE TRANSIÇÃO ÁGUAS-SECAS",
        "autores": "Flávio da Cruz Silva fcs9",
        "link_pdf": "ppgvet3/19.pdf",
        "evento_id": 3
    },
    {
        "id": 20,
        "titulo": "DESEMPENHO DE NOVILHOS EM RECRIA SUPLEMENTADOS DURANTE O PERÍODO SECO.",
        "autores": "Maria de Fátima Batista Freitas, Rogério Mendes Murta, Edmilson Tadeu Cassani, Ketley Lavinni Silva Gusmão, Anna Karoliny Neves Lisboa, Junior Allef de Oliveira Alves",
        "link_pdf": "ppgvet3/20.pdf",
        "evento_id": 3
    },
    {
        "id": 21,
        "titulo": "DESEMPENHO DE NOVILHOS EM TERMINAÇÃO INTENSIVA A PASTO",
        "autores": "Anna Karoliny Neves Lisboa",
        "link_pdf": "ppgvet3/21.pdf",
        "evento_id": 3
    },
    {
        "id": 22,
        "titulo": "DESEMPENHO DE PROFISSIONAIS DE VENDAS NO SETOR DE INSUMOS AGRÍCOLAS: UMA ANÁLISE A PARTIR DE COMPETÊNCIAS E HABILIDADES",
        "autores": "Jéssica Chaves Rodrigues, Jarbas de Menezes, Paulo Eduardo Ferreira dos Santos, Perecles Brito Batista, Antônio Eustáquio Filho",
        "link_pdf": "ppgvet3/22.pdf",
        "evento_id": 3
    },
    {
        "id": 23,
        "titulo": "DETECÇÃO FENOTÍPICA DE BETA-LACTAMASES DE ESPECTRO ESTENDIDO EM CEPAS DE ESCHERICHIA COLI ISOLADAS DE BEZERROS DIARRÉICOS",
        "autores": "Suze Adriane Fonseca, Leonardo Ferreira Oliveira, Agueda Maria de França Tavares, Ageu Emerson Braz do Carmo, Eduardo Robson Duarte, Anna Christina Almeida",
        "link_pdf": "ppgvet3/23.pdf",
        "evento_id": 3
    },
    {
        "id": 24,
        "titulo": "EFEITO DE BIOFERTILIZANTES NO DESEMPENHO DO MILHETO FORRAGEIRO NAS CONDIÇÕES EDAFOCLIMÁTICAS DE ARAÇUAÍ, MINAS GERAIS",
        "autores": "Pedro Lucas Batista Pereira Almeida, Alana Saúde Pereira, Tatiana Tozzi Martins Souza Rodrigues, Allieksiei Castelar Perim Souza Rodrigues, Hércules Otacílio Santos, Eliane Macedo Sobrinho Santos",
        "link_pdf": "ppgvet3/24.pdf",
        "evento_id": 3
    },
    {
        "id": 25,
        "titulo": "ESTUDO COMPARATIVO DE ÍNDICES REPRODUTIVOS DE VACAS LEITEIRAS EM DOIS SISTEMAS DE PRODUÇÃO",
        "autores": "Marielly Maria Almeida moura, JAINE APARECIDA DOS SANTOS, OTAVIANO DE SOUZA PIRES NETOS, ANNE KAROLINE FERNANDES MENDES, DANIEL ANANIAS DE ASSIS PIRES, JULIANO SANTOS SIQUEIRA",
        "link_pdf": "ppgvet3/25.pdf",
        "evento_id": 3
    },
    {
        "id": 26,
        "titulo": "FENÓTIPO MLSB EM STAPHYLOCOCCUS NÃO-AUREUS ISOLADOS EM LEITE DE VACAS COM MASTITE SUBCLÍNICA",
        "autores": "Agueda Maria de França Tavares, Leonardo Ferreira Oliveira, Marcos Jean Ramos Amorim, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "ppgvet3/26.pdf",
        "evento_id": 3
    },
    {
        "id": 27,
        "titulo": "IMPACTO DA ADIÇÃO DE MEL E DO TEMPO DE FERMENTAÇÃO NO TEOR ALCOÓLICO DE CERVEJAS",
        "autores": "Jean Pereira Coutinho, Leila Gonçalves Guimarães Coutinho, Elaine Pereira Coutinho, Ricardo Santos Pereira da Rocha, Felipe Cimino Duarte, Roberta Magalhães Dias Cardozo",
        "link_pdf": "ppgvet3/27.pdf",
        "evento_id": 3
    },
    {
        "id": 28,
        "titulo": "IMPACTO DAS BOAS PRÁTICAS DE ORDENHA NA CONTAGEM DE CÉLULAS SOMÁTICAS DO LEITE USADO NA PRODUÇÃO DE QUEIJO COZIDO NO VALE DO JEQUITINHONHA E NORTE DE MINAS",
        "autores": "Paula Cristina Vieira Dutra, Lara Botelho Lacerda, Ana Flávia da Fonseca, Rafael da Silva Santos, Thiago Moreira dos Santos",
        "link_pdf": "ppgvet3/28.pdf",
        "evento_id": 3
    },
    {
        "id": 29,
        "titulo": "IMPACTO DO TEMPO DE EXPERIÊNCIA EM VENDAS NO DESEMPENHO DE EQUIPES COMERCIAIS DO SETOR DE INSUMOS AGROPECUÁRIOS",
        "autores": "Liliane Duarte da Silva, Paulo Eduardo Ferreira dos Santos, Jarbas de Menezes, Perecles Brito Batista, Antônio Eustáquio Filho",
        "link_pdf": "ppgvet3/29.pdf",
        "evento_id": 3
    },
    {
        "id": 30,
        "titulo": "LEITE A2A2: USO DO TESTE COMERCIAL NA IDENTIFICAÇÃO DE VACAS COM O GENÓTIPO EM REBANHO LEITEIRO NO MUNICÍPIO DE SALINAS/MG.",
        "autores": "Larissa Mayara Dias Silveira, Wislla Antônia Oliveira Viana, Susi Cristina dos Santos Guimarães Martins, Josiane Silva Freire, Heliomar José dos Santos, Juliana Zara Brondi Mendes",
        "link_pdf": "ppgvet3/30.pdf",
        "evento_id": 3
    },
    {
        "id": 31,
        "titulo": "NOVILHOS NELORES TERMINADOS EM CONFINAMENTO APÓS SUPLEMENTAÇÃO A PASTO NA RECRIA",
        "autores": "Gabryella Rocha Gusmão, Rogério Mendes Murta, Edmilson Tadeu Cassani, Maria de Fátima Batista Freitas, Matheus Ribeiro Paraíso, Ketley Lavinni Silva Gusmão",
        "link_pdf": "ppgvet3/31.pdf",
        "evento_id": 3
    },
    {
        "id": 32,
        "titulo": "O SABER VETERINÁRIO SOBRE ALIMENTAÇÃO NATURAL CASEIRA PARA CÃES E GATOS",
        "autores": "Marielly Maria Almeida moura, Silene Maria Prates Barreto, Esther Mariely Vieira, Victória Soares Lopes, OTAVIANO DE SOUZA PIRES NETO, JULIANO SANTOS SIQUEIRA, RENÊ FERREIRA COSTA",
        "link_pdf": "ppgvet3/32.pdf",
        "evento_id": 3
    },
    {
        "id": 33,
        "titulo": "PERCEPÇÃO DOS TUTORES SOBRE CRECHES PET E AVALIAÇÃO DO BEM-ESTAR EM CÃES",
        "autores": "Marielly Maria Almeida moura, LÍVIA RODRIGUES MENDES, Rômulo Gabriel Pena Simplício, Maria Isabela Borges Sena, DANIEL ANANIAS DE ASSIS PIRES, RENÊ FERREIRA COSTA",
        "link_pdf": "ppgvet3/34.pdf",
        "evento_id": 3
    },
    {
        "id": 34,
        "titulo": "PERCEPÇÃO DOS TUTORES SOBRE CRECHES PET E AVALIAÇÃO DO BEM-ESTAR EM CÃES",
        "autores": "Marielly Maria Almeida moura, LÍVIA MENDES RODRIGUES, Laila Minely Silva Costa, Maria Isabela borges sena, DANIEL ANANIAS DE ASSIS PIRES, Renê Ferreira Costa",
        "link_pdf": "ppgvet3/33.pdf",
        "evento_id": 3
    },
    {
        "id": 35,
        "titulo": "PÓ DE ROCHA E SOLUÇÃO DE MEL NA GERMINAÇÃO DE SEMENTES DO PANICUM MAXIMUS JACQ. CV. TANZÂNIA",
        "autores": "Alana Saúde Pereira, Pedro Lucas Batista Pereira Almeida, Tatiana Tozzi Martins Souza Rodrigues, Allieksiei Castelar Perim Souza Rodrigues, Hércules Otacílio Santos, Eliane Macedo Sobrinho Santos",
        "link_pdf": "ppgvet3/35.pdf",
        "evento_id": 3
    },
    {
        "id": 36,
        "titulo": "RENDIMENTO DE CARCAÇA DE NOVILHOS NELORE SUBMETIDOS A DIFERENTES ESTRATÉGIAS NUTRICIONAIS",
        "autores": "Junior Allef de Oliveira Alves, Rogerio Mendes Murta, Edmilson Tadeu Cassani, Ketley Lavinni Silva Gusmão, Germano Santos Ferreira Junior, Mateus Bandeira Lima",
        "link_pdf": "ppgvet3/36.pdf",
        "evento_id": 3
    },
    {
        "id": 37,
        "titulo": "RESISTÊNCIA À METICILINA EM STAPHYLOCOCCUS NÃO-AUREUS ISOLADOS EM LEITE DE VACAS COM MASTITE SUBCLÍNICA",
        "autores": "Agueda Maria de França Tavares, Leonardo Ferreira Oliveira, Marcos Jean Ramos Amorim, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "ppgvet3/37.pdf",
        "evento_id": 3
    },
    {
        "id": 38,
        "titulo": "SELEÇÃO DE EPÍTOPOS VACINAIS CONTRA STAPHYLOCOCCUS AUREUS NA MASTITE BOVINA: UMA ABORDAGEM EM IMUNOINFORMÁTICA",
        "autores": "Leonardo Ferreira Oliveira, Agueda Maria de França Tavares, Suze Adriane Fonseca, Franciane Gabrielle dos Santos, Alessandro Soares Fonseca de Matos, Anna Christina Almeida",
        "link_pdf": "ppgvet3/38.pdf",
        "evento_id": 3
    },
    {
        "id": 39,
        "titulo": "SUPLEMENTAÇÃO A PASTO NA FASE DE RECRIA E SEU EFEITO NA TERMINAÇÃO EM CONFINAMENTO DE NOVILHOS NELORE",
        "autores": "Dielle Cawane Lopes Gonçalves dclg",
        "link_pdf": "ppgvet3/39.pdf",
        "evento_id": 3
    },
    {
        "id": 40,
        "titulo": "SUPLEMENTAÇÃO NA RECRIA DE NOVILHOS NELORE",
        "autores": "Maria de Fátima Batista Freitas, Rogério Mendes Murta, Edmilson Tadeu Cassani, Matheus Ribeiro Paraíso, Gabryella Rocha Gusmão, Samuel Rodrigues Dos Santos",
        "link_pdf": "ppgvet3/40.pdf",
        "evento_id": 3
    },
    {
        "id": 41,
        "titulo": "TEMPO DE SECAGEM DA PALMA FORRAGEIRA TRITURADA E EXPOSTA AO SOL",
        "autores": "Antônio Eustáquio Filho, Romaro Figueiredo de Aquino, LUIZ RODOLFO ANTUNES QUARESMA, Wagner Azis Garcia de Araujo",
        "link_pdf": "ppgvet3/41.pdf",
        "evento_id": 3
    },
    {
        "id": 42,
        "titulo": "TEMPO DE SECAGEM DA PALMA FORRAGEIRA TRITURADA EM FUNÇÃO DO NÚMERO DE REVOLVIMENTOS DIÁRIOS",
        "autores": "Denise Soares Dias, Romaro Figueiredo de Aquino, Luiz Rodolfo Antunes Quaresma, Wagner Azis Garcia de Araujo, Fabiano Matos Pereira, Antônio Eustáquio Filho",
        "link_pdf": "ppgvet3/42.pdf",
        "evento_id": 3
    },
    {
        "id": 43,
        "titulo": "TEOR DE HIDROXIMETILFURFURAL E AÇÚCAR EM DIFERENTES AMOSTRAS DE MEL DE ABELHA APIS MELLIFERA",
        "autores": "Ana Paula Sousa Santos, Alana Saúde Pereira, Bruna Santos Ribeiro, Hércules Otacílio Santos, Wagner Silva dos Santos, Eliane Macedo Sobrinho Santos",
        "link_pdf": "ppgvet3/43.pdf",
        "evento_id": 3
    },
    {
        "id": 44,
        "titulo": "TERMINAÇÃO INTENSIVA À PASTO DE VACAS NELORE DE DESCARTE",
        "autores": "Matheus Ribeiro Paraiso, Rogério Mendes Murta, Edmilson Tadeu Cassani, Maria de Fátima Batista Freitas, Germano Santos Ferreira Junior, Vitor Jose da Silva",
        "link_pdf": "ppgvet3/44.pdf",
        "evento_id": 3
    },
    {
        "id": 45,
        "titulo": "UM ESTUDO DESCRITIVO SOBRE A PERCEPÇÃO PROFISSIONAL QUANTO AO USO DE DIETAS NATURAIS NA CLÍNICA DE PEQUENOS ANIMAIS",
        "autores": "Marielly Maria Almeida moura, Silene Maria Prates Barreto, Esther Mariely Vieira, Victória Soares Lopes, Otaviano de Souza Pires Neto, JULIANO SANTOS SIQUEIRA, RENÊ FERREIRA COSTA",
        "link_pdf": "ppgvet3/45.pdf",
        "evento_id": 3
    }

];

module.exports = resumos;