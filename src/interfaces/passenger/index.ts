import { BookingInterface } from 'interfaces/booking';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PassengerInterface {
  id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  user?: UserInterface;
  _count?: {
    booking?: number;
  };
}

export interface PassengerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
