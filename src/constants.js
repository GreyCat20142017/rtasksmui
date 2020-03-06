import {API_KEY} from './nogit';

const url = window.location.origin;
export const APP_ROOT = ((url.match(/github\.io/gi)) ? '/rtasksmui' : '');

export const TASKS = {
    MAIN: {
        title: 'Главная',
        component: null,
        comment: 'Тренировка на котиках - 2. React (hooks) - CRA + Material UI-4x, Firebase, chart.js, hookrouter',
        href: '/'
    },
    IT: {
        title: 'IT-Chart',
        component: 'IT',
        comment: '"Есть ли жизнь в ИТ?" - таблица и графики по данным о количестве вакансий/резюме на сайте "Мой круг" (в некоторые дни осени-зимы 2019-2020)',
        href: '/it'
    },
};

export const TASKS_ORDER = [...Object.keys(TASKS).map(key => TASKS[key])];

export const SNACK_OPEN_TIME = 7000;

export const DEFAULT_IT_URL = APP_ROOT + '/data/it.json';

export const ROWS_LIMIT = 10;
export const POINT_LIMIT = 50;
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

export const BASE_URL = '';

export const API_PATH = {
    GET_DATA: 'https://rtasks-cacd5.firebaseio.com/it.json',
    BASE_URL: 'https://rtasks-cacd5.firebaseio.com/it/',
    LOGIN: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY,
    REGISTER: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY ,
    GET_USER: 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + API_KEY,
    UPDATE_USER: 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + API_KEY,
    REFRESH_TOKEN: 'https://securetoken.googleapis.com/v1/token?key=' + API_KEY,
};

export const LS_TOKEN = 'it_firebase_token';
export const LS_TOKEN_EXPIRATION = 'it_firebase_token_expiration';
export const LS_TOKEN_REFRESH = 'it_firebase_token_refresh';
export const DATA_SOURCE_TOKEN_NAME = 'idToken';
export const DATA_SOURCE_TOKEN_REFRESH = 'refresh_token';
export const DATA_SOURCE_TOKEN_REFRESH_NAME = 'refreshToken';
export const DATA_SOURCE_TOKEN_EXPIRATION = 'expiresIn';

export const NONAME = 'Аноним';

export const PROFILE_FIELDS =  ['localId', 'email', 'emailVerified', 'displayName', 'photoUrl']; //, 'lastLoginAt', 'createdAt'];
export const PROFILE_DATE_FIELDS = ['lastLoginAt', 'createdAt'];

export const WRITABLE_PROFILE_FIELDS =  ['displayName', 'photoUrl'];

export const AXIOS_TIMEOUT = 7000;