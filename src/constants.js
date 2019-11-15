const url = window.location.origin;
export const APP_ROOT = ((url.match(/github\.io/gi)) ? '/figures' : '');

export const TASKS = {
    MAIN: {
        title: 'Главная',
        component: null,
        comment: 'Тренировка на котиках. React (hooks) - CRA + Material UI-4x, chart.js, React-DnD, hookrouter',
        href: '/'
    },

    FIGURES: {
        title: 'Figures',
        component: 'AppFigures',
        comment: 'React DnD',
        href: '/figures'
    },

    IT: {
        title: 'ChartJS',
        component: 'AppIt',
        comment: '"Есть ли жизнь в ИТ?" - график по данным о количестве вакансий с сайта Мой круг (в некоторые дни осени 2019)"',
        href: '/it'
    },
}

export const TASKS_ORDER = [...Object.keys(TASKS).map(key => TASKS[key])];

export const SNACK_OPEN_TIME = 7000;
