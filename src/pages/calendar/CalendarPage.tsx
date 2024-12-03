import { PageWithSidebar, PageWithPopups } from '@/components/pages'
import { Calendar } from '@/components/ui'

export const CalendarPage = () => (
  <PageWithPopups>
    <PageWithSidebar>
      <Calendar />
    </PageWithSidebar>
  </PageWithPopups>
)
