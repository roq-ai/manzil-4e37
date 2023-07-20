interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Passenger'],
  tenantRoles: ['Business Owner'],
  tenantName: 'Organization',
  applicationName: 'Manzil',
  addOns: ['chat', 'notifications'],
};
