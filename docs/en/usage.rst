Usage
=====

1. In the editor, click the **EduPlay** button (or use *Insert* > *Insert EduPlay video*).
2. Paste the video link, for example ``https://eduplay.rnp.br/app/video/353479``.
3. Optionally type the link text; if you had text selected, it is pre-filled. The text is used as the title of the player for screen readers.
4. Click **Insert**.

Invalid links (other hosts, ``http``, wrong route) keep the dialog open with an error message. A link in the embed form (``/app/video/embed/{id}``) is normalized to the canonical form.

The inserted content is a normal link. When the content is displayed, ``media_eduplay`` replaces it with the official player.
