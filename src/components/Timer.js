import React from 'react'

function Time () {
  const [time, setTime] = React.useState(0)
  const [timeOn, setTimeOn] = React.useState(false)

  React.useEffect(() => {
    let interval = null

    if (timeOn) {
      interval = setInterval(() => {
        setTime(time => time + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timeOn])

  return (
    <>
    <h1>Timer</h1>
    <div id='ti-box'>
      <div id='ti'>
        <div id="span-box">
        <span>{('0' + Math.floor((time / 600000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div id="button-box">
            <button onClick={() => setTimeOn(true)}>▶</button>
            <button onClick={() => setTimeOn(false)}>❚❚</button>
            <button id='refresh'onClick={() => setTime(0)}>↻</button>
            </div>
      </div>
    </div>
    </>
  )
}

export default Time
