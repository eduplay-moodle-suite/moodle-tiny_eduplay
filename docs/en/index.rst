moodle-tiny_eduplay
===================

**moodle-tiny_eduplay** adds a button and an *Insert* menu item to the Moodle TinyMCE editor to insert EduPlay videos. The author pastes the video link, the plugin validates it, and the canonical link is inserted into the content; `moodle-media_eduplay <https://eduplay-moodle-suite.github.io/moodle-media_eduplay/>`_ shows it as the official player when the content is displayed. It is part of the unofficial **EduPlay Moodle Suite**.

Versão em português: `Português (Brasil) <../pt-br/index.html>`_.

.. warning::

   This project is unofficial. It has no affiliation with, or endorsement by, RNP, EduPlay or Moodle HQ.

.. toctree::
   :maxdepth: 2
   :caption: Contents

   installation
   configuration
   usage

Main features
-------------

* **Validated insertion**: only ``https://eduplay.rnp.br/app/video/{id}`` links (or the embed form, which is normalized) are accepted.
* **Canonical reference**: only the canonical link is stored in the content, never a temporary media URL.
* **Accessible dialog**: labelled fields, an error message announced to assistive technologies and keyboard operation.
* **Moodle 4.5 LTS and 5.3 LTS**.
