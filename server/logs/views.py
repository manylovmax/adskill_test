import json
import os

from django.http import JsonResponse

logs_path = os.path.join(os.path.dirname(__file__), 'logs.json')


def log_list(request):
    with open(logs_path, 'r') as logs_file:
        logs = json.load(logs_file)
    return JsonResponse(logs, safe=False)

def log_entry(request, id):
    with open(logs_path, 'r') as logs_file:
        logs = json.load(logs_file)
        response = None
        for log in logs:
            if log['id'] == id:
                response = log
    return JsonResponse(response, safe=False)
