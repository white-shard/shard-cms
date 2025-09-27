import { RegisteredBlockData } from "../types"
import { ReviewsBlock as Block } from "./payload"
import { ReviewsBlockFields } from "./types"
import { ReviewsBlockDefault } from "./ui/reviews-default"

export const Reviews: RegisteredBlockData = {
  blockType: "reviews",
  payload: Block,
  renderer: (data: ReviewsBlockFields) => {
    return <ReviewsBlockDefault fields={data} />
  },
}
