from random import random
from typing import Dict

from rest_framework.response import Response
from rest_framework.decorators import api_view

from domain.models import Item
from api.serializers import ItemSerializer

# TODO: GET DATA
# TODO: DELETE ENTRY BY ID API


@api_view(['POST'])
def shortenUrl(request) -> Response:  # todo: define basemodel with actually expected fields: user_id and original_url
    data = _add_shorten_url(request.data)
    serializer = ItemSerializer(data=data)
    if not serializer.is_valid():
        return Response(serializer.errors)
    serializer.save()
    return Response(serializer.data)


def _add_shorten_url(data: Dict):
    # todo: actually shorten link
    data = Item.objects.create(
        short_url=f'not_implemented_{random()}',
        original_url=data['original_url'],
        user_id=data['user_id'],
    )
    return data.__dict__
