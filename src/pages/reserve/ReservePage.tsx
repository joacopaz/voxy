import { PageWithPopups, PageWithSidebar } from '@/components/pages'
import { Reserve } from '@/components/ui'
import './ReservePage.css'

export const ReservePage = () => {
  return (
    <PageWithPopups>
      <PageWithSidebar>
        <Reserve />
      </PageWithSidebar>
    </PageWithPopups>
  )
}
