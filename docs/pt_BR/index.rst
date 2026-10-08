moodle-tiny_eduplay
===================

O **moodle-tiny_eduplay** adiciona um botão e um item do menu *Inserir* ao editor TinyMCE do Moodle para inserir vídeos do EduPlay. O autor cola o link do vídeo, o plugin o valida e o link canônico é inserido no conteúdo; o `moodle-media_eduplay <https://eduplay-moodle-suite.github.io/moodle-media_eduplay/>`_ o exibe como o player oficial quando o conteúdo é apresentado. Faz parte da **EduPlay Moodle Suite** (não oficial).

English version: `English <../en/index.html>`_.

.. warning::

   Este projeto não é oficial. Não possui afiliação, endosso ou representação da RNP, do EduPlay ou do Moodle HQ.

.. toctree::
   :maxdepth: 2
   :caption: Conteúdo

   installation
   configuration
   usage

Principais recursos
-------------------

* **Inserção validada**: só links ``https://eduplay.rnp.br/app/video/{id}`` (ou a forma de embed, que é normalizada) são aceitos.
* **Referência canônica**: só o link canônico é gravado no conteúdo, nunca uma URL temporária de mídia.
* **Diálogo acessível**: campos rotulados, mensagem de erro anunciada a tecnologias assistivas e operação por teclado.
* **Moodle 4.5 LTS e 5.3 LTS**.
