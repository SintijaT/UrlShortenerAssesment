from random import random
from typing import Dict

from rest_framework.response import Response
from rest_framework.decorators import api_view

from domain.models import Item
from api.serializers import ItemSerializer


@api_view(['GET'])
def getData(request) -> Response:
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
def deleteItem(request, event_id) -> Response:
    item = Item.objects.get(id=event_id)
    item.delete()
    return Response()


@api_view(['POST'])
def shortenUrl(request) -> Response:
    data = _add_shorten_url(request.data)
    serializer = ItemSerializer(data=data)
    if not serializer.is_valid():
        return Response(serializer.errors)
    serializer.save()
    return Response(serializer.data)


def _add_shorten_url(data: Dict) -> Dict:
    data = Item.objects.create(
        short_url=f'not_implemented_{random()}',
        original_url=data['original_url'],
        user_id=data['user_id'],
    )
    return data.__dict__
