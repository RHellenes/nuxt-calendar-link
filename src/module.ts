import { defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'
import { defu } from 'defu'
import { CalendarLinkSettings } from './runtime/Types'

// Module options TypeScript inteface definition
export interface ModuleOptions extends CalendarLinkSettings{

}
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-calendar-link',
    configKey: 'calendarLink',
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    providers: []
  },
  setup (options, nuxt) {
    const defaults = ['ics', 'google', 'outlook', 'office365', 'yahoo']
    nuxt.options.runtimeConfig.public.calendarLink = defu(nuxt.options.runtimeConfig.public.calendarLink, {
      providers: options.providers.length ? options.providers : defaults
    })
    
    // Create resolver to resolve relative paths
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('./runtime/plugin'))


    addImports({
      name: 'use', // name of the composable to be used
      as: 'use', 
      from: resolve('runtime/composables/useCalendarLink') // path of composable 
    })
  }
})
