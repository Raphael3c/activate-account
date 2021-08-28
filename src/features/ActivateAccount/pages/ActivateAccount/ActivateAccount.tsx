import React from 'react';
import { Box } from '@material-ui/core'
import { PageContainer } from 'components/PageContainer';
import { ProcessPageLayout } from 'components/ProcessPageLayout';
import { AppBar } from 'components/AppBar';
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader';
import { ActivateMethod } from 'features/ActivateAccount/components/ActivateMethod';
import { ProcessPageFooter } from 'components/ProcessPageFooter/ProcessPageFooter';
import { useStyles } from './ActivateAccount.style'

export const ActivateAccount: React.FC = () => {

  const styles = useStyles()

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
            <Box className={styles.footerWrapper}>
              <ProcessPageFooter />
            </Box>
          }        
        />  
    </PageContainer> 
  );
}