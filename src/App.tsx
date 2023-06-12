import { useState } from "react"

function App() {
  const [pickedColor, setPickedColor] = useState<string>('')
  //@ts-ignore
  const eyeDropper = new EyeDropper()

  async function handleColorPick() {
    const pickerResult = await eyeDropper.open()
    const color = pickerResult.sRGBHex

    setPickedColor(color)
    await navigator.clipboard.writeText(color)
  }

  return (
    <>
      <button onClick={handleColorPick}>Pick a color</button>
      <div>
        {pickedColor}
      </div>
    </>
  )
}

export default App
