from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),               # GET /api/
    path("notes/", views.notes_list, name="notes_list"),    # GET / POST /api/notes/
    path("notes/<int:pk>/", views.notes_detail, name="notes_detail"),  # GET/PUT/DELETE /api/notes/<id>/
]
