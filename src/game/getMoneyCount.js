import { MAX_MONEY, TOTAL_MONEY } from './consts'

export default function (players) {
  return Math.min(MAX_MONEY, Math.floor(TOTAL_MONEY / players))
}
