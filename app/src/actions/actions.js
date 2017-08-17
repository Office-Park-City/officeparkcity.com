import fetch from 'isomorphic-fetch'

export const TOGGLE_SETTING = 'TOGGLE_SETTING'

// const baseUrl = process.env.NODE_ENV !== 'production' ? `http://localhost:8000/api-2017` : '/api-2017';

export function toggleSetting() {
    return {
        type: TOGGLE_SETTING,
    }
}