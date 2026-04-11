<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { api } from '@/composables/useApi'

const sectionRef = ref(null)
const textRef = ref(null)
const gridItemRefs = ref<HTMLElement[]>([])

const setGridItemRef = (el: Element | null) => {
  if (el instanceof HTMLElement && !gridItemRefs.value.includes(el)) {
    gridItemRefs.value.push(el)
  }
}

onMounted(async () => {
  // try {
  //   const { data } = await api.get('/site-config')
  //   if (data.about_image_url) aboutImageUrl.value = data.about_image_url
  // } catch {
  // }

  const textObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        textRef.value?.classList.add('slide-in')
        textObserver.disconnect()
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -22% 0px' }
  )
  if (textRef.value) textObserver.observe(textRef.value)

  const gridObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in')
          gridObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.25, rootMargin: '0px 0px -15% 0px' }
  )
  gridItemRefs.value.forEach((el) => gridObserver.observe(el))
})
</script>

<template>
  <section class="about" id="about" ref="sectionRef">
    <div class="about-inner">

      <div class="about-text" ref="textRef">
        <span class="about-label">{{ $t('about.label') }}</span>
        <h2 class="about-heading" v-html="$t('about.heading').replace('\n', '<br>')"></h2>
        <div class="about-accent"></div>
        <p class="about-paragraph"><strong style="color:#1A1A1A">{{ $t('about.para1a') }}</strong> {{ $t('about.para1b') }}</p>
        <p class="about-paragraph">{{ $t('about.para2') }}</p>
        <p class="about-paragraph">{{ $t('about.para3') }}</p>
        <p class="about-paragraph">{{ $t('about.para4') }}</p>
        <div class="about-stats">
          <div class="about-stat">
            <span class="stat-number">25+</span>
            <span class="stat-label">{{ $t('about.stat_years_label') }}</span>
          </div>
          <div class="about-stat">
            <span class="stat-number">1000+</span>
            <span class="stat-label">{{ $t('about.stat_dishes_label') }}</span>
          </div>
          <div class="about-stat">
            <span class="stat-number">100%</span>
            <span class="stat-label">{{ $t('about.stat_fresh_label') }}</span>
          </div>
        </div>
      </div>

      <div class="about-image-wrap">
        <!-- <div class="about-image-frame">
          <img
            :src="aboutImageUrl"
            :alt="$t('about.image_alt')"
            class="about-image"
          />
        </div> -->

        <div class="about-grid">
          <div class="about-grid-item" :ref="setGridItemRef">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#e26c2b" stroke="#1A1A1A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <!-- Box base -->
  <rect x="10" y="24" width="44" height="30" rx="2"/>
  <!-- Lid -->
  <rect x="8" y="18" width="48" height="8" rx="1.5"/>
  <!-- Vertical ribbon -->
  <line x1="32" y1="18" x2="32" y2="54"/>
  <!-- Bow left loop -->
  <path fill="var(--white)" d="M32 18 C 24 18, 20 10, 24 8 C 28 6, 32 12, 32 18 Z"/>
  <!-- Bow right loop -->
  <path fill="var(--white)" d="M32 18 C 40 18, 44 10, 40 8 C 36 6, 32 12, 32 18 Z"/>
</svg>
<p>Zestawy Podarunkowe</p>
          </div>
          <div class="about-grid-item" :ref="setGridItemRef">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#e26c2b" stroke="#1A1A1A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <!-- T-shirt outline: shoulders, sleeves, body -->
  <path d="M22 10 L10 18 L16 26 L22 22 L22 56 L42 56 L42 22 L48 26 L54 18 L42 10 Z"/>
  <!-- Collar -->
  <path d="M22 10 Q32 18 42 10"/>
  <!-- Company name text on shirt -->
  <text x="32" y="26"
        text-anchor="middle"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="5"
        font-weight="600"
        fill="#fff"
        stroke="none">CREO</text>
