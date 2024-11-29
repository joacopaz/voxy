// import reactLogo from '@/assets/react.svg' import from assets (will be bundled)
// import viteLogo from '/vite.svg' import from public (not bundled)

import logosContributors from '/logos-contributors.svg'

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from '@/components/ui'
import {
  CheckIcon,
  ChevronDown,
  Globe,
  Play,
  Calendar,
  Phone,
  UserPlus,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  Download,
  Flame,
} from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

export const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState(0)
  const navigate = useNavigate()

  const testimonials = [
    {
      quote:
        'El chatbot de WhatsApp de Flex Co ha revolucionado nuestra forma de interactuar con los clientes. La función de sincronización del calendario ha facilitado la programación.',
      author: 'Sarah Johnson',
      position: 'CEO de TechSolutions',
      stat: '65% de reducción en conflictos de programación',
      source: 'Encuesta de Clientes Flex Co',
      logo: 'WomenWhoCode_logo.svg',
      logoAlt: 'Women Who Code',
      logoWidth: 120,
      logoHeight: 40,
    },
    {
      quote:
        'El calendario personalizado nos ha dado un control sin precedentes sobre nuestras operaciones. Es como tener una vista panorámica de todo nuestro negocio.',
      author: 'Michael Chen',
      position: 'Gerente de Operaciones en GlobalTech',
      stat: '30% de aumento en eficiencia operativa',
      source: 'Informe de Impacto Flex Co 2023',
      logo: 'thoughtworks.svg',
      logoAlt: 'Thoughtworks',
      logoWidth: 120,
      logoHeight: 20,
    },
    {
      quote:
        'La integración perfecta entre el chatbot de WhatsApp y nuestro calendario empresarial ha optimizado todo nuestro proceso de reservas. Es simplemente brillante.',
      author: 'David Thompson',
      position: 'Fundador de AgileBookings',
      stat: '40% de aumento en reservas exitosas',
      source: 'Estudio de Crecimiento Empresarial Flex Co',
      logo: 'ptc-logo.svg',
      logoAlt: 'PTC',
      logoWidth: 60,
      logoHeight: 30,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const goToAuth = () => {
    navigate('/auth')
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white">
      {/* Navbar */}
      <nav className="bg-[#121212]/80 backdrop-blur-sm border-b border-[#282828] fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Flame className="h-6 w-6 text-blue-400" />
              <Link to="/" className="font-bold text-xl text-white">
                Voxy
              </Link>
            </div>
            <div className="hidden md:flex ml-10 space-x-4">
              {['Destacados', 'Servicios', 'Precios'].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                >
                  {item} <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button
                className="bg-white hover:bg-gray-100 text-black rounded-full transition-all duration-200 flex items-center"
                onClick={goToAuth}
              >
                Iniciar sesión <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                className="bg-[#00D182] hover:bg-[#00B873] text-black rounded-full transition-colors duration-200 flex items-center"
                onClick={goToAuth}
              >
                Obtener Voxy
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-[#121212] text-white py-32 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-2 text-blue-400">
                VOXY EN ACCIÓN
              </h2>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Chatbot de WhatsApp y Calendario Inteligente
              </h1>
              <p className="text-xl text-gray-400 max-w-lg mb-6">
                Optimiza tu negocio con servicio al cliente impulsado por IA y
                programación inteligente.
              </p>
              <Button
                variant="link"
                className="text-blue-400 underline flex items-center hover:text-blue-300 transition-colors duration-200 p-0"
              >
                Ver demo <Play className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex flex-col sm:flex-row gap-2 mt-8">
                <div className="flex-grow pr-2">
                  <Input
                    type="email"
                    placeholder="Ingresa tu email"
                    className="bg-[#282828] text-white border-0 rounded-full h-12 focus:ring-2 focus:ring-white transition-all duration-200 w-full text-center placeholder:text-white focus:placeholder:text-transparent"
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-[#00D182] hover:bg-[#00B873] text-black rounded-full h-12 px-8 transition-all duration-200 whitespace-nowrap"
                  onClick={goToAuth}
                >
                  Comenzar Prueba Gratis
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-20">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg filter blur-3xl opacity-30"></div>
                <img
                  src="header.png"
                  alt="Interfaz de Chatbot WhatsApp y Calendario Inteligente"
                  width={500}
                  height={400}
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-32 bg-[#181818]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="lg:w-1/2 flex flex-col space-y-12">
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-semibold text-blue-400">
                  LA VENTAJA DE VOXY
                </h3>
                <h2 className="text-4xl font-bold text-white">
                  Tu Negocio, Automatizado
                </h2>
                <p className="text-xl text-gray-400">
                  Potente, flexible e intuitivo. Aprovecha nuestro chatbot de
                  WhatsApp y calendario inteligente para revolucionar tus
                  interacciones con clientes y operaciones comerciales.
                </p>
                <Link
                  to="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Explora nuestras funciones en detalle →
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg filter blur-3xl opacity-20"></div>
                <img
                  src="img2.png"
                  alt="Interfaz de Flex Co"
                  className="relative rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
            <div
              className="lg:w-1/2 flex flex-col gap-16"
              style={{ minHeight: '600px' }}
            >
              {[
                {
                  title: 'Chatbot de WhatsApp',
                  description:
                    'El chatbot de WhatsApp de Voxy mejora la eficiencia de tu negocio. Desde servicio al cliente automatizado hasta programación inteligente y decisiones basadas en datos.',
                },
                {
                  title: 'Calendario Inteligente',
                  description:
                    'El calendario inteligente de Voxy mejora la eficiencia de tu negocio. Desde servicio al cliente automatizado hasta programación inteligente y decisiones basadas en datos.',
                },
                {
                  title: 'Análisis de Negocio',
                  description:
                    'Los análisis de negocio de Voxy mejoran la eficiencia de tu empresa. Desde servicio al cliente automatizado hasta programación inteligente y decisiones basadas en datos.',
                },
                {
                  title: 'Integración Empresarial',
                  description:
                    'Conecta Voxy con tus herramientas existentes. Sincroniza datos, automatiza flujos de trabajo y centraliza la información de tu negocio en una única plataforma potente.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#282828] rounded-xl p-6 hover:bg-[#323232] transition-colors duration-200"
                >
                  <h4 className="text-xl font-bold mb-3 text-white">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-32 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-2 text-left text-blue-400">
            VOXY EN ACCIÓN
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-16 text-left">
            Potencia tus Operaciones Empresariales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Atención al Cliente',
                color: 'bg-blue-500',
                icon: Phone,
                iconColor: 'text-blue-200',
                description:
                  'Eleva tus interacciones con clientes con nuestras soluciones de IA y automatización de última generación.',
              },
              {
                name: 'Programación Inteligente',
                color: 'bg-green-500',
                icon: Calendar,
                iconColor: 'text-green-200',
                description:
                  'Optimiza tu proceso de reserva de citas con nuestras herramientas de programación inteligente.',
              },
              {
                name: 'Colaboración en Equipo',
                color: 'bg-yellow-500',
                icon: UserPlus,
                iconColor: 'text-yellow-300',
                description:
                  'Mejora la productividad del equipo con nuestras funciones avanzadas de colaboración.',
              },
              {
                name: 'Automatización de Tareas',
                color: 'bg-red-500',
                icon: CheckSquare,
                iconColor: 'text-red-200',
                description:
                  'Aumenta la eficiencia automatizando tareas repetitivas con nuestra tecnología de IA de vanguardia.',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="relative overflow-hidden shadow-lg bg-[#282828] border-0 rounded-xl transition-all duration-300 hover:bg-[#323232]"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${feature.color}`}
                ></div>
                <CardHeader className="pt-8 relative z-10">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {feature.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 bg-[#181818]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-stretch justify-between relative">
            <div
              className="md:w-2/3 bg-[#282828] hover:bg-[#323232] transition-colors duration-300 p-12 rounded-xl shadow-2xl flex flex-col justify-between"
              style={{ minHeight: '500px' }}
            >
              <blockquote className="text-2xl italic mb-8 text-gray-300 leading-relaxed">
                &quot;{testimonials[currentTestimonial].quote}&quot;
              </blockquote>
              <div>
                <div className="w-16 h-1 bg-blue-500 mb-6"></div>
                <p className="font-bold text-xl">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-400 mb-4">
                  {testimonials[currentTestimonial].position}
                </p>
                <Link
                  to="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Leer caso de estudio completo →
                </Link>
                <div className="mt-6">
                  <img
                    src={testimonials[currentTestimonial].logo}
                    alt={testimonials[currentTestimonial].logoAlt}
                    width={testimonials[currentTestimonial].logoWidth}
                    height={testimonials[currentTestimonial].logoHeight}
                    className="brightness-0 invert"
                  />
                </div>
              </div>
            </div>
            <div
              className="md:w-1/3  bg-blue-500 p-12 rounded-xl text-white flex flex-col justify-between relative"
              style={{ minHeight: '500px' }}
            >
              <div>
                <p className="text-4xl font-bold leading-tight">
                  {testimonials[currentTestimonial].stat}
                </p>
                <p className="text-xl mt-2">
                  {testimonials[currentTestimonial].source}
                </p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 mb-8 mr-8 flex space-x-4">
              <Button
                onClick={prevTestimonial}
                className="bg-[#282828] text-white rounded-full shadow-lg p-3 hover:bg-[#323232] transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextTestimonial}
                className="bg-[#282828] text-white rounded-full shadow-lg p-3 hover:bg-[#323232] transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Elige tu Plan</h2>
          <p className="text-center mb-12 text-xl text-gray-400 max-w-2xl mx-auto">
            Voxy potencia negocios de todos los tamaños con participación del
            cliente impulsada por IA y programación inteligente
          </p>
          <div className="text-center mb-16">
            <Button className="bg-white hover:bg-gray-200 text-black rounded-full px-8 py-3 text-lg transition-colors duration-200">
              Comparar Planes
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Inicial', price: 29 },
              { name: 'Pro', price: 79 },
              { name: 'Empresa', price: 199 },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`${selectedPlan === index ? 'border-blue-500 border-2' : ''} cursor-pointer transition-all duration-300 bg-[#282828] border-0 rounded-xl hover:bg-[#323232] flex flex-col`}
                onClick={() => setSelectedPlan(index)}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-400">
                    {plan.name}
                  </CardTitle>
                  <p className="text-5xl font-bold text-white mt-4">
                    ${plan.price}
                    <span className="text-xl font-normal text-gray-400">
                      /mes
                    </span>
                  </p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <ul className="space-y-4 mt-6">
                    {[
                      'Chatbot de WhatsApp',
                      'Calendario Inteligente',
                      'Análisis de Negocio',
                    ]
                      .slice(0, index + 1)
                      .map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-400">
                          <CheckIcon className="w-5 h-5 text-blue-500 mr-3" />
                          {feature}
                        </li>
                      ))}
                  </ul>
                  <Button className="w-full mt-8 bg-white hover:bg-gray-200 text-black rounded-full py-3 text-lg transition-colors duration-200">
                    Seleccionar Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-[80px] mb-12 text-xl text-white max-w-3xl mx-auto">
            Únete a más de 100,000 empresas en todo el mundo usando Voxy
            <br />
            para automatizar sus operaciones y aumentar la productividad.
          </p>
          <div className="flex justify-center items-center">
            <img
              src={logosContributors}
              alt="Logos de empresas usando Flex Co"
              width={960}
              height={80}
              className="brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#121212] text-white py-14 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-xl mb-8">
              Únete a miles de empresas que ya están usando nuestra plataforma y
              experimenta
              <br />
              el poder de la participación del cliente impulsada por IA y la
              programación inteligente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="flex-grow pr-4">
                <Input
                  type="email"
                  placeholder="Ingresa tu email"
                  className="bg-[#282828] text-white border-0 rounded-full h-12 focus:ring-2 focus:ring-white transition-all duration-200 w-full text-center placeholder:text-white focus:placeholder:text-transparent"
                />
              </div>
              <Button
                size="lg"
                className="bg-[#00D182] hover:bg-[#00B873] text-black rounded-full h-12 px-8 transition-all duration-200 whitespace-nowrap"
                onClick={goToAuth}
              >
                Comenzar Prueba Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white py-16 border-t border-[#282828]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white transition-colors duration-200 rounded-full"
              >
                <Globe className="mr-2 h-4 w-4" />
                Español
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Link
                to="#"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Política de Privacidad
              </Link>
              <Link
                to="#"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Términos de Servicio
              </Link>
              <span className="text-sm text-gray-400">© 2024 Voxy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
