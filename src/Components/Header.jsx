import React, { useEffect } from "react";
function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href="#">
          <h3>PIAIC</h3>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                How It works <span class="sr-only">(current)</span>
              </a>
            </li>
            <hr />
            <li class="nav-item">
              <a class="nav-link" href="#">
                Apply
              </a>
            </li>
            <hr />
            <li class="nav-item">
              <a class="nav-link" href="#">
                Available Programs
              </a>
            </li>
            <hr />
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <hr />
            <li class="nav-item">
              <a class="nav-link" href="#">
                WIT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
