import React from "react";
import "./style.css"

const Technologies = () => {
  return (
<section className="row text-center pt-3 shifted-row">
            <div className="col-12 col-md-6 col-lg-3">
                <article className="card my-3 tech-card" id="tech-card-1">
                    <header className="card-header pb-0 bg-primary">
                        <h5 className="card-title">Languages</h5>
                    </header>
                    <main className="card-body">
                        <p className="card-text">
                            HTML5<br></br>
                            CSS3<br></br>
                            JavaScript<br></br>
                            SQL<br></br>
                        </p>
                    </main>
                    <footer className="card-footer tech-card-footer">
                        <i className="fab fa-lg fa-html5 mx-3"></i>
                        <i className="fab fa-lg fa-css3-alt mx-3"></i>
                        <i className="fab fa-lg fa-js-square mx-3"></i>
                    </footer>
                </article>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <article className="card my-3 tech-card" id="tech-card-2">
                    <header className="card-header pb-0 bg-primary">
                        <h5 className="card-title">Front-End Tools</h5>
                    </header>
                    <main className="card-body">
                        <p className="card-text">
                            React<br></br>
                            Bootstrap<br></br>
                            Bulma<br></br>
                            jQuery<br></br>
                        </p>
                    </main>
                    <footer className="card-footer tech-card-footer">
                        <i className="fab fa-lg fa-react mx-3"></i>
                        <i className="fab fa-lg fa-bootstrap mx-3"></i>
                        <i className="fab fa-lg fa-css3 mx-3"></i>
                    </footer>
                </article>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <article className="card my-3 tech-card" id="tech-card-3">
                    <header className="card-header pb-0 bg-primary">
                        <h5 className="card-title">Back-End Tools</h5>
                    </header>
                    <main className="card-body">
                        <p className="card-text">
                            Node.js<br></br>
                            Express.js<br></br>
                            MySQL<br></br>
                            MongoDB<br></br>
                        </p>
                    </main>
                    <footer className="card-footer tech-card-footer">
                        <i className="fab fa-lg fa-node mx-3"></i>
                        <i className="fad fa-lg fa-database mx-3"></i>
                        <i className="fas fa-lg fa-router mx-3"></i>
                    </footer>
                </article>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <article className="card my-3 tech-card" id="tech-card-4">
                    <header className="card-header pb-0 bg-primary">
                        <h5 className="card-title">Development Tools</h5>
                    </header>
                    <main className="card-body">
                        <p className="card-text">
                            Github<br></br>
                            VSCode<br></br>
                            Heroku<br></br>
                            OAuth 2<br></br>
                        </p>
                    </main>
                    <footer className="card-footer tech-card-footer">
                        <i className="fab fa-lg fa-github mx-3"></i>
                        <i className="fas fa-lg fa-code-merge mx-3"></i>
                        <i className="fad fa-lg fa-layer-group mx-3"></i>
                    </footer>
                </article>
            </div>
        </section>
  );
};

export default Technologies;
