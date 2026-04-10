<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

// const props = defineProps<{
//   title: String
// }>()

const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const mobileMenuOpen = ref(false)


const config = ref({
  phone: '+48 663 841 910',
  address_street: 'ul. Spokojna 9',
  address_city: '05-500 Piaseczno',
  maps_url: 'https://www.google.com/maps/place/Spokojna+9,+05-500+Piaseczno/@52.0522059,21.0148789,15z/data=!4m6!3m5!1s0x47192fb6cc5e00c1:0x45ca4e6f94bbc43!8m2!3d52.0520329!4d21.0143779!16s%2Fg%2F11c2czjfvg?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D',
  hours_mon_thu: '12:00 – 22:00',
  hours_fri: '12:00 – 23:00',
  hours_sat: '12:00 – 23:00',
  hours_sun: '12:00 – 22:00',
  hours_note: '',
  facebook_url: '#',
  instagram_url: '#',
})


function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function goHome() {
  closeMobileMenu()
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}

function navigateHash(hash: string) {
  closeMobileMenu()
  if (route.path === '/') {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push({ path: '/', hash })
  }
}
</script>

<template>
  <nav :class="{ 'nav-menu-open': mobileMenuOpen}">
    <div class="logo">
      <img src="/logo-creo-transparent.webp" :alt="$t('common.logo_alt')" class="logo-img" @click.prevent="goHome" />
    </div>
    <ul class="nav-links">
      <li class="nav-link-item"><a href="#about" @click.prevent="navigateHash('#about')">{{ $t('nav.about') }}</a></li>
      <!-- <li class="nav-link-item"><router-link to="/reservation" @click="closeMobileMenu">{{ $t('nav.reservation') }}</router-link></li> -->
      <!-- <li class="nav-link-item"><a href="#events" @click.prevent="navigateHash('#events')">{{ $t('nav.events') }}</a></li> -->
      <!-- <li class="nav-link-item"><a href="#location" @click.prevent="navigateHash('#location')">{{ $t('nav.directions') }}</a></li> -->
      <li class="nav-link-item"><a href="#contact" @click.prevent="navigateHash('#contact')">{{ $t('nav.contact') }}</a></li>
    
      <!-- <li class="nav-social">
        <a :href="config.facebook_url" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="nav-social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a :href="config.instagram_url" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="nav-social-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
      </li> -->
      <!-- <li class="nav-lang">
        <button
          v-for="lang in SUPPORTED_LOCALES"
          :key="lang"
          class="lang-btn"
          :class="{ active: currentLocale === lang }"
          @click="setLocale(lang)"
        >{{ LOCALE_FLAGS[lang] }}</button>
      </li> -->
    </ul>

    <!-- Hamburger button (mobile only) -->
    <button class="btn-hamburger" @click="toggleMobileMenu" :aria-label="$t('nav.menu')">
      <svg v-if="!mobileMenuOpen" xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
      <svg v-else xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </nav>

  <!-- Mobile menu overlay -->
  <Transition name="mobile-menu">


    <div v-if="mobileMenuOpen" class="mobile-menu">

      <!-- <div class="mobile-lang-row">
        <button
          v-for="lang in SUPPORTED_LOCALES"
          :key="lang"
          class="lang-btn"
          :class="{ active: currentLocale === lang }"
          @click="setLocale(lang)"
        >{{ LOCALE_FLAGS[lang] }}</button>
      </div> -->

      <a href="#about" class="mobile-menu-link" @click.prevent="navigateHash('#about')">{{ $t('nav.about') }}</a>
      <!-- <a href="#events" class="mobile-menu-link" @click.prevent="navigateHash('#events')">{{ $t('nav.events') }}</a> -->
      <!-- <a href="#location" class="mobile-menu-link" @click.prevent="navigateHash('#location')">{{ $t('nav.directions') }}</a> -->
      <a href="#contact" class="mobile-menu-link" @click.prevent="navigateHash('#contact')">{{ $t('nav.contact') }}</a>

      <!-- Info footer (milanovo-inspired) -->
      <div class="mobile-info">
        <div class="mobile-info-hours">
          <div class="mobile-hours-row">
            <span class="mobile-hours-day">{{ $t('nav.mon_thu') }}</span>
            <span class="mobile-hours-time">{{ config.hours_mon_thu }}</span>
          </div>
          <div class="mobile-hours-row">
            <span class="mobile-hours-day">{{ $t('nav.fri_sat') }}</span>
            <span class="mobile-hours-time">{{ config.hours_fri }}</span>
          </div>
          <div class="mobile-hours-row">
            <span class="mobile-hours-day">{{ $t('nav.sunday') }}</span>
            <span class="mobile-hours-time">{{ config.hours_sun }}</span>
          </div>
          <p class="mobile-hours-note">{{ config.hours_note }}</p>
        </div>

        <div class="mobile-info-contact">
          <a :href="`tel:${config.phone.replace(/\s/g, '')}`" class="mobile-contact-item">
            <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 5.92 5.92l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {{ config.phone }}
          </a>
          <span class="mobile-contact-item">
            <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            {{ config.address_street }}, {{ config.address_city }}
          </span>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </Transition>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.95);
  /* background: var(--rose); */
  /* background: var(--salmon); */

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 5%;
  max-width: 100vw;
  overflow: hidden;

  font-family: 'Nocturne', serif;
}
.nav-mobile {
  background: rgb(255,255,255);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.logo a {
  text-decoration: none;
  color: var(--green);
}

.logo-img {
  height: 64px;
  width: auto;
  max-width: 100%;
  display: block;
  cursor: pointer;
  transition: background 0.3s ease, border-radius 0.3s ease, padding 0.3s ease, height 0.3s ease;
}

.logo span {
  color: var(--red);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-links a {
  text-decoration: none;
  color: var(--dark);
  font-weight: 500;
  transition: color 0.3s, letter-spacing 0.3s;
  font-size: 2rem;
  letter-spacing: 0.04em;
}

.nav-links a:hover {
  color: var(--orange);
  /* color: #ff8440; */
  letter-spacing: 0.10em;
}

.btn-order {
  background: var(--red);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.btn-order:hover {
  background: #b02530;
  transform: translateY(-2px);
}

.btn-cart {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--dark);
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s, background 0.3s ease, border-radius 0.3s ease, border 0.3s ease, padding 0.3s ease;
}

.btn-cart:hover {
  color: var(--green);
}

.cart-dot {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 9px;
  height: 9px;
  background: var(--green);
  border-radius: 1rem;
  border: 2px solid var(--white);
  font-size: 0;
  color: transparent;
}

/* Language switcher */
.nav-lang {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.lang-btn {
  background: none;
  border: 1.5px solid transparent;
  border-radius: 4px;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.05rem 0.15rem;
  line-height: 1;
  opacity: 0.5;
  transition: opacity 0.2s, border-color 0.2s;
}

.lang-btn:hover {
  opacity: 0.8;
}

.lang-btn.active {
  opacity: 1;
  border-bottom-color: var(--green);
}

/* Desktop social icons — stacked vertically to the right of "Zamów Teraz" */
.nav-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
}

.nav-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 2px solid var(--dark);
  border-radius: 6px;
  color: var(--dark);
  text-decoration: none;
  transition: color 0.3s, background 0.3s, stroke 0.3s ease;
}

.nav-social-link svg {
  width: 15px;
  height: 15px;
  transition: fill 0.3s ease;
}

.nav-social-link:hover {
  /* color: var(--white); */

  stroke: var(--white);
  background: var(--green);
}

.nav-social-link:hover svg {
  fill: var(--white);
}
.nav-social-link:hover svg rect,
.nav-social-link:hover svg path,
.nav-social-link:hover svg line{
  color: var(--dark);
}

/* Auth nav link */
.nav-auth-link {
  text-decoration: none;
  color: var(--green);
  font-weight: 600;
  font-size: 0.95rem;
  transition: opacity 0.2s;
}

.nav-auth-link:hover {
  opacity: 0.8;
}

/* User menu */
.user-menu-wrap {
  position: relative;
}

.btn-user {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--dark);
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
}

