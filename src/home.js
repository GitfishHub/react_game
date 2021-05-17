import React from 'react'
import { Button, Icon, Divider } from 'antd'
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from '@ant-design/icons'
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.props.history.goBack()
          }}
          type="danger"
        >
          back
        </Button>
        <Divider dashed />
        <SmileTwoTone />
        <HeartTwoTone twoToneColor="#eb2f96" />
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      </div>
    )
  }
}
