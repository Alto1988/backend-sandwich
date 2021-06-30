from django.urls import path
from . import views

urlpatterns = [
    path('', views.SandwichListAPIView.as_view(), name='sandwich_list'),
    path('<int:id>/', views.SandwichRetrieveAPIView.as_view(), name='sandwich_detail'),
    path('create/', views.SandwichCreateAPIView.as_view(), name='sandwich_create'),
    path('update/<int:id>/', views.SandwichRetrieveUpdateAPIView.as_view(), name='sandwich_update'),
    path('delete/<int:id>/', views.SandwichDestroyAPIView.as_view(), name='sandwich_delete'),
]