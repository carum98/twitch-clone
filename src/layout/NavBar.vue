<script lang="ts" setup>
import DropdownMore from '../components/DropdownMore.vue'
</script>

<template>
    <header id="navbar">
        <section>
            <img src="/favicon.svg" alt="Twitch Clone" width="28" height="28" />
            <a>Browse</a>

            <DropdownMore />
        </section>

        <section class="search">
            <input type="text" placeholder="Search" />
            <button>
                <span class="material-icons-outlined"> search </span>
            </button>
        </section>

        <section>
            <button class="btn-icon">
                <img src="../assets/icon-crow.svg" width="24" height="24" />
            </button>

            <button class="btn-login">Log In</button>
            <button class="btn-signUp">Sign Up</button>

            <button class="btn-icon">
                <span class="material-icons-outlined"> person </span>
            </button>
        </section>
    </header>
</template>
