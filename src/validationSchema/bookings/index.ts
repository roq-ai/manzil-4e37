import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  status: yup.string(),
  passenger_id: yup.string().nullable(),
  driver_id: yup.string().nullable(),
  vehicle_id: yup.string().nullable(),
});
