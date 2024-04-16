from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import requests
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt

def home_view(request):
    return render(request, 'core/index.html')
# Create your views here.

def inicio(request):
    return render(request, 'core/inicio.html')

def cadastro(request):
    return render(request, 'core/cadastro.html')

def cupom1(request):
    return render(request, 'core/cupom1.html')

def cupom2(request):
    return render(request, 'core/cupom2.html')

def cupom3(request):
    return render(request, 'core/cupom3.html')

def prevsl(request):
    return render(request, 'core/prevsl.html')

def vsl(request):
    return render(request, 'core/vsl.html')

def saqueTeste(request):
    return render(request, 'core/saqueTeste.html')




@csrf_exempt
@require_http_methods(["POST"])
def transferencia_pix(request):
    chave_pix = request.POST.get('chavePix')
    tipo_chave = request.POST.get('tipoChave')
    valor = 0.05  # valor fixo de cinco centavos definido no backend

    url = "https://ws.suitpay.app/api/v1/gateway/pix-payment"
    headers = {
        "Content-Type": "application/json",
        "ci": 'thiagofreitas360_1703683903663',
        "cs": '52fc5230d5ac7b05ab41770d031d1664158659bc9078471a766b7eaeb7338624aa657ef63baf4fc5ba52b39c0e5a0246'
    }
    
    body = {
        "value": valor,
        "key": chave_pix,
        "typeKey": tipo_chave
    }

    try:
        response = requests.post(url, json=body, headers=headers, timeout=10)
        if response.status_code == 200:
            data = response.json()
            response_data = {
                'status': 'success',
                'message': 'Pagamento via PIX enviado com sucesso.',
                'data': data
            }
        else:
            response_data = {
                'status': 'error',
                'message': 'Resposta inesperada da API: ' + response.text,
                'status_code': response.status_code,
            }
    except requests.exceptions.RequestException as e:
        response_data = {
            'status': 'error',
            'message': f'Exceção ao enviar requisição: {str(e)}',
            'status_code': 502,
        }
    
    return JsonResponse(response_data)