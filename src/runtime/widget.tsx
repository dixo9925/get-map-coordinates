import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'

const Widget = (props: AllWidgetProps<any>) => {
  const { useState } = React
  return <div className="widget_starter jimu-widget">This is your starter widget!</div>
}

export default Widget
