import React from 'react'
import {Button, Typography} from '@material-ui/core';
import {useStyles} from './Option.style'

type OptionPropsBase = {
  title: string;
  icon: string;
  iconHeight?: string | number;
  iconWidth?: string | number;
}

type optionStandard = {
  type: 'standard';
  cardFlag?: never;
  fourLastNumbers?: never;
  description: string;
  nameCardHolder?: never;
}

type optionCard = {
  type: 'cardOption';
  cardFlag: string;
  fourLastNumbers: string;
  description?: never;
  nameCardHolder: string;
}

export type OptionProps = OptionPropsBase & (optionStandard | optionCard)

export const Option: React.FC<OptionProps> = ({
  title,
  description,
  icon,
  iconWidth,
  iconHeight,
  type,
  cardFlag,
  fourLastNumbers,
  nameCardHolder,
}) => {

  const styles = useStyles()

  return (
    <>
      <Button className={styles.buttonOption}>        
        <div className={styles.contentContainer}>
          <div className={styles.labelContainer}>

            { (type === 'cardOption') ? 
              (
                <Typography
                    variant="subtitle1"
                    className={styles.titleOptionCard}
                >
                  {title}
                </Typography>
              ) : 
              ( 
                <Typography
                  variant="subtitle1"
                  className={styles.subtitle}
                >
                  <strong>{title}</strong>
                </Typography>
              )
          }


          {
            (type === 'cardOption') ? 
              (
                <Typography
                  variant="subtitle1"
                  className={styles.subtitle}
                >
                  <strong>{`${cardFlag} - Final ${fourLastNumbers}`}</strong>
                </Typography>
              ) : 
              () => {}
          }

          {
            (type === 'cardOption') ? 
              (
                <Typography
                  variant="body1"
                  className={styles.nameCardHolder}
                >
                  {nameCardHolder}
                </Typography>
              ) :
              (
                <Typography
                  variant="body1"
                  className={styles.description}
                >
                  {description}
                </Typography>
              )
          }

            
          </div>


          {
            (type === 'cardOption') ?
              (
                <div className={styles.cardFlagCategoryContainer}>
                  <img src={icon} alt="Bandeira do Cartão" width={`${iconWidth}`} height={`${iconHeight}`}/>
                  <span className={styles.cardCategory}>pré-pago</span>
                </div>
              ):
              <img src={icon} alt="Recebi por SMS" width={`${iconWidth}`} height={`${iconHeight}`}/>
          }
          

        </div>
      </Button>
    </>
  )
}

