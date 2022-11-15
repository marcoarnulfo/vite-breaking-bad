import {
    reactive
} from 'vue'

export const store = reactive ({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    test_url: 'https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul',
    test2_url: 'https://www.breakingbadapi.com/api/characters?category=Breaking+Bad',
    characters: null,
    //info: null,
    length: null,
    //error: null,
})