import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';


import clsx from 'clsx';
//import { connect } from 'react-redux';
//import { reduxSelector, reduxActionCraetor } from '../../../redux/exampleRedux.js';

import styles from './Navigation.module.scss';



const Component = ({className, children}) => (
  <div className={clsx(className, styles.root, styles.component)}>
    {children}
    <Grid>
      <Row between="md" middle="xs">
        <Col md={3} lg={2}>
          <Link to='/'>
            <div>
              <span className={styles.name}>NewShop</span>

            </div>
          </Link>
        </Col>
        <Col md={6}>
          <nav>
            <NavLink to='/' activeClassName='active'>Homepage</NavLink>
            <NavLink to='/cart' activeClassName='active'>Cart</NavLink>
            <NavLink to='/product/:id' activeClassName='active'>Product</NavLink>
            <NavLink to='/cart/form' activeClassName='active'>Cart Form</NavLink>
          </nav>
        </Col>
        <Col md={3} lg={2}>
          <div className={styles.contact}>
          </div>
        </Col>
      </Row>
    </Grid>






  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

//const mapStateToProps = state => ({
//  someProp:reduxSelector(state),
//});

//const mapDispatchToProps = dispatch => ({
//  someAction: arg => dispatch(reduxActionCraetor(arg)),
//});

//const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { 
  Component as Navigation,
  //Container as Navigation,
  Component as NavigationComponent,
};