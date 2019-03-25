import React from "react"
import PropTypes from "prop-types"

// Returns an svg for the given name, to be used for simple icons and shapes.
/* eslint max-len: 0 */

const Svg = ({ name, fill }) => {
    switch (name) {
    case `chevron`:
        return (
            <svg x="0px" y="0px" viewBox="0 0 512 512">
                <path
                    d="M509.121,125.966c-3.838-3.838-10.055-3.838-13.893,0L256.005,365.194L16.771,125.966c-3.838-3.838-10.055-3.838-13.893,0
                    c-3.838,3.838-3.838,10.055,0,13.893l246.18,246.175c1.842,1.842,4.337,2.878,6.947,2.878c2.61,0,5.104-1.036,6.946-2.878
                    l246.17-246.175C512.959,136.021,512.959,129.804,509.121,125.966z"
                />
            </svg>
        )
    }
}

Svg.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Svg
