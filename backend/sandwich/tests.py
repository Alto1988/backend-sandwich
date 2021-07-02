from django.http import response
from django.shortcuts import get_object_or_404
from django.test import TestCase
from rest_framework.test import APIRequestFactory, RequestsClient, APIClient
# from model_bakery import Bakery #😠
from .models import SandwichStore

# Create your tests here.


class TestSandwich(TestCase):

    def setUp(self):
        sandwich = SandwichStore.objects.create(sandwich_name='test sandwich')
        
    def test_sandwichstore_was_created(self):
        get_sandwich = SandwichStore.objects.get(sandwich_name='test sandwich')
        self.assertIsNotNone(get_sandwich)

    def test_sandwich_was_not_created(self):
        try:
            sandwich = SandwichStore.objects.get(sandwich_name="test_sandwich")
        except SandwichStore.DoesNotExist:
            sandwich = None
        self.assertIsNone(sandwich)

    