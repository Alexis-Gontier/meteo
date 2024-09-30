import BrickOneCase from "./bricks/BrickOneCase"
import BrickTwoCase from "./bricks/BrickTwoCase"

export default function Grid() {
  return (
    <div className="m-5 grid grid-cols-2 grid-rows-6 gap-0 border border-border">
        <BrickTwoCase className={"row-span-2"}>1</BrickTwoCase>
        <BrickOneCase className={""}>2</BrickOneCase>
        <BrickOneCase className={"col-start-2"}>3</BrickOneCase>
        <BrickOneCase className={"col-start-1 row-start-3"}>4</BrickOneCase>
        <BrickOneCase className={"row-start-4"}>5</BrickOneCase>
        <BrickTwoCase className={"row-span-2 col-start-2 row-start-3"}>6</BrickTwoCase>
        <BrickTwoCase className={"row-span-2 col-start-1 row-start-5"}>7</BrickTwoCase>
        <BrickOneCase className={"col-start-2 row-start-5"}>8</BrickOneCase>
        <BrickOneCase className={"col-start-2 row-start-6"}>9</BrickOneCase>
    </div>
  )
}
