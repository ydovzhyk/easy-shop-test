import { useSelector } from 'react-redux';
import { getLogin } from 'redux/auth/auth-selectors';
import { useForm, Controller } from 'react-hook-form';

import s from './Default.module.scss';

import { field } from 'components/Shared/TextField/fields';
import SiteStatistic from 'components/SiteStatistic/SiteStatistic';
import TextField from 'components/Shared/TextField';
import SelectField from 'components/Shared/SelectField/SelectField';
import Button from 'components/Shared/Button';

const Default = () => {
  const isUserLogin = useSelector(getLogin);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      category: '',
      shopName: '',
      description: '',
      price: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    // dispatch(register(data));
    reset();
  };

  return (
    <section className={s.default}>
      {!isUserLogin && (
        <div className={s.defaultTitle}>
          <h2 className={s.title}>Перш ніж почати зареєструйтеся!</h2>
        </div>
      )}
      {isUserLogin && (
        <div className={s.defaultBoxForm}>
          <h2 className={s.title}>Додайте картку товару!</h2>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="category"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <SelectField
                  value={value}
                  handleChange={onChange}
                  name="category"
                  {...field.category}
                  required={true}
                  options={['Ресторани', 'Супермаркети', "Здоров'я та краса"]}
                />
              )}
            />

            <Controller
              control={control}
              name="shopName"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.shopName}
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.description}
                />
              )}
            />
            <Controller
              control={control}
              name="price"
              rules={{ required: true, minLength: 8, maxLength: 30 }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.price}
                />
              )}
            />
            <div className={s.wrap}>
              <Button text="Додати" btnClass="btnLight" />
            </div>
          </form>
        </div>
      )}
      {isUserLogin && <SiteStatistic />}
    </section>
  );
};

export default Default;
