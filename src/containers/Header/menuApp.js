export const adminMenu = [
    { //Manage User
        name: 'menu.admin.manage user',
        menus: [
            {
                name: 'menu.admin.manage user react', link: '/system/user-manage'

            },
            {
                name: 'menu.admin.create user redux', link: '/system/user-redux'

            },
            {
                name: 'menu.admin.display user redux', link: '/system/display-user-redux'

            },
            {
                name: 'menu.admin.manage doctor', link: '/system/manage-doctor'
            },
            {
                name: 'menu.admin.manage admin', link: '/system/user-admin'

            },

            {
                name: 'menu.doctor.manage schedule', link: '/doctor/manage-schedule'
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
export const doctorMenu = [
    {
        name: 'menu.admin.manage user',
        menus: [
            { //Manage doctor's schedule
                name: 'menu.doctor.manage schedule', link: '/doctor/manage-schedule'
            },
        ]
    }


];