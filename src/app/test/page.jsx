import BrickOneCase from "../../components/meteo/bricks/BrickOneCase"
import BrickTwoCase from "../../components/meteo/bricks/BrickTwoCase"

export default function page() {
  return (
    <div className="m-5 grid grid-cols-2 grid-rows-6 gap-0 border border-border">
        <BrickTwoCase className={"row-span-2"}>1</BrickTwoCase>
        <BrickOneCase className={""}>2</BrickOneCase>
        <BrickOneCase className={"col-start-2"}>3</BrickOneCase>
        <BrickTwoCase className={"row-span-2 col-start-2 row-start-3"}>4</BrickTwoCase>
        <BrickOneCase className={"col-start-1 row-start-3"}>5</BrickOneCase>
        <BrickOneCase className={"row-start-4"}>6</BrickOneCase>
        <BrickOneCase className={"col-start-2 row-start-5"}>7</BrickOneCase>
        <BrickOneCase className={"col-start-2 row-start-6"}>8</BrickOneCase>
        <BrickTwoCase className={"row-span-2 col-start-1 row-start-5"}>9</BrickTwoCase>
    </div>
  )
}
