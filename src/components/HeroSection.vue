<template>
  <section class="hero" id="home">
    <div class="container">
      <h1 class="title1">{{ $t('hero.title') }}
        <span class="title2">{{ $t('hero.title') }}</span>
        <span class="title3">{{ $t('hero.title') }}</span>
      </h1>
    </div>
    <p>{{ $t('hero.subtitle') }}</p>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
</script>

<style scoped>
.title1 {
  position: relative;
  color: rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  text-align: center;
}

.title2 {
  position: absolute;
  top: -8px;
  left: -10px;
  width: 100%;
  color: #fff;
  font-size: 7.5rem;
  filter: blur(0);
}

.title3 {
  position: absolute;
  top: -10px;
  left: -12px;
  width: 100%;
  color: var(--orange);
  /* color: #ff8440; */
  /* color: #e9e9e9; */
  font-size: 7.5rem;
  filter: blur(0px);
}

/* .title1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--orange);
  opacity: 0.2;
}
.title2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--orange);
  opacity: 0.4;
} */

.hero {
  min-height: 100dvh;
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
  /* background: var(--orange); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--white);
  padding-top: 60px;

  font-family: 'General Sans', sans-serif;
}

.hero h1.title1 {
  font-size: 7.5rem;
  /* margin-bottom: 1rem; */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  /* color: var(--orange); */
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  color: black;
  letter-spacing: 0.15em;
}

@media (max-width: 768px) {
  /* .hero h1.title1 {
    font-size: 2.5rem;
  }
  .title1, .title2, .title3 {
    font-size: 2.5rem;
  }

  .title2 {
    top: -28px;
    left: -1px;
  }

  .title3 {
    top: -30px;
    left: -2px;
  } */
}
</style>
