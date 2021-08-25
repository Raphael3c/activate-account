import React from 'react';
import { PageContainer } from 'components/PageContainer'
import { ProcessPageLayout } from 'components/ProcessPageLayout';
import { AppBar } from 'components/AppBar'
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader';
import { ActivateMethod } from 'features/ActivateAccount/components/ActivateMethod'
import { ProcessPageFooter } from 'components/ProcessPageFooter/ProcessPageFooter';

export const ActivateAccount: React.FC = () => {
  return (
    <PageContainer>
        <ProcessPageLayout 
          appBar={<AppBar homeRoute={'/'}/>}

          header={
            <ProcessDescriptionHeader 
              title={"Ativar Conta"}
              subtitle={"Primeiro passo"}
              description={"Para ativar sua conta, escolha uma das opções abaixo."}
            />
          }

          main={
            <ActivateMethod />
          }

          footer={
            <ProcessPageFooter />
          }

          footerPosition={'fixed'}
        
        />
    </PageContainer> 
  );
}