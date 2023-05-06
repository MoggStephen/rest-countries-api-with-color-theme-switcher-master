export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content py-5 py-sm-4 d-flex justify-content-center align-items-center">
        <h1 className="m-0">Where in the world?</h1>
        <button className="btn ms-auto"> <i class="bi bi-moon-fill me-1 me-sm-2"></i>Dark Mode</button>
      </div>
    </header>
  );
}