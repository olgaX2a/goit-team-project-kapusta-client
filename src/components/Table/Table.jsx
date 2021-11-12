import { ReactComponent as Delete } from '../../assets/delete.svg';
import s from './Table.module.scss';

const TableForm = ({ transactionType }) => {
  return (
    <div className={s.scrollTable}>
      <table>
        <thead>
          <tr>
            <th className={s.date}>Дата</th>
            <th>Описание</th>
            <th>Категория</th>
            <th>Сумма</th>
          </tr>
        </thead>
      </table>
      <div className={s.scrollTableBody}>
        <table>
          <tbody>
            {transactionType.map(({ description, sum, category, date }) => (
              <tr>
                <td className={s.date}>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>
                  {sum}
                  <Delete width="18px" height="18px" className={s.button} />
                </td>
              </tr>
            ))}
            {/* как возвращать пустые строки функцией нужно подумать, пока так */}
            <tr>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
            </tr>
            <tr>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
            </tr>
            <tr>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
            </tr>
            <tr>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
            </tr>
            <tr>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
            </tr>
            <tr>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
            </tr>
            <tr>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
            </tr>
            <tr>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
              <td className={s.empty}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableForm;
