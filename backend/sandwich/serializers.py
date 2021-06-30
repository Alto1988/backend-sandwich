from rest_framework import serializers
from .models import SandwichStore


class SandwichListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SandwichStore
        fields = ['id','sandwich_name','city','zip_code','logo_image']



class SandwichDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = SandwichStore
        fields = [
            'id',
            'sandwich_name',
            'street',
            'city',
            'state',
            'zip_code',
            'website',
            'phone_number',
            'description',
            'logo_image',
            'email',
            'active'
        ]