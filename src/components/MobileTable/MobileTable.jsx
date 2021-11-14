import React from 'react';
import EllipsisText from 'react-ellipsis-text';
import PropTypes from 'prop-types';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import Container from '../shared/Container/Container';
import s from './MobileTable.module.scss';

// eslint-disable-next-line arrow-body-style
const MobileTable = ({ transactions }) => {
  return (
    <Container>
      <ul className={s.list}>
        {transactions.map(({ description, sum, category, date, id }) => (
          <li key={id} className={s.item}>
            <div className={s.descContainer}>
              <p className={s.description}>
                <EllipsisText text={description} length={30} />
              </p>
              <div className={s.categoryContainer}>
                <p className={s.date}>{date}</p>
                <p>{category}</p>
              </div>
            </div>

            <p className={s.sumContainer}>
              {sum.toLocaleString('ru')} грн.
              <button
                type="button"
                className={s.buttonDelete}
                onClick={() => console.log('need delete transaction')}
              >
                <Delete width="18px" height="18px" className={s.buttonIcon} />
              </button>
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
};
MobileTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MobileTable;
