# build local Jekyll pages
PORT := 4004

local: 
	bundle exec jekyll serve --port $(PORT) --config _config.yml,_config_dev.yml

build: 
	bundle exec jekyll build

check:
	bundle exec htmlproofer ./_site

check-internal:
	bundle exec htmlproofer ./_site --disable-external


debug: clean
	bundle exec jekyll build --trace --config _config.yml,_config_dev.yml

clean:
	rm -rf _site/*
	@echo "cleaning _site"

####

DEPLOY := ewan@staff.ssh.inf.ed.ac.uk:/public/homepages/ewan/web//prewired-17
SITE := _site/
RSYNC_OPTS := -avz -e ssh --delete-after --delete-excluded

deploy: $(SITE)
	rsync $(RSYNC_OPTS) $(SITE) $(DEPLOY)

.PHONY: $(SITE)

$(SITE):
	bundle exec jekyll build









