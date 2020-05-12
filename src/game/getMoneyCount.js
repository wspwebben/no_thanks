import { MAX_MONEY, TOTAL_MONEY } from '@/logic/consts'

export default function (players) {
  return Math.min(MAX_MONEY, Math.floor(TOTAL_MONEY / players))
}
