// 用空间置换时间（利用缓存来替代计算）
export interface Cache<V = any> {
  value?: V
  timeoutId?: ReturnType<typeof setTimeout>
  time?: number
  alive?: number
}

const NOT_ACTIVE = 0  