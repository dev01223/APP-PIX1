from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path('formulario/', home_view, name='home'),
    path('formulario', home_view, name='home'),

    path('inicio/', inicio, name='inicio'),
    path('cadastro/', cadastro, name='cadastro'),
    path('cupom1/', cupom1, name='cupom1'),
    path('cupom2/', cupom2, name='cupom2'),
    path('cupom3/', cupom3, name='cupom3'),
    path('prevsl/', prevsl, name='prevsl'),
    path('vsl/', vsl, name='vsl'),
    path('saqueTeste/', saqueTeste, name='saqueTeste'),


    path('transferencia_pix/', transferencia_pix, name='transferencia_pix'),




    

    # Aqui estamos definindo a rota para a sua view home
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)