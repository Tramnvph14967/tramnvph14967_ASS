import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='container-fuild'>
      {/* Banner */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://donghotinnhiem.com/storage/2020/01/banner.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://media-exp1.licdn.com/dms/image/C5112AQEfptQtGhQJzg/article-cover_image-shrink_600_2000/0/1520153249908?e=1652918400&v=beta&t=Q05MuyaF_im5LiwLvvib7Mg_antUVNxfwSXuQFIsG1E" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pnjwatch.com.vn/Category/45/Banner-DocQuyen-23040x880-3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Danh mục */}
      <div className="row-root-2ni departments-wrapper mt-5">
        <div className='text-center p-3 '><button type="button" className="btn btn-light">SHOW ALL BRANDS</button></div>
        <div className="row-contained-LS3">
          <div className="wrapper">
            <div className="row-contained-LS3 departments desktop">
              <div style={{ padding: '0px 50px 17px', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                <div>
                  <style dangerouslySetInnerHTML={{ __html: "\n        main .departments-wrapper:after {\n          max - width: 1440px;\n        position: relative;\n        align-self: center;\n    }\n\n        main .departments-wrapper .departments-circle-wrapper:hover img {\n          filter: brightness(80%) contrast(130%);\n    }\n        .departments-wrapper .departments-circle-wrapper img {\n          transition: filter 200ms ease-out;\n\n        width: 100%;\n        height: auto;\n        max-width: 150px;\n        max-height: 150px;\n    }\n        .departments-wrapper .departments-circle-wrapper a {\n          display: block;\n        padding-bottom: 20px;\n    }\n\n        main .departments-wrapper .departments-circle-wrapper:hover button.btn:after {\n          width: 100%;\n    }\n        main .departments-wrapper .departments-circle-wrapper button.btn:after {\n          -ms - transition: none;\n        -moz-transition: none;\n        -webkit-transition: none;\n        content: \"\";\n        position: absolute;\n        height: 2px;\n        width: 0;\n        bottom: -6px;\n        left: 0;\n        background: #4a4a4a;\n    }\n        main .departments-wrapper .departments-circle-wrapper button.btn {\n          color: #4a4a4a;\n        font-family: -apple-system, system-ui, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, sans-serif;\n        font-weight: 500;\n        font-size: 15px;\n    }\n\n        @media screen and (min-width: 1440px) {\n          main.departments - wrapper.departments.desktop {\n          width: 1300px;\n        }\n    }\n\n        @media screen and (min-width: 768px) and (max-width: 1280px) {\n        .departments - wrapper.departments.desktop > div {\n          margin: 0 auto !important;\n        padding-right: 20px !important;\n        padding-left: 20px !important;\n        }\n    }\n      " }} />
                </div>
                <div className="columnGroup-root-1P5" style={{ display: 'flex' }}>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/p/r/preowned-baume-et-mercier-capeland-chronograph-automatic-black-dial-mens-watch-10451.jpg?width=546&height=546" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Baume Mercier</button>
                    </div>
                    </div>
                  </div>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/b/r/breitling-navitimer-8-chronograph-automatic-chronometer-black-dial-mens-watch-m13314101b1x1.jpg?width=546&height=546" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Breitling</button>
                    </div>
                    </div>
                  </div>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/c/a/cartier-santos-automatic-black-dial-black-rubber-mens-watch-wssa0039.jpg?width=350&height=350" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Cartier</button>
                    </div>
                    </div>
                  </div>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/c/i/citizen-brycen-chronograph-light-brown-dial-mens-watch-ca064906x.jpg?width=350&height=350" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Citizen</button>
                    </div>
                    </div>
                  </div>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/a/hamilton-khaki-field-king-automatic-silver-dial-mens-watch-h64455523.jpg?width=350&height=350" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Hamilton</button>
                    </div>
                    </div>
                  </div>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/h/u/hublot-classic-fusion-grey-dial-automatic-men_s-watch-542.nx.7071.lr.jpg?width=350&height=350" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Hublot</button>
                    </div>
                    </div>
                  </div>


                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Now */}
      <div className="row p-5">
        <h2 className='text-center p-2'>Trending Now</h2>
        <div className="col mt-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <span>Giá: 245VNĐ</span>
            </div>

            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>
        <div className="col mt-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <span>Giá: 245VNĐ</span>
            </div>

            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>
        <div className="col mt-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <span>Giá: 245VNĐ</span>
            </div>

            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>
        <div className="col mt-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <span>Giá: 245VNĐ</span>
            </div>

            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>
        <div className="col mt-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <span>Giá: 245VNĐ</span>
            </div>

            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>
        <div className="col mt-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <span>Giá: 245VNĐ</span>
            </div>

            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>
        <div className="col mt-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <span>Giá: 245VNĐ</span>
            </div>

            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>
        <div className="col mt-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <span>Giá: 245VNĐ</span>
            </div>

            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>
      </div>


      {/* Featured Daily Deals */}
      <div className="row featurette">
        <div className="col-md-7 px-5 " >
          <h2 className="featurette-heading text-center">Featured Daily Deals</h2>
          <div className='text-center p-2'><button>Shop All Deals</button></div>
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: '14rem' }}>
                <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                </div>
                <div className="card-body">
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '14rem' }}>
                <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                </div>
                <div className="card-body">
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '14rem' }}>
                <img src="https://thumbs.nosto.com/quick/qjjk7w5u/8/67711/8157649d4b1fe1a684858a47e96f355bbc19de2f2cb85e9055ecb3ef379cfa0ca/A" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                </div>
                <div className="card-body">
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <img src="https://cdn2.jomashop.com/media/wysiwyg/footer_main_hp_03.jpg" width="500" alt="" />
        </div>
      </div>


<hr />

      <div className="row text-center px-3 py-3">
        <div className="col-lg-4">
          <a href=""><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://i.doanhnhansaigon.vn/2015/07/21/loi-hua-thuong-hieu-doanhnhansaigon-1508413003_750x0.jpg" alt="" /></a>
<br />
          <br /><p className=''>JOMASHOP PROMISE</p>
          <h5 className='p-2'>WARRANTY INCLUDED</h5>
          <p><a className="btn  btn-secondary" href="#">View details »</a></p>
        </div>{/* /.col-lg-4 */}
        <div className="col-lg-4">
          <a href=""><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://ttpc.hcmiu.edu.vn/wp-content/uploads/2020/02/1920x1286_1486456210-anh-bia-800x445.jpg" alt="" /></a>
          <br />
          <br /><p className=''>ASSURANCE OF BUYING</p>
          <h5 className=''>AUTHENTICITY GUARANTEED</h5>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>{/* /.col-lg-4 */}
        <div className="col-lg-4">
          <a href=""><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://timviec365.com/pictures/images/nhan-vien-tu-van-la-gi-min.jpg" alt="" /></a>
          <br />
          <br /><p className=' '>EXPERT GUIDANCE</p>
          <h5 className=''>FAST & EASY RETURNS</h5>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>{/* /.col-lg-4 */}
      </div>







    </div>
  )
}

export default Home