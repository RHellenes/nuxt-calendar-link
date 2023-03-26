export type CalendarProviders = 'google' | 'outlook' | 'office365' | 'yahoo' | 'ics'

export interface CalendarLinkSettings {
  providers: CalendarProviders[];
}

export interface CalendarLinks {
  provider: CalendarProviders,
  link: string
}