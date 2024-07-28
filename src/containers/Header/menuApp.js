export const adminMenu = [
    { //Manage User
        name: 'menu.admin.manage user',
        menus: [
            {
                name: 'menu.admin.manage user react', link: '/system/user-manage'

            },
            {
                name: 'menu.admin.manage user redux', link: '/system/user-redux'

            },
            {
                name: 'menu.admin.manage doctor', link: '/system/user-doctor'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.manage admin', link: '/system/user-admin'

            },

        ]
    },
    { //Manage Clinic
        name: 'menu.admin.clinic',
        menus: [
            {
                name: 'menu.admin.manage clinic', link: '/system/manage-clinic'
            },
        ]
    },
    { //Manage speciallity
        name: 'menu.admin.speciallity',
        menus: [
            {
                name: 'menu.admin.manage speciallity', link: '/system/manage-speciallity'
            },
        ]
    },
    { //Manage handbook
        name: 'menu.admin.handbook',
        menus: [
            {
                name: 'menu.admin.manage handbook', link: '/system/manage-handbook'
            },
        ]
    },
];