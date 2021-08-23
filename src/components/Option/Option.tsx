import React from 'react'
import {Button, Typography} from '@material-ui/core';
import {useStyles} from './Option.style'

interface OptionProps{
  title: string;
  description: string;
  icon: string;
  iconHeight: string | number;
  iconWidth: string | number;
}

export const Option: React.FC<OptionProps> = ({
  title,
  description,
  icon,
  iconWidth,
  iconHeight,
}) => {

  const styles = useStyles()

  return (
    <>
      <Button className={styles.buttonOption}>        
        <div className={styles.contentContainer}>
          <div className={styles.labelContainer}>
            <Typography
                variant="subtitle1"
                className={styles.subtitle}
            >
              <strong>{title}</strong>
            </Typography>

            <Typography
              variant="body1"
              className={styles.description}
            >
              {description}
            </Typography>
          </div>
          <img src={icon} alt="Recebi por SMS" width={`${iconWidth}`} height={`${iconHeight}`}/>
        </div>

      </Button>
    </>
  )
}

