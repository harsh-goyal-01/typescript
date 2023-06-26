import React, { Suspense } from 'react';
import { StyledContainer,StyledHeading } from './TextboxStyles';
import { loadable } from '../../loadable';
import { FormattedMessage } from 'react-intl';
import Userid from '../Userid/Userid';

const Messagelist = loadable(() => import(/* webpackChunkName: "Messagelist" */ '../Messagelist/Messagelist'));
const Textbox: React.FC = () => {
  return (
    <div>
      <StyledHeading>  <FormattedMessage id="heading" defaultMessage="Chat App" /></StyledHeading>
      <StyledContainer>
        <Suspense fallback={<div><FormattedMessage id="loading" defaultMessage="loading..." /></div>}>
          <Messagelist />
        </Suspense>
      </StyledContainer>
      <Userid/>
    </div>
  );
};

export default Textbox;
