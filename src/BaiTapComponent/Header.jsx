
export const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li className="nav-item"><a class="nav-link" href="#!">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
  )
}
