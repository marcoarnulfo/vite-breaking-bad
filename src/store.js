import {
    reactive
} from 'vue'

export const store = reactive ({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    characters: null,
    //info: null,
    length: null,
    //error: null,
})