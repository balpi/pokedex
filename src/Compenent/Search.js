import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div className='row PokeSearch'>
                <div className="bd-search text-center ">
                    <button type="button" className="DocSearch DocSearch-Button" aria-label="Search">
                        <span className="DocSearch-Button-Container">
                            <input width="20rem" height="2rem" className="m-0 DocSearch-Search-Icon" >
                            </input>
                            <span className="DocSearch-Button-Placeholder">Search</span>
                        </span><span className="DocSearch-Button-Keys">


                        </span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Search
