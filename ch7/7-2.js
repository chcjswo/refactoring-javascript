export class Person {
	#name;
	#courses;
	constructor(name) {
		this.#name = name;
		this.#courses = [];
	}

	get name() {
		return this.#name;
	}

	get courses() {
		return [...this.#courses];
	}

	addCources(course) {
		this.#courses.push(course);
	}

	removeCourse(course, runIfAbsend) {
		const index = this.#courses.indexOf(course);
		if (index === -1) {
			runIfAbsend();
			return;
		}
		this.#courses.splice(index, 1);
	}
}

export class Course {
	#name;
	#isAdvanced;
	constructor(name, isAdvanced) {
		this.#name = name;
		this.#isAdvanced = isAdvanced;
	}

	get name() {
		return this.#name;
	}

	get isAdvanced() {
		return this.#isAdvanced;
	}
}

const ellie = new Person('엘리');
const c1 = new Course('리팩토링1', true);
const c2 = new Course('리팩토링2', true);
ellie.addCources(c1);
ellie.addCources(c2);
console.log(ellie.courses.length);
ellie.removeCourse(c1, () => {
	console.log('해당 강좌는 없습니다.');
});
console.log(ellie.courses.length);
ellie.removeCourse(c1, () => {
	console.log('해당 강좌는 없습니다.');
});
console.log(ellie.courses.length);
