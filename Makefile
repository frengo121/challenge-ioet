run-server:
	@ cd back; npm run start

run-client:
	@ cd front; npm run start

init:
	@ cd back; npm install
	@ cd front; npm install

test:
	@cd back; npm run converage