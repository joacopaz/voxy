import {
  BookOpen,
  CalendarIcon,
  CreditCard,
  Video,
  MessageSquare,
  Zap,
  Inbox,
  BarChart2,
  User,
  Settings,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { Link } from 'react-router'

import { useSidebar } from '../ui/Sidebar/SidebarContext'

import {
  Button,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
} from '@/components/ui'

export const PageWithSidebar = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <Page> {children}</Page>
    </SidebarProvider>
  )
}

const Page = ({ children }: PropsWithChildren) => {
  const { NAVIGATION } = useNavigation()
  const { isOpen, toggleSidebar } = useSidebar()

  return (
    <div className="flex flex-1">
      <Sidebar
        className={`border-r transition-[width] ${
          isOpen ? 'w-[260px]' : 'w-16'
        }`}
      >
        <SidebarHeader className={`p-4 pb-0 ${isOpen ? '' : 'items-center'}`}>
          <div className="flex items-center">
            {isOpen && <h2 className="text-2xl font-bold">Flex</h2>}
          </div>
        </SidebarHeader>
        <SidebarContent
          className={`flex flex-col gap-6 p-4 ${isOpen ? '' : 'items-center'}`}
        >
          <div className="flex flex-col gap-7">
            {NAVIGATION.map((section) => (
              <div key={section.title} className="flex flex-col">
                {isOpen && (
                  <h3 className="mb-2 text-xs font-medium text-muted-foreground tracking-wider text-left">
                    {section.title}
                  </h3>
                )}
                <div className="flex flex-col space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex gap-1 items-center text-sm text-muted-foreground hover:text-foreground py-2 hover:bg-muted transition-colors duration-200 ${
                        isOpen ? '' : 'justify-center'
                      }`}
                      onClick={item.onClick}
                    >
                      <item.icon className={`h-4 w-4 `} />
                      {isOpen && <span className="truncate">{item.name}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SidebarContent>
        <div className="absolute flex right-4 bottom-1/4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="rounded-full p-2"
          >
            {isOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </div>
      </Sidebar>
      {children}
    </div>
  )
}

const useNavigation = () => {
  const [isConfigDialogOpen, setIsConfigDialogOpen] = useState(false)

  return {
    NAVIGATION: [
      {
        title: 'RESERVA DE TURNOS',
        items: [
          {
            name: 'Calendario',
            href: '/calendar',
            icon: CalendarIcon,
          },
          { name: 'Videollamada', href: '/videocall', icon: Video },
          { name: 'Reservar', href: '/reserve', icon: BookOpen },
          { name: 'Pagos', href: '/payments', icon: CreditCard },
        ],
      },
      {
        title: 'EMPRESA',
        items: [
          { name: 'Chatbot', href: '' /* TBD */, icon: MessageSquare },
          { name: 'Difusión', href: '' /* TBD */, icon: Zap },
          {
            name: 'Recepción Virtual',
            href: '/front-desk',
            icon: Inbox,
          },
        ],
      },
      {
        title: 'MÉTRICAS',
        items: [
          { name: 'Reporte de datos', href: '' /* TBD */, icon: BarChart2 },
        ],
      },
      {
        title: 'CONFIGURACIÓN',
        items: [
          { name: 'Cuenta', href: '' /* TBD */, icon: User },
          {
            name: 'Panel de control',
            href: '' /* TBD */,
            icon: Settings,
            onClick: () => setIsConfigDialogOpen((prev) => !prev),
          },
        ],
      },
    ],
    isConfigDialogOpen,
  }
}
