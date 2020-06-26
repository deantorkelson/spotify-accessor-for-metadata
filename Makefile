run-fe:
	cd frontend/ && make run-local

run-be:
	cd backend/ && make run

deploy-fe:
	cd frontend/ && npm run deploy

deploy-be:
	git subtree push --prefix backend/ heroku master
