import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo" width={100} height={100} />
      <h3>React Investment Calculator</h3>
    </header>
  );
}
