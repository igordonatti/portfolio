import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex w-full items-center justify-center">
      <div className="flex flex-col items-center min-h-screen max-w-96 gap-6">
        <div 
          className="w-[151px] h-[26px] font-bold italic text-yellow-from-figma-500 mt-4 flex justify-center text-xl"
        >
          Igor Donatti
        </div>
        <Image src="/perfil.JPEG" width={200} height={326} alt="Foto de Igor Donatti" className="rounded"/>
        <div className="w-[90%] text-center">
          Olá, meu nome é Igor Donatti e sou um desenvolvedor fullstack formado em engenharia de computação, atualmente resido em Campo Grande - MS.
        </div>
        <div className="w-[90%] text-center">
        Abaixo você pode ver um pouco da minha seleção de trabalhos ou se quiser conhecer um pouquinho mais sobre mim, cheque a seção <a className="text-yellow-from-figma-500 italic font-bold">blog.</a>
        </div>
        <div className="w-[90%] text-center">
          <p>Contato</p>
          <p>igordonatti.id@gmail.com</p>
          <p>+55 (67) 99203-6912</p>
        </div>
        <div className="w-[90%] text-center flex flex-col">
          <p>Social</p>
          <a href="https://www.linkedin.com/in/igor-donatti-6655111ab/" className="hover:text-yellow-from-figma-500 hover:font-bold">Linkedin</a>
          <a 
            href="https://www.instagram.com/_igordonatti/" className="hover:text-yellow-from-figma-500 hover:font-bold"
          >
            Instagram
          </a>
        </div>
        <div className="w-[90%] text-center flex flex-col">
          <p>Outros</p>
          <a 
            href="https://www.github.com/igordonatti" className="hover:text-yellow-from-figma-500 hover:font-bold"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
