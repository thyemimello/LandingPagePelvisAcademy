import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";
import logoHorizontal from "../assets/Logotipo Pélvis Academy Horizontal.svg";
import luniaMascote from "../assets/Lunia Padrão.svg";
import videoTelaApp from "../assets/videoTelaApp.mp4";

const LandingPage = () => {
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phoneRef.current) {
      VanillaTilt.init(phoneRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div className="landing">
      {/* Header fixo */}
      <header className="header">
        <img src={logoHorizontal} alt="Pélvis Academy" className="logo" />
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#download">Download</a>
          <a href="#contato">Contato</a>
          <Link
            to="/excluir-conta"
            style={{ color: "#9260CE", fontWeight: "bold" }}
          >
            Informações
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="text-section">
          <h1>Seu ciclo, sua força.</h1>
          <p>Bem-vinda à jornada do autoconhecimento com Lunia.</p>
          <div className="cta-buttons">
            <button className="btn">Baixar App</button>
            <button className="btn secondary">Ver vídeo</button>
          </div>
        </div>

        <div className="mockup-container tilt" ref={phoneRef}>
          <video
            className="phone"
            src={videoTelaApp}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "40px",
            }}
            aria-label="Demonstração do app"
          />
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="features">
        <div className="feature">🌀 Monitoramento do ciclo menstrual</div>
        <div className="feature">💪 Treinos por fase</div>
        <div className="feature">🌸 Registro de emoções</div>
        <div className="feature">🏅 Recompensas lunares</div>
      </section>

      {/* Sobre a Lunia */}
      <section className="about-lunia">
        <img src={luniaMascote} alt="Mascote Lunia" />
        <p>
          Lunia é sua guia lunar. Sensível, acolhedora e poderosa como você. Ela
          estará com você em cada fase do ciclo, motivando, apoiando e
          ensinando.
        </p>
        <blockquote>
          “Me senti acolhida como nunca antes. Cada fase do meu ciclo faz
          sentido agora.”
        </blockquote>
        <blockquote>
          “Os treinos respeitam minha energia. Nunca mais forcei meu corpo sem
          escutar ele antes.”
        </blockquote>
      </section>

      {/* Footer */}
      <footer>
        <button className="btn">Baixe agora no seu celular</button>
        <p>© 2025 Pélvis Academy. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
