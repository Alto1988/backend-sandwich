from rest_framework import serializers
from .models import SandwichStore
from rest_framework.reverse import reverse

class SandwichListSerializer(serializers.ModelSerializer):
    absolute_url = serializers.SerializerMethodField()
    class Meta:
        model = SandwichStore
        fields = ['id','sandwich_name','city','zip_code','logo_image', 'absolute_url']

    def get_absolute_url(self, obj):
        return reverse('sandwich_detail', args=(obj.pk,))
    
    



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
    def get_update(self, obj):
        return reverse('sandwich_update', args=(obj.pk,))  
    
    
    def get_delete(self, obj):
        return reverse('sandwich_delete', args=(obj.pk,))
