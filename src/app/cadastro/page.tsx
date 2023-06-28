import Image from "next/image";
import FormCadastro from "../components/Form/FormCadastro";

export default function Cadastro() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center gap-2 flex-column vw-100 vh-100">
        <Image
          src="https://logosvg.com/wp-content/uploads/2016/08/logosvgcom.png"
          alt="Logo"
          width={433}
          height={80}
        />
        <h1>Criação da sua conta</h1>
        <p className="text-secondary">Começa sua jornada de viagens!</p>
        <FormCadastro />
      </div>
    </>
  );
}
