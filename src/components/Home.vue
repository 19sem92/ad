<template>
    <div>

        <!--<pre>-->
            <!--{{ads}}-->
        <!--</pre>-->
        <!--<hr>-->
        <!--<hr>-->

        <!--<pre>-->
            <!--{{promoAds}}-->
        <!--</pre>-->

        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                    <v-carousel-item v-for="(ad,i) in promoAds" :src="ad.imageSrc" :key="ad.id">

                        <div class="car-link">
                            <v-btn class="error" :to="'/ad/' + ad.id">{{ad.title}}</v-btn>
                        </div>
                    </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                    xs12
                    sm6
                    md4
                    v-for="ad in ads"
                    :key="ad.id"
                >
                    <v-card>
                        <v-card-media
                            :src="ad.imageSrc"
                            height="200px"
                        >
                        </v-card-media>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ad.title}}</h3>
                                <div>{{ad.description}}</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
                            <v-btn raised class="primary">buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-container>

    </div>

</template>

<script>
    export default {
        computed: {
            promoAds(){
                return this.$store.getters.promoAds
            },
            ads(){
                return this.$store.getters.ads
            }
        }
    }
</script>

<style>
    .car-link{
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 0);
        background: rgba(0, 0, 0, .5);
        padding: 5px 15px;
        border-radius: 5px;
        }
</style>
