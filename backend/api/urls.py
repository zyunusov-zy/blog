from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from api import views as api_views

urlpatterns = [
    path('user/token/', api_views.MyTokenObtainPairView.as_view()),
    path('user/token/refresh/', TokenRefreshView.as_view()),
    path('user/register/', api_views.RegisterView.as_view()),
    path('user/profile/<user_id>/', api_views.ProfileView.as_view()),
    
    # Post EndPoints
    path('post/category/list/', api_views.CategoryListAPIView.as_view()),
    path('post/category/posts/<category_slug>/', api_views.PostCategoryListAPIView.as_view()),
    path('post/lists/', api_views.PostListsAPIView.as_view()),
    path('post/detail/<slug>/', api_views.PostDetailAPIView.as_view()),

    # Like
    path('post/like-post/', api_views.LikePostAPIVIew.as_view()),
    # Comment
    path('post/comment-post/', api_views.CommentPostAPIView.as_view()),
    path('post/bookmark-post/', api_views.BookmarkPostAPIView.as_view()),

    
    path('author/dashboard/stats/<user_id>/', api_views.DashboardStatsAPIView.as_view()),
    path('author/dashboard/post-list/<user_id>/', api_views.DashboardPostListsAPIView.as_view()),
    path('author/dashboard/comment-list/<user_id>/', api_views.DashboardCommentListsAPIView.as_view()),
    path('author/dashboard/noti-list/<user_id>/', api_views.DashboardNotificationListsAPIView.as_view()),
    path('author/dashboard/noti-mark-seen/', api_views.DashboardMarkNotificationAsSeen.as_view()),
    path('author/dashboard/reply-comment/', api_views.DashboardReplyCommentAPIView.as_view()),

    path('author/dashboard/post-create/', api_views.DashboardCreatePostAPIView.as_view()),
    path('author/dashboard/post-detail/<user_id>/<post_id>/', api_views.DashboardPostEditAPIView.as_view()),


]
