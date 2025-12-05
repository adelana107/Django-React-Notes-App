from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer


# Routes endpoint
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {'Endpoint': '/notes/', 'method': 'GET', 'body': None, 'description': 'Returns a list of notes'},
        {'Endpoint': '/notes/<id>/', 'method': 'GET', 'body': None, 'description': 'Returns a single note'},
        {'Endpoint': '/notes/create/', 'method': 'POST', 'body': {'body': ""}, 'description': 'Creates new note'},
        {'Endpoint': '/notes/<id>/update/', 'method': 'PUT', 'body': {'body': ""}, 'description': 'Updates a note'},
        {'Endpoint': '/notes/<id>/delete/', 'method': 'DELETE', 'body': None, 'description': 'Deletes a note'},
    ]
    return Response(routes)

# List and create notes
@api_view(['GET', 'POST'])
def notes_list(request):
    if request.method == 'GET':
        notes = Note.objects.all().order_by('-updated')
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        note = Note.objects.create(body=data['body'])
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data, status=201)


# Retrieve, update, delete a single note
@api_view(['GET', 'PUT', 'DELETE'])
def notes_detail(request, pk):
    try:
        note = Note.objects.get(id=pk)
    except Note.DoesNotExist:
        return Response({'error': 'Note not found'}, status=404)

    if request.method == 'GET':
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = NoteSerializer(instance=note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    if request.method == 'DELETE':
        note.delete()
        return Response({'message': 'Note deleted!'}, status=204)
