// 1、 寻找数组的中心下标
// 给你一个整数数组 nums，请编写一个能够返回数组 “中心下标” 的方法。
// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
// 如果数组不存在中心下标，返回 -1 。如果数组有多个中心下标，应该返回最靠近左边的那一个。
// 注意：中心下标可能出现在数组的两端。
var pivotIndex = (nums) => {
  if (nums.length < 1) return -1
  let length = nums.length
  let left, all
  left = 0
  all = eval(nums.join('+'))
  for (let i = 0; i < length; i++) {
    if (left == all - nums[i] - left) {
      return i
    } else {
      left += nums[i]
    }
  }
  return -1
}
// const pivotIndex = (arr) => {
//   let newArray = []
//   arr.forEach((element, index) => {
//     const left = arr.slice(0, index)
//     const right = arr.slice(index + 1, arr.length)
//     const sumLeft = left.length ? eval(left.join('+')) : 0
//     const sumRight = right.length ? eval(right.join('+')) : 0
//     if (sumLeft === sumRight) {
//       newArray.push(`${index}`)
//     }
//   })
//   return newArray[0] ? newArray[0] : -1
// }
const index = pivotIndex([1, 1, 1])
console.log(index)
// 2、盛最多水的容器
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 说明：你不能倾斜容器。
const maxArea = (height) => {
  let i = 0,
    j = height.length - 1,
    max = 0
  while (i < j) {
    max = Math.max(
      max,
      (j - i) * (height[i] < height[j] ? height[i++] : height[j--]),
    )
  }
  return max
}
// const maxArea = (arr) => {
//     let allWay = []
//     arr.forEach((element, index) => {
//       let newWay = JSON.parse(JSON.stringify(arr))
//       newWay.splice(index, 1, 0)
//       newWay.forEach((item, index_t) => {
//         const Y = element - item > 0 ? item : element
//         const X = Math.abs(index - index_t)
//         allWay.push(X * Y)
//       })
//     })
//     return allWay.sort((a, b) => b - a)[0]

const max = maxArea([4, 3, 2, 1, 4])
console.log(max)
