from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("notes/", views.getNotes, name="notes"),
    path("note/<str:pk>/", views.getNote, name="note"),
    path("note/<str:pk>/update/", views.updateNote, name="update-note"),
        path("note/<str:pk>/delete/", views.deleteNote, name="delet-note"),

]
