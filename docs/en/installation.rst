Installation
============

Requirements
------------

* Moodle 4.5 LTS or 5.3 LTS, with the TinyMCE editor.
* `local_eduplay <https://github.com/eduplay-moodle-suite/moodle-local_eduplay>`_ and `media_eduplay <https://github.com/eduplay-moodle-suite/moodle-media_eduplay>`_, installed first.

Steps
-----

1. Install ``local_eduplay`` into ``local/eduplay`` and ``media_eduplay`` into ``media/player/eduplay``.
2. Install this plugin into ``lib/editor/tiny/plugins/eduplay`` (ZIP upload with top-level folder ``eduplay``, or Git):

   .. code-block:: bash

      git clone https://github.com/eduplay-moodle-suite/moodle-tiny_eduplay.git lib/editor/tiny/plugins/eduplay

3. Open *Site administration* > *Notifications* to finish the installation. On Moodle 5.1 and later, use ``public/`` as the base directory.
