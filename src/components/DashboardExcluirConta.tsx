import { themeColors } from "../theme/colors";
import logo from "../assets/Logotipo Pélvis Academy Horizontal.svg";
import luniaGif from "../assets/LuniaAnimada.gif";
import luniaIcon from "../assets/LuniaIcon.png";

const DashboardExcluirConta = () => (
  <div
    className="dashboard-excluir"
    style={{
      maxWidth: 480,
      margin: "4rem auto",
      padding: "2.5rem 2rem 2rem 2rem",
      background: themeColors.lilas,
      borderRadius: "2.5rem",
      boxShadow: "0 8px 32px rgba(146,96,206,0.15)",
      color: themeColors.roxoEscuro,
      position: "relative",
      textAlign: "center",
    }}
  >
    <img
      src={logo}
      alt="Logo Pélvis Academy"
      style={{ width: 180, marginBottom: 16 }}
    />
    <img
      src={luniaGif}
      alt="Mascote Lunia animada"
      style={{
        width: 80,
        marginBottom: 8,
        borderRadius: 20,
        boxShadow: "0 2px 12px #9260CE55",
      }}
    />
    <h2
      style={{
        color: themeColors.roxo,
        fontFamily: "DM Serif Display, serif",
        fontWeight: 700,
        fontSize: 24,
        marginBottom: 8,
      }}
    >
      Excluir conta e dados do app Cíclica
    </h2>
    <p style={{ color: themeColors.violeta, fontSize: 16, marginBottom: 12 }}>
      Para excluir sua conta, envie um e-mail para:
      <br />
      <a
        href="mailto:suporte@agentcicle.com"
        style={{ color: themeColors.roxo, fontWeight: 600 }}
      >
        suporte@agentcicle.com
      </a>
    </p>
    <p
      style={{ color: themeColors.roxoEscuro, fontSize: 15, marginBottom: 18 }}
    >
      Ou entre no app e acesse: <strong>Perfil → Excluir conta</strong>.
    </p>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginBottom: 10,
      }}
    >
      <img
        src={luniaIcon}
        alt="Ícone Lunia"
        style={{ width: 32, height: 32 }}
      />
      <h3
        style={{
          color: themeColors.roxo,
          fontSize: 18,
          fontWeight: 700,
          margin: 0,
        }}
      >
        A exclusão removerá permanentemente:
      </h3>
    </div>
    <ul
      style={{
        textAlign: "left",
        margin: "0 auto 12px auto",
        maxWidth: 340,
        color: themeColors.roxoEscuro,
        fontSize: 15,
      }}
    >
      <li>Sua conta (e-mail e nome)</li>
      <li>Dados de perfil (altura, peso, menstruação, histórico)</li>
      <li>Registros de treino e sentimentos</li>
    </ul>
    <p
      style={{
        color: themeColors.error,
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 8,
      }}
    >
      Esta ação é irreversível.
    </p>
    <a
      href="/"
      style={{
        display: "inline-block",
        marginTop: 18,
        background: themeColors.verde,
        color: themeColors.roxoEscuro,
        padding: "10px 28px",
        borderRadius: 18,
        fontWeight: 700,
        fontSize: 16,
        textDecoration: "none",
        boxShadow: "0 2px 8px #A4D56233",
        border: `2px solid ${themeColors.verdeClaro}`,
        transition: "background 0.2s",
      }}
    >
      Voltar para a Home
    </a>
  </div>
);

export default DashboardExcluirConta;
