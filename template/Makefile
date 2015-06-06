PORT ?= 5000

development: install
	@NODE_PATH=lib PORT=$(PORT) ./node_modules/.bin/node-dev --harmony index.js

production:
	@NODE_ENV=production NODE_PATH=lib PORT=$(PORT) node --harmony index.js

install: package.json
	@npm install
	@touch node_modules

lint:
	@./node_modules/.bin/standard

watch:
	@./node_modules/.bin/wtch -e js,css,jade | ./node_modules/.bin/garnish

.PHONY: lint development production
