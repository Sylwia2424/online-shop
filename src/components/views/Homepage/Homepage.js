import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';


import clsx from 'clsx';
//import { connect } from 'react-redux';
//import { reduxSelector, reduxActionCraetor } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, children, img}) => (
  <div className={clsx(className, styles.root)}>
    {children}
    <Grid>
      <Row middle="md">
        <Col md={12}>
          <img alt='shoes'src='https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
        </Col>
      </Row>
      <Row middle="md" large="lg" >
        <Col md={12} lg={12}>
          <h1 className={styles.title}>Time for new shoes</h1>
        </Col>
  
      </Row>
      <Row middle="md" large="lg" >
        <Col md={12} lg={12}>
          <h1 >Time for new shoes</h1>
          
        </Col>
        <Col md={6} lg={12}>
          <h1 className={styles.title2}>Time for new shoes</h1>
        </Col>
        <Col md={6} lg={12}>
          <h1 className={styles.title2}>Time for new shoes</h1>
        </Col>


  
      </Row>
    </Grid>
  </div>

);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  img: PropTypes.node,
};

//const mapStateToProps = state => ({
//  someProp:reduxSelector(state),
//});

//const mapDispatchToProps = dispatch => ({
//  someAction: arg => dispatch(reduxActionCraetor(arg)),
//});

//const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { 
  Component as Homepage,
  //Container as Homepage,
  Component as HomepageComponent,
};