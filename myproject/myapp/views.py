from django.shortcuts import render
from django.http import JsonResponse
import ast
from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request,'myapp/index.html')

def evaluate_expression(request):
    if request.method == 'POST':
        data = ast.literal_eval(request.body.decode())
        expression = data.get('expression')
        try:
            result = eval(expression)
            return JsonResponse({'result': result})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
        
def calculator_view(request):
    return render(request, 'myapp/index.html')
