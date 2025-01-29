import { HelpCircle, Settings, Grid, Keyboard, Video } from 'lucide-react'
import { useState, useEffect } from 'react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Input,
} from '@/components/ui'

export const VideoCall = () => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      }
      setCurrentTime(now.toLocaleString('es-ES', options).replace(',', ' •'))
    }

    updateTime()
    const timer = setInterval(updateTime, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col items-center videocall-page">
      <main className="flex flex-col items-center px-4 lg:px-8 max-w-4xl w-full min-h-screen">
        {/* Header */}
        <header className="flex flex-wrap justify-between items-center gap-4 pt-4 mb-8 lg:mb-12 w-full">
          <span className="text-sm text-muted-foreground order-1 lg:order-none">
            {currentTime}
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Grid className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Contenido principal */}
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-3xl lg:text-4xl font-medium mb-4 text-center">
            Videollamadas y reuniones
            <br />
            para todo el mundo
          </h1>
          <p className="text-muted-foreground mb-8 text-center">
            Conéctate, colabora y celebra desde
            <br />
            cualquier lugar con Voxy Meet.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 w-full">
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
              <Video className="h-5 w-5" />
              Nueva reunión
            </Button>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Ingresa un código o vínculo"
                  className="w-full sm:w-[260px] pl-9"
                />
                <Keyboard className="h-5 w-5 text-muted-foreground absolute left-2 top-1/2 transform -translate-y-1/2" />
              </div>
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                Unirse
              </Button>
            </div>
          </div>

          {/* Imagen centrada */}
          <div className="relative max-w-lg w-full mb-8">
            <img
              src="/videocall-jazz.svg"
              alt="Video call illustration"
              className="w-2/3 h-auto mx-auto"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-4 lg:pb-8">
          <h2 className="text-xl lg:text-2xl font-medium mb-4">
            Prueba las funciones premium
            <br />
            de Voxy Meet
          </h2>
          <p className="text-muted-foreground mb-6">
            Disfruta de llamadas de grupo más largas y mucho más
            <br />
            con la prueba de 1 mes del plan Premium
          </p>
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
            Explorar el plan
          </Button>
        </div>
      </main>
    </div>
  )
}
