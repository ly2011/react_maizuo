import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactSwipe from 'react-swipe'
// import { Link } from 'react-router'
import { withRouter, Link } from 'react-router-dom'
import * as actions from '../../redux_store/actions/home'
import homeStyle from './home.scss'

class Home extends Component {
/*  constructor (props, context) {
    super(props, context)
  }*/
  shouldComponentUpdate (nextProps, nextState) {
    if ((!this.props.banner !== nextProps.banner) || (!this.props.nowplay !== nextProps.nowplay) || (!this.coming !== nextProps.coming)) {
      return true
    } else {
      return false
    }
  }

  componentDidMount () {
    this.props.actions.fetchBanner(() => {
      this.props.actions.fetchNowPlaying()
      this.props.actions.fetchComingSoon()
    })
  }

  renderBanner () {
    const { banner } = this.props
    if (banner.length === 0) {
      return
    }
    const str = []

    banner.map((item, index) => {
      str.push(
        <div className={homeStyle['banner-swiper']} key={index}>
          <a href={item.url} target='_blank'>
            <img className={homeStyle['film-logo']} src={item.imageUrl} alt='' />
          </a>
        </div>
      )
    })

    return str
  }

  renderNowplay () {
    const { nowplay } = this.props
    if (nowplay.length === 0) {
      return
    }
    const str = []

    nowplay.map((item, index) => {
      str.push(
        <div className={homeStyle['item']} key={index}>
          <Link to={{ pathname: 'detail', search: '', state: { id: item.id }}}>
            <img className={homeStyle['film-logo']} src={item.cover.origin} alt='' />
            <div className={homeStyle['desc']}>
              <div className={homeStyle['info']}>
                <div className={homeStyle['film-name']}>
                  {item.name}
                </div>
                <div className={homeStyle['film-info']}>
                  {item.cinemaCount}家影院上映 {item.watchCount}人购票
                </div>
                <div className={homeStyle['count']}>{item.grade}</div>
              </div>
            </div>
          </Link>
        </div>
      )
    })

    return str
  }

  renderComing () {
    const { coming } = this.props

    if (coming.length === 0) {
      return
    }

    const str = []

    coming.map((item, index) => {
      str.push(
        <div className={homeStyle['coming-soon']}>
          <div className={homeStyle['item']} key={index}>
            <Link to={{ pathname: 'detail', query: { id: item.id }}}>
              <img className={homeStyle['film-logo']} src={item.cover.origin} alt='' />
              <div className={homeStyle['desc']}>
                <div className={homeStyle['info']}>
                  <div className={homeStyle['film-name']}>
                    {item.name}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )
    })
  }

  formatDate (time) {
    const date = new Date(time * 1)
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()

    return `${month}月${day}日上映`
  }

  render () {
    const bannerStr = this.renderBanner()
    const nowplayStr = this.renderNowplay()
    const comingStr = this.renderComing()
    return (
      <div className='home'>
        <div className='banner'>
          <ReactSwipe swipeOptions={{ autoplay: 3000, autoHeight: true }}>
            {bannerStr}
          </ReactSwipe>
        </div>
        {nowplayStr}
        {comingStr}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    banner: state.homeState.banner,
    nowplay: state.homeState.nowplay,
    coming: state.homeState.coming
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

// export default Home
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
