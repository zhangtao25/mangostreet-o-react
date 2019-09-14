import Login from './../layouts/Login'
import Main from './../layouts/Main'

import NotesManagement from './../view/NotesManagement/NotesManagement'
import UsersManagement from './../view/UsersManagement/UsersManagement'
const routes = [
  {
    path: "/Login",
    component: Login
  },
  {
    path: "/Main",
    component: Main,
    routes: [
      {
        path: "/Main/NotesManagement",
        component: NotesManagement,
      },
      {
        path: "/Main/UsersManagement",
        component: UsersManagement,
      }
    ]
  }
];

export default routes
