import { defineNuxtPlugin } from '#app'
import { CalendarProviders } from './Types'
import type { CalendarEvent } from 'calendar-link'
import { useCalendarLink } from './composables/useCalendarLink'
export default defineNuxtPlugin(( NuxtApp ) => {
  return {
    provide: {
      calendarLink: (event: CalendarEvent, settings: CalendarProviders[] | null) => useCalendarLink(event,settings)
    }
  }
})

