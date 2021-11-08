import { ReactComponent as Calculator } from '../../assets/calculator.svg';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
// import Button from '../../components/shared/Button/Button';

import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import s from './FormInfo.module.scss';

const FormInfo = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const [category, setCategory] = useState('');
  // const selectCategory = e => {
  //   // e.persist();
  //   const { value } = e.target;
  //   setCategory({ value }, function () {
  //     console.log(category);
  //   });
  // };
  return (
    <div className={s.infoData}>
      <div className={s.containerDate}>
        <Calendar className={s.icon} width="20px" height="20px" />
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} className={s.date} />
      </div>
      <form className={s.form}>
        <div className={s.inputFild}>
          <input placeholder="Описание товара" className={s.discription} />
          <select
            className={s.selectCategory}
            name="categoriesGoods"
            // onChange={selectCategory}
            // value={category}
          >
            <option value="">Категория товара</option>
            <option value="Транспорт">Транспорт</option>
            <option value="Продукты">Продукты</option>
            <option value="Здоровье">Здоровье</option>
            <option value="Алкоголь">Алкоголь</option>
            <option value="Развлечения">Развлечения</option>
            <option value="Все для дома">Все для дома</option>
            <option value="Техника">Техника</option>
            <option value="Комуналка, связь">Комуналка, связь</option>
            <option value="Спорт, хобби">Спорт, хобби</option>
            <option value="Образование">Образование</option>
            <option value="Прочее">Прочее</option>
          </select>

          <div className={s.containerSum}>
            <input placeholder="00.00 UAH" className={s.sum} />
            <span className={s.separator}></span>
            <Calculator className={s.icon} width="20px" height="20px" />
          </div>
        </div>

        <div className={s.formButton}>
          <button type="submit" className={s.button}>
            Ввод
          </button>
          <button type="button" className={s.button}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInfo;
