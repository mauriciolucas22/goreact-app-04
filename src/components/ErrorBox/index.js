import React from 'react';

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

export default ErrorBox;