</svg>
<p>Odzież Reklamowa</p>
          </div>
          <div class="about-grid-item" :ref="setGridItemRef">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="var(--orange)" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <!-- Mug body -->
  <path d="M12 16 L 12 48 C 12 52, 15 54, 19 54 L 39 54 C 43 54, 46 52, 46 48 L 46 16 Z"/>
  <!-- Mug top rim -->
  <ellipse cx="29" cy="16" rx="17" ry="3"/>
  <!-- Handle -->
  <path d="M46 23 C 54 23, 54 41, 46 41" data-v-8f2cbd0c=""></path>
  <path fill="var(--white)" d="M46 27 C 50 26, 50 38, 46 37" data-v-8f2cbd0c=""></path>
  <!-- Steam lines -->
  <path d="M22 4 C 20 7, 24 9, 22 12"/>
  <path d="M30 4 C 28 7, 32 9, 30 12"/>
  <path d="M38 4 C 36 7, 40 9, 38 12"/>
  <!-- Company name on mug -->
  <text x="29" y="38" 
        text-anchor="middle" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="5" 
        font-weight="700" 
        fill="var(--white)" 
        stroke="none">CREO</text>
</svg>

<p>Upominki Reklamowe</p>
          </div>
        </div>
        <!-- <div class="about-image-badge">
          <span class="badge-line1">{{ $t('about.badge_line1') }}</span>
          <span class="badge-line2">{{ $t('about.badge_line2') }}</span>
        </div> -->
      </div>

    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--white);
  padding: 6rem 5%;

  font-family: 'General Sans', sans-serif;
  z-index: 4;
}

.about-inner {
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8rem;
  align-items: center;
  justify-content: space-between;
}

/* ── Text column ── */
.about-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 1rem;
}

.about-heading {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--dark);
  margin-bottom: 1.25rem;
}

.about-accent {
  width: 52px;
  height: 4px;
  background: linear-gradient(to right, var(--orange) 33%, var(--orange) 33%, var(--orange) 66%, var(--orange) 66%);
  border-radius: 2px;
  margin-bottom: 1.75rem;
}

.about-paragraph {
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.1rem;
}

.about-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2.25rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.about-stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--dark);
  line-height: 1;
}

.stat-label {
  font-size: 0.78rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* ── Image column ── */
.about-image-wrap {
  position: relative;
}

.about-image-frame {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.14);
  aspect-ratio: 4 / 5;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.about-image-frame:hover .about-image {
  transform: scale(1.03);
}

.about-grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
}

.about-grid-item {
  position: relative;
  box-sizing: border-box;
  border-radius: 12px;
  border: 4px solid var(--orange);
  overflow: hidden;
  /* box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1); */
  width: 300px;
  height: 300px;
  /* height: auto; */
}

.about-grid-item svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  padding: 1.5rem;
}
.about-grid-item p {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark);
  text-align: center;
  /* text-transform: uppercase; */
  font-family: 'General Sans', sans-serif;
}

.about-image-badge {
  position: absolute;
  bottom: -1.5rem;
  left: -1.5rem;
  background: var(--orange);
  color: var(--white);
  padding: 1.1rem 1.4rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(254, 138, 21, 0.833);
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.badge-line1 {
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.85;
  letter-spacing: 0.04em;
}

.badge-line2 {
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.01em;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .about-inner {
    grid-template-columns: minmax(0, 1fr);
    gap: 3rem;
  }

  .about-image-wrap {
    order: -1;
    min-width: 0;
  }

  .about-grid {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }

  .about-grid-item {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    height: auto;
  }

  .about-image-frame {
    aspect-ratio: 16 / 9;
  }

  .about-image-badge {
    bottom: -1.25rem;
    left: 1rem;
  }

  .about-heading {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 4rem 5%;
  }

  .about-stats {
    gap: 1.25rem;
  }

  .stat-number {
    font-size: 1.4rem;
  }
}

/* ── Slide-in animation (one-shot on first scroll into view) ── */
.about-text,
.about-grid-item {
  opacity: 0;
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.about-text {
  transform: translateX(-48px);
}

.about-grid-item {
  transform: translateX(48px);
}

.about-text.slide-in,
.about-grid-item.slide-in {
  opacity: 1;
  transform: translateX(0);
}
</style>
