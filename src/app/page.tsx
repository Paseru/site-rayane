'use client'

// Icônes SVG inline pour éviter les problèmes de dépendances
const PlayIcon = () => (
  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
)

const ClockIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
)

const ZapIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 0L11 8H4l2 3 4-1 1 6h2l-2-3 4 1z"/>
  </svg>
)

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4zM12 14c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"/>
  </svg>
)

const CheckIcon = () => (
  <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </svg>
)

const MailIcon = () => (
  <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ParticleField } from '@/components/ui/particle-field'

// Composant d'animation simple avec effet blur
const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)

// Composant pour texte avec effet de glow
const GlowText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    className={`relative ${className}`}
    whileHover={{
      textShadow: "0 0 20px rgba(255,255,255,0.6)",
      scale: 1.02
    }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
)

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Ici on pourrait intégrer avec un service d'email ou Calendly
    console.log('Form submitted:', formData)
    alert('Merci ! Je vous recontacte sous 24h.')
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Particle Field */}
        <ParticleField />
        
        {/* Large floating orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[100px] rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-gradient-to-r from-green-500/15 to-cyan-500/15 blur-[80px] rounded-full"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/8 to-pink-500/8 blur-[120px] rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Animated grid overlay */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            x: [0, 50],
            y: [0, 50],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 md:pt-40 md:pb-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp delay={0.25}>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Votre idée mérite d&apos;exister.<br />
              <span className="text-neutral-300 drop-shadow-lg">Je la transforme en MVP en 1 semaine.</span>
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.5}>
            <p className="text-lg text-neutral-300 mb-12 max-w-2xl mx-auto backdrop-blur-sm">
              Développeur solo spécialisé dans les prototypes rapides. Je transforme votre concept en application fonctionnelle, prête à valider votre marché.
            </p>
          </FadeUp>

          <FadeUp delay={0.75}>
            <motion.a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-white text-black font-medium rounded-full shadow-lg mb-16 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Transformons votre idée
              </span>
            </motion.a>
          </FadeUp>

          {/* Video Placeholder */}
          <FadeUp delay={1}>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10 aspect-video max-w-2xl mx-auto flex items-center justify-center group cursor-pointer hover:bg-opacity-10 transition-all duration-300 shadow-2xl hover:shadow-white/10">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                    <PlayIcon />
                  </div>
                  <span className="text-lg font-medium">Découvrir mon approche</span>
                </motion.div>
              </div>
              
              {/* Video glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* Problème/Solution */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp delay={0.2}>
              <div>
                <h2 className="text-xl font-medium tracking-tighter leading-tight mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Le problème que je résous
                </h2>
                <motion.div 
                  className="space-y-4 text-neutral-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, staggerChildren: 0.1 }}
                >
                  <motion.p 
                    className="hover:text-white transition-colors duration-300 cursor-default"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >• Votre idée reste dans votre tête depuis des mois</motion.p>
                  <motion.p 
                    className="hover:text-white transition-colors duration-300 cursor-default"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >• Les agences demandent 3-6 mois et 15k€ minimum</motion.p>
                  <motion.p 
                    className="hover:text-white transition-colors duration-300 cursor-default"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >• Le marché évolue plus vite que les développements traditionnels</motion.p>
                  <motion.p 
                    className="hover:text-white transition-colors duration-300 cursor-default"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >• Vous voulez valider avant d&apos;investir massivement</motion.p>
                </motion.div>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.4}>
              <motion.div 
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10 p-8 hover:bg-opacity-10 transition-all duration-300 hover:scale-105"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)"
                }}
              >
                <h3 className="text-lg font-medium mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Mes résultats en chiffres</h3>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-3 rounded-lg hover:bg-white hover:bg-opacity-5 transition-all duration-300"
                  >
                    <div className="text-xl font-medium text-green-400">47</div>
                    <div className="text-sm text-neutral-300">MVPs développés</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-3 rounded-lg hover:bg-white hover:bg-opacity-5 transition-all duration-300"
                  >
                    <div className="text-xl font-medium text-blue-400">7 jours</div>
                    <div className="text-sm text-neutral-300">Délai moyen</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-3 rounded-lg hover:bg-white hover:bg-opacity-5 transition-all duration-300"
                  >
                    <div className="text-xl font-medium text-purple-400">89%</div>
                    <div className="text-sm text-neutral-300">Clients satisfaits</div>
                  </motion.div>
                </div>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-medium tracking-tighter leading-tight mb-12 text-center">
            Mon process en 3 étapes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white border-opacity-20">
                <ZapIcon />
              </div>
              <h3 className="text-lg font-medium mb-4">1. Idée</h3>
              <p className="text-neutral-300 text-sm">
                Appel de 30min pour comprendre votre vision, définir les fonctionnalités essentielles et valider la faisabilité technique.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white border-opacity-20">
                <ClockIcon />
              </div>
              <h3 className="text-lg font-medium mb-4">2. Développement</h3>
              <p className="text-neutral-300 text-sm">
                6 jours de développement intensif avec points quotidiens. Vous suivez l&apos;avancement en temps réel sur un environnement de test.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white border-opacity-20">
                <UsersIcon />
              </div>
              <h3 className="text-lg font-medium mb-4">3. Lancement</h3>
              <p className="text-neutral-300 text-sm">
                Mise en ligne, formation à l&apos;utilisation et accompagnement pendant 1 mois pour les ajustements mineurs.
              </p>
            </div>
          </div>

          {/* Timeline visuelle */}
          <div className="mt-16 relative">
            <div className="h-1 bg-white bg-opacity-20 rounded-full"></div>
            <div className="absolute top-0 left-0 h-1 bg-white rounded-full w-1/3 transition-all duration-1000"></div>
            <div className="flex justify-between mt-4 text-xs text-neutral-300">
              <span>Jour 1</span>
              <span>Jour 7</span>
              <span>Suivi 30j</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-medium tracking-tighter leading-tight mb-12 text-center">
            Ce que disent mes clients
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10 p-6">
              <p className="text-neutral-300 mb-4">
                &ldquo;J&apos;avais cette idée d&apos;app depuis 2 ans. Rayane l&apos;a rendue réelle en 1 semaine. Le MVP nous a permis de lever 50k€ en pré-seed.&rdquo;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Marie Laurent</div>
                  <div className="text-xs text-neutral-300">Fondatrice, EcoTrack</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10 p-6">
              <p className="text-neutral-300 mb-4">
                &ldquo;Efficacité incroyable. En 1 semaine j&apos;avais mon MVP, en 1 mois mes premiers clients payants. ROI immédiat.&rdquo;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full"></div>
                <div>
                  <div className="font-medium text-sm">Thomas Dubois</div>
                  <div className="text-xs text-neutral-300">CEO, TaskFlow</div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio projets */}
          <div>
            <h3 className="text-lg font-medium mb-8 text-center">Quelques MVPs récents</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['EcoTrack', 'TaskFlow', 'MentorMatch', 'LocalEats'].map((project, index) => (
                <div key={index} className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10 p-4 text-center">
                  <div className="w-full h-20 bg-white bg-opacity-10 rounded mb-3"></div>
                  <div className="text-sm font-medium">{project}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl font-medium tracking-tighter leading-tight mb-6">
            Une offre simple et transparente
          </h2>
          
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10 p-8 max-w-lg mx-auto mb-12">
            <div className="text-4xl font-medium mb-2">1 000€</div>
            <div className="text-lg mb-6">MVP complet en 1 semaine</div>
            
            <div className="space-y-3 text-left text-sm">
              <div className="flex items-center space-x-3">
                <CheckIcon />
                <span>Application web responsive</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon />
                <span>Base de données configurée</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon />
                <span>Authentification utilisateur</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon />
                <span>Dashboard admin</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon />
                <span>Hébergement inclus 3 mois</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon />
                <span>Support 30 jours</span>
              </div>
            </div>
          </div>

          {/* Comparaison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="font-medium mb-4">Agence traditionnelle</h3>
              <div className="space-y-2 text-sm text-neutral-300">
                <p>• 3-6 mois de délai</p>
                <p>• 15k€ - 50k€</p>
                <p>• Processus lourd</p>
                <p>• Équipe multiple</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-4">Avec moi</h3>
              <div className="space-y-2 text-sm text-neutral-300">
                <p>• 1 semaine</p>
                <p>• 1k€ fixe</p>
                <p>• Process agile</p>
                <p>• Contact direct</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl font-medium tracking-tighter leading-tight mb-6">
              Prêt à transformer votre idée ?
            </h2>
            <p className="text-neutral-300 max-w-lg mx-auto">
              Discutons de votre projet lors d&apos;un appel gratuit de 15 minutes. Pas de pitch commercial, juste une conversation pour voir si je peux vous aider.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulaire */}
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10 p-6">
              <h3 className="font-medium mb-6">Parlez-moi de votre projet</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded text-white placeholder-neutral-400 focus:outline-none focus:border-opacity-40"
                  required
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded text-white placeholder-neutral-400 focus:outline-none focus:border-opacity-40"
                  required
                />
                <input
                  type="text"
                  placeholder="Type de projet (ex: marketplace, SaaS...)"
                  value={formData.project}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, project: e.target.value})}
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded text-white placeholder-neutral-400 focus:outline-none focus:border-opacity-40"
                  required
                />
                <textarea
                  placeholder="Décrivez votre idée en quelques lignes"
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded text-white placeholder-neutral-400 focus:outline-none focus:border-opacity-40"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Contact rapide */}
            <div className="space-y-6">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10 p-6">
                <h3 className="font-medium mb-4">Réservez directement un créneau</h3>
                <p className="text-neutral-300 text-sm mb-4">
                  Accès direct à mon calendrier pour un appel gratuit de 15 minutes.
                </p>
                <button className="w-full px-8 py-3 bg-white bg-opacity-10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-opacity-20 border border-white border-opacity-20 flex items-center justify-center space-x-2">
                  <CalendarIcon />
                  <span>Calendly - Appel gratuit</span>
                </button>
              </div>

              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-10 p-6">
                <h3 className="font-medium mb-4">Contact direct</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <MailIcon />
                    <span>rayane@mvp7jours.fr</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <PhoneIcon />
                    <span>+33 6 XX XX XX XX</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 mt-4">
                  Réponse garantie sous 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white border-opacity-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm text-neutral-400">
              © 2024 Rayane Rachid - Développeur MVP. Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
} 