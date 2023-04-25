interface IDeferred {
  promise: Promise<any>
  reject: (reason?: any) => void
  resolve: (reason?: any) => void
}

class Deferred implements IDeferred {
  promise: Promise<any>
  reject: (reason?: any) => void = () => {}
  resolve: (reason?: any) => void = () => {}

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
}

export default Deferred