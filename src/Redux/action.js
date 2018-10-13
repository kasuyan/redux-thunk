import { IS_LOGIN} from "./action-type"

export const isLoing = status => ({
  type: IS_LOGIN,
  isLogin: status
})
