import { PageWithPopups, PageWithSidebar } from '@/components/pages'
import { VideoCall } from '@/components/ui/VideoCall'
import './VideoCallPage.css'

export const VideoCallPage = () => {
  return (
    <PageWithPopups>
      <PageWithSidebar>
        <VideoCall />
      </PageWithSidebar>
    </PageWithPopups>
  )
}
