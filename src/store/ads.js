export default {
    state: {
        ads: [
            {title: 'First ad', description: 'Hello i am description', promo: false, imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg', id: '123'},
            {title: 'First ad', description: 'Hello i am description', promo: true, imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg', id: '12eew3'},
            {title: 'First ad', description: 'Hello i am description', promo: true, imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg', id: '12vc3'},
        ]
    },
    mutations: {
        createAd (state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        createAd ({commit}, payload) {
            payload.id = 'id' +  Math.random();

            commit('createAd', payload)

        }
    },
    getters: {
        ads (state) {
            return state.ads
        },

        promoAds (state) {
            return state.ads.filter(ad =>{
                return ad.promo             // ad.promo === true
            })
        },

        myAds (state) {
            return state.ads
        },

        adById (state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }

    }
}