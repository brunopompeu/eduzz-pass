import { useState } from 'react'
import { Search, Star, Clock, Check, ShieldCheck, Lock, Zap, Bookmark, TrendingUp, Award, Plus } from 'lucide-react'

const COLORS = {
  bg: '#0D2772',
  card: '#0A1F5C',
  yellow: '#FFBC00',
  blue: '#00CAF9',
  textSecondary: 'rgba(255,255,255,0.65)',
  border: 'rgba(255,255,255,0.1)',
}

function getGradient(category) {
  const map = {
    'Marketing':         'linear-gradient(135deg, #7B2FF7, #F107A3)',
    'Finanças':          'linear-gradient(135deg, #1FA2FF, #12D8FA)',
    'Empreendedorismo':  'linear-gradient(135deg, #F7971E, #FFD200)',
    'Saúde':             'linear-gradient(135deg, #11998E, #38EF7D)',
    'Tecnologia':        'linear-gradient(135deg, #4776E6, #8E54E9)',
    'Vendas':            'linear-gradient(135deg, #FF416C, #FF4B2B)',
  }
  return map[category] || 'linear-gradient(135deg, #0D2772, #00CAF9)'
}

const COURSE_IMAGES = {
  'Copywriting que Converte':           'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=225&fit=crop&auto=format',
  'Investindo do Zero':                 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop&auto=format',
  'Instagram para Negócios':            'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=225&fit=crop&auto=format',
  'Mentalidade Milionária':             'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=225&fit=crop&auto=format',
  'Excel Avançado para Profissionais':  'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=225&fit=crop&auto=format',
  'Yoga e Mindfulness':                 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=225&fit=crop&auto=format',
  'Vendas pelo WhatsApp':               'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&auto=format',
  'Python para Iniciantes':             'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=225&fit=crop&auto=format',
  'Gestão Financeira Pessoal':          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=225&fit=crop&auto=format',
  'Tráfego Pago no Meta Ads':           'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop&auto=format',
  'Como Montar um Negócio Online':      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=225&fit=crop&auto=format',
  'Nutrição Funcional':                 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=225&fit=crop&auto=format',
  'Liderança Moderna':                  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=225&fit=crop&auto=format',
  'IA para Empreendedores':             'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=225&fit=crop&auto=format',
  'Meditação e Produtividade':          'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=225&fit=crop&auto=format',
  'Finanças para Autônomos':            'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop&auto=format',
  'Storytelling para Vendas':           'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&auto=format',
  'Gestão Avançada de Tráfego':         'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop&auto=format',
  'Curso Premium de Branding':          'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=225&fit=crop&auto=format',
}

const CATEGORY_IMAGES = {
  'Marketing':         'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop&auto=format',
  'Finanças':          'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop&auto=format',
  'Empreendedorismo':  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&auto=format',
  'Saúde':             'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=225&fit=crop&auto=format',
  'Tecnologia':        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=225&fit=crop&auto=format',
  'Vendas':            'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=225&fit=crop&auto=format',
}

function getCoverImage(title, category) {
  return COURSE_IMAGES[title]
    || CATEGORY_IMAGES[category]
    || CATEGORY_IMAGES['Marketing']
}

const courses = [
  { id:1,  title: 'Copywriting que Converte',          author: 'Rafael Cunha',     rating: 4.9, hours: '8h',  category: 'Marketing'        },
  { id:2,  title: 'Investindo do Zero',                author: 'Amanda Ferreira',  rating: 4.8, hours: '14h', category: 'Finanças'         },
  { id:3,  title: 'Instagram para Negócios',           author: 'Lucas Mendes',     rating: 4.7, hours: '6h',  category: 'Marketing'        },
  { id:4,  title: 'Mentalidade Milionária',            author: 'Dra. Carla Souza', rating: 4.9, hours: '10h', category: 'Empreendedorismo' },
  { id:5,  title: 'Excel Avançado para Profissionais', author: 'Paulo Ramos',      rating: 4.6, hours: '18h', category: 'Tecnologia'       },
  { id:6,  title: 'Yoga e Mindfulness',                author: 'Juliana Castro',   rating: 4.8, hours: '5h',  category: 'Saúde'            },
  { id:7,  title: 'Vendas pelo WhatsApp',              author: 'Marcos Teixeira',  rating: 4.9, hours: '7h',  category: 'Vendas'           },
  { id:8,  title: 'Python para Iniciantes',            author: 'Felipe Andrade',   rating: 4.7, hours: '20h', category: 'Tecnologia'       },
  { id:9,  title: 'Gestão Financeira Pessoal',         author: 'Ana Lima',         rating: 4.8, hours: '9h',  category: 'Finanças'         },
  { id:10, title: 'Tráfego Pago no Meta Ads',          author: 'Bruno Oliveira',   rating: 4.9, hours: '12h', category: 'Marketing'        },
  { id:11, title: 'Como Montar um Negócio Online',     author: 'Thais Ribeiro',    rating: 4.7, hours: '15h', category: 'Empreendedorismo' },
  { id:12, title: 'Nutrição Funcional',                author: 'Dr. Renato Costa', rating: 4.8, hours: '8h',  category: 'Saúde'            },
]

const categories = ['Todos', 'Marketing', 'Finanças', 'Empreendedorismo', 'Saúde', 'Tecnologia', 'Vendas']

