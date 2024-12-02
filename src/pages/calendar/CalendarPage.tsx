import { PageWithSidebar } from '@/components/pages/PageWithSidebar'
import { Calendar } from '@/components/ui'

export const CalendarPage = () => (
  <PageWithSidebar>
    <Calendar
      setIsAddEventDialogOpen={() => console.log('TBD')}
      setShowClientDetails={() => console.log('TBD')}
    />
  </PageWithSidebar>
)
