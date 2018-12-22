import React from "react";
import queryString from 'query-string';


class TokenAccessor extends React.Component {

    render() {
        let url = this.props.location.search;
        let params = queryString.parse(url);
        console.log(params.access_token);
        return (<div>
            {params['access_token']}
        </div>);
    }
}

export default TokenAccessor;
