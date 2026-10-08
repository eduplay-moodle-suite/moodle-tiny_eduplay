Instalação
==========

Requisitos
----------

* Moodle 4.5 LTS ou 5.3 LTS, com o editor TinyMCE.
* `local_eduplay <https://github.com/eduplay-moodle-suite/moodle-local_eduplay>`_ e `media_eduplay <https://github.com/eduplay-moodle-suite/moodle-media_eduplay>`_, instalados antes.

Passos
------

1. Instale o ``local_eduplay`` em ``local/eduplay`` e o ``media_eduplay`` em ``media/player/eduplay``.
2. Instale este plugin em ``lib/editor/tiny/plugins/eduplay`` (envio de ZIP com a pasta raiz ``eduplay``, ou Git):

   .. code-block:: bash

      git clone https://github.com/eduplay-moodle-suite/moodle-tiny_eduplay.git lib/editor/tiny/plugins/eduplay

3. Abra *Administração do site* > *Notificações* para concluir a instalação. No Moodle 5.1 ou superior, use ``public/`` como diretório base.
