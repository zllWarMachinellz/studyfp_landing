

export const FooterComponent = () => {
  return (
    <footer>
      <div className="bg-[#284B63] p-20 text-slate-100">
        <h2 className="text-4xl py-3">Cursos Sepe Gratis</h2>
        <div className="flex flex-col">
          <a href="https://studyfp.com/privacidad/"> ▪️ Política de privacidad de los datos</a>
          <a href="https://studyfp.com/aviso-legal/"> ▪️ Aviso legal</a>
        </div>
      </div>
      <div className="flex justify-center items-center dark:text-slate-300">
        <span>&copy; Cursos Sepe Gratis todos los derechos reservados 2025</span>
      </div>
    </footer>
  )
}
