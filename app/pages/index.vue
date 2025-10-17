<script setup lang="ts">
let loading: boolean = true;
let src: string;

try {
    let response = await fetch('/api/image/getURL');

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();

    src = data.url;

    loading = false;
} catch (error) {
    console.error('Error fetching image:', error);
}
</script>

<template>
    <p>Want to use this API in your own site?</p>
    
    <div>
        <p v-if="loading">Loading...</p>
        <img v-if=!loading :src />
    </div>
</template>