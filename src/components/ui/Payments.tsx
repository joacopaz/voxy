import { CreditCard, QrCode, ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Card,
  CardContent,
} from '@/components/ui'

export const Payments = () => {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const nav = useNavigate()

  return (
    <div className="min-h-screen bg-white flex w-screen">
      <div className="flex-1 bg-[#1A1F36] text-white p-8 flex flex-col">
        <div className="flex items-center space-x-3 mb-12">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-transparent hover:text-white"
            onClick={() => nav(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#1A1F36] text-sm font-semibold">P</span>
          </div>
          <span className="font-medium">Powerhouse</span>
        </div>
        <div className="flex-grow flex flex-col justify-start max-w-md w-full pl-11">
          <h1 className="text-2xl font-medium mb-2">Pilates</h1>
          <div className="text-3xl font-semibold mb-6">$65.00</div>

          <div className="bg-blue-50 rounded-lg p-4 mb-8">
            <img
              src="/pilates.png"
              alt="Pilates"
              className="w-full h-[400px] object-cover rounded"
            />
          </div>

          {/* Footer text */}
          <div className="text-sm text-white mt-auto mb-[45px]">
            Desarrollado por Voxy | Términos | Privacidad
          </div>
        </div>
      </div>

      <div className="flex-1 p-8 pb-20 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-[#009ee3] text-white rounded-md py-3 mb-4 flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5zm-1.243-8.73l-2.939-2.939 1.057-1.057 1.882 1.882 4.183-4.183 1.057 1.057-5.24 5.24z" />
            </svg>
            <span>Mercado Pago</span>
          </button>

          <div className="relative text-center text-sm text-gray-500 my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <span className="relative bg-white px-4">O paga de otra forma</span>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-4">Información de envío</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" className="mt-1" />
                </div>

                <div>
                  <Label>Dirección de envío</Label>
                  <Input placeholder="Nombre" className="mt-1 mb-2" />
                  <Select defaultValue="AR">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AR">Argentina</SelectItem>
                      <SelectItem value="BO">Bolivia</SelectItem>
                      <SelectItem value="BR">Brasil</SelectItem>
                      <SelectItem value="CL">Chile</SelectItem>
                      <SelectItem value="CO">Colombia</SelectItem>
                      <SelectItem value="CR">Costa Rica</SelectItem>
                      <SelectItem value="CU">Cuba</SelectItem>
                      <SelectItem value="EC">Ecuador</SelectItem>
                      <SelectItem value="SV">El Salvador</SelectItem>
                      <SelectItem value="GT">Guatemala</SelectItem>
                      <SelectItem value="HN">Honduras</SelectItem>
                      <SelectItem value="MX">México</SelectItem>
                      <SelectItem value="NI">Nicaragua</SelectItem>
                      <SelectItem value="PA">Panamá</SelectItem>
                      <SelectItem value="PY">Paraguay</SelectItem>
                      <SelectItem value="PE">Perú</SelectItem>
                      <SelectItem value="DO">República Dominicana</SelectItem>
                      <SelectItem value="UY">Uruguay</SelectItem>
                      <SelectItem value="VE">Venezuela</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Dirección" className="mt-2" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">Método de pago</h2>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <Button
                  variant={paymentMethod === 'card' ? 'default' : 'outline'}
                  className="flex items-center justify-center space-x-2"
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Tarjeta</span>
                </Button>
                <Button
                  variant={paymentMethod === 'qr' ? 'default' : 'outline'}
                  className="flex items-center justify-center space-x-2"
                  onClick={() => setPaymentMethod('qr')}
                >
                  <QrCode className="w-4 h-4" />
                  <span>Código QR</span>
                </Button>
                <Button
                  variant={paymentMethod === 'alias' ? 'default' : 'outline'}
                  className="flex items-center justify-center space-x-2"
                  onClick={() => setPaymentMethod('alias')}
                >
                  <span className="font-semibold">A</span>
                  <span>Alias</span>
                </Button>
              </div>

              <div className="h-[300px] mb-6">
                {paymentMethod === 'card' && <CardInfo />}
                {paymentMethod === 'qr' && <QRCode />}
                {paymentMethod === 'alias' && <AliasInfo />}
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Pagar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AliasInfo = () => (
  <div className="bg-gray-100 p-4 rounded-lg h-full flex flex-col justify-center">
    <div className="space-y-2 text-sm">
      <p>
        <strong>Alias:</strong> sol.luna.estrellas
      </p>
      <p>
        <strong>Banco:</strong> Banco del Futuro S.A.
      </p>
      <p>
        <strong>CBU:</strong> 1234567890123456789012
      </p>
      <p>
        <strong>Número de Cuenta:</strong> 987654321
      </p>
      <p>
        <strong>Titular:</strong> Juan Pérez
      </p>
      <p>
        <strong>CUIT/CUIL:</strong> 20-12345678-9
      </p>
    </div>
  </div>
)

const CardInfo = () => (
  <Card className="h-full">
    <CardContent className="p-4 space-y-4 flex flex-col justify-between h-full">
      <div className="space-y-4">
        <div>
          <Label htmlFor="cardType">Tipo de tarjeta</Label>
          <Select defaultValue="visa">
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Selecciona el tipo de tarjeta" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="visa">Visa</SelectItem>
              <SelectItem value="mastercard">Mastercard</SelectItem>
              <SelectItem value="amex">American Express</SelectItem>
              <SelectItem value="diners">Diners Club</SelectItem>
              <SelectItem value="discover">Discover</SelectItem>
              <SelectItem value="unionpay">UnionPay</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="card">Número de tarjeta</Label>
          <Input id="card" placeholder="1234 1234 1234 1234" className="mt-1" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="expiry">Fecha de expiración</Label>
            <Input id="expiry" placeholder="MM / AA" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="123" className="mt-1" />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const QRCode = () => (
  <div className="flex flex-col items-center justify-center h-full bg-gray-100 rounded-lg p-4">
    <p className="mt-4 text-center text-sm text-gray-600">
      Escanea este QR con tu app bancaria para pagar
    </p>
  </div>
)
