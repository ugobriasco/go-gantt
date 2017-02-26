export class Task{
	constructor(
		public id: string,
		public name: string,
		public start: Date,
		public end: Date,
		public duration: number,
		public completion: number,
		public dependancy: string 
	){}
}