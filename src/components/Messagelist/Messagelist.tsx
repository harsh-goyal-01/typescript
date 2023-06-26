import React, { Suspense, useState } from 'react';
import { StyledDiv } from './MessageStyles';
import { loadable } from '../../loadable';
import { FormattedMessage } from 'react-intl';
import _map from 'lodash/map';
const Form = loadable(() => import(/* webpackChunkName: "Form" */'../Form/Form'));

const Messagelist: React.FC = () => {
  const DummyList: string[] = [];
  const [messageList, updateMessageList] = useState<string[]>(DummyList);

  const addMessage = (message: string) => {
    updateMessageList([...messageList, message]);
  };

  return (
    <div>
      {_map(messageList,function (m,index) { 
          return (
            <StyledDiv key={index}>
              {m}
            </StyledDiv>
          );
        })}
        <Suspense fallback={<div><FormattedMessage id="loading" defaultMessage="loading..." /></div>}>
      <Form addMessageHandler={addMessage} />
      </Suspense>
    </div>
  );
};

export default Messagelist;
