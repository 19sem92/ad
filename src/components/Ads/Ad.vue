<template>
    <div>
        <p>Hello</p>
        <p>{{id}}</p>
        <pre>
            {{ad}}
        </pre>

    <v-container>

        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-card-media
                        :src="ad.imageSrc"
                        height="300"
                    >
                    </v-card-media>
                    <v-card-text>
                        <h1 class="text--primary">{{ad.title}}</h1>
                        <p>{{ad.description}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" flat>Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    </div>

</template>

<script>
    export default {
        props: ['id'],
        computed: {
            ad() {
                const id = this.id;
                return this.$store.getters.adById(id)
            }
        }

    }
</script>

<style></style>
