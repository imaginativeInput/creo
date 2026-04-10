<template>  
  <section class="hero" id="home">

    <div class="content">
    <div class="container">
      <h1 class="title1">{{ $t('hero.title') }}
        <span class="title2">{{ $t('hero.title') }}</span>
        <span class="title3">{{ $t('hero.title') }}</span>
      </h1>
    </div>
    <p>{{ $t('hero.subtitle') }}</p>

    <div class="contact-block">
      <span class="contact-label">Skontaktuj się z nami</span>
      <div class="contact-items">
        <a href="mailto:creo@creo.pl" class="contact-link">
          <span class="contact-icon">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
            </svg>
          </span>
          <span class="contact-text">creo@creo.pl</span>
        </a>

        <a href="tel:+48509023333" class="contact-link">
          <span class="contact-icon">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd"/>
            </svg>
          </span>
          <span class="contact-text">+48 509 023 333</span>
        </a>
      </div>
      </div>
    </div>

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

  animation: dropIn 0.8s ease-out forwards;
}

.title2 {
  position: absolute;
  top: -8px;
  left: -10px;
  width: 100%;
  color: #444;
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
  /* color: var(--white); */
  /* color: #e9e9e9; */
  /* color: var(--salmon); */
  /* color: var(--rose); */
  font-size: 7.5rem;
  filter: blur(0px);
}

.contact-block {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.contact-label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  
  color: var(--white);
  color: var(--orange);
}

.contact-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(226, 108, 43, 0.3);
  background: rgba(255, 255, 255, 0.65);
  color: var(--dark);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-link:hover {
  background: var(--orange);
  border-color: var(--orange);
  color: var(--white);
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(226, 108, 43, 0.25);
}

.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: rgba(226, 108, 43, 0.12);
  color: var(--orange);
  flex-shrink: 0;
  transition: background 0.2s ease, color 0.2s ease;
}

.contact-link:hover .contact-icon {
  background: rgba(255, 255, 255, 0.2);
  color: var(--white);
}

.contact-icon svg {
  width: 1rem;
  height: 1rem;
  display: block;
}

.hero {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* color: var(--white); */
  padding-top: 60px;

  font-family: 'General Sans', sans-serif;

  BACKGROUND-COLOR: rgba(0, 0, 0, 0.15);
  background-blend-mode: overlay;
  backdrop-filter: blur(14px);
  overflow: hidden;
}


.hero::before {
  content: "";
  position: absolute;
  inset: 0;

  background: url('@/assets/fresh-grass-compressed.webp') center/cover no-repeat;

  filter: blur(2px);

  transform: scale(1.1);
   /* prevents ugly edges after blur */

  z-index: 0;
}

.content {
  margin-top: 2rem;
  position: relative;
  z-index: 2;
  /* backdrop-filter: blur(6px); */
  /* background: var(--rose); */
  background: var(--light-gray);
  background: rgba(245, 245, 245, 0.9);
  /* background: rgba(255, 255, 255, 0.15); */
  /* background: rgba(0,0,0, 1); */
  padding: 2rem 8rem 4rem 8rem;
  border-radius: 12px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);

}

.hero h1.title1 {
  font-size: 7.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  /* color: var(--orange); */
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  /* color: var(--white); */
  color: var(--dark);
  letter-spacing: 0.2em;
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 1.25rem 2rem;
    justify-content: center;
  }

  .content {
    margin-top: 0;
    padding: 1.5rem 1.25rem 1.75rem;
    width: 100%;
    max-width: 340px;
    background: rgba(245, 245, 245, 0.88);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
  }

  .hero h1.title1,
  .title1,
  .title2,
  .title3 {
    font-size: 3rem;
  }

  .hero h1.title1 {
    margin-bottom: 0.5rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  }

  .title2 {
    top: -3px;
    left: -4px;
  }

  .title3 {
    top: -4px;
    left: -5px;
  }

  .hero p {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
    letter-spacing: 0.1em;
  }

  .contact-block {
    margin-top: 0.5rem;
    gap: 0.75rem;
  }

  .contact-label {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
  }

  .contact-items {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }

  .contact-link {
    width: 100%;
    justify-content: center;
    padding: 0.65rem 1rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 380px) {
  .content {
    padding: 1.25rem 1rem 1.5rem;
  }

  .hero h1.title1,
  .title1,
  .title2,
  .title3 {
    font-size: 2.5rem;
  }
}
</style>
