import { Plus, Send, Zap, MoreHorizontal, Search } from 'lucide-react'
import { useState } from 'react'

import { Button, TextArea, Card, Input } from '@/components/ui'

export const Reserve = () => {
  const [email, setEmail] = useState('parisottohoracio@gmail.com')

  const clubNames = ['Lawn Tennis', 'Olivos Club', 'Boca Tenis', 'Club Ferro']

  const pastelColors = [
    'bg-blue-200',
    'bg-purple-200',
    'bg-orange-200',
    'bg-pink-200',
    'bg-red-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-indigo-200',
  ]

  const CardGroup = ({
    clubName,
    bgColor,
  }: {
    clubName: string
    bgColor: string
  }) => (
    <div className="w-full">
      <Card className="bg-white shadow-lg rounded-3xl overflow-hidden">
        <div
          className={`${bgColor} p-2 text-gray-800 font-semibold text-center`}
        >
          {clubName}
        </div>
        <div className="p-2">
          <div className="grid grid-cols-2 gap-1 mb-2">
            <Button
              variant="secondary"
              className="h-auto py-3 flex flex-col items-center justify-between bg-blue-50 hover:bg-blue-100 border-none"
            >
              <div className="h-4 flex items-center justify-center">
                <Plus className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-xs font-normal mt-1">Seleccionar cancha</div>
            </Button>
            <Button
              variant="secondary"
              className="h-auto py-3 flex flex-col items-center justify-between bg-blue-50 hover:bg-blue-100 border-none"
            >
              <div className="h-4 flex items-center justify-center">
                <Plus className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-xs font-normal mt-1 flex flex-col items-center">
                <span>Ver</span>
                <span>horarios</span>
              </div>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-1 text-xs mb-3">
            <span className="text-gray-600">Consulta disponibilidad</span>
            <Button
              variant="link"
              className="text-purple-600 p-0 h-auto flex items-center gap-1 font-normal text-xs"
            >
              <Zap className="h-2 w-2" />
              <span className="text-purple-600">Tiempo real</span>
            </Button>
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <div className="w-full flex justify-between border-b border-gray-200 pb-[3px] gap-1">
                  <Input
                    type="text"
                    placeholder="Enviar email a"
                    className="p-0 h-auto text-gray-600 border-0 rounded-none hover:bg-transparent focus-visible:ring-0 focus-visible:border-transparent w-1/2 text-xs"
                  />
                  <span className="text-gray-400 text-xs">0 de 10</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500">Tu email</label>
                <div className="relative w-full">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-300 w-full text-xs"
                  />
                  <Send className="h-3 w-3 absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-600" />
                </div>
              </div>
            </div>

            <Input
              type="text"
              placeholder="Fecha y hora de la reserva"
              className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-300 text-xs"
            />
            <TextArea
              placeholder="Comentarios adicionales (opcional)"
              rows={2}
              className="border-0 border-b border-gray-200 rounded-none px-0 py-0.5 focus-visible:ring-0 focus-visible:border-gray-300 min-h-[50px] text-xs"
            />

            {/* Espacio vacío para mantener el padding */}
            <div className="h-6"></div>

            <div className="flex items-center gap-1 px-1 pb-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-6 h-6 border-blue-600"
              >
                <MoreHorizontal className="h-3 w-3 text-blue-600" />
              </Button>
              <div className="flex-1 flex justify-center">
                <Button className="bg-[#3767ea] hover:bg-[#2a4eb8] text-white h-8 rounded-lg px-6 w-1/2 text-xs">
                  Reservar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )

  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/reserve-page-bg.png')" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 h-[60px] flex justify-between items-center z-50 bg-transparent">
        <div className="text-3xl font-serif text-white">VX Reserves</div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="bg-white rounded-xl shadow-sm px-4 h-10 flex items-center">
              <Button
                variant="ghost"
                className="text-sm font-normal hover:bg-transparent hover:text-black"
              >
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
              <Button
                variant="ghost"
                className="text-sm font-normal hover:bg-transparent hover:text-black"
              >
                Sedes
              </Button>
              <Button
                variant="ghost"
                className="text-sm font-normal hover:bg-transparent hover:text-black"
              >
                Especialista
              </Button>
              <Button
                variant="ghost"
                className="text-sm font-normal hover:bg-transparent hover:text-black"
              >
                Contactos
              </Button>
            </div>
            <div className="bg-white rounded-xl shadow-sm px-4 h-10 flex items-center">
              <div className="flex items-center gap-2 text-purple-600">
                <Zap className="h-4 w-4" />
                <span className="text-sm">Actualizar</span>
              </div>
              <div className="h-5 w-[1px] bg-gray-200 mx-3" />
              <div className="flex flex-col justify-center">
                <span className="text-sm leading-tight">
                  parisottohoracio@gmail.com
                </span>
                <span className="text-xs text-gray-500 leading-tight">
                  Plan gratuito
                </span>
              </div>
              <div className="h-6 w-6 rounded-lg bg-[#FF6B4A] ml-3" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex p-4 h-screen items-center w-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubNames.map((clubName, index) => (
              <CardGroup
                key={index}
                clubName={clubName}
                bgColor={pastelColors[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
