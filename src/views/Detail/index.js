import React, { Component, PropTypes } from 'react'

class Detail extends Component {
/*  constructor (props, context) {
    super(props, context)
  }*/
  shouldComponentUpdate (nextProps, nextState) {

  }

  componentDidMount () {

  }

  renderBanner () {

  }

  renderNowplay () {

  }

  renderComing () {

  }

  formatDate (time) {
    const date = new Date(time * 1)
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()

    return `${month}月${day}日上映`
  }

  render () {
    return (
      <div className='detail'>
        <header>
          <h2>Detail Index</h2>
        </header>
        <div className='banner'>

        </div>
      </div>
    )
  }
}

export default Detail

