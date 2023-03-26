import { useRuntimeConfig } from '#app'

import * as calendarLink from 'calendar-link'
import type { CalendarEvent } from 'calendar-link'

import type { CalendarProviders, CalendarLinks, CalendarLinkSettings} from '../Types'
import { calendarProviders } from '../GlobalVariables'

export const useCalendarLink = (event:CalendarEvent, providers:CalendarProviders[] | null ):CalendarLinks[] | null => {
  const calendarLinkSettings = useRuntimeConfig().public.calendarLink as CalendarLinkSettings
  if(!providers) providers = calendarLinkSettings.providers
  if(!providers) return null

  if(typeof providers === 'string') providers = createArrayFromString(providers)

  const links = providers.map(provider => ({ provider, link: createLink(provider, event) }))
  return links
}

const createLink = (provider:CalendarProviders, event: CalendarEvent) => {
  
  if(!isSupportedProvider(provider)) {
    console.error(`CalendarLink: Error
  Troubleshooting: 
  - ${provider} is not one of ${calendarProviders}
  - Wrong casing – Use only lowercase`)
    return `#`
  }
  return calendarLink[provider](event)
}
// Type guards
const createArrayFromString = (string: string) => [string] as CalendarProviders[]
const isSupportedProvider = (provider:CalendarProviders) => calendarProviders.includes(provider)