import { useState, useEffect, FormEvent } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  Instagram,
  Mail,
  Phone,
  Play,
  Shuffle,
  User,
  Briefcase,
  MessageSquare,
  X,
  Check,
} from "lucide-react";

// ============================================
// THARDE'S VIDEOS - ALL 11 VIDEOS
// ============================================
const videoProjects = [
  {
    id: 1,
    title: "Restored Testicles",
    videoUrl: "https://drive.google.com/file/d/17ofDXWyaPc0Vr2-4ASdigSQTMUqiGfiI/preview",
    category: "Excerpts",
    isEmbed: true,
  },
  {
    id: 2,
    title: "Barrenness Testimony",
    videoUrl: "https://drive.google.com/file/d/17ph0N1FDZORgbV4GLgY_Tnzo0FBebcf4/preview",
    category: "Excerpts",
    isEmbed: true,
  },
  {
    id: 3,
    title: "Revup Ad",
    videoUrl: "https://drive.google.com/file/d/17xt6Df9oWALyD-6_DzGcS6wd2qvzN5Lf/preview",
    category: "Social Media",
    isEmbed: true,
  },
  {
    id: 4,
    title: "Secular Songs",
    videoUrl: "https://www.instagram.com/reel/DOmEb9tDTGM/embed",
    category: "Social Media",
    isEmbed: true,
  },
  {
    id: 5,
    title: "Josh Trap Music",
    videoUrl: "https://www.instagram.com/reel/DVWW4zKDJii/embed",
    category: "Music Video",
    isEmbed: true,
  },
  {
    id: 6,
    title: "Giants",
    videoUrl: "https://drive.google.com/file/d/1CLMGwdWb_HRE5o8i16NVezqETGFwCYwD/preview",
    category: "Social Media",
    isEmbed: true,
  },
  {
    id: 7,
    title: "Sleeping Beauty",
    videoUrl: "https://drive.google.com/file/d/1VCqDV_drfmSRUHcn6h1f85SNjAgyUh3T/preview",
    category: "Social Media",
    isEmbed: true,
  },
  {
    id: 8,
    title: "Revup Interview",
    videoUrl: "https://drive.google.com/file/d/1BwA4vlhKdm91kJ4AY3hXIhkERNLtpDET/preview",
    category: "Documentary",
    isEmbed: true,
  },
  {
    id: 9,
    title: "Storytelling",
    videoUrl: "https://drive.google.com/file/d/1Ygy6b9WEba8wknziZf5D6xFdv8_Xxqw_/preview",
    category: "Social Media",
    isEmbed: true,
  },
  {
    id: 10,
    title: "Maths Story",
    videoUrl: "https://drive.google.com/file/d/15tRblQgimXUQ_ir6iW-QsE1ehRxXREZx/preview",
    category: "Social Media",
    isEmbed: true,
  },
  {
    id: 11,
    title: "PPK Money",
    videoUrl: "https://drive.google.com/file/d/1Lm8ddYOdhbl5-HxMPFY29Ny0vOVsCiiN/preview",
    category: "Social Media",
    isEmbed: true,
  },
];

