from spotify import Spotify
from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
spotify = Spotify()

@app.route('/search/<string:search_query>/')
@cross_origin()
def search(search_query):
   return spotify.search(search_query)

if __name__ == '__main__':
    app.run()