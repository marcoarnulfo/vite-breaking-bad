<script>
export default {
    name: 'ActorCard',
    props: {
        test: Object,
    }
}
</script>

<template>

    <div class="col">
        <div class="character text-center mb-2 rounded p-3">
            <img class="rounded img-fluid" :src="test.img" alt="">
            <h3 class="name fw-bolder text-light p-2 fs-5">{{ test.name }}</h3>
            <div class="category fs-5">{{ test.category }}</div>
            <div class="status pb-3 fs-5">{{ test.status }}</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .character {
        background-color: #2E3A46;
        max-height: 436px;
    }

    img {
        height: 280px;
    }
</style>