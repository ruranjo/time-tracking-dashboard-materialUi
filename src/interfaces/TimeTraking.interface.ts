
export type metricTime = 'daily' | 'weekly' | 'monthly';

export interface TimeTraking {
    title: string
    icon: string
    color: string
    timeframes: Timeframes
  }
  
  export interface Timeframes {
    daily: Daily
    weekly: Weekly
    monthly: Monthly
  }
  
  export interface Daily {
    current: number
    previous: number
  }
  
  export interface Weekly {
    current: number
    previous: number
  }
  
  export interface Monthly {
    current: number
    previous: number
  }