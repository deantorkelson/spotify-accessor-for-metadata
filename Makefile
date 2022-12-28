update-fe:
	cd frontend/ && npm install

update-be:
	cd backend/ && pip install -r requirements.txt

test-fe:
	cd frontend/ && npm run test

run-fe:
	cd frontend/ && make run-local

run-be:
	cd backend/ && make run

deploy-fe:
	cd frontend/ && npm run deploy

deploy-be:
	echo 'not set up'
