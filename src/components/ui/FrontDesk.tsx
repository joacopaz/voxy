import { Plus, Send, Zap, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

import { Button, Input, TextArea, Card } from '@/components/ui'

export const FrontDesk = () => {
  const [email, setEmail] = useState('parisottohoracio@gmail.com')

  return (
    <div
      className="min-h-screen relative bg-cover bg-center front-desk-page"
      style={{
        backgroundImage: "url('/front-desk-background.jpg')",
      }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 right-5 w-full px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-serif text-white">VX</div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="bg-white rounded-xl shadow-sm px-4 h-10 flex items-center">
              <Button
                variant="ghost"
                className="text-sm font-normal hover:bg-transparent hover:text-black"
              >
                Transferencias
              </Button>
              <Button
                variant="ghost"
                className="text-sm font-normal hover:bg-transparent hover:text-black"
              >
                Reviews
              </Button>
              <Button
                variant="ghost"
                className="text-sm font-normal hover:bg-transparent hover:text-black"
              >
                Branding
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
      <div className="flex flex-col lg:flex-row min-h-screen pt-24">
        {/* Left Column */}
        <div className="flex-1 p-8 lg:p-16">
          <div className="max-w-[400px] mx-auto">
            {/* WEPRESENT Title */}
            <div className="mb-[100px] w-[80%] mx-auto text-center">
              <h1 className="text-3xl font-serif mb-1 text-gray-100">
                VXPresent
              </h1>
              <p className="text-sm text-gray-100">by VXTransfer</p>
            </div>

            <div className="relative -mt-[50px]">
              {/* Top Card */}
              <Card className="bg-white shadow-sm rounded-2xl w-[80%] mx-auto absolute left-1/2 -translate-x-1/2 -top-[34px] z-0">
                <div className="px-3 pt-3 pb-4">
                  <h2 className="text-center text-sm font-medium">
                    Solicitar archivos
                  </h2>
                </div>
              </Card>

              {/* Main Card */}
              <Card className="bg-white shadow-lg rounded-3xl overflow-hidden relative z-10">
                <div className="p-3">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <Button
                      variant="secondary"
                      className="h-auto py-6 flex flex-col items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 border-none"
                    >
                      <Plus className="h-5 w-5 text-blue-600" />
                      <div className="text-sm font-normal">Añadir archivos</div>
                    </Button>
                    <Button
                      variant="secondary"
                      className="h-auto py-6 flex flex-col items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 border-none"
                    >
                      <Plus className="h-5 w-5 text-blue-600" />
                      <div className="text-sm font-normal">Añadir carpetas</div>
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm mb-6">
                    <span className="text-gray-600">Hasta 3 GB gratis</span>
                    <Button
                      variant="link"
                      className="text-purple-600 p-0 h-auto flex items-center gap-1 font-normal"
                    >
                      <Zap className="h-3 w-3" />
                      Aumentar límite
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <div className="w-full flex justify-between border-b border-gray-200 pb-[5px] gap-2">
                          <Input
                            type="text"
                            placeholder="Enviar email a"
                            className="p-0 h-auto text-gray-600 border-0 rounded-none hover:bg-transparent focus-visible:ring-0 focus-visible:border-transparent w-1/2"
                          />
                          <span className="text-gray-400">0 de 10</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-500">
                          Tu email
                        </label>
                        <div className="relative w-full">
                          <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-300 w-full"
                          />
                          <Send className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-600" />
                        </div>
                      </div>
                    </div>

                    <Input
                      type="text"
                      placeholder="Título"
                      className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-300"
                    />
                    <TextArea
                      placeholder="Mensaje"
                      rows={4}
                      className="border-0 border-b border-gray-200 rounded-none px-0 py-0.5 focus-visible:ring-0 focus-visible:border-gray-300 min-h-[100px]"
                    />

                    <div className="flex items-center gap-2 px-2 pb-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full w-8 h-8 border-blue-600"
                      >
                        <MoreHorizontal className="h-4 w-4 text-blue-600" />
                      </Button>
                      <div className="flex-1 flex justify-center">
                        <Button className="bg-[#3767ea] hover:bg-[#2a4eb8] text-white h-10 rounded-lg px-10 w-1/2">
                          Enviar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 p-8 lg:p-16 relative"></div>
      </div>

      <div className="absolute bottom-4 left-4 text-xl font-serif text-white">
        Voxy
      </div>
    </div>
  )
}
