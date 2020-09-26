import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';


// console.log(company);

const company = new Company();
const user = new User();
const customMap = new CustomMap('map');

customMap.addMarker(company);
customMap.addMarker(user);

