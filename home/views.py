from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import requests
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt

def home_view(request):
    return render(request, 'core/index.html')
# Create your views here.


@csrf_exempt  # Desabilita a proteção CSRF para esta view
@require_http_methods(["POST"])
def transferencia_pix(request):
    # Supondo que você esteja recebendo esses valores através de um form ou algo similar
    chave_pix = request.POST.get('chave_pix')
    tipo_chave = request.POST.get('tipo_chave')
    valor = float(request.POST.get('valor', 0.01))  # Usando valor padrão para fins de exemplo

    # URL e cabeçalhos conforme exemplo curl
    url = "https://ws.suitpay.app/api/v1/gateway/pix-payment"
    
    # Aqui, atualize para usar as credenciais de produção (não as de teste)
    headers = {
        "Content-Type": "application/json",
        "ci": 'thiagofreitas360_1703683903663',
        "cs": '52fc5230d5ac7b05ab41770d031d1664158659bc9078471a766b7eaeb7338624aa657ef63baf4fc5ba52b39c0e5a0246'
    }
    
    # A URL da API de produção
     # Preparando o corpo da requisição
    body = {
        "value": valor,
        "key": chave_pix,
        "typeKey": tipo_chave
    }

    # Enviando a requisição
    try:
        response = requests.post(url, json=body, headers=headers, timeout=10)
        print("Status Code:", response.status_code)  # Status da resposta
        print("Response Body:", response.text)       # Corpo da resposta

        if response.status_code == 200:
            data = response.json()
            print("Data:", data)  # Mostra os dados JSON da resposta
            if data.get('response') == 'OK':
                return JsonResponse({'status': 'success', 'data': data}, safe=False)
            else:
                return JsonResponse({'status': 'error', 'message': data.get('response')}, status=200)
        else:
            return JsonResponse({'status': 'error', 'message': 'Bad response from API', 'statusCode': response.status_code, 'response': response.text}, safe=False)
    except requests.exceptions.RequestException as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=502)