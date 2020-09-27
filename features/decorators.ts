class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.error(errorMessage);
      }
    };
  }
}


const boat = new Boat();

boat.pilot();
