import * as yup from 'yup';

export const passengerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
