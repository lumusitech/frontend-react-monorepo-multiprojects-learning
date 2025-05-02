export const HeaderGame = ({ title, resetBoard }) => {
  return (
    <>
      <h1>{title}</h1>
      <button onClick={resetBoard}>Reiniciar</button>
    </>
  )
}
