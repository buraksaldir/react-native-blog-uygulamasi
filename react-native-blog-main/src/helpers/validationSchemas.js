import * as yup from 'yup'

export const registerValidationSchema = yup
  .object({
    login: yup
      .string()
      .min(3, 'Giriş en az 3 karakterden oluşmalıdır')
      .matches(
        /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
        ' Sadece mektuplar kabul edilebilir'
      )
      .max(32, 'Ad en fazla 32 karakter uzunluğunda olmalıdır')
      .required('Giriş gerekli'),
    email: yup
      .string()
      .email()
      .required('Email gereklidir')
      .min(5, 'E-posta en az 5 karakter uzunluğunda olmalıdır')
      .max(63, 'E-posta en fazla 63 karakter uzunluğunda olmalıdır'),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
        '6 karakter, 1 büyük harf, 1 küçük harf, 1 sayı'
      )
      .min(6, 'Şifre en az 6 karakter uzunluğunda olmalıdır')
      .max(32, 'Şifre en fazla 32 karakter uzunluğunda olmalıdır')
      .required('Şifre gereklidir'),
  })
  .required()

export const loginValidationSchema = yup
  .object({
    email: yup
      .string()
      .email('Geçerli bir e-posta adresi girin, örneğin: "mail@mail.com"')
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        'Geçerli bir e-posta adresi girin, örneğin: "mail@mail.com"'
      )
      .required('Email gereklidir')
      .min(5, 'E-posta en az 5 karakter uzunluğunda olmalıdır')
      .max(63, 'E-posta en fazla 63 karakter uzunluğunda olmalıdır'),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
        '6 karakter, 1 büyük harf, 1 küçük harf, 1 sayı'
      )
      .min(6, 'Şifre en az 6 karakter uzunluğunda olmalıdır')
      .max(32, 'Şifre en fazla 32 karakter uzunluğunda olmalıdır')
      .required('Şifre gereklidir'),
  })
  .required()

export const addPostValidationSchema = yup
  .object({
    title: yup.string().required('Başlık gerekli'),
    location: yup
      .string()
      .min(3, 'Konum en az 3 karakterden oluşmalıdır')
      .required('Konum gerekli'),
  })
  .required()
