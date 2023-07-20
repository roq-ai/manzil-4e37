import { PassengerInterface } from 'interfaces/passenger';
import { DriverInterface } from 'interfaces/driver';
import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  passenger_id?: string;
  driver_id?: string;
  vehicle_id?: string;
  status?: string;
  created_at?: any;
  updated_at?: any;

  passenger?: PassengerInterface;
  driver?: DriverInterface;
  vehicle?: VehicleInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  passenger_id?: string;
  driver_id?: string;
  vehicle_id?: string;
  status?: string;
}
