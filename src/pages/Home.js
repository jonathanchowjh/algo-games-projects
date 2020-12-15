import React from 'react'

const Home = () => {
  return (
    <div>
      {/* JUMBOTRON */}
      <div className="jumbotron">
        <h1 className="display-4">Algorithmic Games</h1>
        <p className="lead">
          <div>This webpage is a collection of coded visualized algorithms.</div>
        </p>
        <hr className="my-4" />
        <p>
          <div>From AI Pathfinding algorithms (Alpha Beta AND AStar),</div>
          <div>To Network algorithms (Bipartite Matching AND Linear Programming),</div>
          <div>To Geometric Algorithms (Convex Hull AND Voronoi),</div>
          <div>To Sorting and Searching Algorithms.</div>
        </p>
        <span class="btn btn-primary btn-lg" role="button"
          onClick={()=> window.open("https://jonathanchowjh.com", "_blank")}>
            Jonathan's Personal Webpage
        </span>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="card" style={{width: "18rem", margin: "0 auto"}}>
            <img src="https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/gray-background-7131-96d780fd18d4eaf58a7331d45573204e@1x.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card" style={{width: "18rem", margin: "0 auto"}}>
            <img src="https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/gray-background-7131-96d780fd18d4eaf58a7331d45573204e@1x.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card" style={{width: "18rem", margin: "0 auto"}}>
            <img src="https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/gray-background-7131-96d780fd18d4eaf58a7331d45573204e@1x.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}

export default Home