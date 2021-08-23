import React from 'react'
import {Option} from 'components/Option'

import smsReceived from '_assets/img/icn-sms-recebido.svg'
import cardReceived from '_assets/img/icn-cartao-recebido.svg'

export const ActivateMethod: React.FC = () => {
  return (
    <div>
      <Option 
        title={"Recebi SMS"} 
        description={"Se você recebeu uma transferência ou um código de ativação no celular"}
        icon={smsReceived}
        iconWidth={'38'}
        iconHeight={'48'}
      />
      <Option 
        title={"Recebi um Cartão"} 
        description={"Está com seu cartão em mãos? Vamos confirmar os dados"}
        icon={cardReceived}
        iconWidth={'48'}
        iconHeight={'44'}
      />
    </div>
  )
}