function NavBar({ screen, setScreen }) {
  const navItems = [
    { label: 'Catálogo',       value: 'discovery'    },
    { label: 'Assinatura',     value: 'subscription' },
    { label: 'Biblioteca',     value: 'library'      },
    { label: 'Produtor',       value: 'producer'     },
    { label: 'Business Case',  value: 'business'     },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6"
      style={{
        height: 56,
        backgroundColor: COLORS.card,
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <svg width="28" height="28" viewBox="-243 -123 244 246" xmlns="http://www.w3.org/2000/svg">
          <g transform="scale(1,-1)">
            <path
              fill="#FFBC00"
              d="m 0,0 c 0,-66.432 -53.844,-120.266 -120.276,-120.266 -35.547,0 -67.479,15.447 -89.503,39.968 h 69.453 c 11.067,0 20.05,8.982 20.05,20.05 0,11.177 -8.983,20.159 -20.05,20.159 h -93.399 c -0.071,0.182 -0.131,0.373 -0.191,0.575 -2.115,6.223 -3.787,12.748 -4.995,19.475 h 52.636 c 11.057,0 20.039,8.982 20.039,20.039 0,11.067 -8.982,20.05 -20.039,20.05 h -52.636 c 1.188,6.686 2.87,13.282 5.045,19.475 0.061,0.181 0.131,0.373 0.201,0.564 h 93.339 c 11.067,0 20.05,8.982 20.05,20.049 0,11.057 -8.983,20.04 -20.05,20.04 h -69.573 c 7.925,8.821 17.109,16.474 27.279,22.657 18.187,11.067 39.525,17.441 62.344,17.441 C -53.844,120.276 0,66.442 0,0"
            />
          </g>
        </svg>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px' }}>
          <span style={{ color: '#FFFFFF' }}>eduzz</span>
          <span style={{ color: COLORS.yellow }}> Pass</span>
        </span>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Fade direito — indica que há mais conteúdo */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: 40,
          background: `linear-gradient(to right, transparent, ${COLORS.card})`,
          pointerEvents: 'none',
          zIndex: 1,
        }} />

        {/* Container scrollável */}
        <div className="nav-scroll" style={{
          display: 'flex',
          gap: 4,
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingBottom: 2,
          paddingRight: 48,
        }}>
          {navItems.map(({ label, value }) => {
            const isActive = screen === value
            return (
              <button
                key={value}
                onClick={() => setScreen(value)}
                className="transition-all duration-200 rounded-lg px-4 py-2 cursor-pointer"
                style={{
                  fontSize: 14,
                  fontFamily: 'Syne, sans-serif',
                  backgroundColor: isActive ? COLORS.yellow : 'transparent',
                  color: isActive ? COLORS.bg : COLORS.textSecondary,
                  fontWeight: isActive ? 700 : 400,
                  border: 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

function CourseCard({ course }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl overflow-hidden cursor-pointer transition-all duration-200"
      style={{
        backgroundColor: COLORS.card,
        border: `1px solid ${hovered ? COLORS.blue : COLORS.border}`,
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      {/* Cover */}
      <div className="relative" style={{ aspectRatio: '16/9' }}>
        <img
          src={getCoverImage(course.title, course.category)}
          alt={course.title}
          className="w-full h-full object-cover"
          onError={e => {
            e.target.style.display = 'none'
            e.target.parentNode.style.background = getGradient(course.category)
          }}
        />
        <span
          className="absolute top-2 left-2 font-bold rounded-md"
          style={{
            backgroundColor: COLORS.blue,
            color: COLORS.bg,
            fontSize: 11,
            padding: '2px 8px',
          }}
        >
          PASS
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <p
          className="font-bold"
          style={{
            fontSize: 15,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {course.title}
        </p>
        <p style={{ color: COLORS.textSecondary, fontSize: 13, marginTop: 4 }}>
          {course.author}
        </p>

        <div className="flex items-center gap-3 mt-3">
          <span className="flex items-center gap-1">
            <Star size={14} fill={COLORS.yellow} stroke={COLORS.yellow} />
            <span style={{ fontSize: 13 }}>{course.rating}</span>
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <span className="flex items-center gap-1">
            <Clock size={14} color="rgba(255,255,255,0.5)" />
            <span style={{ fontSize: 13, color: COLORS.textSecondary }}>{course.hours}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function DiscoveryScreen({ setScreen }) {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [search, setSearch] = useState('')

  const filtered = courses.filter(c => {
    const matchCat = activeCategory === 'Todos' || c.category === activeCategory
    const matchSearch = search === '' || c.title.toLowerCase().includes(search.toLowerCase()) || c.author.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div
      className="mx-auto px-6 py-10"
      style={{ paddingTop: 56 + 40, maxWidth: 1152 }}
    >
      {/* Hero */}
      <div className="text-center mb-12">
        <h1
          className="font-bold mx-auto"
          style={{ fontSize: 36, lineHeight: 1.2, maxWidth: 640 }}
        >
          Acesso ilimitado a centenas de cursos por uma assinatura
        </h1>
        <p
          className="mx-auto mt-3"
          style={{ fontSize: 16, color: COLORS.textSecondary, maxWidth: 480 }}
        >
          Assine o Eduzz Pass e tenha acesso imediato a +237 cursos dos melhores especialistas do Brasil
        </p>
        <button
          onClick={() => setScreen('subscription')}
          className="mt-8 transition-all duration-200 rounded-xl cursor-pointer font-bold"
          style={{
            backgroundColor: COLORS.yellow,
            color: COLORS.bg,
            fontSize: 16,
            padding: '16px 40px',
            border: 'none',
            filter: 'brightness(1)',
          }}
          onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.05)'}
          onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
        >
          Assinar agora — a partir de R$29/mês
        </button>
        <p className="mt-4 font-bold" style={{ color: COLORS.blue, fontSize: 14 }}>
          ✦ 237 cursos incluídos no Pass
        </p>
      </div>

      {/* Search */}
      <div className="mb-6 mx-auto" style={{ maxWidth: 672 }}>
        <div className="relative">
          <Search
            size={18}
            color={COLORS.blue}
            style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="Buscar cursos no Pass..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full rounded-xl py-3 pr-4 text-white transition-all duration-200"
            style={{
              paddingLeft: 42,
              backgroundColor: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              fontFamily: 'Syne, sans-serif',
              fontSize: 14,
              outline: 'none',
            }}
            onFocus={e => e.target.style.borderColor = COLORS.blue}
            onBlur={e => e.target.style.borderColor = COLORS.border}
          />
        </div>
      </div>

      {/* Category chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
        {categories.map(cat => {
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="transition-all duration-200 cursor-pointer whitespace-nowrap"
              style={{
                padding: '8px 16px',
                borderRadius: 9999,
                fontSize: 14,
                fontFamily: 'Syne, sans-serif',
                fontWeight: isActive ? 700 : 400,
                backgroundColor: isActive ? COLORS.blue : 'transparent',
                color: isActive ? COLORS.bg : COLORS.textSecondary,
                border: `1px solid ${isActive ? COLORS.blue : 'rgba(255,255,255,0.2)'}`,
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Course grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center mt-12 pb-8" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>
        Cancele quando quiser. Sem fidelidade.
      </p>
    </div>
  )
}

function SubscriptionScreen({ setScreen }) {
  const essentialBenefits = [
    'Acesso a +100 cursos selecionados',
    '1 dispositivo simultâneo',
    'Certificados incluídos',
    'Suporte por e-mail',
  ]
  const totalBenefits = [
    'Acesso a +237 cursos (catálogo completo)',
    'Até 3 dispositivos simultâneos',
    'Certificados incluídos',
    'Suporte prioritário',
    'Novos cursos toda semana',
  ]

  return (
    <div
      className="pt-14 min-h-screen px-6 py-12 mx-auto"
      style={{ maxWidth: 1024 }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-bold" style={{ fontSize: 36 }}>
          Escolha seu plano
        </h1>
        <p className="mt-3" style={{ color: COLORS.textSecondary, fontSize: 16 }}>
          Comece hoje e tenha acesso ao melhor da educação digital
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-6 justify-center items-start flex-wrap">

        {/* Card Essencial */}
        <div
          className="rounded-2xl p-8 w-full"
          style={{
            maxWidth: 384,
            backgroundColor: COLORS.card,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
            Essencial
          </p>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="font-bold" style={{ fontSize: 48 }}>R$29</span>
            <span style={{ fontSize: 16, color: COLORS.textSecondary }}>/mês</span>
          </div>
          <hr style={{ borderColor: COLORS.border, marginBottom: 24 }} />
          <div className="flex flex-col mb-8" style={{ gap: 12 }}>
            {essentialBenefits.map(b => (
              <div key={b} className="flex items-start gap-3">
                <Check size={18} color="#22c55e" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 15 }}>{b}</span>
              </div>
            ))}
          </div>
          <button
            className="w-full rounded-xl font-bold transition-all duration-200 cursor-pointer"
            style={{
              padding: '14px 0',
              fontSize: 15,
              backgroundColor: 'transparent',
              border: `2px solid ${COLORS.yellow}`,
              color: COLORS.yellow,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = COLORS.yellow
              e.currentTarget.style.color = COLORS.bg
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = COLORS.yellow
            }}
          >
            Assinar Essencial
          </button>
        </div>

        {/* Card Total */}
        <div
          className="rounded-2xl p-8 w-full"
          style={{
            maxWidth: 384,
            position: 'relative',
            backgroundColor: COLORS.card,
            border: `2px solid ${COLORS.yellow}`,
            boxShadow: '0 0 40px rgba(255,188,0,0.15)',
          }}
        >
          {/* Badge */}
          <div
            style={{
              position: 'absolute',
              top: -14,
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: COLORS.yellow,
              color: COLORS.bg,
              fontWeight: 700,
              fontSize: 12,
              padding: '6px 16px',
              borderRadius: 9999,
              whiteSpace: 'nowrap',
            }}
          >
            Mais popular
          </div>

          <p style={{ color: COLORS.yellow, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16, marginTop: 8 }}>
            Total
          </p>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="font-bold" style={{ fontSize: 48 }}>R$49</span>
            <span style={{ fontSize: 16, color: COLORS.textSecondary }}>/mês</span>
          </div>
          <hr style={{ borderColor: 'rgba(255,188,0,0.2)', marginBottom: 24 }} />
          <div className="flex flex-col mb-8" style={{ gap: 12 }}>
            {totalBenefits.map(b => (
              <div key={b} className="flex items-start gap-3">
                <Check size={18} color={COLORS.blue} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 15 }}>{b}</span>
              </div>
            ))}
          </div>
          <button
            className="w-full rounded-xl font-bold transition-all duration-200 cursor-pointer"
            style={{
              padding: '14px 0',
              fontSize: 15,
              backgroundColor: COLORS.yellow,
              color: COLORS.bg,
              border: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.05)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
            onClick={() => setScreen('library')}
          >
            Assinar Total
          </button>
        </div>
      </div>

      {/* Trust line */}
      <div className="flex justify-center flex-wrap mt-12" style={{ gap: 40 }}>
        {[
          { icon: <ShieldCheck size={20} color={COLORS.blue} />, label: 'Cancele quando quiser' },
          { icon: <Lock size={20} color={COLORS.blue} />, label: 'Pagamento seguro' },
          { icon: <Zap size={20} color={COLORS.blue} />, label: 'Acesso imediato' },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            {icon}
            <span style={{ color: COLORS.textSecondary, fontSize: 14 }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Discrete link */}
      <div className="text-center mt-8">
        <span
          className="cursor-pointer"
          style={{ color: COLORS.blue, fontSize: 14 }}
          onClick={() => setScreen('discovery')}
          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
        >
          Ver todos os cursos incluídos →
        </span>
      </div>
    </div>
  )
}

function LibraryScreen({ setScreen }) {
  const inProgress = [
    { title: 'Copywriting que Converte',  author: 'Rafael Cunha',    percent: 67, category: 'Marketing'   },
    { title: 'Python para Iniciantes',    author: 'Felipe Andrade',  percent: 23, category: 'Tecnologia'  },
    { title: 'Investindo do Zero',        author: 'Amanda Ferreira', percent: 89, category: 'Finanças'    },
  ]

  const libCategories = [
    { emoji: '💰', name: 'Educação Financeira', count: 42 },
    { emoji: '💪', name: 'Saúde e Bem-Estar',   count: 31 },
    { emoji: '🚀', name: 'Empreendedorismo',    count: 58 },
    { emoji: '📱', name: 'Marketing Digital',   count: 64 },
    { emoji: '💻', name: 'Tecnologia',          count: 47 },
    { emoji: '🎯', name: 'Vendas',              count: 35 },
  ]

  const newCourses = [
    { title: 'Liderança Moderna',         author: 'Carlos Mendes',  rating: 4.9, hours: '6h',  category: 'Empreendedorismo' },
    { title: 'IA para Empreendedores',    author: 'Sofia Alves',    rating: 4.8, hours: '8h',  category: 'Tecnologia'       },
    { title: 'Meditação e Produtividade', author: 'Renata Costa',   rating: 4.7, hours: '4h',  category: 'Saúde'            },
    { title: 'Finanças para Autônomos',   author: 'Diego Ferreira', rating: 4.9, hours: '10h', category: 'Finanças'         },
    { title: 'Storytelling para Vendas',  author: 'Patrícia Nunes', rating: 4.8, hours: '5h',  category: 'Vendas'           },
  ]

  const saved = [
    { title: 'Tráfego Pago no Meta Ads',  author: 'Bruno Oliveira', category: 'Marketing' },
    { title: 'Gestão Financeira Pessoal', author: 'Ana Lima',       category: 'Finanças'  },
  ]

  return (
    <div className="pt-14 min-h-screen px-6 py-10 mx-auto" style={{ maxWidth: 1152 }}>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-1">
          <span className="font-bold" style={{ fontSize: 28 }}>Olá, Mariana! 👋</span>
          <span
            className="font-bold rounded-full"
            style={{
              backgroundColor: COLORS.blue,
              color: '#0D2772',
              fontSize: 12,
              padding: '4px 12px',
            }}
          >
            Pass Total ativo
          </span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15 }}>
          Sua jornada de aprendizado continua aqui
        </p>
      </div>

      {/* Continue assistindo */}
      <div>
        <p className="font-bold mb-4" style={{ fontSize: 20 }}>Continue assistindo</p>
        <div className="flex flex-col" style={{ gap: 12 }}>
          {inProgress.map(course => (
            <div
              key={course.title}
              className="rounded-xl flex items-center"
              style={{
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                padding: 16,
                gap: 16,
              }}
            >
              {/* Capa */}
              <div
                className="rounded-lg flex-shrink-0 overflow-hidden"
                style={{ width: 72, height: 72 }}
              >
                <img
                  src={getCoverImage(course.title, course.category)}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentNode.style.background = getGradient(course.category)
                  }}
                />
              </div>
              {/* Info */}
              <div style={{ flex: 1 }}>
                <p className="font-bold" style={{ fontSize: 15 }}>{course.title}</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 2 }}>{course.author}</p>
                <div style={{ marginTop: 12 }}>
                  <div
                    className="rounded-full"
                    style={{
                      width: '100%',
                      height: 6,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    }}
                  >
                    <div
                      className="rounded-full"
                      style={{
                        height: '100%',
                        width: `${course.percent}%`,
                        backgroundColor: COLORS.yellow,
                      }}
                    />
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginTop: 4 }}>
                    {course.percent}% concluído
                  </p>
                </div>
              </div>
              {/* Botão */}
              <button
                className="flex-shrink-0 font-bold rounded-lg cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor: COLORS.yellow,
                  color: '#0D2772',
                  fontSize: 13,
                  padding: '8px 16px',
                  border: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.05)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
              >
                Continuar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Explorar por categoria */}
      <div style={{ marginTop: 40 }}>
        <p className="font-bold mb-4" style={{ fontSize: 20 }}>Explorar por categoria</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {libCategories.map(cat => (
            <CategoryCard key={cat.name} cat={cat} />
          ))}
        </div>
      </div>

      {/* Novidades esta semana */}
      <div style={{ marginTop: 40 }}>
        <p className="font-bold mb-4" style={{ fontSize: 20 }}>Novidades esta semana</p>
        <div
          className="flex pb-3"
          style={{
            gap: 16,
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {newCourses.map(course => (
            <div
              key={course.title}
              className="rounded-xl overflow-hidden flex-shrink-0"
              style={{
                width: 208,
                backgroundColor: COLORS.card,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              {/* Capa */}
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src={getCoverImage(course.title, course.category)}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentNode.style.background = getGradient(course.category)
                  }}
                />
                <span
                  className="absolute font-bold rounded-md"
                  style={{
                    top: 8,
                    left: 8,
                    backgroundColor: COLORS.yellow,
                    color: '#0D2772',
                    fontSize: 10,
                    padding: '2px 8px',
                  }}
                >
                  NOVO
                </span>
              </div>
              {/* Corpo */}
              <div style={{ padding: 12 }}>
                <p
                  className="font-bold"
                  style={{
                    fontSize: 13,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {course.title}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, marginTop: 4 }}>
                  {course.author}
                </p>
                <div className="flex items-center" style={{ gap: 8, marginTop: 8 }}>
                  <span className="flex items-center" style={{ gap: 3 }}>
                    <Star size={12} fill={COLORS.yellow} stroke={COLORS.yellow} />
                    <span style={{ fontSize: 12 }}>{course.rating}</span>
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                  <span className="flex items-center" style={{ gap: 3 }}>
                    <Clock size={12} color="rgba(255,255,255,0.5)" />
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>{course.hours}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Salvos */}
      <div style={{ marginTop: 40, marginBottom: 48 }}>
        <div className="flex items-center mb-4" style={{ gap: 8 }}>
          <Bookmark size={20} fill={COLORS.yellow} stroke={COLORS.yellow} />
          <p className="font-bold" style={{ fontSize: 20 }}>Salvos</p>
        </div>
        {saved.map(course => (
          <div
            key={course.title}
            className="rounded-xl flex items-center mb-3"
            style={{
              backgroundColor: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              padding: 16,
              gap: 16,
            }}
          >
            <div
              className="rounded-lg flex-shrink-0 overflow-hidden"
              style={{ width: 72, height: 72 }}
            >
              <img
                src={getCoverImage(course.title, course.category)}
                alt={course.title}
                className="w-full h-full object-cover"
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.parentNode.style.background = getGradient(course.category)
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <p className="font-bold" style={{ fontSize: 15 }}>{course.title}</p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 2 }}>{course.author}</p>
            </div>
            <Bookmark size={18} fill={COLORS.yellow} stroke={COLORS.yellow} className="flex-shrink-0" />
          </div>
        ))}
      </div>

    </div>
  )
}

function CategoryCard({ cat }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl cursor-pointer transition-all duration-200"
      style={{
        backgroundColor: COLORS.card,
        border: `1px solid ${hovered ? COLORS.blue : COLORS.border}`,
        padding: 24,
      }}
    >
      <span style={{ fontSize: 32, display: 'block', marginBottom: 12 }}>{cat.emoji}</span>
      <p className="font-bold" style={{ fontSize: 15 }}>{cat.name}</p>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 4 }}>{cat.count} cursos disponíveis</p>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginTop: 32 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: COLORS.blue, marginBottom: 16,
        paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

function MetricCard({ label, value, sub }) {
  return (
    <div style={{ background: '#0A1F5C', borderRadius: 12, padding: '16px 20px',
      border: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: COLORS.yellow }}>{value}</div>
      <div style={{ fontSize: 13, color: '#fff', marginTop: 4 }}>{label}</div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{sub}</div>
    </div>
  )
}

function PlanCard({ name, price, items, highlight }) {
  return (
    <div style={{ background: highlight ? COLORS.yellow : '#0A1F5C', borderRadius: 12,
      padding: '20px', border: highlight ? 'none' : '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: highlight ? '#0D2772' : '#fff' }}>{name}</div>
      <div style={{ fontSize: 24, fontWeight: 700, color: highlight ? '#0D2772' : COLORS.yellow, margin: '8px 0 12px' }}>{price}</div>
      {items.map((item, i) => (
        <div key={i} style={{ fontSize: 12, color: highlight ? '#0A1F5C' : 'rgba(255,255,255,0.7)', marginBottom: 4 }}>
          ✓ {item}
        </div>
      ))}
    </div>
  )
}

function ModelCard({ emoji, title, desc, tag }) {
  return (
    <div style={{ background: '#0A1F5C', borderRadius: 12, padding: '20px',
      border: '1px solid rgba(255,255,255,0.08)', marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <span style={{ fontSize: 20 }}>{emoji}</span>
        <span style={{ background: COLORS.blue, color: '#0D2772', fontSize: 10, fontWeight: 700,
          padding: '2px 8px', borderRadius: 10 }}>{tag}</span>
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{desc}</div>
    </div>
  )
}

function ValueCard({ icon, title, desc }) {
  return (
    <div style={{ background: '#0A1F5C', borderRadius: 12, padding: '16px',
      border: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{desc}</div>
    </div>
  )
}

function PhaseCard({ n, title, desc }) {
  return (
    <div style={{ display: 'flex', gap: 16, background: '#0A1F5C', borderRadius: 12,
      padding: '16px 20px', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: COLORS.yellow,
        color: '#0D2772', fontWeight: 700, fontSize: 14, display: 'flex',
        alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  )
}

function ProjectionTable() {
  const rows = [
    { cenario: 'Conservador (0,5%)', assinantes: '8.748',  mrr: 'R$305k',  arr: 'R$3,7M'  },
    { cenario: 'Base (1%)',          assinantes: '17.497', mrr: 'R$647k',  arr: 'R$7,8M'  },
    { cenario: 'Otimista (3%)',      assinantes: '52.490', mrr: 'R$1,94M', arr: 'R$23,3M' },
  ]
  return (
    <div>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>
        Premissa: penetração sobre 1,75M alunos ativos · Mix 60% Essencial (R$29) + 40% Total (R$49)
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            {['Cenário', 'Assinantes', 'MRR', 'ARR'].map(h => (
              <th key={h} style={{ padding: '8px 12px', textAlign: 'left',
                color: 'rgba(255,255,255,0.45)', fontWeight: 400, fontSize: 11 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: i === 1 ? 'rgba(255,188,0,0.05)' : 'transparent' }}>
              <td style={{ padding: '12px', color: i === 1 ? COLORS.yellow : '#fff' }}>{r.cenario}</td>
              <td style={{ padding: '12px', color: 'rgba(255,255,255,0.75)' }}>{r.assinantes}</td>
              <td style={{ padding: '12px', color: 'rgba(255,255,255,0.75)' }}>{r.mrr}</td>
              <td style={{ padding: '12px', fontWeight: 700, color: i === 1 ? COLORS.yellow : '#fff' }}>{r.arr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function BenchmarkTable() {
  const rows = [
    { plataforma: 'Eduzz Pass Essencial', preco: 'R$29/mês',      cursos: '+100 cursos BR',    foco: 'Infoprodutos nativos' },
    { plataforma: 'Eduzz Pass Total',     preco: 'R$49/mês',      cursos: '+651k cursos BR',   foco: 'Infoprodutos nativos', destaque: true },
    { plataforma: 'Udemy Personal Plan',  preco: 'R$69–99/mês',   cursos: '+12k selecionados', foco: 'Internacional'        },
    { plataforma: 'Alura',                preco: 'R$100–130/mês', cursos: '+1.500 cursos',     foco: 'Tech/dev'             },
    { plataforma: 'Coursera Plus',        preco: '~R$190/mês',    cursos: '+7.000 cursos',     foco: 'Acadêmico/global'     },
  ]
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
      <thead>
        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {['Plataforma', 'Preço', 'Catálogo', 'Foco'].map(h => (
            <th key={h} style={{ padding: '8px 12px', textAlign: 'left',
              color: 'rgba(255,255,255,0.45)', fontWeight: 400, fontSize: 11 }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: r.destaque ? 'rgba(255,188,0,0.07)' : 'transparent' }}>
            <td style={{ padding: '12px', color: r.destaque ? COLORS.yellow : '#fff', fontWeight: r.destaque ? 700 : 400 }}>{r.plataforma}</td>
            <td style={{ padding: '12px', color: 'rgba(255,255,255,0.75)' }}>{r.preco}</td>
            <td style={{ padding: '12px', color: 'rgba(255,255,255,0.75)' }}>{r.cursos}</td>
            <td style={{ padding: '12px', color: 'rgba(255,255,255,0.6)' }}>{r.foco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function BusinessCaseScreen({ setScreen }) {
  return (
    <div style={{ fontFamily: 'Syne, sans-serif', color: '#fff', padding: '0 0 60px 0', paddingTop: 56 }}>

      {/* Header */}
      <div style={{ background: '#0A1F5C', padding: '32px 24px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ background: COLORS.yellow, color: '#0D2772', fontWeight: 700, fontSize: 11, padding: '4px 10px', borderRadius: 20 }}>
            INTERNO
          </span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Junho 2026</span>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: '12px 0 8px' }}>Business Case — Eduzz Pass</h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, margin: 0 }}>
          Modelo de assinatura de catálogo de cursos · Análise de oportunidade e viabilidade
        </p>
      </div>

      <div style={{ padding: '0 24px', maxWidth: 1024, margin: '0 auto' }}>

        <Section title="O Problema">
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
            O aluno médio da Eduzz compra <strong style={{ color: '#fff' }}>1,09 cursos por ano</strong>. Não porque não quer aprender — mas porque cada compra exige uma decisão. O modelo avulso cria fricção que limita o consumo e o engajamento na plataforma.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginTop: 12 }}>
            Ao mesmo tempo, existem <strong style={{ color: '#fff' }}>566.905 cursos elegíveis</strong> (ativos, aprovados, ticket até R$197) e <strong style={{ color: '#fff' }}>66.776 produtores ativos</strong> (que ao menos tentaram gerar uma venda ou fizeram login na plataforma) — um catálogo vasto subutilizado.
          </p>
        </Section>

        <Section title="A Base Existente">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            <MetricCard label="Alunos na base total"          value="32,4 milhões" sub="compradores válidos"         />
            <MetricCard label="Alunos ativos (90 dias)"       value="1,75 milhão"  sub="acesso, compra ou curso"     />
            <MetricCard label="Cursos elegíveis para o Pass"  value="651 mil"      sub="ativos, aprovados, até R$197" />
            <MetricCard label="Produtores ativos"             value="66,8 mil"     sub="últimos 90 dias"             />
          </div>
        </Section>

        <Section title="A Oportunidade">
          <div style={{ background: '#0A1F5C', border: `1px solid ${COLORS.yellow}`, borderRadius: 12, padding: '20px 24px', marginBottom: 16 }}>
            <p style={{ fontSize: 13, color: COLORS.yellow, fontWeight: 700, marginBottom: 8 }}>INSIGHT CENTRAL</p>
            <p style={{ color: '#fff', fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              O ticket médio dos cursos elegíveis é <strong>R$49,56</strong>. O Pass Total custa <strong>R$49/mês</strong>. O aluno paga o equivalente a um curso e recebe acesso ilimitado ao catálogo — a proposta de valor se vende sozinha.
            </p>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
            Não existe hoje nenhum concorrente brasileiro com catálogo unificado de infoprodutos em modelo de assinatura. Alura (R$100–130/mês) foca em tech. Udemy Personal Plan (R$69–99/mês) é conteúdo internacional. O Pass seria o primeiro produto nativo do ecossistema de infoprodutores brasileiros.
          </p>
        </Section>

        <Section title="Estrutura de Planos">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            <PlanCard
              name="Pass Essencial"
              price="R$29/mês"
              items={['Acesso a +100 cursos selecionados', '1 dispositivo', 'Certificados incluídos', 'Suporte por e-mail']}
              highlight={false}
            />
            <PlanCard
              name="Pass Total"
              price="R$49/mês"
              items={['Acesso a +651 mil cursos', 'Até 3 dispositivos', 'Certificados incluídos', 'Suporte prioritário', 'Novos cursos toda semana']}
              highlight={true}
            />
          </div>
        </Section>

        <Section title="Como o Produtor é Remunerado">
          <ModelCard
            emoji="🚀"
            title="Fase de Lançamento — Híbrido"
            desc="Mínimo garantido por curso ativo no catálogo + bônus proporcional ao consumo acima da média. Resolve a insegurança do produtor no início, quando a base de assinantes ainda é pequena."
            tag="RECOMENDADO"
          />
          <ModelCard
            emoji="🎵"
            title="Escala — Pool por Consumo (Spotify/Kindle)"
            desc="A Eduzz distribui 70% da receita de assinaturas proporcionalmente aos minutos assistidos de cada curso. Simples de operar, escala automaticamente, alinha incentivo com qualidade."
            tag="FASE 2"
          />
        </Section>

        <Section title="Projeção de Receita (Premissas)">
          <ProjectionTable />
        </Section>

        <Section title="Valor Estratégico para a Eduzz">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            <ValueCard icon="💰" title="Nova receita recorrente"  desc="MRR previsível, independente de ciclos de lançamento"                                    />
            <ValueCard icon="📊" title="Dados de comportamento"   desc="Plataforma passa a saber o que o aluno assiste, onde abandona — ativo estratégico"        />
            <ValueCard icon="🔄" title="Retenção de aluno"        desc="Aluno com Pass abre o app todo dia, não só quando compra. Aumenta LTV."                  />
            <ValueCard icon="🎯" title="Reativação de produtor"   desc="Produtor inativo coloca curso no Pass e volta a ter receita sem novo lançamento"         />
          </div>
        </Section>

        <Section title="Estratégia de Lançamento">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <PhaseCard n="1" title="Curadoria do catálogo inicial"
              desc="Recrutar 20–30 produtores parceiros com mínimo garantido. Formar catálogo inicial de ~500 cursos. Custo absorvido como investimento de lançamento." />
            <PhaseCard n="2" title="Early adopters com desconto"
              desc="Lançar para base de alunos ativos com preço de early adopter (ex: R$19/mês nos primeiros 3 meses). Meta: 10.000 assinantes em 90 dias." />
            <PhaseCard n="3" title="Escala com pool puro"
              desc="Com dados de consumo em mãos, migrar para pool por consumo. Abrir catálogo para todos os produtores elegíveis. Escalar via campanhas e upsell na base." />
          </div>
        </Section>

        <Section title="Benchmark de Mercado">
          <BenchmarkTable />
        </Section>

      </div>
    </div>
  )
}

function ProducerScreen({ setScreen }) {
  const [toggles, setToggles] = useState({ 1: true, 2: true, 3: false, 4: false })

  const handleToggle = (id, eligible) => {
    if (!eligible) return
    setToggles(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const producerCourses = [
    { id: 1, title: 'Copywriting que Converte',      category: 'Marketing',        eligible: true  },
    { id: 2, title: 'Gestão Avançada de Tráfego',    category: 'Marketing',        eligible: true  },
    { id: 3, title: 'Curso Premium de Branding',     category: 'Empreendedorismo', eligible: false },
    { id: 4, title: 'Instagram para Negócios',       category: 'Marketing',        eligible: true  },
  ]

  const repasses = [
    { mes: 'Janeiro/2026',   minutos: '3.840 min', valor: 'R$ 712,00' },
    { mes: 'Fevereiro/2026', minutos: '4.120 min', valor: 'R$ 784,00' },
    { mes: 'Março/2026',     minutos: '3.990 min', valor: 'R$ 760,00' },
    { mes: 'Abril/2026',     minutos: '4.320 min', valor: 'R$ 847,00' },
  ]

  return (
    <div className="pt-14 min-h-screen px-6 py-10 mx-auto" style={{ maxWidth: 1024 }}>

      {/* Cabeçalho */}
      <div style={{ marginBottom: 32 }}>
        <h1 className="font-bold" style={{ fontSize: 26 }}>Eduzz Pass — Seus cursos no catálogo</h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, marginTop: 4 }}>
          Gerencie sua participação e acompanhe seus rendimentos
        </p>
      </div>

      {/* Card resumo financeiro */}
      <div
        style={{
          backgroundColor: '#0A1F5C',
          borderRadius: 16,
          padding: 24,
          border: '1px solid rgba(255,255,255,0.1)',
          marginBottom: 32,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-1" style={{ marginBottom: 8 }}>
              <TrendingUp size={14} color="#FFBC00" />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Estimativa de receita este mês
              </span>
            </div>
            <span className="font-bold" style={{ fontSize: 28, color: '#FFBC00' }}>R$ 847,00</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1" style={{ marginBottom: 8 }}>
              <Clock size={14} color="#FFFFFF" />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Minutos consumidos
              </span>
            </div>
            <span className="font-bold" style={{ fontSize: 28, color: '#FFFFFF' }}>4.320 min</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1" style={{ marginBottom: 8 }}>
              <Award size={14} color="#00CAF9" />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Posição no catálogo
              </span>
            </div>
            <span className="font-bold" style={{ fontSize: 28, color: '#00CAF9' }}>#12 em Marketing</span>
          </div>
        </div>
      </div>

      {/* Seus cursos */}
      <div style={{ marginBottom: 32 }}>
        <div className="flex justify-between items-center" style={{ marginBottom: 16 }}>
          <p className="font-bold" style={{ fontSize: 20 }}>Seus cursos</p>
          <button
            className="flex items-center gap-2 transition-all duration-200 cursor-pointer"
            style={{
              border: '1px solid #FFBC00',
              color: '#FFBC00',
              fontSize: 14,
              fontWeight: 700,
              padding: '8px 16px',
              borderRadius: 8,
              backgroundColor: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#FFBC00'
              e.currentTarget.style.color = '#0D2772'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#FFBC00'
            }}
          >
            <Plus size={16} />
            Adicionar curso ao Pass
          </button>
        </div>

        {producerCourses.map(course => {
          const isActive = toggles[course.id]
          const isEligible = course.eligible
          return (
            <div
              key={course.id}
              className="flex items-center"
              style={{
                backgroundColor: '#0A1F5C',
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
                gap: 16,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                className="rounded-lg flex-shrink-0 overflow-hidden"
                style={{ width: 60, height: 60 }}
              >
                <img
                  src={getCoverImage(course.title, course.category)}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentNode.style.background = getGradient(course.category)
                  }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <p className="font-bold" style={{ fontSize: 15 }}>{course.title}</p>
                <span
                  className="inline-flex items-center"
                  style={{
                    marginTop: 4,
                    borderRadius: 9999,
                    fontSize: 12,
                    padding: '2px 10px',
                    backgroundColor: isEligible ? 'rgba(34,197,94,0.15)' : 'rgba(255,188,0,0.1)',
                    color: isEligible ? '#22c55e' : '#FFBC00',
                    border: `1px solid ${isEligible ? 'rgba(34,197,94,0.3)' : 'rgba(255,188,0,0.3)'}`,
                  }}
                >
                  {isEligible ? 'Elegível' : 'Não elegível — ticket acima de R$497'}
                </span>
              </div>

              <div
                className="flex flex-col items-center flex-shrink-0"
                style={{ gap: 4, cursor: isEligible ? 'pointer' : 'not-allowed' }}
                onClick={() => handleToggle(course.id, isEligible)}
              >
                <div
                  style={{
                    width: 44,
                    height: 24,
                    borderRadius: 9999,
                    position: 'relative',
                    backgroundColor: !isEligible
                      ? 'rgba(255,255,255,0.08)'
                      : isActive ? '#00CAF9' : 'rgba(255,255,255,0.15)',
                    opacity: !isEligible ? 0.5 : 1,
                    transition: 'background-color 0.2s',
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 9999,
                      backgroundColor: 'white',
                      position: 'absolute',
                      top: 3,
                      ...(isActive ? { right: 3 } : { left: 3 }),
                      transition: 'all 0.2s',
                    }}
                  />
                </div>
                <span style={{
                  fontSize: 11,
                  color: !isEligible
                    ? 'rgba(255,255,255,0.3)'
                    : isActive ? '#00CAF9' : 'rgba(255,255,255,0.4)',
                }}>
                  {!isEligible ? 'Indisponível' : isActive ? 'Incluído' : 'Pausado'}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Histórico de repasses */}
      <div style={{ marginBottom: 48 }}>
        <p className="font-bold" style={{ fontSize: 20, marginBottom: 16 }}>Histórico de repasses</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr>
              {['Mês', 'Minutos consumidos', 'Valor repassado'].map(col => (
                <th
                  key={col}
                  style={{
                    backgroundColor: '#0A1F5C',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 12,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '12px 16px',
                    textAlign: 'left',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {repasses.map((row, i) => (
              <tr key={row.mes} style={{ backgroundColor: i % 2 === 0 ? 'rgba(10,31,92,0.6)' : 'rgba(10,31,92,0.3)' }}>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.65)' }}>{row.mes}</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#FFFFFF' }}>{row.minutos}</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#FFBC00', fontWeight: 700 }}>{row.valor}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ backgroundColor: '#0A1F5C', borderTop: '2px solid rgba(255,255,255,0.15)' }}>
              <td style={{ padding: '14px 16px', fontWeight: 700 }}>Total 2026</td>
              <td style={{ padding: '14px 16px', fontWeight: 700 }}>16.270 min</td>
              <td style={{ padding: '14px 16px', fontWeight: 700, color: '#FFBC00' }}>R$ 3.103,00</td>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>
  )
}

export default function App() {
  const [screen, setScreen] = useState('discovery')

  return (
    <div style={{ backgroundColor: COLORS.bg, minHeight: '100vh' }}>
      <NavBar screen={screen} setScreen={setScreen} />

      {screen === 'discovery'    && <DiscoveryScreen setScreen={setScreen} />}
      {screen === 'subscription' && <SubscriptionScreen setScreen={setScreen} />}
      {screen === 'library'      && <LibraryScreen setScreen={setScreen} />}
      {screen === 'producer'     && <ProducerScreen setScreen={setScreen} />}
      {screen === 'business'     && <BusinessCaseScreen setScreen={setScreen} />}
    </div>
  )
}
