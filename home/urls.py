from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path('', home_view, name='home'),
    path('transferencia_pix/', transferencia_pix, name='transferencia_pix'),




    

    # Aqui estamos definindo a rota para a sua view home
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)