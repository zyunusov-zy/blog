from rest_framework import generics
from .models import Post
from .serializers import PostSerializer


# List or create posts
class PostListCreateView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
# Retrieve, Update, Delete 
class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer