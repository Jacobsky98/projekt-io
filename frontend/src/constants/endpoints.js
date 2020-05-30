const api = 'http://localhost:8000';

export const endpoint = {
  courses: `${api}/courses/`,
  addCourse: `${api}/courses/add/`,
  authorize: `${api}/token/obtain/`,
  currentUser: `${api}/current_user/`,
  users: `${api}/users/`,
  getUser: (userId) => `${api}/user/${userId}/`,
  createUser: `${api}/user/create/`,
  coursesForUser: `${api}/user/courses/`,
  messages: `${api}/messages/`,
  sendMessage: `${api}/messages/send/`,
  opinions: `${api}/opinions/`,
  announcements: `${api}/annoucements/`,
  tasks: `${api}/tasks/`,
  addAnnouncement: `${api}/annoucements/add/`,
  sendOpinion: `${api}/opinion/add/`,
  grades: `${api}/grades/`,
  presences: `${api}/presences/`,
};

// urlpatterns = [
//   path('current_user/', current_user),
//   path('users/', UserAPIView.as_view()),
//   path('user/<int:id>/', UserDetails.as_view()),
//   path('user/courses/', UserCoursesAPIView.as_view()),
//   path('user/create/', UserCreate.as_view(), name="create_user"),
//   path('token/obtain/', ObtainTokenPairWithRoleView.as_view(), name='token_create'),
//   path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
//   path('hello/', HelloWorldView.as_view(), name='hello_world')
//
// ]

// urlpatterns = [
//   #get
//   path('messages/', MessageAPIView.as_view()),
//   path('messages/<int:id>/', MessageAPIView.as_view()),
//   path('courses/', CourseAPIView.as_view()),
//   path('courses/<int:id>/', CourseAPIView.as_view()),
//   path('opinions/', OpinionsAPIView.as_view()),
//   path('opinions/<int:id>/', OpinionsAPIView.as_view()),
//   path('annoucements/', AnnoucementAPIView.as_view()),
//   path('annoucements/<int:id>/', AnnoucementAPIView.as_view()),
//   path('grades/', GradeAPIView.as_view()),
//   path('grades/<int:id>/', GradeAPIView.as_view()),
//   path('tasks/', TaskAPIView.as_view()),
//   path('tasks/<int:id>/', TaskAPIView.as_view()),
//   path('presences/', PresenceAPIView.as_view()),
//   path('presences/<int:id>/', PresenceAPIView.as_view()),
//   path('files/', FileAPIView.as_view()),
//   path('files/<int:id>/', FileAPIView.as_view()),
//
//   #post
//   path('courses/add/', CourseCreate.as_view(), name='course_add'),
//   path('messages/send/', MessageCreate.as_view(), name='message_send'),
//   path('files/add/', FileCreate.as_view(), name='file_add'),
//   path('opinions/add/', OpinionsCreate.as_view(), name='opinion_add'),
//   path('annoucements/add/', AnnoucementCreate.as_view(), name='annoucement_add'),
//   path('grades/add/', GradeCreate.as_view(), name='grade_add'),
//   path('tasks/add/', TaskCreate.as_view(), name='task_add'),
//   path('presences/add/', PresenceCreate.as_view(), name='presence_add')
// ]
