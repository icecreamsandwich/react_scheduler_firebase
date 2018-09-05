//import libs
import React from 'react'
import PropTypes from 'prop-types'

// import mui components
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from '@material-ui/core/Drawer';
//import components
import topbarLogout from '../components/navigation/topbarLogout';
import menuExampleSimple from './menuExampleSimple';
import ClippedDrawer from './ClippedDrawer'
import SwipeableTemporaryDrawer from './TemporaryDrawer'
import MenuAppBar from './MenuAppBar'

const propTypes = {
  children: PropTypes.node.isRequired,
  authed: PropTypes.bool.isRequired,

}


function PrivateLayout({ children }) {
  return<div>
    {/*<MenuAppBar />*/}
    <AppBar
      title="My App"
      iconElementRight={topbarLogout}
      // onLeftIconButtonTouchTap={this.handleToggle}
      iconStyleRight={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '0',
      }}
    />  
    <div className="container d-flex justify-content-center mt-3">
      <div className="row">
        <main style={{minHeight: '100vh'}}>
          {children}
        </main>
      </div>
    </div>

  </div>
}

PrivateLayout.propTypes = propTypes

export default PrivateLayout