// ============================================
// CUSTOM CURSOR
// ============================================
function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovered(!!el.closest("a, button, .video-card, input, textarea, iframe"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          hovered ? "scale-[2.5] bg-white/10 border-white/80" : ""
        }`}
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl tracking-tight text-white">
          THARDE<span className="text-purple-500">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 py-4">
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-6 py-3 text-lg ${
                location.pathname === item.path
                  ? "text-purple-400"
                  : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// ============================================
// HOME PAGE - VIDEO PORTFOLIO
// ============================================
function HomePage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [shuffleKey, setShuffleKey] = useState(0);

  const categories = [
    "all",
    ...Array.from(new Set(allVideos.map((v) => v.category))),
  ];

  const filtered =
    activeCategory === "all"
      ? allVideos
      : allVideos.filter((v) => v.category === activeCategory);

  // Shuffle the order
  const shuffled = [...filtered].sort(() => {
    // Use shuffleKey to re-sort
    return Math.sin(shuffleKey * 9999 + filtered.indexOf(filtered[0])) - 0.5;
  });

  const rotations = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg", "1deg"];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl mb-4 text-white">
            Video Editor &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Creative Director
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Crafting visual stories that captivate and inspire. Welcome to my
            creative universe.
          </p>

          {/* Category Filters */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 capitalize ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Shuffle Button */}
          <button
            onClick={() => setShuffleKey((k) => k + 1)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            <Shuffle className="w-5 h-5" />
            Shuffle Layout
          </button>
        </div>

        {/* VIDEO GRID - All 6 videos displayed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {shuffled.map((video, index) => (
            <div
              key={video.id + "-" + shuffleKey}
              className="video-card group relative"
              style={{
                transform: `rotate(${
                  hoveredId === video.id
                    ? "0deg"
                    : rotations[index % rotations.length]
                }) scale(${hoveredId === video.id ? 1.03 : 1})`,
                zIndex: hoveredId === video.id ? 50 : 1,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative w-full rounded-xl overflow-hidden bg-white/5 border transition-all duration-500 ${
                  hoveredId === video.id
                    ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                    : "border-white/10"
                }`}
                style={{
                  height: video.source === "instagram" ? "500px" : "300px",
                }}
              >
                {/* The iframe embed */}
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  style={{ border: "none" }}
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Hover overlay with title */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
                    hoveredId === video.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-white font-bold text-lg">
                    {video.title}
                  </h3>
                  <span className="text-purple-400 text-xs font-medium uppercase tracking-widest">
                    {video.category}
                  </span>
                </div>

                {/* Corner accents */}
                <div
                  className={`absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-purple-500 transition-opacity duration-300 ${
                    hoveredId === video.id ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-pink-500 transition-opacity duration-300 ${
                    hoveredId === video.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Video count */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          Showing {shuffled.length} of {allVideos.length} projects
        </div>
      </div>
    </div>
  );
}

// ============================================
// ABOUT PAGE
// ============================================
function AboutPage() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-bold text-5xl md:text-6xl mb-8 text-white">
          About <span className="text-purple-500">Me</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
            <User className="w-32 h-32 text-purple-500/50" />
          </div>

          <div>
            <h2 className="font-bold text-3xl mb-4 text-white">Tharde</h2>
            <p className="text-purple-400 font-medium mb-6">
              Video Editor & Creative Director
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I&apos;m a passionate video editor with a keen eye for detail and a
              love for storytelling. With years of experience in the industry,
              I&apos;ve helped brands and creators bring their visions to life
              through compelling visual narratives.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My approach combines technical expertise with creative intuition,
              ensuring that every project not only meets but exceeds
              expectations. Whether it&apos;s a commercial, music video, or
              documentary, I pour my heart into every frame.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white/5 rounded-xl border border-white/10"
            >
              <div className="font-bold text-4xl text-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// SERVICES PAGE
// ============================================
function ServicesPage() {
  const services = [
    {
      title: "Video Editing",
      description:
        "Professional editing for commercials, music videos, documentaries, and more.",
    },
    {
      title: "Color Grading",
      description:
        "Cinematic color correction and grading to enhance your visual story.",
    },
    {
      title: "Motion Graphics",
      description:
        "Dynamic animations and graphics to elevate your content.",
    },
    {
      title: "Sound Design",
      description:
        "Immersive audio mixing and sound effects for impactful storytelling.",
    },
    {
      title: "Visual Effects",
      description: "Stunning VFX to bring impossible scenes to life.",
    },
    {
      title: "Content Strategy",
      description:
        "Creative direction and strategy for your video content.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="font-bold text-5xl md:text-6xl mb-4 text-white">
          My <span className="text-purple-500">Services</span>
        </h1>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl">
          Comprehensive video production services tailored to your needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// CONTACT PAGE
// ============================================
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-bold text-5xl md:text-6xl mb-4 text-white">
          Get In <span className="text-purple-500">Touch</span>
        </h1>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl">
          Ready to start your next project? Let&apos;s talk!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-bold text-2xl mb-6 text-white">
              Contact Information
            </h2>

            <div className="space-y-6">
              <a
                href="mailto:oyetadepeter5@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white">oyetadepeter5@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+2348106926908"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white">+234 810 692 6908</div>
                </div>
              </a>

              <a
                href="https://instagram.com/thegreattharde"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Instagram className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Instagram</div>
                  <div className="text-white">@thegreattharde</div>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors min-h-[150px] resize-none"
              required
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              {submitted ? (
                <>
                  <Check className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN APP
// ============================================
export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white">
        <CustomCursor />

        {/* Animated gradient background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 animate-pulse" />
        </div>

        {/* Noise overlay */}
        <div
          className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10">
          <Navigation />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          {/* Footer */}
          <footer className="px-6 py-4 border-t border-white/10 bg-black/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-400">
              <div>&copy; 2025 Tharde. All rights reserved.</div>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/thegreattharde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  Instagram
                </a>
                <span>&bull;</span>
                <a
                  href="mailto:oyetadepeter5@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}
