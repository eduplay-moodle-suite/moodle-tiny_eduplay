Uso
===

1. No editor, clique no botão **EduPlay** (ou use *Inserir* > *Inserir vídeo do EduPlay*).
2. Cole o link do vídeo, por exemplo ``https://eduplay.rnp.br/app/video/353479``.
3. Opcionalmente, digite o texto do link; se havia texto selecionado, ele vem preenchido. O texto é usado como título do player para leitores de tela.
4. Clique em **Inserir**.

Links inválidos (outros hosts, ``http``, rota errada) mantêm o diálogo aberto com uma mensagem de erro. Um link na forma de embed (``/app/video/embed/{id}``) é normalizado para a forma canônica.

O conteúdo inserido é um link normal. Quando o conteúdo é apresentado, o ``media_eduplay`` o substitui pelo player oficial.

Acessibilidade
~~~~~~~~~~~~~~

Verificado em 2026-10-09 com Moodle 5.3 e axe-core 4.10.2 no diálogo aberto, no estado normal e no de erro (nenhuma violação).

* O botão da barra tem o nome "Insert EduPlay video" (em português, "Inserir vídeo do EduPlay") e pode receber foco e ser acionado pelo teclado.
* O diálogo é modal (``role="dialog"``, ``aria-modal``, título ligado por ``aria-labelledby``); o foco vai para dentro ao abrir e volta ao editor ao fechar.
* Os dois campos têm ``label`` visível; o campo do link é descrito pelo texto de ajuda e pela mensagem de erro.
* Um link inválido mantém o diálogo aberto, mostra o erro (``role="alert"``, anunciado por tecnologias assistivas), define ``aria-invalid`` e devolve o foco ao campo do link.
* O texto de erro tem contraste de 5,0:1 sobre o fundo do diálogo (mínimo 4,5:1).

Não verificado: teste com leitor de tela (NVDA/VoiceOver), dispositivo de toque real e modos de alto contraste ou zoom de 400%. O axe marcou o contraste de alguns textos como "revisar", então os valores acima foram calculados à mão.
