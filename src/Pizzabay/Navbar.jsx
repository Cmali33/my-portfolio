import React from "react";
function Navbar() {
    return <>
    
        <header className="navbar navbar-expand-lg bd-navbar sticky-top">
  <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
    <div className="bd-navbar-toggle">
      <button className="navbar-toggler p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdSidebar" aria-controls="bdSidebar" aria-label="Toggle docs navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bi" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
</svg>

        <span className="d-none fs-6 pe-1">Browse</span>
      </button>
    </div>

    <a className="navbar-brand p-0 me-0 me-lg-2" href="/" aria-label="Bootstrap">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block my-1" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
    </a>

    <div className="d-flex">
      <div className="bd-search" id="docsearch" data-bd-docs-version="5.3"><button type="button" aria-label="Search (Ctrl+K)" class="DocSearch DocSearch-Button" fdprocessedid="6qqsp7"><span class="DocSearch-Button-Container"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" class="DocSearch-Search-Icon"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">Search</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"><svg width="15" height="15" class="DocSearch-Control-Key-Icon"><path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path></svg></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button></div>

      <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-label="Toggle navigation">
        <svg class="bi" aria-hidden="true"><use xlink:href="#three-dots"></use></svg>
      </button>
    </div>

    <div className="offcanvas-lg offcanvas-end flex-grow-1" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel" data-bs-scroll="true">
      <div className="offcanvas-header px-4 pb-0">
        <h5 className="offcanvas-title text-white" id="bdNavbarOffcanvasLabel">Bootstrap</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
      </div>

      <div className="offcanvas-body p-4 pt-0 p-lg-0">
        <hr className="d-lg-none text-white-50"/>
        <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav">
          <li className="nav-item col-6 col-lg-auto">
            <a className="nav-link py-2 px-0 px-lg-2 active" aria-current="true" href="/docs/5.3/getting-started/introduction/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Docs');">Docs</a>
          </li>
          <li className="nav-item col-6 col-lg-auto">
            <a className="nav-link py-2 px-0 px-lg-2" href="/docs/5.3/examples/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');">Examples</a>
          </li>
          <li className="nav-item col-6 col-lg-auto">
            <a className="nav-link py-2 px-0 px-lg-2" href="https://icons.getbootstrap.com/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Icons');" target="_blank" rel="noopener">Icons</a>
          </li>
          <li className="nav-item col-6 col-lg-auto">
            <a className="nav-link py-2 px-0 px-lg-2" href="https://themes.getbootstrap.com/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Themes');" target="_blank" rel="noopener">Themes</a>
          </li>
          <li className="nav-item col-6 col-lg-auto">
            <a className="nav-link py-2 px-0 px-lg-2" href="https://blog.getbootstrap.com/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Blog');" target="_blank" rel="noopener">Blog</a>
          </li>
        </ul>

        <hr className="d-lg-none text-white-50"/>

        <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
          <li className="nav-item col-6 col-lg-auto">
            <a className="nav-link py-2 px-0 px-lg-2" href="https://github.com/twbs" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="navbar-nav-svg" viewBox="0 0 512 499.36" role="img"><title>GitHub</title><path fill="currentColor" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg>
              <small className="d-lg-none ms-2">GitHub</small>
            </a>
          </li>
          <li classNameName="nav-item col-6 col-lg-auto">
            <a classNameName="nav-link py-2 px-0 px-lg-2" href="https://twitter.com/getbootstrap" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="navbar-nav-svg" viewBox="0 0 512 416.32" role="img"><title>Twitter</title><path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"></path></svg>
              <small classNameName="d-lg-none ms-2">Twitter</small>
            </a>
          </li>
          <li classNameName="nav-item col-6 col-lg-auto">
            <a classNameName="nav-link py-2 px-0 px-lg-2" href="https://opencollective.com/bootstrap" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" fill-rule="evenodd" class="navbar-nav-svg" viewBox="0 0 40 41" role="img"><title>Open Collective</title><path fill-opacity=".4" d="M32.8 21c0 2.4-.8 4.9-2 6.9l5.1 5.1c2.5-3.4 4.1-7.6 4.1-12 0-4.6-1.6-8.8-4-12.2L30.7 14c1.2 2 2 4.3 2 7z"></path><path d="M20 33.7a12.8 12.8 0 0 1 0-25.6c2.6 0 5 .7 7 2.1L32 5a20 20 0 1 0 .1 31.9l-5-5.2a13 13 0 0 1-7 2z"></path></svg>
              <small classNameName="d-lg-none ms-2">Open Collective</small>
            </a>
          </li>
          <li classNameName="nav-item py-2 py-lg-1 col-12 col-lg-auto">
            <div classNameName="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr classNameName="d-lg-none my-2 text-white-50"/>
          </li>

          

<li classNameName="nav-item dropdown">
  <button type="button" class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static" fdprocessedid="fo8r5s">
    <span classNameName="d-lg-none" aria-hidden="true">Bootstrap</span><span class="visually-hidden">Bootstrap&nbsp;</span> v5.3 <span class="visually-hidden">(switch to other versions)</span>
  </button>
  <ul classNameName="dropdown-menu dropdown-menu-end">
    <li><h6 classNameName="dropdown-header">v5 releases</h6></li>
    <li>
      <a classNameName="dropdown-item d-flex align-items-center justify-content-between active" aria-current="true" href="/docs/5.3/utilities/spacing/">
        Latest (5.3.x)
        <svg classNameName="bi"><use xlink:href="#check2"></use></svg>
      </a>
    </li>
    <li>
        <a classNameName="dropdown-item" href="https://getbootstrap.com/docs/5.2/utilities/spacing/">v5.2.3</a>
    </li>
    <li>
        <a classNameName="dropdown-item" href="https://getbootstrap.com/docs/5.1/utilities/spacing/">v5.1.3</a>
    </li>
    <li>
        <a className="dropdown-item" href="https://getbootstrap.com/docs/5.0/utilities/spacing/">v5.0.2</a>
    </li>
    <li><hr className="dropdown-divider"/></li>
    <li><h6 className="dropdown-header">Previous releases</h6></li>
    <li><a className="dropdown-item" href="https://getbootstrap.com/docs/4.6/">v4.6.x</a></li>
    <li><a className="dropdown-item" href="https://getbootstrap.com/docs/3.4/">v3.4.1</a></li>
    <li><a className="dropdown-item" href="https://getbootstrap.com/2.3.2/">v2.3.2</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="/docs/versions/">All versions</a></li>
  </ul>
</li>


          <li className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
            <div clasNames="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr className="d-lg-none my-2 text-white-50"/>
          </li>

          <li className="nav-item dropdown">
            <button className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static" aria-label="Toggle theme (light)" fdprocessedid="mzvojm">
              <svg className="bi my-1 theme-icon-active"><use href="#sun-fill"></use></svg>
              <span className="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
              <li>
                <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="light" aria-pressed="true">
                  <svg className="bi me-2 opacity-50"><use href="#sun-fill"></use></svg>
                  Light
                  <svg className="bi ms-auto d-none"><use href="#check2"></use></svg>
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                  <svg className="bi me-2 opacity-50"><use href="#moon-stars-fill"></use></svg>
                  Dark
                  <svg className="bi ms-auto d-none"><use href="#check2"></use></svg>
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
                  <svg className="bi me-2 opacity-50"><use href="#circle-half"></use></svg>
                  Auto
                  <svg className="bi ms-auto d-none"><use href="#check2"></use></svg>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
    </>
    
        {/* <nav
          className="navbar navbar-expand-md navbar-dark bg-dark"
          aria-label="Fourth navbar example"
            >
                <h1 className="ms-4 me-4">PizzaBay</h1>
            <form role="search">
              <input
                className="form-control mr-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
                    </form>
          <div className="container-fluid">
                    
            {/* <a className="navbar-brand" href="#">
              Expand at md
            </a> */
            /* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample04"
              aria-controls="navbarsExample04"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}

        //     <div className="collapse navbar-collapse" id="navbarsExample04">
        //       <ul className="navbar-nav me-auto mb-2 mb-md-0">
        //         <li className="nav-item">
        //           <a className="nav-link active" aria-current="page" href="#">
        //             Home
        //           </a>
        //         </li>
        //         <li className="nav-item">
        //           <a className="nav-link" href="#">
        //             Link
        //           </a>
        //         </li>
        //         <li className="nav-item">
        //           <a className="nav-link disabled" aria-disabled="true">
        //             Disabled
        //           </a>
        //         </li>
        //         <li className="nav-item dropdown">
        //           <a
        //             className="nav-link dropdown-toggle"
        //             href="#"
        //             data-bs-toggle="dropdown"
        //             aria-expanded="false"
        //           >
        //             Dropdown
        //           </a>
        //           <ul className="dropdown-menu">
        //             <li>
        //               <a className="dropdown-item" href="#">
        //                 Action
        //               </a>
        //             </li>
        //             <li>
        //               <a className="dropdown-item" href="#">
        //                 Another action
        //               </a>
        //             </li>
        //             <li>
        //               <a className="dropdown-item" href="#">
        //                 Something else here
        //               </a>
        //             </li>
        //           </ul>
        //         </li>
        //       </ul>
        //     </div>
        //   </div>
        // </nav> */}
      
    // );
}
export default Navbar;