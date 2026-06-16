# script for starting dev server
#1. `--base-url /european-ordination-program` is used so that links are correct when built with Github pages
#2. `--config _config.yml,_config_development.yml` override any prod config with dev config (e.g. analytics)

bundle exec jekyll serve --baseurl /european-ordination-program --config _config.yml,_config_development.yml