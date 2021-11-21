import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as EducationIcon } from '../../assets/book.svg';
import { ReactComponent as AlcoholIcon } from '../../assets/drinks.svg';
import { ReactComponent as HealthIcon } from '../../assets/health.svg';
import { ReactComponent as SportIcon } from '../../assets/hobbie.svg';
import { ReactComponent as HouseIcon } from '../../assets/home.svg';
import { ReactComponent as UtilityBillsIcon } from '../../assets/invoice.svg';
import { ReactComponent as EntartaintmentIcon } from '../../assets/kite.svg';
import { ReactComponent as ExtraIcon } from '../../assets/other-income.svg';
import { ReactComponent as ProductsIcon } from '../../assets/products.svg';
import { ReactComponent as SalaryIcon } from '../../assets/salary.svg';
import { ReactComponent as TechIcon } from '../../assets/tools.svg';
import { ReactComponent as TransportIcon } from '../../assets/transport.svg';
import { ReactComponent as OtherIcon } from '../../assets/ufo.svg';
import income from '../../utils/incomeTypes';
import expense from '../../utils/expenseTypes';
import styles from './Category.module.scss';

function CategoryIcon({ category }) {
  return (
    <div className={styles.iconWrapper}>
      <div className={styles.roundedRectangle} />
      {(() => {
        switch (category) {
          case income.EXTRA:
            return <ExtraIcon />;

          case income.SALARY:
            return <SalaryIcon />;

          case expense.EDUCATION:
            return <EducationIcon />;

          case expense.ENTERTAINMENT:
            return <EntartaintmentIcon />;

          case expense.ALCOHOL:
            return <AlcoholIcon />;

          case expense.HEALTH:
            return <HealthIcon />;

          case expense.HOUSE:
            return <HouseIcon />;

          case expense.OTHER:
            return <OtherIcon />;

          case expense.PRODUCTS:
            return <ProductsIcon />;

          case expense.SPORT:
            return <SportIcon />;

          case expense.TECH:
            return <TechIcon />;

          case expense.TRANSPORT:
            return <TransportIcon />;

          case expense.UTILITY_BILLS:
            return <UtilityBillsIcon />;

          case 'Дополнительный доход':
            return <ExtraIcon />;

          default:
            return null;
        }
      })()}
    </div>
  );
}

export default CategoryIcon;

CategoryIcon.propTypes = {
  category: PropTypes.string.isRequired,
};
