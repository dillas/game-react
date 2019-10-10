import React from 'react'
import { Field, Form, Formik } from 'formik'
import { findGameCategory, getGameCategories } from './api'
import * as Yup from 'yup'
import axios from 'axios'
import DatePicker, { registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'

registerLocale('ru', ru)

const DatePickerField = ({ name, value, onChange }) => {
  return (

    <DatePicker
      selected={value || null}
      onChange={val => {
        onChange(name, val)
      }}
      showTimeSelect
      placeholderText="Желаемая дата и время"
      className='form-control modal__form-control'
      locale='ru'
      timeFormat="HH:mm"
      timeIntervals={60}
      timeCaption="Время"
      dateFormat="d MMMM, yyyy HH:mm"
    />
  )
}

const NewOrderForm = () => {
  const formData = {
    gameCategory: '',
    count: '',
    dateTime: '',
    person: '',
    phone: '',
    email: '',
    comment: '',
    conditions: false,
  }

  const OrderSchema = Yup.object().shape({
    gameCategory: Yup.number().min(1, 'неверное значение').max(5, 'неверное значение'),
    count: Yup.number(),
    dateTime: Yup.string(),
    person: Yup.string(),
    phone: Yup.string().required('Обязательное поле'),
    email: Yup.string().email(),
    comment: Yup.string(),
    conditions: Yup.boolean().required('Обязательное поле'),
  })

  const gameCategory = getGameCategories()
  return (
    <div>
      <Formik
        onSubmit={(values, actions) => {
          async function main (actions) {
            const cat = findGameCategory(values.gameCategory)
            values.gameCategory = cat.name
            console.log(values.gameCategory)
            await axios.post('https://bunker-mail-server.herokuapp.com/send', values)
              .then(function (response) {
                console.log(response)
                console.log(values)
                actions.setSubmitting(false)
                actions.resetForm()
              })
              .catch(function (error) {
                console.log(error)
              })
          }

          main().catch(console.error)
          console.log(values)
          actions.setSubmitting(false)
          actions.resetForm()
        }}
        initialValues={formData}
        validationSchema={OrderSchema}
        render={({ values, errors, status, touched, isSubmitting, setFieldValue }) => (
          <Form>
            <div className='margin-bottom-xs'>
              <Field name='gameCategory' className='form-control modal__form-control flex-grow' component="select"
                     value={values.gameCategory} placeholder="Вид отдыха">
                <option value="" disabled hidden>Вид отдыха</option>
                {gameCategory.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
              </Field>
              {errors.gameCategory && touched.gameCategory && <div>{errors.gameCategory}</div>}
            </div>

            <div className='margin-bottom-xs'>
              {/*<label className='form-label margin-bottom-xxs' htmlFor='count'>Количество человек</label>*/}
              <Field type="text" className='form-control modal__form-control' name="count" placeholder="Количество человек"/>
              {errors.count && touched.count && <div>{errors.count}</div>}
            </div>

            <div className='margin-bottom-xs'>
              <DatePickerField className=''
                               name="dateTime"
                               value={values.dateTime}
                               onChange={setFieldValue}
              />
              {errors.dateTime && touched.dateTime && <div>{errors.dateTime}</div>}
            </div>

            <hr className='modal__devider'/>

            <div className='margin-bottom-xs'>
              <Field type="text" name="person" className='form-control modal__form-control' placeholder="Контактное лицо"/>
              {errors.person && touched.person && <div>{errors.person}</div>}
            </div>

            <div className='margin-bottom-xs'>
              <Field type="tel" name="phone" className='form-control modal__form-control flex-grow' placeholder="Номер телефона *"/>
              {errors.phone && touched.phone && <div>{errors.phone}</div>}
            </div>

            <div className='margin-bottom-xs'>
              <Field type="email" name="email" className='form-control modal__form-control flex-grow'
                     placeholder="Электронная почта"/>
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>

            <div className='margin-bottom-xs'>
              <Field type="text" component="textarea" className='form-control modal__form-control flex-grow' name="comment"
                     placeholder="Ваш коментарий"/>
              {errors.comment && touched.comment && <div>{errors.comment}</div>}
            </div>

            <div className='margin-bottom-xs'>
              <Field type="checkbox" name="conditions" className='' id='conditions' placeholder="Ваш коментарий"/>
              <label htmlFor="conditions">Согласен с условиями обработки данных</label>
              {errors.conditions && touched.conditions && <div>{errors.conditions}</div>}
            </div>

            {status && status.msg && <div>{status.msg}</div>}
            <button className='btn btn--dark btn--full-width' type="submit"
                    disabled={!values.conditions || isSubmitting}>
              Отправить заказ
            </button>
          </Form>
        )}
      />
    </div>
  )
}

export default NewOrderForm

/*<Formik
          onSubmit={}
          initialValues={orderData}
          render={({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <select name='gameCategory'>
                <option value="" disabled selected hidden>Вид Отдыха</option>
                {gameCategory.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
              </select>
              <div>
                <input type="text" name='count' placeholder='Количество человек'/>
              </div>
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  showTimeSelect
                  locale={ru}
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="d MMMM, yyyy h:mm"
                />
              </div>
              <div>
                <input type="text" name='person' placeholder='Контактное лицо'/>
              </div>
              <div>
                <input type="text" name='phone' placeholder='Номер телефона'/>
              </div>
              <div>
                <input type="text" name='email' placeholder='Электронная почта'/>
              </div>
              <div>
                <textarea name='coment' id='' cols='30' rows='5' placeholder='Ваш коментарий' />
              </div>
              <div>
                <input type="checkbox" id="check4" />
                  <label htmlFor="check4">Согласен с условиями обработки данных</label>
              </div>
              <div><button>Оформить</button></div>
            </Form>
          )}
        />*/