.btn-user:hover {
  color: var(--green);
}

.user-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  min-width: 180px;
  padding: 0.5rem 0;
  z-index: 1100;
  display: flex;
  flex-direction: column;
}

.user-dropdown-name {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--dark);
  border-bottom: 1px solid #eee;
}

.user-dropdown-item {
  display: block;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  color: var(--dark);
  text-decoration: none;
  background: none;
  border: none;
  text-align: left;
  width: 100%;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
}

.user-dropdown-item:hover {
  background: var(--light-gray);
}

.user-dropdown-logout {
  color: var(--red);
  font-weight: 600;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* Empty cart toast */
.nav-empty-toast {
  position: fixed;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.82);
  color: var(--white);
  padding: 0.65rem 1.4rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  white-space: nowrap;
  z-index: 1200;
  pointer-events: none;
}

.nav-toast-enter-active,
.nav-toast-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.nav-toast-enter-from,
.nav-toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
}

/* Hamburger button — hidden on desktop */
.btn-hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--dark);
  padding: 0.4rem;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
}

.btn-hamburger:hover {
  color: var(--green);
}

/* Mobile menu — hidden on desktop */
.mobile-menu {
  display: none;
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}


@media (max-width: 1024px) {
  nav.nav-menu-open {
    box-shadow: none;
    /* background: #fff; */
  }

  .logo-img {
    width: 100px;
    height: auto;
  }

  .nav-links {
    display: none;
  }

  .btn-hamburger {
    display: flex;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 84px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--white);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    padding: 0.4rem 1.25rem 1rem;
    gap: 0;
    overflow-y: auto;
  }

  .mobile-menu-link {
    display: flex;
    align-items: center;
    padding: 0.55rem 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--dark);
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    border-radius: 6px;
    min-height: 40px;
    transition: background 0.2s;
  }

  .mobile-menu-link:hover {
    background: var(--light-gray);
  }

  .mobile-menu-auth {
    color: var(--green);
    font-weight: 600;
  }

  .mobile-menu-logout {
    color: var(--red);
    font-weight: 600;
    width: 100%;
    text-align: left;
  }


  .mobile-lang-row {
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.7rem;
    padding: 0.25rem 0;
  }

  /* Collapsible account section */
  .mobile-account-toggle {
    gap: 0.5rem;
    font-weight: 600;
  }

  .mobile-account-chevron {
    margin-left: auto;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .mobile-account-chevron.open {
    transform: rotate(180deg);
  }

  .mobile-account-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
  }

  .mobile-account-body.open {
    grid-template-rows: 1fr;
  }

  .mobile-account-inner {
    overflow: hidden;
  }

  .mobile-menu-sub {
    padding-left: 2.5rem;
    font-size: 0.88rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    min-height: 36px;
  }

  /* Mobile info footer */
  .mobile-info {
    margin-top: 0.6rem;
    border-top: 1px solid #eee;
    padding-top: 0.6rem;
  }

  .mobile-info-hours {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    padding: 0 0.5rem 0.5rem;
  }

  .mobile-hours-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
  }

  .mobile-hours-day {
    color: #666;
  }

  .mobile-hours-time {
    font-weight: 600;
    color: var(--dark);
  }

  .mobile-hours-note {
    font-size: 0.7rem;
    color: #999;
    font-style: italic;
    margin-top: 0.1rem;
  }

  .mobile-info-contact {
    background: var(--dark);
    border-radius: 10px;
    padding: 0.75rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .mobile-contact-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: #ccc;
    font-size: 0.82rem;
    text-decoration: none;
  }

  .mobile-contact-item svg {
    color: var(--green);
    flex-shrink: 0;
  }

  a.mobile-contact-item:hover {
    color: var(--white);
  }

  .mobile-contact-map {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: var(--green);
    font-size: 0.8rem;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .mobile-contact-map:hover {
    opacity: 0.8;
  }

  .mobile-social-row {
    display: flex;
    gap: 0.4rem;
    margin-top: 0.1rem;
  }

  .mobile-social-btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.15);
    /* border: 1px solid var(--green); */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
    text-decoration: none;
    transition: all 0.2s;
  }

  .mobile-social-btn:hover {
    background: var(--green);
    border-color: var(--green);
    color: var(--white);
    stroke: var(--white);
    fill: var(--white);
  }

  .nav-social {
    display: none;
  }

}
</style>