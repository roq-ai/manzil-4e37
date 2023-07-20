import { BookingInterface } from 'interfaces/booking';
import { DriverInterface } from 'interfaces/driver';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  organization_id?: string;
  driver_id?: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  driver_driver_vehicle_idTovehicle?: DriverInterface[];
  organization?: OrganizationInterface;
  driver_vehicle_driver_idTodriver?: DriverInterface;
  _count?: {
    booking?: number;
    driver_driver_vehicle_idTovehicle?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
  driver_id?: string;
}
