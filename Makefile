update-fe:
	cd frontend/ && npm install

test-fe:
	cd frontend/ && npm run test

run-fe:
	cd frontend/ && make run-local

deploy-fe:
	cd frontend/ && npm run deploy

update-be:
	cd backend/ && make install

run-be:
	cd backend/ && make run

deploy-be:
	git subtree push --prefix backend/ heroku master
