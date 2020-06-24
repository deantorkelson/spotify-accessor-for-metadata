run-fe:
	cd frontend/ && make run-local

run-be:
	cd backend/ && make run

deploy-fe:
	git subtree push --prefix frontend/ origin gh-pages

deploy-be:
	git subtree push --prefix backend/ heroku master
