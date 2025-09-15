import { RegisteredBlockData } from "../types"
import { StatisticBlock as Block } from "./payload"
import { StatisticBlockFields } from "./types"
import { StatisticBlockDefault } from "./ui/statistic-default"

export const Statistic: RegisteredBlockData = {
  blockType: "statistic",
  payload: Block,
  renderer: (data: StatisticBlockFields) => {
    return <StatisticBlockDefault fields={data} />
  },
}
