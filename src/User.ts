import faker from 'faker';

export class User {
	name: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		// Initialization
		this.name = faker.name.findName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
	}

	markerContent(): string {
		return `User Name is : ${this.name}`;
	}
}
