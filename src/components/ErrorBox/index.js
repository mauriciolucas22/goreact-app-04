import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as ErrorActions } from '../../store/ducks/error';

import { Container } from './styles';

import CloseIcon from '../../assets/images/close.svg';

const ErrorBox = () => (
  <Container>
    <p>Mensagem de erro</p>
    <button>
      <img src={CloseIcon} alt="fechar" />
    </button>
  </Container>
);

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);
