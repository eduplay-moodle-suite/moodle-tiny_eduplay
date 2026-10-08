import moodle_docs_theme

project = "moodle-tiny_eduplay"
copyright = "2026, Contribuidores da EduPlay Moodle Suite"
author = "Kelson da Costa Medeiros"
release = "0.1.0"

extensions = [
    "sphinx.ext.githubpages",
    "moodle_docs_theme",
]

templates_path = []
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

language = "pt_BR"

html_theme = "moodle_docs_theme"
html_theme_path = [moodle_docs_theme.get_html_theme_path()]

html_theme_options = {
    "primary_color": "#6c336d",
    "secondary_color": "#f98012",
    "project_name": "moodle-tiny_eduplay",
    "tagline": "Plugin do TinyMCE para inserir vídeos do EduPlay no Moodle (não oficial)",
    "github_url": "https://github.com/eduplay-moodle-suite/moodle-tiny_eduplay",
    "github_repo": "eduplay-moodle-suite/moodle-tiny_eduplay",
    "github_version": "main",
    "doc_path": "docs/pt_BR/",
    "show_edit_on_github": True,
    "enable_dark_mode": True,
    "navigation_links": "Início|index, Instalação|installation, Configuração|configuration, Uso|usage",
}

html_static_path = []
