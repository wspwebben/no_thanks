import { REFUSE_COST } from '../consts'

import addStack from "../addStack";
import getStackScore from "../getStackScore";

class Player {
  constructor(name, id, money) {
    this.id = id;
    this.name = name;
    this.money = money;
    this.stack = [];
  }

  get stackScore() {
    return getStackScore(this.stack);
  }

  get totalScore() {
    return this.stackScore - this.money;
  }

  get canDecline() {
    return this.money >= REFUSE_COST;
  }

  get publicInfo() {
    return {
      id: this.id,
      name: this.name,
      stack: this.stack,
      score: this.stackScore,
    };
  }

  get privateInfo() {
    return {
      ...this.publicInfo,
      money: this.money,
      score: this.totalScore,
    };
  }

  declineCard() {
    if (this.canDecline) {
      this.money -= REFUSE_COST;
      return REFUSE_COST;
    }

    return 0;
  }

  takeCard(card, bank) {
    this.stack = addStack(card, this.stack);
    this.money += bank;
  }
}

export default Player;
