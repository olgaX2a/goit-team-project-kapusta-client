import { ReactComponent as Calculator } from '../../assets/calculator.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
// import Button from '../../components/shared/Button/Button';
import { expensesOperations, expensesSelectors } from '../../redux/expenses';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import s from './FormInfo.module.scss';

const FormInfo = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [descriptionGoods, setDescriptionGoods] = useState('');
  const [sum, setSum] = useState('');
  const [categoriesGoods, setCategoriesGoods] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'descriptionGoods':
        setDescriptionGoods(value);
        break;

      case 'categoriesGoods':
        setCategoriesGoods(value);
        break;

      case 'sum':
        setSum(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      expensesOperations.createExpens({ descriptionGoods, sum, categoriesGoods, startDate }),
    );
    reset();

    // toast.success('Done!');
  };
  const reset = () => {
    setDescriptionGoods('');
    setSum('');
    setCategoriesGoods('');
  };
  return (
    <div className={s.infoData}>
      <div className={s.containerDate}>
        <Calendar className={s.icon} width="20px" height="20px" />
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={date => setStartDate(date)}
          name="date"
          value={startDate}
          className={s.date}
        />
      </div>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputFild}>
          <input
            placeholder="Описание товара"
            className={s.description}
            type="text"
            name="descriptionGoods"
            value={descriptionGoods}
            onChange={handleChange}
          />
          <select
            className={s.selectCategory}
            name="categoriesGoods"
            onChange={handleChange}
            value={categoriesGoods}
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
            <input
              placeholder="00.00 UAH"
              className={s.sum}
              type="number"
              name="sum"
              value={sum}
              onChange={handleChange}
            />
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
