import { useMemo, useCallback } from 'react'
import { Clock, Plus, Search, CalendarHeart } from 'lucide-react'
import { format } from 'date-fns'
import { Dispatch, SetStateAction } from 'react'
import { es } from 'date-fns/locale'
import { Button, Input } from '@/components/ui'
import { useSidebar } from './sidebar/SidebarContext'

type Props = {
  setIsAddEventDialogOpen: Dispatch<SetStateAction<boolean>>
  setShowClientDetails: Dispatch<SetStateAction<boolean>>
}

const getWeekStart = (startDate = new Date()) => {
  startDate.setDate(startDate.getDate() - startDate.getDay())
  return startDate
}

const hours = Array.from({ length: 12 }, (_, i) => i + 9)

export const Calendar = ({
  setIsAddEventDialogOpen,
  setShowClientDetails,
}: Props) => {
  const openAddEventDialog = useCallback(() => {
    setIsAddEventDialogOpen(true)
    setShowClientDetails(false)
  }, [])

  const weekStart = useMemo(() => getWeekStart(), [])

  const weekDays = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      if (i === 0) {
        return null // will override first with clock
      }

      const day = new Date(weekStart)
      day.setDate(weekStart.getDate() + i)
      return day
    })
  }, [weekStart])

  const { isOpen, sideBarWidthPxs } = useSidebar()

  return (
    <div className="flex flex-1 flex-col">
      <header
        className={`flex h-16 items-center justify-between border-b p-4 ${
          !isOpen ? 'pl-9' : ''
        } sticky top-0 bg-white`}
        style={{ maxWidth: `calc(100vw - ${sideBarWidthPxs})`, zIndex: 5 }}
      >
        <CalendarHeart className="hidden sm:block" />
        <h1 className="text-sm sm:text-lg font-bold sm:font-semibold">
          Semana del {format(weekStart, 'dd MMMM yyyy', { locale: es })}
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
      <div className={`${isOpen ? 'pl-0' : 'pl-5'} flex-1 `}>
        <div className="flex">
          <div className="grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x flex-1">
            {weekDays.map((day, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i === 0 ? 'min-w-[60px] max-w-[60px]' : 'min-w-[200px]'
                }`}
              >
                <div className="relative h-20 flex items-center justify-center bg-background border-b top-0">
                  {i === 0 ? (
                    <div className="absolute flex items-center justify-center w-full h-full">
                      <Clock className="h-4 w-4 text-muted-foreground m-0 p-0" />
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground text-center">
                      {/* i === 0 is null, all other are day as Dates */}
                      {format(day as Date, 'EEEE d MMM', {
                        locale: es,
                      }).toLowerCase()}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      className="relative border-b group hover:bg-muted/50 transition-colors"
                      style={{
                        height: `calc(100vh / ${hours.length} - 144px / ${hours.length})`,
                      }}
                    >
                      {i === 0 && (
                        <div className="absolute w-full text-center top-0 text-xs text-muted-foreground/70">
                          {`${hour.toString().padStart(2, '0')}:00`}
                        </div>
                      )}
                    </div>
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
