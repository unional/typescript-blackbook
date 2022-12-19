export function Header() {
  return (
    <header>
      <div className="flex py-5 px-3">
        <a aria-label="home" href="/" className="hover:outline rounded-sm px-2 py-1 outline-sky-700">
          <div className="flex">
            <img src="/svgs/ts-guidelines.svg" className="w-6 pr-1" alt="icon" />
            Guidelines
          </div>
        </a>
      </div>
    </header>
  )
}
