# moodle-tiny_eduplay

[English](#english) · [Português (Brasil)](#português-brasil)

Documentation / Documentação: <https://eduplay-moodle-suite.github.io/moodle-tiny_eduplay/>

## English

TinyMCE plugin of the [EduPlay Moodle Suite](https://github.com/eduplay-moodle-suite): a toolbar button and *Insert* menu item that validate and insert an [EduPlay](https://eduplay.rnp.br/) video link, shown as the official player by [`media_eduplay`](https://github.com/eduplay-moodle-suite/moodle-media_eduplay). Requires `local_eduplay` and `media_eduplay`. Supports Moodle 4.5 LTS and 5.3 LTS.

> Unofficial project: no affiliation with RNP, EduPlay or Moodle HQ.

Install this repository in `lib/editor/tiny/plugins/eduplay` (`public/` prefix on Moodle 5.1+) and visit *Site administration > Notifications*.

## Português (Brasil)

Plugin do TinyMCE da [EduPlay Moodle Suite](https://github.com/eduplay-moodle-suite): botão da barra de ferramentas e item do menu *Inserir* que validam e inserem um link de vídeo do [EduPlay](https://eduplay.rnp.br/), exibido como player oficial pelo [`media_eduplay`](https://github.com/eduplay-moodle-suite/moodle-media_eduplay). Requer `local_eduplay` e `media_eduplay`. Suporta Moodle 4.5 LTS e 5.3 LTS.

> Projeto não oficial: sem afiliação com a RNP, o EduPlay ou o Moodle HQ.

Instale este repositório em `lib/editor/tiny/plugins/eduplay` (prefixo `public/` no Moodle 5.1+) e acesse *Administração do site > Notificações*.

## Development / Desenvolvimento

JavaScript sources are in `amd/src`; rebuild `amd/build` with `npx grunt amd` in a Moodle checkout (`--root=lib/editor/tiny/plugins/eduplay`).

## License / Licença

GNU GPL v3 or later. See [LICENSE](LICENSE).
