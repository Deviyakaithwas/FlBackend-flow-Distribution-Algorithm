// models/astrologer.model.js
export class Astrologer {
    constructor(id, name, flowRate = 1) {
      this.id = id;
      this.name = name;
      this.flowRate = flowRate; // default flow rate is 1
      this.currentFlow = 0; // current number of users connected
    }
  }