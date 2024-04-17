import logo from '/public/assets/logo.svg'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="" />
      <h1>My travel journal.</h1>
    </header>
  )
}
