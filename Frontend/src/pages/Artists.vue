<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { onMounted, ref } from 'vue';

    onMounted(() => {
        fetch("http://localhost:3000/artists")
        .then((res) => res.json())
        .then((data) => {
            artists.value = data;
        });
    });

    // Data (ref)
    let artists = ref([]);
    let newArtistName = ref("");

    // Methods
    const removeArtist = (id) => {
        fetch("http://localhost:3000/artists/" + id, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
    }

    const addArtist = () => {
        fetch("http://localhost:3000/artists", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newArtistName.value
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
    }
</script>

<!--
    Template
-->
<template>
    <h1>
        Artists
    </h1>

    <ul v-if="artists.length > 0">
        <li v-for="artist in artists" :key="artist.artist_id">
            {{ artist.name }}

            <button @click="removeArtist(artist.artist_id)">
                Delete
            </button>
        </li>
    </ul>

    <p v-if="artists.length == 0">
        Geen artiesten beschikbaar
    </p>

    <hr/>

    <h2>
        Create new artist
    </h2>
    <label>
    </label>
    <input type="text" v-model="newArtistName">
    <button @click="addArtist()">
        Add new artist
    </button>
</template>