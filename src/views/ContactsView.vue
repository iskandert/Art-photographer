<template>
  <div class="contacts wrapper">
    <p>
      Буду рада предложениям о&nbsp;сотрудничестве
      и&nbsp;заявкам на&nbsp;съемки
    </p>
    <div class="links">
      <a v-for="link in links" :href="link.link" target="_blank">
        <component :is="link.icon" type="fill" />
        <span>{{ link.text }}</span>
      </a>
    </div>
  </div>
</template>
<style scoped>
.contacts {
  align-self: center;
  text-align: center;
}

p {
  font-size: 18px;
}

a {
  display: flex;
  gap: 7px;
  align-items: center;
  padding: 0 10px;
  line-height: 20px;
}

a:not(:last-of-type) {
  margin-bottom: 10px;
}

a:active span {
  border-bottom: 2px solid var(--ph-color-text-active);
  color: var(--ph-color-text-active);
}

@media (hover: hover) {
  a:hover span {
    border-bottom: 2px solid var(--ph-color-text-active);
    color: var(--ph-color-text-active);
  }
}

.links {
  width: max-content;
  margin: 20px auto;
}

a :global(svg) {
  height: 25px;
  width: 25px;
}
</style>
<script>
import LogoInstagram from '../components/icons/LogoInstagram.vue'
import LogoTelegram from '../components/icons/LogoTelegram.vue'
import LogoVkontakte from '../components/icons/LogoVkontakte.vue'
import LogoMail from '../components/icons/LogoMail.vue'
import { links } from '../config'

export default {
  components: {
    LogoInstagram,
    LogoTelegram,
    LogoVkontakte,
    LogoMail,
  },
  data() {
    return {
      links
    }
  }
}
</script>