const url = window.location.origin;
export const APP_ROOT = ((url.match(/github\.io/gi)) ? '/rtasksmui' : '');

export const TASKS = {
    MAIN: {
        title: 'Главная',
        component: null,
        comment: 'Тренировка на котиках - 2. React (hooks) - CRA + Material UI-4x, chart.js, React-DnD, hookrouter',
        href: APP_ROOT + '/'
    },

    FIGURES: {
        title: 'Figures',
        component: 'AppFigures',
        comment: 'React DnD',
        href: APP_ROOT + '/figures'
    },

    IT: {
        title: 'IT-Chart',
        component: 'AppIt',
        comment: '"Есть ли жизнь в ИТ?" - таблица и графики по данным о количестве вакансий/резюме на сайте "Мой круг" (в некоторые дни осени 2019)',
        href: APP_ROOT + '/it'
    },
};

export const TASKS_ORDER = [...Object.keys(TASKS).map(key => TASKS[key])];

export const SNACK_OPEN_TIME = 7000;

export const DEFAULT_IT_URL = APP_ROOT + '/data/it.json';

export const ROWS_LIMIT = 10;
export const POINT_LIMIT = 5;
export const LABELS_LIMIT = 5;
export const ROWS_PER_PAGE_OPTIONS = [5, 10, 15, 50];

export const DICTIONARY = {
    'date': 'дата',
    'total': 'всего',
    'remote': 'удаленка',
    'resume': 'резюме',
};

export const LOCAL_STORAGE = 'rtasksmui';
export const LS_FLAG = 'fromLS';

export const IT_COLUMNS = ['date', 'total', 'remote', 'resume'];
export const IT_COLUMNS_ERRORS = {
    'date': 'Дата должна быть заполнена и быть корректной',
    'total': 'Обязательное поле "Всего вакансий" должно быть числом >=0',
    'remote': 'Обязательное поле "Удаленка" должно быть числом >=0',
    'resume': 'Обязательное поле "Резюме" должно быть числом >=0'
};