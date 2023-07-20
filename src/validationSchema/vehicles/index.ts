import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  organization_id: yup.string().nullable(),
  driver_id: yup.string().nullable(),
});
