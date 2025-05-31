import { Sun, Moon, Droplets, Mountain, Cloud } from "lucide-react";

const naturalSigns = [
  {
    id: 1,
    title: "The Sun",
    icon: Sun,
    description:
      "The Sun is a vital sign of life, a cosmic lighthouse whose regularity guides not only daily rhythms but reflects divine order.",
    details: [
      "Scientific: The Sun's energy sustains all life on Earth through photosynthesis, powering ecosystems.",
      "Quranic: \"And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing.\" (Surah Ya-Sin 36:38) — showing the precise order in the sun's movement, a sign of divine control beyond human perception.",
      "Spiritual: The Sun's daily journey reminds us of consistency, renewal, and the balance designed for human wellbeing.",
      "Biological: Our circadian rhythms synchronize with sunlight, influencing sleep, mood, and health.",
      "Philosophical: The Sun symbolizes enlightenment—just as it dispels darkness, knowledge dispels ignorance."
    ]
  },
  {
    id: 2,
    title: "The Moon",
    icon: Moon,
    description:
      "The Moon governs cycles of time and tides, a celestial clock that reflects both physical laws and spiritual rhythms.",
    details: [
      "Scientific: The Moon's gravitational pull causes ocean tides, influencing marine ecosystems and climate.",
      "Quranic: \"It is He who made the sun to be a shining glory and the moon to be a light (of beauty), and measured out stages for her; that ye might know the number of years and the count (of time).\" (Surah Yunus 10:5) — illustrating the moon's role in measuring time and marking seasons.",
      "Logical: The Moon's phases remind us of change and renewal, showing the impermanence inherent in life.",
      "Emotional: Just as the Moon waxes and wanes, human feelings naturally ebb and flow, teaching patience and acceptance.",
      "Educational: Observing the Moon helps cultivate mindfulness of time, encouraging planning and reflection."
    ]
  },
  {
    id: 3,
    title: "Rain",
    icon: Droplets,
    description:
      "Rain is nature's purifier and sustainer, delivering water that renews the earth and signifies divine mercy.",
    details: [
      "Scientific: Rain cycles water through evaporation and condensation, maintaining the planet's water balance.",
      "Quranic: \"And We send down water from the sky in measure and We cause it to soak in the soil; and We certainly are able to take it away.\" (Surah Al-Mu'minun 23:18) — emphasizing the measured, purposeful provision of rain.",
      "Logical: Just as rain nourishes plants, trials in life nourish growth of character and resilience.",
      "Educational: Rain teaches interconnectedness—water supports all living beings in an intricate web of life.",
      "Awe: The silent descent of rain invites reflection on blessings often taken for granted."
    ]
  },
  {
    id: 4,
    title: "Mountains",
    icon: Mountain,
    description:
      "Mountains anchor the Earth, embodying strength, stability, and the sublime majesty of creation.",
    details: [
      "Scientific: Mountains influence climate and water sources, forming natural barriers and habitats.",
      "Quranic: \"Have We not made the earth as a bed, and the mountains as pegs?\" (Surah An-Naba 78:6-7) — illustrating mountains as stabilizing features of the earth.",
      "Philosophical: Mountains inspire awe and humility, reminding us of human limits and the vastness of divine power.",
      "Educational: They encourage exploration, endurance, and appreciation for natural beauty and balance.",
      "Emotional: Mountains symbolize steadfastness and resilience in the face of life's challenges."
    ]
  },
  {
    id: 5,
    title: "The Heavens and Earth",
    icon: Cloud,
    description:
      "The vastness of the heavens and the earth reveals the infinite scale of creation, a fundamental sign urging reflection.",
    details: [
      "Scientific: The universe spans billions of light years, filled with countless stars and galaxies far beyond human reach.",
      "Quranic: \"Do not the Unbelievers see that the heavens and the earth were joined together (as one unit of creation), before We clove them asunder?\" (Surah Al-Anbiya 21:30) — highlighting the cosmic unity and origin of life.",
      "Intellectual: The immensity of creation points to a purpose and design beyond random chance.",
      "Educational: Understanding the scale of the cosmos fosters humility and curiosity about our place in the universe.",
      "Awe: The heavens evoke wonder, inspiring the mind to seek knowledge and the heart to find peace."
    ]
  },
  {
    id: 6,
    title: "Day and Night",
    icon: Moon,
    description:
      "The alternation of day and night demonstrates natural cycles designed for balance and rhythm in life.",
    details: [
      "Scientific: Earth's rotation creates day and night, regulating biological cycles crucial to health.",
      "Quranic: \"He created the night and the day, and the sun and the moon. Each in an orbit is swimming.\" (Surah Al-Anbiya 21:33) — emphasizing the ordered movement of celestial bodies.",
      "Logical: The covering of the night by the moon and the overtaking by the sun teach us about transitions and cycles in life.",
      "Educational: Day and night cycles are essential for agriculture, rest, and societal organization.",
      "Philosophical: Darkness and light symbolize knowledge and ignorance, rest and activity, urging balance."
    ]
  }
];

export default function NaturalSignsPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Nature's Signs</h1>
      <div className="space-y-8">
        {naturalSigns.map(sign => (
          <div key={sign.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-2">
              <sign.icon className="w-8 h-8 text-amber-500 mr-3" />
              <h2 className="text-xl font-semibold">{sign.title}</h2>
            </div>
            <p className="mb-2 text-gray-700">{sign.description}</p>
            <ul className="list-disc ml-8 text-gray-600">
              {sign.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
