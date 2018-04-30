<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form v-model="valid" ref="form" validation>
                    <v-text-field
                            name="title"
                            label="Ad title"
                            type="text"
                            v-model="title"
                            required
                            :rules="[v => !!v || 'Title is required']"
                    >
                    </v-text-field>
                    <v-text-field
                            name="description"
                            label="Ad description"
                            type="text"
                            v-model="description"
                            multi-line
                            :rules="[v => !!v || 'description is required']"
                    >
                    </v-text-field>
                </v-form>

                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn class="warning">
                            Upload
                            <v-icon right dark>
                                cloud_upload
                            </v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <img src="https://vuetifyjs.com/static/doc-images/carousel/bird.jpg" height="100">
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                            label="Add to promo"
                            v-model="promo"
                        >
                        </v-switch>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn class="success" @click="createAd" :disabled="!valid">Create ad</v-btn>
                    </v-flex>
                </v-layout>


            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    export default {
        data () {
            return {
                title: '',
                description: '',
                promo: false,
                valid: false
            }
        },

        methods: {
            createAd(){
                if (this.$refs.form.validate()){
                    // logic

                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCtVxURn8PMcKmy2GZj_Zbs3HnCJX7KKb5h1EbfJoDUoWuTJhvg'
                    };

                    console.log(ad);

                    this.$store.dispatch('createAd', ad)
                }

            }
        }
    }
</script>

<style></style>
