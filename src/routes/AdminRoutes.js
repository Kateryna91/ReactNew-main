import React from 'react';

const ListUsers = React.lazy(() => import("../components/admin/users/List"));
const MainAdminPage = React.lazy(() => import("../components/admin"));

const adminRoutes = [
    { path: '/admin/users/list', exact: true, name: 'Користувачі', component: ListUsers  },
    { path: '/admin', exact: true, name: 'Головна', component: MainAdminPage  }
];
export default adminRoutes;