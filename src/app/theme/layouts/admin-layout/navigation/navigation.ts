export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Default',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'sales',
    title: 'Ventas',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'generate_sales',
        title: 'Generar venta',
        type: 'item',
        classes: 'nav-item',
        url: '/sales',
        icon: 'dashboard',
        breadcrumbs: false
      },
      {
        id: 'sales_list',
        title: 'Lista de ventas',
        type: 'item',
        classes: 'nav-item',
        url: '/sales-list',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'employee',
    title: 'Empleado',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'employe_registration',
        title: 'Registrar empleado',
        type: 'item',
        classes: 'nav-item',
        url: '/employees',
        icon: 'dashboard',
        breadcrumbs: false
      },
      {
        id: 'employees_list',
        title: 'Lista de empleados',
        type: 'item',
        classes: 'nav-item',
        url: '/employees-list',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'productos',
    title: 'Productos',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'product_registration',
        title: 'Registrar producto',
        type: 'item',
        classes: 'nav-item',
        url: '/products',
        icon: 'dashboard',
        breadcrumbs: false
      },
      {
        id: 'product_list',
        title: 'Lista de productos',
        type: 'item',
        classes: 'nav-item',
        url: '/products-list',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'client',
    title: 'Clientes',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'client_registration',
        title: 'Registrar cliente',
        type: 'item',
        classes: 'nav-item',
        url: '/clients',
        icon: 'dashboard',
        breadcrumbs: false
      },
      {
        id: 'clients_list',
        title: 'Lista de clientes',
        type: 'item',
        classes: 'nav-item',
        url: '/clients-list',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'login',
        title: 'Login',
        type: 'item',
        classes: 'nav-item',
        url: '/login',
        icon: 'login',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'register',
        title: 'Register',
        type: 'item',
        classes: 'nav-item',
        url: '/register',
        icon: 'profile',
        target: true,
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'utilities',
    title: 'UI Components',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'tabler',
        title: 'Tabler',
        type: 'item',
        classes: 'nav-item',
        url: 'https://ant.design/components/icon',
        icon: 'ant-design',
        target: true,
        external: true
      }
    ]
  },

  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'chrome'
      }
    ]
  }
];
