import { RouteInfo } from './horizontal-sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'Home',
        icon: 'home',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '/dashboard/dashboard1',
                title: 'Modern',
                icon: 'mdi mdi-adjust',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/dashboard/dashboard2',
                title: 'Classic',
                icon: 'mdi mdi-adjust',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/dashboard/dashboard3',
                title: 'Analytical',
                icon: 'mdi mdi-adjust',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
        ]
    },
    {
        path: '',
        title: 'Apps',
        icon: 'inbox',
        class: 'has-arrow',
        ddclass: 'two-column',
        extralink: false,
        submenu: [
            {
                path: '/apps/mail/inbox',
                title: 'Mail',
                icon: 'mdi mdi-inbox',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/chat',
                title: 'Chat',
                icon: 'mdi mdi-comment-processing-outline',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/notes',
                title: 'Notes',
                icon: 'mdi mdi-arrange-bring-forward',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/users',
                title: 'Users',
                icon: 'mdi mdi-account-multiple',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/usersrxjs',
                title: 'Users-Rxjs',
                icon: 'mdi mdi-account-multiple',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/fullcalendar',
                title: 'Calendar',
                icon: 'mdi mdi-calendar',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/taskboard',
                title: 'Taskboard',
                icon: 'mdi mdi-bulletin-board',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/contact',
                title: 'Contact',
                icon: 'mdi mdi-account-box',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/contactrxjs',
                title: 'Contact-Rxjs',
                icon: 'mdi mdi-account-box',
                class: '',
                extralink: false,
                ddclass: '',
                submenu: []
            },
            {
                path: '/apps/contact-list',
                title: 'Contact Lists',
                icon: 'mdi mdi-phone-voip',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/contact-list-rxjs',
                title: 'Contact Lists-Rxjs',
                icon: 'mdi mdi-phone-voip',
                class: '',
                extralink: false,
                ddclass: '',
                submenu: []
            },
            {
                path: '/apps/contact-grid',
                title: 'Contact Grid',
                icon: 'mdi mdi-phone',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/invoice',
                title: 'Invoice',
                icon: 'mdi mdi-file',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/ticketlist',
                title: 'Ticket List',
                icon: 'mdi mdi-book-multiple',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/ticketdetails',
                title: 'Ticket Details',
                icon: 'mdi mdi-book-plus',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/tasks',
                title: 'Tasks',
                icon: 'mdi mdi-clipboard-text',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },


        ]
    },
    {
        path: '',
        title: 'UI',
        icon: 'grid',
        class: 'has-arrow',
        ddclass: 'mega-dropdown',
        extralink: false,
        submenu: [
            {
                path: '/component/accordion',
                title: 'Accordion',
                icon: 'mdi mdi-equal',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/alert',
                title: 'Alert',
                icon: 'mdi mdi-message-bulleted',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/carousel',
                title: 'Carousel',
                icon: 'mdi mdi-view-carousel',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/dropdown',
                title: 'Dropdown',
                icon: 'mdi mdi-arrange-bring-to-front',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/modal',
                title: 'Modal',
                icon: 'mdi mdi-tablet',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/pagination',
                title: 'Pagination',
                icon: 'mdi mdi-backburger',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/poptool',
                title: 'Popover & Tooltip',
                icon: 'mdi mdi-image-filter-vintage',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/progressbar',
                title: 'Progressbar',
                icon: 'mdi mdi-poll',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/rating',
                title: 'Ratings',
                icon: 'mdi mdi-bandcamp',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/tabs',
                title: 'Tabs',
                icon: 'mdi mdi-sort-variant',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/timepicker',
                title: 'Timepicker',
                icon: 'mdi mdi-calendar-clock',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/buttons',
                title: 'Button',
                icon: 'mdi mdi-toggle-switch',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/notifier',
                title: 'Notifier',
                icon: 'mdi mdi-bandcamp',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/cards/basiccards',
                title: 'Basic Cards',
                icon: 'mdi mdi-layers',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/cards/customcards',
                title: 'Custom Cards',
                icon: 'mdi mdi-credit-card-scan',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/cards/weathercards',
                title: 'Weather Cards',
                icon: 'mdi mdi-weather-fog',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/toastr',
                title: 'Toastr',
                icon: 'mdi mdi-poll',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/editor',
                title: 'Editor',
                icon: 'mdi mdi-dns',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/dragndrop',
                title: 'Drag n Drop',
                icon: 'mdi mdi-arrow-expand-all',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/widgets/apps',
                title: 'Widget Apps',
                icon: 'mdi mdi-comment-processing-outline',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/widgets/data',
                title: 'Widget Data',
                icon: 'mdi mdi-calendar',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Forms',
        icon: 'file-text',
        class: 'has-arrow',
        ddclass: 'two-column',
        extralink: false,
        submenu: [
            {
                path: '/forms/forminputs',
                title: 'Form Inputs',
                icon: 'mdi mdi-priority-low',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/inputgroups',
                title: 'Input Groups',
                icon: 'mdi mdi-rounded-corner',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/inputgrid',
                title: 'Input Grid',
                icon: 'mdi mdi-select-all',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/checkboxandradio',
                title: 'Checkbox & Radio',
                icon: 'mdi mdi-shape-plus',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/multiselect',
                title: 'Multiselect',
                icon: 'mdi mdi-select-inverse',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/formbasic',
                title: 'Basic Forms',
                icon: 'mdi mdi-vector-difference-ba',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/formhorizontal',
                title: 'Horizontal Forms',
                icon: 'mdi mdi-file-document-box',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/formactions',
                title: 'Form Actions',
                icon: 'mdi mdi-code-greater-than',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/formrowseparator',
                title: 'Row Separator',
                icon: 'mdi mdi-code-equal',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/formstripedrows',
                title: 'Striped Rows',
                icon: 'mdi mdi-content-duplicate',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/formdetail',
                title: 'Detail Forms',
                icon: 'mdi mdi-cards-outline',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/formvalidation',
                title: 'Form Validation',
                icon: 'mdi mdi-alert-box',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/typehead',
                title: 'Form Typehead',
                icon: 'mdi mdi-backburger',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/datepicker',
                title: 'Datepicker',
                icon: 'mdi mdi-calendar-check',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/language-datepicker',
                title: 'Language Datepicker',
                icon: 'mdi mdi-calendar-check',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
            {
                path: '/forms/ngx',
                title: 'Form Steps',
                icon: 'mdi mdi-attachment',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: [],
            },
        ]
    },
    {
        path: '',
        title: 'Tables',
        icon: 'server',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '',
                title: 'Bootstrap Tables',
                icon: 'mdi mdi-border-none',
                class: 'has-arrow',
                ddclass: '',
                extralink: false,
                submenu: [
                    {
                        path: '/tables/basictables',
                        title: 'Basic Tables',
                        icon: 'mdi mdi-border-all',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    },
                    {
                        path: '/tables/darktables',
                        title: 'Dark Basic Tables',
                        icon: 'mdi mdi-border-all',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    },
                    {
                        path: '/tables/colortables',
                        title: 'Colored Tables',
                        icon: 'mdi mdi-border-all',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    },
                    {
                        path: '/tables/tablesizing',
                        title: 'Table Sizing',
                        icon: 'mdi mdi-border-all',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    }
                ]
            },
            {
                path: '/tables/datatable',
                title: 'Data Tables',
                icon: 'mdi mdi-border-vertical',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Charts',
        icon: 'bar-chart-2',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '/charts/chartjs',
                title: 'Chart Js',
                icon: 'mdi mdi-svg',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/charts/chartistjs',
                title: 'Chartist Js',
                icon: 'mdi mdi-blur',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/charts/ngxchart',
                title: 'Ngx Charts',
                icon: 'mdi mdi-blur',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Pages',
        icon: 'book-open',
        class: 'has-arrow',
        ddclass: 'mega-dropdown',
        extralink: false,
        submenu: [
            {
                path: '/ecom/products',
                title: 'Products',
                icon: 'mdi mdi-cards-variant',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/cart',
                title: 'Cart',
                icon: 'mdi mdi-cart',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/edit',
                title: 'Edit Products',
                icon: 'mdi mdi-cart-plus',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/details',
                title: 'Product Details',
                icon: 'mdi mdi-camera-burst',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/orders',
                title: 'Orders',
                icon: 'mdi mdi-chart-pie',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/checkout',
                title: 'Checkout',
                icon: 'mdi mdi-clipboard-check',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/maps/google',
                title: 'Google Maps',
                icon: 'mdi mdi-google-maps',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/login',
                title: 'Login',
                icon: 'mdi mdi-account-key',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/login2',
                title: 'Login 2',
                icon: 'mdi mdi-account-key',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/signup',
                title: 'Register',
                icon: 'mdi mdi-account-plus',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/signup2',
                title: 'Register 2',
                icon: 'mdi mdi-account-plus',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/404',
                title: '404',
                icon: 'mdi mdi-alert-outline',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/lock',
                title: 'Lockscreen',
                icon: 'mdi mdi-account-off',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: 'sample-pages/profile',
                title: 'Profile',
                icon: 'mdi mdi-account-network',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: 'sample-pages/pricing',
                title: 'Pricing',
                icon: 'mdi mdi-file-export',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: 'sample-pages/invoice',
                title: 'Invoice',
                icon: 'mdi mdi-ungroup',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: 'sample-pages/helperclasses',
                title: 'Helper Classes',
                icon: 'mdi mdi-tune',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/starter',
                title: 'Starter Page',
                icon: 'mdi mdi-crop-free',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/timeline/left',
                title: 'Left Timeline',
                icon: 'mdi mdi-clock-fast',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/timeline/right',
                title: 'Right Timeline',
                icon: 'mdi mdi-clock-end',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/timeline/center',
                title: 'Center Timeline',
                icon: 'mdi mdi-clock-in',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/fontawesome',
                title: 'Fontawesome',
                icon: 'mdi mdi-emoticon-cool',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/simpleline',
                title: 'Simple Line Icons',
                icon: 'mdi mdi mdi-image-broken-variant',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/material',
                title: 'Material Icons',
                icon: 'mdi mdi-emoticon',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'DD',
        icon: 'align-left',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '',
                title: 'Second Level',
                icon: 'mdi mdi-octagram',
                class: '',
                ddclass: '',
                extralink: true,
                submenu: []
            },
            {
                path: '/second',
                title: 'Second Child',
                icon: 'mdi mdi-octagram',
                class: 'has-arrow',
                ddclass: '',
                extralink: false,
                submenu: [
                    {
                        path: '/thirdone',
                        title: 'Third 1.1',
                        icon: 'mdi mdi-playlist-plus',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    },
                    {
                        path: '/thirdtwo',
                        title: 'Third 1.2',
                        icon: 'mdi mdi-playlist-plus',
                        class: '',
                        ddclass: '',
                        extralink: false,
                        submenu: []
                    }
                ]
            }
        ]
    }
];
