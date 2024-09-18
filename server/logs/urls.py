from django.urls import path

from . import views

urlpatterns = [
    # ex: /logs
    path("", views.log_list, name="logs"),
    # ex: /logs/5
    path("<int:id>/", views.log_entry, name="detail"),
]