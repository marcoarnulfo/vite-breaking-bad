<script>
export default {
    name: 'DropDown'
}
</script>

<template>
    <div class="container">
        <div class="dropdown-center">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Select category
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Lorem 1</a></li>
                <li><a class="dropdown-item" href="#">Lorem 2</a></li>
                <li><a class="dropdown-item" href="#">Lorem 3</a></li>
            </ul>
        </div>
    </div>
</template>