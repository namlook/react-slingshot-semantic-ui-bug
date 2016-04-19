/*eslint-disable import/default*/

import React from 'react';
import ReactDOM from 'react-dom';
// import {render} from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';
// import configureStore from './store/configureStore';
// import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

// const store = configureStore();

// render(
//   <div className="ui dropdown item">
//     Dropdown
//     <i className="dropdown icon"></i>
//     <div className="menu">
//       <div className="item">Choice 1</div>
//       <div className="item">Choice 2</div>
//       <div className="item">Choice 3</div>
//     </div>
//   </div>, document.getElementById('app')
// );

const Content = React.createClass({

    componentDidMount() {
        $('.ui.dropdown').dropdown();
    },

    render: function () {
        return (

                  <div className="ui dropdown item" ref="dropdown">
          Dropdown
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">Choice 1</div>
            <div className="item">Choice 2</div>
            <div className="item">Choice 3</div>
          </div>
        </div>
        );
    }
});

ReactDOM.render(
	<Content />,
    document.getElementById('app')
);
