import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { Link } from 'react-router'
import { withRouter, Link } from 'react-router-dom'
import classNames from 'classnames'
import * as actions from '../../redux_store/actions/detail'

import detailStyle from './detail.scss'

class Detail extends Component {
/*  constructor (props, context) {
    super(props, context)
  }*/
  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  componentDidMount () {
    const { id } = this.props.location.state

    this.props.actions.fetchFilmDetail(id)
  }

  formatDate (time) {
    const date = new Date(time * 1)
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()

    return `${month}月${day}日上映`
  }

  render () {
    const { detail } = this.props
    const formatDate = this.formatDate

    if (!detail) {
      return (
        <div className={detailStyle['detail']}>
          <p className={detailStyle['no-tip']}>正在查询该影片详情</p>
        </div>
      )
    }
    const _actorsName = []
    detail.actors.map((item, index) => {
      _actorsName.push(<span key={index}>{item.name}</span>)
    })

    return (
      <div className={detailStyle['detail']}>
        <div className={detailStyle['cover']}>
          <img src={detail.cover.origin} alt=''/>
        </div>
        <div className={detailStyle['desc']}>
          <div className={classNames(detailStyle['title'], detailStyle['cells__title'])}>影片简介</div>
          <div className={classNames(detailStyle['info'], detailStyle['cells'])}>
            <div className={detailStyle['cell']}>
              <div className={detailStyle['cell__hd']}>
                <div className={detailStyle['label']}>导演：</div>
              </div>
              <div className={detailStyle['cell__bd']}>
                {detail.director}
              </div>
            </div>
            <div className={detailStyle['cell']}>
              <div className={detailStyle['cell__hd']}>
                <div className={detailStyle['label']}>主演：</div>
              </div>
              <div className={detailStyle['cell__bd']}>
                {_actorsName}
              </div>
            </div>
            <div className={detailStyle['cell']}>
              <div className={detailStyle['cell__hd']}>
                <div className={detailStyle['label']}>地区语言：</div>
              </div>
              <div className={detailStyle['cell__bd']}>
                {detail.nation}({detail.language})
              </div>
            </div>
            <div className={detailStyle['cell']}>
              <div className={detailStyle['cell__hd']}>
                <div className={detailStyle['label']}>类型：</div>
              </div>
              <div className={detailStyle['cell__bd']}>
                {detail.category}
              </div>
            </div>
            <div className={detailStyle['cell']}>
              <div className={detailStyle['cell__hd']}>
                <div className={detailStyle['label']}>上映日期：</div>
              </div>
              <div className={detailStyle['cell__bd']}>
                {formatDate(detail.premiereAt)}
              </div>
            </div>
            <div className={detailStyle['cell']}>
              <div className={detailStyle['cell__bd']}>
                {detail.synopsis}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    detail: state.detailState.detail
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

// export default Detail
// export default connect(mapStateToProps, mapDispatchToProps)(Detail)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail))

