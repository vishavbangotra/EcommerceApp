import React from "react";

export default function NavBar() {
  const categoryLinkStyleClass =
    "link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover text-nowrap";
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="d-flex">
            <a className="navbar-brand" href="#">
              E-Shop
            </a>
            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="categoriesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "inherit", border: "inherit" }}
              >
                Categories
              </button>
              <div
                className="dropdown-menu dropdown-menu-large p-3"
                style={{ width: "auto" }}
                aria-labelledby="categoriesDropdown"
              >
                <div className="d-flex gap-3">
                  <div className="d-flex gap-1 flex-column category-group">
                    <h6 className="text-nowrap">Electronics</h6>
                    <a className={categoryLinkStyleClass} href="#">
                      Mobile Phones
                    </a>
                    <a className={categoryLinkStyleClass} href="#">
                      Laptops
                    </a>
                    <a className={categoryLinkStyleClass} href="#">
                      Cameras
                    </a>
                    <a className={categoryLinkStyleClass} href="#">
                      Accessories
                    </a>
                  </div>
                  <div className="d-flex flex-column category-group">
                    <h6 className="text-nowrap">Fashion</h6>
                    <a className={categoryLinkStyleClass} href="#">
                      Men
                    </a>
                    <a className={categoryLinkStyleClass} href="#">
                      Women
                    </a>
                    <a className={categoryLinkStyleClass} href="#">
                      Kids
                    </a>
                    <a className={categoryLinkStyleClass} href="#">
                      Shoes
                    </a>
                  </div>
                  <div className="d-flex flex-column category-group">
                    <h6 className="text-nowrap">Home & Kitchen</h6>
                    <a className={categoryLinkStyleClass} href="#">
                      Furniture
                    </a>
                    <a className={categoryLinkStyleClass} href="#">
                      Decor
                    </a>
                    <a className={categoryLinkStyleClass} href="#">
                      Appliances
                    </a>
                    <a className={categoryLinkStyleClass} href="#">
                      Cookware
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-light">Login/Logout</div>
        </div>
      </nav>
    </>
  );
}
