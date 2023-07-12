<template>
  <select @change="switchLanguage"
          class="border-0 bg-none border-transparent focus:border-transparent focus:ring-0 cursor-pointer pr-0 pl-0">
    <option class="cursor-pointer"
            v-for="sLocale in supportedLocales"
            :key="`locale-${sLocale}`"
            :value="sLocale"
            :selected="locale === sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>
<script>
import {useI18n} from 'vue-i18n'
import Tr from "/src/translation"
import {useRouter} from "vue-router"

const router = useRouter()
export default {
  setup() {
    const {t, locale} = useI18n()
    const supportedLocales = Tr.supportedLocales
    const router = useRouter()
    const switchLanguage = async (event) => { // <--- 1
      const newLocale = event.target.value // <--- 2
      await Tr.switchLanguage(newLocale) // <--- 3
      try {
        await router.replace({params: {locale: newLocale}})  // <--- 3
      } catch (e) {  // <--- 4
        console.log(e)
        router.push("/")
      }
    }
    return {t, locale, supportedLocales, switchLanguage} // <--- 4
  }
}
</script>