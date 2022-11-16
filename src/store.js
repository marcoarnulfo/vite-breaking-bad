import {
    reactive
} from 'vue'
import axios from 'axios';

export const store = reactive({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    characters: null,
    length: null,
    test: null,
    selectCategory: ' ',
        callApi(url) {
            axios.get(url)
                .then(response => {
                    this.characters = response.data
                    this.length = response.data.length
                })
        },
        changeCharacters() {
            //this.selected = this.selectCategory
            if (this.selectCategory == 'Breaking Bad') {
                const breakingBad = `${this.API_URL}?category=${this.selectCategory}`
                this.callApi(breakingBad)
            } else if (this.selectCategory == 'Better Call Saul') {
                const betterCallSoul = `${this.API_URL}?category=${this.selectCategory}`
                this.callApi(betterCallSoul)
            } else {
                this.callApi(this.API_URL)
            }
        }
})