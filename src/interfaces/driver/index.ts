import { BookingInterface } from 'interfaces/booking';
import { VehicleInterface } from 'interfaces/vehicle';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DriverInterface {
  id?: string;
  user_id?: string;
  vehicle_id?: string;
  current_location?: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  vehicle_vehicle_driver_idTodriver?: VehicleInterface[];
  user?: UserInterface;
  vehicle_driver_vehicle_idTovehicle?: VehicleInterface;
  _count?: {
    booking?: number;
    vehicle_vehicle_driver_idTodriver?: number;
  };
}

export interface DriverGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  vehicle_id?: string;
  current_location?: string;
}
