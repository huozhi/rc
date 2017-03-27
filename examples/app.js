import React from 'react'
import cx from 'classnames'
import {render} from 'react-dom'
import Select from 'baldr/Select'
import Dropdown from 'baldr/Dropdown'
import Button from 'baldr/Button'
import Card from 'baldr/Card'
import Tooltip from 'baldr/Tooltip'
import styles from './app.css'

const Showcase = ({title, children, className}) => (
  <div className={cx(styles.demo, className)}>
    <div className={styles.title}>{title}</div>
    {children}
  </div>
)

const App = () => (
  <div className={styles.app}>
    <div className={styles.name}>Baldr Components</div>
    <Showcase title="Select">
      <Select
        options={[
          {label: '1124123', value: 12312},
          {label: '2124123', value: 22312},
          {label: '3124123', value: 32312},
          {label: '4124123', value: 42312},
        ]}
        value={42312}
        title="demo select"
        onChange={() => {}}
      />
    </Showcase>

    <Showcase title="Dropdown">
      <Dropdown menu={<div className={styles.dropdown}>dropped</div>}>
        <Button plain>dropdown toggler</Button>
      </Dropdown>
    </Showcase>

    <Showcase title="Card">
      <Card>
        <Card.Header>Title</Card.Header>
        <Card.Block>
          Something Important
        </Card.Block>
      </Card>
    </Showcase>

    <Showcase title="Tooltip">
      <div className={styles.btnGroup}>
        <Tooltip placement="left" tooltip="This is a tip">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="top" tooltip="This is a tip">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="bottom" tooltip="This is a tip">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement="right" tooltip="This is a tip">
          <Button>Right</Button>
        </Tooltip>
      </div>
    </Showcase>
  </div>
)

render(
  <App />,
  document.getElementById('root')
)