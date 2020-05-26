from spotify import Spotify
from flask import Flask
app = Flask(__name__)
spotify = Spotify()

@app.route('/search/<string:search_query>/')
def search(search_query):
   return spotify.search(search_query)

if __name__ == '__main__':
    app.run()