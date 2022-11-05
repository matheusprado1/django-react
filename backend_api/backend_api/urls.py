"""backend_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))

http post http://127.0.0.1:8000/api/token/ username=admin password=1234

http http://127.0.0.1:8000/api/vendors/ "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NjE1MTAzLCJpYXQiOjE2Njc2MTQ4MDMsImp0aSI6IjY0YjI0ZGE4NjkyODQ2OWY5NDNiYTkxNmNjMWIyZDNjIiwidXNlcl9pZCI6MX0.FvgkmkPD7lZcfPRfBzaFAnc8iQ14gwmMt62EGHHeL2k"

http http://127.0.0.1:8000/api/token/refresh/ refresh=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2NzcwMTIwMywiaWF0IjoxNjY3NjE0ODAzLCJqdGkiOiIyNzdlOTVlMjEzMmM0ZTQ5YjE2MWJiNGVjNDkzNzBmYyIsInVzZXJfaWQiOjF9.cNuXfcdrgrgeihKj6R2CKUnU4yBdXNjzbawxbgEDpMY

"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('main.urls')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api-auth/', include('rest_framework.urls')),
]
