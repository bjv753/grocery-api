import React, { useEffect, useState } from 'react'

const CSSG = () => {
  const [color1, setColor1] = useState('#ffffff')
  const [color2, setColor2] = useState('#000000')
  const [direction, setDirection] = useState('to top')
  const [display, setDisplay] = useState(null)
  const [rgbaValues, setRgbaValues] = useState(null)

  const directions = [
    'To Bottom',
    'To Left Bottom',
    'To Left',
    'To Right Bottom',
    'To Right',
    'To Right Top',
    'To Top'
  ]

  // functional definitions before functional resurection

  const mixColors = () => {
    const gradient =
      'linear-gradient(' + direction + ',' + color1 + ',' + color2 + ')'
    return gradient
  }

  const generatedCodes = () => {
    const hueValues = ` ${color1} ${color2}`
    return hueValues
  }

  useEffect(() => {
    const colorsMixed = mixColors(color1, color2, direction)
    const sixValues = generatedCodes(color1, color2, direction)

    setDisplay(colorsMixed)
    setRgbaValues(sixValues)
  }, [color1, color2, direction])

  return (
    <>
    <h1>Gradient Generator</h1>
    <div className='jsx'>
      <div className='jsx-box'>
        <div className='display-box'>
          <div
            className='display'
            style={{ background: display, height: '300px', width: '370px' }}
          />
        </div>
        <div className='rgba-box'>
          <div className='rgbaValues'>{rgbaValues}</div>
        </div>
        <div className='input-box'>
          <input
            className='colors'
            type='color'
            name='color1'
            value={color1}
            onChange={e => setColor1(e.target.value)}
          />
          <div className='select-box'>
            <select
              name='directions'
              className='select'
              value={direction}
              onChange={e => setDirection(e.target.value)}
            >
              {directions.map((direction, _index) => (
                <option key={_index}>{direction}</option>
              ))}
            </select>
          </div>
          <input
            className='colors'
            type='color'
            name='color2'
            value={color2}
            onChange={e => setColor2(e.target.value)}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default CSSG
