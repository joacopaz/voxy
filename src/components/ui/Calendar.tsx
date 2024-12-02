import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Clock, Plus, Search, CalendarHeart } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { useCallback } from 'react'

import { Button, Input } from '@/components/ui'

type Props = {
  setIsAddEventDialogOpen: Dispatch<SetStateAction<boolean>>
  setShowClientDetails: Dispatch<SetStateAction<boolean>>
}

const getWeekStart = (startDate = new Date()) => {
  startDate.setDate(startDate.getDate() - startDate.getDay())
  return startDate
}

const hours = Array.from({ length: 12 }, (_, i) => i + 9)

const weekDays = Array.from({ length: 7 }, (_, i) => {
  const weekStart = getWeekStart()
  const day = new Date(weekStart)
  day.setDate(weekStart.getDate() + i)
  return day
})

export const Calendar = ({
  setIsAddEventDialogOpen,
  setShowClientDetails,
}: Props) => {
  const openAddEventDialog = useCallback(() => {
    setIsAddEventDialogOpen(true)
    setShowClientDetails(false)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col overflow-hidden">
      <header
        className={`flex h-16 items-center justify-between border-b p-4 bg-white`}
      >
        <CalendarHeart className="hidden sm:block" />
        <h1 className="text-sm sm:text-lg font-bold sm:font-semibold">
          Semana del {format(getWeekStart(), 'dd MMMM yyyy', { locale: es })}
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
      <div>
        <div className="flex overflow-x-scroll">
          <div className="grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x flex-1 grid-rows-[1fr]">
            {/* First column */}
            <div>
              <div
                className="border-b hover:bg-muted/50 transition-colors flex items-center justify-center"
                style={{
                  height: `calc(100vh / ${hours.length} - 144px / ${hours.length})`,
                }}
              >
                <Clock className="h-4 w-4 text-muted-foreground m-0 p-0" />
              </div>

              {hours.map((hour) => (
                <div
                  key={hour}
                  className="relative border-b group hover:bg-muted/50 transition-colors"
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

            {weekDays.map((day, i) => (
              <div key={i} className={`flex flex-col min-w-[200px]`}>
                <div className="relative h-20 flex items-center justify-center bg-background border-b top-0">
                  {
                    <div className="text-sm text-muted-foreground text-center">
                      {format(day, 'EEEE d MMM', {
                        locale: es,
                      }).toLowerCase()}
                    </div>
                  }
                </div>
                <div className="flex-1">
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      className="relative border-b group hover:bg-muted/50 transition-colors"
                      style={{
                        height: `calc(100vh / ${hours.length + 1} - 144px / ${hours.length + 1})`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
