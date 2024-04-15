from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import requests
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt

def home_view(request):
    return render(request, 'core/index.html')
# Create your views here.


@csrf_exempt
@require_http_methods(["POST"])
def transferencia_pix(request):
    chave_pix = request.POST.get('chave_pix')
    tipo_chave = request.POST.get('tipo_chave')
    valor = float(request.POST.get('valor', 0.01))  # valor padrão

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
            # Se o status_code não for 200, retornaremos o status como 'error' e a resposta completa da API.
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