import os
import requests
import json
from oauthlib.oauth2 import BackendApplicationClient as BAC
from requests_oauthlib import OAuth2Session

class SpotifyAuth:
    def __init__(self, base_url, token_url):
        get_api_config()
        self.base_url = base_url
        client = BAC(client_id=key)
        self.oauth = OAuth2Session(client=client)
        self.oauth.fetch_token(
            token_url=base_url + token_url, client_secret=secret, client_id=key
        )
    
    def get_api_config(self):
        with open('../config.json') as config:
            data = json.load(config)
            self.id = data['id']
            self.secret = data['secret']

    def close(self):
        self.oauth.close()

    def get(self, url):
        return self.get_raw(url).text

    def get_raw(self, url):
        return self.oauth.get(self.base_url + url)