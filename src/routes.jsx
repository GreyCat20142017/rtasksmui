export const HIDE_WHEN = {
    AUTH: 'authenticated',
    NOT_AUTH:  'not authenticated',
    NEVER: 'never'
};

export const ROUTES = {
    MAIN: {
        href: '/',
        title: 'Главная страница',
        label: '',
        icon: 'Home',
        exact: true,
        hide: HIDE_WHEN.NEVER
    },
    IT: {
        href: '/it',
        title: 'Есть ли жизнь в IT?',
        label: 'IT',
        icon: '',
        hide: HIDE_WHEN.NEVER
    },
    SIGN_IN: {
        href: '/login',
        title: 'Вход',
        label: '',
        icon: '',
        userSubmenu: true,
        hide: HIDE_WHEN.AUTH
    },
    SIGN_UP: {
        href: '/register',
        title: 'Регистрация',
        label: '',
        icon: '',
        userSubmenu: true,
        hide: HIDE_WHEN.AUTH
    },
    LOGOUT: {
        href: '/logout',
        title: 'Выход',
        label: '',
        icon: '',
        userSubmenu: true,
        hide: HIDE_WHEN.NOT_AUTH
    },
    PROFILE: {
        href: '/profile',
        title: 'Профиль',
        label: '',
        icon: '',
        userSubmenu: true,
        hide: HIDE_WHEN.NOT_AUTH
    }
}