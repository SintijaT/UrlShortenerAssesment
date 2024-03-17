from rest_framework.test import APITestCase
from api.views import _add_shorten_url


class ApiTester(APITestCase):
    def test_temp_debugger_short_url_logic(self):
        data = {
            'original_url': 'https://www.youtube.com/watch?v=nxKivzjCFNg',
            'user_id': 'vsNd8329',
        }
        _add_shorten_url(data)
