install:
	npm install
	cd app && npm install

dev:
	cd app && npm start

production:
	cd app && npm run build
	cd .. npm start

build:
	cd app && npm run build


