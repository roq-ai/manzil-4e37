import * as yup from 'yup';

export const driverValidationSchema = yup.object().shape({
  current_location: yup.string(),
  user_id: yup.string().nullable(),
  vehicle_id: yup.string().nullable(),
});
