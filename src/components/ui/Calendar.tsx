import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Clock, Plus, Search, CalendarHeart } from 'lucide-react'
import { useCallback } from 'react'

import { usePopups } from './Popup'

import { Button, Input } from '@/components/ui'

const getMonday = (startDate = new Date()) => {
  const currentDate = new Date(startDate)
  const dayOfWeek = currentDate.getDay()
  const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1
  currentDate.setDate(currentDate.getDate() - daysToSubtract)
  return currentDate
}

const hours = Array.from({ length: 12 }, (_, i) => i + 9)

const weekDays = Array.from({ length: 7 }, (_, i) => {
  const weekStart = getMonday()
  const day = new Date(weekStart)
  day.setDate(weekStart.getDate() + i)
  return day
})

export const Calendar = () => {
  const { clientDetails, eventDialog } = usePopups()

  const openAddEventDialog = useCallback(() => {
    eventDialog.setIsOpen(true)
    clientDetails.setIsOpen(false)
  }, []) // eslint-disable-line

  return (
    <div className="flex flex-col overflow-hidden flex-1">
      <header
        className={`flex h-16 items-center justify-between border-b p-4 bg-white`}
      >
        <CalendarHeart className="hidden sm:block" />
        <h1 className="text-sm sm:text-lg font-bold sm:font-semibold">
          Semana del {format(getMonday(), 'dd MMMM yyyy', { locale: es })}
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar"
              className="pl-8 w-[200px]"
            />
          </div>
          <Button onClick={openAddEventDialog}>
            <Plus className="h-4 w-4" />
            Agregar Evento
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        {/* First column */}
        <div className="flex flex-col w-20">
          <div className="border-b border-r hover:bg-muted/50 transition-colors flex flex-1 items-center justify-center">
            <Clock className="h-4 w-4 text-muted-foreground m-0 p-0" />
          </div>

          {hours.map((hour) => (
            <div
              key={hour}
              className="relative border-b border-r group hover:bg-muted/50 transition-colors flex flex-1"
              style={{
                height: `calc(100vh / ${hours.length} - 144px / ${hours.length})`,
              }}
            >
              <div className="absolute w-full text-center top-0 text-xs text-muted-foreground/70">
                {`${hour.toString().padStart(2, '0')}:00`}
              </div>
            </div>
          ))}
        </div>
        {/* End first column */}
        <div className="flex overflow-x-scroll flex-1 remove-scrollbar">
          {weekDays.map((day, i) => (
            <div key={i} className="flex flex-1 flex-col min-w-[200px]">
              <div className="bg-background border-b flex items-center justify-center flex-1">
                {
                  <div className="text-sm text-muted-foreground text-center">
                    {format(day, 'EEEE d MMM', {
                      locale: es,
                    }).toLowerCase()}
                  </div>
                }
              </div>
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="border-b border-r hover:bg-muted/50 transition-colors flex flex-1"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
