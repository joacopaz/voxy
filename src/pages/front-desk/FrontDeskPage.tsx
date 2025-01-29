import { PageWithSidebar, PageWithPopups } from '@/components/pages'
import { FrontDesk } from '@/components/ui'
import './FrontDeskPage.css'

export const FrontDeskPage = () => (
  <PageWithPopups>
    <PageWithSidebar>
      <FrontDesk />
    </PageWithSidebar>
  </PageWithPopups>
)
