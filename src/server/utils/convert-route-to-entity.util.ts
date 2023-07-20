const mapping: Record<string, string> = {
  bookings: 'booking',
  drivers: 'driver',
  organizations: 'organization',
  passengers: 'passenger',
  users: 'user',
  vehicles: 'vehicle',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
