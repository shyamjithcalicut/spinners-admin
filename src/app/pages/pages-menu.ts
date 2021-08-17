import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Masters',
    icon: 'lock-outline',
    children: [
      {
        title: 'Store',
        link: '/pages/Stores',
      },
      {
        title: 'Area',
        link: '/pages/Areas',
      },
      {
        title: 'Category',
        link: '/pages/Categories',
      },
      {
        title: 'Item',
        link: '/pages/Items',
      },
      {
        title: 'Customer',
        link: '/pages/Customers',
      },
    ],
  },
  {
    title: 'Orders',
    icon: 'lock-outline',
    children: [
      {
        title: 'New Orders',
        link: '/auth/login',
      },
      {
        title: 'Pending Orders',
        link: '/auth/register',
      },
      {
        title: 'Completed Orders',
        link: '/auth/request-password',
      }
    ],
  },
  {
    title: 'Users',
    icon: 'lock-outline',
    children: [
      {
        title: 'User List',
        link: '/auth/login',
      },
      {
        title: 'User Roles',
        link: '/auth/register',
      },
      {
        title: 'Role Permissions',
        link: '/auth/request-password',
      }
    ],
  }  
];
