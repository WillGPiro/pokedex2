import React, { Component } from "react"

export default class Paging extends Component {
  constructor() {
      super();
      this.state = {page: 1 };
  }

  componentDidMount() {
      this.updateControls();

      window.addEventListener("hashchange", () => {
          this.updateControls();
      });
    }

    updatePage(increment) {
        const { page } = this.state;
        const queryString  = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        searchParams.set("page", page + increment);
        window.location.hash = searchParams.toString();

    }

//puling a pieces of the string and updating the URL
    updateControls(){
        const { page } = this.state;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString); 

        let pageToVisit = {page};

//Number (is a built in class) takes whatever argument passed and returns a number.
        const parsedPage = Number(searchParams.get("page"), 10);
        if (isNaN(parsedPage)) {
            pageToVisit = 1;
        } else {
            pageToVisit = parsedPage;
        }

        this.setState({ page: pageToVisit})
    }
//
    render() {
        const perPage = 5;
        const { totalResults } = this.props;
        const queryString = window.location.hash.slice(1)
        const serchParams = new URLSearchParams(queryString);

        const parsedPage = Number(serchParams.get("page"));

        let pageToVisit;
        if(isNaN(parsedPage)) {
            pageToVisit = 1;
        } else {
            pageToVisit = parsedPage
        }

        if (!totalResults) {
            return <p className="paging">No results, try another search</p>;
          }
      
          const lastPage = Math.ceil(totalResults / perPage);
      
          return (
            <p className="paging">
              <button
                className="prev"
                onClick={() => this.updatePage(-1)}
                disabled={pageToVisit === 1 ? true : ""}
                type="button"
              >
            ◀
              </button>
              <span>
                Page
                {pageToVisit} of
                {lastPage}
              </span>
              <button
                className="next"
                disabled={pageToVisit === lastPage ? "true" : ""}
                onClick={() => this.updatePage(1)}
                type="button"
              >
              ▶
              </button>
            </p>
          );
        }
      }

    
