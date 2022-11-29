import React from "react";

export default function Thankyou() {
  function search(e) {
    e.preventDefault();
    const key = document.getElementById("searchinp").value;
    window.location.href = `/search/${key}`;
  }
  return (
    <div class="site-wrap">
      <div class="site-navbar py-2">
        <div class="search-wrap">
          <div class="container">
            <a href="#" class="search-close js-search-close">
              <span class="icon-close2"></span>
            </a>
            <form onSubmit={search}>
              <input
                type="text"
                id="searchinp"
                className="form-control"
                placeholder="Search keyword and hit enter..."
              />
            </form>
          </div>
        </div>

        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <div class="logo">
              <div class="site-logo">
                <a href="/Home" class="js-logo-clone">
                  BookWorm
                </a>
              </div>
            </div>
            <div class="main-nav d-none d-lg-block">
              <nav
                class="site-navigation text-right text-md-center"
                role="navigation"
              >
                <ul class="site-menu js-clone-nav d-none d-lg-block">
                  <li>
                    <a href="/Home">Home</a>
                  </li>
                  <li>
                    <a href="/Shop">Store</a>
                  </li>
                  <li>
                    <a href="/About">About</a>
                  </li>
                  <li class="active">
                    <a href="/Contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="icons">
              <a href="#" class="icons-btn d-inline-block js-search-open">
                <span class="icon-search"></span>
              </a>
              <a href="cart.html" class="icons-btn d-inline-block bag">
                <span class="icon-shopping-bag"></span>
                <span class="number">2</span>
              </a>
              <a
                href="#"
                class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
              >
                <span class="icon-menu"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-0">
              <a href="index.html">Home</a> <span class="mx-2 mb-0">/</span>{" "}
              <strong class="text-black">Thank You</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <span class="icon-check_circle display-3 text-success"></span>
              <h2 class="display-3 text-black">Thank you!</h2>
              <p class="lead mb-5">You order was successfuly completed.</p>
              <p>
                <a
                  href="/Home"
                  class="btn btn-md height-auto px-4 py-3 btn-primary"
                >
                  Back to store
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="block-7">
                <h3 class="footer-heading mb-4">About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  quae reiciendis distinctio voluptates sed dolorum excepturi
                  iure eaque, aut unde.
                </p>
              </div>
            </div>
            <div class="col-lg-3 mx-auto mb-5 mb-lg-0">
              <h3 class="footer-heading mb-4">Quick Links</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="/Store">Store</a>
                </li>
                <li>
                  <a href="/Contact">Contact</a>
                </li>
              </ul>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="block-5 mb-5">
                <h3 class="footer-heading mb-4">Contact Info</h3>
                <ul class="list-unstyled">
                  <li class="address">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </li>
                  <li class="phone">
                    <a href="tel://23923929210">+2 392 3929 210</a>
                  </li>
                  <li class="email">emailaddress@domain.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row pt-5 mt-5 text-center">
            <div class="col-md-12">
              {/* <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
              with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank"
                class="text-primary">Colorlib</a>
            </p> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
