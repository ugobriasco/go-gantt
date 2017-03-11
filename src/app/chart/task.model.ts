export class Task{
	constructor(
		public id: string,
		public name: string,
		public start: string,
		public end: string,
		public duration: number,
		public completion: number,
		public dependancy: string 
	){
		this.completion = 0;
	}
}